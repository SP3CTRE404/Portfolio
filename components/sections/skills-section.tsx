"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaJava, FaLinux, FaPython, FaDocker } from "react-icons/fa";
import { SiSpringboot, SiPostgresql, SiPytorch } from "react-icons/si";
import { TbBrandFlutter, TbBrandCSharp } from "react-icons/tb";
import { Server, Brain, Database, Terminal, Cpu, Award, ExternalLink } from "lucide-react";

const skillCategories = [
  {
    title: "Core & Backend",
    icon: Server,
    accent: "emerald",
    span: "md:col-span-4",
    skills: [
      { name: "Java", icon: FaJava },
      { name: "C#", icon: TbBrandCSharp },
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "ASP.NET", icon: Server },
      { name: "RESTful APIs", icon: Terminal },
    ],
  },
  {
    title: "Mobile & Cross-Platform",
    icon: Cpu,
    accent: "blue",
    span: "md:col-span-2",
    skills: [
      { name: "Flutter", icon: TbBrandFlutter },
      { name: "Dart", icon: TbBrandFlutter },
    ],
  },
  {
    title: "AI & Data Science",
    icon: Brain,
    accent: "violet",
    span: "md:col-span-3",
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
    span: "md:col-span-3",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "SQL", icon: Database },
      { name: "Docker", icon: FaDocker },
      { name: "Linux", icon: FaLinux },
    ],
  },
];

const accentStyles: Record<
  string,
  { iconWrap: string; icon: string; chip: string; chipHover: string }
> = {
  emerald: {
    iconWrap: "bg-emerald-400/15 border-emerald-300/30",
    icon: "text-emerald-300",
    chip: "bg-emerald-400/10 border-emerald-300/20 text-emerald-100",
    chipHover: "hover:bg-emerald-400/20 hover:border-emerald-300/40",
  },
  blue: {
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
};

const certificates = [
  {
    title: "AI Fluency: Framework & Foundations",
    issuer: "Anthropic",
    date: "Issued Aug 2025",
    link: "https://verify.skilljar.com/c/o5kucjkssxry", 
    icon: Award,
  },
  {
    title: "Introduction to Model Context Protocol",
    issuer: "Anthropic",
    date: "Issued Aug 2025",
    link: "https://verify.skilljar.com/c/g8bu8pew6n9d", 
    icon: Award,
  },
  {
    title: "Model Context Protocol Advanced Topics",
    issuer: "Anthropic",
    date: "Issued Aug 2025",
    link: "https://verify.skilljar.com/c/dk85q9wwv6fs",
    icon: Award,
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 relative bg-[#064E3B] overflow-hidden">
      <div className="relative container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-4xl md:text-5xl tracking-tight text-white mb-4">
            Technical Expertise
          </h2>
          <p className="text-emerald-100/70 text-base max-w-xl mx-auto">
            Technologies and tools I specialize in to build scalable backend systems,
            mobile applications, and intelligent solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {skillCategories.map((category, index) => {
            const CategoryIcon = category.icon;
            const style = accentStyles[category.accent];
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className={`relative ${category.span} col-span-1 rounded-2xl border border-white/15 bg-white/[0.06] backdrop-blur-md shadow-lg hover:bg-white/[0.09] hover:border-white/25 transition-all duration-300 p-7 md:p-8 overflow-hidden`}
              >
                <div className="relative flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                  <div className={`p-2.5 rounded-full border ${style.iconWrap}`}>
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
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.08 + skillIndex * 0.04 }}
                        whileHover={{ scale: 1.06 }}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-mono transition-all duration-200 ${style.chip} ${style.chipHover}`}
                      >
                        <SkillIcon className={`w-4 h-4 ${style.icon}`} />
                        <span>{skill.name}</span>
                      </motion.div>
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
