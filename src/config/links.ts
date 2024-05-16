export const Links = {
  patreon: 'https://www.patreon.com/regulationpod',
  social: {
    instagram: 'https://www.instagram.com/theregulationpod',
    youtube: 'https://youtube.com/channel/UCKoQPVYSFJt5HFvyKzkFtNg',
    twitter: 'https://twitter.com/RegulationPod',
    twitch: 'https://twitch.tv/theregulationpod',
    tiktok: 'https://tiktok.com/@theregulationpod',
  },
}

export type NavLink = {
  name: string
  href: string
}

export const Navbar_Links: NavLink[] = [
  { name: 'podcast', href: Links.patreon },
  { name: `let's plays`, href: Links.social.youtube },
  { name: 'bingo', href: Links.social.twitch },
  { name: 'about', href: 'about' },
]
