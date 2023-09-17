import { globby, path } from '@vuepress/utils'
import type { RegisterComponentsPluginOptions } from '../../shared/index.js'

export const getComponentsFromDir = async ({
  componentsDir,
  componentsPatterns,
  getComponentName,
}: Required<RegisterComponentsPluginOptions>): Promise<
  Record<string, string>
> => {
  if (!componentsDir) {
    return {}
  }

  // get all matched component files
  const componentsDirFiles = await globby(componentsPatterns, {
    cwd: componentsDir,
  })

  // transform files to name => filepath map
  return Object.fromEntries(
    componentsDirFiles.map((filename) => [
      getComponentName(filename),
      path.resolve(componentsDir, filename),
    ]),
  )
}
