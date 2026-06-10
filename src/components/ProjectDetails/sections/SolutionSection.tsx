import { motion } from "framer-motion";
import { Solution, ImageAsset, MultiLangContent } from "@/lib/microcms";
import FormattedText from "@/components/FormattedText";

interface SolutionSectionProps {
  solutions: Solution[];
  getTranslatedText: (content: MultiLangContent | string | MultiLangContent[]) => string;
  t: (key: string) => string;
}

const SolutionSection = ({ solutions, getTranslatedText, t }: SolutionSectionProps) => {
  if (!solutions || solutions.length === 0) return null;

  return (
    <section className="py-16 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
             {solutions[0]?.solution_images && solutions[0].solution_images.length > 0 && (
                solutions[0].solution_images.slice(0, 4).map((image: ImageAsset, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                    className="relative rounded-xl overflow-hidden p-2"
                  >
                    <img
                      src={image.url}
                      alt={image.alt || ''}
                      className="w-full h-auto object-contain rounded-lg"
                    />
                  </motion.div>
                ))
            )}
            <div className="flex flex-col justify-center">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6"
              >
                {t('project.solutionTitle')}
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4"
              >
                <p className="text-muted-foreground text-lg leading-relaxed text-justify">
                  <FormattedText text={getTranslatedText(solutions[0]?.description)} />
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;
