import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
          {/* Small intro text */}
          <p className="text-purple-medium font-medium tracking-wider uppercase text-sm">
            Welcome to my world
          </p>
          
          {/* Main heading */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            Where Dreams
            <span className="block bg-gradient-to-r from-purple-deep via-primary to-pink-accent bg-clip-text text-transparent">
              Meet Design
            </span>
          </h1>
          
          {/* Poetic description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I'm a creator who believes in the magic of pixels, the poetry of code, 
            and the warmth of human connection. Every project is a story waiting to unfold.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button 
              size="lg" 
              className="gradient-primary text-primary-foreground shadow-glow transition-smooth hover:scale-105 hover:shadow-glow"
              onClick={() => scrollToSection('projects')}
            >
              Explore My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/30 hover:border-primary transition-smooth hover:shadow-soft"
              onClick={() => scrollToSection('about')}
            >
              Get to Know Me
            </Button>
          </div>
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
