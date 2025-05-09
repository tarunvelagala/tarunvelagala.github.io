
import { Badge } from "@/components/ui/badge";

interface SkillCategory {
  category: string;
  skills: string[];
}

const skillsData: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C++"]
  },
  {
    category: "Frontend Technologies",
    skills: ["React", "Angular", "Vue.js", "HTML5", "CSS3", "Tailwind CSS"]
  },
  {
    category: "Backend Technologies",
    skills: ["Node.js", "Express", "Django", "Spring Boot", "GraphQL"]
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "Docker", "Kubernetes", "AWS", "GitHub Actions", "Jenkins"]
  }
];

export default function SkillsSection() {
  return (
    <section id="skills">
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
