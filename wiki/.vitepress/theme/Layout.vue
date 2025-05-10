<!-- Override `Layout` with a wrapper component that injects the slots -->

<script setup lang="ts">
import { useData, withBase } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { computed } from 'vue'

import { normalizeTag, tagURL } from './util'

const { Layout } = DefaultTheme
const data = useData()

const tags = computed<string[]>(() => normalizeTag(data.frontmatter.value.tag))
</script>

<template>
  <Layout>
    <template #doc-before>
      <div class="vp-doc">
        <div v-if="tags.length > 0" class="tag-row">
          <a v-for="tag in tags" :href="withBase(tagURL(tag))">
            {{ tag }}
          </a>
        </div>
      </div>
    </template>
  </Layout>
</template>
