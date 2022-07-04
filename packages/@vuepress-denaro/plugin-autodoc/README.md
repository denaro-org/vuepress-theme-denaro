# vuepress-plugin-autodoc

> :tada: Generate javascript documentation with jsdoc.使用 jsdoc 生成 javascript 文档.

<p align="center">
  <a href="https://www.npmjs.com/package/@vuepress-denaro/vuepress-plugin-autodoc" target="_blank"><img alt="npm version" src="https://img.shields.io/npm/v/@vuepress-denaro/vuepress-plugin-autodoc"></a>
  <a href="https://github.com/denaro-org/vuepress-theme-denaro/stargazers" target="_blank"><img alt="GitHub stars" src="https://img.shields.io/github/stars/denaro-org/v-charts2"></a>
  <a href="https://github.com/denaro-org/vuepress-theme-denaro/issues" target="_blank"><img alt="GitHub issues" src="https://img.shields.io/github/issues/denaro-org/v-charts2"></a>
  <br />
  <a href="https://www.jsdelivr.com/package/npm/@vuepress-denaro/vuepress-plugin-autodoc" target="_blank"><img alt="jsdelivr" src="https://data.jsdelivr.com/v1/package/npm/@vuepress-denaro/vuepress-plugin-autodoc/badge"></a>
  <a href="https://www.npmjs.com/package/@vuepress-denaro/vuepress-plugin-autodoc" target="_blank"><img alt="npm" src="https://img.shields.io/node/v/@vuepress-denaro/vuepress-plugin-autodoc"></a>
  <a href="https://github.com/denaro-org/vuepress-theme-denaro/blob/main/LICENSE" target="_blank"><img alt="NPM" src="https://img.shields.io/npm/l/@vuepress-denaro/vuepress-plugin-autodoc"></a>
</p>

## Usage

- Install

```bash
# npm
npm install @vuepress-denaro/vuepress-plugin-autodoc

# yarn
yarn add @vuepress-denaro/vuepress-plugin-autodoc
```

- Update `plugins` in `.vuepress/config.js`

### js

```javascript
const {
  autodocPlugin,
} = require('@vuepress-denaro/vuepress-plugin-autodoc')
module.exports = {
  plugins: [autodocPlugin(    
    {
      rootPath: '' // Replacement path for '@root'
    }
  )],
}
```

### ts

```javascript
import { autodocPlugin } from '@vuepress-denaro/vuepress-plugin-autodoc'
import { defineUserConfig } from '@vuepress/cli'

export default defineUserConfig({
  plugins: [autodocPlugin(
    {
      rootPath: '' // Replacement path for '@root'
    }
  )],
})
```

- Write markdown

```markdown
@[autodoc]{@/.vuepress/vue-previews/demo.js}
```

## Thanks

[vuepress-plugin-autodoc](https://github.com/bprinty/vuepress-plugin-autodoc)
