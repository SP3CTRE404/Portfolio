"use client"

import { useState } from "react"
import { HolographicCard } from "@/components/ui/holographic-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Filter, Github, Eye } from "lucide-react"
import { Description } from "@radix-ui/react-toast"

const projects = [
  {
    title: "Image Recognition on FashionMNIST Dataset Using CNN",
    description:
      "Implemented a Convolutional Neural Network to classify images of clothing articles from the FashionMNIST dataset. Pre-processed data using rescaling and augmentation techniques to improve model generalization and prevent overfitting. Achieved 94% validation accuracy by engineering a network with Conv2D, MaxPooling2D, and Dropout layers for enhanced performance.",
    tags: ["PyTorch", "CNN", "Deep Learning", "Python", "Matplotlib", "Pandas"],
    category: "Machine Learning",
    link: "https://github.com/SP3CTRE404/ImageRecognition",
    github: "https://github.com/SP3CTRE404/ImageRecognition",
    date: "May 2023",
    status: "Completed",
  },
  {
    title: "Who Let Me Cook! - AI Powered Recipe App",
    description:
      "Who Let Me Cook! is a mobile recipe app built with .NET MAUI (C#/XAML) and the MVVM architecture. It fetches data from TheMealDB API and uses the Google Gemini API for its core intelligence. The app dynamically simplifies complex cooking instructions and automatically scales ingredient quantities based on the user's selected serving size. This creates a highly adaptive and user-friendly experience, making sophisticated recipes accessible to cooks of all skill levels.",
    tags: [".NET MAUI", "C#", "XAML", "Google Gemini API", "TheMealDB API"],
    category: "Mobile Development",
    link: "https://github.com/SP3CTRE404/Who-Let-Me-Cook",
    github: "https://github.com/SP3CTRE404/Who-Let-Me-Cook/tree/master/WhoLetMeCook",
    date: "Ongoing",
    status: "In Progress",
  },
  {
    title: "Digital Twin System For Rumour Threat Analysis",
    description: "This project aims to develop an intelligent system capable of automatically assessing the potential threat of online rumors and misinformation. The core objective is to move beyond simple true/false detection and create a model that can provide a nuanced, quantitative harmfulness score for a given rumor. This score helps to prioritize moderation efforts, understand public reaction, and mitigate the real-world impact of fake news.\n\n The ultimate vision is to integrate this model into a Digital Twin of a social network environment. This would allow for real-time monitoring and simulation, enabling platform managers to predict the trajectory and potential damage of a rumor before it spreads widely."
    tags: ["Digital Twin", "Python", "PyTorch", "Machine Learning", "Data Analysis"],
    category: "Machine Learning",
    link: "https://github.com/SP3CTRE404/Who-Let-Me-Cook/tree/master/WhoLetMeCook",
    github: "https://github.com/SP3CTRE404/Who-Let-Me-Cook/tree/master/WhoLetMeCook",
    date: "Ongoing",
    status: "In Progress",    
  },
]

const categories = [
  "All",
  "Machine Learning",
  "Mobile Development"  
]

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects = projects.filter(
    (project) =>
      selectedCategory === "All" ||
      project.category === selectedCategory,
  )

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-5xl md:text-6xl mb-6 gradient-text">
            Key Projects
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical projects in machine learning and mobile
            development
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 text-muted-foreground mb-4">
            <Filter size={16} />
            <span className="font-body text-sm">Filter by category:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={
                  selectedCategory === category ? "default" : "outline"
                }
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="font-body hover-lift glass-card"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <HolographicCard
              key={index}
              intensity="medium"
              className="p-8 flex flex-col h-full animate-fade-in-up"
            >
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-heading font-bold text-2xl text-foreground pr-4">
                    {project.title}
                  </h3>
                  <Badge
                    variant={
                      project.status === "Completed"
                        ? "secondary"
                        : "default"
                    }
                    className="text-xs flex-shrink-0"
                  >
                    {project.status}
                  </Badge>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                  <Calendar size={14} />
                  <span>{project.date}</span>
                </div>

                <p className="font-body text-muted-foreground mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="font-body text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-4">
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="text-accent flex-1"
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Eye size={16} className="mr-2" />
                    View Project
                  </a>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="flex-1"
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} className="mr-2" />
                    Source Code
                  </a>
                </Button>
              </div>
            </HolographicCard>
          ))}
        </div>
      </div>
    </section>
  )
}
