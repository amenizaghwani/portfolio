import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Dreamscape",
      category: "Web Experience",
      description: "An immersive storytelling platform where narratives come alive through interactive design and fluid animations.",
      tags: ["React", "Three.js", "GSAP", "Design"],
      gradient: "from-purple-deep/20 to-purple-medium/20",
      textGradient: "from-purple-deep to-purple-medium",
    },
    {
      title: "Harmony Hub",
      category: "Mobile App",
      description: "A wellness companion that blends mindfulness practices with beautiful UI to help users find their daily balance.",
      tags: ["React Native", "UI/UX", "Animation", "Wellness"],
      gradient: "from-purple-medium/20 to-purple-soft/20",
      textGradient: "from-purple-medium to-purple-soft",
    },
    {
      title: "Canvas & Code",
      category: "Creative Tool",
      description: "A digital art platform that bridges the gap between traditional artistry and modern technology.",
      tags: ["Next.js", "WebGL", "Design System", "Art"],
      gradient: "from-purple-soft/20 to-pink-accent/20",
      textGradient: "from-purple-soft to-pink-accent",
    },
    {
      title: "Lumina",
      category: "Brand Identity",
      description: "Complete brand redesign for a sustainable fashion startup, telling their story through visual language.",
      tags: ["Branding", "Figma", "Web Design", "Motion"],
      gradient: "from-pink-accent/20 to-accent/20",
      textGradient: "from-pink-accent to-accent",
    },
  ];

  return (
    <section id="projects" className="py-24 gradient-soft">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
              Featured Work
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Stories I've{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Brought to Life
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Each project is a labor of love, crafted with intention and care. 
              Here are some of my favorite creations.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br ${project.gradient} rounded-3xl p-8 border border-border/50 shadow-soft transition-smooth hover:shadow-medium hover:-translate-y-2 overflow-hidden`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl -z-0" />
                
                <div className="relative z-10">
                  {/* Category */}
                  <p className="text-primary font-medium text-sm mb-3">
                    {project.category}
                  </p>

                  {/* Title */}
                  <h3 className={`font-serif text-3xl font-bold mb-4 bg-gradient-to-r ${project.textGradient} bg-clip-text text-transparent`}>
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-foreground/80 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-background/60 backdrop-blur-sm rounded-full text-xs font-medium text-foreground/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className="gap-2 border-primary/30 hover:border-primary transition-smooth"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Project
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="gap-2 hover:bg-primary/10"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              Curious to see more? I'm always working on something new.
            </p>
            <Button
              size="lg"
              className="gradient-primary text-primary-foreground shadow-glow transition-smooth hover:scale-105"
            >
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
