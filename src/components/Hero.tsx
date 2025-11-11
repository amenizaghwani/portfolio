import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Subtitle */}
          <p className="text-primary/90 text-lg md:text-xl font-medium mb-6 animate-fade-in">
            {t("hero.subtitle")}
          </p>
          
          {/* Main heading */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <span className="block bg-gradient-to-r from-purple-deep via-primary to-pink-accent bg-clip-text text-transparent">
              Ameni Zaghwani
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-foreground/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed animate-fade-in">
            {t("hero.description")}
          </p>
          
          {/* CTA Button */}
          <Button 
            size="lg" 
            onClick={() => scrollToSection('about')}
            className="bg-gradient-to-r from-purple-deep to-primary hover:opacity-90 text-white shadow-soft animate-fade-in"
          >
            {t("hero.cta")}
            <ArrowDown className="ml-2 w-5 h-5 animate-bounce" />
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
