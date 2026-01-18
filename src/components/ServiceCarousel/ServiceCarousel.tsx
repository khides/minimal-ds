import { cn } from '../../utils/cn'

export interface ServiceItem {
  title: string
  subtitle?: string
  description?: string
  image: string
  imageAlt?: string
  href?: string
  backgroundColor?: string
  theme?: 'light' | 'dark'
}

export interface ServiceCarouselProps {
  items: ServiceItem[]
  columns?: 2 | 3 | 4 | 5
  theme?: 'light' | 'dark'
  className?: string
}

export function ServiceCarousel({
  items,
  columns = 4,
  theme = 'dark',
  className,
}: ServiceCarouselProps) {
  const isDark = theme === 'dark'

  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-4',
    5: 'grid-cols-2 md:grid-cols-5',
  }

  return (
    <section
      className={cn(
        'w-full py-4 px-3',
        isDark ? 'bg-black' : 'bg-white',
        className
      )}
    >
      <div className={cn('grid gap-3', gridCols[columns])}>
        {items.map((item, index) => (
          <ServiceCard key={index} item={item} parentTheme={theme} />
        ))}
      </div>
    </section>
  )
}

interface ServiceCardProps {
  item: ServiceItem
  parentTheme: 'light' | 'dark'
}

function ServiceCard({ item, parentTheme }: ServiceCardProps) {
  const cardTheme = item.theme || parentTheme
  const isDark = cardTheme === 'dark'

  const content = (
    <div
      className={cn(
        'relative rounded-2xl overflow-hidden h-[350px] lg:h-[380px]',
        isDark ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
      )}
      style={{ backgroundColor: item.backgroundColor || undefined }}
    >
      {item.image && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${item.image})` }}
        />
      )}

      <div className="relative z-10 p-6 h-full flex flex-col">
        {item.subtitle && (
          <p
            className={cn(
              'text-xs font-medium uppercase tracking-wider mb-1',
              isDark ? 'text-gray-400' : 'text-gray-500'
            )}
          >
            {item.subtitle}
          </p>
        )}

        <h3 className="text-xl font-semibold">{item.title}</h3>

        {item.description && (
          <p
            className={cn(
              'text-sm mt-2',
              isDark ? 'text-gray-300' : 'text-gray-600'
            )}
          >
            {item.description}
          </p>
        )}
      </div>
    </div>
  )

  if (item.href) {
    return (
      <a href={item.href} className="block hover:opacity-90 transition-opacity">
        {content}
      </a>
    )
  }

  return content
}
