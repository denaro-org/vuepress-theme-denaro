import type { PluginFunction } from '@vuepress-denaro/core'
import { useDenaroPlugin } from '@vuepress-denaro/core'
import type { OneClickCopyOptions } from '../shared/index.js'
import { DIR_NAME, PLUGIN_NAME } from './utils.js'

export const oneClickCopyPlugin = (
  options?: OneClickCopyOptions,
): PluginFunction =>
  useDenaroPlugin(() => {
    const {
      copySelector = [
        'div[class*="language-"] pre',
        'div[class*="aside-code"] aside',
      ],
      copyMessage = 'Copied successfully!',
      toolTipMessage = 'Copy to clipboard',
      duration = 3000,
    } = options || {}

    return {
      name: PLUGIN_NAME,
      dirname: DIR_NAME,
      useClientConfig: true,

      define: {
        __ONE_CLICK_COPY_COPY_SELECTOR__: copySelector, // Need to add one-click-copy class wildcard.
        __ONE_CLICK_COPY_COPY_MESSAGE__: copyMessage, // Prompt for successful copy.
        __ONE_CLICK_COPY_TOOL_TIP_MESSAGE__: toolTipMessage, // Click the title of the copy button.
        __ONE_CLICK_COPY_DURATION__: duration, // Successful prompt disappearing time.
      },
    }
  })
