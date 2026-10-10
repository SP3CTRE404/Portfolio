import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "neu-input flex h-11 w-full min-w-0 rounded-2xl px-4 py-2 text-base text-zinc-100 placeholder:text-zinc-500 selection:bg-zinc-700 selection:text-white outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Input }
