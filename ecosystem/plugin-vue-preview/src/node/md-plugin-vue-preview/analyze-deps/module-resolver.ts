import { fs, path } from '@vuepress/utils'
import resolve from 'enhanced-resolve'
import slash from 'slash2'

const DEFAULT_EXT = ['.tsx', '.jsx', '.js', '.ts']

export function getModuleResolvePath({
  basePath,
  sourcePath,
  extensions = DEFAULT_EXT,
  silent = null,
}): string | null {
  try {
    const absolutePath = resolve.create.sync({
      extensions,
      symlinks: false,
      exportsFields: ['exports.import'],
      mainFiles: ['index', 'package.json'],
    })(
      fs.statSync(basePath).isDirectory() ? basePath : path.parse(basePath).dir,
      sourcePath,
    )

    return slash(absolutePath)
  } catch (err) {
    if (!silent) {
      console.error(
        `[vuepress]: cannot resolve module ${sourcePath} from ${basePath}`,
      )
    }

    throw err
  }
}
