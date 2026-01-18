import { cn } from '../../utils/cn'

export interface FeaturePromoSectionProps {
  title?: string
  subtitle?: string
  backgroundImage?: string
  backgroundColor?: string
  theme?: 'light' | 'dark'
  size?: 'default' | 'large'
  textAlign?: 'left' | 'center'
  primaryAction?: { label: string; href: string }
  secondaryAction?: { label: string; href: string }
  className?: string
  children?: React.ReactNode
}

export function FeaturePromoSection({
  title,
  subtitle,
  backgroundImage,
  backgroundColor,
  theme = 'dark',
  size = 'default',
  textAlign = 'center',
  primaryAction,
  secondaryAction,
  className,
  children,
}: FeaturePromoSectionProps) {
  const isDark = theme === 'dark'
  const isLarge = size === 'large'

  return (
    <section
      className={cn(
        'relative w-full overflow-hidden',
        isLarge ? 'min-h-[600px]' : 'min-h-[500px]',
        isDark ? 'bg-black text-white' : 'bg-white text-gray-900',
        className
      )}
      style={{ backgroundColor: backgroundColor || undefined }}
    >
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}

      <div
        className={cn(
          'relative z-10 flex flex-col justify-center h-full py-16 px-8',
          isLarge ? 'min-h-[600px]' : 'min-h-[500px]',
          textAlign === 'center' && 'items-center text-center',
          textAlign === 'left' && 'items-start text-left'
        )}
      >
        {subtitle && (
          <p
            className={cn(
              'text-sm font-medium uppercase tracking-wider mb-2',
              isDark ? 'text-gray-300' : 'text-gray-600'
            )}
          >
            {subtitle}
          </p>
        )}

        {title && (
          <h2
            className={cn(
              'font-semibold mb-4',
              isLarge ? 'text-5xl md:text-6xl' : 'text-3xl md:text-4xl'
            )}
          >
            {title}
          </h2>
        )}

        {children}

        {(primaryAction || secondaryAction) && (
          <div className="flex flex-wrap gap-4 mt-6 justify-center">
            {primaryAction && (
              <a
                href={primaryAction.href}
                className={cn(
                  'text-lg hover:underline',
                  isDark ? 'text-blue-400' : 'text-blue-600'
                )}
              >
                {primaryAction.label} &gt;
              </a>
            )}
            {secondaryAction && (
              <a
                href={secondaryAction.href}
                className={cn(
                  'text-lg hover:underline',
                  isDark ? 'text-blue-400' : 'text-blue-600'
                )}
              >
                {secondaryAction.label} &gt;
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
