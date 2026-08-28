"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface SkillProgressProps {
  skill: string
  level: number
  className?: string
  delay?: number
}

export function SkillProgress({ skill, level, className, delay = 0 }: SkillProgressProps) {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
      const progressTimer = setTimeout(() => {
        setProgress(level)
      }, 200)
      return () => clearTimeout(progressTimer)
    }, delay)

    return () => clearTimeout(timer)
  }, [level, delay])

  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex justify-between items-center">
        <span className="font-body text-sm font-medium text-foreground">{skill}</span>
        <span className="font-body text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="relative h-2 bg-muted rounded-full overflow-hidden">
        <div
          className={cn(
            "absolute left-0 top-0 h-full bg-zinc-500 rounded-full transition-all duration-1000 ease-out",
          )}
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
    </div>
  )
}
