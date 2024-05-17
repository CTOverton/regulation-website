import { AnimateSlideUp } from '@/components/AnimatedSlideUp'

enum Label {
  BogStandardTier = 'Bog Standard Tier',
  ExtraMediumTier = 'Extra Medium Tier',
  TheLastGreatTier = 'The Last Great Tier',
  Clip = 'Clip',
  Gameplay = 'Gameplay',
  Public = 'Public',
  Live = 'Live',
}

const labelStyles = {
  [Label.BogStandardTier]: 'bg-neutral-600 border-neutral-200 text-white',
  [Label.ExtraMediumTier]: 'bg-orange-800 border-orange-400 text-orange-300',
  [Label.TheLastGreatTier]: 'bg-yellow-800 border-yellow-400 text-yellow-400',
  [Label.Clip]: 'bg-green-800 border-green-400 text-green-400',
  [Label.Gameplay]: 'bg-purple-800 border-purple-400 text-purple-300',
  [Label.Public]: 'bg-blue-800 border-blue-400 text-blue-300',
  [Label.Live]: 'bg-red-800 border-red-400 text-red-300',
}

const columns: {
  title: string
  content: { title: string; description: string; labels: Label[] }[]
}[] = [
  {
    title: 'Sunday',
    content: [
      {
        title: 'Patreon Content',
        description: 'Premium content once per month',
        labels: [Label.BogStandardTier],
      },
      {
        title: 'Patreon Content',
        description: 'Premium content twice per month',
        labels: [Label.ExtraMediumTier, Label.TheLastGreatTier],
      },
      {
        title: 'Bonus Clips',
        description: 'Bi-weekly, twice per month',
        labels: [Label.Clip],
      },
    ],
  },
  {
    title: 'Tuesday',
    content: [
      {
        title: 'Twitch VOD',
        description: '',
        labels: [Label.Gameplay],
      },
    ],
  },
  {
    title: 'Wednesday',
    content: [
      {
        title: 'Regulation Podcast',
        description: 'The main event',
        labels: [Label.Public],
      },
    ],
  },
  {
    title: 'Friday',
    content: [
      {
        title: 'Twitch Stream',
        description: 'Live stream at 2 pm central',
        labels: [Label.Live],
      },
    ],
  },
  {
    title: 'Saturday',
    content: [
      {
        title: 'Gameplay',
        description: '',
        labels: [Label.Gameplay],
      },
      {
        title: 'Supplemental',
        description: '',
        labels: [Label.Public],
      },
    ],
  },
]

export default function Schedule({ className }: { className?: string }) {
  return (
    <AnimateSlideUp>
      <section id={'schedule'} className={className}>
        <h1 className={'text-display mb-16 text-center'}>content schedule</h1>
        <div className={'flex space-x-4 overflow-x-scroll'}>
          {columns.map((column) => (
            <div
              key={column.title}
              className={
                'flex-1 space-y-4 rounded-xl border border-neutral-800 p-4'
              }
            >
              <h2 className={'font-bold'}>{column.title}</h2>
              {column.content.map((content, index) => (
                <div
                  key={`${content.title}-${index}`}
                  className={
                    'min-w-48 space-y-2 rounded-lg border border-neutral-700 bg-neutral-800 p-4'
                  }
                >
                  <h3 className={'text-sm'}>{content.title}</h3>
                  {content.description && (
                    <p className={'pb-4 text-sm text-neutral-500'}>
                      {content.description}
                    </p>
                  )}
                  <div className={'space-y-2'}>
                    {content.labels.map((label) => (
                      <div
                        key={label}
                        className={`mr-1.5 inline-block text-nowrap rounded-full border bg-opacity-50 px-3 py-1 text-xs ${labelStyles[label]}`}
                      >
                        {label}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </AnimateSlideUp>
  )
}
