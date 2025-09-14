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
    logo: "🟦", // Microsoft Azure logo placeholder
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
                <Card
                  key={cert.id}
                  className={`power-tile group fade-in-up stagger-${index + 1} hover:scale-[1.02]`}
                >
                  <div className="p-8">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-3xl">
                          {cert.logo}
                        </div>
                        <div>
                          <Badge variant="secondary" className="mb-2">
                            {cert.category}
                          </Badge>
                          <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {cert.title}
                          </h4>
                        </div>
                      </div>
                      <Badge 
                        variant={cert.status === 'Active' ? 'default' : 'secondary'}
                        className="bg-green-100 text-green-800"
                      >
                        {cert.status}
                      </Badge>
                    </div>

                    {/* Issuer Information */}
                    <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Building className="w-4 h-4 mr-1" />
                        {cert.issuer}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {cert.issueDate}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6">
                      {cert.description}
                    </p>

                    {/* Skills Covered */}
                    <div className="mb-6">
                      <h5 className="font-semibold text-foreground mb-3">Skills Covered:</h5>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full font-medium"
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
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    >
                      <Award className="w-4 h-4 mr-2" />
                      View Certificate
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </Card>
              ))}

              {/* Future Certifications Placeholder */}
              <Card className="power-tile border-dashed border-2 fade-in-up stagger-2">
                <div className="p-8 text-center">
                  <div className="w-16 h-16 bg-muted/50 rounded-xl flex items-center justify-center text-3xl mx-auto mb-4">
                    🎯
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-2">
                    More Certifications Coming Soon
                  </h4>
                  <p className="text-muted-foreground mb-4">
                    Currently pursuing additional Microsoft Azure and Power Platform certifications
                  </p>
                  <Badge variant="outline">In Progress</Badge>
                </div>
              </Card>
            </div>
          </div>

          {/* Professional Expertise Areas */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              Professional Expertise
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {additionalSkillAreas.map((area, index) => (
                <Card
                  key={area.area}
                  className={`power-tile text-center fade-in-up stagger-${index + 3}`}
                >
                  <div className="p-6">
                    <div className="text-4xl mb-4">{area.icon}</div>
                    <h4 className="text-lg font-bold text-foreground mb-3">
                      {area.area}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {area.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};