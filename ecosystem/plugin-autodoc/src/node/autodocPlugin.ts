import type { PluginFunction, PluginObject } from '@vuepress/core'
import type { AutodocOptions } from '../shared/index.js'
import { mdPluginAutodoc } from './md-plugin-autodoc/index.js'
import { CLIENT_CONFIG_FILE, PLUGIN_NAME } from './utils.js'

export const autodocPlugin =
  (options: AutodocOptions): PluginFunction =>
  (app) => {
    const { rootPath } = options

    const pluginObj: PluginObject = {
      name: PLUGIN_NAME,

      extendsMarkdown(md) {
        md.set({ breaks: true })
        md.use(mdPluginAutodoc, { rootPath })
      },

      clientConfigFile: CLIENT_CONFIG_FILE,
    }

    return pluginObj
  }
