import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    value: "raonavi505@gmail.com",
    href: "mailto:raonavi505@gmail.com",
    color: "primary"
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: "Phone",
    value: "+91 7015173792",
    href: "tel:+917015173792",
    color: "accent"
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: "Location",
    value: "Gurugram, Haryana",
    href: "#",
    color: "primary"
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    label: "LinkedIn",
    value: "Navdeep Rao",
    href: "https://linkedin.com/in/navdeep-rao",
    color: "accent"
  }
];

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on your next enterprise solution? Let's discuss how I can help bring your ideas to life.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="power-tile fade-in-up stagger-1 overflow-hidden">
              {/* Power Apps Header */}
              <div className="power-app-header flex items-center justify-center space-x-3">
                <Send className="w-5 h-5" />
                <span className="font-semibold text-sm">CONTACT FORM</span>
              </div>

              <div className="power-app-body">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    Send a Message
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Let's discuss how we can work together
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        Full Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className="border-primary/20 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        Email Address *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        className="border-primary/20 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Subject *
                    </label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      required
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or inquiry..."
                      rows={6}
                      required
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground hover:scale-[1.02] transition-all"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-primary-foreground/20 border-t-primary-foreground rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 fade-in-up stagger-2">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div
                      key={info.label}
                      className={`power-tile hover:scale-[1.02] transition-transform cursor-pointer fade-in-up stagger-${index + 3} overflow-hidden`}
                    >
                      {/* Power Apps Header */}
                      <div className="power-app-header flex items-center justify-center space-x-3">
                        <div className="text-primary-foreground">
                          {info.icon}
                        </div>
                        <span className="font-semibold text-xs">CONTACT</span>
                      </div>

                      <a
                        href={info.href}
                        className="block power-app-body text-decoration-none"
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        <div className="text-center">
                          <div className="font-medium text-primary mb-1">
                            {info.label}
                          </div>
                          <div className="text-muted-foreground text-sm">
                            {info.value}
                          </div>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Connect */}
              <Card className="power-tile fade-in-up stagger-6">
                <div className="p-8 text-center">
                  <div className="p-4 rounded-xl bg-accent/10 text-accent inline-flex mb-4">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-4">
                    Available for New Opportunities
                  </h4>
                  <p className="text-muted-foreground mb-6">
                    I'm currently open to exciting opportunities in enterprise software development, 
                    Power Platform solutions, and cloud architecture.
                  </p>
                  <div className="flex gap-4 justify-center">
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://linkedin.com/in/navdeep-rao" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-4 h-4 mr-2" />
                        LinkedIn
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://github.com/navdeep-rao" target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};