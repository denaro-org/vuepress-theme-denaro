import { defineComponent, h } from 'vue'

export const DenraoLoading = defineComponent({
  name: 'DenraoLoading',

  setup() {
    return () =>
      h(
        'svg',
        {
          XMLns: 'http://www.w3.org/2000/svg',
          x: '0px',
          y: '0px',
          viewBox: '0 0 30 30',
          style: 'enable-background: new 0 0 50 50',
        },
        [
          h(
            'rect',
            {
              x: 0,
              y: 13,
              width: 4,
              height: 5,
            },
            [
              h('animate', {
                attributeName: 'height',
                attributeType: 'XML',
                values: '5;21;5',
                begin: '0s',
                dur: '0.6s',
                repeatCount: 'indefinite',
              }),
              h('animate', {
                attributeName: 'y',
                attributeType: 'XML',
                values: '13;5;13',
                begin: '0s',
                dur: '0.6s',
                repeatCount: 'indefinite',
              }),
            ]
          ),
          h(
            'rect',
            {
              x: 10,
              y: 13,
              width: 4,
              height: 5,
            },
            [
              h('animate', {
                attributeName: 'height',
                attributeType: 'XML',
                values: '5;21;5',
                begin: '0.15s',
                dur: '0.6s',
                repeatCount: 'indefinite',
              }),
              h('animate', {
                attributeName: 'y',
                attributeType: 'XML',
                values: '13;5;13',
                begin: '0.15s',
                dur: '0.6s',
                repeatCount: 'indefinite',
              }),
            ]
          ),
          h(
            'rect',
            {
              x: 20,
              y: 13,
              width: 4,
              height: 5,
            },
            [
              h('animate', {
                attributeName: 'height',
                attributeType: 'XML',
                values: '5;21;5',
                begin: '0.3s',
                dur: '0.6s',
                repeatCount: 'indefinite',
              }),
              h('animate', {
                attributeName: 'y',
                attributeType: 'XML',
                values: '13;5;13',
                begin: '0.3s',
                dur: '0.6s',
                repeatCount: 'indefinite',
              }),
            ]
          ),
        ]
      )
  },
})
