"use client"

import { Moon, Sun, Monitor } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

interface ThemeToggleProps {
  className?: string
  showLabel?: boolean
}

export function ThemeToggle({ className, showLabel = false }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light")
    } else if (theme === "light") {
      setTheme("system")
    } else {
      setTheme("dark")
    }
  }

  const getIcon = () => {
    switch (theme) {
      case "light":
        return <Sun size={16} className="text-amber-600 transition-transform duration-300 group-hover:rotate-45" />
      case "dark":
        return <Moon size={16} className="text-emerald-700 transition-transform duration-300 group-hover:-rotate-12" />
      case "system":
        return <Monitor size={16} className="text-stone-600 transition-transform duration-300 group-hover:scale-105" />
      default:
        return <Moon size={16} className="text-stone-600" />
    }
  }

  const getLabel = () => {
    switch (theme) {
      case "light":
        return "Light"
      case "dark":
        return "Dark"
      case "system":
        return "System"
      default:
        return "Dark"
    }
  }

  return (
    <Button
      variant="ghost"
      size={showLabel ? "sm" : "icon"}
      onClick={toggleTheme}
      className={cn(
        "group rounded-full bg-white/70 border border-stone-200/70 hover:bg-white hover:border-stone-300 text-stone-700 shadow-xs backdrop-blur-sm transition-all duration-200",
        showLabel && "px-3.5 py-1.5 h-auto",
        className
      )}
      title={`Switch to ${theme === "dark" ? "light" : theme === "light" ? "system" : "dark"} theme`}
    >
      <div className="flex items-center justify-center">
        {getIcon()}
        {showLabel && <span className="ml-2 font-mono text-xs font-medium text-stone-700">{getLabel()}</span>}
      </div>
    </Button>
  )
}