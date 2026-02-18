import { useLanguage } from "@/contexts/LanguageContext";
import dirtyOvenBefore from "@/assets/dirty-oven-before.jpg";
import cleanOvenAfter from "@/assets/clean-oven-after.jpg";
import dirtyRackBefore from "@/assets/dirty-rack-before.jpg";
import cleanRackAfter from "@/assets/clean-rack-after.jpg";

const pairs = [
  { before: dirtyOvenBefore, after: cleanOvenAfter, labelNl: "Oven binnenkant", labelEn: "Oven interior" },
  { before: dirtyRackBefore, after: cleanRackAfter, labelNl: "Ovenrooster", labelEn: "Oven rack" },
];

const BeforeAfter = () => {
  const { language } = useLanguage();

  const title = language === "nl" ? "Voor & Na" : "Before & After";
  const subtitle = language === "nl"
    ? "Zie het verschil dat wij maken"
    : "See the difference we make";
  const beforeLabel = language === "nl" ? "Voor" : "Before";
  const afterLabel = language === "nl" ? "Na" : "After";

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            <span className="gradient-text">{title}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">{subtitle}</p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {pairs.map((pair, i) => (
            <div key={i} className="glass-card rounded-xl overflow-hidden p-6 md:p-8">
              <h3 className="text-center font-heading font-semibold text-foreground mb-6 text-lg">
                {language === "nl" ? pair.labelNl : pair.labelEn}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src={pair.before}
                    alt={`${beforeLabel} - ${language === "nl" ? pair.labelNl : pair.labelEn}`}
                    className="w-full h-56 md:h-72 object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-destructive text-destructive-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    {beforeLabel}
                  </span>
                </div>
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src={pair.after}
                    alt={`${afterLabel} - ${language === "nl" ? pair.labelNl : pair.labelEn}`}
                    className="w-full h-56 md:h-72 object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    {afterLabel}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
