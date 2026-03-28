import { Slot } from '@radix-ui/react-slot'
import { icons } from 'lucide-react'
import { type ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '../../../lib/utils'
import { type ButtonVariants, buttonVariants } from '../../../variants/button'
import { Spinner } from '../Spinner'

export type IconName = keyof typeof icons

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, ButtonVariants {
  asChild?: boolean
  icon?: IconName
  iconPosition?: 'start' | 'end'
  isLoading?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      icon,
      iconPosition = 'start',
      isLoading = false,
      disabled,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button'
    const IconComponent = icon ? icons[icon] : null
    const isIconOnly = !children && !!icon

    if (asChild) {
      return (
        <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
          {children}
        </Comp>
      )
    }

    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, className }),
          isIconOnly && 'aspect-square px-0',
        )}
        ref={ref}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <Spinner size="sm" className="size-[1em]" label="Loading" />
            {children}
          </>
        ) : (
          <>
            {IconComponent && iconPosition === 'start' && <IconComponent aria-hidden="true" />}
            {children}
            {IconComponent && iconPosition === 'end' && <IconComponent aria-hidden="true" />}
          </>
        )}
      </Comp>
    )
  },
)

Button.displayName = 'Button'
