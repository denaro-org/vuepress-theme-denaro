# vuepress-plugin-baidu-autopush

> :tada: Baidu autopush SEO plugin for vuepress.百度站点自动推送 Vuepress 插件.

<p align="center">
  <a href="https://www.npmjs.com/package/@vuepress-denaro/vuepress-plugin-baidu-autopush" target="_blank"><img alt="npm version" src="https://img.shields.io/npm/v/@vuepress-denaro/vuepress-plugin-baidu-autopush"></a>
  <a href="https://github.com/denaro-org/vuepress-theme-denaro/stargazers" target="_blank"><img alt="GitHub stars" src="https://img.shields.io/github/stars/denaro-org/v-charts2"></a>
  <a href="https://github.com/denaro-org/vuepress-theme-denaro/issues" target="_blank"><img alt="GitHub issues" src="https://img.shields.io/github/issues/denaro-org/v-charts2"></a>
  <br />
  <a href="https://www.jsdelivr.com/package/npm/@vuepress-denaro/vuepress-plugin-baidu-autopush" target="_blank"><img alt="jsdelivr" src="https://data.jsdelivr.com/v1/package/npm/@vuepress-denaro/vuepress-plugin-baidu-autopush/badge"></a>
  <a href="https://github.com/denaro-org/vuepress-theme-denaro/blob/main/LICENSE" target="_blank"><img alt="NPM" src="https://img.shields.io/npm/l/@vuepress-denaro/vuepress-plugin-baidu-autopush"></a>
</p>

## Usage

- Install

```bash
# npm
npm install @vuepress-denaro/vuepress-plugin-baidu-autopush

# yarn
yarn add @vuepress-denaro/vuepress-plugin-baidu-autopush
```

- Update `plugins` in `.vuepress/config.js` or `.vuepress/config.ts`

### js

```javascript
const {
  baiduAutopushPlugin,
} = require('@vuepress-denaro/vuepress-plugin-baidu-autopush')
module.exports = {
  plugins: [baiduAutopushPlugin()],
}
```

### ts

```javascript
import { baiduAutopushPlugin } from '@vuepress-denaro/vuepress-plugin-baidu-autopush'
import { defineUserConfig } from '@vuepress/cli'

export default defineUserConfig({
  plugins: [baiduAutopushPlugin()],
})
```

## Thanks

[vuepress-plugin-baidu-autopush](https://github.com/IOriens/vuepress-plugin-baidu-autopush)
