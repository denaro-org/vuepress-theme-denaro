import { pluginNamePrefix } from '@vuepress-denaro/core'
import { type Plugin, type PluginObject } from '@vuepress/core'
import { path } from '@vuepress/utils'
import { mdPluginVuePreview } from './md-plugin-vue-preview'

export const vuePreviewPlugin = (): Plugin => {
  const pluginObj: PluginObject = {
    name: `${pluginNamePrefix}vue-preview`,

    extendsMarkdown(md) {
      md.use(mdPluginVuePreview)
    },

    clientConfigFile: path.resolve(__dirname, '../client/config.js'),
  }

  return pluginObj
}
