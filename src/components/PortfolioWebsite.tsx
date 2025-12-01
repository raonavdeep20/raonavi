import { useState, useEffect } from 'react';
import { Code, Zap, Database, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const PortfolioWebsite = () => {
  const [activeSkill, setActiveSkill] = useState('powerplatform');
  const [activeFilter, setActiveFilter] = useState('all');
  const [testimonial, setTestimonial] = useState(0);
  const [selectedWork, setSelectedWork] = useState<any>(null);
  const [selectedService, setSelectedService] = useState<any>(null);

  const skills = {
    powerplatform: [
      { name: 'Power Apps', percentage: 95 },
      { name: 'Power Automate', percentage: 90 },
      { name: 'SharePoint', percentage: 85 },
      { name: 'Power BI', percentage: 80 }
    ],
    development: [
      { name: 'React', percentage: 85 },
      { name: 'TypeScript', percentage: 80 },
      { name: 'JavaScript', percentage: 90 },
      { name: 'HTML/CSS', percentage: 95 }
    ],
    database: [
      { name: 'SQL Server', percentage: 85 },
      { name: 'MySQL', percentage: 80 },
      { name: 'Azure SQL', percentage: 75 },
      { name: 'Dataverse', percentage: 90 }
    ]
  };

  const works = [
    { id: 1, cat: 'powerapp', img: 'https://i.postimg.cc/43Th5VXJ/work-1.png', title: 'Enterprise Portal', description: 'Comprehensive enterprise portal solution with advanced data management and workflow automation.' },
    { id: 2, cat: 'web', img: 'https://i.postimg.cc/sXLjnC5p/work-2.png', title: 'Workflow Automation', description: 'Streamlined business processes using Power Automate and cloud services.' },
    { id: 3, cat: 'dashboard', img: 'https://i.postimg.cc/QNB1jXYZ/work-3.png', title: 'Analytics Dashboard', description: 'Real-time business intelligence dashboard with Power BI integration.' },
    { id: 4, cat: 'powerapp', img: 'https://i.postimg.cc/s2DGqyG8/work-4.png', title: 'Mobile App Solution', description: 'Cross-platform mobile application built with Power Apps Canvas.' },
    { id: 5, cat: 'web', img: 'https://i.postimg.cc/TYVyPhrF/work-5.png', title: 'Data Management', description: 'Enterprise data management system with robust security features.' },
    { id: 6, cat: 'dashboard', img: 'https://i.postimg.cc/wMdqKcbv/work-6.png', title: 'Business Intelligence', description: 'Advanced BI solution providing actionable insights from data.' }
  ];

  const testimonials = [
    {
      description: 'Navdeep delivered exceptional Power Platform solutions that transformed our business processes. His expertise in Power Apps and SharePoint integration exceeded our expectations.',
      date: 'March 30, 2025',
      name: 'Rajesh Kumar',
      role: 'IT Manager',
      img: 'https://i.postimg.cc/MTr9j4Yn/client1.jpg'
    },
    {
      description: 'Outstanding work on our enterprise automation project. Navdeep\'s deep knowledge of Power Automate and Azure services made our digital transformation seamless.',
      date: 'January 18, 2025',
      name: 'Priya Sharma',
      role: 'Project Director',
      img: 'https://i.postimg.cc/wvV7f8rB/client2.jpg'
    },
    {
      description: 'Working with Navdeep was a game-changer for our organization. His Power BI dashboards and data insights helped us make better business decisions.',
      date: 'November 29, 2024',
      name: 'Amit Patel',
      role: 'Business Analyst',
      img: 'https://i.postimg.cc/pdP9DL0S/client3.jpg'
    }
  ];

  const services = [
    {
      icon: <Code className="w-10 h-10" />,
      title: 'Power Apps Development',
      items: ['Canvas Apps', 'Model-Driven Apps', 'Power Pages', 'Custom Connectors', 'SharePoint Integration']
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: 'Process Automation',
      items: ['Power Automate Flows', 'Workflow Design', 'API Integration', 'Data Transformation', 'Business Logic']
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: 'Data & Analytics',
      items: ['Power BI Dashboards', 'SQL Optimization', 'Data Modeling', 'Azure Integration', 'Dataverse Solutions']
    }
  ];

  const skillCategories = [
    { id: 'powerplatform', icon: <Zap className="w-6 h-6" />, title: 'Power Platform Expert' },
    { id: 'development', icon: <Code className="w-6 h-6" />, title: 'Full Stack Developer' },
    { id: 'database', icon: <Database className="w-6 h-6" />, title: 'Database Specialist' }
  ];

  const filtered = activeFilter === 'all' ? works : works.filter(w => w.cat === activeFilter);

  useEffect(() => {
    const timer = setInterval(() => setTestimonial(p => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => setTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="bg-gradient-to-b from-background via-secondary/30 to-background">
      {/* Technical Expertise Section */}
      <section id="portfolio-skills" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{
              background: 'var(--gradient-hero)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Technical Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive skill set across Power Platform and modern development
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Skill Categories */}
            <div className="space-y-4">
              {skillCategories.map((category, index) => (
                <div
                  key={category.id}
                  className={`power-tile fade-in-up stagger-${index + 1} overflow-hidden cursor-pointer transition-all ${
                    activeSkill === category.id ? 'border-primary shadow-elevated scale-[1.02]' : ''
                  }`}
                  onClick={() => setActiveSkill(category.id)}
                >
                  <div className={`power-app-header flex items-center space-x-3 ${activeSkill === category.id ? '' : 'bg-secondary'}`}>
                    <div className={activeSkill === category.id ? 'text-primary-foreground' : 'text-primary'}>
                      {category.icon}
                    </div>
                    <div>
                      <h3 className={`font-bold ${activeSkill === category.id ? 'text-primary-foreground' : 'text-foreground'}`}>
                        {category.title}
                      </h3>
                      <span className={`text-sm ${activeSkill === category.id ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                        3+ years experience
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Skills List */}
            <div className="space-y-6">
              {skills[activeSkill as keyof typeof skills]?.map((skill, index) => (
                <div key={index} className="fade-in-up">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-foreground">{skill.name}</span>
                    <span className="power-badge text-xs">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-secondary/50 rounded-full h-3 border border-primary/20">
                    <div
                      className="bg-gradient-to-r from-primary to-accent rounded-full h-3 transition-all duration-1000"
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="portfolio-work" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{
              background: 'var(--gradient-hero)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore my portfolio of enterprise solutions
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'powerapp', label: 'Power Apps' },
              { id: 'web', label: 'Web Solutions' },
              { id: 'dashboard', label: 'Dashboards' }
            ].map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? 'default' : 'outline'}
                className={activeFilter === filter.id ? 'bg-primary text-primary-foreground' : 'bg-card text-foreground hover:bg-secondary'}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {filtered.map((work, index) => (
              <div key={work.id} className={`power-tile group fade-in-up stagger-${index + 1} overflow-hidden`}>
                <img src={work.img} alt={work.title} className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300" />
                <h3 className="text-lg font-bold text-primary mb-2">{work.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{work.description}</p>
                <Dialog open={selectedWork?.id === work.id} onOpenChange={(open) => !open && setSelectedWork(null)}>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground"
                      onClick={() => setSelectedWork(work)}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>{work.title}</DialogTitle>
                      <DialogDescription>{work.description}</DialogDescription>
                    </DialogHeader>
                    <img src={work.img} alt={work.title} className="w-full rounded-lg" />
                    <p className="text-muted-foreground">
                      Comprehensive solution built with modern Power Platform technologies, delivering enterprise-grade functionality with seamless user experience and robust data management.
                    </p>
                  </DialogContent>
                </Dialog>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Services Section */}
      <section id="portfolio-services" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{
              background: 'var(--gradient-hero)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Professional Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className={`power-tile text-center fade-in-up stagger-${index + 1} overflow-hidden`}>
                <div className="power-app-header flex items-center justify-center space-x-3">
                  <div className="text-primary-foreground">{service.icon}</div>
                  <span className="font-semibold text-xs">SERVICE</span>
                </div>
                <div className="power-app-body">
                  <h3 className="text-lg font-bold text-primary mb-4">{service.title}</h3>
                  <Dialog open={selectedService?.title === service.title} onOpenChange={(open) => !open && setSelectedService(null)}>
                    <DialogTrigger asChild>
                      <Button
                        className="bg-primary text-primary-foreground hover:bg-primary/90"
                        onClick={() => setSelectedService(service)}
                      >
                        Learn More
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle className="flex items-center gap-3">
                          <div className="text-primary">{service.icon}</div>
                          {service.title}
                        </DialogTitle>
                        <DialogDescription>
                          Delivering high-quality enterprise solutions with expertise and dedication
                        </DialogDescription>
                      </DialogHeader>
                      <ul className="space-y-2">
                        {service.items.map((item, idx) => (
                          <li key={idx} className="flex items-center text-foreground">
                            <span className="text-accent mr-2">✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section id="portfolio-testimonials" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{
              background: 'var(--gradient-hero)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Client Testimonials
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              What clients say about working with me
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="power-tile relative">
              <div className="power-app-header flex items-center justify-between">
                <span className="font-semibold text-xs">TESTIMONIAL</span>
                <Badge className="bg-accent/20 text-accent border-accent/30">
                  {testimonial + 1} / {testimonials.length}
                </Badge>
              </div>
              <div className="power-app-body">
                <p className="text-lg text-foreground mb-6 leading-relaxed">
                  "{testimonials[testimonial].description}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[testimonial].img}
                    alt={testimonials[testimonial].name}
                    className="w-16 h-16 rounded-full border-2 border-primary/30"
                  />
                  <div>
                    <h4 className="font-bold text-primary">{testimonials[testimonial].name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonials[testimonial].role}</p>
                    <p className="text-xs text-muted-foreground mt-1">{testimonials[testimonial].date}</p>
                  </div>
                </div>
              </div>
              
              {/* Navigation Buttons */}
              <div className="absolute top-1/2 -translate-y-1/2 left-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-card/80 backdrop-blur-sm"
                  onClick={prevTestimonial}
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 right-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-card/80 backdrop-blur-sm"
                  onClick={nextTestimonial}
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === testimonial ? 'bg-primary w-8' : 'bg-muted-foreground/30'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioWebsite;
