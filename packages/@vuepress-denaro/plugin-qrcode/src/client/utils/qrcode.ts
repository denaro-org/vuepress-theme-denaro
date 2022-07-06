import ErrorCorrectLevel from 'qr.js/lib/ErrorCorrectLevel.js'
import QR from 'qr.js/lib/QRCode.js'
import type { PropType } from 'vue'
import type { Level, Modules } from '../../shared'

export const SUPPORTS_PATH2D: boolean = (function () {
  try {
    new Path2D().addPath(new Path2D())
  } catch (e) {
    return false
  }
  return true
})()

/**
 * Encode UTF16 to UTF8.
 * See: http://jonisalonen.com/2012/from-utf-16-to-utf-8-in-javascript/
 * @param str {string}
 * @returns {string}
 */
export function toUTF8String(str: string): string {
  let utf8Str = ''
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i)
    if (charCode < 0x0080) {
      utf8Str += String.fromCharCode(charCode)
    } else if (charCode < 0x0800) {
      utf8Str += String.fromCharCode(0xc0 | (charCode >> 6))
      utf8Str += String.fromCharCode(0x80 | (charCode & 0x3f))
    } else if (charCode < 0xd800 || charCode >= 0xe000) {
      utf8Str += String.fromCharCode(0xe0 | (charCode >> 12))
      utf8Str += String.fromCharCode(0x80 | ((charCode >> 6) & 0x3f))
      utf8Str += String.fromCharCode(0x80 | (charCode & 0x3f))
    } else {
      // surrogate pair
      i++
      // UTF-16 encodes 0x10000-0x10FFFF by
      // subtracting 0x10000 and splitting the
      // 20 bits of 0x0-0xFFFFF into two halves
      charCode =
        0x10000 + (((charCode & 0x3ff) << 10) | (str.charCodeAt(i) & 0x3ff))
      utf8Str += String.fromCharCode(0xf0 | (charCode >> 18))
      utf8Str += String.fromCharCode(0x80 | ((charCode >> 12) & 0x3f))
      utf8Str += String.fromCharCode(0x80 | ((charCode >> 6) & 0x3f))
      utf8Str += String.fromCharCode(0x80 | (charCode & 0x3f))
    }
  }
  return utf8Str
}

export function generatePath(modules: Modules, margin = 0): string {
  const ops: string[] = []
  modules.forEach(function (row, y) {
    let start: number | null = null
    row.forEach(function (cell, x) {
      if (!cell && start !== null) {
        // M0 0h7v1H0z injects the space with the move and drops the comma,
        // saving a char per operation
        ops.push(
          `M${start + margin} ${y + margin}h${x - start}v1H${start + margin}z`
        )
        start = null
        return
      }

      // end of row, clean up or skip
      if (x === row.length - 1) {
        if (!cell) {
          // We would have closed the op above already so this can only mean
          // 2+ light modules in a row.
          return
        }
        if (start === null) {
          // Just a single dark module.
          ops.push(`M${x + margin},${y + margin} h1v1H${x + margin}z`)
        } else {
          // Otherwise finish the current line.
          ops.push(
            `M${start + margin},${y + margin} h${x + 1 - start}v1H${
              start + margin
            }z`
          )
        }
        return
      }

      if (cell && start === null) {
        start = x
      }
    })
  })
  return ops.join('')
}

export function QRCode(data: string, level: Level): { modules: Modules } {
  const errorCorrectLevel = ErrorCorrectLevel[level]

  // We'll use type===-1 to force QRCode to automatically pick the best type
  const qrcode = new QR(-1, errorCorrectLevel)
  qrcode.addData(toUTF8String(data))
  qrcode.make()

  return qrcode
}

export function validErrorCorrectLevel(level: string): boolean {
  return level in ErrorCorrectLevel
}

export const defaultErrorCorrectLevel = 'H'

export const QRCodeProps = {
  value: {
    type: String,
    required: true,
    default: '',
  },
  size: {
    type: Number,
    default: 100,
  },
  level: {
    type: String as PropType<Level>,
    default: defaultErrorCorrectLevel,
    validator: (l: any) => validErrorCorrectLevel(l),
  },
  background: {
    type: String,
    default: '#fff',
  },
  foreground: {
    type: String,
    default: '#000',
  },
  margin: {
    type: Number,
    required: false,
    default: 0,
  },
}

export const QRCodeVueProps = {
  ...QRCodeProps,
  renderAs: {
    type: String as PropType<'canvas' | 'svg'>,
    required: false,
    default: 'canvas',
    validator: (as: any) => ['canvas', 'svg'].indexOf(as) > -1,
  },
}
