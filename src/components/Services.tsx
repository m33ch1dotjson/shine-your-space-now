import { useLanguage } from "@/contexts/LanguageContext";

import serviceDeepClean from "@/assets/service-deep-clean.jpg";
import serviceWindow from "@/assets/service-window.jpg";
import serviceOffice from "@/assets/service-office.jpg";
import serviceMoving from "@/assets/service-moving.jpg";
import serviceRenovation from "@/assets/service-renovation.jpg";
import serviceHoliday from "@/assets/service-holiday.jpg";
import servicePrivate from "@/assets/service-private.jpg";
import { Building2, Home, Truck, Sparkles, Hotel, DoorOpen, Paintbrush } from "lucide-react";

const services = [
  { key: "office", icon: Building2, image: serviceOffice },
  { key: "moving", icon: Truck, image: serviceMoving },
  { key: "renovation", icon: Paintbrush, image: serviceRenovation },
  { key: "window", icon: DoorOpen, image: serviceWindow },
  { key: "holiday", icon: Hotel, image: serviceHoliday },
  { key: "deep", icon: Sparkles, image: serviceDeepClean },
  { key: "private", icon: Home, image: servicePrivate },
];

const Services = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            <span className="gradient-text">{t("services.title")}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">{t("services.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.key}
                className="glass-card rounded-xl overflow-hidden glow-hover group transition-transform hover:-translate-y-1"
              >
                {service.image && (
                  <div className="h-44 overflow-hidden">
                    <img
                      src={service.image}
                      alt={t(`services.${service.key}`)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-foreground">{t(`services.${service.key}`)}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{t(`services.${service.key}.desc`)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
