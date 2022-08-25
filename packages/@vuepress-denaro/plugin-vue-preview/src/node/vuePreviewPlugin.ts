import { pluginNamePrefix } from '@vuepress-denaro/core'
import type { Plugin, PluginObject } from '@vuepress/core'
import { getDirname, path } from '@vuepress/utils'
import type { VuePreviewOptions } from '../shared/index.js'
import { mdPluginVuePreview } from './md-plugin-vue-preview/index.js'

const __dirname = getDirname(import.meta.url)

export const vuePreviewPlugin = ({
  rootPath,
}: VuePreviewOptions = {}): Plugin => {
  const pluginObj: PluginObject = {
    name: `${pluginNamePrefix}vue-preview`,

    extendsMarkdown(md) {
      md.use(mdPluginVuePreview, { rootPath })
    },

    clientConfigFile: path.resolve(__dirname, '../client/config.js'),

    alias: {
      // workaround for https://github.com/vitejs/vite/issues/7621
      [`${pluginNamePrefix}vue-preview/client`]: path.resolve(
        __dirname,
        '../client/index.js'
      ),
    },
  }

  return pluginObj
}
