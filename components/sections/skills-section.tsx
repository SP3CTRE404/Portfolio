import { Badge } from "@/components/ui/badge";
import { HolographicCard } from "@/components/ui/holographic-card";
import {
  Code,
  Smartphone,
  Database,
  Cpu,
  Layers,
  TerminalSquare,
  GitMerge,
  BrainCircuit,
  MonitorSmartphone,
  BriefcaseBusiness,
} from "lucide-react";
import { FaJava, FaLinux, FaGithub, FaCode, FaCss3, FaPython } from "react-icons/fa";
import { SiSpringboot, SiDocker, SiPostgresql, SiNextdotjs } from "react-icons/si";
import { TbBrandFlutter, TbBrandCSharp } from "react-icons/tb";

const technicalSkills = {
  Frontend: [
    { name: "TypeScript", icon: FaCode },
    { name: "Tailwind CSS", icon: FaCss3 },
    { name: "XAML", icon: FaCode },
  ],
  Backend: [
    { name: "Java", icon: FaJava },
    { name: "C++", icon: FaCode },
    { name: "C#", icon: TbBrandCSharp },
    { name: "Python", icon: FaPython },
  ],
  "Frameworks & Tools": [
    { name: "Spring Boot", icon: SiSpringboot },
    { name: "ASP.NET Core", icon: FaCode },
    { name: "Flutter", icon: TbBrandFlutter },
    { name: "Next.js & React", icon: SiNextdotjs },
    { name: "Android SDK", icon: Smartphone },
    { name: ".NET MAUI", icon: MonitorSmartphone },
    { name: "Firebase", icon: MonitorSmartphone },
    { name: "SQL", icon: Database },
  ],
  "ML & Data": [
    { name: "NumPy", icon: BrainCircuit },
    { name: "Pandas", icon: BrainCircuit },
    { name: "Scikit-learn", icon: BrainCircuit },
    { name: "PyTorch", icon: BrainCircuit },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "JPA / Hibernate", icon: Database },
    { name: "EF Core", icon: Database },
  ],
  "Developer Tools": [
    { name: "Docker", icon: SiDocker },
    { name: "Git / GitHub", icon: FaGithub },
    { name: "Linux", icon: FaLinux },
    { name: "Visual Studio", icon: FaCode },
    { name: "SAP ABAP", icon: BriefcaseBusiness },
  ],
  Concepts: [
    "DSA",
    "Business Applications",
    "OOPS",
    "DBMS",
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
    "Large Language Models",
    "Mobile UI/UX Design",
    "RESTful API Design",
    "JWT Security & Auth",
    "High-Concurrency Systems",
    "Real-Time Data Sync",
    "State Management",
    "Software Architecture",
    "Docker Containerization"
  ],
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12">
          <div className="animate-fade-in-up">
            <div className="text-center">
              <h2 className="font-heading font-bold text-5xl md:text-6xl mb-6 gradient-text">Skills</h2>
              <div className="space-y-6 text-lg leading-relaxed max-w-4xl mx-auto">
                </div>
            </div>

            {/* --- THIS IS THE MODIFIED LINE --- */}
            <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr">
              {Object.entries(technicalSkills).map(([category, skills], index) => {
                const isLeftSide = index < 3;

                return (
                  <HolographicCard
                    key={category}
                    intensity="medium"
                    className={`p-6 flex flex-col transition-all duration-300 h-full ${
                      isLeftSide
                        ? "lg:scale-110 lg:transform-gpu lg:z-10 lg:shadow-2xl lg:shadow-primary/20"
                        : "lg:scale-95 lg:opacity-90"
                    }`}
                  >
                    <h3 className="font-heading font-semibold text-xl mb-6 text-primary flex-shrink-0">
                      {category}
                    </h3>
                    <div className="flex-grow">
                      {Array.isArray(skills) && typeof skills[0] === "object" ? (
                        <ul className="space-y-3">
                          {(
                            skills as {
                              name: string;
                              icon: React.ElementType;
                            }[]
                          ).map((skill) => (
                            <li
                              key={skill.name}
                              className="flex items-center gap-3"
                            >
                              <skill.icon className="text-accent" size={20} />
                              <span className="font-body text-sm text-muted-foreground">
                                {skill.name}
                              </span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <div className="flex flex-wrap gap-2">
                          {(skills as string[]).map((skill) => (
                            <Badge
                              key={skill}
                              variant="secondary"
                              className="font-body text-xs hover:bg-primary/20 transition-colors neon-border hover-lift"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </HolographicCard>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}