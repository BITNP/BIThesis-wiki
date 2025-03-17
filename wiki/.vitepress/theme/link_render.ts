import MarkdownIt from 'markdown-it'

type ParsingResult = {
  url: string
  innerMarkdown: string
}

function parse(raw: string): ParsingResult {
  let [url, inner] = raw.split('|')

  if (url.startsWith('pkg:')) {
    const pkg = url.replace(/^pkg:/, '')
    url = `https://www.ctan.org/pkg/${pkg}`
    inner = '`' + (inner ?? pkg) + '`宏包'
  }

  if (url.startsWith('texdoc:')) {
    const pkg = url.replace(/^texdoc:/, '')
    url = `https://texdoc.org/pkg/${pkg}`
    inner ??= '`' + pkg + '`手册'
  }

  inner ??= url

  return { url, innerMarkdown: inner }
}

/**
 * Wikitext-ish links
 *
 * # Examples
 * - `[[pkg:bithesis]]` ⇒ [`bithesis`宏包](https://www.ctan.org/pkg/bithesis)
 * - `[[pkg:algorithms|algorithmic]]` ⇒ [`algorithmic`宏包](https://www.ctan.org/pkg/algorithms)
 * - `[[texdoc:unicode-math]]` ⇒ [`unicode-math`手册](https://texdoc.org/pkg/unicode-math)
 * - ``[[texdoc:lshort-zh-cn|那份介绍（`lshort`中文版）]]`` ⇒ [那份介绍（`lshort`中文版）](https://texdoc.org/pkg/lshort-zh-cn)
 */
export default function LinkRender(md: MarkdownIt) {
  md.inline.ruler.before('link', 'wikitext-ish-link', function (state, silent) {
    const max = state.posMax
    const start = state.pos

    if (state.src.charCodeAt(start) !== 0x5b /* [ */ || state.src.charCodeAt(start + 1) !== 0x5b /* [ */) {
      return false
    }

    let pos = start + 2
    while (pos < max) {
      if (state.src.charCodeAt(pos) === 0x5d /* ] */ && state.src.charCodeAt(pos + 1) === 0x5d /* ] */) {
        break
      }
      pos++
    }

    if (pos === max) {
      return false
    }

    const raw = state.src.slice(start + 2, pos)
    const parsed = parse(raw)

    if (!silent) {
      const token = state.push('link_open', 'a', 1)
      token.attrs = [
        ['href', parsed.url],
        ['class', 'wikitext-ish-link'],
      ]
      token.info = 'auto'

      const inner = state.push('html_inline', '', 0)
      inner.content = md.renderInline(parsed.innerMarkdown)
      inner.meta ||= { slug: parsed.innerMarkdown }

      state.push('link_close', 'a', -1)
    }

    state.pos = pos + 2
    return true
  })
}
