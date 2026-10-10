import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[2px] focus-visible:ring-zinc-400/40 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "neu-btn-primary",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20",
        outline:
          "neu-btn text-white hover:text-zinc-200",
        secondary:
          "neu-btn text-white",
        ghost:
          "hover:bg-zinc-800/40 text-zinc-300 hover:text-white",
        link: "text-zinc-200 underline-offset-4 hover:underline",
        neu: "neu-btn text-white",
        neuPrimary: "neu-btn-primary",
        neuIcon: "neu-btn-icon text-zinc-300 hover:text-white",
      },
      size: {
        default: "h-10 px-5 py-2.5 has-[>svg]:px-4",
        sm: "h-8 rounded-full gap-1.5 px-3.5 text-xs has-[>svg]:px-3",
        lg: "h-12 rounded-full px-7 text-base has-[>svg]:px-5",
        icon: "size-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
export { SpecularButton } from "./specular-button"
