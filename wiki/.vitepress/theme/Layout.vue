<script setup lang="ts">
import { useData, withBase } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { computed } from 'vue'

import { normalizeTag, tagURL } from './util'

const { Layout } = DefaultTheme
const data = useData()

const title = computed<string | null>(() => data.frontmatter.value.title)
const tags = computed<string[]>(() => normalizeTag(data.frontmatter.value.tag))
</script>

<template>
  <Layout>
    <template #doc-before>
      <div class="vp-doc">
        <h1 v-if="title">{{ title }}</h1>
        <div v-if="tags.length > 0" class="tag-row" style="border-bottom: 1px solid var(--vp-c-divider)">
          <a v-for="tag in tags" :href="withBase(tagURL(tag))">
            {{ tag }}
          </a>
        </div>
      </div>
    </template>
  </Layout>
</template>
