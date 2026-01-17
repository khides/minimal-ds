import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'primary-link', 'secondary-link'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    showChevron: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Buy',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Learn more',
  },
}

export const PrimaryLink: Story = {
  args: {
    variant: 'primary-link',
    children: 'Learn more',
    showChevron: true,
  },
}

export const SecondaryLink: Story = {
  args: {
    variant: 'secondary-link',
    children: 'Shop iPhone',
    showChevron: true,
  },
}

export const AsLink: Story = {
  args: {
    variant: 'primary-link',
    children: 'Learn more',
    showChevron: true,
    href: 'https://apple.com',
  },
}

export const Disabled: Story = {
  args: {
    variant: 'primary',
    children: 'Disabled',
    disabled: true,
  },
}

export const Sizes: Story = {
  args: {
    variant: 'primary',
    children: 'Button',
  },
  render: (args) => (
    <div className="flex items-center gap-4">
      <Button {...args} size="sm">Small</Button>
      <Button {...args} size="md">Medium</Button>
      <Button {...args} size="lg">Large</Button>
    </div>
  ),
}
