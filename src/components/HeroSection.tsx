import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Code, Eye, Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const handleDownloadResume = () => {
    window.open('/Tarun_Kumar_Reddy_Velagala_-_Software_Application_Engineer.pdf', '_blank');
  };
  const text = "Tarun Velagala";
  const [revealed, setRevealed] = useState(0);

  const chars = text.split("");
  const realChars = chars.filter((c) => c !== " ");

  useEffect(() => {
    if (revealed < realChars.length) {
      const timeout = setTimeout(() => setRevealed(revealed + 1), 300);
      return () => clearTimeout(timeout);
    }
  }, [revealed, realChars.length]);

  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 bg-muted/30">
      <div className="section-container">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Hello, I'm{" "}
            {chars.map((char, i) => {
              if (char === " ") return <span key={i}>&nbsp;</span>;

              const index = chars.slice(0, i + 1).filter((c) => c !== " ").length - 1;
              const show = index < revealed;

              return (
                <motion.span
                  key={i}
                  initial={{ y: 10 }}
                  animate={{ y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  className={`${show ? "font-sans text-palette-green" : "font-wakanda text-palette-green"} transition-all duration-300`}
                >
                  {char}
                </motion.span>
              );
            })}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
            Application Engineer 2 @ Amazon | Java Backend | ETL | AWS 
          </p>
          {/* Button + Icons Group */}
          <div className="flex items-center gap-4">
            <Button
              onClick={handleDownloadResume}
              className="flex items-center gap-2 bg-palette-green hover:bg-palette-green/90 transition-colors"
            >
            <Eye className="h-8 w-8" />
              Preview Resume
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
