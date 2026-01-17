import type { Meta, StoryObj } from '@storybook/react'
import { NavHeader } from './NavHeader'

const meta = {
  title: 'Components/NavHeader',
  component: NavHeader,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NavHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const WithCustomItems: Story = {
  args: {
    items: [
      { label: 'Products', href: '/products' },
      { label: 'Services', href: '/services' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  },
}

export const NoSearch: Story = {
  args: {
    showSearch: false,
  },
}

export const NoCart: Story = {
  args: {
    showCart: false,
  },
}

export const Minimal: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Shop', href: '/shop' },
    ],
    showSearch: false,
    showCart: false,
  },
}
