# vuepress-plugin-smooth-scroll

> :tada: VuePress plugin for smooth scrolling.用于平滑滚动的 VuePress 插件.

<p align="center">
  <a href="https://www.npmjs.com/package/@vuepress-denaro/vuepress-plugin-smooth-scroll" target="_blank"><img alt="npm version" src="https://img.shields.io/npm/v/@vuepress-denaro/vuepress-plugin-smooth-scroll"></a>
  <a href="https://github.com/denaro-org/vuepress-theme-denaro/stargazers" target="_blank"><img alt="GitHub stars" src="https://img.shields.io/github/stars/denaro-org/v-charts2"></a>
  <a href="https://github.com/denaro-org/vuepress-theme-denaro/issues" target="_blank"><img alt="GitHub issues" src="https://img.shields.io/github/issues/denaro-org/v-charts2"></a>
  <br />
  <a href="https://www.jsdelivr.com/package/npm/@vuepress-denaro/vuepress-plugin-smooth-scroll" target="_blank"><img alt="jsdelivr" src="https://data.jsdelivr.com/v1/package/npm/@vuepress-denaro/vuepress-plugin-smooth-scroll/badge"></a>
  <a href="https://www.npmjs.com/package/@vuepress-denaro/vuepress-plugin-smooth-scroll" target="_blank"><img alt="npm" src="https://img.shields.io/node/v/@vuepress-denaro/vuepress-plugin-smooth-scroll"></a>
  <a href="https://github.com/denaro-org/vuepress-theme-denaro/blob/main/LICENSE" target="_blank"><img alt="NPM" src="https://img.shields.io/npm/l/@vuepress-denaro/vuepress-plugin-smooth-scroll"></a>
</p>

## Usage

- Install

```bash
# npm
npm install @vuepress-denaro/vuepress-plugin-smooth-scroll

# yarn
yarn add @vuepress-denaro/vuepress-plugin-smooth-scroll
```

- Update `plugins` in `.vuepress/config.js`

### js

```javascript
const {
  smoothScrollPlugin,
} = require('@vuepress-denaro/vuepress-plugin-smooth-scroll')
module.exports = {
  plugins: [smoothScrollPlugin()],
}
```

### ts

```javascript
import { smoothScrollPlugin } from '@vuepress-denaro/vuepress-plugin-smooth-scroll'
import { defineUserConfig } from '@vuepress/cli'

export default defineUserConfig({
  plugins: [smoothScrollPlugin()],
})
```

## Thanks

[vuepress-plugin-smooth-scroll](https://github.com/vuepress/vuepress-community/tree/main/packages/vuepress-plugin-smooth-scroll)
