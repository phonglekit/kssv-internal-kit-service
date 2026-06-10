import { motion } from "framer-motion";
import { Challenge, MultiLangContent } from "@/lib/microcms";
import FormattedText from "@/components/FormattedText";

interface ChallengeSectionProps {
  challenges: Challenge[];
  getTranslatedText: (content: MultiLangContent | string | MultiLangContent[]) => string;
  t: (key: string) => string;
}

const ChallengeSection = ({ challenges, getTranslatedText, t }: ChallengeSectionProps) => {
  if (!challenges || challenges.length === 0) return null;

  return (
    <section className="py-16 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6"
        >
          {t('project.problem')}
        </motion.h2>

        {challenges.map((challengeItem: Challenge, index: number) => {
          const isReversed = index % 2 === 1;
          const baseDelay = index * 0.2;
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: baseDelay }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 ${isReversed ? 'lg:grid-flow-dense' : ''}`}
            >
              <div className="flex flex-col justify-center">
                <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl text-justify">
                  <FormattedText text={getTranslatedText(challengeItem.description)} />
                </p>
              </div>

              {challengeItem.image_url && (
                <div className={isReversed ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="relative rounded-2xl overflow-hidden">
                    <img
                      src={challengeItem.image_url?.url || '/placeholder.svg'}
                      alt={challengeItem.image_url?.alt || ''}
                      className="w-full h-auto object-cover rounded-2xl"
                    />
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ChallengeSection;
