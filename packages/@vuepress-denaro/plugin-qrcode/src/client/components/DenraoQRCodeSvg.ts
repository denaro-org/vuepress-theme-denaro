import { defineComponent, h, onUpdated, ref } from 'vue'
import { generatePath, QRCode, QRCodeProps } from '../utils'

export const DenraoQRCodeSvg = defineComponent({
  name: 'DenraoQRCodeSvg',
  props: QRCodeProps,
  setup(props) {
    const numCells = ref(0)
    const fgPath = ref('')

    const generate = (): void => {
      const { value, level, margin } = props

      const { modules: cells } = QRCode(value, level)
      numCells.value = cells.length + margin * 2

      // Drawing strategy: instead of a rect per module, we're going to create a
      // single path for the dark modules and layer that on top of a light rect,
      // for a total of 2 DOM nodes. We pay a bit more in string concat but that's
      // way faster than DOM ops.
      // For level 1, 441 nodes -> 2
      // For level 40, 31329 -> 2
      fgPath.value = generatePath(cells, margin)
    }

    generate()

    onUpdated(generate)

    return () =>
      h(
        'svg',
        {
          'width': props.size,
          'height': props.size,
          'shape-rendering': `crispEdges`,
          'xmlns': 'http://www.w3.org/2000/svg',
          'viewBox': `0 0 ${numCells.value} ${numCells.value}`,
        },
        [
          h('path', {
            fill: props.background,
            d: `M0,0 h${numCells.value}v${numCells.value}H0z`,
          }),
          h('path', { fill: props.foreground, d: fgPath.value }),
        ]
      )
  },
})
