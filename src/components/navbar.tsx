'use client'

import { Disclosure } from '@headlessui/react'
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark'
import { faPatreon } from '@fortawesome/free-brands-svg-icons/faPatreon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo_Icon from '@/assets/icons/RegulationPodcast-Icon.svg'
import Image from 'next/image'
import { Links, Navbar_Links, NavLink } from '@/config/links'
import { useSelectedLayoutSegment } from 'next/navigation'
import Link from 'next/link'

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <>
      <Disclosure as="nav" className="bg-black">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 pt-2">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center pr-2 sm:static sm:inset-auto sm:pr-0">
                  <Disclosure.Button
                    as={Link}
                    href={'/'}
                    className="relative rounded-full transition-opacity hover:opacity-50"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Home</span>
                    <Image
                      src={Logo_Icon}
                      alt=""
                      aria-label={'Regulation Icon'}
                      className={'h-10 w-10 object-cover md:h-14 md:w-14'}
                    />
                  </Disclosure.Button>
                </div>

                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
                  <div className="hidden sm:mr-6 sm:block">
                    <div className="flex space-x-4">
                      {Navbar_Links.map((item) => (
                        <NavItem key={item.name} item={item} />
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-shrink-0 items-center">
                    <Link
                      href={Links.patreon}
                      className="relative rounded-full p-1 text-white transition-opacity hover:opacity-50"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Patreon</span>
                      <FontAwesomeIcon
                        icon={faPatreon}
                        className={
                          'h-6 w-6 transition-opacity hover:opacity-50'
                        }
                      />
                    </Link>
                  </div>
                </div>

                <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-white transition-colors hover:bg-neutral-700">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    <FontAwesomeIcon
                      icon={open ? faXmark : faBars}
                      className={'h-6 w-6 transition-opacity hover:opacity-50'}
                    />
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="absolute h-full w-full space-y-1 bg-black px-2 pb-3 pt-2">
                {Navbar_Links.map((item) => (
                  <MobileNavItem key={item.name} item={item} />
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  )
}

function NavItem({ item }: { item: NavLink }) {
  const segment = useSelectedLayoutSegment()
  const isActive = item.href === segment

  return (
    <Link
      key={item.name}
      href={item.href}
      className={classNames(
        isActive ? 'bg-neutral-900' : 'hover:bg-neutral-700',
        'rounded-md px-3 py-2 text-sm font-medium text-white transition-colors',
      )}
      aria-current={isActive ? 'page' : undefined}
    >
      {item.name}
    </Link>
  )
}

function MobileNavItem({ item }: { item: NavLink }) {
  const segment = useSelectedLayoutSegment()
  const isActive = item.href === segment

  return (
    <Disclosure.Button
      key={item.name}
      as={Link}
      href={item.href}
      className={classNames(
        isActive ? 'bg-neutral-900 text-white' : 'hover:bg-neutral-700',
        'block rounded-md px-3 py-2 text-base font-medium text-white transition-colors',
      )}
      aria-current={isActive ? 'page' : undefined}
    >
      {item.name}
    </Disclosure.Button>
  )
}
