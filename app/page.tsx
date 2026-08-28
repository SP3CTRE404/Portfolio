"use client";

import { useState, useEffect } from "react";

// Layout and UI Components
import { Navigation } from "@/components/layout/navigation";
import { ScrollToTopButton } from "@/components/ui/scrolltotop";
import { ParticleSystem } from "@/components/ui/particle-system";
import ClientOnly from "@/components/client-only";

// Section Components
import { HeroSection } from "@/components/sections/hero-section";
// import { AboutSection } from "@/components/sections/about-section";
import { ExperienceSection } from "@/components/sections/experience-section"; 
import { SkillsSection } from "@/components/sections/skills-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ContactSection } from "@/components/sections/contact-section";

// Page component representing the main landing page structure

export default function Page() {
  const [activeSection, setActiveSection] = useState("home");

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  // 👇 THE FIX IS INSIDE THIS useEffect HOOK 👇
  useEffect(() => {
    const sectionIds = ["home", "about", "skills", "experience", "projects", 'certificates', "education", "contact"];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -60% 0px" }
    );

    // Add a small delay to ensure all section elements have rendered in the DOM
    const timer = setTimeout(() => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.observe(element);
        }
      });
    }, 100); // 100ms delay

    // Cleanup function
    return () => {
      clearTimeout(timer);
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <ClientOnly>
      <Navigation 
        activeSection={activeSection} 
        onSectionChange={handleNavigate} 
      />
      <ParticleSystem className="fixed inset-0 pointer-events-none z-0" colors={["#34d399", "#6ee7b7", "#a7f3d0"]} particleCount={40} />
      <main className="relative z-10">
        <HeroSection onNavigate={handleNavigate} />
        {/* <AboutSection /> */}
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <ScrollToTopButton />
    </ClientOnly>
  );
}