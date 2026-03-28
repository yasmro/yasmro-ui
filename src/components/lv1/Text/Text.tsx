import { Slot } from '@radix-ui/react-slot'
import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '../../../lib/utils'
import { type TextVariants, textVariants } from '../../../variants/text'

type TextElement = 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export interface TextProps extends Omit<HTMLAttributes<HTMLElement>, 'color'>, TextVariants {
  as?: TextElement
  asChild?: boolean
}

export const Text = forwardRef<HTMLElement, TextProps>(
  ({ className, variant, size, color, align, truncate, as, asChild = false, ...props }, ref) => {
    const defaultTag = variant === 'label' ? 'label' : 'p'
    const Comp = asChild ? Slot : (as ?? defaultTag)

    return (
      <Comp
        className={cn(textVariants({ variant, size, color, align, truncate, className }))}
        ref={ref as React.Ref<never>}
        {...props}
      />
    )
  },
)

Text.displayName = 'Text'
