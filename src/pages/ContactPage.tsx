import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Mail, Phone, Send, Loader2, CheckCircle } from "lucide-react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_9ui53wh";
const EMAILJS_TEMPLATE_ID = "template_r7givfs";
const EMAILJS_PUBLIC_KEY = "I5VouWX9vF_3Fp8n6";

const ContactContent = () => {
  const { language } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const t = {
    title: language === "nl" ? "Contact" : "Contact",
    subtitle: language === "nl"
      ? "Wij staan klaar om u te helpen. Neem gerust contact op."
      : "We're ready to help you. Don't hesitate to get in touch.",
    addressLabel: language === "nl" ? "Adres" : "Address",
    emailLabel: language === "nl" ? "E-mail" : "Email",
    phoneLabel: language === "nl" ? "Telefoon" : "Phone",
    hoursTitle: language === "nl" ? "Openingstijden" : "Opening Hours",
    hoursNote: language === "nl"
      ? "Bereikbaar op werkdagen van 08:00 tot 18:00. Vrijblijvende offerte op aanvraag."
      : "Available on weekdays from 08:00 to 18:00. Free quote on request.",
    formTitle: language === "nl" ? "Stuur ons een bericht" : "Send us a message",
    nameLabel: language === "nl" ? "Naam" : "Name",
    namePlaceholder: language === "nl" ? "Uw naam" : "Your name",
    emailFieldLabel: language === "nl" ? "E-mailadres" : "Email address",
    emailPlaceholder: language === "nl" ? "uw@email.nl" : "your@email.com",
    phoneFieldLabel: language === "nl" ? "Telefoonnummer (optioneel)" : "Phone number (optional)",
    phonePlaceholder: language === "nl" ? "+31 6 12345678" : "+31 6 12345678",
    messageLabel: language === "nl" ? "Bericht" : "Message",
    messagePlaceholder: language === "nl"
      ? "Beschrijf uw schoonmaakwensen..."
      : "Describe your cleaning needs...",
    submit: language === "nl" ? "Versturen" : "Send",
    sending: language === "nl" ? "Versturen..." : "Sending...",
    successTitle: language === "nl" ? "Bericht verzonden!" : "Message sent!",
    successMsg: language === "nl"
      ? "Wij nemen zo snel mogelijk contact met u op."
      : "We will get back to you as soon as possible.",
    sendAnother: language === "nl" ? "Nog een bericht sturen" : "Send another message",
    errorMsg: language === "nl"
      ? "Er is iets misgegaan. Probeer het opnieuw of stuur een e-mail."
      : "Something went wrong. Please try again or send an email.",
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setSending(true);
    setError(null);
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setSent(true);
    } catch (err) {
      console.error(err);
      setError(t.errorMsg);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="pt-36 pb-16 flex-1">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              <span className="gradient-text">{t.title}</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">{t.subtitle}</p>
          </div>

          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <a
              href="https://maps.google.com/?q=Elzenstraat+11+05,+5038HB+Tilburg"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-xl p-6 text-center glow-hover group"
            >
              <MapPin className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-heading font-semibold text-foreground mb-2">{t.addressLabel}</h3>
              <p className="text-sm text-muted-foreground">
                Elzenstraat 11 05<br />5038HB Tilburg
              </p>
            </a>

            <a href="mailto:info@shinebynatalia.nl" className="glass-card rounded-xl p-6 text-center glow-hover group">
              <Mail className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-heading font-semibold text-foreground mb-2">{t.emailLabel}</h3>
              <p className="text-sm text-muted-foreground">info@shinebynatalia.nl</p>
            </a>

            <a href="tel:+31629111959" className="glass-card rounded-xl p-6 text-center glow-hover group">
              <Phone className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-heading font-semibold text-foreground mb-2">{t.phoneLabel}</h3>
              <p className="text-sm text-muted-foreground">+31 6 29111959</p>
            </a>
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto glass-card rounded-xl p-8">
            <h2 className="font-heading font-semibold text-foreground text-xl mb-6">{t.formTitle}</h2>

            {sent ? (
              <div className="flex flex-col items-center justify-center py-10 text-center gap-4">
                <CheckCircle className="w-14 h-14 text-primary" />
                <h3 className="text-xl font-heading font-semibold text-foreground">{t.successTitle}</h3>
                <p className="text-muted-foreground">{t.successMsg}</p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-4 inline-flex items-center justify-center px-6 py-2.5 rounded-lg font-semibold text-primary border border-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {t.sendAnother}
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground" htmlFor="from_name">
                      {t.nameLabel} <span className="text-primary">*</span>
                    </label>
                    <input
                      id="from_name"
                      name="from_name"
                      type="text"
                      required
                      placeholder={t.namePlaceholder}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground" htmlFor="from_email">
                      {t.emailFieldLabel} <span className="text-primary">*</span>
                    </label>
                    <input
                      id="from_email"
                      name="from_email"
                      type="email"
                      required
                      placeholder={t.emailPlaceholder}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-foreground" htmlFor="phone">
                    {t.phoneFieldLabel}
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder={t.phonePlaceholder}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-foreground" htmlFor="message">
                    {t.messageLabel} <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder={t.messagePlaceholder}
                    className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors resize-none"
                  />
                </div>

                {error && (
                  <p className="text-sm text-destructive">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg font-semibold text-primary-foreground bg-primary hover:opacity-90 transition-opacity glow-hover disabled:opacity-60 disabled:pointer-events-none"
                >
                  {sending ? (
                    <><Loader2 className="w-4 h-4 animate-spin" />{t.sending}</>
                  ) : (
                    <><Send className="w-4 h-4" />{t.submit}</>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Opening Hours */}
          <div className="max-w-3xl mx-auto glass-card rounded-xl p-6 text-center mt-6">
            <h2 className="font-heading font-semibold text-foreground text-lg mb-2">{t.hoursTitle}</h2>
            <p className="text-muted-foreground text-sm">{t.hoursNote}</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const ContactPage = () => <ContactContent />;

export default ContactPage;
