import { pluginNamePrefix } from '@vuepress-denaro/core'
import type { Plugin, PluginObject } from '@vuepress/core'
import { getDirname, path } from '@vuepress/utils'
import type { OneClickCopyOptions } from '../shared'

const __dirname = getDirname(import.meta.url)

export const oneClickCopyPlugin = ({
  copySelector = [
    'div[class*="language-"] pre',
    'div[class*="aside-code"] aside',
  ],
  copyMessage = 'Copied successfully!',
  toolTipMessage = 'Copy to clipboard',
  duration = 3000,
}: OneClickCopyOptions = {}): Plugin => {
  const pluginObj: PluginObject = {
    name: `${pluginNamePrefix}one-click-copy`,

    define: {
      __ONE_CLICK_COPY_COPY_SELECTOR__: copySelector, // Need to add one-click-copy class wildcard.
      __ONE_CLICK_COPY_COPY_MESSAGE__: copyMessage, // Prompt for successful copy.
      __ONE_CLICK_COPY_TOOL_TIP_MESSAGE__: toolTipMessage, // Click the title of the copy button.
      __ONE_CLICK_COPY_DURATION__: duration, // Successful prompt disappearing time.
    },

    clientConfigFile: path.resolve(__dirname, '../client/config.js'),

    alias: {
      // workaround for https://github.com/vitejs/vite/issues/7621
      [`${pluginNamePrefix}one-click-copy/client`]: path.resolve(
        __dirname,
        '../client/index.js'
      ),
    },
  }

  return pluginObj
}
