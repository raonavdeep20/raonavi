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
                  <div className="power-tile relative lg:ml-20 overflow-hidden">
                    {/* Timeline Dot */}
                    <div className="absolute -left-12 top-8 w-4 h-4 rounded-full bg-primary border-4 border-background hidden lg:block shadow-lg"></div>

                    {/* Power Apps Header */}
                    <div className="power-app-header flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Building2 className="w-5 h-5" />
                        <span className="font-semibold text-sm">WORK EXPERIENCE</span>
                      </div>
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                    </div>

                    <div className="power-app-body">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-primary mb-2">
                            {exp.company}
                          </h3>
                          
                          <h4 className="text-lg font-semibold text-foreground mb-3">
                            {exp.position}
                          </h4>
                          
                          <div className="flex flex-wrap gap-3 mb-4">
                            <div className="flex items-center power-badge">
                              <Calendar className="w-3 h-3 mr-1" />
                              {exp.duration}
                            </div>
                            <div className="flex items-center power-badge">
                              <MapPin className="w-3 h-3 mr-1" />
                              {exp.location}
                            </div>
                            <div className="power-accent-badge">
                              {exp.type}
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
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={tech}
                            className={idx % 2 === 0 ? "power-badge" : "power-accent-badge"}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Expanded Content */}
                      {expandedId === exp.id && (
                        <div className="space-y-3 border-t border-primary/20 pt-6 mt-6">
                          <div className="flex items-center mb-3">
                            <div className="w-3 h-3 bg-accent rounded-full mr-2"></div>
                            <h5 className="font-semibold text-primary">
                              Key Responsibilities
                            </h5>
                          </div>
                          <ul className="space-y-3">
                            {exp.responsibilities.map((responsibility, idx) => (
                              <li
                                key={idx}
                                className="flex items-start text-muted-foreground pl-4 relative"
                              >
                                <div className="absolute left-0 top-2 w-1.5 h-1.5 bg-primary rounded-full"></div>
                                {responsibility}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
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