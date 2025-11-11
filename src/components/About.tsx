import { Heart, Sparkles, BookOpen, FileText, Video, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Heart,
      title: t("about.value1.title"),
      description: t("about.value1.desc"),
    },
    {
      icon: Sparkles,
      title: t("about.value2.title"),
      description: t("about.value2.desc"),
    },
    {
      icon: BookOpen,
      title: t("about.value3.title"),
      description: t("about.value3.desc"),
    },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-gradient-to-b from-background to-lavender/20">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
            {t("about.subtitle")}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            {t("about.title")}
          </h2>
        </div>

        {/* Profile Photo and Journey */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          {/* Photo */}
          <div className="relative animate-fade-in">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-elegant bg-gradient-to-br from-purple-deep/20 to-lavender/30">
              <img 
                src="/placeholder.svg" 
                alt="Ameni Zaghwani"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary to-pink-accent rounded-full blur-3xl opacity-30"></div>
          </div>

          {/* Text Content */}
          <div className="space-y-6 animate-fade-in">
            <p className="text-foreground/80 text-lg leading-relaxed">
              {t("about.intro")}
            </p>
            <p className="text-foreground/80 text-lg leading-relaxed">
              {t("about.journey")}
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-background/50 backdrop-blur-sm rounded-xl p-8 shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in border border-primary/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-deep to-primary flex items-center justify-center mb-6 shadow-soft">
                <value.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Documents Section */}
        <div className="bg-gradient-to-br from-purple-deep/10 to-lavender/20 rounded-2xl p-8 shadow-soft mb-12 animate-fade-in">
          <h3 className="font-serif text-2xl font-bold mb-6 text-center">
            {t("about.documents.title")}
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="outline"
              className="gap-2 border-primary/30 hover:bg-primary/10"
              asChild
            >
              <a href="#" download>
                <Download className="w-4 h-4" />
                {t("about.documents.cv")}
              </a>
            </Button>
            <Button
              variant="outline"
              className="gap-2 border-primary/30 hover:bg-primary/10"
              asChild
            >
              <a href="#" download>
                <FileText className="w-4 h-4" />
                {t("about.documents.motivation")}
              </a>
            </Button>
            <Button
              variant="outline"
              className="gap-2 border-primary/30 hover:bg-primary/10"
              asChild
            >
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Video className="w-4 h-4" />
                {t("about.documents.video")}
              </a>
            </Button>
          </div>
        </div>

        {/* Closing Quote */}
        <div className="text-center italic text-foreground/60 text-lg font-serif max-w-3xl mx-auto animate-fade-in">
          "{t("about.quote")}"
        </div>
      </div>
    </section>
  );
};

export default About;
