import { Badge } from "@/components/ui/badge";
import { Code2, Palette, Sparkles, Zap } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Visual Artistry",
      description: "Crafting beautiful interfaces with an eye for detail",
      skills: [
        "UI/UX Design",
        "Visual Design",
        "Brand Identity",
        "Typography",
        "Color Theory",
        "Illustration",
      ],
      gradient: "from-purple-deep to-purple-medium",
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Technical Craft",
      description: "Building robust, scalable solutions",
      skills: [
        "React & TypeScript",
        "Next.js",
        "Tailwind CSS",
        "Node.js",
        "REST APIs",
        "Database Design",
      ],
      gradient: "from-purple-medium to-purple-soft",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Creative Tools",
      description: "Bringing ideas to life with industry-standard software",
      skills: [
        "Figma",
        "Adobe Creative Suite",
        "Framer",
        "Webflow",
        "Blender",
        "After Effects",
      ],
      gradient: "from-purple-soft to-pink-accent",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Soft Powers",
      description: "The human touch that makes everything click",
      skills: [
        "Problem Solving",
        "Team Collaboration",
        "Communication",
        "Project Management",
        "Mentoring",
        "Storytelling",
      ],
      gradient: "from-pink-accent to-accent",
    },
  ];

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
              My Toolkit
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Skills That{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Spark Magic
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A blend of artistic vision and technical mastery, 
              cultivated through passion and endless curiosity.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="group bg-card rounded-3xl p-8 shadow-soft border border-border/50 transition-smooth hover:shadow-medium hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon & Title */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.gradient} text-white`}>
                    {category.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl font-semibold mb-2">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="px-3 py-1.5 text-sm transition-smooth hover:bg-primary hover:text-primary-foreground"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Quote */}
          <div className="mt-16 text-center">
            <p className="font-serif text-xl italic text-muted-foreground">
              "Mastery is not about knowing everything—it's about loving the journey of learning."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
