# vuepress-plugin-moefy-canvas

> :tada: Decorate your web pages with lovely canvas animations.用可可爱爱的 canvas 动效装饰你的网页.

<p align="center">
  <a href="https://www.npmjs.com/package/@vuepress-denaro/vuepress-plugin-moefy-canvas" target="_blank"><img alt="npm version" src="https://img.shields.io/npm/v/@vuepress-denaro/vuepress-plugin-moefy-canvas"></a>
  <a href="https://github.com/denaro-org/vuepress-theme-denaro/stargazers" target="_blank"><img alt="GitHub stars" src="https://img.shields.io/github/stars/denaro-org/v-charts2"></a>
  <a href="https://github.com/denaro-org/vuepress-theme-denaro/issues" target="_blank"><img alt="GitHub issues" src="https://img.shields.io/github/issues/denaro-org/v-charts2"></a>
  <br />
  <a href="https://www.jsdelivr.com/package/npm/@vuepress-denaro/vuepress-plugin-moefy-canvas" target="_blank"><img alt="jsdelivr" src="https://data.jsdelivr.com/v1/package/npm/@vuepress-denaro/vuepress-plugin-moefy-canvas/badge"></a>
  <a href="https://www.npmjs.com/package/@vuepress-denaro/vuepress-plugin-moefy-canvas" target="_blank"><img alt="npm" src="https://img.shields.io/node/v/@vuepress-denaro/vuepress-plugin-moefy-canvas"></a>
  <a href="https://github.com/denaro-org/vuepress-theme-denaro/blob/main/LICENSE" target="_blank"><img alt="NPM" src="https://img.shields.io/npm/l/@vuepress-denaro/vuepress-plugin-moefy-canvas"></a>
</p>

## Usage

- Install

```bash
# npm
npm install @vuepress-denaro/vuepress-plugin-moefy-canvas

# yarn
yarn add @vuepress-denaro/vuepress-plugin-moefy-canvas
```

- Update `plugins` in `.vuepress/config.js`

### js

```javascript
const {
  moefyCanvasPlugin,
  MoefyCanvasTheme,
} = require('@vuepress-denaro/vuepress-plugin-moefy-canvas')
module.exports = {
  plugins: [
    moefyCanvasPlugin({
      theme: MoefyCanvasTheme.Sparkler,
      themeConfig: {},
      canvasOptions: {},
    }),
  ],
}
```

### ts

```javascript
import {
  moefyCanvasPlugin,
  MoefyCanvasTheme,
} from '@vuepress-denaro/vuepress-plugin-moefy-canvas'
import { defineUserConfig } from '@vuepress/cli'

export default defineUserConfig({
  plugins: [
    moefyCanvasPlugin({
      theme: MoefyCanvasTheme.Sparkler,
      themeConfig: {},
      canvasOptions: {},
    }),
  ],
})
```

## Configurations

### theme

- **type:** `string`
- **default:** `MoefyCanvasTheme.Sparkler`

canvas theme configuration.

```typescript
export enum MoefyCanvasTheme {
  Sparkler = 'sparkler',
  Popper = 'popper',
  Ribbon = 'ribbon',
  Sakura = 'sakura',
}
```

### themeConfig

- **type:** `object`

#### Sparkler

- **default:**

```js
{
  mode: SparklerMode.TRAIL,
}
```

```typescript
export enum SparklerMode {
  FOLLOW = 'follow',
  TRAIL = 'trail',
}

export interface SparklerConfig extends ThemeConfig {
  mode?: SparklerMode
  numParticles?: number
  sparkleFactor?: number
  particleDurationRange?: [number, number]
  particleDistanceRange?: [number, number]
  particleSizeRange?: [number, number]
}
```

#### Popper

- **default:**

```js
{
  shape: PopperShape.Star,
  size: 1.75,
  numParticles: 10
}
```

```typescript
export enum PopperShape {
  Star = 'star',
  Circle = 'circle',
}

export interface PopperConfig extends ThemeConfig {
  shape?: PopperShape
  size?: number
  numParticles?: number
}
```

#### Ribbon

- **default:**

```js
{
  size: 90,
}
```

```typescript
export interface RibbonConfig extends ThemeConfig {
  size?: number
}
```

#### Sakura

- **default:**

```js
{
  size: 30,
}
```

```typescript
export interface SakuraConfig extends ThemeConfig {
  numPatels?: number
}
```

### classOptions

- **type:** `object`

- **default:**

```js
{
  opacity: 1,
  zIndex: 0
}
```

## Thanks

[moefy-canvas](https://github.com/moefyit/moefy-canvas)
