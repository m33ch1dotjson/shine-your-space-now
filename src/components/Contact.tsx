import { useLanguage } from "@/contexts/LanguageContext";
import { MapPin, Mail, Phone } from "lucide-react";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            <span className="gradient-text">{t("contact.title")}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">{t("contact.subtitle")}</p>
        </div>

        <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <a href="https://maps.google.com/?q=Elzenstraat+11+05,+5038HB+Tilburg" target="_blank" rel="noopener noreferrer" className="glass-card rounded-xl p-6 text-center glow-hover group">
            <MapPin className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-heading font-semibold text-foreground mb-2">{t("contact.address")}</h3>
            <p className="text-sm text-muted-foreground">Elzenstraat 11 05<br />5038HB Tilburg</p>
          </a>

          <a href="mailto:info@shinebynatalia.nl" className="glass-card rounded-xl p-6 text-center glow-hover group">
            <Mail className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-heading font-semibold text-foreground mb-2">{t("contact.email")}</h3>
            <p className="text-sm text-muted-foreground">info@shinebynatalia.nl</p>
          </a>

          <a href="tel:+31629111959" className="glass-card rounded-xl p-6 text-center glow-hover group">
            <Phone className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-heading font-semibold text-foreground mb-2">{t("contact.phone")}</h3>
            <p className="text-sm text-muted-foreground">+31 6 29111959</p>
          </a>
        </div>

        <div className="text-center mt-10">
          <a
            href="mailto:info@shinebynatalia.nl"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg font-semibold text-primary-foreground bg-primary hover:opacity-90 transition-opacity glow-hover"
          >
            {t("contact.cta")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
