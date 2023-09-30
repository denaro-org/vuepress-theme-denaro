import type { PluginFunction } from '@vuepress-denaro/core'
import { useDenaroPlugin } from '@vuepress-denaro/core'
import { MoefyCanvasTheme } from '../shared/index.js'
import type { MoefyCanvasOptions } from '../shared/index.js'
import { DIR_NAME, PLUGIN_NAME } from './utils.js'

export const moefyCanvasPlugin = (
  options?: MoefyCanvasOptions,
): PluginFunction =>
  useDenaroPlugin(() => {
    const {
      theme = MoefyCanvasTheme.Sparkler,
      themeConfig = {},
      canvasOptions = {},
    } = options || {}

    return {
      name: PLUGIN_NAME,
      dirname: DIR_NAME,
      useClientConfig: true,

      define: {
        __MOEFY_CANVAS_THEME__: theme,
        __MOEFY_CANVAS_THEME_CONFIG__: themeConfig,
        __MOEFY_CANVAS_OPTIONS__: canvasOptions,
      },
    }
  })
