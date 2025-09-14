import { useState } from "react";
import { ExternalLink, Github, Code, Database, Cloud, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const projects = [
  {
    id: 1,
    title: "Device Management Application",
    description: "Enterprise-grade Power Apps solution for device lifecycle management",
    icon: <Code className="w-8 h-8" />,
    category: "Power Platform",
    technologies: ["Power Apps", "SharePoint Online", "Power Automate", "Canvas Apps"],
    details: {
      scope: "Comprehensive device management system for enterprise clients",
      achievements: [
        "Reduced form processing time by 50%",
        "Streamlined device lifecycle workflows",
        "Integrated with SharePoint for document management",
        "Automated approval processes using Power Automate"
      ],
      integrations: ["SharePoint Online", "Power Automate", "Office 365", "Teams"],
    },
    color: "primary",
  },
  {
    id: 2,
    title: "Enterprise Web API Solutions",
    description: "Scalable .NET Core APIs for enterprise data management",
    icon: <Database className="w-8 h-8" />,
    category: "Backend Development",
    technologies: ["C#", ".NET Core", "SQL Server", "Web API", "Entity Framework"],
    details: {
      scope: "High-performance APIs serving enterprise applications",
      achievements: [
        "Developed efficient, testable code using .NET frameworks",
        "Optimized database performance for high-load scenarios",
        "Implemented comprehensive error handling and logging",
        "Created RESTful APIs following industry standards"
      ],
      integrations: ["SQL Server", "Entity Framework", "Azure", "IIS"],
    },
    color: "accent",
  },
  {
    id: 3,
    title: "Azure Cloud Solutions",
    description: "Cloud infrastructure and automation using Azure services",
    icon: <Cloud className="w-8 h-8" />,
    category: "Cloud Computing",
    technologies: ["Azure Logic Apps", "Azure Functions", "Azure VMs", "Azure Web Apps"],
    details: {
      scope: "Cloud infrastructure optimization and automation solutions",
      achievements: [
        "Achieved 95% customer satisfaction in Azure support",
        "Automated cloud workflows using Logic Apps",
        "Optimized resource utilization and costs",
        "Implemented monitoring and alerting systems"
      ],
      integrations: ["Azure Monitor", "Application Insights", "Azure Active Directory", "Key Vault"],
    },
    color: "primary",
  },
];

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore my portfolio of enterprise solutions and low-code applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`power-tile group fade-in-up stagger-${index + 1} overflow-hidden`}
            >
              {/* Power Apps Header */}
              <div className="power-app-header flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="text-primary-foreground text-lg">
                    {project.icon}
                  </div>
                  <span className="font-semibold text-xs">PROJECT</span>
                </div>
                <div className="power-accent-badge text-xs bg-accent/20 text-accent border-accent/30">
                  {project.category}
                </div>
              </div>

              <div className="power-app-body">
                {/* Project Title */}
                <h3 className="text-lg font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 line-clamp-3 text-sm">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span
                      key={tech}
                      className={idx % 2 === 0 ? "power-badge text-xs" : "power-accent-badge text-xs"}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="power-badge text-xs">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                        onClick={() => setSelectedProject(project)}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg ${
                            project.color === 'primary' ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent'
                          }`}>
                            {project.icon}
                          </div>
                          {project.title}
                        </DialogTitle>
                        <DialogDescription>{project.description}</DialogDescription>
                      </DialogHeader>
                      
                      <div className="space-y-6">
                        {/* Project Scope */}
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Project Scope</h4>
                          <p className="text-muted-foreground">{project.details.scope}</p>
                        </div>

                        {/* Key Achievements */}
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Key Achievements</h4>
                          <ul className="space-y-2">
                            {project.details.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start text-muted-foreground">
                                <Zap className="w-4 h-4 text-accent mt-0.5 mr-2 flex-shrink-0" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Integrations */}
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">System Integrations</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.details.integrations.map((integration) => (
                              <Badge key={integration} variant="outline">
                                {integration}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};