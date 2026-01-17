import type { Meta, StoryObj } from '@storybook/react'
import { HeroSection } from './HeroSection'

const meta = {
  title: 'Components/HeroSection',
  component: HeroSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: 'select',
      options: ['light', 'dark'],
    },
  },
} satisfies Meta<typeof HeroSection>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {
    title: 'iPhone 16 Pro',
    tagline: 'Hello, Apple Intelligence.',
    theme: 'light',
    primaryAction: { label: 'Learn more', href: '/iphone' },
    secondaryAction: { label: 'Shop iPhone', href: '/shop/iphone' },
  },
}

export const Dark: Story = {
  args: {
    title: 'MacBook Pro',
    tagline: 'Mind-blowing. Head-turning.',
    theme: 'dark',
    primaryAction: { label: 'Learn more', href: '/macbook-pro' },
    secondaryAction: { label: 'Shop MacBook Pro', href: '/shop/macbook-pro' },
  },
}

export const WithSubtitle: Story = {
  args: {
    subtitle: 'NEW',
    title: 'iPhone 16',
    tagline: 'A total powerhouse.',
    theme: 'light',
    primaryAction: { label: 'Learn more', href: '/iphone-16' },
    secondaryAction: { label: 'Shop iPhone', href: '/shop/iphone' },
  },
}

export const SingleAction: Story = {
  args: {
    title: 'Apple Watch Series 10',
    tagline: 'Thinner. Bigger. Faster.',
    theme: 'dark',
    primaryAction: { label: 'Learn more', href: '/apple-watch' },
  },
}

export const TitleOnly: Story = {
  args: {
    title: 'Apple Intelligence',
    theme: 'light',
  },
}
