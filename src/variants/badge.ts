import { cva, type VariantProps } from 'class-variance-authority'

export const badgeVariants = cva(
  'inline-flex items-center rounded-full border font-semibold leading-none transition-colors focus:outline-none focus:ring-2 focus:ring-ink-black focus:ring-offset-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:size-[1em]',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-ink-dark text-paper-warm',
        secondary: 'border-transparent bg-paper-cream text-ink-black',
        destructive: 'border-transparent bg-vermillion text-paper-white',
        outline: 'text-ink-black',
      },
      size: {
        sm: 'px-2 py-1 text-[10px] gap-1',
        md: 'px-2.5 py-1 text-xs gap-1.5',
        lg: 'px-3 py-1.5 text-sm gap-1.5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
)

export type BadgeVariants = VariantProps<typeof badgeVariants>
