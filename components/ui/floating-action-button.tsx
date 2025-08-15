"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { useTheme } from "@/components/theme-provider"
import { ChevronUp, Github, Linkedin, Mail, Phone, Settings } from "lucide-react"
import { cn } from "@/lib/utils"

export function FloatingActionButton() {
  const [isExpanded, setIsExpanded] = useState(false)
  const { actualTheme } = useTheme()

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "mailto:uditagg2004@gmail.com", label: "Email" },
    { icon: Phone, href: "tel:+918800201753", label: "Phone" },
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Social links and theme toggle */}
      <div
        className={cn(
          "flex flex-col gap-3 mb-3 transition-all duration-300",
          isExpanded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none",
        )}
      >
        <ThemeToggle className="glass-card bg-background/80 backdrop-blur-md" />
        {socialLinks.map((link, index) => (
          <Button
            key={link.label}
            size="icon"
            variant="outline"
            className={cn(
              "glass-card hover-lift bg-background/80 backdrop-blur-md",
              actualTheme === "dark" && "animate-glow",
            )}
            style={{ animationDelay: `${index * 100}ms` }}
            asChild
          >
            <a href={link.href} target="_blank" rel="noopener noreferrer" title={link.label}>
              <link.icon size={18} />
            </a>
          </Button>
        ))}
      </div>

      {/* Main FAB */}
      <div className="relative">
        <Button
          size="icon"
          className={cn(
            "w-14 h-14 rounded-full glass-card hover-lift bg-primary/90 backdrop-blur-md",
            actualTheme === "dark" && "animate-glow",
          )}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? (
            <Settings size={20} className={cn("transition-transform duration-300 rotate-180")} />
          ) : (
            <Settings size={20} className="transition-transform duration-300" />
          )}
        </Button>

        {/* Scroll to top button */}
        <Button
          size="icon"
          variant="ghost"
          className={cn(
            "absolute inset-0 w-14 h-14 rounded-full transition-all duration-300",
            isExpanded ? "opacity-0 scale-0" : "opacity-100 scale-100",
          )}
          onClick={scrollToTop}
        >
          <ChevronUp size={20} />
        </Button>
      </div>
    </div>
  )
}
