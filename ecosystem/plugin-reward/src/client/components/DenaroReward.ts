import { classPrefix } from '@vuepress-denaro/core'
import type { VNode } from 'vue'
import { defineComponent, h, ref, unref } from 'vue'
import '../styles/reward.scss'
import { DenaroRewardBtn } from './DenaroRewardBtn.js'
import { DenaroRewardContainer } from './DenaroRewardContainer.js'

export const DenaroReward = defineComponent({
  name: 'DenaroReward',

  setup() {
    const isShowContainer = ref(false)
    const isShowBtn = ref(true)
    const handlerShowContainer = (): void => {
      isShowBtn.value = false
      isShowContainer.value = true
    }
    const handlerShowBtn = (): void => {
      isShowBtn.value = true
      isShowContainer.value = false
    }

    return (): VNode =>
      h(
        'div',
        {
          class: `${classPrefix}reward`,
        },
        [
          h(DenaroRewardBtn, {
            isShowBtn: unref(isShowBtn),
            onHandlerShowContainer: () => handlerShowContainer(),
          }),
          h(DenaroRewardContainer, {
            isShowBtn: unref(isShowBtn),
            isShowContainer: unref(isShowContainer),
            onHandlerShowBtn: () => handlerShowBtn(),
          }),
        ],
      )
  },
})

export default DenaroReward
