import { motion } from "framer-motion";
import { Impact, MultiLangContent } from "@/lib/microcms";
import { TrendingUp, Target, Award } from "lucide-react";
import FormattedText from "@/components/FormattedText";

interface ImpactSectionProps {
  impacts: Impact[];
  getTranslatedText: (content: MultiLangContent | string | MultiLangContent[]) => string;
  t: (key: string) => string;
}

const ImpactSection = ({ impacts, getTranslatedText, t }: ImpactSectionProps) => {
  if (!impacts || impacts.length === 0) return null;

  const icons = [TrendingUp, Target, Award];

  return (
    <section className="py-16 px-8 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-12 font-bold text-center"
        >
          {t('project.results')}
        </motion.h2>
        
        <div className="space-y-6">
          {impacts.map((item, index) => {
            const descriptions = Array.isArray(item.description) ? item.description : [item.description];
            const Icon = icons[index % icons.length];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  {descriptions.map((desc, descIndex) => {
                    const text = getTranslatedText(desc);
                    if (!text) return null;
                    
                    // Split by newlines to handle multiple points
                    const points = text.split('\n').filter(p => p.trim());
                    
                    return (
                      <div key={descIndex} className={descIndex > 0 ? 'mt-4' : ''}>
                        {points.map((point, pointIndex) => (
                          <p key={pointIndex} className="text-muted-foreground text-sm md:text-base leading-relaxed mb-2 last:mb-0">
                            <FormattedText text={point} />
                          </p>
                        ))}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
