import type { PluginFunction, PluginObject } from '@vuepress/core'
import type { DynamicTitlePluginOptions } from '../shared/index.js'
import { CLIENT_CONFIG_FILE, PLUGIN_NAME } from './utils.js'

export const dynamicTitlePlugin =
  (options: DynamicTitlePluginOptions): PluginFunction =>
  (app) => {
    const {
      showIcon = '',
      showText = '(/≧▽≦/)咦！又好了！',
      hideIcon = '',
      hideText = '(●—●)喔哟, 崩溃啦！',
      recoverTime = 2000,
    } = options

    const pluginObj: PluginObject = {
      name: PLUGIN_NAME,

      define: {
        __DYNAMIC_TITLE_SHOW_ICON__: showIcon, // The icon displayed when the document is in the current tab.
        __DYNAMIC_TITLE_SHOW_TEXT__: showText, // The title displayed when the document is in the current tab.
        __DYNAMIC_TITLE_HIDE_ICON__: hideIcon, // The icon displayed when the document is not in the current tab.
        __DYNAMIC_TITLE_HIDE_TEXT__: hideText, // The title displayed when the document is not in the current tab.
        __DYNAMIC_TITLE_RECOVER_TIME__: recoverTime, // The time to recover the title after the tab is changed.
      },

      clientConfigFile: CLIENT_CONFIG_FILE,
    }

    return pluginObj
  }
