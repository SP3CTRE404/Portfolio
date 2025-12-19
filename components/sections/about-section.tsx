"use client"

import { SkillSphere } from "@/components/ui/skill-sphere"; // ✅ Import the new component

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl tracking-wider uppercase">
            Developer | Engineer | Innovator
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column: Skill Sphere */}
          <div className="animate-fade-in-up w-full max-w-md mx-auto">
            <SkillSphere /> {/* ✅ Use the new component here */}
          </div>

          {/* Right Column: Text Content */}
          <div className="relative animate-fade-in-up border-l-2 border-primary pl-8">
            <p className="font-body text-lg text-muted-foreground mb-4 leading-relaxed">
              Software Engineer specializing in Machine Learning, mobile development, .NET, and enterprise systems optimization. Expertise includes CNN models, transfer learning, and ML/API deployment (Flask). Interested in Java development and AI engineering. Proficient in software architecture, DSA, OOP, and building scalable, multi-platform solutions across mobile, ML, and backend ecosystems.
            </p>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              I thrive on solving complex technical challenges and continuously expanding my expertise across modern development stacks, enabling me to adapt to diverse environments and contribute effectively to cutting-edge projects.
            </p>
            <p className="font-body text-lg text-muted-foreground mt-6 text-right italic">
              — Udit Aggarwal
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}