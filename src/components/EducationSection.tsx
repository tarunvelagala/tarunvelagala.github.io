
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

const educationData: Education[] = [
  {
    degree: "Master of Computer Science",
    institution: "University of Technology",
    period: "2016 - 2018",
    description: "Focused on artificial intelligence and machine learning, graduated with honors."
  },
  {
    degree: "Bachelor of Engineering",
    institution: "National Engineering College",
    period: "2012 - 2016",
    description: "Majored in Computer Science with a minor in Mathematics."
  },
  {
    degree: "High School Diploma",
    institution: "City High School",
    period: "2010 - 2012",
    description: "Science and Mathematics track, graduated top of class."
  }
];

export default function EducationSection() {
  return (
    <section id="education" className="bg-muted/30">
      <div className="section-container">
        <h2 className="section-title">Education</h2>
        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{edu.degree}</CardTitle>
                <CardDescription>{edu.institution} | {edu.period}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{edu.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
