import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const { t } = useTranslation();
  const [result, setResult] = useState("");
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!accessKey) {
      setResult(t('footer.errorMissingKey'));
      return;
    }

    setResult(t('footer.sending'));

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", accessKey);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult(t('footer.success'));
      form.reset();
      return;
    }

    setResult(t('footer.error'));
  };
  
  return (
    <footer className="py-24 px-8 md:px-16 lg:px-24 hero-gradient" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-8"
            >
              {t('footer.title1')}
              <br />
              <span className="text-gradient">{t('footer.title2')}</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-muted-foreground text-lg max-w-md text-justify"
            >
              {t('footer.description')}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-6">
              <a
                href={`mailto:${t('footer.email')}`}
                className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors duration-300 group"
              >
                <Mail className="w-5 h-5" />
                <span className="text-lg">{t('footer.email')}</span>
              </a>

              <a
                href={`tel:${t('footer.phone').replace(/\s/g, '')}`}
                className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors duration-300 group"
              >
                <Phone className="w-5 h-5" />
                <span className="text-lg">{t('footer.phone')}</span>
              </a>

              <div className="flex items-start gap-4 text-muted-foreground">
                <MapPin className="w-5 h-5 mt-1 shrink-0" />
                <span className="text-lg leading-relaxed">{t('footer.address')}</span>
              </div>
            </div>

            <div className="w-full rounded-2xl border border-border/60 bg-background/70 p-6 shadow-lg backdrop-blur-sm">
              <div className="space-y-2 mb-2">
                <p className="text-sm font-semibold uppercase text-primary">
                  {t('footer.formTitle')}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t('footer.formDescription')}
                </p>
              </div>

              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-4"
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="footer-name" className="text-sm font-medium text-foreground">
                      {t('footer.nameLabel')}
                    </label>
                    <Input
                      id="footer-name"
                      name="name"
                      placeholder={t('footer.namePlaceholder')}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="footer-phone" className="text-sm font-medium text-foreground">
                      {t('footer.phoneLabel')}
                    </label>
                    <Input
                      id="footer-phone"
                      name="phone"
                      type="tel"
                      placeholder={t('footer.phonePlaceholder')}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="footer-email" className="text-sm font-medium text-foreground">
                    {t('footer.emailLabel')}
                  </label>
                  <Input
                    id="footer-email"
                    name="email"
                    type="email"
                    placeholder={t('footer.emailPlaceholder')}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="footer-message" className="text-sm font-medium text-foreground">
                    {t('footer.messageLabel')}
                  </label>
                  <Textarea
                    id="footer-message"
                    name="message"
                    placeholder={t('footer.messagePlaceholder')}
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  {t('footer.sendBtn')}
                </Button>

                {result ? (
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {result}
                  </p>
                ) : null}
              </motion.form>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-muted-foreground text-sm">
            {t('footer.copyright')}
          </p>
          <div className="flex gap-8">
            <a href="https://www.linkedin.com/company/kitvietnam/?viewAsMember=true" className="nav-link">
              {t('footer.linkedin')}
            </a>
            <a href="https://www.facebook.com/profile.php?id=61580524370913" className="nav-link">
              {t('footer.facebook')}
            </a>
            <a href="https://vn.kit-group.net/" className="nav-link">
              {t('footer.website')}
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
