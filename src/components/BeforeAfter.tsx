import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import dirtyOvenBefore from "@/assets/dirty-oven-before.jpg";
import cleanOvenAfter from "@/assets/clean-oven-after.jpg";
import dirtyRackBefore from "@/assets/dirty-rack-before.jpg";
import cleanRackAfter from "@/assets/clean-rack-after.jpg";
import dirtyWindowBefore from "@/assets/dirty-window-before.jpg";
import cleanWindowAfter from "@/assets/clean-window-after.jpg";
import dirtyDrainBefore from "@/assets/dirty-drain-before.jpg";
import cleanDrainAfter from "@/assets/clean-drain-after.jpg";
import dirtyTilesBefore from "@/assets/dirty-tiles-before.jpg";
import cleanTilesAfter from "@/assets/clean-tiles-after.jpg";

const pairs = [
  { before: dirtyOvenBefore, after: cleanOvenAfter, labelNl: "Oven binnenkant", labelEn: "Oven interior" },
  { before: dirtyRackBefore, after: cleanRackAfter, labelNl: "Ovenrooster", labelEn: "Oven rack" },
  { before: dirtyWindowBefore, after: cleanWindowAfter, labelNl: "Ramen", labelEn: "Windows" },
  { before: dirtyDrainBefore, after: cleanDrainAfter, labelNl: "Afvoer", labelEn: "Drain" },
  { before: dirtyTilesBefore, after: cleanTilesAfter, labelNl: "Tegels", labelEn: "Tiles" },
];

const BeforeAfter = () => {
  const { language } = useLanguage();
  const [current, setCurrent] = useState(0);

  const title = language === "nl" ? "Voor & Na" : "Before & After";
  const subtitle = language === "nl"
    ? "Zie het verschil dat wij maken"
    : "See the difference we make";
  const beforeLabel = language === "nl" ? "Voor" : "Before";
  const afterLabel = language === "nl" ? "Na" : "After";

  const prev = () => setCurrent((c) => (c - 1 + pairs.length) % pairs.length);
  const next = () => setCurrent((c) => (c + 1) % pairs.length);
  const pair = pairs[current];

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            <span className="gradient-text">{title}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">{subtitle}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-xl overflow-hidden p-6 md:p-8">
            <h3 className="text-center font-heading font-semibold text-foreground mb-6 text-lg">
              {language === "nl" ? pair.labelNl : pair.labelEn}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src={pair.before}
                  alt={`${beforeLabel} - ${language === "nl" ? pair.labelNl : pair.labelEn}`}
                  className="w-full h-56 md:h-80 object-cover"
                />
                <span className="absolute top-3 left-3 bg-destructive text-destructive-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  {beforeLabel}
                </span>
              </div>
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src={pair.after}
                  alt={`${afterLabel} - ${language === "nl" ? pair.labelNl : pair.labelEn}`}
                  className="w-full h-56 md:h-80 object-cover"
                />
                <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  {afterLabel}
                </span>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-6 mt-8">
              <button
                onClick={prev}
                className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Vorige"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="flex gap-2">
                {pairs.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      i === current ? "bg-primary" : "bg-muted-foreground/40"
                    }`}
                    aria-label={`Ga naar ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Volgende"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <p className="text-center text-xs text-muted-foreground mt-3">
              {current + 1} / {pairs.length}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
