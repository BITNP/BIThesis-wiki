export function normalizeTag(tag: string[] | string | undefined): string[] {
  return typeof tag === 'string' ? [tag] : (tag ?? [])
}

export function tagURL(tag: string | null): string {
  // `tag === null` ⇒ all tags
  return '/faq/' + (tag ? `?tag=${tag}` : '') + '#faq-list'
}

export function with_anchor(news_post_url: string, release: string): string {
  return news_post_url + '#_' + release.replaceAll(/[\s\[\]]/g, '').replaceAll(/[.]/g, '-')
}
