import type { CanvasOptions } from '@moefy-canvas/core'
import { Popper, PopperShape } from '@moefy-canvas/theme-popper'
import type { PopperConfig } from '@moefy-canvas/theme-popper'
import type { RibbonConfig } from '@moefy-canvas/theme-ribbon'
import { Ribbon } from '@moefy-canvas/theme-ribbon'
import type { SakuraConfig } from '@moefy-canvas/theme-sakura'
import { Sakura } from '@moefy-canvas/theme-sakura'
import { Sparkler, SparklerMode } from '@moefy-canvas/theme-sparkler'
import type { SparklerConfig } from '@moefy-canvas/theme-sparkler'
import { classNameByBEM } from '@vuepress-denaro/core/client'
import type { VNode } from 'vue'
import { defineComponent, h, onBeforeUnmount, onMounted } from 'vue'
import {
  theme,
  canvasOptions as userCanvasOptions,
  themeConfig as userThemeConfig,
} from './const.js'
import '../styles/moefy-canvas.scss'

export const DenaroMoefyCanvas = defineComponent({
  name: 'DenaroMoefyCanvas',

  setup() {
    const id = classNameByBEM('moefy-canvas')
    let moefyCanvas: Ribbon | Sakura | Popper | Sparkler | null = null

    const getCanvas = (): HTMLCanvasElement => {
      const canvas: HTMLCanvasElement = document.getElementById(
        id,
      ) as HTMLCanvasElement

      return canvas
    }

    onMounted(() => {
      switch (theme) {
        case 'ribbon': {
          const themeConfig: RibbonConfig = {
            size: 90,
            ...userThemeConfig,
          }

          const canvasOptions: CanvasOptions = {
            opacity: 1,
            zIndex: 0,
            ...userCanvasOptions,
          }
          moefyCanvas = new Ribbon(themeConfig, canvasOptions)
          break
        }
        case 'sakura': {
          const themeConfig: SakuraConfig = {
            numPatels: 30,
            ...userThemeConfig,
          }

          const canvasOptions: CanvasOptions = {
            opacity: 1,
            zIndex: 0,
            ...userCanvasOptions,
          }
          moefyCanvas = new Sakura(themeConfig, canvasOptions)
          break
        }
        case 'popper': {
          const themeConfig: PopperConfig = {
            shape: PopperShape.Star,
            size: 1.75,
            numParticles: 10,
            ...userThemeConfig,
          }

          const canvasOptions: CanvasOptions = {
            opacity: 1,
            zIndex: 0,
            ...userCanvasOptions,
          }
          moefyCanvas = new Popper(themeConfig, canvasOptions)
          break
        }
        case 'sparkler': {
          const themeConfig: SparklerConfig = {
            mode: SparklerMode.TRAIL,
            ...userThemeConfig,
          }

          const canvasOptions: CanvasOptions = {
            opacity: 1,
            zIndex: 0,
            ...userCanvasOptions,
          }
          moefyCanvas = new Sparkler(themeConfig, canvasOptions)
          break
        }
      }

      moefyCanvas && moefyCanvas.mount(getCanvas())
    })

    onBeforeUnmount(() => {
      moefyCanvas && moefyCanvas.unmount()
    })

    return (): VNode =>
      !__VUEPRESS_SSR__ ? h('div', { class: id }, h('canvas', { id })) : h('')
  },
})
