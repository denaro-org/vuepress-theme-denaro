/**
 * Options for @vuepress-denaro/vuepress-plugin-dynamic-title
 */
export interface DynamicTitlePluginOptions {
  /**
   * The icon displayed when the document is in the current tab.
   *
   * @default ''
   */
  showIcon?: string
  /**
   * The title displayed when the document is in the current tab.
   *
   * @default '(/≧▽≦/)咦！又好了！'
   */
  showText?: string
  /**
   * The icon displayed when the document is not in the current tab.
   *
   * @default ''
   */
  hideIcon?: string
  /**
   * The title displayed when the document is not in the current tab.
   *
   * @default '(●—●)喔哟, 崩溃啦！'
   */
  hideText?: string
  /**
   * The time to recover the title after the tab is changed.
   *
   * @default 2000
   */
  recoverTime?: number
}
