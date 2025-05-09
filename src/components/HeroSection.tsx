
import { Button } from "@/components/ui/button";
import { Code, Download, Github, Linkedin, Twitter } from "lucide-react";

export default function HeroSection() {
  const handleDownloadResume = () => {
    // In a real implementation, this would point to an actual PDF file
    // For now, we'll just log a message
    console.log("Resume download triggered");
    alert("Resume download functionality will be connected to an actual PDF file");
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 bg-muted/30">
      <div className="section-container">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Hello, I'm{" "}
            <span className="text-palette-green">Tarun Velagala</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
            Application Engineer 2 @ Amazon | Java Backend | ETL | AWS 
          </p>
          <p className="text-l md:text-xl mb-8 text-muted-foreground">
            Passionate Programmer | Interactive Team Player 
          </p>
          {/* Button + Icons Group */}
          <div className="flex items-center gap-4 flex-row flex-col sm:flex-row">
            <Button
              onClick={handleDownloadResume}
              className="flex items-center gap-2 bg-palette-green hover:bg-palette-green/90 transition-colors"
            >
            <Download className="h-8 w-8" />
              Download Resume
            </Button>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/tarunvelagala"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-foreground hover:text-palette-green transition-colors"
              >
                <Github className="h-8 w-8" />
              </a>
              <a
                href="https://www.linkedin.com/in/tarunvelagala"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-foreground hover:text-palette-green transition-colors"
              >
                <Linkedin className="h-8 w-8" />
              </a>
              <a
                href="https://twitter.com/tarun__675/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-foreground hover:text-palette-green transition-colors"
              >
                <Twitter className="h-8 w-8" />
              </a>
              <a
                href="https://leetcode.com/u/tarunvelagala80/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Leetcode"
                className="text-foreground hover:text-palette-green transition-colors"
              >
                <Code className="h-8 w-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
