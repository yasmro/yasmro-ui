import type { Meta, StoryObj } from '@storybook/react-vite'
import { Text } from './Text'

const meta: Meta<typeof Text> = {
  title: 'Components/lv1/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'Semantic role of the text.',
      control: 'select',
      options: ['body', 'label', 'heading'],
      table: {
        type: { summary: '"body" | "label" | "heading"' },
        defaultValue: { summary: 'body' },
      },
    },
    size: {
      description: 'Size of the text. Available sizes depend on the variant.',
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      table: {
        type: { summary: '"xs" | "sm" | "md" | "lg" | "xl" | "2xl"' },
        defaultValue: { summary: 'md' },
      },
    },
    color: {
      description: 'Color of the text.',
      control: 'select',
      options: ['default', 'muted', 'accent', 'inherit'],
      table: {
        type: { summary: '"default" | "muted" | "accent" | "inherit"' },
        defaultValue: { summary: 'default' },
      },
    },
    align: {
      description: 'Text alignment.',
      control: 'select',
      options: ['left', 'center', 'right'],
      table: {
        type: { summary: '"left" | "center" | "right"' },
        defaultValue: { summary: '-' },
      },
    },
    truncate: {
      description: 'Truncate text with ellipsis on overflow.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    as: {
      description: 'HTML element to render.',
      control: 'select',
      options: ['p', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      table: {
        type: { summary: '"p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"' },
        defaultValue: { summary: '"p" (body/heading) or "label" (label)' },
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
    children: {
      description: 'Text content.',
      control: 'text',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Text>

export const Playground: Story = {
  name: 'Playground',
  args: {
    variant: 'body',
    size: 'md',
    children: 'The quick brown fox jumps over the lazy dog.',
  },
}

export const BodySizes: Story = {
  name: 'Body Sizes',
  render: () => (
    <div className="flex flex-col gap-3">
      <Text variant="body" size="xs">
        Body XS — The quick brown fox jumps over the lazy dog.
      </Text>
      <Text variant="body" size="sm">
        Body SM — The quick brown fox jumps over the lazy dog.
      </Text>
      <Text variant="body" size="md">
        Body MD — The quick brown fox jumps over the lazy dog.
      </Text>
      <Text variant="body" size="lg">
        Body LG — The quick brown fox jumps over the lazy dog.
      </Text>
    </div>
  ),
}

export const LabelSizes: Story = {
  name: 'Label Sizes',
  render: () => (
    <div className="flex flex-col gap-3">
      <Text variant="label" size="xs">
        Label XS
      </Text>
      <Text variant="label" size="sm">
        Label SM
      </Text>
      <Text variant="label" size="md">
        Label MD
      </Text>
      <Text variant="label" size="lg">
        Label LG
      </Text>
    </div>
  ),
}

export const HeadingSizes: Story = {
  name: 'Heading Sizes',
  render: () => (
    <div className="flex flex-col gap-4">
      <Text variant="heading" size="sm">
        Heading SM
      </Text>
      <Text variant="heading" size="md">
        Heading MD
      </Text>
      <Text variant="heading" size="lg">
        Heading LG
      </Text>
      <Text variant="heading" size="xl">
        Heading XL
      </Text>
      <Text variant="heading" size="2xl">
        Heading 2XL
      </Text>
    </div>
  ),
}

export const Colors: Story = {
  name: 'Colors',
  render: () => (
    <div className="flex flex-col gap-3">
      <Text color="default">Default color</Text>
      <Text color="muted">Muted color</Text>
      <Text color="accent">Accent color</Text>
      <div className="text-blue-500">
        <Text color="inherit">Inherit color (from parent)</Text>
      </div>
    </div>
  ),
}

export const Truncated: Story = {
  name: 'Truncated',
  render: () => (
    <div className="w-64">
      <Text truncate>
        This is a very long text that should be truncated with an ellipsis when it overflows the
        container.
      </Text>
    </div>
  ),
}
