import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "neu-input flex min-h-24 w-full rounded-2xl p-4 text-base text-zinc-100 placeholder:text-zinc-500 selection:bg-zinc-700 selection:text-white outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
