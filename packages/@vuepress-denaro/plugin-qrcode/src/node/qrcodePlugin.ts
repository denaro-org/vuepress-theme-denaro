import { pluginNamePrefix } from '@vuepress-denaro/core'
import type { Plugin, PluginObject } from '@vuepress/core'
import { path } from '@vuepress/utils'
import type { QrcodePluginOptions } from '../shared'

export const qrcodePlugin = ({
  labelText = 'Mobile Read',
  size = 'small',
  channel = false,
}: QrcodePluginOptions = {}): Plugin => {
  const pluginObj: PluginObject = {
    name: `${pluginNamePrefix}qrcode`,

    define: {
      __QRCODE_LABEL_TEXT__: labelText, // Click the button to pop up the QR code, the text of the button.
      __QRCODE_SIZE__: size, // Set the size of the QR code.
      __QRCODE_CHANNEL__: channel, // Whether to add a parameter at the end of the QR code address to mark that the access comes from the QR code, so as to facilitate statistics on the access effect of mobile phone scanning.
    },

    clientConfigFile: path.resolve(__dirname, '../client/config.js'),
  }

  return pluginObj
}
