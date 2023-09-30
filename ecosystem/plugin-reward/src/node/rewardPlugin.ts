import { useDenaroPlugin } from '@vuepress-denaro/core'
import type { PluginFunction } from '@vuepress-denaro/core'
import type { RewardPluginOptions } from '../shared/index.js'
import { DIR_NAME, PLUGIN_NAME } from './utils.js'

export const rewardPlugin = (options?: RewardPluginOptions): PluginFunction =>
  useDenaroPlugin(() => {
    const {
      btnText = '打赏',
      title = '给作者赏一杯咖啡吧',
      subTitle = '您的支持将是我继续更新下去的动力',
      rewardOption = [
        {
          text: '微信',
          url: '/WeChat.png', // ddd your picture to docs/.vuepress/public
        },
        {
          text: '支付宝',
          url: '/Alipay.png', // ddd your picture to docs/.vuepress/public
        },
      ],
    } = options || {}

    return {
      name: PLUGIN_NAME,
      dirname: DIR_NAME,
      useClientConfig: true,

      define: {
        __REWARD_BTN_TEXT__: btnText, // reward button text.
        __REWARD_TITLE__: title, // First reward text.
        __REWARD_SUB_TITLE__: subTitle, // Second reward text.
        __REWARD_OPTION__: rewardOption,
      },
    }
  })
