/**
 * Options for @vuepress-denaro/vuepress-plugin-qrcode
 */
export interface QrcodePluginOptions {
  /**
   * Click the button to pop up the QR code, the text of the button.
   *
   * @default 'Mobile Read'
   */
  labelText?: string
  /**
   * Set the size of the QR code.
   *
   * @default 'small'
   */
  size?: string
  /**
   * Whether to add a parameter at the end of the QR code address to mark that the access comes from the QR code, so as to facilitate statistics on the access effect of mobile phone scanning.
   *
   * @default 'false'
   */
  channel?: boolean
}

export type Modules = boolean[][]
export type Level = 'L' | 'M' | 'Q' | 'H'
