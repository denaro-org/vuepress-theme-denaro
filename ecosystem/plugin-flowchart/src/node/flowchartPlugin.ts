import type { PluginFunction } from '@vuepress-denaro/core'
import { useDenaroPlugin } from '@vuepress-denaro/core'
import type { FlowchartOptions } from '../shared/index.js'
import { mdPluginFlowchart } from './md-plugin-flowchart/index.js'
import { DIR_NAME, PLUGIN_NAME } from './utils.js'

export const flowchartPlugin = (options?: FlowchartOptions): PluginFunction =>
  useDenaroPlugin(() => {
    const { openMarker = '@flowstart', closeMarker = '@flowend' } =
      options || {}

    return {
      name: PLUGIN_NAME,
      dirname: DIR_NAME,
      useClientConfig: true,

      extendsMarkdown: (md) => {
        const options = {
          openMarker,
          closeMarker,
        }
        md.use(mdPluginFlowchart, options)
      },
    }
  })
