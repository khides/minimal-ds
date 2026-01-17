import { cn } from '../../utils/cn'
import { Button } from '../Button'

export type HeroTheme = 'light' | 'dark'

export type HeroAction = {
  label: string
  href: string
}

export type HeroSectionProps = {
  title: string
  tagline?: string
  subtitle?: string
  theme?: HeroTheme
  primaryAction?: HeroAction
  secondaryAction?: HeroAction
  backgroundImage?: string
  className?: string
}

export function HeroSection({
  title,
  tagline,
  subtitle,
  theme = 'light',
  primaryAction,
  secondaryAction,
  backgroundImage,
  className,
}: HeroSectionProps) {
  const isDark = theme === 'dark'

  return (
    <section
      className={cn(
        'relative min-h-[580px] lg:min-h-[692px] flex flex-col items-center justify-center text-center py-section-padding-sm lg:py-section-padding',
        isDark ? 'bg-apple-black text-white' : 'bg-apple-white text-apple-gray-900',
        className
      )}
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : undefined
      }
    >
      <div className="max-w-content mx-auto px-6">
        {/* Eyebrow/Subtitle */}
        {subtitle && (
          <p
            className={cn(
              'text-eyebrow tracking-wider mb-2',
              isDark ? 'text-apple-gray-400' : 'text-apple-gray-600'
            )}
          >
            {subtitle}
          </p>
        )}

        {/* Title */}
        <h1 className="text-hero-headline-sm md:text-hero-headline-md lg:text-hero-headline font-sf-pro-display mb-4">
          {title}
        </h1>

        {/* Tagline */}
        {tagline && (
          <p
            className={cn(
              'text-body-elevated max-w-2xl mx-auto mb-6',
              isDark ? 'text-apple-gray-300' : 'text-apple-gray-600'
            )}
          >
            {tagline}
          </p>
        )}

        {/* Actions */}
        {(primaryAction || secondaryAction) && (
          <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-6">
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
    </section>
  )
}
