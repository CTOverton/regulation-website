export const Links = {
  patreon: 'https://www.patreon.com/TheRegulationPod',
  shop: 'https://www.patreon.com/theregulationpod/shop',
  social: {
    instagram: 'https://www.instagram.com/fuckfacepod',
    youtube: 'https://www.youtube.com/@theregulationpod',
    twitter: 'https://twitter.com/RegulationPod',
    twitch: 'https://twitch.tv/theregulationpod',
    tiktok: 'https://tiktok.com/@theregulationpod',
    spotify: 'https://open.spotify.com/show/3Qex6Bq9HsQ15T4BFWVaeV',
    subreddit: 'https://www.reddit.com/r/theregulationpod/',
  },
  github: 'https://github.com/CTOverton/regulation-website',
}

export const Spotify_showId = '3Qex6Bq9HsQ15T4BFWVaeV'

export type NavLink = {
  name: string
  href: string
}

export const Navbar_Links: NavLink[] = [
  { name: 'podcast', href: Links.patreon },
  { name: `let's plays`, href: Links.social.youtube },
  { name: 'streams', href: Links.social.twitch },
  { name: 'shop', href: Links.shop },
]
