import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons/faPlay'
import { Links, Spotify_showId } from '@/config/links'
import Socials from '@/components/socials'
import { postContent, postDate, postLink, postTitle } from '@/config/latestPost'
import { AnimateSlideUp } from '@/components/AnimatedSlideUp'

export default function Hero({ className }: { className?: string }) {
  return (
    <AnimateSlideUp>
      <section className={className}>
        <div className={'grid grid-cols-1 gap-16 sm:gap-8 md:grid-cols-2'}>
          <div>
            <h1 className={'text-display mb-4 lg:mb-8'}>
              regulation <br /> awaits
            </h1>
            <p className={'mb-16 max-w-sm text-xl'}>
              The Regulation Podcast is a show about friendship and embracing
              absurdity.
            </p>
            <div className={'sm:flex sm:space-x-8'}>
              <Link href={Links.patreon}>
                <div
                  className={
                    'mb-8 inline-flex items-center space-x-4 rounded-full bg-white px-4 py-2 text-black transition-opacity hover:opacity-50 sm:mb-0'
                  }
                >
                  <FontAwesomeIcon icon={faPlay} className={'h-6 w-6'} />
                  <div className={'font-bold'}>Latest Episode</div>
                </div>
              </Link>
              <Socials />
            </div>
          </div>
          <div>
            <iframe
              src={`https://open.spotify.com/embed/show/${Spotify_showId}?utm_source=generator&theme=0`}
              width="100%"
              height="352"
              allowFullScreen={false}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </AnimateSlideUp>
  )
}
