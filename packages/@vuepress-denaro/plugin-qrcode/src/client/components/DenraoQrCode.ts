import { classNameByBEM } from '@vuepress-denaro/core'
import { defineComponent, h, nextTick, onMounted, ref } from 'vue'
import { isRealNum } from '../utils'
import { DenraoQrcodeVue } from './DenraoQrcodeVue'

export const DenraoQrCode = defineComponent({
  name: 'DenraoQrCode',

  props: {
    labelText: {
      type: String,
      default: '',
    },
    size: {
      type: [String, Number],
      default: '',
    },
    channel: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {
    const show = ref(false)
    const qrcodeText = ref('')
    const qrSize = ref(100)
    const channelQR = ref('')

    onMounted(() => {
      let newV = props.size
      let realSize: number
      switch (newV) {
        case 'small':
          realSize = 100
          break
        case 'medium':
          realSize = 150
          break
        case 'big':
          realSize = 200
          break
        default:
          if (isRealNum(newV)) {
            const min = Math.min(window.innerHeight, window.innerWidth)
            newV = ~~newV
            if (newV < 10) {
              realSize = 10
            } else if (newV > min) {
              realSize = min
            } else {
              realSize = newV
            }
          } else {
            realSize = 100
          }
          break
      }
      qrSize.value = realSize

      // handle channel
      if (props.channel) {
        channelQR.value =
          location.href.indexOf('?') > -1
            ? '&channel=qrcode'
            : '?channel=qrcode'
      }
    })

    const showQrCode = (): void => {
      show.value = !show.value
      if (show.value) {
        nextTick(() => {
          qrcodeText.value = location.href + channelQR.value
        })
      }
    }

    return () =>
      h(
        'div',
        {
          class: classNameByBEM('qrcodeBtn'),
          on: {
            mousedown: () => {
              showQrCode()
            },
          },
        },
        [
          h(
            'span',
            {
              class: classNameByBEM('labelText'),
            },
            props.labelText || 'Mobile Read'
          ),
          show.value && h(DenraoQrcodeVue),
        ]
      )
  },
})
