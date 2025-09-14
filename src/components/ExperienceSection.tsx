import { Building2, Calendar, MapPin, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const experiences = [
  {
    id: 1,
    company: "Tata Consultancy Services",
    position: "System Engineer",
    location: "Gurugram",
    duration: "Aug 2024 - Present",
    type: "Full-time",
    responsibilities: [
      "Leveraging Power Platform to create Low Code/No Code solutions",
      "Developing multiple Canvas applications and Power Automate flows",
      "Streamlined process flows reducing form processing time by 50%",
      "Requirement gathering and client collaboration for SharePoint sites",
    ],
    technologies: ["Power Apps", "Power Automate", "SharePoint", "Canvas Apps"],
    color: "primary",
  },
  {
    id: 2,
    company: "Capgemini India Pvt. Ltd",
    position: "Software Engineer",
    location: "Bangalore",
    duration: "Oct 2021 - July 2024",
    type: "Full-time",
    responsibilities: [
      "Developed efficient, testable code using .NET frameworks (ASP.NET, ASP.NET Core)",
      "Maintained SQL Server databases ensuring high performance",
      "Provided Azure technical support with 95% customer satisfaction",
      "Collaborated on comprehensive project documentation across lifecycle",
      "Resolved customer issues in Azure Logic Apps, VMs, and Functions",
    ],
    technologies: ["C#", ".NET Core", "SQL Server", "Azure Logic Apps", "Azure Functions"],
    color: "accent",
  },
];

export const ExperienceSection = () => {
  const [expandedId, setExpandedId] = useState<number | null>(experiences[0].id);

  const toggleExpanded = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Work Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey building enterprise solutions and low-code applications
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden lg:block"></div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`fade-in-up stagger-${index + 1}`}
                >
                  <Card className="power-tile relative lg:ml-20">
                    {/* Timeline Dot */}
                    <div className="absolute -left-12 top-8 w-4 h-4 rounded-full bg-primary border-4 border-background hidden lg:block"></div>

                    <div className="p-8">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <Building2 className="w-5 h-5 text-primary mr-2" />
                            <h3 className="text-2xl font-bold text-foreground">
                              {exp.company}
                            </h3>
                          </div>
                          
                          <h4 className="text-xl font-semibold text-primary mb-2">
                            {exp.position}
                          </h4>
                          
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {exp.duration}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              {exp.location}
                            </div>
                          </div>
                        </div>

                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleExpanded(exp.id)}
                          className="lg:mt-0 mt-4"
                        >
                          {expandedId === exp.id ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </Button>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Expanded Content */}
                      {expandedId === exp.id && (
                        <div className="space-y-3 border-t border-border pt-6">
                          <h5 className="font-semibold text-foreground mb-3">
                            Key Responsibilities:
                          </h5>
                          <ul className="space-y-2">
                            {exp.responsibilities.map((responsibility, idx) => (
                              <li
                                key={idx}
                                className="flex items-start text-muted-foreground"
                              >
                                <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                {responsibility}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};