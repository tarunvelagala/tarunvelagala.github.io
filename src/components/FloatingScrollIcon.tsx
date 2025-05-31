
import { useState, useEffect } from "react";
import { ChevronDown, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const sections = ['hero', 'experience', 'skills', 'education', 'hobbies'];

export default function FloatingScrollIcon() {
  const [currentSection, setCurrentSection] = useState(0);

  const scrollToSection = () => {
    const isLastSection = currentSection === sections.length - 1;
    
    if (isLastSection) {
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setCurrentSection(0);
    } else {
      // Scroll to next section
      const nextSection = (currentSection + 1) % sections.length;
      const element = document.getElementById(sections[nextSection]);
      
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setCurrentSection(nextSection);
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      sections.forEach((sectionId, index) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;
          
          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            setCurrentSection(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isLastSection = currentSection === sections.length - 1;

  return (
    <Button
      onClick={scrollToSection}
      className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-primary hover:bg-primary/90 shadow-lg transition-all duration-300 hover:scale-110"
      size="icon"
    >
      {isLastSection ? (
        <ArrowUp className="h-6 w-6 text-white animate-bounce" />
      ) : (
        <ChevronDown className="h-6 w-6 text-white animate-bounce" />
      )}
    </Button>
  );
}
