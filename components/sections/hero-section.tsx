"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, FileText } from "lucide-react"; 
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/theme-provider";
import { motion, AnimatePresence } from "framer-motion";
import { HeroTerminal } from "@/components/ui/hero-terminal";

const greetings = [
  "Hello",
  "こんにちは",
  "Hola",   
  "नमस्ते",
  "Bonjour",
  "Ciao",   
  "你好",     
  "Olá",     
  "안녕하세요",
  "Guten Tag",
  "مرحبا",
];

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  const { actualTheme } = useTheme();
  const [greetingIndex, setGreetingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGreetingIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden p-4">
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">

          {/* Left Column: Name, Greeting, and now Buttons */}
          <div className="md:w-1/2 text-center md:text-left">
            <div className="font-heading text-4xl md:text-5xl font-semibold text-gray-400 mb-2 h-16 flex items-center justify-center md:justify-start">
              <AnimatePresence mode="wait">
                <motion.span
                  key={greetingIndex}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  {greetings[greetingIndex]},
                </motion.span>
              </AnimatePresence>
            </div>
            
            {/* 👇 FONT SIZE REDUCED HERE 👇 */}
            <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl bg-gradient-to-r from-purple-400 to-teal-400 text-transparent bg-clip-text leading-tight">
              I'm Udit Aggarwal
            </h1>

            {/* 👇 BUTTONS MOVED HERE 👇 */}
            <div className="animate-fade-in-up mt-8">
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center md:justify-start">
                <Button
                  size="lg"
                  onClick={() => onNavigate("projects")}
                  className={cn(
                    "font-body font-semibold hover-lift neon-border",
                    actualTheme === "dark" && "animate-glow",
                  )}
                >
                  View Projects
                </Button>
                
                <a href="/Udit-Aggarwal-Resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className={cn(
                      "font-body font-semibold hover-lift neon-border w-full sm:w-auto",
                      actualTheme === "dark" && "animate-glow"
                    )}
                  >
                    <FileText size={18} className="mr-2" />
                    View Resume
                  </Button>
                </a>

                <Button
                  size="lg"
                  onClick={() => onNavigate("contact")}
                  className={cn(
                    "font-body font-semibold hover-lift neon-border",
                     actualTheme === "dark" && "animate-glow"
                   )}
                >
                  Get In Touch
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column: Terminal */}
          <div className="w-full md:w-1/2 max-w-lg">
            <HeroTerminal />
          </div>

        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <Button
          size="icon"
          variant="ghost"
          onClick={() => onNavigate("about")}
          className={cn(
            "rounded-full h-12 w-12",
            actualTheme === "dark" && "text-primary animate-bounce hover-animate-none"
          )}
        >
          <ChevronDown size={32} />
        </Button>
      </div>
    </section>
  );
}