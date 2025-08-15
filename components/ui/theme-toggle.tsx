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
  const { theme, setTheme, actualTheme } = useTheme()

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
        return <Sun size={18} />
      case "dark":
        return <Moon size={18} />
      case "system":
        return <Monitor size={18} />
      default:
        return <Moon size={18} />
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
        "hover-lift glass-card bg-transparent transition-all duration-300",
        actualTheme === "dark" && "animate-glow",
        className,
      )}
      title={`Switch to ${theme === "dark" ? "light" : theme === "light" ? "system" : "dark"} theme`}
    >
      <div className="relative">
        {getIcon()}
        <div className="absolute inset-0 bg-primary/20 rounded-full opacity-0 animate-pulse" />
      </div>
      {showLabel && <span className="ml-2 font-body text-sm">{getLabel()}</span>}
    </Button>
  )
}
