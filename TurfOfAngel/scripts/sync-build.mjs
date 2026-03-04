import { cpSync, existsSync, mkdirSync, readdirSync, rmSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const scriptDir = dirname(fileURLToPath(import.meta.url))
const projectRoot = resolve(scriptDir, '..')
const distDir = join(projectRoot, 'dist')

if (!existsSync(distDir)) {
  throw new Error(`Build output was not found: ${distDir}`)
}

for (const entry of ['index.html', 'privacy-policy.html', 'assets', 'common', 'images']) {
  rmSync(join(projectRoot, entry), { force: true, recursive: true })
}

for (const entry of readdirSync(distDir)) {
  const sourcePath = join(distDir, entry)
  const targetName = entry === 'index.html' ? 'privacy-policy.html' : entry
  cpSync(sourcePath, join(projectRoot, targetName), { recursive: true })
}

mkdirSync(join(projectRoot, 'dist'), { recursive: true })
