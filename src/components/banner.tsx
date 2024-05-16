import { faPatreon } from '@fortawesome/free-brands-svg-icons/faPatreon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { Links } from '@/config/links'

export default function Banner() {
  return (
    <Link href={Links.patreon}>
      <div
        className={
          'group w-full space-x-2 bg-white py-1 text-center font-medium text-black'
        }
      >
        <span className={'transition-opacity group-hover:opacity-50'}>
          Support us directly on Patreon
        </span>
        <FontAwesomeIcon
          icon={faPatreon}
          className={'h-4 w-4 transition-opacity group-hover:opacity-50'}
        />
      </div>
    </Link>
  )
}
