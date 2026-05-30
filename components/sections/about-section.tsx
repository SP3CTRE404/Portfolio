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
              Backend Engineer with hands-on experience developing robust, scalable RESTful APIs using Spring Boot (Java) and ASP.NET Core (C#), integrating them to manage core business logic and handle high-concurrency requests. Proven ability to build full-stack solutions, specializing in cross-platform Mobile Development (Flutter/Dart) for high-performance UI/UX and real-time data synchronization.
            </p>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Proficient in JWT security, ORM (EF Core, JPA/Hibernate), and modern software architectures. I thrive on solving complex technical challenges, reducing technical debt, and continuously expanding my expertise across modern development stacks to contribute effectively to cutting-edge projects.
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