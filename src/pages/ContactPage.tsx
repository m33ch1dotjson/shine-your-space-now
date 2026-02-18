import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Mail, Phone } from "lucide-react";

const ContactContent = () => {
  const { language } = useLanguage();

  const title = language === "nl" ? "Contact" : "Contact";
  const subtitle = language === "nl"
    ? "Wij staan klaar om u te helpen. Neem gerust contact op."
    : "We're ready to help you. Don't hesitate to get in touch.";
  const addressLabel = language === "nl" ? "Adres" : "Address";
  const emailLabel = language === "nl" ? "E-mail" : "Email";
  const phoneLabel = language === "nl" ? "Telefoon" : "Phone";
  const ctaLabel = language === "nl" ? "Stuur ons een bericht" : "Send us a message";
  const hoursTitle = language === "nl" ? "Openingstijden" : "Opening Hours";
  const hoursNote = language === "nl"
    ? "Bereikbaar op werkdagen van 08:00 tot 18:00. Vrijblijvende offerte op aanvraag."
    : "Available on weekdays from 08:00 to 18:00. Free quote on request.";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-36 pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              <span className="gradient-text">{title}</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">{subtitle}</p>
          </div>

          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <a
              href="https://maps.google.com/?q=Elzenstraat+11+05,+5038HB+Tilburg"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-xl p-6 text-center glow-hover group"
            >
              <MapPin className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-heading font-semibold text-foreground mb-2">{addressLabel}</h3>
              <p className="text-sm text-muted-foreground">
                Elzenstraat 11 05<br />5038HB Tilburg
              </p>
            </a>

            <a href="mailto:info@shinebynatalia.nl" className="glass-card rounded-xl p-6 text-center glow-hover group">
              <Mail className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-heading font-semibold text-foreground mb-2">{emailLabel}</h3>
              <p className="text-sm text-muted-foreground">info@shinebynatalia.nl</p>
            </a>

            <a href="tel:+31629111959" className="glass-card rounded-xl p-6 text-center glow-hover group">
              <Phone className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-heading font-semibold text-foreground mb-2">{phoneLabel}</h3>
              <p className="text-sm text-muted-foreground">+31 6 29111959</p>
            </a>
          </div>

          <div className="max-w-3xl mx-auto glass-card rounded-xl p-8 text-center">
            <h2 className="font-heading font-semibold text-foreground text-xl mb-3">{hoursTitle}</h2>
            <p className="text-muted-foreground">{hoursNote}</p>
            <div className="mt-8">
              <a
                href="mailto:info@shinebynatalia.nl"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg font-semibold text-primary-foreground bg-primary hover:opacity-90 transition-opacity glow-hover"
              >
                {ctaLabel}
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const ContactPage = () => (
  <LanguageProvider>
    <ContactContent />
  </LanguageProvider>
);

export default ContactPage;
