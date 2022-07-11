import { classNameByBEM } from '@vuepress-denaro/core'
import { defineAsyncComponent, defineComponent, h } from 'vue'
import '../styles/vue-preview.scss'

export const DenraoVuePreview = defineComponent({
  name: 'DenraoVuePreview',

  props: {
    showDemo: {
      type: String,
      default: 'undefined',
    },
    absoluteFilePath: {
      type: String,
      default: '',
    },
  },

  setup(props, { slots }) {
    const demoTP = defineAsyncComponent(
      () => import(/* @vite-ignore */ props.absoluteFilePath)
    )

    const VuePreviewEl = h(
      'div',
      {
        class: classNameByBEM('vue-preview-container'),
      },
      [
        props.showDemo !== 'undefined'
          ? h(
              'div',
              {
                class: classNameByBEM('preview-container'),
              },
              [
                h(
                  'div',
                  {
                    style: 'overflow-x: auto;',
                  },
                  [h(demoTP)]
                ),
              ]
            )
          : h(''),
        slots?.default?.(),
      ]
    )
    return () => h(VuePreviewEl)
  },
})

export default DenraoVuePreview
