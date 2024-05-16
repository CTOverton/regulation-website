import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { Links } from '@/config/links'

export default function Footer() {
  return (
    <footer
      className={'mt-24 flex w-full items-center bg-neutral-800 px-8 py-8'}
    >
      <div
        className={
          'flex-1 justify-between space-y-4 text-center text-sm md:flex md:space-y-0'
        }
      >
        <div>Made with ❤️ by the community</div>
        <div>Regulation Company LLC · All rights reserved</div>
        <div>
          <Link href={Links.github} target={'_blank'}>
            <div className={'group space-x-2'}>
              <span className={'transition-opacity group-hover:opacity-50'}>
                Edit on GitHub
              </span>
              <FontAwesomeIcon
                icon={faGithub}
                className={'h-4 w-4 transition-opacity group-hover:opacity-50'}
              />
            </div>
          </Link>
        </div>
      </div>
    </footer>
  )
}
