import { MapPin, Calendar, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile-image.jpg";
import heroBackground from "@/assets/hero-background.jpg";

export const ProfileSection = () => {
  return (
    <section id="profile" className="relative min-h-screen flex items-center pt-16">
      {/* Hero Background */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroBackground}
          alt="Hero Background"
          className="w-full h-full object-cover opacity-20"
          loading="eager"
        />
        <div className="absolute inset-0 hero-gradient opacity-80" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Content */}
          <div className="text-center lg:text-left">
            <div className="inline-block mb-6">
              <img
                src={profileImage}
                alt="Navdeep Rao"
                className="w-48 h-48 rounded-full mx-auto lg:mx-0 border-4 border-white shadow-hero object-cover"
              />
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4 slide-up">
              Navdeep Rao
            </h1>

            <p className="text-2xl text-white/90 mb-6 slide-up stagger-1">
              System Engineer | Solutions Consultant
            </p>

            <p className="text-lg text-white/80 mb-8 max-w-2xl slide-up stagger-2">
              Dynamic Software Engineer adept at leveraging emerging technologies to enhance 
              organizational performance. Expertise in Power Apps, SharePoint, and Power Automate, 
              coupled with proficient SQL data management skills.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start slide-up stagger-3">
              <Button
                size="lg"
                className="bg-white/20 text-white border border-white/30 hover:bg-white/30 backdrop-blur-sm hover:scale-105 transition-all"
                onClick={() => window.open('#', '_blank')}
              >
                Download Resume
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white hover:text-primary hover:scale-105 transition-all"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 slide-up stagger-4">
            <div className="power-tile overflow-hidden">
              <div className="power-app-header flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-primary-foreground" />
                <span className="text-xs font-semibold">EXPERIENCE</span>
              </div>
              <div className="power-app-body text-center">
                <p className="text-3xl font-bold text-primary mb-1">3+ Years</p>
                <p className="text-sm text-muted-foreground">Software Development</p>
              </div>
            </div>

            <div className="power-tile overflow-hidden">
              <div className="power-app-header flex items-center space-x-3">
                <Award className="w-5 h-5 text-primary-foreground" />
                <span className="text-xs font-semibold">CERTIFICATIONS</span>
              </div>
              <div className="power-app-body text-center">
                <p className="text-3xl font-bold text-primary mb-1">Microsoft</p>
                <p className="text-sm text-muted-foreground">Azure Fundamentals</p>
              </div>
            </div>

            <div className="power-tile overflow-hidden">
              <div className="power-app-header flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary-foreground" />
                <span className="text-xs font-semibold">LOCATION</span>
              </div>
              <div className="power-app-body text-center">
                <p className="text-3xl font-bold text-primary mb-1">Gurugram</p>
                <p className="text-sm text-muted-foreground">Haryana, India</p>
              </div>
            </div>

            <div className="power-tile overflow-hidden">
              <div className="power-app-header flex items-center space-x-3">
                <span className="text-xl">🚀</span>
                <span className="text-xs font-semibold">SPECIALIZATION</span>
              </div>
              <div className="power-app-body text-center">
                <p className="text-3xl font-bold text-primary mb-1">Power Platform</p>
                <p className="text-sm text-muted-foreground">Low Code Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse-slow"></div>
        </div>
      </div>
    </section>
  );
};