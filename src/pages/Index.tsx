import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { ProfileSection } from "@/components/ProfileSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ContactSection } from "@/components/ContactSection";
import { ScrollToTop } from "@/components/ScrollToTop";
import HexagonHoneycomb from "@/components/HexagonHoneycomb";
import PortfolioWebsite from "@/components/PortfolioWebsite";

const Index = () => {
  const [activeSection, setActiveSection] = useState("profile");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "-20% 0px -20% 0px",
      }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection={activeSection} onNavigate={setActiveSection} />
      <main className="relative">
        <ProfileSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificationsSection />
        <SkillsSection />
        <HexagonHoneycomb />
        <PortfolioWebsite />
        <ContactSection />
        
        {/* Footer */}
        <footer className="bg-gradient-to-b from-secondary/30 to-background border-t border-border py-8">
          <div className="container mx-auto px-6 text-center">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Navdeep Rao. Built with Power Platform expertise and modern web technologies.
            </p>
          </div>
        </footer>
      </main>
      <ScrollToTop />
    </div>
  );
};

export default Index;
