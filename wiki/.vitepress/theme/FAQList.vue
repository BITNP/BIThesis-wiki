<script setup lang="ts">
import { withBase } from 'vitepress'
import { computed, onMounted, ref } from 'vue'

import { data as pages } from './faq.data.ts'
import { tagURL } from './util.ts'

const tags = new Set(pages.flatMap((p) => p.tag))

const currentTag = ref<string | null>(null)
onMounted(() => {
  const search = new URLSearchParams(window.location.search)
  currentTag.value = search.get('tag')
})

const currentPages = computed(() => {
  const tag = currentTag.value
  return tag ? pages.filter((p) => p.tag.includes(tag)) : pages
})
</script>

<template>
  <div class="tag-row">
    <a :href="withBase(tagURL(null))" @click="currentTag = null">全部</a>
    <a v-for="tag in tags" :href="withBase(tagURL(tag))" @click="currentTag = tag">
      {{ tag }}
    </a>
  </div>
  <h3 v-if="currentTag">{{ currentTag }}</h3>
  <ul class="faq">
    <li v-for="p of currentPages" :key="p.url">
      <a :href="p.url">{{ p.title }}</a>
    </li>
  </ul>
</template>

<style>
.vp-doc .faq a {
  text-decoration: none;
}
</style>
