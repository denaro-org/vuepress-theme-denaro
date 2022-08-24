import { pluginNamePrefix } from '@vuepress-denaro/core'
import type { Plugin, PluginObject } from '@vuepress/core'
import { getDirname, path } from '@vuepress/utils'
import type { AutodocOptions } from '../shared'
import { mdPluginAutodoc } from './md-plugin-autodoc'

const __dirname = getDirname(import.meta.url)

export const autodocPlugin = ({ rootPath }: AutodocOptions = {}): Plugin => {
  const pluginObj: PluginObject = {
    name: `${pluginNamePrefix}autodoc`,

    extendsMarkdown(md) {
      md.set({ breaks: true })
      md.use(mdPluginAutodoc, { rootPath })
    },

    clientConfigFile: path.resolve(__dirname, '../client/config.js'),

    alias: {
      // workaround for https://github.com/vitejs/vite/issues/7621
      [`${pluginNamePrefix}autodoc/client`]: path.resolve(
        __dirname,
        '../client/index.js'
      ),
    },
  }

  return pluginObj
}
