import { Badge } from "@/components/ui/badge";
import { HolographicCard } from "@/components/ui/holographic-card";
import {
  Code,
  Smartphone,
  BrainCircuit,
  GitMerge,
  Database,
  Cpu,
  Layers,
  TerminalSquare,
} from "lucide-react";

const technicalSkills = {
  Languages: [
    { name: "Java", icon: Code },
    { name: "C++", icon: Code },
    { name: "C#", icon: Code },
    { name: "Python", icon: Code },
    { name: "SQL", icon: Database },
    { name: "XAML", icon: Layers },
  ],
  "Frameworks & Tools": [
    { name: "Android SDK", icon: Smartphone },
    { name: "Jetpack Compose", icon: Smartphone },
    { name: ".NET MAUI", icon: Smartphone },
    { name: "Firebase", icon: Database },
  ],
  "ML & Data": [
    { name: "NumPy", icon: BrainCircuit },
    { name: "Pandas", icon: BrainCircuit },
    { name: "Scikit-learn", icon: BrainCircuit },
    { name: "PyTorch", icon: BrainCircuit },
  ],
  Concepts: [
    "Data Structures and Algorithms",
    "OOPS",
    "DBMS",
    "AI",
    "Machine Learning",
    "Mobile UI/UX Design",
    "Large Language Models",
  ],
  "Developer Tools": [
    { name: "Git/GitHub", icon: GitMerge },
    { name: "Linux", icon: TerminalSquare },
    { name: "Visual Studio", icon: Code },
    { name: "SAP ABAP", icon: Cpu },
  ],
};

export function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12">
          <div className="animate-fade-in-up">
            <div className="text-center">
              <h2 className="font-heading font-bold text-5xl md:text-6xl mb-6 gradient-text">About Me</h2>
              <div className="space-y-6 text-lg leading-relaxed max-w-4xl mx-auto">
                <p className="text-muted-foreground">
                  I&apos;m an engineering student with hands-on experience in SAP ABAP, Android development, and machine
                  learning. I have a strong foundation in data structures, object-oriented programming, and database
                  management systems.
                </p>
                <p className="text-muted-foreground">
                  My experience spans from mobile app development using .NET MAUI to implementing deep learning models
                  with PyTorch. I&apos;m passionate about creating efficient solutions and have worked in professional
                  development environments.
                </p>
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