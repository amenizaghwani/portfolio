import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, Github, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  const handleChatClick = () => {
    // Replace with your WhatsApp number or preferred chat platform
    window.open("https://wa.me/YOUR_PHONE_NUMBER", "_blank");
  };

  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-b from-lavender/20 to-background">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
            {t("contact.subtitle")}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            {t("contact.title")}
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto mb-8">
            {t("contact.description")}
          </p>
        </div>

        {/* Contact Card */}
        <div className="bg-gradient-to-br from-purple-deep/10 to-lavender/20 rounded-2xl p-8 md:p-12 shadow-elegant animate-fade-in border border-primary/10">
          <div className="text-center space-y-8">
            {/* Chat Button */}
            <div>
              <Button
                size="lg"
                onClick={handleChatClick}
                className="bg-gradient-to-r from-purple-deep to-primary hover:opacity-90 text-white shadow-soft gap-3 text-lg px-8 py-6"
              >
                <MessageCircle className="w-6 h-6" />
                {t("contact.chat")}
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-primary/20"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-gradient-to-br from-purple-deep/10 to-lavender/20 px-4 text-foreground/60">
                  or
                </span>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center justify-center gap-3 text-foreground/80">
              <Mail className="w-5 h-5 text-primary" />
              <span className="text-lg">{t("contact.email")}:</span>
              <a
                href="mailto:your.email@example.com"
                className="text-primary hover:underline font-medium"
              >
                your.email@example.com
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <p className="text-foreground/60 mb-4">{t("contact.social")}</p>
              <div className="flex justify-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-primary/30 hover:bg-primary/10"
                  asChild
                >
                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-primary/30 hover:bg-primary/10"
                  asChild
                >
                  <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Closing Quote */}
        <div className="text-center italic text-foreground/60 text-lg font-serif mt-12 animate-fade-in">
          "{t("contact.quote")}"
        </div>
      </div>
    </section>
  );
};

export default Contact;
