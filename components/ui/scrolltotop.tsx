"use client"

import { useState, useEffect } from "react"
import { ChevronUp } from "lucide-react"
import { SpecularButton } from "@/components/ui/specular-button"
import { cn } from "@/lib/utils"

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  // This function toggles the button's visibility based on scroll position.
  const toggleVisibility = () => {
    // Show the button if the user has scrolled down more than 300px
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  // This function scrolls the window to the top smoothly.
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    // Add a scroll event listener when the component mounts.
    window.addEventListener("scroll", toggleVisibility)

    // Clean up the event listener when the component unmounts.
    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])

  return (
    <div
      className={cn(
        "fixed bottom-8 right-8 z-50 transition-all duration-300",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      )}
    >
      <SpecularButton
        size="sm"
        radius={9999}
        className="!w-12 !h-12 !p-0 flex items-center justify-center rounded-full"
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <ChevronUp className="h-6 w-6 text-zinc-300" />
      </SpecularButton>
    </div>
  )
}