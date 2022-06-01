import { classNameByBEM, classPrefix } from '@vuepress-denaro/core'
import { defineComponent, h, onMounted } from 'vue'
import '../styles/reward.scss'
import * as defaultConst from './const'

export const DenaroReward = defineComponent({
  name: 'DenaroReward',

  setup() {
    const { title, subTitle, rewardOption, btnText } = defaultConst

    const RewardContainer = h(
      'div',
      {
        class: `${classNameByBEM('reward-container')} animated`,
      },
      [
        h(
          'div',
          {
            class: `${classNameByBEM('reward-container', 'header')}`,
          },
          [
            h(
              'span',
              {
                class: `${classNameByBEM('reward-container', 'header-title')}`,
              },
              title
            ),
            h(
              'i',
              {
                onClick: () => {
                  const RewardBtnEL = RewardBtn.el
                  const RewardContainerEL = RewardContainer.el
                  if (RewardContainerEL) {
                    RewardContainerEL.classList.remove('slide-in-right')
                    RewardContainerEL.classList.add('slide-out-right')
                    if (RewardBtnEL) {
                      setTimeout(() => {
                        RewardBtnEL.classList.remove('slide-out-right')
                        RewardBtnEL.classList.add('slide-in-right')
                      }, 800)
                    }
                  }
                },
              },
              h(
                'svg',
                {
                  t: '1572509238160',
                  class: 'icon',
                  viewBox: '0 0 1024 1024',
                  version: '1.1',
                  xmlns: 'http://www.w3.org/2000/svg',
                  width: 16,
                  height: 16,
                },
                h('path', {
                  d: 'M887.2 774.2 624.8 510.8l263-260c10.8-10.8 10.8-28.4 0-39.2l-74.8-75.2c-5.2-5.2-12.2-8-19.6-8-7.4 0-14.4 3-19.6 8L512 395.6 249.8 136.6c-5.2-5.2-12.2-8-19.6-8-7.4 0-14.4 3-19.6 8L136 211.8c-10.8 10.8-10.8 28.4 0 39.2l263 260L136.8 774.2c-5.2 5.2-8.2 12.2-8.2 19.6 0 7.4 2.8 14.4 8.2 19.6l74.8 75.2c5.4 5.4 12.4 8.2 19.6 8.2 7 0 14.2-2.6 19.6-8.2L512 626.2l261.4 262.2c5.4 5.4 12.4 8.2 19.6 8.2 7 0 14.2-2.6 19.6-8.2l74.8-75.2c5.2-5.2 8.2-12.2 8.2-19.6C895.4 786.4 892.4 779.4 887.2 774.2z',
                })
              )
            ),
          ]
        ),
        h(
          'div',
          {
            class: `${classNameByBEM('reward-container', 'body')}`,
          },
          [
            h(
              'span',
              { class: `${classPrefix}reward-container__header-subTitle` },
              subTitle
            ),
            h(
              'div',
              { class: `${classPrefix}reward-container__body-img-container` },
              rewardOption.length &&
                rewardOption.map((item) => {
                  return h(
                    'div',
                    { class: `${classPrefix}reward-container__body-img` },
                    [
                      h('img', { src: item.url, alt: item.text }),
                      h('span', item.text),
                    ]
                  )
                })
            ),
          ]
        ),
      ]
    )
    const RewardBtn = h(
      'div',
      {
        class: `${classPrefix}reward-btn animated`,
        onClick: () => {
          const RewardBtnEL = RewardBtn.el
          const RewardContainerEL = RewardContainer.el

          if (RewardBtnEL && RewardContainerEL) {
            RewardBtnEL.classList.remove('slide-in-right')
            RewardBtnEL.classList.add('slide-out-right')

            RewardContainerEL.classList.remove('slide-out-right')
            RewardContainerEL.classList.add('slide-in-right')
          }
        },
      },
      h('span', btnText)
    )
    const RewardEl = h(
      'div',
      {
        class: `${classPrefix}reward`,
      },
      [RewardBtn, RewardContainer]
    )

    onMounted(() => {
      const rewardContainerEl = RewardContainer.el
      if (rewardContainerEl) {
        const offsetHeight = rewardContainerEl.offsetHeight
        rewardContainerEl.style.top = `calc(50% - ${offsetHeight / 2}px + 20px)`
      }
    })

    return () => !__VUEPRESS_SSR__ && RewardEl
  },
})

export default DenaroReward
