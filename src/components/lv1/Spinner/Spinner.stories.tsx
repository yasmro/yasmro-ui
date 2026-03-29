import type { Meta, StoryObj } from '@storybook/react-vite'
import { Spinner } from './Spinner'

const meta: Meta<typeof Spinner> = {
  title: 'Components/lv1/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      description: 'Spinner animation type.',
      control: 'select',
      options: ['default', 'ripple'],
      table: {
        type: { summary: '"default" | "ripple"' },
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      description: 'Size of the spinner.',
      control: 'select',
      options: ['sm', 'md', 'lg'],
      table: {
        type: { summary: '"sm" | "md" | "lg"' },
        defaultValue: { summary: 'md' },
      },
    },
    label: {
      description: 'Accessible label for screen readers.',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Loading' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Spinner>

export const Playground: Story = {
  name: 'Playground',
  args: {
    type: 'default',
    size: 'md',
    label: 'Loading',
  },
}

export const AllTypes: Story = {
  name: 'All Types',
  render: () => (
    <div className="flex items-center gap-8">
      <Spinner type="default" />
      <Spinner type="ripple" />
    </div>
  ),
}

export const Sizes: Story = {
  name: 'Sizes',
  render: () => (
    <div className="flex items-center gap-8">
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>
  ),
}

export const OnDarkBackground: Story = {
  name: 'On Dark Background',
  render: () => (
    <div className="flex items-center gap-8 rounded-lg bg-ink-black p-8 text-paper-white">
      <Spinner type="default" />
      <Spinner type="ripple" />
    </div>
  ),
}
