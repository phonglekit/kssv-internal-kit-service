import { motion } from "framer-motion";
import { TechStack, MultiLangContent } from "@/lib/microcms";
import { Code } from "lucide-react";

interface TechStackSectionProps {
  techStack: TechStack[];
  getTranslatedText: (content: MultiLangContent | string | MultiLangContent[]) => string;
  t: (key: string) => string;
}

// Helper function to parse tech stack string
const parseTechStack = (techName: string): { category?: string; technologies: string[] } => {
  // Check if format is "Category: Tech1, Tech2"
  if (techName.includes(':')) {
    const [category, techs] = techName.split(':').map(s => s.trim());
    const technologies = techs.split(',').map(t => t.trim()).filter(Boolean);
    return { category, technologies };
  }
  // Otherwise treat as single tech
  return { technologies: [techName] };
};

const TechStackSection = ({ techStack, getTranslatedText, t }: TechStackSectionProps) => {
  if (!techStack || techStack.length === 0) return null;

  return (
    <section className="py-16 px-8 md:px-16 lg:px-24 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-12 font-bold text-center"
        >
          {t('project.techStack')}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {techStack.map((tech, index) => {
            const techName = typeof tech.name === 'string' ? tech.name : getTranslatedText(tech.name);
            const { category, technologies } = parseTechStack(techName);
            
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
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center p-2">
                    {tech.icon?.url ? (
                      <img
                        src={tech.icon.url}
                        alt="Tech icon"
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <Code className="w-6 h-6 text-primary" />
                    )}
                  </div>
                </div>
                <div className="flex-1">
                  {category && (
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                      {category}
                    </h3>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((techItem, techIndex) => (
                      <span
                        key={techIndex}
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-primary/10 text-primary text-sm font-medium"
                      >
                        <Code className="w-3 h-3" />
                        {techItem}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
