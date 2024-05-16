import Hero from '@/sections/hero'
import ContentCards from '@/sections/contentCards'

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl space-y-24 p-4 pt-16 lg:pt-32">
      <Hero />
      <ContentCards />
    </main>
  )
}
