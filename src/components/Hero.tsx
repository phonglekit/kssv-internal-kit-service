import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const { t } = useTranslation();
  
  return (
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Tech background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 overlay-dark" />
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-12 bg-muted-foreground/30" />
        <div className="w-2 h-2 rounded-full border border-muted-foreground/50" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 px-8 md:px-16 lg:px-24 max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-sm uppercase tracking-[0.3em] text-primary mb-6"
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-foreground mb-8"
        >
          {t('hero.title1')}
          <br />
          <span className="text-gradient">{t('hero.title2')}</span> &
          <br />
          {t('hero.title3')}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="font-normal text-muted-foreground text-lg md:text-xl max-w-2xl"
        >
          {t('hero.description')}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="font-extralight text-muted-foreground/60 text-sm mt-4"
        >
          {t('hero.location')}
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
