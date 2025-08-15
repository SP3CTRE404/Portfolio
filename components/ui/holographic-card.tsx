"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface HolographicCardProps {
  children: React.ReactNode
  className?: string
  intensity?: "low" | "medium" | "high"
}

export function HolographicCard({ children, className, intensity = "medium" }: HolographicCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setMousePosition({ x, y })
  }

  const intensitySettings = {
    low: { tilt: 5, glow: 0.2 },
    medium: { tilt: 10, glow: 0.4 },
    high: { tilt: 15, glow: 0.6 },
  }

  const settings = intensitySettings[intensity]

  return (
    <Card
      className={cn(
        "relative overflow-hidden transition-all duration-300 hover-lift glass-card",
        "before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary/10 before:via-transparent before:to-accent/10",
        "before:opacity-0 before:transition-opacity before:duration-300",
        isHovered && "before:opacity-100",
        className,
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${(mousePosition.y - 50) * (settings.tilt / 50)}deg) rotateY(${
              (mousePosition.x - 50) * (settings.tilt / 50)
            }deg)`
          : "none",
        boxShadow: isHovered ? `0 20px 40px rgba(139, 92, 246, ${settings.glow})` : "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Holographic overlay */}
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-300 pointer-events-none"
        style={{
          opacity: isHovered ? 0.3 : 0,
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(139, 92, 246, 0.3), transparent 50%)`,
        }}
      />

      {/* Scanning line effect */}
      <div
        className={cn(
          "absolute inset-0 opacity-0 transition-opacity duration-300 pointer-events-none",
          isHovered && "opacity-100",
        )}
        style={{
          background: `linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.2), transparent)`,
          transform: `translateX(${mousePosition.x - 50}%)`,
        }}
      />

      <CardContent className="relative z-10">{children}</CardContent>
    </Card>
  )
}
