import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons/faPlay'
import { Links } from '@/config/links'
import Socials from '@/components/socials'

export default function Hero() {
  return (
    <section>
      <div className={'grid grid-cols-1 gap-16 sm:gap-8 md:grid-cols-2'}>
        <div>
          <h1 className={'text-display mb-4 lg:mb-8'}>
            regulation <br /> awaits
          </h1>
          <p className={'mb-16 max-w-sm'}>
            The Regulation Podcast is a show about friendship and embracing
            absurdity.
          </p>
          <div className={'flex space-x-8'}>
            <Link href={Links.patreon}>
              <div
                className={
                  'inline-flex items-center space-x-4 rounded-full bg-white px-4 py-2 text-black transition-opacity hover:opacity-50'
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
          <div
            className={
              'h-full w-full overflow-clip rounded-xl bg-neutral-800 px-4 py-8'
            }
          >
            <h2 className={'text-2xl font-bold'}>RSS Feed</h2>
            <div className={'mb-4 text-neutral-500'}>May 14th</div>
            <p className={'text-base'}>
              Hey everyone, We're still sorting out some paperwork regarding our
              regular RSS feed and YouTube channel so, for our first episode,
              we're going to use our brand new Patreon for hosting. You can use
              our Patreon RSS this week to listen to our first episode at 10PM
              CT TONIGHT! That's right, because of the technical hurdles we're
              putting everyone through, and because we're kind of too excited to
              wait anyway, we're releasing our first episode of Regulation
              Podcast tonight at 10pm CT. If you prefer to get it on youtube,
              you can. We'll be posting it to our Regulation Podcast Gaming
              Channel which is right here:
              https://www.youtube.com/@TheRegulationPodcast
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
