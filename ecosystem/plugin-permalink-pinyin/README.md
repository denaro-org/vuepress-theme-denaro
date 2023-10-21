# vuepress-plugin-permalink-pinyin

> :tada: A VuePress plugin which convert Chinese title to transliterate permalink.一个 VuePress 插件, 将中文标题转换为音译永久链接.

<p align="center">
  <a href="https://www.npmjs.com/package/@vuepress-denaro/vuepress-plugin-permalink-pinyin" target="_blank"><img alt="npm version" src="https://img.shields.io/npm/v/@vuepress-denaro/vuepress-plugin-permalink-pinyin"></a>
  <a href="https://github.com/denaro-org/vuepress-theme-denaro/stargazers" target="_blank"><img alt="GitHub stars" src="https://img.shields.io/github/stars/denaro-org/v-charts2"></a>
  <a href="https://github.com/denaro-org/vuepress-theme-denaro/issues" target="_blank"><img alt="GitHub issues" src="https://img.shields.io/github/issues/denaro-org/v-charts2"></a>
  <br />
  <a href="https://www.jsdelivr.com/package/npm/@vuepress-denaro/vuepress-plugin-permalink-pinyin" target="_blank"><img alt="jsdelivr" src="https://data.jsdelivr.com/v1/package/npm/@vuepress-denaro/vuepress-plugin-permalink-pinyin/badge"></a>
  <a href="https://github.com/denaro-org/vuepress-theme-denaro/blob/main/LICENSE" target="_blank"><img alt="NPM" src="https://img.shields.io/npm/l/@vuepress-denaro/vuepress-plugin-permalink-pinyin"></a>
</p>

## Usage

- Install

```bash
# npm
npm install @vuepress-denaro/vuepress-plugin-permalink-pinyin

# yarn
yarn add @vuepress-denaro/vuepress-plugin-permalink-pinyin
```

- Update `plugins` in `.vuepress/config.js` or `.vuepress/config.ts`

### js

```javascript
const {
  permainkPinyinPlugin,
} = require('@vuepress-denaro/vuepress-plugin-permalink-pinyin')
module.exports = {
  plugins: [
    permainkPinyinPlugin({
      lowercase: true, // Converted into lowercase, default: true
      separator: '-', // Separator of the slug, default: '-'
    }),
  ],
}
```

### ts

```javascript
import { permainkPinyinPlugin } from '@vuepress-denaro/vuepress-plugin-permalink-pinyin'
import { defineUserConfig } from '@vuepress/cli'

export default defineUserConfig({
  plugins: [
    permainkPinyinPlugin({
      lowercase: true, // Converted into lowercase, default: true
      separator: '-', // Separator of the slug, default: '-'
    }),
  ],
})
```

## Configurations

```text
/**
  * Ignore a list of strings untouched
  * @example tr('你好, 世界', { ignore: ['你'] }) // 你 Hao , Shi Jie
  */
ignore?: string[];
/**
  * Replace a list of string / regex in the source string with the provided target string before transliteration
  * The option can either be an array or an object
  * @example tr('你好, 世界', { replace: {你: 'You'} }) // You Hao , Shi Jie
  * @example tr('你好, 世界', { replace: [['你', 'You']] }) // You Hao , Shi Jie
  * @example tr('你好, 世界', { replace: [[/你/g, 'You']] }) // You Hao , Shi Jie
  */
replace?: OptionReplaceCombined;
/**
  * Same as `replace` but after transliteration
  */
replaceAfter?: OptionReplaceCombined;
/**
  * Decides whether or not to trim the result string after transliteration
  * @default false
  */
trim?: boolean;
/**
  * Any characters not known by this library will be replaced by a specific string `unknown`
  * @default ''
  */
unknown?: string;
/**
  * Whether the result need to be converted into lowercase
  * @default true
  */
lowercase?: boolean;
/**
  * Whether the result need to be converted into uppercase
  * @default false
  */
uppercase?: boolean;
/**
  * Custom separator string
  * @default '-'
  */
separator?: string;
/**
  * Allowed characters.
  * When `allowedChars` is set to `'abc'`, only characters which match `/[abc]/g` will be preserved.
  * Other characters will all be converted to `separator`
  * @default 'a-zA-Z0-9-_.~''
  */
allowedChars?: string;
/**
  * Fix Chinese spacing. For example, `你好` is transliterated to `Ni Hao` instead of `NiHao`. If you don't need to transliterate Chinese characters, set it to false to false to improve performance.
  */
fixChineseSpacing?: boolean;
```

## Thanks

[vuepress-plugin-permalink-pinyin](https://github.com/viko16/vuepress-plugin-permalink-pinyin)
