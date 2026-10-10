"use client";

import { useState, useEffect } from "react";

// Layout and UI Components
import { Navigation } from "@/components/layout/navigation";
import { ScrollToTopButton } from "@/components/ui/scrolltotop";
import DotGrid from "@/components/ui/dot-grid";
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

  useEffect(() => {
    const updateActiveSection = () => {
      // Near top of page
      if (window.scrollY < 120) {
        setActiveSection("home");
        return;
      }

      // Near bottom of page
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80;
      if (atBottom) {
        setActiveSection("contact");
        return;
      }

      // Check sections from bottom to top against the focal viewing line
      const sections = ["contact", "projects", "experience", "skills", "home"];
      const focalPoint = window.innerHeight * 0.38;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= focalPoint && rect.bottom > focalPoint) {
            setActiveSection(id);
            return;
          }
        }
      }
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateActiveSection();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <ClientOnly>
      <div className="fixed inset-0 pointer-events-none z-0">
        <DotGrid
          baseColor="#2c2d38"
          activeColor="#ffffff"
          shape="circle"
          dotSize={4}
          gap={19}
          proximity={140}
          strength={1}
          bounce={0.6}
          tension={0.4}
          returnDuration={0.8}
          shockRadius={320}
          shockStrength={5}
          swell={0.8}
          stretch={0.5}
          glow={0.6}
          fade={0}
          intro={true}
          mouseInteraction={true}
          clickShock={true}
        />
      </div>
      <Navigation 
        activeSection={activeSection} 
        onSectionChange={handleNavigate} 
      />
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