"use client";

import { useRef, useEffect } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";
import { SpecularButton } from "@/components/ui/specular-button";
import { StrokeText } from "@/components/ui/stroke-text";
import { CardSwap, Card, type CardSwapHandle } from "@/components/ui/card-swap";

interface Project {
  title: string;
  description: string[];
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    title: "AetherFS – S3-Compatible Object Storage Engine",
    description: [
      "Engineered an S3-compatible RESTful object storage service managing bucket lifecycles and binary object data.",
      "Implemented a partitioned local filesystem storage engine to optimize disk I/O and prevent inode exhaustion.",
      "Built streaming payload ingestion and retrieval using BoundedInputStream for memory-efficient I/O handling.",
      "Enforced standard AWS S3 bucket naming validations and compliant HTTP error response formats.",
      "Decoupled the API controller layer from storage mechanics through an extensible StorageEngine interface.",
    ],
    tags: ["Java", "Spring Boot", "Storage Systems", "REST API", "Clean Architecture"],
    githubUrl: "https://github.com/SP3CTRE404/cusotm-s3",
  },
  {
    title: "Subscription Management Backend (ASP.NET Core)",
    description: [
      "Architected a production-ready RESTful service using ASP.NET Core and C# adhering to clean API design principles.",
      "Implemented secure JWT bearer authentication with fine-grained claim validations and cryptographic password hashing.",
      "Modeled and managed relational data schemas using Entity Framework Core (Code-First migrations) with PostgreSQL.",
      "Engineered automated subscription status handlers, billing calculations, and payment tracking modules.",
      "Containerized application runtime using multi-stage Docker builds for repeatable, isolated deployments.",
    ],
    tags: ["ASP.NET Core", "C#", "Entity Framework Core", "JWT Security", "Docker"],
    githubUrl: "https://github.com/SP3CTRE404/subscription-manager-csharp",
  },
  {
    title: "Digital Twin System For Rumour Threat Analysis",
    description: [
      "Architected a Hybrid Cognitive Pipeline: built a multi-agent \"Digital Twin\" system simulating rumor propagation, integrating a fine-tuned RoBERTa model for intensity quantification with an automated RAG pipeline (Flan-T5) to eliminate hallucinations.",
      "Engineered a custom threat-scoring algorithm (\"Hysteria Lock,\" a modified SIR model) to capture non-linear crisis escalation and model persistent crowd panic.",
      "Optimized inference performance via 4-bit quantization and dynamic VRAM offloading, achieving 79.1% safety recall (a 15-point improvement over baseline) and cutting semantic evaluation latency to 0.34s.",
    ],
    tags: ["Digital Twin", "RoBERTa", "RAG (Flan-T5)", "SIR Model", "PyTorch", "Quantization"],
    githubUrl: "https://github.com/SP3CTRE404/rumor-analysis",
  },
  {
    title: "Premio – Subscription Management Backend (Spring Boot)",
    description: [
      "Engineered a high-concurrency RESTful backend in Spring Boot to process user subscriptions and transaction lifecycles.",
      "Implemented stateless authentication and role-based access control using Spring Security and signed JWTs.",
      "Optimized relational persistence with PostgreSQL and JPA/Hibernate for high-throughput query execution.",
      "Architected automated scheduled background jobs to process recurring billing cycles and renewal notifications.",
      "Designed a clean layered architecture with centralized global exception handling and unified error payloads.",
    ],
    tags: ["Spring Boot", "Java", "Spring Security", "JPA/Hibernate", "PostgreSQL"],
    githubUrl: "https://github.com/SP3CTRE404/subscription-manager-api",
  },
  {
    title: "Premio – Subscription Management Mobile App (Flutter)",
    description: [
      "Developed a cross-platform mobile application in Flutter and Dart to track and monitor recurring expenses.",
      "Engineered scalable client-side state management coupled with local caching for seamless offline-first capability.",
      "Designed a modern glassmorphic interface with fluid 60fps micro-interactions and dynamic dark theme support.",
      "Integrated resilient asynchronous HTTP services with request interceptors for token refresh and error handling.",
    ],
    tags: ["Flutter", "Dart", "State Management", "UI/UX Design", "REST APIs"],
    githubUrl: "https://github.com/SP3CTRE404/premio-mobile-app",
  },
  {
    title: "Distributed Linux Media System",
    description: [
      "Engineered a zero-latency bidirectional remote controller bridging an Android client to an Arch Linux host.",
      "Implemented a low-level communication layer using multi-threaded raw TCP socket daemon listeners.",
      "Controlled kernel-level playback processes (mpv, yt-dlp) directly using Java ProcessBuilder execution pipelines.",
      "Implemented predictive caching algorithms to eliminate stream buffering and UI transmission lag.",
    ],
    tags: ["Java", "Android Studio", "TCP Sockets", "Linux", "Multi-threading"],
    githubUrl: "https://github.com/SP3CTRE404/Distributed-Linux-Media-System",
  },
  {
    title: "Who Let Me Cook! - AI Powered Recipe App",
    description: [
      "Built a cross-platform mobile culinary app in .NET MAUI (C#/XAML) following the MVVM design pattern.",
      "Integrated Google Gemini API to simplify complex cooking instructions and dynamically rescale ingredient portions.",
      "Consumed TheMealDB REST endpoints with asynchronous data synchronization and reactive search filtering.",
    ],
    tags: [".NET MAUI", "C#", "XAML", "Gemini API", "MVVM"],
    githubUrl: "https://github.com/SP3CTRE404/Who-Let-Me-Cook",
  },
  {
    title: "Pneumonia Detection Using Deep Learning",
    description: [
      "Trained a ResNet18 convolutional model using PyTorch and transfer learning on chest X-ray datasets.",
      "Mitigated medical dataset class imbalance using custom weighted loss functions and data augmentation pipelines.",
      "Deployed an end-to-end inference pipeline serving predictions via a lightweight Flask REST API backend.",
    ],
    tags: ["Deep Learning", "CNN", "PyTorch", "Flask Server", "Tailwind CSS"],
    githubUrl: "https://github.com/SP3CTRE404/Pneumonia-Detection-System",
  },
  {
    title: "Sentiment Analyzer Using Gemini API",
    description: [
      "Developed a real-time sentiment evaluation web tool powered by Google Gemini model reasoning.",
      "Created an interactive Streamlit UI delivering immediate positive, neutral, or negative classifications.",
      "Formulated structured zero-shot prompts to guarantee low-latency, deterministic single-token classifications.",
    ],
    tags: ["Gemini API", "Python", "Streamlit", "LLM", "NLP"],
    githubUrl: "https://github.com/SP3CTRE404/Sentiment-Analyzer",
  },
  {
    title: "Image Recognition on FashionMNIST Using CNN",
    description: [
      "Engineered a multi-layer Convolutional Neural Network with Conv2D, MaxPooling, and Dropout regularization.",
      "Preprocessed and augmented 70,000 FashionMNIST images to prevent overfitting and improve generalization.",
      "Achieved 94% validation accuracy and visualized model confusion matrices using Matplotlib.",
    ],
    tags: ["PyTorch", "CNN", "Deep Learning", "Python", "Matplotlib"],
    githubUrl: "https://github.com/SP3CTRE404/ImageRecognition",
  },
];

export function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardSwapRef = useRef<CardSwapHandle>(null);
  const currentStepRef = useRef(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const currentProgress = scrollYProgress.get();
    const initialStep = Math.min(
      projects.length - 1,
      Math.max(0, Math.floor(currentProgress * projects.length))
    );
    currentStepRef.current = initialStep;
  }, [scrollYProgress]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const totalSteps = projects.length;
    const targetStep = Math.min(
      totalSteps - 1,
      Math.max(0, Math.floor(latest * totalSteps))
    );

    if (targetStep !== currentStepRef.current) {
      const diff = targetStep - currentStepRef.current;
      currentStepRef.current = targetStep;

      if (diff > 0) {
        for (let i = 0; i < diff; i++) {
          cardSwapRef.current?.next();
        }
      } else {
        for (let i = 0; i < Math.abs(diff); i++) {
          cardSwapRef.current?.prev();
        }
      }
    }
  });

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative scroll-mt-16"
      style={{ height: `${100 + (projects.length - 1) * 45}vh` }}
    >
      {/* Sticky Fullscreen Frame */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center px-4 sm:px-8 lg:px-12 overflow-visible">
        <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 overflow-visible">
          {/* Left Column: Heading, Subheading & Info */}
          <div className="text-left w-full lg:w-[35%] max-w-xl shrink-0">
            <h2 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white mb-4">
              <StrokeText
                text="Featured Projects"
                strokeColor="#ffffff"
                fillColor="#ffffff"
                strokeWidth={1.4}
                drawDuration={1.4}
                fillDelay={0.2}
                trigger="scroll"
                fillMode="wipe"
                fontSize={56}
                fontWeight={700}
                letterSpacing={-1.5}
                className="inline-block max-w-full"
              />
            </h2>
            <p className="text-zinc-400 text-base lg:text-lg leading-relaxed mb-6">
              Scroll down to navigate through featured distributed systems, mobile architectures, and deep learning engineering work.
            </p>
            <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase tracking-widest">
              <span className="w-8 h-px bg-white/20" />
              <span>Scroll to explore</span>
            </div>
          </div>

          {/* Right Column: 3D CardSwap Deck Stage (Enlarged) */}
          <div className="w-full lg:w-[65%] h-[560px] sm:h-[620px] lg:h-[680px] relative flex items-center justify-center overflow-visible">
            <CardSwap
              ref={cardSwapRef}
              width={760}
              height={500}
              cardDistance={64}
              verticalDistance={72}
              depth={95}
              skewAmount={5}
              visibleCards={4}
              autoplay={false}
              pauseOnHover={false}
              draggable={true}
              speed={1.1}
              bounce={0.35}
              parallax={0.5}
              hoverSpread={0.14}
              cardRadius={30}
              theme="dark"
              className="w-full h-full"
            >
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="p-7 sm:p-8 md:p-9 flex flex-col justify-between h-full w-full select-none"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="neu-icon-pod p-2.5 rounded-xl text-zinc-300">
                        <Folder size={18} />
                      </div>
                      <span className="neu-chip-inset px-3 py-1 rounded-full font-mono text-xs text-zinc-300 font-semibold tracking-wider uppercase">
                        Project {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      {project.githubUrl && (
                        <SpecularButton
                          size="sm"
                          radius={9999}
                          className="!w-9 !h-9 !p-0 rounded-full"
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="View Source Code"
                        >
                          <Github size={17} />
                        </SpecularButton>
                      )}
                      {project.liveUrl && (
                        <SpecularButton
                          size="sm"
                          radius={9999}
                          className="!w-9 !h-9 !p-0 rounded-full"
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="View Live Project"
                        >
                          <ExternalLink size={17} />
                        </SpecularButton>
                      )}
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-xl sm:text-2xl tracking-tight text-white mb-3">
                    {project.title}
                  </h3>

                  <ul className="text-zinc-300 text-sm sm:text-[15px] leading-relaxed space-y-2 mb-4 list-disc list-outside pl-5">
                    {project.description.map((bullet, bulletIdx) => (
                      <li key={bulletIdx} className="text-zinc-200">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-3 border-t border-white/10">
                  {project.tags.slice(0, 5).map((tag) => (
                    <span
                      key={tag}
                      className="neu-chip px-3 py-1 rounded-full text-xs font-mono text-zinc-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </CardSwap>
        </div>
        </div>
      </div>
    </section>
  );
}