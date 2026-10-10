"use client";

import { Briefcase, Calendar, Smartphone, Terminal, Users, Code, Database, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { StrokeText } from "@/components/ui/stroke-text";

const experiences = [
  {
    role: "Software Engineer Intern (Flutter)",
    company: "UXDLAB Software",
    period: "March 2026 – June 2026",
    bullets: [
      "Developing and maintaining production-grade cross-platform applications using Flutter, ensuring feature stability and high-quality UI/UX standards.",
      "Analyzing and navigating complex existing codebases to implement feature enhancements and resolve technical debt within established architectures.",
      "Strengthening team dynamics by coordinating across functional units, gaining hands-on experience in collaborative development and professional life cycles."
    ],
    highlights: [
      {
        icon: Smartphone,
        title: "Flutter & Dart",
        description: "Developing production-grade cross-platform apps with top-tier UI/UX standards.",
      },
      {
        icon: Terminal,
        title: "Code Refactoring",
        description: "Resolving technical debt and implementing features in complex codebases.",
      },
      {
        icon: Users,
        title: "Agile Coordination",
        description: "Coordinating across functional units to streamline development lifecycles.",
      },
    ]
  },
  {
    role: "Software Engineer Intern",
    company: "Future Labs Technology",
    period: "Jun 2025 – Sep 2025",
    bullets: [
      "Developed & Maintained Core APIs: Designed, built, and maintained RESTful endpoints using Java Spring Boot, implementing new feature updates, parameter handling, and bug fixes based on Jira tickets assigned during team sprints.",
      "Refactored Code & Query Logic: Optimized existing service layers and database query logic (JPA/Hibernate) to reduce response latencies, while adding input validation and unified error handling to enhance API stability.",
      "Tested & Documented Services: Wrote comprehensive unit and integration tests using JUnit and Mockito to increase test coverage, participating in pull request reviews and maintaining clear API documentation using Swagger/OpenAPI for seamless team integration.",
      "Monitored & Resolved Backend Issues: Tracked down runtime bugs and edge cases reported during QA testing, using application logs and local debugging tools to identify root causes and deploy timely fixes to development environments."
    ],
    highlights: [
      {
        icon: Code,
        title: "Spring Boot APIs",
        description: "Built RESTful endpoints with Java Spring Boot and OpenAPI documentation.",
      },
      {
        icon: Database,
        title: "JPA & Query Logic",
        description: "Optimized service layers and JPA/Hibernate queries to reduce response latencies.",
      },
      {
        icon: Terminal,
        title: "Testing & Quality",
        description: "Engineered unit/integration tests with JUnit and Mockito, resolving runtime bugs.",
      },
    ]
  }
];

const educationData = [
  {
    degree: "B. Tech in Computer Science and Engineering",
    institution: "Amity University, NOIDA",
    period: "June 2026",
    grade: "CGPA: 7.45",
  },
  {
    degree: "CBSE Board",
    institution: "Lovely Public Sr. Sec. School, New Delhi",
    period: "2022",
    grade: "Result: 82.4%",
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative scroll-mt-16">
      <div id="education" className="absolute top-0 left-0" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h2 className="font-heading font-bold text-4xl md:text-5xl tracking-tight text-white mb-4">
                <StrokeText
                  text="Work Experience"
                  strokeColor="#ffffff"
                  fillColor="#ffffff"
                  strokeWidth={1.4}
                  drawDuration={1.4}
                  fillDelay={0.2}
                  trigger="scroll"
                  fillMode="wipe"
                  fontSize={48}
                  fontWeight={700}
                  letterSpacing={-1.5}
                  className="inline-block max-w-full"
                />
              </h2>
              <p className="text-zinc-400 text-base md:text-lg max-w-xl">
                Professional experience in software engineering and mobile development
              </p>
            </div>

            <div className="space-y-7">
              {experiences.map((exp) => (
                <div
                  key={exp.company}
                  className="p-6 md:p-8 rounded-[2rem] neu-card transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row items-start gap-4">
                    <div className="neu-icon-pod p-3 rounded-2xl text-zinc-300 shrink-0">
                      <Briefcase size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 pb-3 border-b border-white/10 gap-2">
                        <div>
                          <h3 className="font-heading font-bold text-xl md:text-2xl text-white leading-snug">
                            {exp.role}
                          </h3>
                          <p className="text-zinc-300 font-semibold text-sm">{exp.company}</p>
                        </div>
                        <div className="neu-chip-inset px-3 py-1 rounded-full flex items-center gap-1.5 text-zinc-400 text-xs font-mono whitespace-nowrap">
                          <Calendar size={13} />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      <ul className="space-y-2.5 text-zinc-300 leading-relaxed mb-6 list-disc list-inside text-xs md:text-sm">
                        {exp.bullets.map((bullet, idx) => (
                          <li key={idx} className="pl-1">{bullet}</li>
                        ))}
                      </ul>

                      <div className="grid md:grid-cols-3 gap-3">
                        {exp.highlights.map((highlight) => {
                          const Icon = highlight.icon;
                          return (
                            <div
                              key={highlight.title}
                              className="p-3.5 rounded-2xl neu-inset-subtle"
                            >
                              <div className="flex items-center gap-2 mb-1.5">
                                <Icon className="text-zinc-300" size={15} />
                                <h4 className="font-semibold text-xs text-white truncate">{highlight.title}</h4>
                              </div>
                              <p className="text-[11px] text-zinc-400 leading-normal">{highlight.description}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24">
            <div>
              <h2 className="font-heading font-bold text-4xl md:text-5xl tracking-tight text-white mb-4">
                <StrokeText
                  text="Education"
                  strokeColor="#ffffff"
                  fillColor="#ffffff"
                  strokeWidth={1.4}
                  drawDuration={1.4}
                  fillDelay={0.2}
                  trigger="scroll"
                  fillMode="wipe"
                  fontSize={48}
                  fontWeight={700}
                  letterSpacing={-1.5}
                  className="inline-block max-w-full"
                />
              </h2>
              <p className="text-zinc-400 text-base md:text-lg max-w-xl">
                Academic background in computer science and engineering
              </p>
            </div>

            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -4 }}
                  className="p-6 md:p-7 rounded-[2rem] neu-card"
                >
                  <div className="flex items-start gap-4">
                    <div className="neu-icon-pod p-3 rounded-2xl text-zinc-300 shrink-0">
                      <GraduationCap size={22} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="mb-3">
                        <h3 className="font-heading font-bold text-lg md:text-xl text-white leading-snug mb-1">
                          {edu.degree}
                        </h3>
                        <p className="font-body text-zinc-300 text-sm font-semibold">
                          {edu.institution}
                        </p>
                      </div>
                      <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/10">
                        <span className="neu-chip-inset inline-flex items-center font-body text-xs font-semibold text-zinc-200 px-3 py-1 rounded-full">
                          {edu.grade}
                        </span>
                        <div className="flex items-center gap-1.5 text-zinc-400 text-xs font-mono">
                          <Calendar size={13} />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}