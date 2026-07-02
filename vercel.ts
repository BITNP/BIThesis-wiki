import path from 'node:path'

import { collectVercelRedirects } from './wiki/.vitepress/redirects'

export const config = {
  framework: null,
  buildCommand: 'pnpm build',
  outputDirectory: 'wiki/.vitepress/dist',
  redirects: collectVercelRedirects(path.resolve(process.cwd(), 'wiki')),
}
