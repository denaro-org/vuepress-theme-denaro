import { pluginNamePrefix } from '@vuepress-denaro/core'
import type { Plugin, PluginObject } from '@vuepress/core'
import { path } from '@vuepress/utils'
import { MoefyCanvasTheme } from '../shared'
import type { MoefyCanvasOptions } from '../shared'

export const moefyCanvasPlugin = (
  { theme, themeConfig = {}, canvasOptions = {} }: MoefyCanvasOptions = {
    theme: MoefyCanvasTheme.Sparkler,
  }
): Plugin => {
  const pluginObj: PluginObject = {
    name: `${pluginNamePrefix}moefy-canvas`,

    define: {
      __MOEFY_CANVAS_THEME__: theme,
      __MOEFY_CANVAS_THEME_CONFIG__: themeConfig,
      __MOEFY_CANVAS_OPTIONS__: canvasOptions,
    },

    clientConfigFile: path.resolve(__dirname, '../client/config.js'),
  }

  return pluginObj
}
