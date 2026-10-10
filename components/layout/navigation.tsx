"use client";

import { useState } from "react";
import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
// ✅ We'll use react-icons for the filled icon style
import {
  FaHome,
  FaUserGraduate,
  FaCode,
  FaBriefcase,
  FaCertificate,
  FaEnvelope,
  FaBookOpen,
} from "react-icons/fa";

interface NavigationProps {
activeSection: string;
onSectionChange: (section: string) => void;
}

export function Navigation({ activeSection, onSectionChange }: NavigationProps) {
// Update the navItems array to include icons
const navItems = [
    { id: "home", label: "Home", icon: FaHome },
    { id: "skills", label: "Skills", icon: FaCode }, 
    { id: "experience", label: "Experience & Edu", icon: FaBriefcase },
    { id: "projects", label: "Projects", icon: FaCode },
    { id: "contact", label: "Contact", icon: FaEnvelope },
  ];

const handleScrollTo = (sectionId: string) => {
  onSectionChange(sectionId);
};

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 rounded-full neu-nav-bar p-1.5">
      <nav className="rounded-full">
        <ul className="flex items-center justify-center gap-1.5 sm:gap-2">
          {navItems.map((item) => {
            const isActive = 
              activeSection === item.id ||
              (item.id === "experience" && activeSection === "education");

            return (
              <li key={item.id}>
                <button
                  onClick={() => handleScrollTo(item.id)}
                  className={cn(
                    "flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full font-body text-xs sm:text-sm font-medium transition-all duration-200",
                    isActive
                      ? "neu-nav-active font-semibold"
                      : "neu-nav-inactive"
                  )}
                >
                  <item.icon className={cn("h-3.5 w-3.5 sm:h-4 sm:w-4", isActive ? "text-white" : "text-zinc-400")} />
                  <span>{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}