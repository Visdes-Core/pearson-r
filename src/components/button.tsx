import * as React from 'react'
import { cn } from '@/lib/utils'

const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, ...props }, ref) => {
    return (
      <button
        className={cn(
            'transition ease-in-out cursor-pointer hover:scale-[1.03] flex h-[45px] justify-center items-center gap-[12.022px] shrink-0 shadow-[0px_3.005px_3.005px_0px_rgba(255,255,255,0.40)_inset] px-[36.065px] py-[13px] rounded-[15025.717px] border-[1.503px] border-solid border-[#292929] bg-[#243f73] text-white text-lg',
            className
          )}
        ref={ref}
        {...props}
      ></button>
    )
  }
)
Button.displayName = 'Button'

export { Button }