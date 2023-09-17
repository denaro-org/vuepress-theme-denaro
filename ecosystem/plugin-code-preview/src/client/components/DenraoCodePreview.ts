import { classNameByBEM } from '@vuepress-denaro/core/client'
import type { VNode } from 'vue'
import { defineComponent, h } from 'vue'
import '../styles/code-preview.scss'

export const DenraoCodePreview = defineComponent({
  name: 'DenraoCodePreview',

  props: {
    // @doc The width of the container.
    width: {
      type: String,
      default: '100%',
    },
    // @doc The height of the container.
    height: {
      type: String,
      default: '650px',
    },
    // @doc Online code preview url.
    embedUrl: {
      type: String,
      required: true,
      default: null,
    },
    // @doc Types of embed code previews.
    embedBox: {
      type: String,
      default: 'codesandbox',
      validator: (value: any) => {
        return ['codesandbox'].indexOf(value) !== -1
      },
    },
  },

  setup(props) {
    return (): VNode =>
      h(
        'div',
        {
          class: classNameByBEM('code-preview'),
          style: {
            width: props.width,
            height: props.height,
          },
        },
        [
          props.embedBox === 'codesandbox'
            ? h('iframe', {
                src: props.embedUrl,
                style: {
                  width: '100%',
                  height: '100%',
                  border: 0,
                  borderRadius: '4px',
                  overflow: 'hidden',
                },
                allow:
                  'accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking',
                sandbox:
                  'allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts',
              })
            : h(''),
        ],
      )
  },
})
