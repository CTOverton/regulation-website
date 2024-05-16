import Image, { StaticImageData } from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight'
import Link from 'next/link'

export type CardItem = {
  name: string
  image: StaticImageData
  description: string
  href: string
  linkText: string
}

export default function Card({ item }: { item: CardItem }) {
  return (
    <Link href={item.href} className={'group flex flex-col space-y-12'}>
      <div className={'relative'}>
        <div
          className={
            'absolute h-full w-full bg-gradient-to-t from-black to-50%'
          }
        ></div>
        <Image src={item.image} alt={item.name} />

        <h2 className={'absolute -bottom-4 mx-4 w-full text-5xl font-bold'}>
          {item.name}
        </h2>
      </div>
      <p className={'mx-4 flex-1 text-sm'}>{item.description}</p>
      <div className={'mx-4 space-x-4'}>
        <span>{item.linkText}</span>
        <FontAwesomeIcon
          className={'h-4 w-4 transition-transform group-hover:translate-x-4'}
          icon={faArrowRight}
        />
      </div>
    </Link>
  )
}
