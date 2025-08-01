
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
}

const experiences: Experience[] = [
  {
    title: "Consultant",
    company: "Capgemini",
    period: "Jun 2025 - Present",
    description: []
  },
  {
    title: "Software Application Engineer II",
    company: "Amazon",
    period: "Oct 2023 - Feb 2025",
    description: [
      "Built disaster recovery for a data transformation engine, reducing ops overhead by 20% and simplifying ETL onboarding.",
      "Led Redshift subnet migration (2.6 PB) using AWS/Python with 100% availability across 4 services.",
      "Streamlined onboarding for a data-sharing platform, purging 50 TB and integrating 5 key services.",
      "Migrated a balance tracking service to Java microservices on ECS/RDS, enabling 3 RPS corrections and TestNG-based integration tests."
    ]
  },
  {
    title: "Software Application Engineer I",
    company: "Amazon",
    period: "Apr 2022 - Sep 2023",
    description: [
      "Architected and deployed high-availability RESTful APIs for a Seller Payments Tracking Service (100K daily visits, 15 RPS), improving query performance by 30%.",
      "Mentored interns and improved seller satisfaction through optimized tracking systems.",
      "Led dataset migration to an upgraded data warehouse, boosting analytics capabilities by 25%.",
      "Built monitoring and integration testing with TypeScript, CloudWatch, and TestNG, streamlining debugging and CI/CD deployment.",
      "Detected and resolved $5M in seller balance discrepancies via automated ticketing and reporting with Athena and S3."
    ]
  },
  {
    title: "Support Engineer II",
    company: "Amazon",
    period: "Aug 2020 - Mar 2022",
    description: [
      "Developed Java-based REST APIs for a vendor portal using ORM, AWS API Gateway, and Lambda, improving response times by 15%.",
      "Integrated a traffic-shaping tool to filter bad traffic, reducing server costs by 20%.",
      "Optimized Java services using AWS profiling tools, boosting system performance by 10%."
    ]
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="bg-muted/30">
      <div className="section-container">
        <h2 className="section-title">Work Experience</h2>
        <div className="grid gap-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-l-4 border-l-primary hover:shadow-md transition-shadow">
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
