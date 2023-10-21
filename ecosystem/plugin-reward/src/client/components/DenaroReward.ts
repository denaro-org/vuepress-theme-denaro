import { classNameByBEM, classPrefix } from '@vuepress-denaro/core/client'
import type { VNode } from 'vue'
import { defineComponent, h, ref, unref } from 'vue'
import '../styles/reward.scss'
import * as defaultConst from './const.js'
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

    const { elDom } = defaultConst
    const EL_DOM = document.querySelector(elDom)

    // 判断是不是 dom 元素
    const isDom = (value: any): boolean =>
      typeof HTMLElement === 'object'
        ? value instanceof HTMLElement
        : value &&
          typeof value === 'object' &&
          value !== null &&
          value.nodeType === 1 &&
          typeof value.nodeName === 'string'

    // 自定义渲染位置, 兼容在某个容器之前渲染
    if (elDom && !__VUEPRESS_SSR__ && isDom(EL_DOM)) {
      const rewardEL = document.createElement('div')
      rewardEL.setAttribute('class', `${classPrefix}reward in-container`)

      const rewardBtnEL = document.createElement('div')
      rewardBtnEL.setAttribute('class', `${classPrefix}reward-btn2`)
      const rewardBtnELText = document.createElement('span')
      rewardBtnELText.appendChild(document.createTextNode(defaultConst.btnText))
      rewardBtnEL.appendChild(rewardBtnELText)

      rewardEL.appendChild(rewardBtnEL)

      const rewardContainer = document.createElement('div')
      rewardContainer.setAttribute(
        'class',
        `${classNameByBEM('reward-container')} animated`,
      )

      const rewardContainerHeader = document.createElement('div')
      rewardContainerHeader.setAttribute(
        'class',
        `${classNameByBEM('reward-container', 'header')}`,
      )
      const rewardContainerHeaderTitle = document.createElement('span')
      rewardContainerHeaderTitle.setAttribute(
        'class',
        `${classNameByBEM('reward-container', 'header-title')}`,
      )
      rewardContainerHeaderTitle.appendChild(
        document.createTextNode(defaultConst.title),
      )
      rewardContainerHeader.appendChild(rewardContainerHeaderTitle)

      const rewardContainerBody = document.createElement('div')
      rewardContainerBody.setAttribute(
        'class',
        `${classNameByBEM('reward-container', 'body')}`,
      )
      const rewardContainerBodySubTitle = document.createElement('span')
      rewardContainerBodySubTitle.setAttribute(
        'class',
        `${classPrefix}reward-container__header-subTitle`,
      )
      rewardContainerBodySubTitle.appendChild(
        document.createTextNode(defaultConst.subTitle),
      )
      rewardContainerBody.appendChild(rewardContainerBodySubTitle)

      const rewardContainerBodyOption = document.createElement('div')
      rewardContainerBodyOption.setAttribute(
        'class',
        `${classPrefix}reward-container__body-img-container`,
      )
      defaultConst.rewardOption.forEach((item) => {
        const rewardContainerBodyOptionItem = document.createElement('div')
        rewardContainerBodyOptionItem.setAttribute(
          'class',
          `${classPrefix}reward-container__body-img`,
        )

        const rewardContainerBodyOptionItemImg = document.createElement('img')
        rewardContainerBodyOptionItemImg.setAttribute('src', item.url)
        rewardContainerBodyOptionItemImg.setAttribute('alt', item.text)
        rewardContainerBodyOptionItem.appendChild(
          rewardContainerBodyOptionItemImg,
        )

        const rewardContainerBodyOptionItemText = document.createElement('span')
        rewardContainerBodyOptionItemText.appendChild(
          document.createTextNode(item.text),
        )
        rewardContainerBodyOptionItem.appendChild(
          rewardContainerBodyOptionItemText,
        )

        rewardContainerBodyOption.appendChild(rewardContainerBodyOptionItem)
      })
      rewardContainerBody.appendChild(rewardContainerBodyOption)

      rewardContainer.appendChild(rewardContainerHeader)
      rewardContainer.appendChild(rewardContainerBody)

      rewardEL.appendChild(rewardContainer)

      // 鼠标移入时显示
      rewardBtnEL.addEventListener('mouseenter', () => {
        rewardContainer.classList.remove('slide-out-right')
        rewardContainer.classList.add('slide-in-right')
      })
      // 鼠标移开时隐藏
      rewardEL.addEventListener('mouseleave', () => {
        rewardContainer.classList.remove('slide-in-right')
        rewardContainer.classList.add('slide-out-right')
      })

      // 渲染在容器之前
      if (EL_DOM) {
        EL_DOM.before(rewardEL)
      }

      return null
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
