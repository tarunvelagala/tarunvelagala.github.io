
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
    name: "Music",
    description: "Listening to soothing music according to the vibe."
  },
  {
    name: "Tech Enthusiast",
    description: "Obsessed with trying out newer technologies and hacks."
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
