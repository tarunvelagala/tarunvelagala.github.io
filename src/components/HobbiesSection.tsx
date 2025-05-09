
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface Hobby {
  name: string;
  description: string;
}

const hobbies: Hobby[] = [
  {
    name: "Photography",
    description: "Capturing moments and exploring composition through digital and film photography."
  },
  {
    name: "Hiking",
    description: "Exploring nature and challenging myself with different trails and terrains."
  },
  {
    name: "Reading",
    description: "Enjoying science fiction, technical books, and philosophical literature."
  },
  {
    name: "Cooking",
    description: "Experimenting with diverse cuisines and mastering new techniques."
  },
  {
    name: "Chess",
    description: "Strategic thinking and participating in local tournaments."
  },
  {
    name: "Playing Guitar",
    description: "Learning new songs and occasionally performing at small gatherings."
  }
];

export default function HobbiesSection() {
  return (
    <section id="hobbies" className="bg-muted/30">
      <div className="section-container">
        <h2 className="section-title">Hobbies</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {hobbies.map((hobby, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{hobby.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">{hobby.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
