"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface TypingAnimationProps {
  text: string
  className?: string
  speed?: number
  showCursor?: boolean
  onComplete?: () => void
}

export function TypingAnimation({ text, className, speed = 70, showCursor = true, onComplete }: TypingAnimationProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    } else if (onComplete) {
      onComplete()
    }
  }, [currentIndex, text, speed, onComplete])

  return (
    <span className={cn("inline-flex items-center font-mono tracking-tight text-stone-900", className)}>
      <span>{displayText}</span>
      {showCursor && (
        <span
          className="inline-block w-[2.5px] h-[1.15em] bg-emerald-600 ml-1 rounded-full animate-pulse shrink-0"
          aria-hidden="true"
        />
      )}
    </span>
  )
}