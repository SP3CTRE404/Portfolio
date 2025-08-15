import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Calendar } from "lucide-react"

const educationData = [
  {
    degree: "B. Tech in Computer Science and Engineering",
    institution: "Amity University, NOIDA",
    period: "Expected 2026",
    grade: "CGPA: 7.4",
  },
  {
    degree: "CBSE Board",
    institution: "Lovely Public Sr. Sec. School, New Delhi",
    period: "Graduated 2022",
    grade: "Result: 82.4%",
  },
]

export function EducationSection() {
  return (
    <section id="education" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-5xl md:text-6xl mb-6 gradient-text">Education</h2>
          <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic background in computer science and engineering
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {educationData.map((edu, index) => (
            <Card key={index} className="animate-fade-in-up hover-lift glass-card neon-border">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="bg-primary/20 p-4 rounded-lg animate-glow">
                    <GraduationCap className="text-primary" size={28} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="font-heading font-bold text-xl mb-2 text-foreground">{edu.degree}</h3>
                        <p className="font-body text-primary font-semibold">{edu.institution}</p>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar size={16} />
                        <span className="font-body text-sm">{edu.period}</span>
                      </div>
                    </div>
                    <p className="font-body text-muted-foreground">
                      <span className="font-semibold text-accent">{edu.grade}</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
