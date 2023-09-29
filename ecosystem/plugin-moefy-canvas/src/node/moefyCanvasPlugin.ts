import type { PluginFunction, PluginObject } from '@vuepress/core'
import { MoefyCanvasTheme } from '../shared/index.js'
import type { MoefyCanvasOptions } from '../shared/index.js'
import { CLIENT_CONFIG_FILE, PLUGIN_NAME } from './utils.js'

export const moefyCanvasPlugin =
  (options: MoefyCanvasOptions): PluginFunction =>
  (app) => {
    const {
      theme = MoefyCanvasTheme.Sparkler,
      themeConfig = {},
      canvasOptions = {},
    } = options

    const pluginObj: PluginObject = {
      name: PLUGIN_NAME,

      define: {
        __MOEFY_CANVAS_THEME__: theme,
        __MOEFY_CANVAS_THEME_CONFIG__: themeConfig,
        __MOEFY_CANVAS_OPTIONS__: canvasOptions,
      },

      clientConfigFile: CLIENT_CONFIG_FILE,
    }

    return pluginObj
  }
