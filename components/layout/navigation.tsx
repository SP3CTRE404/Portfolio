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
} from "react-icons/fa";

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  // Update the navItems array to include icons
  const navItems = [
    { id: "home", label: "Home", icon: FaHome },
    { id: "about", label: "About", icon: FaUserGraduate }, 
    { id: "skills", label: "Skills", icon: FaCode }, 
    { id: "experience", label: "Experience", icon: FaBriefcase },
    { id: "projects", label: "Projects", icon: FaCode },
    { id: "education", label: "Education", icon: FaCertificate }, // Changed icon
    { id: "contact", label: "Contact", icon: FaEnvelope },
  ];

  const handleScrollTo = (sectionId: string) => {
    onSectionChange(sectionId);
  };

  return (
    // This parent div creates the gradient border effect
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 p-[1px] rounded-full bg-gradient-to-r from-teal-400 via-purple-500 to-orange-400 animate-glow">
      <nav className="px-3 py-2 bg-black/80 backdrop-blur-md rounded-full">
        <ul className="flex items-center justify-center gap-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleScrollTo(item.id)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-full font-body text-sm font-medium transition-colors duration-300",
                  activeSection === item.id
                    ? "bg-gray-200/20 text-white" // Style for the active button
                    : "text-gray-400 hover:text-white" // Style for inactive buttons
                )}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}