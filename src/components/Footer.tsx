import { Heart, Github, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-gradient-to-t from-background via-primary/5 to-transparent border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Top Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="text-center md:text-left">
              <h3 className="font-serif text-2xl font-bold mb-2 bg-gradient-to-r from-purple-deep to-primary bg-clip-text text-transparent">
                AZ
              </h3>
              <p className="text-foreground/60 flex items-center justify-center md:justify-start gap-2">
                {t("footer.tagline")}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">{t("footer.links")}</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-foreground/60 hover:text-primary transition-colors"
                  >
                    {t("nav.about")}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("skills")}
                    className="text-foreground/60 hover:text-primary transition-colors"
                  >
                    {t("nav.skills")}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="text-foreground/60 hover:text-primary transition-colors"
                  >
                    {t("nav.projects")}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-foreground/60 hover:text-primary transition-colors"
                  >
                    {t("nav.contact")}
                  </button>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-semibold mb-4">{t("footer.connect")}</h4>
              <div className="flex gap-4 justify-center md:justify-start">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-lavender/20 hover:bg-primary/20 flex items-center justify-center transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-lavender/20 hover:bg-primary/20 flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-border/50 text-center">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Ameni Zaghwani. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
