
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface Education {
  degree: string;
  institution: string;
  location: string,
  percentage: string,
  period: string;
  description: string;
}

const educationData: Education[] = [
  {
    degree: "Bachelor of Technology - Computer Science",
    institution: "Sathyabama Institute of Science and Technology",
    location: "Chennai, India",
    percentage: "85.9",
    period: "2016 - 2020",
    description: "Focused on Mobile, Web app development using Flutter, Python, OOP, Data Structures, Algorithms"
  },
  {
    degree: "Higher Secondary",
    institution: "Narayana Junior College",
    location: "Vijayawada, India",
    percentage: "97.6",
    period: "2014 - 2016",
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
                <CardDescription>{edu.institution} | {edu.location} | {edu.period} | <text>Percentage: <b>{edu.percentage}</b></text></CardDescription>
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
