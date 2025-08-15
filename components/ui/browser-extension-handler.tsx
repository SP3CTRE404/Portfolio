"use client"

import { useEffect, useState } from "react"

interface BrowserExtensionHandlerProps {
  children: React.ReactNode
}

export function BrowserExtensionHandler({ children }: BrowserExtensionHandlerProps) {
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    // Wait for hydration to complete
    setIsHydrated(true)
    
    // Remove any browser extension injected elements that might cause hydration issues
    const removeExtensionElements = () => {
      const extensionSelectors = [
        '[id*="extwaiokist"]',
        '[id*="extension"]',
        '[class*="extension"]',
        '[data-extension]'
      ]
      
      extensionSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector)
        elements.forEach(element => {
          if (element.parentNode) {
            element.parentNode.removeChild(element)
          }
        })
      })
    }

    // Run after a short delay to ensure DOM is ready
    const timer = setTimeout(removeExtensionElements, 100)
    
    return () => clearTimeout(timer)
  }, [])

  // Show loading state until hydration is complete
  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="loading-dots mb-4">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p className="text-muted-foreground animate-neon-pulse">Loading...</p>
        </div>
      </div>
    )
  }

  return <>{children}</>
}
