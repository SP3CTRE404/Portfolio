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
<div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 rounded-full border border-white/25 bg-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
<nav className="px-3 py-2 rounded-full">
<ul className="flex items-center justify-center gap-2">
{navItems.map((item) => {
  const isActive = 
    activeSection === item.id ||
    (item.id === "skills" && activeSection === "certificates") ||
    (item.id === "experience" && activeSection === "education");

  return (
    <li key={item.id}>
      <button
        onClick={() => handleScrollTo(item.id)}
        className={cn(
          "flex items-center gap-2 px-4 py-2 rounded-full font-body text-sm font-medium transition-colors duration-200",
          isActive
            ? "bg-emerald-500 text-white"
            : "text-white/80 hover:bg-white/15 hover:text-white"
        )}
      >
        <item.icon className="h-4 w-4" />
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