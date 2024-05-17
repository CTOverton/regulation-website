import Hero from '@/sections/hero'
import ContentCards from '@/sections/contentCards'
import Schedule from '@/sections/schedule'

export default function Home() {
  return (
    <main className="space-y-24 p-4 pt-16 lg:pt-32">
      <Hero className={'mx-auto max-w-7xl'} />
      <ContentCards className={'mx-auto max-w-7xl'} />
      <Schedule />
    </main>
  )
}
