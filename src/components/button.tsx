import * as React from 'react'
// import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

// const buttonVariants = cva('w-max h-full font-semibold transition-all', {
//   variants: {
//     variant: {
//       primary:
//         'bg-gradien-primary text-[#FFEDFD] dark:text-[#E2E7EF] hover:shadow-[0_4px_12px_0_rgba(153,145,156,0.40)] active:shadow-[0_0_20px_0_rgba(177,109,168,0.65)_inset] dark:hover:shadow-[0_4px_12px_0_rgba(237,192,231,0.40)] dark:active:shadow-[0_0_20px_0_#42263E_inset]',
//       secondary:
//         'bg-[#BAE6FD] dark:bg-[#7583A6] text-[#475569] dark:text-[#E2E7EF] hover:shadow-[0_3px_20px_0_rgba(186,230,253,0.80)] active:shadow-[0_3px_20px_0_#A5C9DB_inset] dark:hover:shadow-[0_10px_20px_0_rgba(255,237,253,0.25)] dark:active:shadow-[0_3px_10px_0_rgba(0,0,0,0.40)_inset]',
//       ghost:
//         'bg-[#FFFFFF99] dark:bg-[#0D1111] border border-[#DADADA] text-[#475569] dark:text-[#E2E7EF] hover:shadow-[0_0_20px_0_rgba(0,0,0,0.10)] active:shadow-[0_0_20px_0_rgba(0,0,0,0.08)_inset] dark:hover:shadow-[0_10px_20px_0_rgba(255,237,253,0.25)] dark:active:shadow-[0_0_60px_0_rgba(0,0,0,0.40)_inset]',
//       tertiary:
//         'bg-[#FFFFFF0D] dark:bg-[#FFFFFF33] text-[#475569] dark:text-[#E2E7EF] hover:underline underline-offset-2 hover:shadow-[0_10px_20px_0_rgba(255,237,253,0.25)] active:opacity-[0.3] dark:active:shadow-[0_12px_20px_0_rgba(0,0,0,0.25)_inset]',
//     },
//     size: {
//       primary: 'px-8 py-3 text-base rounded-[20px]',
//       sm: 'px-5 py-2 text-sm rounded-[12px]',
//     },
//   },
//   defaultVariants: {
//     variant: 'primary',
//     size: 'primary',
//   },
// })

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
