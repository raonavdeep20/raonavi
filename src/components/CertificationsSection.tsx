import { Award, ExternalLink, Calendar, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const certifications = [
  {
    id: 1,
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    issueDate: "2024",
    credentialId: "AZ-900",
    verificationUrl: "#",
    logo: " ", // Microsoft Azure logo placeholder
    description: "Proven knowledge of Cloud Concepts, Azure services, Azure workloads, security and privacy in Azure, Azure pricing and support, as well as general technology concepts.",
    skills: [
      "Cloud Concepts",
      "Azure Services",
      "Azure Workloads",
      "Security & Privacy",
      "Azure Pricing",
      "Support Services"
    ],
    category: "Cloud Computing",
    status: "Active",
  }
];

const additionalSkillAreas = [
  {
    area: "Power Platform",
    description: "Extensive hands-on experience with Power Apps, Power Automate, and SharePoint",
    icon: "⚡",
  },
  {
    area: ".NET Development",
    description: "Professional experience with C#, .NET Core, and Web API development",
    icon: "💻",
  },
  {
    area: "Database Management",
    description: "SQL Server optimization and database design expertise",
    icon: "🗄️",
  },
];

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Certifications & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and recognized expertise in enterprise technologies
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Certifications */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              Professional Certifications
            </h3>
            
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
              {certifications.map((cert, index) => (
                <div
                  key={cert.id}
                  className={`power-tile group fade-in-up stagger-${index + 1} hover:scale-[1.02] overflow-hidden`}
                >
                  {/* Power Apps Header */}
                  <div className="power-app-header flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Award className="w-4 h-4" />
                      <span className="font-semibold text-xs">CERTIFICATION</span>
                    </div>
                    <Badge 
                      variant={cert.status === 'Active' ? 'default' : 'secondary'}
                      className="bg-accent/20 text-accent border-accent/30 text-xs"
                    >
                      {cert.status}
                    </Badge>
                  </div>

                  <div className="power-app-body">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
                          {cert.logo}
                        </div>
                        <div>
                          <div className="power-badge mb-2">
                            {cert.category}
                          </div>
                          <h4 className="text-lg font-bold text-primary group-hover:text-accent transition-colors">
                            {cert.title}
                          </h4>
                        </div>
                      </div>
                    </div>

                    {/* Issuer Information */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex items-center power-badge">
                        <Building className="w-3 h-3 mr-1" />
                        {cert.issuer}
                      </div>
                      <div className="flex items-center power-accent-badge">
                        <Calendar className="w-3 h-3 mr-1" />
                        {cert.issueDate}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6">
                      {cert.description}
                    </p>

                    {/* Skills Covered */}
                    <div className="mb-6">
                      <div className="flex items-center mb-3">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                        <h5 className="font-semibold text-primary text-sm">Skills Covered</h5>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, idx) => (
                          <span
                            key={skill}
                            className={idx % 2 === 0 ? "power-badge text-xs" : "power-accent-badge text-xs"}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <Award className="w-4 h-4 mr-2" />
                      View Certificate
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              ))}

              {/* Future Certifications Placeholder */}
              <div className="power-tile border-dashed border-2 border-primary/30 fade-in-up stagger-2 overflow-hidden">
                <div className="power-app-header">
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-semibold">UPCOMING</span>
                  </div>
                </div>
                <div className="power-app-body text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center text-3xl mx-auto mb-4 border border-primary/20">
                    🎯
                  </div>
                  <h4 className="text-lg font-bold text-primary mb-2">
                    More Certifications Coming Soon
                  </h4>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Currently pursuing additional Microsoft Azure and Power Platform certifications
                  </p>
                  <div className="power-accent-badge">In Progress</div>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Expertise Areas */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              Professional Expertise
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {additionalSkillAreas.map((area, index) => (
                <div
                  key={area.area}
                  className={`power-tile text-center fade-in-up stagger-${index + 3} overflow-hidden`}
                >
                  <div className="power-app-header">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-2xl">{area.icon}</span>
                      <span className="text-xs font-semibold">EXPERTISE</span>
                    </div>
                  </div>
                  <div className="power-app-body text-center">
                    <h4 className="text-lg font-bold text-primary mb-3">
                      {area.area}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {area.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
