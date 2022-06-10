# vuepress-plugin-vue-preview

> :tada: Preview vue component effects on your vuepress site.在你的 vuepress 站点上预览 vue 组件效果.

<p align="center">
  <a href="https://www.npmjs.com/package/@vuepress-denaro/vuepress-plugin-vue-preview" target="_blank"><img alt="npm version" src="https://img.shields.io/npm/v/@vuepress-denaro/vuepress-plugin-vue-preview"></a>
  <a href="https://github.com/denaro-org/vuepress-theme-denaro/stargazers" target="_blank"><img alt="GitHub stars" src="https://img.shields.io/github/stars/denaro-org/v-charts2"></a>
  <a href="https://github.com/denaro-org/vuepress-theme-denaro/issues" target="_blank"><img alt="GitHub issues" src="https://img.shields.io/github/issues/denaro-org/v-charts2"></a>
  <br />
  <a href="https://www.jsdelivr.com/package/npm/@vuepress-denaro/vuepress-plugin-vue-preview" target="_blank"><img alt="jsdelivr" src="https://data.jsdelivr.com/v1/package/npm/@vuepress-denaro/vuepress-plugin-vue-preview/badge"></a>
  <a href="https://www.npmjs.com/package/@vuepress-denaro/vuepress-plugin-vue-preview" target="_blank"><img alt="npm" src="https://img.shields.io/node/v/@vuepress-denaro/vuepress-plugin-vue-preview"></a>
  <a href="https://github.com/denaro-org/vuepress-theme-denaro/blob/main/LICENSE" target="_blank"><img alt="NPM" src="https://img.shields.io/npm/l/@vuepress-denaro/vuepress-plugin-vue-preview"></a>
</p>

## Usage

- Install

```bash
# npm
npm install @vuepress-denaro/vuepress-plugin-vue-preview

# yarn
yarn add @vuepress-denaro/vuepress-plugin-vue-preview
```

- Update `plugins` in `.vuepress/config.js`

### js

```javascript
const {
  vuePreviewPlugin,
} = require('@vuepress-denaro/vuepress-plugin-vue-preview')
module.exports = {
  plugins: [vuePreviewPlugin()],
}
```

### ts

```javascript
import { vuePreviewPlugin } from '@vuepress-denaro/vuepress-plugin-vue-preview'
import { defineUserConfig } from '@vuepress/cli'

export default defineUserConfig({
  plugins: [vuePreviewPlugin()],
})
```

- Write markdown

### single file import

```markdown
@[code](@/.vuepress/vue-previews/demo.vue)
```

### vue component import

```markdown
@[preview-demo](@/.vuepress/vue-previews/demo.vue)
```

### the vue group only shows the code group

```markdown
@[preview](@/.vuepress/vue-previews/demo.vue)
```

### documentation for generating vue files

```markdown
@[docvue](@/.vuepress/vue-previews/demo.vue)
```

## Thanks

[vuepress-plugin-vue-preview](https://github.com/vuepress-reco/vuepress-theme-reco/tree/main/packages/%40vuepress-reco/plugin-vue-preview)
