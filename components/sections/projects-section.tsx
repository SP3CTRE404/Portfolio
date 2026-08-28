"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    title: "Implementation of Subscription Management Backend Using ASP.NET",
    description: "Engineered a RESTful API using ASP.NET Core and C#, implementing JWT security and Entity Framework Core (EF Core) for data persistence. Undertook this project as a dedicated learning initiative to master ASP.NET Core, C#, and Entity Framework Core, successfully implementing user authentication, subscription data management, and payment processing functionalities. Configured and deployed the API to a production-like environment using Docker containers for consistent, isolated, and scalable deployment.",
    tags: ["ASP.NET Core", "C#", "Entity Framework Core", "JWT Security", "Docker"],
    githubUrl: "https://github.com/SP3CTRE404/subscription-manager-csharp",
  },
  {
    title: "Premio – Subscription Management Mobile App (Flutter)",
    description: "Developed a cross-platform mobile application using Flutter and Dart to centralize and monitor recurring expenses with a high-performance, smooth UI. Implemented robust state management and local caching mechanisms to ensure real-time data synchronization and offline readiness. Designed a premium user experience featuring custom animations and a modern glassmorphic interface, integrating secure API consumption layers to handle complex asynchronous data streams.",
    tags: ["Flutter", "Dart", "State Management", "UI/UX Design", "REST APIs"],
    githubUrl: "https://github.com/SP3CTRE404/premio-mobile-app",
  },
  {
    title: "Premio – Subscription Management Backend (Spring Boot)",
    description: "Engineered a robust RESTful backend using Spring Boot and Java to handle high-concurrency requests and manage core subscription business logic. Implemented JWT-based security using Spring Security, utilized JPA/Hibernate for optimized Object-Relational Mapping (ORM) and query efficiency, and architected automated background services for billing reminders. Designed and implemented a robust data model in PostgreSQL to efficiently store and query user profiles, subscription plans, and payment history records.",
    tags: ["Spring Boot", "Java", "Spring Security", "JPA/Hibernate", "PostgreSQL"],
    githubUrl: "https://github.com/SP3CTRE404/subscription-manager-api",
  },
  {
    title: "Distributed Linux Media System",
    description: "A high-performance, bi-directional remote control system bridging an Android Client and Arch Linux Host using raw TCP Sockets. This project moves beyond standard API calls by managing kernel-level processes (mpv, yt-dlp) via Java ProcessBuilder for direct system control. It features a multi-threaded server architecture with predictive caching to achieve zero-latency playback and a custom 'Glassmorphism' UI built in Android XML.",
    tags: ["Java", "Android Studio", "TCP Sockets", "Linux", "Multi-threading"],
    githubUrl: "https://github.com/SP3CTRE404/Distributed-Linux-Media-System",
  },
  {
    title: "Digital Twin System For Rumour Threat Analysis",
    description: "This project aims to develop an intelligent system capable of automatically assessing the potential threat of online rumors and misinformation. The core objective is to move beyond simple true/false detection and create a model that can provide a nuanced, quantitative harmfulness score for a given rumor. This score helps to prioritize moderation efforts, understand public reaction, and mitigate the real-world impact of fake news.\n\nThe ultimate vision is to integrate this model into a Digital Twin of a social network environment. This would allow for real-time monitoring and simulation, enabling platform managers to predict the trajectory and potential damage of a rumor before it spreads widely.",
    tags: ["Digital Twin", "Python", "PyTorch", "Machine Learning"],
    githubUrl: "https://github.com/SP3CTRE404/rumor-analysis",
  },
  {
    title: "Who Let Me Cook! - AI Powered Recipe App",
    description: "Who Let Me Cook! is a mobile recipe app built with .NET MAUI (C#/XAML) and the MVVM architecture. It fetches data from TheMealDB API and uses the Google Gemini API for its core intelligence. The app dynamically simplifies complex cooking instructions and automatically scales ingredient quantities based on the user's selected serving size. This creates a highly adaptive and user-friendly experience, making sophisticated recipes accessible to cooks of all skill levels.",
    tags: [".NET MAUI", "C#", "XAML", "Gemini API", "MVVM"],
    githubUrl: "https://github.com/SP3CTRE404/Who-Let-Me-Cook",
  },
  {
    title: "Pneumonia Detection Using Deep Learning",
    description: "This project is a full-stack AI system for detecting pneumonia from chest X-rays. I trained a ResNet18 deep learning model using PyTorch and transfer learning on the Kaggle dataset. To ensure high accuracy, class imbalance was addressed with a weighted loss function. The trained model is served via a Flask API backend to a sleek, futuristic web interface built with HTML, Tailwind CSS, and JavaScript, allowing for interactive, real-time image analysis and showcasing a complete MLOps workflow.",
    tags: ["Deep Learning", "CNN", "Artificial Intelligent", "Python", "Flask Server", "PyTorch"],
    githubUrl: "https://github.com/SP3CTRE404/Pneumonia-Detection-System",
  },
  {
    title: "Sentiment Analyzer Using Gemini API",
    description: "A web application that analyzes the sentiment of any given text and classifies it as Positive, Negative, or Neutral. This tool leverages the advanced reasoning capabilities of Google's Gemini family of models to provide real-time, accurate sentiment analysis. The application follows a straightforward process: users input text, which is sent to the Gemini API for analysis. The API returns a single-word classification, which is then displayed to the user with a corresponding color.",
    tags: ["Google API", "Artificial Intelligent", "Python", "Streamlit", "Gemini"],
    githubUrl: "https://github.com/SP3CTRE404/Sentiment-Analyzer",
  },
  {
    title: "Image Recognition on FashionMNIST Using CNN",
    description: "Implemented a Convolutional Neural Network to classify images of clothing articles from the FashionMNIST dataset. Pre-processed data using rescaling and augmentation techniques to improve model generalization and prevent overfitting. Achieved 94% validation accuracy by engineering a network with Conv2D, MaxPooling2D, and Dropout layers for enhanced performance.",
    tags: ["PyTorch", "CNN", "Deep Learning", "Python", "Matplotlib"],
    githubUrl: "https://github.com/SP3CTRE404/ImageRecognition",
  },
];

function ProjectCard({
  project,
  index,
  totalProjects,
}: {
  project: Project;
  index: number;
  totalProjects: number;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end start"],
  });

  const isLast = index === totalProjects - 1;

  // Congested, fast-paced deck transformation:
  // Fades slightly and scales to 0.88 while pushing up by -60px into a sticky deck
  const scale = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.94, 0.88]);
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.85, 0.2]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <div ref={wrapperRef} className={isLast ? "" : "h-[130vh] relative"}>
      <div
        className="h-screen sticky top-28 flex items-start justify-center pt-6"
        style={{ zIndex: index + 1 }}
      >
        <motion.div
          style={
            isLast
              ? {}
              : {
                  scale,
                  opacity,
                  y,
                }
          }
          className="w-full max-w-3xl p-8 md:p-10 rounded-t-[2.5rem] rounded-b-2xl bg-[#FFF8ED] border border-[#E8DCC8] shadow-2xl transition-colors duration-300 hover:bg-[#FFF4E3]"
        >
          <div className="flex items-center justify-between mb-5 pb-3 border-b border-stone-200/60">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700">
                <Folder size={20} />
              </div>
              <span className="font-mono text-xs text-stone-400 font-semibold tracking-wider uppercase">
                Project 0{index + 1}
              </span>
            </div>

            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-stone-100/80 hover:bg-emerald-50 hover:text-emerald-700 text-stone-600 border border-stone-200/60 transition-colors"
                  aria-label="View Source Code"
                >
                  <Github size={18} />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-stone-100/80 hover:bg-emerald-50 hover:text-emerald-700 text-stone-600 border border-stone-200/60 transition-colors"
                  aria-label="View Live Project"
                >
                  <ExternalLink size={18} />
                </a>
              )}
            </div>
          </div>

          <h3 className="font-heading font-bold text-2xl md:text-3xl tracking-tight text-stone-900 mb-3">
            {project.title}
          </h3>

          <p className="text-stone-600 text-sm md:text-base leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3.5 py-1 rounded-full bg-stone-100 border border-stone-200/60 text-xs font-mono text-stone-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-[#064E3B] relative pb-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="pt-24 pb-8 text-center">
          <h2 className="font-heading font-bold text-4xl md:text-5xl tracking-tight text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-emerald-100 text-base max-w-xl mx-auto">
            Scroll down to explore featured software engineering and deep learning work.
          </p>
        </div>

        <div className="relative">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              totalProjects={projects.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}