import { cn } from '../../utils/cn'
import { Button } from '../Button'

export type ProductCardTheme = 'light' | 'dark'
export type ProductCardLayout = 'full-width' | 'half-width'

export type ProductCardAction = {
  label: string
  href: string
}

export type ProductCardProps = {
  title: string
  subtitle?: string
  tagline?: string
  theme?: ProductCardTheme
  layout?: ProductCardLayout
  image?: string
  imageAlt?: string
  imagePosition?: 'top' | 'center' | 'bottom'
  primaryAction?: ProductCardAction
  secondaryAction?: ProductCardAction
  className?: string
}

export function ProductCard({
  title,
  subtitle,
  tagline,
  theme = 'light',
  layout = 'full-width',
  image,
  imageAlt,
  imagePosition = 'bottom',
  primaryAction,
  secondaryAction,
  className,
}: ProductCardProps) {
  const isDark = theme === 'dark'
  const isHalfWidth = layout === 'half-width'

  const imagePositionClasses = {
    top: 'items-start pt-24',
    center: 'items-center',
    bottom: 'items-end',
  }

  return (
    <section
      className={cn(
        'relative overflow-hidden',
        isHalfWidth ? 'min-h-[500px] lg:min-h-[580px]' : 'min-h-[580px] lg:min-h-[692px]',
        isDark ? 'bg-apple-black text-white' : 'bg-apple-white text-apple-gray-900',
        className
      )}
    >
      <div className="relative z-10 py-12 lg:py-16 text-center">
        <div className="max-w-content mx-auto px-6">
          {/* Subtitle/Eyebrow */}
          {subtitle && (
            <p
              className={cn(
                'text-eyebrow tracking-wider mb-1',
                isDark ? 'text-apple-gray-400' : 'text-apple-gray-600'
              )}
            >
              {subtitle}
            </p>
          )}

          {/* Title */}
          <h2
            className={cn(
              'font-sf-pro-display mb-2',
              isHalfWidth
                ? 'text-card-headline-sm lg:text-card-headline'
                : 'text-section-headline-sm lg:text-section-headline'
            )}
          >
            {title}
          </h2>

          {/* Tagline */}
          {tagline && (
            <p
              className={cn(
                'text-body-elevated max-w-xl mx-auto mb-4',
                isDark ? 'text-apple-gray-300' : 'text-apple-gray-600'
              )}
            >
              {tagline}
            </p>
          )}

          {/* Actions */}
          {(primaryAction || secondaryAction) && (
            <div className="flex flex-wrap items-center justify-center gap-4">
              {primaryAction && (
                <Button
                  variant="primary-link"
                  href={primaryAction.href}
                  showChevron
                  className={isDark ? 'text-apple-blue' : undefined}
                >
                  {primaryAction.label}
                </Button>
              )}
              {secondaryAction && (
                <Button
                  variant="secondary-link"
                  href={secondaryAction.href}
                  showChevron
                  className={isDark ? 'text-apple-gray-300' : undefined}
                >
                  {secondaryAction.label}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Background Image */}
      {image && (
        <div className={cn(
          'absolute inset-0 flex justify-center',
          imagePositionClasses[imagePosition]
        )}>
          <img
            src={image}
            alt={imageAlt || title}
            className={cn(
              'max-w-full object-contain',
              imagePosition === 'center' ? 'max-h-[85%]' : 'max-h-[70%]',
              imagePosition === 'bottom' && 'object-bottom'
            )}
          />
        </div>
      )}
    </section>
  )
}
