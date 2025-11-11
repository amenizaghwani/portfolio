import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "fr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    
    // Hero
    "hero.subtitle": "Where Dreams Meet Design",
    "hero.description": "Crafting digital experiences with love, creativity, and purpose. Every project is a story, every line of code is poetry.",
    "hero.cta": "Let's Create Together",
    
    // About
    "about.subtitle": "The Heart Behind the Code",
    "about.title": "Passion & Purpose",
    "about.intro": "I believe that design is more than aesthetics—it's empathy in motion. Technology is not just a tool, it's a canvas where ideas come alive, where problems are solved with care, and where every user feels seen and valued.",
    "about.journey": "My journey began with curiosity and grew into a deep love for creating meaningful digital experiences. I thrive in the space where creativity meets logic, where beauty meets function.",
    "about.value1.title": "Empathy First",
    "about.value1.desc": "I design and build with people in mind—their needs, their emotions, their stories.",
    "about.value2.title": "Creative Soul",
    "about.value2.desc": "Every project is an opportunity to explore, experiment, and bring fresh ideas to life.",
    "about.value3.title": "Eternal Learner",
    "about.value3.desc": "The world of tech evolves, and so do I. Growth is not a destination, it's a journey.",
    "about.quote": "Design is not just what it looks like. Design is how it feels, how it connects, how it transforms.",
    "about.documents.title": "My Documents",
    "about.documents.cv": "Download CV",
    "about.documents.motivation": "Motivation Letter",
    "about.documents.video": "Video CV",
    
    // Skills
    "skills.subtitle": "What I Bring to the Table",
    "skills.title": "Skills & Expertise",
    "skills.description": "A blend of technical mastery and creative intuition. These are the tools I use to turn visions into reality.",
    "skills.frontend": "Frontend Magic",
    "skills.design": "Design & UX",
    "skills.backend": "Backend & Tools",
    
    // Projects
    "projects.subtitle": "Work That Speaks",
    "projects.title": "Featured Projects",
    "projects.description": "Each project is a piece of my journey—crafted with intention, built with passion.",
    "projects.viewProject": "View Project",
    "projects.viewCode": "Code",
    
    // Contact
    "contact.subtitle": "Let's Connect",
    "contact.title": "Start a Conversation",
    "contact.description": "Have a project in mind? Want to collaborate? Or just want to say hello? I'd love to hear from you.",
    "contact.chat": "Chat with Me",
    "contact.email": "Email",
    "contact.social": "Find me on",
    "contact.quote": "Great things are built together, not alone.",
    
    // Footer
    "footer.tagline": "Crafted with 💜 and purpose",
    "footer.links": "Quick Links",
    "footer.connect": "Let's Connect",
  },
  fr: {
    // Navbar
    "nav.home": "Accueil",
    "nav.about": "À Propos",
    "nav.skills": "Compétences",
    "nav.projects": "Projets",
    "nav.contact": "Contact",
    
    // Hero
    "hero.subtitle": "Où les Rêves Rencontrent le Design",
    "hero.description": "Créer des expériences numériques avec amour, créativité et sens. Chaque projet est une histoire, chaque ligne de code est de la poésie.",
    "hero.cta": "Créons Ensemble",
    
    // About
    "about.subtitle": "Le Cœur Derrière le Code",
    "about.title": "Passion & Objectif",
    "about.intro": "Je crois que le design est plus qu'une esthétique—c'est l'empathie en mouvement. La technologie n'est pas qu'un outil, c'est une toile où les idées prennent vie, où les problèmes sont résolus avec soin, et où chaque utilisateur se sent vu et valorisé.",
    "about.journey": "Mon parcours a commencé par la curiosité et s'est transformé en un profond amour pour la création d'expériences numériques significatives. Je m'épanouis dans l'espace où la créativité rencontre la logique, où la beauté rencontre la fonction.",
    "about.value1.title": "L'Empathie d'Abord",
    "about.value1.desc": "Je conçois et construis en pensant aux gens—leurs besoins, leurs émotions, leurs histoires.",
    "about.value2.title": "Âme Créative",
    "about.value2.desc": "Chaque projet est une opportunité d'explorer, d'expérimenter et de donner vie à de nouvelles idées.",
    "about.value3.title": "Apprenant Éternel",
    "about.value3.desc": "Le monde de la technologie évolue, et moi aussi. La croissance n'est pas une destination, c'est un voyage.",
    "about.quote": "Le design n'est pas seulement ce à quoi il ressemble. Le design est ce qu'il ressent, comment il se connecte, comment il transforme.",
    "about.documents.title": "Mes Documents",
    "about.documents.cv": "Télécharger CV",
    "about.documents.motivation": "Lettre de Motivation",
    "about.documents.video": "CV Vidéo",
    
    // Skills
    "skills.subtitle": "Ce Que J'Apporte",
    "skills.title": "Compétences & Expertise",
    "skills.description": "Un mélange de maîtrise technique et d'intuition créative. Ce sont les outils que j'utilise pour transformer les visions en réalité.",
    "skills.frontend": "Magie Frontend",
    "skills.design": "Design & UX",
    "skills.backend": "Backend & Outils",
    
    // Projects
    "projects.subtitle": "Travail Qui Parle",
    "projects.title": "Projets Sélectionnés",
    "projects.description": "Chaque projet est un morceau de mon voyage—créé avec intention, construit avec passion.",
    "projects.viewProject": "Voir le Projet",
    "projects.viewCode": "Code",
    
    // Contact
    "contact.subtitle": "Connectons-Nous",
    "contact.title": "Commencer une Conversation",
    "contact.description": "Vous avez un projet en tête ? Envie de collaborer ? Ou juste envie de dire bonjour ? J'aimerais vous entendre.",
    "contact.chat": "Discuter avec Moi",
    "contact.email": "Email",
    "contact.social": "Retrouvez-moi sur",
    "contact.quote": "Les grandes choses se construisent ensemble, pas seul.",
    
    // Footer
    "footer.tagline": "Créé avec 💜 et intention",
    "footer.links": "Liens Rapides",
    "footer.connect": "Connectons-Nous",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
