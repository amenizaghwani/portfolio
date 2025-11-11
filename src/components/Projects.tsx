import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "A modern, responsive e-commerce platform with seamless checkout experience and real-time inventory management.",
      tags: ["React", "Node.js", "Stripe", "MongoDB"],
      gradient: "from-purple-deep to-primary",
      link: "#",
      github: "#",
    },
    {
      title: "Design System",
      category: "UI/UX Design",
      description: "Comprehensive design system with reusable components, ensuring consistency across all digital products.",
      tags: ["Figma", "React", "Storybook", "Tailwind"],
      gradient: "from-primary to-pink-accent",
      link: "#",
      github: "#",
    },
    {
      title: "AI-Powered Dashboard",
      category: "Full Stack",
      description: "Analytics dashboard with AI-driven insights, helping businesses make data-driven decisions.",
      tags: ["Next.js", "Python", "TensorFlow", "PostgreSQL"],
      gradient: "from-pink-accent to-lavender",
      link: "#",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-gradient-to-b from-background to-lavender/20">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
            {t("projects.subtitle")}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            {t("projects.title")}
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            {t("projects.description")}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-background rounded-2xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in border border-primary/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Header */}
              <div className={`h-32 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/20 text-white border-0">
                    {project.category}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-foreground/70 mb-4 line-clamp-3">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="outline"
                      className="bg-lavender/20 border-primary/20 text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 gap-2 border-primary/30 hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      {t("projects.viewProject")}
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="gap-2"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      {t("projects.viewCode")}
                    </a>
                  </Button>
                </div>
              </div>

              {/* Decorative gradient */}
              <div className={`absolute -bottom-12 -right-12 w-32 h-32 bg-gradient-to-br ${project.gradient} rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
