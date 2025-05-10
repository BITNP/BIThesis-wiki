import matter from 'gray-matter'

export function getTitleFromSrc(src: string): string | undefined {
  const lines = matter(src).content.split('\n')

  for (const line of lines) {
    // https://github.com/jooy2/vitepress-sidebar/blob/c6102e0d4aa2fa1395ab60af370d43d9b344fe67/lib/helper.ts#L164-L186
    if (/^# /.test(line)) {
      let title = line.replace(/^# /, '')

      if (/\[(.*)]\(.*\)/.test(title)) {
        // Remove hyperlink from h1 if exists
        const execValue = /(.*)?\[(.*)]\((.*)\)(.*)?/.exec(title) || ''

        title = execValue.length > 0 ? `${execValue[1] || ''}${execValue[2] || ''}${execValue[4] || ''}` : ''
      }

      // Remove certain Markdown format
      // https://github.com/jooy2/vitepress-sidebar/blob/c6102e0d4aa2fa1395ab60af370d43d9b344fe67/lib/helper.ts#L88-L94
      title = title
        .replace(/\*{1,2}([^*]+?)\*{1,2}/g, '$1')
        .replace(/_{1,2}([^_]+?)_{1,2}/g, '$1')
        .replace(/~{1,2}([^~]+?)~{1,2}/g, '$1')
        .replace(/`{1,3}([^`]+?)`{1,3}/g, '“$1”')

      return title
    }
  }
}
