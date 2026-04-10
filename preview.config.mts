import path from 'node:path'

import { createRedirectPlugin } from './wiki/.vitepress/redirects'

export default {
  plugins: [createRedirectPlugin(path.resolve(process.cwd(), 'wiki'))],
}
