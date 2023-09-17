<script lang="ts" setup>
import { classNameByBEM } from '@vuepress-denaro/core/client'
import { onMounted, ref } from 'vue'
import { DenraoLoading } from './DenraoLoading.js'
import presets from './presets/index.js'
import '../styles/flowchart.scss'

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  preset: {
    type: String,
    default: 'vue',
  },
})

const loading = ref(false)

onMounted(() => {
  const preset = presets[props.preset]
  if (!preset) {
    console.warn(`[vuepress-plugin-flowchart] Unknown preset: ${props.preset}`)
    return
  }

  const delay = (): Promise<any> =>
    new Promise((resolve) => setTimeout(resolve, 500))

  Promise.all([
    import(/* webpackChunkName: "flowchart" */ 'flowchart.js'),
    delay(),
  ]).then(([flowchart]) => {
    const { parse } = flowchart.default
    const svg = parse(props.code)
    svg.drawSVG(props.id, preset)
    loading.value = false
  })
})
</script>

<template>
  <div :id="id" :class="[`${classNameByBEM('flowchart')}`, loading]">
    <DenraoLoading
      v-if="loading"
      :class="`${classNameByBEM('flowchart-loading-icon')}`"
    />
  </div>
</template>
