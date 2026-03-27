import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/lv1/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'Visual style of the button.',
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'destructive', 'link', 'inverse'],
      table: {
        type: { summary: '"primary" | "secondary" | "outline" | "ghost" | "destructive" | "link" | "inverse"' },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      description: 'Size of the button.',
      control: 'select',
      options: ['sm', 'md', 'lg', 'icon'],
      table: {
        type: { summary: '"sm" | "md" | "lg" | "icon"' },
        defaultValue: { summary: 'md' },
      },
    },
    icon: {
      description: 'Lucide icon name in PascalCase (e.g. "Search", "ArrowRight").',
      control: 'text',
      table: {
        type: { summary: 'IconName' },
        defaultValue: { summary: '-' },
      },
    },
    iconPosition: {
      description: 'Position of the icon relative to the label text.',
      control: 'select',
      options: ['start', 'end'],
      table: {
        type: { summary: '"start" | "end"' },
        defaultValue: { summary: 'start' },
      },
    },
    asChild: {
      description: 'Delegates props to the child element via Radix Slot.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      description: 'Disables the button and applies disabled styling.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    children: {
      description: 'Label text or content inside the button.',
      control: 'text',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Playground: Story = {
  name: 'Playground',
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Button',
  },
}

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="link">Link</Button>
      <Button variant="inverse">Inverse</Button>
    </div>
  ),
}

export const Sizes: Story = {
  name: 'Sizes',
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button icon="Plus" size="icon" aria-label="Add" />
    </div>
  ),
}

export const Icons: Story = {
  name: 'Icons',
  render: () => (
    <div className="flex items-center gap-4">
      <Button icon="Search">Search</Button>
      <Button icon="ArrowRight" iconPosition="end">Next</Button>
      <Button icon="Plus" size="icon" aria-label="Add" />
      <Button variant="destructive" icon="Trash2">Delete</Button>
    </div>
  ),
}

export const IconPositions: Story = {
  name: 'Icon Positions',
  render: () => (
    <div className="flex items-center gap-4">
      <Button icon="ChevronLeft">Back</Button>
      <Button icon="ChevronRight" iconPosition="end">Next</Button>
      <Button icon="Download" size="sm">Download</Button>
      <Button icon="Send" size="lg" iconPosition="end">Send</Button>
    </div>
  ),
}

export const Disabled: Story = {
  name: 'Disabled',
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button disabled>Primary</Button>
      <Button variant="secondary" disabled>Secondary</Button>
      <Button variant="outline" disabled>Outline</Button>
      <Button variant="destructive" disabled icon="Trash2">Delete</Button>
    </div>
  ),
}
