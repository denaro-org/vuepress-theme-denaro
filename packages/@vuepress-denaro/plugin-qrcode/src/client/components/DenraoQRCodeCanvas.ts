import { defineComponent, h, onMounted, onUpdated, ref } from 'vue'
import { generatePath, QRCode, QRCodeProps, SUPPORTS_PATH2D } from '../utils'

export const DenraoQRCodeCanvas = defineComponent({
  name: 'DenraoQRCodeCanvas',
  props: QRCodeProps,
  setup(props) {
    const canvasEl = ref<HTMLCanvasElement | null>(null)

    const generate = (): void => {
      const { value, level, size, margin, background, foreground } = props

      const { modules: cells } = QRCode(value, level)
      const numCells = cells.length + margin * 2
      const canvas = canvasEl.value

      if (!canvas) {
        return
      }

      const ctx = canvas.getContext('2d')

      if (!ctx) {
        return
      }

      const devicePixelRatio = window.devicePixelRatio || 1

      const scale = (size / numCells) * devicePixelRatio
      canvas.height = canvas.width = size * devicePixelRatio
      ctx.scale(scale, scale)

      ctx.fillStyle = background
      ctx.fillRect(0, 0, numCells, numCells)

      ctx.fillStyle = foreground

      if (SUPPORTS_PATH2D) {
        ctx.fill(new Path2D(generatePath(cells, margin)))
      } else {
        cells.forEach(function (row, rdx) {
          row.forEach(function (cell, cdx) {
            if (cell) {
              ctx.fillRect(cdx + margin, rdx + margin, 1, 1)
            }
          })
        })
      }
    }

    onMounted(generate)
    onUpdated(generate)

    return () =>
      h('canvas', {
        ref: canvasEl,
        style: { width: `${props.size}px`, height: `${props.size}px` },
      })
  },
})
