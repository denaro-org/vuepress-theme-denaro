import { pluginNamePrefix } from '@vuepress-denaro/core'
import type { Plugin, PluginObject } from '@vuepress/core'
import { getDirname, path } from '@vuepress/utils'
import type { MoefyCanvasOptions } from '../shared'
import { MoefyCanvasTheme } from '../shared'

const __dirname = getDirname(import.meta.url)

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

    alias: {
      // workaround for https://github.com/vitejs/vite/issues/7621
      [`${pluginNamePrefix}moefy-canvas/client`]: path.resolve(
        __dirname,
        '../client/index.js'
      ),
    },
  }

  return pluginObj
}
