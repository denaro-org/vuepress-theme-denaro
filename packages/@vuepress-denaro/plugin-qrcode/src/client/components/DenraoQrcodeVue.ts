import { defineComponent, h } from 'vue'
import {
  defaultErrorCorrectLevel,
  QRCodeVueProps,
  validErrorCorrectLevel,
} from '../utils'
import { DenraoQRCodeCanvas } from './DenraoQRCodeCanvas'
import { DenraoQRCodeSvg } from './DenraoQRCodeSvg'

export const DenraoQrcodeVue = defineComponent({
  name: 'DenraoQrcodeVue',
  props: QRCodeVueProps,
  setup(props) {
    const size = props.size >>> 0
    const margin = props.margin >>> 0
    const level = validErrorCorrectLevel(props.level)
      ? props.level
      : defaultErrorCorrectLevel

    return h(props.renderAs === 'svg' ? DenraoQRCodeSvg : DenraoQRCodeCanvas, {
      value: props.value,
      size,
      margin,
      level,
      background: props.background,
      foreground: props.foreground,
    })
  },
})
