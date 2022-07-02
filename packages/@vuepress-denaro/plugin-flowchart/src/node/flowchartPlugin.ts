import { pluginNamePrefix } from '@vuepress-denaro/core'
import type { Plugin, PluginObject } from '@vuepress/core'
import { path } from '@vuepress/utils'
import type { FlowchartOptions } from '../shared'
import { mdPluginFlowchart } from './md-plugin-flowchart'

export const flowchartPlugin = ({
  openMarker = '@flowstart',
  closeMarker = '@flowend',
}: FlowchartOptions = {}): Plugin => {
  const pluginObj: PluginObject = {
    name: `${pluginNamePrefix}flowchart`,

    extendsMarkdown: (md) => {
      const options = { openMarker, closeMarker }
      md.use(mdPluginFlowchart, options)
    },

    clientConfigFile: path.resolve(__dirname, '../client/config.js'),
  }

  return pluginObj
}
