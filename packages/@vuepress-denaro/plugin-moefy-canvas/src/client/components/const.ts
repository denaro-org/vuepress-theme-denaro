import type { CanvasOptions } from '@moefy-canvas/core'
import {
  type MoefyCanvasTheme,
  type MoefyCanvasThemeConfig,
} from '../../shared'

declare const __MOEFY_CANVAS_THEME__: MoefyCanvasTheme
declare const __MOEFY_CANVAS_THEME_CONFIG__: MoefyCanvasThemeConfig
declare const __MOEFY_CANVAS_OPTIONS__: CanvasOptions

export const theme = __MOEFY_CANVAS_THEME__
export const themeConfig = __MOEFY_CANVAS_THEME_CONFIG__
export const canvasOptions = __MOEFY_CANVAS_OPTIONS__
