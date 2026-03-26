import { cva, type VariantProps } from 'class-variance-authority'

export const buttonVariants = cva(
  [
    'inline-flex items-center justify-center gap-2',
    'rounded-md font-medium',
    'transition-colors duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
  ],
  {
    variants: {
      variant: {
        default: [
          'bg-[var(--color-primary-500)] text-[var(--paper-white)]',
          'hover:bg-[var(--color-primary-600)]',
          'focus-visible:ring-[var(--color-primary-500)]',
        ],
        secondary: [
          'bg-[var(--gray-100)] text-[var(--color-text)]',
          'hover:bg-[var(--gray-200)]',
          'focus-visible:ring-[var(--gray-400)]',
        ],
        outline: [
          'border border-[var(--color-primary-500)] text-[var(--color-primary-500)]',
          'bg-transparent',
          'hover:bg-[var(--color-primary-100)]',
          'focus-visible:ring-[var(--color-primary-500)]',
        ],
        ghost: [
          'text-[var(--color-primary-500)]',
          'hover:bg-[var(--color-primary-100)]',
          'focus-visible:ring-[var(--color-primary-500)]',
        ],
        destructive: [
          'bg-[var(--color-error)] text-[var(--paper-white)]',
          'hover:bg-[var(--color-error-hover)]',
          'focus-visible:ring-[var(--color-error)]',
        ],
        link: [
          'text-[var(--color-primary-500)] underline-offset-4',
          'hover:underline',
          'focus-visible:ring-[var(--color-primary-500)]',
        ],
      },
      size: {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4 text-sm',
        lg: 'h-12 px-6 text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

export type ButtonVariants = VariantProps<typeof buttonVariants>
