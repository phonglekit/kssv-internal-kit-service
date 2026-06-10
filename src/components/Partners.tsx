import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { MultiLangContent } from "@/lib/microcms";
import { Handshake } from "lucide-react";
import { getTranslatedText } from "@/lib/utils";
import { usePartners } from "@/lib/KitServicesContext";

const Partners = () => {
  const { i18n, t } = useTranslation();
  const currentLang = (i18n.language || 'en') as keyof MultiLangContent;
  const { partners, loading } = usePartners();

  if (loading || partners.length === 0) return null;

  return (
    <section className="py-24 px-8 md:px-16 lg:px-24 bg-secondary/10" id="partners">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4"
        >
          <Handshake className="w-6 h-6 text-primary" />
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            {t('partners.subtitle')}
          </p>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-16"
        >
          {t('partners.title')}
        </motion.h2>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id || partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <img
                src={partner.logo?.url || '/placeholder.svg'}
                alt={partner.name}
                className="w-24 h-24 md:w-32 md:h-32 object-contain opacity-70 transition-opacity duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
