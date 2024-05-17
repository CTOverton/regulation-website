import Podcast_Img from '@/assets/images/podcast.png'
import LetsPlay_Img from '@/assets/images/letsplay.png'
import Bingo_Img from '@/assets/images/bingo.png'
import { Links } from '@/config/links'
import Card, { CardItem } from '@/components/card'
import { AnimateSlideUp } from '@/components/AnimatedSlideUp'

const cards: CardItem[] = [
  {
    name: 'podcasts',
    image: Podcast_Img,
    description:
      'Join Andrew, Nick, Eric, Geoff and Gavin in a never-ending pursuit to make each other laugh at almost any cost.',
    href: Links.patreon,
    linkText: 'Listen to Podcasts',
  },
  {
    name: `let's plays`,
    image: LetsPlay_Img,
    description:
      "A weekly let's play will be going up every Saturday on our gaming channel. Expect primarily let's watch or single-cam games around our launch with the plan to do more multi-cam once we get our feet under us.",
    href: Links.social.youtube,
    linkText: 'Watch Lets Play',
  },
  {
    name: 'streams',
    image: Bingo_Img,
    description:
      'Every Friday at 2 pm central some combination of the regulation crew will get together to stream whatever they want. The VOD of these streams will be posted every Tuesday on our gaming channel.',
    href: Links.social.twitch,
    linkText: 'Play Bingo',
  },
]

export default function ContentCards({ className }: { className?: string }) {
  return (
    <section id={'content'} className={className}>
      <div className={'grid grid-cols-1 gap-16 lg:grid-cols-3'}>
        {cards.map((card, index) => (
          <AnimateSlideUp
            className={'flex'}
            key={card.name}
            delay={0.2 * index}
          >
            <Card item={card} />
          </AnimateSlideUp>
        ))}
      </div>
    </section>
  )
}
