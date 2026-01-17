import { cn } from '../../utils/cn'

export type FooterLink = {
  label: string
  href: string
}

export type FooterSection = {
  title: string
  links: FooterLink[]
}

export type FooterProps = {
  sections?: FooterSection[]
  locale?: string
  copyright?: string
  className?: string
}

const defaultSections: FooterSection[] = [
  {
    title: 'Shop and Learn',
    links: [
      { label: 'Store', href: '/store' },
      { label: 'Mac', href: '/mac' },
      { label: 'iPad', href: '/ipad' },
      { label: 'iPhone', href: '/iphone' },
      { label: 'Watch', href: '/watch' },
      { label: 'AirPods', href: '/airpods' },
      { label: 'TV & Home', href: '/tv-home' },
      { label: 'AirTag', href: '/airtag' },
      { label: 'Accessories', href: '/accessories' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Apple Music', href: '/apple-music' },
      { label: 'Apple TV+', href: '/apple-tv-plus' },
      { label: 'Apple Fitness+', href: '/apple-fitness-plus' },
      { label: 'Apple News+', href: '/apple-news-plus' },
      { label: 'Apple Arcade', href: '/apple-arcade' },
      { label: 'iCloud', href: '/icloud' },
      { label: 'Apple One', href: '/apple-one' },
      { label: 'Apple Card', href: '/apple-card' },
      { label: 'Apple Books', href: '/apple-books' },
    ],
  },
  {
    title: 'Apple Store',
    links: [
      { label: 'Find a Store', href: '/retail' },
      { label: 'Genius Bar', href: '/genius-bar' },
      { label: 'Today at Apple', href: '/today' },
      { label: 'Apple Camp', href: '/apple-camp' },
      { label: 'Apple Store App', href: '/apple-store-app' },
      { label: 'Certified Refurbished', href: '/refurbished' },
      { label: 'Financing', href: '/financing' },
      { label: 'Carrier Deals at Apple', href: '/carrier-deals' },
      { label: 'Order Status', href: '/order-status' },
      { label: 'Shopping Help', href: '/shopping-help' },
    ],
  },
  {
    title: 'For Business',
    links: [
      { label: 'Apple and Business', href: '/business' },
      { label: 'Shop for Business', href: '/shop-business' },
    ],
  },
  {
    title: 'Apple Values',
    links: [
      { label: 'Accessibility', href: '/accessibility' },
      { label: 'Education', href: '/education' },
      { label: 'Environment', href: '/environment' },
      { label: 'Inclusion and Diversity', href: '/inclusion-diversity' },
      { label: 'Privacy', href: '/privacy' },
      { label: 'Supplier Responsibility', href: '/supplier-responsibility' },
    ],
  },
  {
    title: 'About Apple',
    links: [
      { label: 'Newsroom', href: '/newsroom' },
      { label: 'Apple Leadership', href: '/leadership' },
      { label: 'Career Opportunities', href: '/careers' },
      { label: 'Investors', href: '/investors' },
      { label: 'Ethics & Compliance', href: '/ethics' },
      { label: 'Events', href: '/events' },
      { label: 'Contact Apple', href: '/contact' },
    ],
  },
]

export function Footer({
  sections = defaultSections,
  locale = 'United States',
  copyright = `Copyright © ${new Date().getFullYear()} Apple Inc. All rights reserved.`,
  className,
}: FooterProps) {
  return (
    <footer
      className={cn('bg-apple-gray-100 text-apple-gray-600 font-sf-pro', className)}
    >
      <div className="max-w-content-wide mx-auto px-4 lg:px-8 py-8">
        {/* Footer Sections */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-8">
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-xs font-semibold text-apple-gray-900 mb-3">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-xs text-apple-gray-600 hover:text-apple-gray-900 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <hr className="border-apple-gray-300 mb-4" />

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <p className="text-xs text-apple-gray-600">
            More ways to shop:{' '}
            <a href="/retail" className="text-apple-blue hover:underline">
              Find an Apple Store
            </a>{' '}
            or{' '}
            <a href="/shop/other-retailers" className="text-apple-blue hover:underline">
              other retailer
            </a>{' '}
            near you. Or call 1-800-MY-APPLE.
          </p>

          <p className="text-xs text-apple-gray-600">{locale}</p>
        </div>

        {/* Copyright */}
        <div className="mt-4 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
          <p className="text-xs text-apple-gray-600">{copyright}</p>

          <div className="flex flex-wrap gap-4">
            <a href="/privacy" className="text-xs text-apple-gray-600 hover:text-apple-gray-900">
              Privacy Policy
            </a>
            <a href="/terms" className="text-xs text-apple-gray-600 hover:text-apple-gray-900">
              Terms of Use
            </a>
            <a href="/sales-refund" className="text-xs text-apple-gray-600 hover:text-apple-gray-900">
              Sales and Refunds
            </a>
            <a href="/legal" className="text-xs text-apple-gray-600 hover:text-apple-gray-900">
              Legal
            </a>
            <a href="/sitemap" className="text-xs text-apple-gray-600 hover:text-apple-gray-900">
              Site Map
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
