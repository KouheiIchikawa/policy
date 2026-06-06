import { createReadStream, existsSync, statSync } from 'node:fs'
import { createServer } from 'node:http'
import { extname, join, normalize, resolve, sep } from 'node:path'

const root = resolve(process.cwd())
const prefix = '/policy'
const host = '127.0.0.1'
const preferredPort = Number(process.env.PORT ?? 5173)

const types = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
}

function send(res, status, body, type = 'text/plain; charset=utf-8') {
  res.writeHead(status, { 'content-type': type })
  res.end(body)
}

function publicPath(url = '/') {
  const parsed = new URL(url, `http://${host}`)
  let pathname = decodeURIComponent(parsed.pathname)
  if (pathname.startsWith(prefix)) {
    pathname = pathname.slice(prefix.length) || '/'
  }
  const normalized = normalize(pathname).replace(/^(\.\.[/\\])+/, '')
  const absolute = resolve(join(root, normalized))
  if (absolute !== root && !absolute.startsWith(root + sep)) return null
  return absolute
}

function resolveFile(absolute) {
  if (!absolute || !existsSync(absolute)) return null
  const stat = statSync(absolute)
  if (stat.isFile()) return absolute
  if (!stat.isDirectory()) return null

  for (const name of ['index.html', 'privacy-policy.html', 'privacy.html']) {
    const candidate = join(absolute, name)
    if (existsSync(candidate) && statSync(candidate).isFile()) return candidate
  }
  return null
}

function listen(port) {
  const server = createServer((req, res) => {
    const file = resolveFile(publicPath(req.url))
    if (!file) return send(res, 404, 'Not found')

    res.writeHead(200, {
      'content-type': types[extname(file).toLowerCase()] ?? 'application/octet-stream',
    })
    createReadStream(file).pipe(res)
  })

  server.once('error', (error) => {
    if (error.code === 'EADDRINUSE' && port < preferredPort + 20) {
      listen(port + 1)
      return
    }
    throw error
  })

  server.listen(port, host, () => {
    console.log(`Local: http://${host}:${port}${prefix}/`)
    console.log(`Local alias: http://${host}:${port}/`)
  })
}

listen(preferredPort)
