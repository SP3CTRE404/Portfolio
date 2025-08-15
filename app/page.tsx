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
import { SkillsSection } from "@/components/sections/skills-section";
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

  // 👇 THE FIX IS INSIDE THIS useEffect HOOK 👇
  useEffect(() => {
    const sectionIds = ["home", "about", "skills", "experience", "projects", "education", "contact"];
    
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
      <main>
        <HeroSection onNavigate={handleNavigate} />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <ScrollToTopButton />
    </ClientOnly>
  );
}