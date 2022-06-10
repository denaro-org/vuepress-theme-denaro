<script lang="ts" setup>
defineProps({
  // @doc 增删改查目标的名称
  crudName: {
    type: String,
    default: '',
  },
})
</script>
<template>
  <div class="component-crt-crud">
    嘻嘻嘻嘻嘻嘻嘻
    <!-- @doc 自定义操作列内容 -->
    <slot name="customAction"></slot>
    <!-- @doc 弹窗内容 -->
    <slot name="modal"></slot>
  </div>
</template>
