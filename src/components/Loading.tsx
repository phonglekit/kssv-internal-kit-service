import { motion } from "framer-motion";
import { t } from "i18next";

const Loading = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <motion.div
          className="inline-block"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-muted-foreground text-sm uppercase tracking-[0.2em]"
        >
          {t('common.loading')}
        </motion.p>
      </div>
    </div>
  );
};

export default Loading;
