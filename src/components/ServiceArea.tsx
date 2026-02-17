import { useLanguage } from "@/contexts/LanguageContext";
import { MapPin } from "lucide-react";

const cities = [
  "Tilburg", "Eindhoven", "Breda", "'s-Hertogenbosch", "Helmond",
  "Oss", "Roosendaal", "Bergen op Zoom", "Waalwijk", "Uden",
];

const ServiceArea = () => {
  const { t } = useLanguage();

  return (
    <section id="area" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            <span className="gradient-text">{t("area.title")}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">{t("area.subtitle")}</p>
        </div>

        <div className="max-w-3xl mx-auto glass-card rounded-xl p-8 md:p-12 text-center">
          <MapPin className="w-12 h-12 text-primary mx-auto mb-6" />
          <p className="text-foreground text-lg leading-relaxed mb-8">{t("area.description")}</p>
          <p className="text-sm font-semibold text-muted-foreground mb-4">{t("area.cities")}</p>
          <div className="flex flex-wrap justify-center gap-3">
            {cities.map((city) => (
              <span
                key={city}
                className="px-4 py-2 rounded-full text-sm font-medium bg-muted text-foreground border border-border"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
