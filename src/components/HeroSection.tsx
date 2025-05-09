
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function HeroSection() {
  const handleDownloadResume = () => {
    // In a real implementation, this would point to an actual PDF file
    // For now, we'll just log a message
    console.log("Resume download triggered");
    alert("Resume download functionality will be connected to an actual PDF file");
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-background to-secondary/30">
      <div className="section-container">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Hello, I'm{" "}
            <span className="text-primary">Tarun Velagala</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
            Welcome to my portfolio website
          </p>
          <Button onClick={handleDownloadResume} className="flex items-center gap-2 bg-primary hover:bg-accent transition-colors">
            <Download className="h-4 w-4" />
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
}
