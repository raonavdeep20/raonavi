import { MapPin, Calendar, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile-image.jpg";
import heroBackground from "@/assets/hero-background.jpg";

export const ProfileSection = () => {
  return (
    <section id="profile" className="relative min-h-screen flex items-center">
      {/* Hero Background */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroBackground}
          alt="Hero Background"
          className="w-full h-full object-cover opacity-20"
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
                className="bg-white/20 text-white border border-white/30 hover:bg-white/30 backdrop-blur-sm"
              >
                Download Resume
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white hover:text-primary"
              >
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 slide-up stagger-4">
            <div className="power-tile bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <div className="flex items-center mb-3">
                <Calendar className="w-6 h-6 text-accent mr-3" />
                <span className="text-sm font-medium text-white/80">Experience</span>
              </div>
              <p className="text-2xl font-bold">3+ Years</p>
              <p className="text-sm text-white/70">Software Development</p>
            </div>

            <div className="power-tile bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <div className="flex items-center mb-3">
                <Award className="w-6 h-6 text-accent mr-3" />
                <span className="text-sm font-medium text-white/80">Certifications</span>
              </div>
              <p className="text-2xl font-bold">Microsoft</p>
              <p className="text-sm text-white/70">Azure Fundamentals</p>
            </div>

            <div className="power-tile bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <div className="flex items-center mb-3">
                <MapPin className="w-6 h-6 text-accent mr-3" />
                <span className="text-sm font-medium text-white/80">Location</span>
              </div>
              <p className="text-2xl font-bold">Gurugram</p>
              <p className="text-sm text-white/70">Haryana, India</p>
            </div>

            <div className="power-tile bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-3">🚀</span>
                <span className="text-sm font-medium text-white/80">Specialization</span>
              </div>
              <p className="text-2xl font-bold">Power Platform</p>
              <p className="text-sm text-white/70">Low Code Solutions</p>
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