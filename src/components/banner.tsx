import { faPatreon } from '@fortawesome/free-brands-svg-icons/faPatreon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { Links } from '@/config/links'
import { AnimateSlideDown } from '@/components/AnimatedSlideDown'

export default function Banner() {
  return (
    <AnimateSlideDown delay={0.8}>
      <Link href={Links.patreon}>
        <div
          className={
            'group flex w-full items-center justify-center space-x-2 bg-white py-1 text-center font-medium text-black'
          }
        >
          <div className={'transition-opacity group-hover:opacity-50'}>
            Support us directly on Patreon
          </div>
          <FontAwesomeIcon
            icon={faPatreon}
            className={'h-4 w-4 transition-opacity group-hover:opacity-50'}
          />
        </div>
      </Link>
    </AnimateSlideDown>
  )
}
