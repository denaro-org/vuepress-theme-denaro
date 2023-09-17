# vuepress-plugin-code-preview

> :tada: A vuepress plugin for codesandbox embed code preview.一个用于 codesandbox 嵌入代码预览的 vuepress 插件.

<p align="center">
  <a href="https://www.npmjs.com/package/@vuepress-denaro/vuepress-plugin-code-preview" target="_blank"><img alt="npm version" src="https://img.shields.io/npm/v/@vuepress-denaro/vuepress-plugin-code-preview"></a>
  <a href="https://github.com/denaro-org/vuepress-theme-denaro/stargazers" target="_blank"><img alt="GitHub stars" src="https://img.shields.io/github/stars/denaro-org/v-charts2"></a>
  <a href="https://github.com/denaro-org/vuepress-theme-denaro/issues" target="_blank"><img alt="GitHub issues" src="https://img.shields.io/github/issues/denaro-org/v-charts2"></a>
  <br />
  <a href="https://www.jsdelivr.com/package/npm/@vuepress-denaro/vuepress-plugin-code-preview" target="_blank"><img alt="jsdelivr" src="https://data.jsdelivr.com/v1/package/npm/@vuepress-denaro/vuepress-plugin-code-preview/badge"></a>
  <a href="https://github.com/denaro-org/vuepress-theme-denaro/blob/main/LICENSE" target="_blank"><img alt="NPM" src="https://img.shields.io/npm/l/@vuepress-denaro/vuepress-plugin-code-preview"></a>
</p>

## Usage

- Install

```bash
# npm
npm install @vuepress-denaro/vuepress-plugin-code-preview

# yarn
yarn add @vuepress-denaro/vuepress-plugin-code-preview
```

- Update `plugins` in `.vuepress/config.js`

### js

```javascript
const {
  codePreviewPlugin,
} = require('@vuepress-denaro/vuepress-plugin-code-preview')
module.exports = {
  plugins: [codePreviewPlugin()],
}
```

### ts

```javascript
import { codePreviewPlugin } from '@vuepress-denaro/vuepress-plugin-code-preview'
import { defineUserConfig } from '@vuepress/cli'

export default defineUserConfig({
  plugins: [codePreviewPlugin()],
})
```

- Write markdown

### codesandbox

```markdown
<DenraoCodePreview embedUrl="https://codesandbox.io/embed/avue-demo-z4uje?autoresize=1&fontsize=14&hidenavigation=1&theme=dark&view=preview" />
```

#### width

- **type:** `string`
- **default:** `'100%'`

The width of the container.

#### height

- **type:** `string`
- **default:** `'650px'`

The height of the container.

#### embedUrl

- **type:** `string`
- **default:** `''`

Online code preview url.

#### embedBox

- **type:** `string`
- **default:** `'codesandbox'`

Types of embed code previews.

## Thanks

[vuepress-plugin-code-preview](https://github.com/vxhly/vuepress-plugin-code-preview)
