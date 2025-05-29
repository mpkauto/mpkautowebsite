import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent disabled:pointer-events-none disabled:opacity-50 bg-brand-accent text-white",
  {
    variants: {
      variant: {
        default: "hover:bg-brand-accent/90 hover:ring-2 hover:ring-brand-accent/30",
        outline: "border border-white/20 text-white hover:bg-white/10 hover:text-white",
        ghost: "text-gray-400 hover:text-white hover:bg-white/10",
        white: "bg-white text-gray-900 shadow-lg hover:bg-gray-200",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8 py-3 text-lg",
        icon: "h-10 w-10 p-0",
      },
      shape: {
        rounded: "rounded-md",
        circle: "rounded-full",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      shape: "rounded",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
