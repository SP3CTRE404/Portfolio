"use client";

import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge"; // Used for tags and status
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"; // ✅ Import Tooltip components

// ✅ The projects array is updated with your new data
const projects = [
  {
    title: "Digital Twin System For Rumour Threat Analysis",
    description: "This project aims to develop an intelligent system capable of automatically assessing the potential threat of online rumors and misinformation. The core objective is to move beyond simple true/false detection and create a model that can provide a nuanced, quantitative harmfulness score for a given rumor. This score helps to prioritize moderation efforts, understand public reaction, and mitigate the real-world impact of fake news.\n\n The ultimate vision is to integrate this model into a Digital Twin of a social network environment. This would allow for real-time monitoring and simulation, enabling platform managers to predict the trajectory and potential damage of a rumor before it spreads widely.",
    tags: ["Digital Twin", "Python", "PyTorch", "Machine Learning"],
    category: "Machine Learning",
    github: "https://github.com/SP3CTRE404/Digital-Twin-Systems-for-Rumor-Analysis",
    date: "Ongoing",
    status: "In Progress",
    color: "#818CF8", // Indigo
    colorClass: "from-indigo-400 to-purple-500 shadow-purple-500/20 group-hover:shadow-purple-500/40",
  },
  {
    title: "Who Let Me Cook! - AI Powered Recipe App",
    description: "Who Let Me Cook! is a mobile recipe app built with .NET MAUI (C#/XAML) and the MVVM architecture. It fetches data from TheMealDB API and uses the Google Gemini API for its core intelligence. The app dynamically simplifies complex cooking instructions and automatically scales ingredient quantities based on the user's selected serving size. This creates a highly adaptive and user-friendly experience, making sophisticated recipes accessible to cooks of all skill levels.",
    tags: [".NET MAUI", "C#", "XAML", "Gemini API", "MVVM"],
    category: "Mobile Development",
    github: "https://github.com/SP3CTRE404/Who-Let-Me-Cook",
    date: "Ongoing",
    status: "In Progress",
    color: "#F472B6", // Pink
    colorClass: "from-pink-400 to-rose-500 shadow-rose-500/20 group-hover:shadow-rose-500/40",
  },
  {
    title: "Pneumonia Detection Using Deep Learning",
    description: "This project is a full-stack AI system for detecting pneumonia from chest X-rays. I trained a ResNet18 deep learning model using PyTorch and transfer learning on the Kaggle dataset. To ensure high accuracy, class imbalance was addressed with a weighted loss function. The trained model is served via a Flask API backend to a sleek, futuristic web interface built with HTML, Tailwind CSS, and JavaScript, allowing for interactive, real-time image analysis and showcasing a complete MLOps workflow.",
    tags: ["Deep Learning", "CNN", "Artificial Intelligent", "Python", "Flask Server", "PyTorch"],
    category: "Machine Learning",
    github: "https://github.com/SP3CTRE404/Pneumonia-Detection-System",
    date: "September 2025",
    status: "Completed",
    color: "#60A5FA", // Blue
    colorClass: "from-blue-400 to-sky-500 shadow-sky-500/20 group-hover:shadow-sky-500/40",
  },
  {
    title: "Sentiment Analyzer Using Gemini API",
    description: "A web application that analyzes the sentiment of any given text and classifies it as Positive, Negative, or Neutral. This tool leverages the advanced reasoning capabilities of Google's Gemini family of models to provide real-time, accurate sentiment analysis. The application follows a straightforward process: users input text, which is sent to the Gemini API for analysis. The API returns a single-word classification, which is then displayed to the user with a corresponding color.",
    tags: ["Google API", "Artificial Intelligent", "Python", "Streamlit", "Gemini"],
    category: "Machine Learning",
    github: "https://github.com/SP3CTRE404/Sentiment-Analyzer",
    date: "September 2025",
    status: "Completed",
    color: "#60A5FA", // Blue
    colorClass: "from-blue-400 to-sky-500 shadow-sky-500/20 group-hover:shadow-sky-500/40",
  },
  {
    title: "Image Recognition on FashionMNIST Using CNN",
    description: "Implemented a Convolutional Neural Network to classify images of clothing articles from the FashionMNIST dataset. Pre-processed data using rescaling and augmentation techniques to improve model generalization and prevent overfitting. Achieved 94% validation accuracy by engineering a network with Conv2D, MaxPooling2D, and Dropout layers for enhanced performance.",
    tags: ["PyTorch", "CNN", "Deep Learning", "Python", "Matplotlib"],
    category: "Machine Learning",
    github: "https://github.com/SP3CTRE404/ImageRecognition",
    date: "May 2023",
    status: "Completed",
    color: "#60A5FA", // Blue
    colorClass: "from-blue-400 to-sky-500 shadow-sky-500/20 group-hover:shadow-sky-500/40",
  },
];
// ✅ Updated props interface
interface CardProps {
  i: number;
  title: string;
  description: string;
  tags: string[];
  category: string;
  github: string;
  date: string;
  status: string;
  color: string;
  colorClass: string;
  progress: any;
  range: [number, number];
  targetScale: number;
}

export function ProjectsSection() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section id="projects" ref={container} className="relative bg-background pt-16">
      <div className="text-center mb-16 px-4">
        <h2 className="font-heading font-bold text-4xl md:text-5xl gradient-text">
          Projects
        </h2>
        <p className="font-body text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
          A selection of projects that showcase my passion for building impactful software.
        </p>
      </div>
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05;
        return (
          <Card
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * (1 / projects.length), 1]}
            targetScale={targetScale}
          />
        );
      })}
    </section>
  );
}

function Card({ i, title, description, tags, category, github, date, status, color, colorClass, progress, range, targetScale }: CardProps) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <TooltipProvider>
      <div ref={container} className="h-screen flex items-center justify-center sticky top-0 px-4">
        <motion.div
          style={{
            scale,
            top: `calc(-5vh + ${i * 25}px)`,
          }}
          className="relative -top-1/4 h-auto w-full max-w-4xl origin-top group"
        >
          <div
            className={cn(
              "w-full rounded-2xl overflow-hidden shadow-2xl p-6 md:p-8 flex flex-col justify-between min-h-[350px]",
              "bg-gradient-to-br transition-all duration-300",
              "neon-border animate-glow",
              colorClass
            )}
          >
            {/* ... (Card Header, Description, and Tags are unchanged) ... */}
            <div className="flex justify-between items-start gap-4 mb-4">
              <div>
                <p className="text-sm font-medium text-white/70" style={{ color }}>{category}</p>
                <h2 className="text-xl md:text-2xl font-bold text-white">{title}</h2>
              </div>
              <Badge
                className="text-xs whitespace-nowrap"
                variant={status === "Completed" ? "default" : "outline"}
              >
                {status}
              </Badge>
            </div>

            <p className="text-sm md:text-base text-white/70 leading-relaxed mb-4">
              {description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="font-normal">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="mt-auto pt-4 border-t border-white/20 flex items-center justify-between text-white/80">
              <span className="text-xs font-mono">{date}</span>
              <div className="flex items-center">

                {/* ✅ 3. Wrap the link with the Tooltip components */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-10 flex items-center gap-2 text-sm font-medium hover:text-white hover:underline transition-colors"
                    >
                      <Github size={16} />
                      <span>View on GitHub</span>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{github}</p>
                  </TooltipContent>
                </Tooltip>

              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </TooltipProvider>
  );
}