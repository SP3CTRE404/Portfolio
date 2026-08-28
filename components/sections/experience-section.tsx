"use client";

import { Briefcase, Calendar, Smartphone, Terminal, Users, Code, Database, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Engineer Intern (Flutter)",
    company: "UXDLAB Software",
    period: "March 2026 – Present",
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
    role: "Enterprise Software Intern",
    company: "Future Labs Technology",
    period: "Jun 2025 – Aug 2025",
    bullets: [
      "Optimized enterprise workflow and automation, reducing manual processing time by redesigning legacy data modules.",
      "Engineered custom data models and optimized database queries, resulting in significant performance gains for high-volume reporting.",
      "Debugged and maintained production-grade software, identifying and resolving critical logic errors in live environments."
    ],
    highlights: [
      {
        icon: Code,
        title: "SAP Development",
        description: "Designed and developed SAP applications with efficient coding practices.",
      },
      {
        icon: Database,
        title: "Data Modeling",
        description: "Applied data modeling techniques to improve application performance.",
      },
      {
        icon: Users,
        title: "Team Collaboration",
        description: "Worked in professional development environment with cross-functional teams.",
      },
    ]
  }
];

const educationData = [
  {
    degree: "B. Tech in Computer Science and Engineering",
    institution: "Amity University, NOIDA",
    period: "Expected June 2026",
    grade: "CGPA: 7.45",
  },
  {
    degree: "CBSE Board",
    institution: "Lovely Public Sr. Sec. School, New Delhi",
    period: "Graduated 2022",
    grade: "Result: 82.4%",
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-[#064E3B] relative">
      <div id="education" className="absolute top-0 left-0" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h2 className="font-heading font-bold text-4xl md:text-5xl tracking-tight text-white mb-4">
                Work Experience
              </h2>
              <p className="text-emerald-100/70 text-base max-w-xl">
                Professional experience in software engineering and mobile development
              </p>
            </div>

            <div className="space-y-6">
              {experiences.map((exp) => (
                <div
                  key={exp.company}
                  className="p-6 md:p-8 rounded-t-[2.5rem] rounded-b-xl bg-[#FFF8ED] border border-[#E8DCC8] transition-all duration-300 hover:border-[#D7C5AA] hover:bg-[#FFF4E3]"
                >
                  <div className="flex flex-col md:flex-row items-start gap-4">
                    <div className="p-2.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 shrink-0">
                      <Briefcase size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 pb-3 border-b border-stone-200/60 gap-2">
                        <div>
                          <h3 className="font-heading font-bold text-xl md:text-2xl text-stone-900 leading-snug">
                            {exp.role}
                          </h3>
                          <p className="text-emerald-700 font-semibold text-sm">{exp.company}</p>
                        </div>
                        <div className="flex items-center gap-1.5 text-stone-500 text-xs mt-1 md:mt-0 font-mono whitespace-nowrap">
                          <Calendar size={14} />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      <ul className="space-y-2 text-stone-600 leading-relaxed mb-6 list-disc list-inside text-xs md:text-sm">
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
                              className="p-3 rounded-xl bg-stone-100/70 border border-stone-200/50"
                            >
                              <div className="flex items-center gap-2 mb-1">
                                <Icon className="text-emerald-700" size={15} />
                                <h4 className="font-semibold text-xs text-stone-900 truncate">{highlight.title}</h4>
                              </div>
                              <p className="text-[10px] text-stone-500 leading-normal">{highlight.description}</p>
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
                Education
              </h2>
              <p className="text-emerald-100/70 text-base max-w-xl">
                Academic background in computer science and engineering
              </p>
            </div>

            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -4 }}
                  className="relative rounded-t-[2.5rem] rounded-b-xl border border-white/15 bg-white/[0.06] backdrop-blur-md shadow-lg hover:bg-white/[0.09] hover:border-emerald-300/30 hover:shadow-emerald-900/40 transition-all duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="relative z-10 shrink-0 p-3 rounded-full bg-emerald-400/15 border border-emerald-300/30">
                        <GraduationCap className="text-emerald-300" size={22} />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="mb-3">
                          <h3 className="font-heading font-bold text-lg md:text-xl text-white leading-snug mb-1">
                            {edu.degree}
                          </h3>
                          <p className="font-body text-emerald-300 text-sm font-semibold">
                            {edu.institution}
                          </p>
                        </div>
                        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/10">
                          <span className="inline-flex items-center font-body text-xs font-semibold text-emerald-200 bg-emerald-400/10 border border-emerald-300/20 px-2.5 py-1 rounded-full">
                            {edu.grade}
                          </span>
                          <div className="flex items-center gap-1.5 text-emerald-100/60 text-xs font-mono">
                            <Calendar size={13} />
                            <span>{edu.period}</span>
                          </div>
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