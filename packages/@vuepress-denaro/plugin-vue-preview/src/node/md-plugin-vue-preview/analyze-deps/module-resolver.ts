import { fs, path } from '@vuepress/utils'
import resolve from 'enhanced-resolve'
import slash from 'slash2'

const DEFAULT_EXT = ['.tsx', '.jsx', '.js', '.ts', '.vue']

export function getModuleResolvePath({
  basePath,
  sourcePath,
  extensions = DEFAULT_EXT,
  silent = null,
}): string | null {
  try {
    return slash(
      resolve.create.sync({
        extensions,
        symlinks: false,
        mainFiles: ['index', 'package.json'],
      })(
        fs.statSync(basePath).isDirectory()
          ? basePath
          : path.parse(basePath).dir,
        sourcePath
      )
    )
  } catch (err) {
    if (!silent) {
      console.error(
        `[vuepress]: cannot resolve module ${sourcePath} from ${basePath}`
      )
    }

    throw err
  }
}
