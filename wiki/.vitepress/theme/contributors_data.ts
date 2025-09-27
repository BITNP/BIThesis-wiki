/**
 * Contributors data, to be used at both build-time and runtime.
 */

export interface Contributor {
  /** Name, must be unique */
  name: string
  /** URL to the avatar */
  avatar: string
  /** URL of the homepage, e.g. GitHub user page. */
  homepage?: string
  /**
   * An alternative text description of the avatar
   * Default: `name`
   */
  avatar_alt?: string
}

export const contributors: Contributor[] = [
  {
    name: '子衿',
    homepage: 'https://github.com/ZIJIN-Evan',
    avatar: 'https://i.loli.net/2020/04/22/1REvcJuP4iLYfQp.jpg',
  },
  {
    name: '甲²级的胖头鱼',
    avatar: 'https://i.loli.net/2020/04/22/d93DQvqIABJcPOm.jpg',
  },
  {
    name: '乌鸢',
    avatar: 'https://i.loli.net/2020/04/22/81cFkyVpwQZq4O5.jpg',
  },
  {
    name: 'Spencer Woo',
    homepage: 'https://github.com/BITNP',
    avatar: 'https://i.loli.net/2020/03/10/KqToYeg1buLGwsh.png',
  },
  {
    name: 'Silvester',
    homepage: 'https://github.com/Silverster98',
    avatar: 'https://i.loli.net/2020/03/10/pYkbBwm3nRrhzcT.png',
  },
  {
    name: 'Lancern',
    homepage: 'https://github.com/Lancern',
    avatar: 'https://i.loli.net/2020/05/29/SL6KApDxuYqPjk3.png',
  },
  {
    name: 'Felinae',
    homepage: 'https://github.com/felinae98',
    avatar: 'https://i.loli.net/2020/03/10/rRogJdmUFv7iDx3.png',
  },
  {
    name: 'FKY',
    homepage: 'https://github.com/fky2015',
    avatar: 'https://i.loli.net/2020/05/29/Z1YFSty6LRJl8Oc.png',
  },
  {
    name: 'Zephyr',
    homepage: 'https://github.com/Zephyr1106',
    avatar: 'https://i.loli.net/2020/03/10/fTCIvEurgi5ezWA.png',
    avatar_alt: '1s Zhan',
  },
  {
    name: 'mwl0811',
    homepage: 'https://github.com/mwl0811',
    avatar: 'https://i.loli.net/2020/03/27/w2EyRtAsxpivJMO.png',
  },
  {
    name: 'guguguxiao',
    homepage: 'https://github.com/guguguxiao',
    avatar: 'https://i.loli.net/2021/01/14/zDawdylekZKq9op.png',
  },
  {
    name: 'Kayaks99',
    homepage: 'https://github.com/Kayaks99',
    avatar: 'https://i.loli.net/2021/01/14/QAMhBaGvle9PbjY.png',
  },
  {
    name: 'DeltaHao',
    homepage: 'https://github.com/DeltaHao',
    avatar: 'https://i.loli.net/2021/01/14/s9RAkaCFWpoBLub.png',
  },
  {
    name: 'YDX-2147483647',
    homepage: 'https://github.com/YDX-2147483647',
    avatar: 'https://s2.loli.net/2023/10/09/jXiDgmCd865HAue.png',
  },
  {
    name: 'everything411',
    homepage: 'https://github.com/everything411',
    avatar: 'https://freeimghost.com/images/2025/04/13/32010059.jpg',
  },
]

/** Get a `Contributor` by his/her `name` */
export function get_contributor(name: string): Contributor {
  const one = contributors.find((c) => c.name === name)
  if (one === undefined) {
    throw new Error(`Failed to find a contributor with name “${name}”.`)
  }
  return one
}
