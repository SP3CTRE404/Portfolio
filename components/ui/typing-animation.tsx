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

export function TypingAnimation({ text, className, speed = 100, showCursor = true, onComplete }: TypingAnimationProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showCursorBlink, setShowCursorBlink] = useState(true)

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

  useEffect(() => {
    if (showCursor) {
      const cursorInterval = setInterval(() => {
        setShowCursorBlink((prev) => !prev)
      }, 500)

      return () => clearInterval(cursorInterval)
    }
  }, [showCursor])

  return (
    <span className={cn("inline-block", className)}>
      {displayText}
      {showCursor && (
        <span
          className={cn(
            "inline-block w-0.5 h-[1em] bg-primary ml-1 transition-opacity duration-100",
            showCursorBlink ? "opacity-100" : "opacity-0",
          )}
        />
      )}
    </span>
  )
}
