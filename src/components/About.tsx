import { Heart, Sparkles, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 gradient-soft">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
              The Person Behind the Pixels
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              A Journey of{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Passion & Purpose
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              "To create is to give a piece of your soul to the world."
            </p>
          </div>

          {/* Story Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Left: Main Story */}
            <div className="space-y-6 animate-slide-up">
              <p className="text-foreground/90 leading-relaxed text-lg">
                I'm not just a designer or developer—I'm a storyteller who uses technology 
                as my canvas. My journey began with a simple curiosity: 
                <span className="italic text-primary font-medium"> how can we make the digital world feel more human?</span>
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Every project I take on is more than just lines of code or pixels on a screen. 
                It's about creating experiences that resonate, interfaces that breathe, 
                and moments that matter. I believe in design that whispers rather than shouts, 
                in simplicity that holds complexity, and in beauty that serves purpose.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                When I'm not crafting digital experiences, you'll find me exploring art galleries, 
                reading poetry, or lost in the melody of a new song. These moments inspire my work 
                and remind me that the best designs come from a place of genuine emotion.
              </p>
            </div>

            {/* Right: Value Cards */}
            <div className="space-y-4">
              <div className="bg-card p-6 rounded-2xl shadow-soft border border-border/50 transition-smooth hover:shadow-medium hover:scale-105">
                <Heart className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-serif text-xl font-semibold mb-2">Empathy First</h3>
                <p className="text-muted-foreground text-sm">
                  I design with people in mind, creating solutions that truly understand and care for user needs.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-2xl shadow-soft border border-border/50 transition-smooth hover:shadow-medium hover:scale-105">
                <Sparkles className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-serif text-xl font-semibold mb-2">Creative Soul</h3>
                <p className="text-muted-foreground text-sm">
                  Every challenge is an opportunity to innovate, to see what others miss, and to create magic.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-2xl shadow-soft border border-border/50 transition-smooth hover:shadow-medium hover:scale-105">
                <Lightbulb className="w-8 h-8 text-purple-medium mb-4" />
                <h3 className="font-serif text-xl font-semibold mb-2">Eternal Learner</h3>
                <p className="text-muted-foreground text-sm">
                  Growth never stops. I'm constantly exploring new tools, techniques, and perspectives.
                </p>
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="text-center py-12 px-6 bg-primary/5 rounded-3xl border border-primary/10">
            <blockquote className="font-serif text-2xl md:text-3xl italic text-foreground/90 max-w-3xl mx-auto">
              "Design is not just what it looks like. Design is how it feels, 
              how it moves, how it tells a story that lingers in hearts."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
