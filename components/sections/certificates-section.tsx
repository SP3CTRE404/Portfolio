"use client";

import { ExternalLink, Award } from "lucide-react";
import { cn } from "@/lib/utils";

// ✅ Updated colorClass to include background gradient AND a glowing shadow
const certificates = [
{
  title: "AI Fluency: Framework & Foundations",
  issuer: "Anthropic",
  date: "Issued Aug 2025",
  link: "https://verify.skilljar.com/c/o5kucjkssxry", 
  icon: Award,
  colorClass: "from-teal-400 to-blue-500 shadow-blue-500/20 group-hover:shadow-blue-500/40",
},
  {
    title: "Introduction to Model Context Protocol",
    issuer: "Anthropic",
    date: "Issued Aug 2025",
    link: "https://verify.skilljar.com/c/g8bu8pew6n9d", 
    icon: Award,
    colorClass: "from-teal-400 to-blue-500 shadow-blue-500/20 group-hover:shadow-blue-500/40",
  },
    {
        title: "Model Context Protocol Advanced Topics",
        issuer: "Anthropic",
        date: "Issued Aug 2025",
        link: "https://verify.skilljar.com/c/dk85q9wwv6fs",
        icon: Award,
        colorClass: "from-purple-500 to-pink-500 shadow-pink-500/20 group-hover:shadow-pink-500/40",
    },
];

export function CertificatesSection() {
  return (
    <section id="certificates" className="py-20 bg-background"> 
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <h2 className="font-heading font-bold text-4xl md:text-5xl gradient-text">
             Licenses & Certifications
           </h2>
           <p className="font-body text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            A showcase of my certified skills and ongoing commitment to professional development.
           </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => {
            const Icon = cert.icon;
            return (
              <a 
                key={cert.title} 
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                // ✅ className now includes neon-border and the dynamic color/glow class
                className={cn(
                  "p-6 rounded-2xl flex flex-col group transition-all duration-300 hover:scale-110 bg-gradient-to-br shadow-lg hover:shadow-lg border border-transparent text-white hover:text-white hover:shadow-lg",
                  "neon-border", // Added neon-border class
                  cert.colorClass // Applies the gradient and glowing shadow
                )}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 bg-white/10 rounded-md">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-heading text-white">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-white/70 ">{cert.issuer}</p>
                  </div>
                </div>
                <div className="mt-auto flex justify-between items-center text-sm text-white/70">
                  <span>{cert.date}</span>
                  <div className="flex items-center gap-1 text-white opacity-0 group-hover:opacity-80 transition-opacity">
                    <span>Show Credential</span>
                    <ExternalLink size={16} />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}