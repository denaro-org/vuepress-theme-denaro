import { classNameByBEM } from '@vuepress-denaro/core'
import type { VNode } from 'vue'
import { defineComponent, h, onMounted, ref, unref } from 'vue'
import '../styles/flowchart.scss'
import { DenraoLoading } from './DenraoLoading.js'
import presets from './presets/index.js'

export const DenraoFlowChart = defineComponent({
  name: 'DenraoFlowChart',

  props: {
    // @doc flowchart container id
    id: {
      type: String,
      required: true,
    },
    // @doc flowchart code
    code: {
      type: String,
      required: true,
    },
    // @doc flowchart theme
    preset: {
      type: String,
      default: 'vue',
    },
  },

  setup(props) {
    const loading = ref(false)

    onMounted(() => {
      const preset = presets[props.preset]
      if (!preset) {
        console.warn(
          `[vuepress-plugin-flowchart] Unknown preset: ${props.preset}`
        )
        return
      }

      const delay = (): Promise<any> =>
        new Promise((resolve) => setTimeout(resolve, 500))

      Promise.all([
        import(/* webpackChunkName: "flowchart" */ 'flowchart.js'),
        delay(),
      ]).then(([flowchart]) => {
        const { parse } = flowchart.default
        const svg = parse(props.code)
        svg.drawSVG(props.id, preset)
        loading.value = false
      })
    })

    return (): VNode =>
      h(
        'div',
        {
          id: props.id,
          class: [`${classNameByBEM('flowchart')}`, loading],
        },
        [
          unref(loading)
            ? h(DenraoLoading, {
                class: [`${classNameByBEM('flowchart-loading-icon')}`],
              })
            : h(''),
        ]
      )
  },
})
