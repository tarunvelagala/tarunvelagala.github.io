
import { Badge } from "@/components/ui/badge";

interface SkillCategory {
  category: string;
  skills: string[];
}

const skillsData: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "SQL"]
  },
  {
    category: "Frontend Technologies",
    skills: ["React", "HTML5", "CSS3", "Tailwind CSS"]
  },
  {
    category: "Backend Technologies",
    skills: ["Flask", "Spring Boot", "Flutter"]
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "Docker", "GitHub Actions", "VSCode", "Intellij"]
  },
  {
    category: "Testing Tools",
    skills: ["JUnit", "TestNG", "Mockito"]
  },
  {
    category: "Others",
    skills: ["Microservices", "RESTful API", "Agile", "IaC", "CI/CD", "OOP", "Gradle", "ETL"]
  },
  {
    category: "Amazon Web Services (AWS)",
    skills: [ "DynamoDB", "Redshift", "Lambda", "EC2", "S3", "Glue", "CloudFormation", "Cloudwatch", "IAM"]
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-muted/30">
      <div className="section-container">
        <h2 className="section-title">Skills</h2>
        <div className="grid gap-10 md:grid-cols-2">
          {skillsData.map((category, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} className="bg-primary/10 text-primary hover:bg-primary/20">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
