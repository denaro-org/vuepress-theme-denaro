import { pluginNamePrefix } from '@vuepress-denaro/core'
import { type Plugin, type PluginObject } from '@vuepress/core'
import { path } from '@vuepress/utils'
import { mdPluginAutodoc } from './md-plugin-autodoc'

export const autodocPlugin = (): Plugin => {
  const pluginObj: PluginObject = {
    name: `${pluginNamePrefix}autodoc`,

    extendsMarkdown(md) {
      md.set({ breaks: true })
      md.use(mdPluginAutodoc)
    },

    clientConfigFile: path.resolve(__dirname, '../client/config.js'),
  }

  return pluginObj
}
