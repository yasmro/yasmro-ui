import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '../../../lib/utils'
import { type SpinnerVariants, spinnerVariants } from '../../../variants/spinner'
import './Spinner.css'

export interface SpinnerProps extends HTMLAttributes<HTMLDivElement>, SpinnerVariants {
  /** Accessible label for screen readers. */
  label?: string
  /** Spinner animation type. */
  type?: 'default' | 'ripple'
}

const DefaultSpinner = () => (
  <svg className="size-full animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
    <path
      className="opacity-75"
      d="M22 12a10 10 0 0 0-10-10"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
)

const RippleSpinner = () => (
  <svg className="size-full" viewBox="0 0 72 72" fill="none" aria-hidden="true">
    <circle className="yasmro-spinner-dot" cx="36" cy="36" r="2.6" fill="currentColor" />
    <circle
      className="yasmro-spinner-ripple yasmro-spinner-ripple-1"
      cx="36"
      cy="36"
      r="10"
      stroke="currentColor"
      strokeWidth="1.4"
    />
    <circle
      className="yasmro-spinner-ripple yasmro-spinner-ripple-2"
      cx="36"
      cy="36"
      r="10"
      stroke="currentColor"
      strokeWidth="1.2"
    />
  </svg>
)

export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, size, type, label = 'Loading', ...props }, ref) => {
    return (
      <div className={cn(spinnerVariants({ size, className }))} role="status" ref={ref} {...props}>
        {type === 'ripple' ? <RippleSpinner /> : <DefaultSpinner />}
        <span className="sr-only">{label}</span>
      </div>
    )
  },
)

Spinner.displayName = 'Spinner'
