import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { MultiLangContent } from "@/lib/microcms";
import { getTranslatedText } from "@/lib/utils";
import { useDomains } from "@/lib/KitServicesContext";

const Domains = () => {
  const { i18n, t } = useTranslation();
  const currentLang = (i18n.language || 'en') as keyof MultiLangContent;
  const { domains, loading } = useDomains();

  if (loading || domains.length === 0) return null;

  return (
    <section className="py-24 px-8 md:px-16 lg:px-24 bg-secondary/20" id="domains">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4"
        >
          {t('domains.subtitle')}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-4"
        >
          {t('domains.title1')}
          <br />
          <span className="text-gradient">{t('domains.title2')}</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-normal text-muted-foreground text-lg max-w-2xl mb-16 text-justify"
        >
          {t('domains.description')}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((domain, index) => {
            return (
              <Link
                key={domain.id || domain.slug}
                to={`/domains/${domain.slug}`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group relative overflow-hidden rounded-2xl bg-card border border-border p-8 hover:border-primary/50 transition-all duration-500 cursor-pointer h-full"
                >
                  <div className="relative z-10">
                    {domain.icon?.url && (
                      <div className="mb-6 inline-flex items-center justify-center w-14 h-14">
                        <img
                          src={domain.icon.url}
                          alt={domain.icon.alt || getTranslatedText(domain.name, currentLang)}
                          className="w-full h-full object-contain rounded-sm"
                        />
                      </div>
                    )}

                    <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                      {getTranslatedText(domain.name, currentLang)}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">
                      {getTranslatedText(domain.description, currentLang)}
                    </p>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Domains;
