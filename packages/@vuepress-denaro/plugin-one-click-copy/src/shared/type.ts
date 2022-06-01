/**
 * Options for @vuepress-denaro/vuepress-plugin-one-click-copy
 */
export interface OneClickCopyOptions {
  /**
   * Need to add one-click-copy class wildcard.
   *
   * @default '[div[class*="language-"] pre, div[class*="aside-code"] aside]'
   */
  copySelector?: string[] | string
  /**
   * Prompt for successful copy.
   *
   * @default 'Copied successfully!'
   */
  copyMessage?: string
  /**
   * Click the title of the copy button.
   *
   * @default 'Copy to clipboard'
   */
  toolTipMessage?: string
  /**
   * Successful prompt disappearing time.
   *
   * @default 3000
   */
  duration?: number
}
