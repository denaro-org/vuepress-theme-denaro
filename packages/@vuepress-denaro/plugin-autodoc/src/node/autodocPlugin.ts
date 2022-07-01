import { pluginNamePrefix } from '@vuepress-denaro/core'
import type { Plugin, PluginObject } from '@vuepress/core'
import { path } from '@vuepress/utils'
import type { AutodocOptions } from '../shared'
import { mdPluginAutodoc } from './md-plugin-autodoc'

export const autodocPlugin = ({ rootPath }: AutodocOptions = {}): Plugin => {
  const pluginObj: PluginObject = {
    name: `${pluginNamePrefix}autodoc`,

    extendsMarkdown(md) {
      md.set({ breaks: true })
      md.use(mdPluginAutodoc, { rootPath })
    },

    clientConfigFile: path.resolve(__dirname, '../client/config.js'),
  }

  return pluginObj
}
