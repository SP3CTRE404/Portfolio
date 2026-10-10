"use client";

import { useState, useEffect } from "react";
import { SpecularButton } from "@/components/ui/specular-button";
import { StrokeText } from "@/components/ui/stroke-text";
import { ChevronDown } from "lucide-react"; 
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

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
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">

          {/* Left Column: Name, Greeting, and Buttons */}
          <div className="md:w-1/2 text-center md:text-left">
            <div className="mb-4 h-12 flex items-center justify-center md:justify-start">
              <div className="neu-chip-inset px-4 py-1.5 rounded-full inline-flex items-center gap-2 border border-white/10">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <div className="font-body text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold text-zinc-300">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={greetingIndex}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.4 }}
                    >
                      {greetings[greetingIndex]},
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>
            </div>
            
            <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight text-white leading-tight">
              <StrokeText
                text="I'm Udit Aggarwal"
                strokeColor="#ffffff"
                fillColor="#ffffff"
                strokeWidth={1.4}
                drawDuration={1.5}
                fillDelay={0.2}
                stagger={0.04}
                trigger="mount"
                fillMode="wipe"
                fontSize={84}
                fontWeight={800}
                letterSpacing={-2}
                className="inline-block max-w-full"
              />
            </h1>

            <p className="mt-4 text-zinc-300 text-base md:text-lg max-w-lg mx-auto md:mx-0 leading-relaxed">
              Software engineer specializing in high-performance backends, Flutter mobile apps, and machine learning systems.
            </p>

            {/* Tactile Specular Buttons */}
            <div className="animate-fade-in-up mt-8">
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center md:justify-start">
                <SpecularButton
                  size="md"
                  radius={9999}
                  tint="#ffffff"
                  tintOpacity={0.08}
                  intensity={1.2}
                  idleIntensity={0.4}
                  thickness={1.4}
                  glow={1.2}
                  onClick={() => onNavigate("projects")}
                >
                  View Projects
                </SpecularButton>
                <SpecularButton
                  size="md"
                  radius={9999}
                  tint="#ffffff"
                  tintOpacity={0.04}
                  onClick={() => onNavigate("contact")}
                >
                  Get In Touch
                </SpecularButton>
              </div>
            </div>
          </div>

          {/* Right Column: Profile photo in Neumorphic frame */}
          <div className="w-full md:w-1/2 max-w-md lg:max-w-lg">
            <div className="neu-frame p-4 rounded-t-[3.5rem] rounded-b-3xl">
              <div className="neu-frame-inner p-2 rounded-t-[3.2rem] rounded-b-[1.7rem]">
                <Image
                  src="/udit.png"
                  alt="Udit Aggarwal"
                  width={520}
                  height={520}
                  priority
                  className="w-full aspect-square object-cover rounded-t-[2.8rem] rounded-b-2xl"
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <SpecularButton
          size="sm"
          radius={9999}
          className="!w-12 !h-12 !p-0 flex items-center justify-center rounded-full"
          onClick={() => onNavigate("skills")}
          aria-label="Scroll to skills section"
        >
          <ChevronDown size={24} className="text-zinc-300" />
        </SpecularButton>
      </div>
    </section>
  );
}
