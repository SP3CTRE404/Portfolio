"use client";

import { useState, useEffect } from "react";

// Layout and UI Components
import { Navigation } from "@/components/layout/navigation";
import { ScrollToTopButton } from "@/components/ui/scrolltotop";
import ClientOnly from "@/components/client-only";

// Section Components
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { EducationSection } from "@/components/sections/education-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Page() {
  const [activeSection, setActiveSection] = useState("home");

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const sectionIds = ["home", "about", "tech-stack", "experience", "projects", "education", "contact"];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -70% 0px" }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <ClientOnly>
      {/* 👇 NAVIGATION IS NOW A SIBLING TO MAIN 👇 */}
      <Navigation 
        activeSection={activeSection} 
        onSectionChange={handleNavigate} 
      />

      <main className="flex flex-col min-h-screen">
        <div className="flex-1">
          <HeroSection onNavigate={handleNavigate} />
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <EducationSection />
          <ContactSection />
        </div>
      </main>
      
      <ScrollToTopButton />
    </ClientOnly>
  );
}