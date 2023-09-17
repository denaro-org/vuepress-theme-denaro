import type { PluginFunction, PluginObject } from '@vuepress/core'
import type { OneClickCopyOptions } from '../shared/index.js'
import { CLIENT_CONFIG_FILE, PLUGIN_NAME } from './utils.js'

export const oneClickCopyPlugin =
  (options: OneClickCopyOptions = {}): PluginFunction =>
  (app) => {
    const {
      copySelector = [
        'div[class*="language-"] pre',
        'div[class*="aside-code"] aside',
      ],
      copyMessage = 'Copied successfully!',
      toolTipMessage = 'Copy to clipboard',
      duration = 3000,
    } = options

    const pluginObj: PluginObject = {
      name: PLUGIN_NAME,

      define: {
        __ONE_CLICK_COPY_COPY_SELECTOR__: copySelector, // Need to add one-click-copy class wildcard.
        __ONE_CLICK_COPY_COPY_MESSAGE__: copyMessage, // Prompt for successful copy.
        __ONE_CLICK_COPY_TOOL_TIP_MESSAGE__: toolTipMessage, // Click the title of the copy button.
        __ONE_CLICK_COPY_DURATION__: duration, // Successful prompt disappearing time.
      },

      clientConfigFile: CLIENT_CONFIG_FILE,
    }

    return pluginObj
  }
