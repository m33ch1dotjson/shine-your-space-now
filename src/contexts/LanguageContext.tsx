import { createContext, useContext, useState, ReactNode } from "react";

type Language = "nl" | "en";

type Translations = {
  [key: string]: { nl: string; en: string };
};

const translations: Translations = {
  // Nav
  "nav.services": { nl: "Diensten", en: "Services" },
  "nav.about": { nl: "Over ons", en: "About" },
  "nav.reviews": { nl: "Beoordelingen", en: "Reviews" },
  "nav.area": { nl: "Werkgebied", en: "Service Area" },
  "nav.contact": { nl: "Contact", en: "Contact" },

  // Hero
  "hero.title": { nl: "Professionele Schoonmaakdiensten", en: "Professional Cleaning Services" },
  "hero.subtitle": { nl: "Wij zorgen ervoor dat uw ruimte straalt — van kantoren tot privéwoningen in heel Noord-Brabant.", en: "We make your space shine — from offices to private homes across Noord-Brabant." },
  "hero.cta": { nl: "Neem contact op", en: "Get in Touch" },
  "hero.services": { nl: "Onze diensten", en: "Our Services" },

  // Services
  "services.title": { nl: "Onze Diensten", en: "Our Services" },
  "services.subtitle": { nl: "Professionele schoonmaakoplossingen op maat", en: "Professional cleaning solutions tailored to your needs" },
  "services.office": { nl: "Kantoor schoonmaak", en: "Office Cleaning" },
  "services.office.desc": { nl: "Houd uw werkplek schoon en professioneel", en: "Keep your workplace clean and professional" },
  "services.moving": { nl: "Verhuisschoonmaak", en: "Moving House Cleaning" },
  "services.moving.desc": { nl: "Een frisse start in uw nieuwe woning", en: "A fresh start in your new home" },
  "services.renovation": { nl: "Opleverschoonmaak", en: "Renovation Cleaning" },
  "services.renovation.desc": { nl: "Na verbouwing alles weer spic en span", en: "Everything spotless after renovation" },
  "services.window": { nl: "Glazenwassen", en: "Window Cleaning" },
  "services.window.desc": { nl: "Kristalheldere ramen, binnen en buiten", en: "Crystal clear windows, inside and out" },
  "services.holiday": { nl: "Vakantiewoningen", en: "Holiday Properties" },
  "services.holiday.desc": { nl: "Hotels, appartementen en huurwoningen", en: "Hotels, apartments and rental homes" },
  "services.deep": { nl: "Dieptereiniging", en: "Deep Cleaning" },
  "services.deep.desc": { nl: "Grondige reiniging voor een optimaal resultaat", en: "Thorough cleaning for optimal results" },
  "services.private": { nl: "Particuliere woningen", en: "Private Homes" },
  "services.private.desc": { nl: "Uw huis in perfecte staat", en: "Your home in perfect condition" },

  // Reviews
  "reviews.title": { nl: "Wat Klanten Zeggen", en: "What Clients Say" },
  "reviews.subtitle": { nl: "Onze klanten waarderen de kwaliteit van ons werk", en: "Our clients appreciate the quality of our work" },

  // Area
  "area.title": { nl: "Werkgebied", en: "Service Area" },
  "area.subtitle": { nl: "Wij zijn actief in heel Noord-Brabant", en: "We operate across Noord-Brabant" },
  "area.description": { nl: "Shine by Natalia biedt professionele schoonmaakdiensten in heel Noord-Brabant. Van Tilburg tot Eindhoven, van Breda tot 's-Hertogenbosch — wij komen graag bij u langs.", en: "Shine by Natalia provides professional cleaning services throughout Noord-Brabant. From Tilburg to Eindhoven, from Breda to 's-Hertogenbosch — we're happy to come to you." },
  "area.cities": { nl: "Steden waar wij werken:", en: "Cities we serve:" },

  // Contact
  "contact.title": { nl: "Neem Contact Op", en: "Get in Touch" },
  "contact.subtitle": { nl: "Wij staan klaar om u te helpen", en: "We're ready to help you" },
  "contact.address": { nl: "Adres", en: "Address" },
  "contact.email": { nl: "E-mail", en: "Email" },
  "contact.phone": { nl: "Telefoon", en: "Phone" },
  "contact.cta": { nl: "Stuur ons een bericht", en: "Send us a message" },

  // Footer
  "footer.rights": { nl: "Alle rechten voorbehouden.", en: "All rights reserved." },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("nl");

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
