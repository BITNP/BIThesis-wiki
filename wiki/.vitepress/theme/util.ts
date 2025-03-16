export function normalizeTag(tag: string[] | string | undefined): string[] {
  return typeof tag === 'string' ? [tag] : (tag ?? [])
}

export function tagURL(tag: string | null): string {
  // `tag === null` ⇒ all tags
  return '/faq' + (tag ? `?tag=${tag}` : '') + '#faq-list'
}
