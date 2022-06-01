import { pluginNamePrefix } from '@vuepress-denaro/core'
import { type Plugin, type PluginObject } from '@vuepress/core'
import { path } from '@vuepress/utils'

export const baiduAutopushPlugin = (): Plugin => {
  const pluginObj: PluginObject = {
    name: `${pluginNamePrefix}baidu-autopush`,

    clientConfigFile: path.resolve(__dirname, '../client/config.js'),
  }

  return pluginObj
}
