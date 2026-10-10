"use client";

import FolderFloat from "@/components/ui/folder-float";
import { StrokeText } from "@/components/ui/stroke-text";

export function ContactSection() {
  const folderItems = [
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="16"
          height="16"
          className="shrink-0 transition-transform [will-change:transform]"
          style={{ shapeRendering: "geometricPrecision" }}
          aria-hidden="true"
        >
          <path
            fill="#EA4335"
            d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.272H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
          />
        </svg>
      ),
      label: "Email: uditagg2004@gmail.com",
      value: "mailto:uditagg2004@gmail.com",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="15"
          height="15"
          className="shrink-0 text-zinc-300 transition-transform [will-change:transform]"
          style={{ shapeRendering: "geometricPrecision" }}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z" />
        </svg>
      ),
      label: "Phone: +91-8800201753",
      value: "tel:+918800201753",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="16"
          height="16"
          className="shrink-0 transition-transform [will-change:transform]"
          style={{ shapeRendering: "geometricPrecision" }}
          aria-hidden="true"
        >
          <path
            fill="#0A66C2"
            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
          />
        </svg>
      ),
      label: "LinkedIn: Udit Aggarwal",
      value: "https://www.linkedin.com/in/udit-aggarwal-8506b3252/",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="16"
          height="16"
          className="shrink-0 text-white transition-transform [will-change:transform]"
          style={{ shapeRendering: "geometricPrecision" }}
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"
          />
        </svg>
      ),
      label: "GitHub: SP3CTRE404",
      value: "https://github.com/SP3CTRE404/",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="16"
          height="16"
          className="shrink-0 transition-transform [will-change:transform]"
          style={{ shapeRendering: "geometricPrecision" }}
          aria-hidden="true"
        >
          <path
            fill="#E1306C"
            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
          />
        </svg>
      ),
      label: "Instagram: @udit.aggarwal26",
      value: "https://www.instagram.com/udit.aggarwal26?obrf=MTE2a3ducTduNTJ5aQ==",
    },
  ];

  const handleSelect = (value: string) => {
    if (value.startsWith("http")) {
      window.open(value, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = value;
    }
  };

  return (
    <section id="contact" className="py-28 relative overflow-visible scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Column: Heading, Subheading & Info */}
          <div className="text-left w-full lg:w-[45%] max-w-xl shrink-0">
            <h2 className="font-heading font-bold text-5xl md:text-6xl mb-4 tracking-tight text-white">
              <StrokeText
                text="Let's Connect"
                strokeColor="#ffffff"
                fillColor="#ffffff"
                strokeWidth={1.4}
                drawDuration={1.4}
                fillDelay={0.2}
                trigger="scroll"
                fillMode="wipe"
                fontSize={58}
                fontWeight={700}
                letterSpacing={-1.5}
                className="inline-block max-w-full"
              />
            </h2>
            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-6">
              Ready to collaborate, discuss opportunities, or brainstorm system architecture? Hover or tap to open the contact channels folder.
            </p>
            <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase tracking-widest">
              <span className="w-8 h-px bg-white/20" />
              <span>Hover or click folder to release channels</span>
            </div>
          </div>

          {/* Right Column: Interactive Physics Floating Folder */}
          <div className="w-full lg:w-[55%] flex justify-center items-center py-16 lg:py-20 relative overflow-visible min-h-[380px]">
            <FolderFloat
              items={folderItems}
              label="Contact Channels"
              sublabel="5 channels inside"
              trigger="hover"
              defaultOpen={false}
              closeOnSelect={false}
              physics={true}
              drift={0.6}
              onSelect={handleSelect}
              folderColor="#161821"
              frontColor="#222533"
              paperColor="#2d3042"
              itemColor="#161821"
              itemTextColor="#f4f4f5"
              labelColor="#ffffff"
              width={330}
              height={215}
              radius={24}
              spread={270}
              lift={60}
              tilt={8}
              flapAngle={36}
              restAngle={16}
              openDuration={520}
              stagger={45}
              bounce={0.3}
            />
          </div>
        </div>
      </div>
    </section>
  );
}