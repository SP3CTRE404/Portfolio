"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { StatusIndicator } from "@/components/ui/status-indicator"
import { TypingAnimation } from "@/components/ui/typing-animation"
import { GlitchText } from "@/components/ui/glitch-text"
import { useTheme } from "@/components/theme-provider"
import { ChevronDown, Phone, Mail, FileText } from "lucide-react" 
import { cn } from "@/lib/utils"

interface HeroSectionProps {
  onNavigate: (section: string) => void
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  const [showSubtitle, setShowSubtitle] = useState(false)
  const [showDescription, setShowDescription] = useState(false)
  const [matrixElements, setMatrixElements] = useState<Array<{ id: number; left: number; delay: number; duration: number; text: string }>>([])
  const { actualTheme } = useTheme()

  useEffect(() => {
    // Generate matrix elements on client side only
    const elements = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 3 + Math.random() * 2,
      text: Math.random().toString(36).substring(2, 15)
    }))
    setMatrixElements(elements)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Matrix rain effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {matrixElements.map((element) => (
          <div
            key={element.id}
            className={cn(
              "absolute text-xs font-mono animate-matrix-rain",
              actualTheme === "dark" ? "text-primary/20" : "text-primary/10",
            )}
            style={{
              left: `${element.left}%`,
              animationDelay: `${element.delay}s`,
              animationDuration: `${element.duration}s`,
            }}
          >
            {element.text}
          </div>
        ))}
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="animate-fade-in-up">
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-2 px-4 py-2 glass-card rounded-full">
              <StatusIndicator status="online" />
              <span className="text-sm font-body text-muted-foreground">Available for opportunities</span>
            </div>
          </div>
          <h1 className="font-heading font-bold text-6xl md:text-8xl mb-6">
            <GlitchText text="Udit Aggarwal" className="gradient-text" glitchIntensity="low" />
          </h1>
          <div className="mb-6">
            <TypingAnimation
              text="Software Developer & Engineer"
              className="font-body text-2xl md:text-3xl text-foreground"
              speed={80}
              onComplete={() => setShowSubtitle(true)}
            />
            {showSubtitle && (
              <div
                className={cn(
                  "h-1 w-32 mx-auto bg-gradient-to-r from-primary to-accent rounded-full mt-4",
                  actualTheme === "dark" ? "animate-glow" : "animate-pulse",
                )}
              />
            )}
          </div>
          {showSubtitle && (
            <div className="animate-fade-in-up">
              <TypingAnimation
                text="Detail-oriented engineering student with practical experience in SAP ABAP, Android development, and machine learning. Proficient in C#, C++, Java, Python, and Deep Learning frameworks."
                className="font-body text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed block"
                speed={30}
                showCursor={false}
                onComplete={() => setShowDescription(true)}
              />
            </div>
          )}
          {showDescription && (
            <div className="animate-fade-in-up">
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center mb-8">
                <Button
                  size="lg"
                  onClick={() => onNavigate("projects")}
                  className={cn(
                    "font-body font-semibold hover-lift neon-border",
                    actualTheme === "dark" && "animate-glow",
                  )}
                >
                  View Projects
                </Button>
                
                <a href="/Udit_Aggarwal_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className={cn(
                      "font-body font-semibold hover-lift neon-border w-full sm:w-auto",
                      actualTheme === "dark" && "animate-glow"
                    )}
                  >
                    <FileText size={18} className="mr-2" />
                    View Resume
                  </Button>
                </a>

                <Button
                  size="lg"
                  onClick={() => onNavigate("contact")}
                  className={cn(
                    "font-body font-semibold hover-lift neon-border",
                     actualTheme === "dark" && "animate-glow"
                   )}
                >
                  Get In Touch
                </Button>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-muted-foreground">
                <div className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Phone size={16} />
                  <span>+91-8800201753</span>
                </div>
                <div className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Mail size={16} />
                  <span>uditagg2004@gmail.com</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <Button
          size="icon"
          variant="ghost"
          onClick={() => onNavigate("about")}
          className={cn(
            "rounded-full h-12 w-12",
            actualTheme === "dark" && "text-primary animate-bounce hover:animate-none"
          )}
        >
          <ChevronDown size={32} />
        </Button>
      </div>
    </section>
  )
}