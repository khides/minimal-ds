import type { Meta, StoryObj } from '@storybook/react'
import { Footer } from './Footer'

const meta = {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Footer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const CustomLocale: Story = {
  args: {
    locale: 'Japan',
    copyright: `Copyright © ${new Date().getFullYear()} Apple Inc. All rights reserved.`,
  },
}

export const MinimalSections: Story = {
  args: {
    sections: [
      {
        title: 'Products',
        links: [
          { label: 'Mac', href: '/mac' },
          { label: 'iPhone', href: '/iphone' },
          { label: 'iPad', href: '/ipad' },
        ],
      },
      {
        title: 'Support',
        links: [
          { label: 'Contact Us', href: '/contact' },
          { label: 'Help', href: '/help' },
        ],
      },
    ],
  },
}
