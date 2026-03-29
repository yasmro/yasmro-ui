import { cva, type VariantProps } from 'class-variance-authority'

export const spinnerVariants = cva('inline-flex items-center justify-center', {
  variants: {
    size: {
      sm: 'size-4',
      md: 'size-6',
      lg: 'size-8',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export type SpinnerVariants = VariantProps<typeof spinnerVariants>
