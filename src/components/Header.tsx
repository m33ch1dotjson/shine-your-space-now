import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/logo.jpeg";
import { Phone, Mail } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#services", label: t("nav.services") },
    { href: "#reviews", label: t("nav.reviews") },
    { href: "#area", label: t("nav.area") },
    { href: "#contact", label: t("nav.contact") },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="Shine by Natalia" className="h-14 w-auto rounded-lg" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="tel:+31629111959" className="hidden sm:flex items-center gap-1.5 text-sm text-primary font-medium">
            <Phone className="w-4 h-4" />
            +31 6 29111959
          </a>

          <button
            onClick={() => setLanguage(language === "nl" ? "en" : "nl")}
            className="px-3 py-1.5 rounded-md text-xs font-semibold bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            {language === "nl" ? "EN" : "NL"}
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-card border-b border-border px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a href="tel:+31629111959" className="flex items-center gap-1.5 py-2 text-sm text-primary font-medium sm:hidden">
            <Phone className="w-4 h-4" />
            +31 6 29111959
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
