import { useDenaroPlugin } from '@vuepress-denaro/core'
import type { PluginFunction } from '@vuepress-denaro/core'
import { DIR_NAME, PLUGIN_NAME } from './utils.js'

export const smoothScrollPlugin = (): PluginFunction =>
  useDenaroPlugin({
    name: PLUGIN_NAME,
    dirname: DIR_NAME,
    useClientConfig: true,
  })
