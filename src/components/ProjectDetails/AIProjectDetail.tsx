import { useTranslation } from "react-i18next";
import { Project, MultiLangContent } from "@/lib/microcms";
import ChallengeSection from "./sections/ChallengeSection";
import SolutionSection from "./sections/SolutionSection";
import ServiceProvidedSection from "./sections/ServiceProvidedSection";
import ImpactSection from "./sections/ImpactSection";
import TechStackSection from "./sections/TechStackSection";
import { motion } from "framer-motion";
import { Brain, Sparkles } from "lucide-react";

interface AIProjectDetailProps {
  project: Project;
  getTranslatedText: (content: MultiLangContent | string | MultiLangContent[]) => string;
}

const AIProjectDetail = ({ project, getTranslatedText }: AIProjectDetailProps) => {
  const { t } = useTranslation();

  const challenges = Array.isArray(project.challenge) ? project.challenge : [];
  const solutions = Array.isArray(project.solution) ? project.solution : [];

  return (
    <>
      {/* AI Hero Banner with Gradient */}
      <div className="relative py-12 px-8 md:px-16 lg:px-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-cyan-500/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1),transparent_50%)]" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-7xl mx-auto flex items-center gap-6"
        >
          <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm">
            <Brain className="w-12 h-12 text-purple-400" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                AI-Powered Innovation
              </h2>
              <Sparkles className="w-6 h-6 text-purple-400 animate-pulse" />
            </div>
            <p className="text-muted-foreground">Leveraging artificial intelligence for transformative solutions</p>
          </div>
        </motion.div>
      </div>

      {/* Tech Stack First for AI - highlighting the technology */}
      <TechStackSection 
        techStack={project.tech_stack || []}
        getTranslatedText={getTranslatedText}
        t={t}
      />

      <ChallengeSection 
        challenges={challenges} 
        getTranslatedText={getTranslatedText}
        t={t}
      />

      <SolutionSection 
        solutions={solutions}
        getTranslatedText={getTranslatedText}
        t={t}
      />

      <ServiceProvidedSection 
        services={project.service_provided || []}
        getTranslatedText={getTranslatedText}
        t={t}
      />

      <ImpactSection 
        impacts={project.impact || []}
        getTranslatedText={getTranslatedText}
        t={t}
      />

      {/* Featured In - AI Specific */}
      {project.featured_in && project.featured_in.length > 0 && (
        <section className="py-16 px-8 md:px-16 lg:px-24 bg-secondary/30">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display text-3xl md:text-4xl text-foreground mb-8"
            >
              {t('project.featuredIn')}
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.featured_in.map((feature, index) => (
                <motion.div
                  key={feature.id || index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="rounded-xl transition-colors group overflow-hidden bg-card border border-border"
                >
                  <div className="w-full aspect-[4/3] overflow-hidden">
                    <img
                      src={feature.image_url?.url || '/placeholder.svg'}
                      alt={getTranslatedText(feature.title) || ''}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                      {getTranslatedText(feature.title)}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {getTranslatedText(feature.description)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default AIProjectDetail;
