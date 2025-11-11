import { Badge } from "@/components/ui/badge";
import { Code2, Palette, Wrench } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      icon: Code2,
      title: t("skills.frontend"),
      color: "from-purple-deep to-primary",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js", "HTML5/CSS3"],
    },
    {
      icon: Palette,
      title: t("skills.design"),
      color: "from-primary to-pink-accent",
      skills: ["Figma", "Adobe XD", "UI/UX Design", "Prototyping", "Design Systems", "Accessibility"],
    },
    {
      icon: Wrench,
      title: t("skills.backend"),
      color: "from-pink-accent to-lavender",
      skills: ["Node.js", "Python", "REST APIs", "GraphQL", "Git", "Supabase"],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
            {t("skills.subtitle")}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            {t("skills.title")}
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            {t("skills.description")}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-background to-lavender/10 rounded-2xl p-8 shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in border border-primary/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 shadow-soft group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="font-serif text-2xl font-bold mb-6">{category.title}</h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="outline"
                    className="bg-background/50 border-primary/20 hover:bg-primary/10 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>

              {/* Decorative gradient */}
              <div className={`absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br ${category.color} rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
