"use client";

import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge"; // Used for tags and status
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"; // ✅ Import Tooltip components

// ✅ The projects array is updated with your new data
const projects = [
  {
    title: "Implementation of Subscription Management Backend Using ASP.NET",
    description: "Engineered a RESTful API using ASP.NET Core and C#, implementing JWT security and Entity Framework Core (EF Core) for data persistence. Undertook this project as a dedicated learning initiative to master ASP.NET Core, C#, and Entity Framework Core, successfully implementing user authentication, subscription data management, and payment processing functionalities. Configured and deployed the API to a production-like environment using Docker containers for consistent, isolated, and scalable deployment.",
    tags: ["ASP.NET Core", "C#", "Entity Framework Core", "JWT Security", "Docker"],
    category: "Backend Development",
    github: "https://github.com/SP3CTRE404/Subscription-Management-Backend-ASP.NET",
    date: "May 2026",
    status: "Completed",
    color: "#60A5FA", // Blue
    colorClass: "from-blue-400 to-sky-500 shadow-sky-500/20 group-hover:shadow-sky-500/40",
  },
  {
    title: "Premio – Subscription Management Mobile App (Flutter)",
    description: "Developed a cross-platform mobile application using Flutter and Dart to centralize and monitor recurring expenses with a high-performance, smooth UI. Implemented robust state management and local caching mechanisms to ensure real-time data synchronization and offline readiness. Designed a premium user experience featuring custom animations and a modern glassmorphic interface, integrating secure API consumption layers to handle complex asynchronous data streams.",
    tags: ["Flutter", "Dart", "State Management", "UI/UX Design", "REST APIs"],
    category: "Mobile Development",
    github: "https://github.com/SP3CTRE404/Premio-Subscription-Management-Mobile-App",
    date: "January 2026",
    status: "Completed",
    color: "#F472B6", // Pink
    colorClass: "from-pink-400 to-rose-500 shadow-rose-500/20 group-hover:shadow-rose-500/40",
  },
  {
    title: "Premio – Subscription Management Backend (Spring Boot)",
    description: "Engineered a robust RESTful backend using Spring Boot and Java to handle high-concurrency requests and manage core subscription business logic. Implemented JWT-based security using Spring Security, utilized JPA/Hibernate for optimized Object-Relational Mapping (ORM) and query efficiency, and architected automated background services for billing reminders. Designed and implemented a robust data model in PostgreSQL to efficiently store and query user profiles, subscription plans, and payment history records.",
    tags: ["Spring Boot", "Java", "Spring Security", "JPA/Hibernate", "PostgreSQL"],
    category: "Backend Development",
    github: "https://github.com/SP3CTRE404/Premio-Subscription-Management-Backend",
    date: "January 2026",
    status: "Completed",
    color: "#10B981", // Emerald
    colorClass: "from-emerald-400 to-green-500 shadow-green-500/20 group-hover:shadow-green-500/40",
  },
];
// ✅ Updated props interface
interface CardProps {
  i: number;
  title: string;
  description: string;
  tags: string[];
  category: string;
  github: string;
  date: string;
  status: string;
  color: string;
  colorClass: string;
  progress: any;
  range: [number, number];
  targetScale: number;
}

export function ProjectsSection() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section id="projects" ref={container} className="relative bg-background pt-16">
      <div className="text-center mb-16 px-4">
        <h2 className="font-heading font-bold text-4xl md:text-5xl gradient-text">
          Projects
        </h2>
        <p className="font-body text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
          A selection of projects that showcase my passion for building impactful software.
        </p>
      </div>
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05;
        return (
          <Card
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * (1 / projects.length), 1]}
            targetScale={targetScale}
          />
        );
      })}
    </section>
  );
}

function Card({ i, title, description, tags, category, github, date, status, color, colorClass, progress, range, targetScale }: CardProps) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <TooltipProvider>
      <div ref={container} className="h-screen flex items-center justify-center sticky top-0 px-4">
        <motion.div
          style={{
            scale,
            top: `calc(-5vh + ${i * 25}px)`,
          }}
          className="relative -top-1/4 h-auto w-full max-w-4xl origin-top group"
        >
          <div
            className={cn(
              "w-full rounded-2xl overflow-hidden shadow-2xl p-6 md:p-8 flex flex-col justify-between min-h-[350px]",
              "bg-gradient-to-br transition-all duration-300",
              "neon-border animate-glow",
              colorClass
            )}
          >
            {/* ... (Card Header, Description, and Tags are unchanged) ... */}
            <div className="flex justify-between items-start gap-4 mb-4">
              <div>
                <p className="text-sm font-medium text-white/70" style={{ color }}>{category}</p>
                <h2 className="text-xl md:text-2xl font-bold text-white">{title}</h2>
              </div>
              <Badge
                className="text-xs whitespace-nowrap"
                variant={status === "Completed" ? "default" : "outline"}
              >
                {status}
              </Badge>
            </div>

            <p className="text-sm md:text-base text-white/70 leading-relaxed mb-4">
              {description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="font-normal">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="mt-auto pt-4 border-t border-white/20 flex items-center justify-between text-white/80">
              <span className="text-xs font-mono">{date}</span>
              <div className="flex items-center">

                {/* ✅ 3. Wrap the link with the Tooltip components */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-10 flex items-center gap-2 text-sm font-medium hover:text-white hover:underline transition-colors"
                    >
                      <Github size={16} />
                      <span>View on GitHub</span>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{github}</p>
                  </TooltipContent>
                </Tooltip>

              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </TooltipProvider>
  );
}