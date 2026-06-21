import { existsSync } from 'node:fs'
import { resolve } from 'node:path'

const duplicateAssetsRoot = resolve('app/assets')

if (existsSync(duplicateAssetsRoot)) {
  console.error(
    'Duplicate assets root detected: Shinso_Gakuen/app/assets. Keep static assets only in Shinso_Gakuen/assets.',
  )
  process.exit(1)
}
