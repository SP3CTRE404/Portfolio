"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { Mail, Phone, Github, Linkedin, Send } from "lucide-react";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  
  const initialFormState = { name: "", email: "", subject: "", message: "" };
  const [formData, setFormData] = useState(initialFormState);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedbackMessage(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setFeedbackMessage({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
        setFormData(initialFormState);
      } else {
        setFeedbackMessage({ type: 'error', message: result.error || 'Failed to send message.' });
      }
    } catch {
      setFeedbackMessage({ type: 'error', message: 'An error occurred. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  
  const contactInfo = [
    { icon: Mail, label: "Email", value: "uditagg2004@gmail.com", href: "mailto:uditagg2004@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91-8800201753", href: "tel:+918800201753" },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/udit-aggarwal-8506b3252/", href: "https://www.linkedin.com/in/udit-aggarwal-8506b3252/" },
    { icon: Github, label: "GitHub", value: "github.com/SP3CTRE404/", href: "https://github.com/SP3CTRE404/" },
  ];

  return (
    <section id="contact" className="py-32 bg-[#064E3B]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="font-heading font-bold text-5xl md:text-6xl mb-6 tracking-tight text-white">
            Let&apos;s Connect
          </h2>
          <p className="text-emerald-100 text-xl max-w-2xl mx-auto leading-relaxed">
            Ready to collaborate or discuss opportunities? Let&apos;s start a conversation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-stretch">
          <div className="flex flex-col justify-between space-y-5">
            <div>
              <h3 className="font-heading font-bold text-3xl mb-8 text-white">Get In Touch</h3>
              <div className="space-y-5">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={info.label}
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-6 rounded-3xl bg-[#FFF8ED] border border-[#E8DCC8] flex items-center gap-5 transition-all duration-200 hover:border-[#D7C5AA] hover:bg-[#FFF4E3] group shadow-md"
                    >
                      <div className="p-4 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 group-hover:bg-emerald-100 transition-colors shrink-0">
                        <Icon size={24} />
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-stone-900 text-base">{info.label}</p>
                        <p className="text-stone-600 text-base truncate font-mono">{info.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="p-10 md:p-12 rounded-t-[3.5rem] rounded-b-3xl bg-[#FFF8ED] border border-[#E8DCC8] shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-semibold text-stone-700 mb-2 block">Name *</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    className="h-12 bg-stone-50/80 border-stone-200 focus:border-emerald-500 focus:ring-emerald-500/20 rounded-2xl text-base px-4"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-stone-700 mb-2 block">Email *</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className="h-12 bg-stone-50/80 border-stone-200 focus:border-emerald-500 focus:ring-emerald-500/20 rounded-2xl text-base px-4"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-semibold text-stone-700 mb-2 block">Subject *</label>
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Project inquiry"
                  className="h-12 bg-stone-50/80 border-stone-200 focus:border-emerald-500 focus:ring-emerald-500/20 rounded-2xl text-base px-4"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-stone-700 mb-2 block">Message *</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project..."
                  rows={6}
                  className="bg-stone-50/80 border-stone-200 focus:border-emerald-500 focus:ring-emerald-500/20 rounded-2xl resize-none text-base p-4"
                  required
                />
              </div>

              {feedbackMessage && (
                <div
                  className={`p-4 rounded-2xl text-sm font-medium ${
                    feedbackMessage.type === 'success'
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}
                >
                  {feedbackMessage.message}
                </div>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full bg-[#10B981] text-white font-semibold hover:bg-emerald-600 transition-colors h-14 text-lg"
              >
                {isSubmitting ? (
                  <>
                    <LoadingSpinner size="sm" className="mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} className="mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}