"use client"

import { useTheme } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

interface StatusIndicatorProps {
  status: "online" | "busy" | "away" | "offline"
  showLabel?: boolean
  className?: string
}

export function StatusIndicator({ status, showLabel = false, className }: StatusIndicatorProps) {
  const { actualTheme } = useTheme()

  const statusConfig = {
    online: {
      color: "bg-green-500",
      label: "Available",
      animation: "animate-pulse",
    },
    busy: {
      color: "bg-red-500",
      label: "Busy",
      animation: "animate-pulse",
    },
    away: {
      color: "bg-yellow-500",
      label: "Away",
      animation: "animate-pulse",
    },
    offline: {
      color: "bg-gray-500",
      label: "Offline",
      animation: "",
    },
  }

  const config = statusConfig[status]

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div
        className={cn(
          "w-3 h-3 rounded-full",
          config.color,
          config.animation,
          actualTheme === "dark" && "shadow-lg shadow-current/50",
        )}
      />
      {showLabel && <span className="text-sm font-body text-muted-foreground">{config.label}</span>}
    </div>
  )
}
