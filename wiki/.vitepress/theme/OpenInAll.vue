<script setup lang="ts">
import OpenIn from './OpenIn.vue'

const { template } = defineProps<{
  template: string // without `.zip`
}>()
</script>
<template>
  <span style="display: flex; flex-wrap: wrap; gap: 0.5em">
    <OpenIn platform="texpage" :template="template" />
    <OpenIn platform="overleaf" :template="template" />
  </span>
</template>
