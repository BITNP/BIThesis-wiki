/**
 * Validate contributors data at build-time.
 *
 * Do NOT import this file.
 */

import assert from 'node:assert'
import { defineLoader } from 'vitepress'

import { type Contributor, contributors } from './contributors_data.ts'

assert.equal(
  contributors.length,
  new Set(contributors.map((c) => c.name)).size,
  'Contributors’ names should be unique, but they are not.'
)

declare const data: Contributor[]
export { data }

export default defineLoader({
  load: () => contributors,
})
