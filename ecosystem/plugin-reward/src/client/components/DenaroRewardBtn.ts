import { classPrefix } from '@vuepress-denaro/core'
import type { VNode } from 'vue'
import { defineComponent, h } from 'vue'
import * as defaultConst from './const.js'

export const DenaroRewardBtn = defineComponent({
  name: 'DenaroRewardBtn',

  props: {
    isShowBtn: {
      type: Boolean,
      default: true,
    },
  },

  emits: ['handler-show-container'],

  setup(props, { emit }) {
    const { btnText } = defaultConst

    return (): VNode =>
      h(
        'div',
        {
          class: [
            `${classPrefix}reward-btn animated`,
            props.isShowBtn && 'slide-in-right',
            !props.isShowBtn && 'slide-out-right',
          ],
          onClick: () => {
            emit('handler-show-container')
          },
        },
        h('span', btnText)
      )
  },
})
