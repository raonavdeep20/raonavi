import { Code, Cloud, Database, Wrench, Users, Target } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const skillCategories = [
  {
    title: "Power Platform & Low-Code",
    icon: <Code className="w-6 h-6" />,
    color: "primary",
    skills: [
      { name: "Power Apps", level: 90, experience: "3+ years" },
      { name: "Power Automate", level: 85, experience: "3+ years" },
      { name: "SharePoint", level: 80, experience: "3+ years" },
      { name: "Canvas Apps", level: 85, experience: "2+ years" },
    ]
  },
  {
    title: "Backend Development",
    icon: <Database className="w-6 h-6" />,
    color: "accent",
    skills: [
      { name: "C#", level: 85, experience: "3+ years" },
      { name: ".NET Core", level: 80, experience: "3+ years" },
      { name: "Web API", level: 80, experience: "2+ years" },
      { name: "SQL Server", level: 75, experience: "3+ years" },
    ]
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="w-6 h-6" />,
    color: "primary",
    skills: [
      { name: "Microsoft Azure", level: 75, experience: "2+ years" },
      { name: "Azure Functions", level: 70, experience: "2+ years" },
      { name: "Azure Logic Apps", level: 80, experience: "2+ years" },
      { name: "Azure VMs", level: 70, experience: "2+ years" },
    ]
  },
  {
    title: "Tools & Technologies",
    icon: <Wrench className="w-6 h-6" />,
    color: "accent",
    skills: [
      { name: "Git/GitHub", level: 80, experience: "3+ years" },
      { name: "HTML/CSS", level: 75, experience: "3+ years" },
      { name: "MySQL", level: 70, experience: "2+ years" },
      { name: "Entity Framework", level: 75, experience: "2+ years" },
    ]
  }
];

const softSkills = [
  {
    name: "Problem Solving",
    icon: <Target className="w-5 h-5" />,
    description: "Analytical approach to complex technical challenges"
  },
  {
    name: "Team Collaboration",
    icon: <Users className="w-5 h-5" />,
    description: "Experience working with interdisciplinary teams"
  },
  {
    name: "Client Communication",
    icon: <Users className="w-5 h-5" />,
    description: "Requirement gathering and stakeholder management"
  },
  {
    name: "Documentation",
    icon: <Code className="w-5 h-5" />,
    description: "Comprehensive project documentation across lifecycle"
  }
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technical proficiencies and professional competencies developed through hands-on experience
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Technical Skills */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              Technical Skills
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {skillCategories.map((category, categoryIndex) => (
                <div
                  key={category.title}
                  className={`power-tile fade-in-up stagger-${categoryIndex + 1} overflow-hidden`}
                >
                  {/* Power Apps Header */}
                  <div className="power-app-header flex items-center justify-center space-x-3">
                    <div className="text-primary-foreground">
                      {category.icon}
                    </div>
                    <span className="font-semibold text-xs">SKILLS</span>
                  </div>

                  <div className="power-app-body">
                    {/* Category Title */}
                    <div className="text-center mb-6">
                      <h4 className="text-lg font-bold text-primary">
                        {category.title}
                      </h4>
                    </div>

                    {/* Skills List */}
                    <div className="space-y-6">
                      {category.skills.map((skill, idx) => (
                        <div key={skill.name}>
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium text-foreground text-sm">
                              {skill.name}
                            </span>
                            <span className={idx % 2 === 0 ? "power-badge text-xs" : "power-accent-badge text-xs"}>
                              {skill.experience}
                            </span>
                          </div>
                          <div className="space-y-1">
                            <div className="w-full bg-secondary/50 rounded-full h-2 border border-primary/20">
                              <div
                                className="bg-gradient-to-r from-primary to-accent rounded-full h-2 transition-all duration-1000 relative overflow-hidden"
                                style={{ width: `${skill.level}%` }}
                              >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20"></div>
                              </div>
                            </div>
                            <div className="text-right">
                              <span className="text-xs text-muted-foreground">
                                {skill.level}% proficiency
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              Professional Competencies
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {softSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`power-tile text-center hover:scale-105 fade-in-up stagger-${index + 1} overflow-hidden`}
                >
                  {/* Power Apps Header */}
                  <div className="power-app-header flex items-center justify-center space-x-2">
                    <div className="text-primary-foreground">
                      {skill.icon}
                    </div>
                    <span className="font-semibold text-xs">COMPETENCY</span>
                  </div>

                  <div className="power-app-body text-center">
                    <h4 className="font-bold text-primary mb-2">
                      {skill.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {skill.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievement Highlights */}
          <div className="mt-16">
            <div className="power-tile overflow-hidden fade-in-up">
              <div className="power-app-header flex items-center justify-center space-x-3">
                <Target className="w-6 h-6 text-primary-foreground" />
                <span className="font-semibold text-xs">KEY ACHIEVEMENTS</span>
              </div>
              <div className="power-app-body">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">50%</div>
                    <p className="text-foreground text-sm leading-relaxed">
                      Reduction in form processing time through Power Automate
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent mb-2">95%</div>
                    <p className="text-foreground text-sm leading-relaxed">
                      Customer satisfaction ratio in Azure support
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">3+</div>
                    <p className="text-foreground text-sm leading-relaxed">
                      Years of enterprise software development
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};