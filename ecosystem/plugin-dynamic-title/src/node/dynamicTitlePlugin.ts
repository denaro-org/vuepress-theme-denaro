import { pluginNamePrefix } from '@vuepress-denaro/core'
import type { Plugin, PluginObject } from '@vuepress/core'
import { getDirname, path } from '@vuepress/utils'
import type { DynamicTitlePluginOptions } from '../shared/index.js'

const __dirname = getDirname(import.meta.url)

export const dynamicTitlePlugin = ({
  showIcon = '',
  showText = '(/≧▽≦/)咦！又好了！',
  hideIcon = '',
  hideText = '(●—●)喔哟, 崩溃啦！',
  recoverTime = 2000,
}: DynamicTitlePluginOptions = {}): Plugin => {
  const pluginObj: PluginObject = {
    name: `${pluginNamePrefix}dynamic-title`,

    define: {
      __DYNAMIC_TITLE_SHOW_ICON__: showIcon, // The icon displayed when the document is in the current tab.
      __DYNAMIC_TITLE_SHOW_TEXT__: showText, // The title displayed when the document is in the current tab.
      __DYNAMIC_TITLE_HIDE_ICON__: hideIcon, // The icon displayed when the document is not in the current tab.
      __DYNAMIC_TITLE_HIDE_TEXT__: hideText, // The title displayed when the document is not in the current tab.
      __DYNAMIC_TITLE_RECOVER_TIME__: recoverTime, // The time to recover the title after the tab is changed.
    },

    clientConfigFile: path.resolve(__dirname, '../client/config.js'),

    alias: {
      // workaround for https://github.com/vitejs/vite/issues/7621
      [`${pluginNamePrefix}dynamic-title/client`]: path.resolve(
        __dirname,
        '../client/index.js'
      ),
    },
  }

  return pluginObj
}
