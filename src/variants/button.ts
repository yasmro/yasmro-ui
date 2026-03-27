import { cva, type VariantProps } from 'class-variance-authority'

export const buttonVariants = cva(
  'btn inline-flex items-center justify-center gap-2 whitespace-nowrap leading-none font-medium cursor-pointer no-underline transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-black focus-visible:ring-offset-2 focus-visible:ring-offset-paper-warm disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'bg-ink-black text-paper-white hover:bg-ink-dark hover:text-paper-white',
        destructive: 'bg-vermillion text-paper-white hover:opacity-90',
        outline:
          'border border-ink-black bg-transparent text-ink-black hover:bg-ink-black hover:text-paper-white',
        secondary: 'bg-gray-200 text-ink-black hover:bg-gray-300',
        ghost: 'hover:bg-gray-100 text-ink-black',
        link: 'text-ink-black underline-offset-4 hover:underline',
        inverse: 'bg-paper-white text-ink-black hover:bg-gray-200',
      },
      size: {
        default: 'h-10 px-5 py-2 text-sm [&_svg]:size-4',
        sm: 'h-8 px-3 text-xs [&_svg]:size-3.5',
        lg: 'h-12 px-8 text-base [&_svg]:size-5',
        icon: 'h-10 w-10 [&_svg]:size-4',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export type ButtonVariants = VariantProps<typeof buttonVariants>
