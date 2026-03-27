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
      description: 'ボタンの視覚スタイル',
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'destructive', 'link', 'inverse'],
      table: {
        type: { summary: '"primary" | "secondary" | "outline" | "ghost" | "destructive" | "link" | "inverse"' },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      description: 'ボタンのサイズ',
      control: 'select',
      options: ['sm', 'md', 'lg', 'icon'],
      table: {
        type: { summary: '"sm" | "md" | "lg" | "icon"' },
        defaultValue: { summary: 'md' },
      },
    },
    icon: {
      description: 'Lucide アイコン名（PascalCase）',
      control: 'text',
      table: {
        type: { summary: 'IconName' },
        defaultValue: { summary: '-' },
      },
    },
    iconPosition: {
      description: 'アイコンの配置位置',
      control: 'select',
      options: ['start', 'end'],
      table: {
        type: { summary: '"start" | "end"' },
        defaultValue: { summary: 'start' },
      },
    },
    asChild: {
      description: '子要素にpropsを委譲する（Radix Slot）',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      description: 'ボタンを無効化する',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    children: {
      description: 'ボタンのラベルテキスト',
      control: 'text',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Button',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost',
  },
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Delete',
  },
}

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Link Button',
  },
}

export const Inverse: Story = {
  args: {
    variant: 'inverse',
    children: 'Inverse',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small',
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled',
  },
}

export const WithIconStart: Story = {
  args: {
    icon: 'Search',
    children: '検索',
  },
}

export const WithIconEnd: Story = {
  args: {
    icon: 'ArrowRight',
    iconPosition: 'end',
    children: '次へ',
  },
}

export const IconOnly: Story = {
  args: {
    icon: 'Plus',
    size: 'icon',
    'aria-label': '追加',
  },
}

export const DestructiveWithIcon: Story = {
  args: {
    variant: 'destructive',
    icon: 'Trash2',
    children: '削除',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
}

export const IconPositions: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button icon="ChevronLeft">戻る</Button>
      <Button icon="ChevronRight" iconPosition="end">次へ</Button>
      <Button icon="Plus" size="icon" aria-label="追加" />
      <Button icon="Download" size="sm">ダウンロード</Button>
      <Button icon="Send" size="lg" iconPosition="end">送信</Button>
    </div>
  ),
}
