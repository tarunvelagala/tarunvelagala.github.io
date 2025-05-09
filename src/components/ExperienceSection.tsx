
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
}

const experiences: Experience[] = [
  {
    title: "Software Engineer",
    company: "Tech Company Inc.",
    period: "2020 - Present",
    description: [
      "Led development of key features for company's flagship product",
      "Collaborated with cross-functional teams to deliver high-quality software solutions",
      "Implemented CI/CD pipeline that reduced deployment time by 30%"
    ]
  },
  {
    title: "Junior Developer",
    company: "Digital Solutions LLC",
    period: "2018 - 2020",
    description: [
      "Developed and maintained client-facing web applications",
      "Participated in Agile development processes",
      "Contributed to internal tools that improved team productivity"
    ]
  },
  {
    title: "Intern",
    company: "Web Innovations",
    period: "Summer 2017",
    description: [
      "Assisted senior developers in building responsive websites",
      "Learned modern web development frameworks and practices",
      "Participated in code reviews and team meetings"
    ]
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="bg-muted/30">
      <div className="section-container">
        <h2 className="section-title">Work Experience</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle>{exp.title}</CardTitle>
                <CardDescription>{exp.company} | {exp.period}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="text-sm">{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
