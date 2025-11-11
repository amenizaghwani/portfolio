import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send, Heart } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent! ✨",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
              Let's Connect
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Start a{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Conversation
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Whether you have a project in mind, want to collaborate, 
              or just fancy a chat about design—I'd love to hear from you.
            </p>
          </div>

          {/* Contact Form */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Left: Quick Info */}
            <div className="space-y-6">
              <div className="bg-card rounded-2xl p-6 shadow-soft border border-border/50">
                <Mail className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-serif text-lg font-semibold mb-2">Email Me</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  For professional inquiries and collaborations
                </p>
                <a
                  href="mailto:hello@yourname.com"
                  className="text-primary hover:text-primary/80 text-sm font-medium transition-smooth"
                >
                  hello@yourname.com
                </a>
              </div>

              <div className="bg-gradient-accent rounded-2xl p-6 text-white">
                <Heart className="w-8 h-8 mb-4" />
                <h3 className="font-serif text-lg font-semibold mb-2">Social Links</h3>
                <div className="space-y-2 text-sm">
                  <a href="#" className="block hover:opacity-80 transition-smooth">
                    Twitter / X
                  </a>
                  <a href="#" className="block hover:opacity-80 transition-smooth">
                    LinkedIn
                  </a>
                  <a href="#" className="block hover:opacity-80 transition-smooth">
                    Instagram
                  </a>
                  <a href="#" className="block hover:opacity-80 transition-smooth">
                    Dribbble
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-card border-border/50 focus:border-primary transition-smooth"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-card border-border/50 focus:border-primary transition-smooth"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project, ideas, or just say hi! ✨"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="bg-card border-border/50 focus:border-primary transition-smooth resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full gradient-primary text-primary-foreground shadow-glow transition-smooth hover:scale-105 gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Bottom Note */}
          <div className="mt-16 text-center">
            <p className="font-serif text-xl italic text-muted-foreground">
              "Every great project begins with a simple conversation."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
