import type { PluginFunction } from '@vuepress-denaro/core'
import { useDenaroPlugin } from '@vuepress-denaro/core'
import type { DynamicTitlePluginOptions } from '../shared/index.js'
import { DIR_NAME, PLUGIN_NAME } from './utils.js'

export const dynamicTitlePlugin = (
  options?: DynamicTitlePluginOptions,
): PluginFunction =>
  useDenaroPlugin(() => {
    const {
      showIcon = '',
      showText = '(/≧▽≦/)咦！又好了！',
      hideIcon = '',
      hideText = '(●—●)喔哟, 崩溃啦！',
      recoverTime = 2000,
    } = options || {}

    return {
      name: PLUGIN_NAME,
      dirname: DIR_NAME,
      useClientConfig: true,

      define: {
        __DYNAMIC_TITLE_SHOW_ICON__: showIcon, // The icon displayed when the document is in the current tab.
        __DYNAMIC_TITLE_SHOW_TEXT__: showText, // The title displayed when the document is in the current tab.
        __DYNAMIC_TITLE_HIDE_ICON__: hideIcon, // The icon displayed when the document is not in the current tab.
        __DYNAMIC_TITLE_HIDE_TEXT__: hideText, // The title displayed when the document is not in the current tab.
        __DYNAMIC_TITLE_RECOVER_TIME__: recoverTime, // The time to recover the title after the tab is changed.
      },
    }
  })
