# vuepress-plugin-reward

> :tada: A vuepress plugin for reward component.在你的站点添加一个打赏插件.

<p align="center">
  <a href="https://www.npmjs.com/package/@vuepress-denaro/vuepress-plugin-reward" target="_blank"><img alt="npm version" src="https://img.shields.io/npm/v/@vuepress-denaro/vuepress-plugin-reward"></a>
  <a href="https://github.com/denaro-org/vuepress-theme-denaro/stargazers" target="_blank"><img alt="GitHub stars" src="https://img.shields.io/github/stars/denaro-org/v-charts2"></a>
  <a href="https://github.com/denaro-org/vuepress-theme-denaro/issues" target="_blank"><img alt="GitHub issues" src="https://img.shields.io/github/issues/denaro-org/v-charts2"></a>
  <br />
  <a href="https://www.jsdelivr.com/package/npm/@vuepress-denaro/vuepress-plugin-reward" target="_blank"><img alt="jsdelivr" src="https://data.jsdelivr.com/v1/package/npm/@vuepress-denaro/vuepress-plugin-reward/badge"></a>
  <a href="https://github.com/denaro-org/vuepress-theme-denaro/blob/main/LICENSE" target="_blank"><img alt="NPM" src="https://img.shields.io/npm/l/@vuepress-denaro/vuepress-plugin-reward"></a>
</p>

## Usage

- Install

```bash
# npm
npm install @vuepress-denaro/vuepress-plugin-reward

# yarn
yarn add @vuepress-denaro/vuepress-plugin-reward
```

- Update `plugins` in `.vuepress/config.js`

### js

```javascript
const { rewardPlugin } = require('@vuepress-denaro/vuepress-plugin-reward')
module.exports = {
  plugins: [
    rewardPlugin({
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
    }),
  ],
}
```

### ts

```javascript
import { rewardPlugin } from '@vuepress-denaro/vuepress-plugin-reward'
import { defineUserConfig } from '@vuepress/cli'

export default defineUserConfig({
  plugins: [
    rewardPlugin({
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
    })
  ]
})
```

## Configurations

### btnText

- **type:** `string`
- **default:** `'打赏'`

reward button text.

### title

- **type:** `string`
- **default:** `'给作者赏一杯咖啡吧'`

First reward text.

### subTitle

- **type:** `string`
- **default:** `'您的支持将是我继续更新下去的动力'`

Second reward text.

### rewardOption

- **type:** `Array`
- **default:**

```json
[
  {
    "text": "微信",
    "url": "/WeChat.png" // ddd your picture to docs/.vuepress/public
  },
  {
    "text": "支付宝",
    "url": "/Alipay.png" // ddd your picture to docs/.vuepress/public
  }
]
```

your QR code image.

## Thanks

[vuepress-plugin-reward](https://github.com/vxhly/vuepress-plugin-reward)
