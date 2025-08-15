"use client"

import type React from "react"
import { useState } from "react"
import { HolographicCard } from "@/components/ui/holographic-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { LoadingSpinner } from "@/components/ui/loading-spinner"
import { Mail, Phone, Github, Linkedin, Send } from "lucide-react"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  
  const initialFormState = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialFormState);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedbackMessage(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setFeedbackMessage({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
        setFormData(initialFormState);
      } else {
        setFeedbackMessage({ type: 'error', message: result.error || 'Failed to send message. Please try again.' });
      }
    } catch (error) {
      setFeedbackMessage({ type: 'error', message: 'An error occurred. Please check your connection and try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "uditagg2004@gmail.com",
      href: "mailto:uditagg2004@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-8800201753",
      href: "tel:+918800201753",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/udit-aggarwal-8506b3252/",
      href: "https://www.linkedin.com/in/udit-aggarwal-8506b3252/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/SP3CTRE404/",
      href: "https://github.com/SP3CTRE404/",
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-5xl md:text-6xl mb-6 gradient-text">Let&apos;s Connect</h2>
          <p className="font-body text-xl text-muted-foreground">
            Ready to collaborate or discuss opportunities? Let&apos;s start a conversation.
          </p>
        </div>

        {/* 👇 THIS IS THE LINE TO FIX 👇 */}
        <div className="grid md:grid-cols-2 gap-12">
        
          {/* Left Column: Get In Touch */}
          <div className="animate-fade-in-up">
            <h3 className="font-heading font-bold text-2xl mb-8 text-foreground">Get In Touch</h3>
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <HolographicCard
                  key={info.label}
                  intensity="low"
                  className="p-4 hover-lift transition-all duration-300"
                >
                  <a
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div
                      className="bg-primary/20 p-3 rounded-lg animate-glow group-hover:bg-primary/30 transition-colors"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <info.icon className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="font-body font-semibold text-foreground text-sm">{info.label}</p>
                      <p className="font-body text-muted-foreground text-sm break-all">{info.value}</p>
                    </div>
                  </a>
                </HolographicCard>
              ))}
            </div>
          </div>

          {/* Right Column: Form */}
          <HolographicCard intensity="medium" className="animate-fade-in-up">
            <div className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                 <div className="grid md:grid-cols-2 gap-4">
                   <div>
                     <label className="font-body font-medium text-sm mb-2 block text-foreground">Name *</label>
                     <Input
                       name="name"
                       value={formData.name}
                       onChange={handleInputChange}
                       placeholder="Your name"
                       className="font-body glass-card border-primary/30 focus:border-primary transition-all duration-300"
                       required
                     />
                   </div>
                   <div>
                     <label className="font-body font-medium text-sm mb-2 block text-foreground">Email *</label>
                     <Input
                       name="email"
                       type="email"
                       value={formData.email}
                       onChange={handleInputChange}
                       placeholder="your@email.com"
                       className="font-body glass-card border-primary/30 focus:border-primary transition-all duration-300"
                       required
                     />
                   </div>
                 </div>
                 <div>
                   <label className="font-body font-medium text-sm mb-2 block text-foreground">Subject *</label>
                   <Input
                     name="subject"
                     value={formData.subject}
                     onChange={handleInputChange}
                     placeholder="Project inquiry"
                     className="font-body glass-card border-primary/30 focus:border-primary transition-all duration-300"
                     required
                   />
                 </div>
                 <div>
                   <label className="font-body font-medium text-sm mb-2 block text-foreground">Message *</label>
                   <Textarea
                     name="message"
                     value={formData.message}
                     onChange={handleInputChange}
                     placeholder="Tell me about your project or opportunity..."
                     rows={5}
                     className="font-body glass-card border-primary/30 focus:border-primary resize-none transition-all duration-300"
                     required
                   />
                 </div>

              {feedbackMessage && (
                <div
                  className={`p-3 rounded-md text-sm ${
                    feedbackMessage.type === 'success'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {feedbackMessage.message}
                </div>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full font-body font-semibold hover-lift neon-border relative"
              >
                {isSubmitting ? (
                  <>
                    <LoadingSpinner size="sm" className="mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} className="mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>

            <div className="mt-4 text-xs text-muted-foreground">
              <p>* Required fields. I&apos;ll get back to you within 24 hours.</p>
            </div>
          </div>
        </HolographicCard>
      </div>
     </div>
    </section>
  );
}