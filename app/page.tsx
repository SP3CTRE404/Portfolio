"use client"

import { useState } from "react"
import ClientOnly from "@/components/client-only"
import { Navigation } from "@/components/layout/navigation"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { EducationSection } from "@/components/sections/education-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { ContactSection } from "@/components/sections/contact-section"
import { ScrollToTopButton } from "@/components/ui/scrolltotop"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")

  const handleNavigate = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
    }
  }

  return (
    <ClientOnly>
      <main className="flex flex-col min-h-screen">
        <Navigation
          activeSection={activeSection}
          onSectionChange={handleNavigate}
        />
        <div className="flex-1">
          <HeroSection onNavigate={handleNavigate} />
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <EducationSection />
          <ContactSection />
        </div>
        
        <ScrollToTopButton/>
      </main>
    </ClientOnly>
  )
}