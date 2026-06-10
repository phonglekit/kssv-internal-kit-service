import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import serviceWeb from "@/assets/service-web.jpg";
import serviceAi from "@/assets/service-ai.jpg";

const About = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-24 px-8 md:px-16 lg:px-24 bg-background" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4"
            >
              {t('about.subtitle')}
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6"
            >
              {t('about.title')}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground text-lg leading-relaxed mb-6 text-justify"
            >
              {t('about.description1')}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-muted-foreground text-lg leading-relaxed mb-8 text-justify"
            >
              {t('about.description2')}
            </motion.p>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              href="#contact"
              className="inline-flex items-center gap-2 text-primary hover:text-foreground transition-colors duration-300 group"
            >
              <span className="text-sm uppercase tracking-[0.2em]">{t('about.cta')}</span>
              <span className="w-8 h-px bg-primary group-hover:w-12 transition-all duration-300" />
            </motion.a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-lg overflow-hidden"
            >
              <img
                src={serviceWeb}
                alt="Web development"
                className="w-full h-64 object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="rounded-lg overflow-hidden mt-12"
            >
              <img
                src={serviceAi}
                alt="AI solutions"
                className="w-full h-64 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
