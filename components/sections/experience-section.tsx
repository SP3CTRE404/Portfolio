import { HolographicCard } from "@/components/ui/holographic-card"
import { Briefcase, Calendar, Code, Database, Users } from "lucide-react"

const experienceHighlights = [
  {
    icon: Code,
    title: "SAP Development",
    description: "Designed and developed SAP applications with efficient coding practices",
  },
  {
    icon: Database,
    title: "Data Modeling",
    description: "Applied data modeling techniques to improve application performance",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Worked in professional development environment with cross-functional teams",
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-5xl md:text-6xl mb-6 gradient-text">Work Experience</h2>
          <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional experience in software development and business applications
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <HolographicCard intensity="high" className="p-8">
            <div className="flex items-start gap-6">
              <div className="bg-primary/20 p-4 rounded-lg animate-glow">
                <Briefcase className="text-primary" size={28} />
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="font-heading font-bold text-2xl mb-2 text-foreground">
                      Enterprise Software Intern
                    </h3>
                    <p className="font-body text-primary font-semibold text-lg">Future Labs Technology</p>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar size={18} />
                    <span className="font-body">Jun 2025 – Aug 2025</span>
                  </div>
                </div>

                <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                  <p>
                    • Optimized enterprise workflow, automation, reducing manual processing time by redesigning legacy data modules.
                  </p>
                  <p>
                    • Engineered custom data models and optimized database queries, resulting in significant performance gains for high-volume reporting.
                  </p>
                  <p>
                    • Debugged and maintained production-grade software, identifying and resolving critical logic errors in live environments.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  {experienceHighlights.map((highlight, index) => (
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
        </div>
      </div>
    </section>
  )
}
