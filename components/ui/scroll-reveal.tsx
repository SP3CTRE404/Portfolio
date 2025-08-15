"use client"

import type React from "react"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { cn } from "@/lib/utils"

interface ScrollRevealProps {
  children: React.ReactNode
  direction?: "up" | "down" | "left" | "right"
  delay?: number
  className?: string
}

export function ScrollReveal({ children, direction = "up", delay = 0, className }: ScrollRevealProps) {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 })

  const directionClasses = {
    up: "scroll-reveal",
    down: "scroll-reveal",
    left: "scroll-reveal-left",
    right: "scroll-reveal-right",
  }

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(directionClasses[direction], isIntersecting && "revealed", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
