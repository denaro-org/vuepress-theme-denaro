export interface IRewardOption {
  /**
   * QR code image text.
   *
   * @default '微信,支付宝'
   */
  text: string
  /**
   * QR code image url.
   *
   * @default '/WeChat.png,/Alipay.png'
   */
  url: string
}

/**
 * Options for @vuepress-denaro/vuepress-plugin-reward
 */
export interface RewardPluginOptions {
  /**
   * reward button text.
   *
   * @default '打赏'
   */
  btnText?: string
  /**
   * First reward text.
   *
   * @default '给作者赏一杯咖啡吧'
   */
  title?: string
  /**
   * Second reward text.
   *
   * @default '您的支持将是我继续更新下去的动力'
   */
  subTitle?: string
  /**
   * your QR code image.
   *
   * @default Array<IRewardOption>
   */
  rewardOption?: Array<IRewardOption>
}
