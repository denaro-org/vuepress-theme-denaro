# vuepress-plugin-one-click-copy

> :tada: A vuepress plugin for clipboard-copy. 一键复制 Vuepress 插件.

<p align="center">
  <a href="https://www.npmjs.com/package/@vuepress-denaro/vuepress-plugin-one-click-copy" target="_blank"><img alt="npm version" src="https://img.shields.io/npm/v/@vuepress-denaro/vuepress-plugin-one-click-copy"></a>
  <a href="https://github.com/denaro-org/vuepress-theme-denaro/stargazers" target="_blank"><img alt="GitHub stars" src="https://img.shields.io/github/stars/denaro-org/v-charts2"></a>
  <a href="https://github.com/denaro-org/vuepress-theme-denaro/issues" target="_blank"><img alt="GitHub issues" src="https://img.shields.io/github/issues/denaro-org/v-charts2"></a>
  <br />
  <a href="https://www.jsdelivr.com/package/npm/@vuepress-denaro/vuepress-plugin-one-click-copy" target="_blank"><img alt="jsdelivr" src="https://data.jsdelivr.com/v1/package/npm/@vuepress-denaro/vuepress-plugin-one-click-copy/badge"></a>
  <a href="https://github.com/denaro-org/vuepress-theme-denaro/blob/main/LICENSE" target="_blank"><img alt="NPM" src="https://img.shields.io/npm/l/@vuepress-denaro/vuepress-plugin-one-click-copy"></a>
</p>

## Usage

- Install

```bash
# npm
npm install @vuepress-denaro/vuepress-plugin-one-click-copy

# yarn
yarn add @vuepress-denaro/vuepress-plugin-one-click-copy
```

- Update `plugins` in `.vuepress/config.js`

### js

```javascript
const {
  oneClickCopyPlugin,
} = require('@vuepress-denaro/vuepress-plugin-one-click-copy')
module.exports = {
  plugins: [
    oneClickCopyPlugin({
      copySelector: [
        'div[class*="language-"] pre',
        'div[class*="aside-code"] aside',
      ], // Need to add one-click-copy class wildcard.
      copyMessage: 'Copied successfully!', // Prompt for successful copy.
      toolTipMessage: 'Copy to clipboard', // Click the title of the copy button.
      duration: 3000 // Successful prompt disappearing time.
    }),
  ],
}
```

### ts

```javascript
import { oneClickCopyPlugin } from '@vuepress-denaro/vuepress-plugin-one-click-copy'
import { defineUserConfig } from '@vuepress/cli'

export default defineUserConfig({
  plugins: [
    oneClickCopyPlugin({
      copySelector: [
        'div[class*="language-"] pre',
        'div[class*="aside-code"] aside',
      ], // Need to add one-click-copy class wildcard.
      copyMessage: 'Copied successfully!', // Prompt for successful copy.
      toolTipMessage: 'Copy to clipboard', // Click the title of the copy button.
      duration: 3000 // Successful prompt disappearing time.
    }),
  ],
})
```

## Configurations

### copySelector

- **type:** `string|array`
- **default:** `['div[class*="language-"] pre', 'div[class*="aside-code"] aside']`

Need to add one-click-copy class wildcard.

### copyMessage

- **type:** `string`
- **default:** `'Copied successfully!'`

Prompt for successful copy.

### toolTipMessage

- **type:** `string`
- **default:** `'Copy to clipboard'`

Click the title of the copy button.

### duration

- **type:** `number`
- **default:** `3000`

Successful prompt disappearing time.

## Thanks

[vuepress-plugin-one-click-copy](https://github.com/vxhly/vuepress-plugin-one-click-copy)
