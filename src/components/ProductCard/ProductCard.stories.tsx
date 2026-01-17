import type { Meta, StoryObj } from '@storybook/react'
import { ProductCard } from './ProductCard'

const meta = {
  title: 'Components/ProductCard',
  component: ProductCard,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: 'select',
      options: ['light', 'dark'],
    },
    layout: {
      control: 'select',
      options: ['full-width', 'half-width'],
    },
  },
} satisfies Meta<typeof ProductCard>

export default meta
type Story = StoryObj<typeof meta>

export const LightFullWidth: Story = {
  args: {
    subtitle: 'WATCH',
    title: 'SERIES 10',
    tagline: 'Thinnest satisfies ever.',
    theme: 'light',
    layout: 'full-width',
    primaryAction: { label: 'Learn more', href: '/watch' },
    secondaryAction: { label: 'Shop Watch', href: '/shop/watch' },
  },
}

export const DarkFullWidth: Story = {
  args: {
    subtitle: 'MacBook Air',
    title: 'Lean. Mean. M3 machine.',
    tagline: 'The most portable Mac.',
    theme: 'dark',
    layout: 'full-width',
    primaryAction: { label: 'Learn more', href: '/macbook-air' },
    secondaryAction: { label: 'Shop MacBook Air', href: '/shop/macbook-air' },
  },
}

export const HalfWidth: Story = {
  args: {
    subtitle: 'AirPods Pro 2',
    title: 'Adaptive Audio. Now playing.',
    theme: 'light',
    layout: 'half-width',
    primaryAction: { label: 'Learn more', href: '/airpods-pro' },
    secondaryAction: { label: 'Buy', href: '/shop/airpods-pro' },
  },
}

export const DarkHalfWidth: Story = {
  args: {
    title: 'AirPods Max',
    tagline: 'A perfect balance of exhilarating high-fidelity audio.',
    theme: 'dark',
    layout: 'half-width',
    primaryAction: { label: 'Learn more', href: '/airpods-max' },
  },
}

export const Grid: Story = {
  args: {
    title: 'iPad Pro',
    layout: 'half-width',
  },
  render: () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
      <ProductCard
        subtitle="iPad Pro"
        title="Unbelievably thin."
        tagline="Incredibly powerful."
        theme="dark"
        layout="half-width"
        primaryAction={{ label: 'Learn more', href: '/ipad-pro' }}
        secondaryAction={{ label: 'Shop iPad Pro', href: '/shop/ipad-pro' }}
      />
      <ProductCard
        subtitle="iPad Air"
        title="Fresh Air."
        tagline="Two Icons. Icons."
        theme="light"
        layout="half-width"
        primaryAction={{ label: 'Learn more', href: '/ipad-air' }}
        secondaryAction={{ label: 'Shop iPad Air', href: '/shop/ipad-air' }}
      />
    </div>
  ),
}
