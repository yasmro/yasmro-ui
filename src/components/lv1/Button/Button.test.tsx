import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Button } from './Button'

describe('Button', () => {
  it('renders with default props', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument()
  })

  it('renders with different variants', () => {
    const { rerender } = render(<Button variant="secondary">Secondary</Button>)
    expect(screen.getByRole('button')).toHaveClass('border')

    rerender(<Button variant="tertiary">Tertiary</Button>)
    expect(screen.getByRole('button')).not.toHaveClass('border')
  })

  it('renders with different sizes', () => {
    const { rerender } = render(<Button size="sm">Small</Button>)
    expect(screen.getByRole('button')).toHaveClass('h-8')

    rerender(<Button size="lg">Large</Button>)
    expect(screen.getByRole('button')).toHaveClass('h-12')
  })

  it('can be disabled', () => {
    render(<Button disabled>Disabled</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('renders as child component when asChild is true', () => {
    render(
      <Button asChild>
        <a href="/test">Link Button</a>
      </Button>,
    )
    expect(screen.getByRole('link', { name: 'Link Button' })).toBeInTheDocument()
  })

  it('renders icon at start position by default', () => {
    render(<Button icon="Search">Search</Button>)
    const button = screen.getByRole('button')
    const contentSpan = button.querySelector(':scope > span:last-child') as HTMLElement
    const svg = contentSpan.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg?.getAttribute('aria-hidden')).toBe('true')
    expect(contentSpan.firstChild).toBe(svg)
  })

  it('renders icon at end position', () => {
    render(
      <Button icon="ArrowRight" iconPosition="end">
        Next
      </Button>,
    )
    const button = screen.getByRole('button')
    const contentSpan = button.querySelector(':scope > span:last-child') as HTMLElement
    const svg = contentSpan.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(contentSpan.lastChild).toBe(svg)
  })

  it('renders icon-only button with square aspect ratio', () => {
    render(<Button icon="Plus" aria-label="Add" />)
    const button = screen.getByRole('button', { name: 'Add' })
    const contentSpan = button.querySelector(':scope > span:last-child') as HTMLElement
    expect(contentSpan.querySelector('svg')).toBeInTheDocument()
    expect(button).toHaveClass('aspect-square')
    expect(button).toHaveClass('px-0')
  })

  it('renders without icon when icon prop is not provided', () => {
    render(<Button>No Icon</Button>)
    const button = screen.getByRole('button')
    const contentSpan = button.querySelector(':scope > span:last-child') as HTMLElement
    expect(contentSpan.querySelector('svg')).not.toBeInTheDocument()
  })
})
