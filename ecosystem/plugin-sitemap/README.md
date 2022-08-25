# vuepress-plugin-sitemap

> :tada: Generate sitemap when packaging documentation.在打包文档时生成站点 sitemap.

<p align="center">
  <a href="https://www.npmjs.com/package/@vuepress-denaro/vuepress-plugin-sitemap" target="_blank"><img alt="npm version" src="https://img.shields.io/npm/v/@vuepress-denaro/vuepress-plugin-sitemap"></a>
  <a href="https://github.com/denaro-org/vuepress-theme-denaro/stargazers" target="_blank"><img alt="GitHub stars" src="https://img.shields.io/github/stars/denaro-org/v-charts2"></a>
  <a href="https://github.com/denaro-org/vuepress-theme-denaro/issues" target="_blank"><img alt="GitHub issues" src="https://img.shields.io/github/issues/denaro-org/v-charts2"></a>
  <br />
  <a href="https://www.jsdelivr.com/package/npm/@vuepress-denaro/vuepress-plugin-sitemap" target="_blank"><img alt="jsdelivr" src="https://data.jsdelivr.com/v1/package/npm/@vuepress-denaro/vuepress-plugin-sitemap/badge"></a>
  <a href="https://github.com/denaro-org/vuepress-theme-denaro/blob/main/LICENSE" target="_blank"><img alt="NPM" src="https://img.shields.io/npm/l/@vuepress-denaro/vuepress-plugin-sitemap"></a>
</p>

## Usage

- Install

```bash
# npm
npm install @vuepress-denaro/vuepress-plugin-sitemap

# yarn
yarn add @vuepress-denaro/vuepress-plugin-sitemap
```

- Update `plugins` in `.vuepress/config.js`

### js

```javascript
const {
  sitemapPlugin
} = require('@vuepress-denaro/vuepress-plugin-sitemap')
module.exports = {
  plugins: [sitemapPlugin(
    {
      hostname: 'https://pake.web.id'
    }
  )],
}
```

### ts

```javascript
import { sitemapPlugin } from '@vuepress-denaro/vuepress-plugin-sitemap'
import { defineUserConfig } from '@vuepress/cli'

export default defineUserConfig({
  plugins: [sitemapPlugin(
    {
      hostname: 'https://pake.web.id'
    }
  )],
})
```

## Thanks

[vuepress-plugin-sitemap](https://github.com/ekoeryanto/vuepress-plugin-sitemap)
