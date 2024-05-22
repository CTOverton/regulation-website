import { Links } from '@/config/links'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons/faXTwitter'
import { faTwitch } from '@fortawesome/free-brands-svg-icons/faTwitch'
import { faTiktok } from '@fortawesome/free-brands-svg-icons/faTiktok'
import { faSpotify } from '@fortawesome/free-brands-svg-icons/faSpotify'
import Link from 'next/link'

const socials = [
  { name: 'Spotify', href: Links.social.spotify, icon: faSpotify },
  { name: 'YouTube', href: Links.social.youtube, icon: faYoutube },
  { name: 'Instagram', href: Links.social.instagram, icon: faInstagram },
  { name: 'Twitch', href: Links.social.twitch, icon: faTwitch },
  { name: 'Twitter', href: Links.social.twitter, icon: faXTwitter },
  { name: 'TikTok', href: Links.social.tiktok, icon: faTiktok },
]

export default function Socials() {
  return (
    <div className={'flex items-center space-x-4'}>
      {socials.map((social) => (
        <Link
          key={social.name}
          className={'flex justify-center'}
          href={social.href}
          target={'_blank'}
        >
          <FontAwesomeIcon
            icon={social.icon}
            className={'h-6 w-6 transition-opacity hover:opacity-50'}
          />
        </Link>
      ))}
    </div>
  )
}
