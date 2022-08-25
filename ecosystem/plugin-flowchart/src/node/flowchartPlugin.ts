import { pluginNamePrefix } from '@vuepress-denaro/core'
import type { Plugin, PluginObject } from '@vuepress/core'
import { getDirname, path } from '@vuepress/utils'
import type { FlowchartOptions } from '../shared/index.js'
import { mdPluginFlowchart } from './md-plugin-flowchart/index.js'

const __dirname = getDirname(import.meta.url)

export const flowchartPlugin = ({
  openMarker = '@flowstart',
  closeMarker = '@flowend',
}: FlowchartOptions = {}): Plugin => {
  const pluginObj: PluginObject = {
    name: `${pluginNamePrefix}flowchart`,

    extendsMarkdown: (md) => {
      const options = {
        openMarker,
        closeMarker,
      }
      md.use(mdPluginFlowchart, options)
    },

    clientConfigFile: path.resolve(__dirname, '../client/config.js'),

    alias: {
      // workaround for https://github.com/vitejs/vite/issues/7621
      [`${pluginNamePrefix}flowchart/client`]: path.resolve(
        __dirname,
        '../client/index.js'
      ),
    },
  }

  return pluginObj
}
