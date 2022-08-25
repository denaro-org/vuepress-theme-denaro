import { pluginNamePrefix } from '@vuepress-denaro/core'
import type { Plugin, PluginObject } from '@vuepress/core'
import { getDirname, path } from '@vuepress/utils'
import type { RewardPluginOptions } from '../shared/index.js'

const __dirname = getDirname(import.meta.url)

export const rewardPlugin = ({
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
}: RewardPluginOptions = {}): Plugin => {
  const pluginObj: PluginObject = {
    name: `${pluginNamePrefix}reward`,

    define: {
      __REWARD_BTN_TEXT__: btnText, // reward button text.
      __REWARD_TITLE__: title, // First reward text.
      __REWARD_SUB_TITLE__: subTitle, // Second reward text.
      __REWARD_OPTION__: rewardOption,
    },

    clientConfigFile: path.resolve(__dirname, '../client/config.js'),

    alias: {
      // workaround for https://github.com/vitejs/vite/issues/7621
      [`${pluginNamePrefix}reward/client`]: path.resolve(
        __dirname,
        '../client/index.js'
      ),
    },
  }

  return pluginObj
}
