
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import HobbiesSection from "@/components/HobbiesSection";
import FloatingScrollIcon from "@/components/FloatingScrollIcon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
        <HobbiesSection />
      </main>
      <FloatingScrollIcon />
      {/* <Footer /> */}
    </div>
  );
};

export default Index;
