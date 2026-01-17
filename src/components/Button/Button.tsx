import { forwardRef, type AnchorHTMLAttributes, type ButtonHTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

export type ButtonVariant = 'primary' | 'secondary' | 'primary-link' | 'secondary-link'
export type ButtonSize = 'sm' | 'md' | 'lg'

type BaseProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  showChevron?: boolean
  disabled?: boolean
  className?: string
  children: React.ReactNode
}

type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    href?: undefined
  }

type ButtonAsLink = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    href: string
  }

export type ButtonProps = ButtonAsButton | ButtonAsLink

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-apple-blue text-white hover:bg-apple-blue-hover rounded-full px-6 py-3 font-sf-pro font-medium',
  secondary:
    'bg-transparent text-apple-blue border border-apple-blue hover:bg-apple-blue hover:text-white rounded-full px-6 py-3 font-sf-pro font-medium',
  'primary-link':
    'text-apple-blue hover:underline font-sf-pro font-normal inline-flex items-center gap-1',
  'secondary-link':
    'text-apple-gray-600 hover:text-apple-gray-900 font-sf-pro font-normal inline-flex items-center gap-1',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
}

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ variant = 'primary-link', size = 'md', showChevron = false, disabled = false, className, children, ...props }, ref) => {
    const baseStyles = cn(
      'transition-all duration-200 inline-flex items-center justify-center',
      variantStyles[variant],
      sizeStyles[size],
      disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
      className
    )

    const content = (
      <>
        {children}
        {showChevron && (
          <span className="ml-1 transition-transform group-hover:translate-x-0.5" aria-hidden="true">
            &gt;
          </span>
        )}
      </>
    )

    if ('href' in props && props.href) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={cn(baseStyles, 'group')}
          {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {content}
        </a>
      )
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={cn(baseStyles, 'group')}
        disabled={disabled}
        {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {content}
      </button>
    )
  }
)

Button.displayName = 'Button'
