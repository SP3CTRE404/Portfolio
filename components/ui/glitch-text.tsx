"use client"

import { useEffect, useState, useMemo } from "react"
import { cn } from "@/lib/utils"

interface GlitchTextProps {
  text: string
  className?: string
  glitchIntensity?: "low" | "medium" | "high"
}

export function GlitchText({ text, className, glitchIntensity = "medium" }: GlitchTextProps) {
  const [glitchText, setGlitchText] = useState(text)
  const [isGlitching, setIsGlitching] = useState(false)

  const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?"
  const intensitySettings = useMemo(() => ({
    low: { frequency: 3000, duration: 100, charCount: 1 },
    medium: { frequency: 2000, duration: 150, charCount: 2 },
    high: { frequency: 1000, duration: 200, charCount: 3 },
  }), [])

  useEffect(() => {
    const settings = intensitySettings[glitchIntensity]

    const glitchInterval = setInterval(() => {
      setIsGlitching(true)

      // Create glitched version
      const textArray = text.split("")
      for (let i = 0; i < settings.charCount; i++) {
        const randomIndex = Math.floor(Math.random() * textArray.length)
        textArray[randomIndex] = glitchChars[Math.floor(Math.random() * glitchChars.length)]
      }
      setGlitchText(textArray.join(""))

      // Restore original text
      setTimeout(() => {
        setGlitchText(text)
        setIsGlitching(false)
      }, settings.duration)
    }, settings.frequency)

    return () => clearInterval(glitchInterval)
  }, [text, glitchIntensity, intensitySettings])

  return (
    <span
      className={cn("relative inline-block transition-all duration-100", isGlitching && "animate-pulse", className)}
      style={{
        textShadow: isGlitching
          ? `
            2px 0 #ff0000,
            -2px 0 #00ffff,
            0 2px #ffff00,
            0 -2px #ff00ff
          `
          : "none",
      }}
    >
      {glitchText}
    </span>
  )
}
