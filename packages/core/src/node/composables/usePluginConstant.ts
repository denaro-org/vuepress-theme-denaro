import { pluginNamePrefix } from '@vuepress-denaro/core'
import { ensureEndingSlash, path } from '../utils/index.js'

interface PluginConstant {
  PLUGIN_NAME: string
  CLIENT_FOLDER?: string
  CLIENT_CONFIG_FILE?: string
}

export const usePluginConstant = (
  pluginName: string,
  dirname?: string,
): PluginConstant => {
  const CLIENT_FOLDER = dirname
    ? ensureEndingSlash(path.resolve(dirname, '../client'))
    : ''

  return {
    PLUGIN_NAME: `${pluginNamePrefix}${pluginName}`,
    ...(dirname && {
      CLIENT_FOLDER,
      CLIENT_CONFIG_FILE: `${CLIENT_FOLDER}config.js`,
    }),
  }
}
