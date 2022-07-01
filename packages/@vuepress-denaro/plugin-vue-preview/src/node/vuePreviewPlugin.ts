import { pluginNamePrefix } from '@vuepress-denaro/core'
import type { Plugin, PluginObject } from '@vuepress/core'
import { path } from '@vuepress/utils'
import type { VuePreviewOptions } from '../shared'
import { mdPluginVuePreview } from './md-plugin-vue-preview'

export const vuePreviewPlugin = ({
  rootPath,
}: VuePreviewOptions = {}): Plugin => {
  const pluginObj: PluginObject = {
    name: `${pluginNamePrefix}vue-preview`,

    extendsMarkdown(md) {
      md.use(mdPluginVuePreview, { rootPath })
    },

    clientConfigFile: path.resolve(__dirname, '../client/config.js'),
  }

  return pluginObj
}
