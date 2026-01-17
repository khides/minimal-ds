import { useState } from 'react'
import { cn } from '../../utils/cn'

export type NavItem = {
  label: string
  href: string
}

export type NavHeaderProps = {
  items?: NavItem[]
  showSearch?: boolean
  showCart?: boolean
  className?: string
}

const defaultNavItems: NavItem[] = [
  { label: 'Store', href: '/store' },
  { label: 'Mac', href: '/mac' },
  { label: 'iPad', href: '/ipad' },
  { label: 'iPhone', href: '/iphone' },
  { label: 'Watch', href: '/watch' },
  { label: 'AirPods', href: '/airpods' },
  { label: 'TV & Home', href: '/tv-home' },
  { label: 'Entertainment', href: '/entertainment' },
  { label: 'Accessories', href: '/accessories' },
  { label: 'Support', href: '/support' },
]

export function NavHeader({
  items = defaultNavItems,
  showSearch = true,
  showCart = true,
  className,
}: NavHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header
      className={cn(
        'sticky top-0 z-50 bg-apple-gray-100/80 backdrop-blur-xl',
        className
      )}
    >
      <nav className="max-w-content-wide mx-auto h-nav-height flex items-center justify-between px-4 lg:px-8">
        {/* Apple Logo */}
        <a href="/" className="text-apple-gray-900 hover:text-apple-gray-600 transition-colors">
          <svg
            className="w-4 h-4"
            viewBox="0 0 14 17"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.0729 13.2812C12.7448 14.0573 12.3594 14.7708 11.9167 15.4271C11.3073 16.3177 10.8073 16.9479 10.4219 17.3177C9.83073 17.8958 9.19792 18.1927 8.52344 18.2083C8.04688 18.2083 7.47135 18.0729 6.80208 17.7969C6.13021 17.5234 5.51302 17.3958 4.94792 17.3958C4.35677 17.3958 3.72396 17.5234 3.04948 17.7969C2.37396 18.0729 1.82813 18.2161 1.40885 18.2292C0.760417 18.2526 0.114583 17.9479 -0.528646 17.3177C-0.947917 16.9167 -1.47135 16.2604 -2.09896 15.349C-2.77083 14.3802 -3.32292 13.2604 -3.75521 11.9896C-4.21875 10.6198 -4.45052 9.29167 -4.45052 8.00521C-4.45052 6.52604 -4.14063 5.25 -3.52083 4.17969C-3.03125 3.32031 -2.38281 2.65104 -1.57552 2.17188C-0.768229 1.69271 0.0989583 1.44792 1.02604 1.43229C1.53125 1.43229 2.19792 1.58854 3.02865 1.89583C3.85677 2.20417 4.40104 2.36042 4.66146 2.36042C4.85156 2.36042 5.45313 2.17708 6.45313 1.8125C7.39844 1.47396 8.19531 1.33333 8.84896 1.38542C10.5339 1.52083 11.8099 2.14844 12.6693 3.27344C11.1693 4.20052 10.4271 5.48177 10.4427 7.11458C10.4557 8.40104 10.9375 9.47396 11.8854 10.3281C12.3203 10.7344 12.8047 11.0521 13.3411 11.2812C13.2552 11.5938 13.1667 11.8932 13.0729 12.1797V13.2812Z" transform="translate(4.45052 -1.38542)" />
          </svg>
          <span className="sr-only">Apple</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-8">
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-xs text-apple-gray-900 hover:text-apple-gray-600 transition-colors font-sf-pro"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {showSearch && (
            <button
              className="text-apple-gray-900 hover:text-apple-gray-600 transition-colors"
              aria-label="Search"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          )}

          {showCart && (
            <button
              className="text-apple-gray-900 hover:text-apple-gray-600 transition-colors"
              aria-label="Shopping Cart"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </button>
          )}

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-apple-gray-900 hover:text-apple-gray-600 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-apple-gray-100 border-t border-apple-gray-300">
          <ul className="py-4 px-8 space-y-4">
            {items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block text-base text-apple-gray-900 hover:text-apple-gray-600 transition-colors font-sf-pro"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
