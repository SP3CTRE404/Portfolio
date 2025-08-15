"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { useTheme } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

interface ThemeAwareCardProps {
  children: React.ReactNode
  className?: string
  variant?: "default" | "glass" | "neon" | "holographic"
}

export function ThemeAwareCard({ children, className, variant = "default" }: ThemeAwareCardProps) {
  const { actualTheme } = useTheme()

  const variantClasses = {
    default: "bg-card border-border",
    glass: "glass-card",
    neon: "neon-border glass-card",
    holographic: "glass-card animate-hologram-flicker",
  }

  const themeSpecificClasses = {
    dark: {
      default: "shadow-lg shadow-primary/10",
      glass: "shadow-xl shadow-primary/20",
      neon: "shadow-2xl shadow-primary/30 animate-glow",
      holographic: "shadow-2xl shadow-accent/20",
    },
    light: {
      default: "shadow-md",
      glass: "shadow-lg",
      neon: "shadow-xl",
      holographic: "shadow-lg",
    },
  }

  return (
    <Card
      className={cn(
        variantClasses[variant],
        themeSpecificClasses[actualTheme][variant],
        "transition-all duration-300 hover-lift",
        className,
      )}
    >
      <CardContent>{children}</CardContent>
    </Card>
  )
}
