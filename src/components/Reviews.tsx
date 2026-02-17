import { useLanguage } from "@/contexts/LanguageContext";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Maria V.",
    rating: 5,
    nl: "Uitstekende service! Mijn kantoor is nog nooit zo schoon geweest. Zeer professioneel en betrouwbaar.",
    en: "Excellent service! My office has never been this clean. Very professional and reliable.",
  },
  {
    name: "Peter de J.",
    rating: 5,
    nl: "Na onze verbouwing heeft Shine by Natalia alles perfect opgeleverd. Aanrader!",
    en: "After our renovation, Shine by Natalia delivered everything perfectly. Highly recommended!",
  },
  {
    name: "Sophie K.",
    rating: 5,
    nl: "Ik gebruik hun diensten al maanden voor mijn vakantieappartement. Gasten zijn altijd tevreden.",
    en: "I've been using their services for months for my holiday apartment. Guests are always satisfied.",
  },
];

const Reviews = () => {
  const { language, t } = useLanguage();

  return (
    <section id="reviews" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            <span className="gradient-text">{t("reviews.title")}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">{t("reviews.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reviews.map((review, i) => (
            <div key={i} className="glass-card rounded-xl p-6 glow-hover">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-4 text-sm leading-relaxed italic">
                "{language === "nl" ? review.nl : review.en}"
              </p>
              <p className="text-sm font-semibold text-muted-foreground">— {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
