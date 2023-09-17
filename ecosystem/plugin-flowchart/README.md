# vuepress-plugin-flowchart

> :tada: Rapid flowchart development plugin for vuepress.vuepress 的快速流程图开发插件.

<p align="center">
  <a href="https://www.npmjs.com/package/@vuepress-denaro/vuepress-plugin-flowchart" target="_blank"><img alt="npm version" src="https://img.shields.io/npm/v/@vuepress-denaro/vuepress-plugin-flowchart"></a>
  <a href="https://github.com/denaro-org/vuepress-theme-denaro/stargazers" target="_blank"><img alt="GitHub stars" src="https://img.shields.io/github/stars/denaro-org/v-charts2"></a>
  <a href="https://github.com/denaro-org/vuepress-theme-denaro/issues" target="_blank"><img alt="GitHub issues" src="https://img.shields.io/github/issues/denaro-org/v-charts2"></a>
  <br />
  <a href="https://www.jsdelivr.com/package/npm/@vuepress-denaro/vuepress-plugin-flowchart" target="_blank"><img alt="jsdelivr" src="https://data.jsdelivr.com/v1/package/npm/@vuepress-denaro/vuepress-plugin-flowchart/badge"></a>
  <a href="https://github.com/denaro-org/vuepress-theme-denaro/blob/main/LICENSE" target="_blank"><img alt="NPM" src="https://img.shields.io/npm/l/@vuepress-denaro/vuepress-plugin-flowchart"></a>
</p>

## Usage

- Install

```bash
# npm
npm install @vuepress-denaro/vuepress-plugin-flowchart

# yarn
yarn add @vuepress-denaro/vuepress-plugin-flowchart
```

- Update `plugins` in `.vuepress/config.js`

### js

```javascript
const {
  flowchartPlugin,
} = require('@vuepress-denaro/vuepress-plugin-flowchart')
module.exports = {
  plugins: [
    moefyCanvasPlugin({
      openMarker: '@flowstart',
      closeMarker: '@flowend',
    }),
  ],
}
```

### ts

```javascript
import { flowchartPlugin } from '@vuepress-denaro/vuepress-plugin-flowchart'
import { defineUserConfig } from '@vuepress/cli'

export default defineUserConfig({
  plugins: [
    flowchartPlugin({
      openMarker: '@flowstart',
      closeMarker: '@flowend',
    }),
  ],
})
```

## Configurations

### openMarker

- **type:** `string`
- **default:** ````mermaid`

setting open marker.

### closeMarker

- **type:** `string`
- **default:** `````

## Thanks

[vuepress-plugin-flowchart](https://github.com/ulivz/vuepress-plugin-flowchart)
