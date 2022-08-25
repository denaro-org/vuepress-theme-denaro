# vuepress-plugin-dynamic-title

> :tada: Add a dynamic title to your site.给你的站点添加动态标题的支持插件.

<p align="center">
  <a href="https://www.npmjs.com/package/@vuepress-denaro/vuepress-plugin-dynamic-title" target="_blank"><img alt="npm version" src="https://img.shields.io/npm/v/@vuepress-denaro/vuepress-plugin-dynamic-title"></a>
  <a href="https://github.com/denaro-org/vuepress-theme-denaro/stargazers" target="_blank"><img alt="GitHub stars" src="https://img.shields.io/github/stars/denaro-org/v-charts2"></a>
  <a href="https://github.com/denaro-org/vuepress-theme-denaro/issues" target="_blank"><img alt="GitHub issues" src="https://img.shields.io/github/issues/denaro-org/v-charts2"></a>
  <br />
  <a href="https://www.jsdelivr.com/package/npm/@vuepress-denaro/vuepress-plugin-dynamic-title" target="_blank"><img alt="jsdelivr" src="https://data.jsdelivr.com/v1/package/npm/@vuepress-denaro/vuepress-plugin-dynamic-title/badge"></a>
  <a href="https://github.com/denaro-org/vuepress-theme-denaro/blob/main/LICENSE" target="_blank"><img alt="NPM" src="https://img.shields.io/npm/l/@vuepress-denaro/vuepress-plugin-dynamic-title"></a>
</p>

## Usage

- Install

```bash
# npm
npm install @vuepress-denaro/vuepress-plugin-dynamic-title

# yarn
yarn add @vuepress-denaro/vuepress-plugin-dynamic-title
```

- Update `plugins` in `.vuepress/config.js`

### js

```javascript
const {
  dynamicTitlePlugin,
} = require('@vuepress-denaro/vuepress-plugin-dynamic-title')
module.exports = {
  plugins: [
    dynamicTitlePlugin({
      showIcon: '', // The icon displayed when the document is in the current tab.
      showText: '(/≧▽≦/)咦！又好了！', // The title displayed when the document is in the current tab.
      hideIcon: '', // The icon displayed when the document is not in the current tab.
      hideText: '(●—●)喔哟, 崩溃啦！', // The title displayed when the document is not in the current tab.
      recoverTime: 2000, // The time to recover the title after the tab is changed.
    }),
  ],
}
```

### ts

```javascript
import { dynamicTitlePlugin } from '@vuepress-denaro/vuepress-plugin-dynamic-title'
import { defineUserConfig } from '@vuepress/cli'

export default defineUserConfig({
  plugins: [
    dynamicTitlePlugin({
      showIcon: '', // The icon displayed when the document is in the current tab.
      showText: '(/≧▽≦/)咦！又好了！', // The title displayed when the document is in the current tab.
      hideIcon: '', // The icon displayed when the document is not in the current tab.
      hideText: '(●—●)喔哟, 崩溃啦！', // The title displayed when the document is not in the current tab.
      recoverTime: 2000, // The time to recover the title after the tab is changed.
    }),
  ],
})
```

## Configurations

### showIcon

- **type:** `string`
- **default:** `''`

The icon displayed when the document is in the current tab.

### showText

- **type:** `string`
- **default:** `'(/≧▽≦/)咦！又好了！'`

The title displayed when the document is in the current tab.

### hideIcon

- **type:** `string`
- **default:** `''`

The icon displayed when the document is not in the current tab.

### hideText

- **type:** `string`
- **default:** `'(●—●)喔哟, 崩溃啦！'`

The title displayed when the document is not in the current tab.

### recoverTime

- **type:** `number`
- **default:** `2000`

The time to recover the title after the tab is changed.

## Thanks

[vuepress-plugin-dynamic-title](https://github.com/moefyit/vuepress-plugin-dynamic-title)
