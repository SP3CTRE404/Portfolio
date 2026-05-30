import { HolographicCard } from "@/components/ui/holographic-card"
import { Briefcase, Calendar, Smartphone, Terminal, Users, Code, Database } from "lucide-react"

const experiences = [
  {
    role: "Software Engineer Intern (Flutter)",
    company: "UXDLAB Software",
    period: "March 2026 – Present",
    bullets: [
      "• Developing and maintaining production-grade cross-platform applications using Flutter, ensuring feature stability and high-quality UI/UX standards.",
      "• Analyzing and navigating complex existing codebases to implement feature enhancements and resolve technical debt within established architectures.",
      "• Strengthening team dynamics by coordinating across functional units, gaining hands-on experience in collaborative development and professional life cycles."
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
      "• Optimized enterprise workflow, automation, reducing manual processing time by redesigning legacy data modules.",
      "• Engineered custom data models and optimized database queries, resulting in significant performance gains for high-volume reporting.",
      "• Debugged and maintained production-grade software, identifying and resolving critical logic errors in live environments."
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

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-5xl md:text-6xl mb-6 gradient-text">Work Experience</h2>
          <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional experience in software engineering and mobile development
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp) => (
            <HolographicCard key={exp.company} intensity="high" className="p-8">
              <div className="flex items-start gap-6">
                <div className="bg-primary/20 p-4 rounded-lg animate-glow">
                  <Briefcase className="text-primary" size={28} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="font-heading font-bold text-2xl mb-2 text-foreground">
                        {exp.role}
                      </h3>
                      <p className="font-body text-primary font-semibold text-lg">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar size={18} />
                      <span className="font-body">{exp.period}</span>
                    </div>
                  </div>

                  <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                    {exp.bullets.map((bullet, idx) => (
                      <p key={idx}>{bullet}</p>
                    ))}
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    {exp.highlights.map((highlight, index) => (
                      <div
                        key={highlight.title}
                        className="p-4 glass-card rounded-lg hover-lift transition-all duration-300"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <highlight.icon className="text-accent" size={20} />
                          <h4 className="font-body font-semibold text-sm text-foreground">{highlight.title}</h4>
                        </div>
                        <p className="text-xs text-muted-foreground">{highlight.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </HolographicCard>
          ))}
        </div>
      </div>
    </section>
  )
}
