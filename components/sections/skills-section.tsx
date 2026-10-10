"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaJava, FaLinux, FaPython, FaDocker, FaGitAlt, FaAndroid } from "react-icons/fa";
import { SiSpringboot, SiPostgresql, SiPytorch, SiHibernate, SiRedis, SiScikitlearn, SiGnubash, SiAndroidstudio, SiAndroid } from "react-icons/si";
import { TbBrandFlutter, TbBrandCSharp } from "react-icons/tb";
import { Server, Brain, Database, Terminal, Cpu, ShieldCheck, Smartphone, Layers, HardDrive } from "lucide-react";
import { StrokeText } from "@/components/ui/stroke-text";

interface SkillItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  breakBefore?: boolean;
}

interface SkillCategory {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  accent: string;
  span: string;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Core & Backend",
    icon: Server,
    accent: "blue",
    span: "md:col-span-7",
    skills: [
      { name: "Java", icon: FaJava },
      { name: "C#", icon: TbBrandCSharp },
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "ASP.NET Core", icon: Server },
      { name: "RESTful APIs", icon: Terminal },
    ],
  },
  {
    title: "Mobile & Cross-Platform",
    icon: Cpu,
    accent: "sky",
    span: "md:col-span-5",
    skills: [
      { name: "Flutter", icon: TbBrandFlutter },
      { name: "Dart", icon: TbBrandFlutter },
      { name: "Android Studio", icon: SiAndroidstudio },
      { name: ".NET MAUI", icon: Smartphone },
    ],
  },
  {
    title: "AI & Data Science",
    icon: Brain,
    accent: "violet",
    span: "md:col-span-4",
    skills: [
      { name: "Python", icon: FaPython },
      { name: "PyTorch", icon: SiPytorch },
      { name: "Machine Learning", icon: Brain },
    ],
  },
  {
    title: "Data & Infrastructure",
    icon: Database,
    accent: "amber",
    span: "md:col-span-4",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "SQL", icon: Database },
      { name: "Docker", icon: FaDocker },
      { name: "Git", icon: FaGitAlt },
    ],
  },
  {
    title: "Operating Systems",
    icon: Terminal,
    accent: "emerald",
    span: "md:col-span-4",
    skills: [
      { name: "Linux", icon: FaLinux },
    ],
  },
];

const accentStyles: Record<
  string,
  { iconWrap: string; icon: string; chip: string; chipHover: string }
> = {
  blue: {
    iconWrap: "bg-blue-400/15 border-blue-300/30",
    icon: "text-blue-300",
    chip: "bg-blue-400/10 border-blue-300/20 text-blue-100",
    chipHover: "hover:bg-blue-400/20 hover:border-blue-300/40",
  },
  sky: {
    iconWrap: "bg-sky-400/15 border-sky-300/30",
    icon: "text-sky-300",
    chip: "bg-sky-400/10 border-sky-300/20 text-sky-100",
    chipHover: "hover:bg-sky-400/20 hover:border-sky-300/40",
  },
  violet: {
    iconWrap: "bg-violet-400/15 border-violet-300/30",
    icon: "text-violet-300",
    chip: "bg-violet-400/10 border-violet-300/20 text-violet-100",
    chipHover: "hover:bg-violet-400/20 hover:border-violet-300/40",
  },
  amber: {
    iconWrap: "bg-amber-400/15 border-amber-300/30",
    icon: "text-amber-300",
    chip: "bg-amber-400/10 border-amber-300/20 text-amber-100",
    chipHover: "hover:bg-amber-400/20 hover:border-amber-300/40",
  },
  emerald: {
    iconWrap: "bg-emerald-400/15 border-emerald-300/30",
    icon: "text-emerald-300",
    chip: "bg-emerald-400/10 border-emerald-300/20 text-emerald-100",
    chipHover: "hover:bg-emerald-400/20 hover:border-emerald-300/40",
  },
};

export function SkillsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Grid layout (12 columns total):
  // Row 1: [0: Core & Backend (col-span-7)] [1: Mobile & Cross (col-span-5)]
  // Row 2: [2: AI & Data Science (col-span-4)] [3: Data & Infrastructure (col-span-4)] [4: Operating Systems (col-span-4)]
  const getCardTransform = (index: number) => {
    if (hoveredIndex === null) {
      return { x: 0, y: 0, scale: 1, zIndex: 1 };
    }
    if (hoveredIndex === index) {
      return { x: 0, y: 0, scale: 1.05, zIndex: 30 };
    }

    // Displacement vectors pushing other cards away smoothly
    const displacements: Record<number, Record<number, { x: number; y: number }>> = {
      0: { 1: { x: 22, y: 0 }, 2: { x: -8, y: 20 }, 3: { x: 0, y: 20 }, 4: { x: 16, y: 20 } },
      1: { 0: { x: -22, y: 0 }, 2: { x: -16, y: 20 }, 3: { x: -8, y: 20 }, 4: { x: 8, y: 20 } },
      2: { 0: { x: 0, y: -20 }, 1: { x: 16, y: -20 }, 3: { x: 18, y: 0 }, 4: { x: 26, y: 0 } },
      3: { 0: { x: -10, y: -20 }, 1: { x: 10, y: -20 }, 2: { x: -18, y: 0 }, 4: { x: 18, y: 0 } },
      4: { 0: { x: -16, y: -20 }, 1: { x: 0, y: -20 }, 2: { x: -26, y: 0 }, 3: { x: -18, y: 0 } },
    };

    const disp = displacements[hoveredIndex]?.[index] || { x: 0, y: 0 };
    return { x: disp.x, y: disp.y, scale: 0.96, zIndex: 2 };
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden scroll-mt-16">
      <div className="relative container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-14">
          <h2 className="font-heading font-bold text-4xl md:text-5xl tracking-tight text-white mb-4">
            <StrokeText
              text="Technical Expertise"
              strokeColor="#ffffff"
              fillColor="#ffffff"
              strokeWidth={1.4}
              drawDuration={1.4}
              fillDelay={0.2}
              trigger="scroll"
              fillMode="wipe"
              fontSize={54}
              fontWeight={700}
              letterSpacing={-1.5}
              className="inline-block max-w-full"
            />
          </h2>
          <p className="text-zinc-400 text-base md:text-lg max-w-xl mx-auto">
            Technologies and tools I specialize in to build scalable backend systems,
            mobile applications, and intelligent solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16 relative">
          {skillCategories.map((category, index) => {
            const CategoryIcon = category.icon;
            const style = accentStyles[category.accent];
            const motionState = getCardTransform(index);

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                animate={{
                  x: motionState.x,
                  y: motionState.y,
                  scale: motionState.scale,
                  zIndex: motionState.zIndex,
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 22,
                  mass: 0.7,
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative ${category.span} col-span-1 rounded-3xl neu-card-zoom p-7 md:p-8 overflow-hidden cursor-pointer select-none`}
              >
                <div className="relative flex items-center gap-3.5 mb-6 border-b border-white/10 pb-4">
                  <div className="neu-icon-pod p-2.5 rounded-2xl">
                    <CategoryIcon className={`w-5 h-5 ${style.icon}`} />
                  </div>
                  <h3 className="font-heading font-semibold text-xl tracking-tight text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="relative flex flex-wrap gap-2.5">
                  {category.skills.map((skill, skillIndex) => {
                    const SkillIcon = skill.icon;
                    return (
                      <div
                        key={skill.name}
                        className={`contents ${skill.breakBefore ? "[&]:basis-full [&]:w-full" : ""}`}
                      >
                        {skill.breakBefore && <div className="w-full basis-full h-0" />}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.08 + skillIndex * 0.04 }}
                          className="neu-chip flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-mono text-zinc-200 cursor-default"
                        >
                          <SkillIcon className={`w-4 h-4 ${style.icon}`} />
                          <span>{skill.name}</span>
                        </motion.div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>



      </div>
    </section>
  );
}
