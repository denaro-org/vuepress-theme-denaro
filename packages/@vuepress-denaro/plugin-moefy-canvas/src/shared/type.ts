import type { CanvasOptions } from '@moefy-canvas/core'
import type { PopperConfig } from '@moefy-canvas/theme-popper'
import type { RibbonConfig } from '@moefy-canvas/theme-ribbon'
import type { SakuraConfig } from '@moefy-canvas/theme-sakura'
import type { SparklerConfig } from '@moefy-canvas/theme-sparkler'

export enum MoefyCanvasTheme {
  Sparkler = 'sparkler',
  Popper = 'popper',
  Ribbon = 'ribbon',
  Sakura = 'sakura',
}

export interface ConfettiConfig {
  /**
   * The number of confetti to launch. More is always fun... but be cool, there's a lot of math involved.
   *
   * @default 50
   */
  particleCount?: number
}

export interface MoefyCanvasThemeConfig
  extends SakuraConfig,
    SparklerConfig,
    PopperConfig,
    RibbonConfig,
    ConfettiConfig {}

/**
 * Options for @vuepress-denaro/vuepress-plugin-moefy-canvas
 */
export interface MoefyCanvasOptions {
  /**
   * canvas theme.
   *
   * @default MoefyCanvasTheme.Sparkler
   */
  theme: MoefyCanvasTheme
  /**
   * canvas theme configuration.
   *
   * @default MoefyCanvasThemeConfig
   */
  themeConfig?: MoefyCanvasThemeConfig
  /**
   * canvas options configuration.
   *
   * @default CanvasOptions
   */
  canvasOptions?: CanvasOptions
}
