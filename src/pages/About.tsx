import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";
import nataliaWork from "@/assets/natalia-work.jpg";

const AboutContent = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-36 pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              <span className="gradient-text">
                {language === "nl" ? "Over Ons" : "About Us"}
              </span>
            </h1>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src={nataliaWork}
                alt="Shine by Natalia aan het werk"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="glass-card rounded-xl p-8 md:p-10">
              {language === "nl" ? (
                <p className="text-foreground text-lg leading-relaxed">
                  Wij werken met passie, toewijding en een persoonlijke aanpak voor iedere klant. We luisteren écht naar uw wensen en vertalen die naar oplossingen die verwachtingen niet alleen waarmaken, maar overtreffen. Graag nodigen wij u uit voor een vrijblijvend gesprek, zodat we uw behoeften kunnen begrijpen en samen kunnen kijken naar de beste aanpak.
                </p>
              ) : (
                <p className="text-foreground text-lg leading-relaxed">
                  We work with passion, dedication and a personal approach for every client. We truly listen to your wishes and translate them into solutions that not only meet expectations, but exceed them. We would like to invite you for a no-obligation consultation, so we can understand your needs and find the best approach together.
                </p>
              )}

              <div className="mt-8">
                <a
                  href="/#contact"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg font-semibold text-primary-foreground bg-primary hover:opacity-90 transition-opacity glow-hover"
                >
                  {language === "nl" ? "Neem contact op" : "Get in Touch"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const About = () => (
  <LanguageProvider>
    <AboutContent />
  </LanguageProvider>
);

export default About;
