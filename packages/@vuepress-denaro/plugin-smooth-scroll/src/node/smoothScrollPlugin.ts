import { pluginNamePrefix } from '@vuepress-denaro/core'
import { type Plugin, type PluginObject } from '@vuepress/core'
import { path } from '@vuepress/utils'

export const smoothScrollPlugin = (): Plugin => {
  const pluginObj: PluginObject = {
    name: `${pluginNamePrefix}smooth-scroll`,

    clientConfigFile: path.resolve(__dirname, '../client/config.js'),
  }

  return pluginObj
}
