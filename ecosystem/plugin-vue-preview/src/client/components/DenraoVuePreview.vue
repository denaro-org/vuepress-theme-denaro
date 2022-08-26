<script setup>
import '../styles/vue-preview.scss'
import { classNameByBEM } from '@vuepress-denaro/core'
import { defineAsyncComponent } from 'vue'

const props = defineProps({
  /**
   * 是否显示示例
   */
  showDemo: {
    type: String,
    default: 'undefined',
  },
  /**
   * 组件实际地址
   */
  absoluteFilePath: {
    type: String,
    default: '',
  },
})

const AsyncDemoTP = defineAsyncComponent(() =>
  import(/* @vite-ignore */ props.absoluteFilePath)
)
</script>

<template>
  <div :class="classNameByBEM('vue-preview-container')">
    <div v-if="showDemo" :class="classNameByBEM('preview-container')">
      <div style="overflow-x: auto">
        <AsyncDemoTP />
      </div>
    </div>

    <slot />
  </div>
</template>
