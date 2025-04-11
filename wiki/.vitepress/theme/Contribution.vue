<script setup lang="ts">
import { computed } from 'vue'

import { get_contributor, type Contributor } from './contributors_data.ts'

const props = defineProps<{
  /**
   * - 名字，`Contributor`的`name`
   * - 贡献，用一串 Emoji 代表
   */
  cells: [string, string][]
}>()

const cells = computed<{ contributor: Contributor; contribution: string }[]>(() =>
  props.cells.map(([name, contribution]) => ({
    contributor: get_contributor(name),
    contribution,
  }))
)
</script>

<template>
  <div :class="$style.table">
    <article v-for="cell in cells" :key="cell.contributor.name" :class="$style.cell">
      <img
        :src="cell.contributor.avatar"
        :alt="cell.contributor.avatar_alt ?? cell.contributor.name"
        :title="cell.contributor.avatar_alt ?? cell.contributor.name"
        height="100px"
        width="100px"
      />
      <p>
        <span v-if="cell.contributor.homepage">
          <a :href="cell.contributor.homepage" class="no-icon">{{ cell.contributor.name }}</a>
        </span>
        <span v-else>
          {{ cell.contributor.name }}
        </span>
      </p>
      <p>{{ cell.contribution }}</p>
    </article>
  </div>
</template>

<style module>
.table {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
}

.cell {
  /* 复制自`.vp-doc td` */
  border: 1px solid var(--vp-c-divider);
  padding: 8px 16px;

  /* 居中 */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    margin-bottom: 0.5em;
  }

  p {
    margin: 0 1em;
  }
}
</style>
