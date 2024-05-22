export const Links = {
  patreon: 'https://www.patreon.com/TheRegulationPod',
  social: {
    instagram: 'https://www.instagram.com/fuckfacepod',
    youtube: 'https://www.youtube.com/@theregulationpod',
    twitter: 'https://twitter.com/RegulationPod',
    twitch: 'https://twitch.tv/theregulationpod',
    tiktok: 'https://tiktok.com/@theregulationpod',
    spotify:
      'https://open.spotify.com/show/2gSmkcd3Z7fdhZYXQ674GD?si=9c68755e406641b6',
    subreddit: 'https://www.reddit.com/r/theregulationpod/',
  },
  github: 'https://github.com/CTOverton/regulation-website',
}

export type NavLink = {
  name: string
  href: string
}

export const Navbar_Links: NavLink[] = [
  { name: 'podcast', href: Links.patreon },
  { name: `let's plays`, href: Links.social.youtube },
  { name: 'streams', href: Links.social.twitch },
]
