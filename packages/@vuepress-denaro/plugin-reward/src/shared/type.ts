export interface IRewardOption {
  text: string
  url: string
}

export interface RewardPluginOptions {
  btnText?: string
  title?: string
  subTitle?: string
  rewardOption?: Array<IRewardOption>
}
