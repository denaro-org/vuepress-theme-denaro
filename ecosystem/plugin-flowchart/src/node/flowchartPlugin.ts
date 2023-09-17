import type { PluginFunction, PluginObject } from '@vuepress/core'
import type { FlowchartOptions } from '../shared/index.js'
import { mdPluginFlowchart } from './md-plugin-flowchart/index.js'
import { CLIENT_CONFIG_FILE, PLUGIN_NAME } from './utils.js'

export const flowchartPlugin =
  (options: FlowchartOptions = {}): PluginFunction =>
  (app) => {
    const { openMarker = '@flowstart', closeMarker = '@flowend' } = options

    const pluginObj: PluginObject = {
      name: PLUGIN_NAME,

      extendsMarkdown: (md) => {
        const options = {
          openMarker,
          closeMarker,
        }
        md.use(mdPluginFlowchart, options)
      },

      clientConfigFile: CLIENT_CONFIG_FILE,
    }

    return pluginObj
  }
