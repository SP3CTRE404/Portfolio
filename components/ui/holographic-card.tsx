import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface HolographicCardProps {
  children: React.ReactNode
  className?: string
  intensity?: "low" | "medium" | "high"
}

export function HolographicCard({ children, className, intensity = "medium" }: HolographicCardProps) {
  return (
    <Card
      className={cn(
        "relative overflow-hidden bg-white/55 backdrop-blur-md border border-stone-200/60 rounded-3xl transition-colors duration-200 hover:border-stone-300 hover:bg-white/75",
        className,
      )}
    >
      <CardContent className="relative z-10">{children}</CardContent>
    </Card>
  )
}
