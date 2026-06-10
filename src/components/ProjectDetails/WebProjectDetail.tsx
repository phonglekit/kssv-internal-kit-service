import { useTranslation } from "react-i18next";
import { Project, MultiLangContent } from "@/lib/microcms";
import ChallengeSection from "./sections/ChallengeSection";
import SolutionSection from "./sections/SolutionSection";
import ServiceProvidedSection from "./sections/ServiceProvidedSection";
import ImpactSection from "./sections/ImpactSection";
import TechStackSection from "./sections/TechStackSection";
import { motion } from "framer-motion";
import { Globe, Layout, Users } from "lucide-react";

interface WebProjectDetailProps {
  project: Project;
  getTranslatedText: (content: MultiLangContent | string | MultiLangContent[]) => string;
}

const WebProjectDetail = ({ project, getTranslatedText }: WebProjectDetailProps) => {
  const { t } = useTranslation();

  const challenges = Array.isArray(project.challenge) ? project.challenge : [];
  const solutions = Array.isArray(project.solution) ? project.solution : [];

  return (
    <>
      {/* Web/UI Hero Banner */}
      <div className="relative py-12 px-8 md:px-16 lg:px-24 overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-7xl mx-auto"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="p-4 rounded-2xl bg-primary/10 backdrop-blur-sm">
                <Layout className="w-12 h-12 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Web Platform Development
                </h2>
                <p className="text-muted-foreground mt-2">Crafting exceptional digital experiences with modern technology</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

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

      <TechStackSection 
        techStack={project.tech_stack || []}
        getTranslatedText={getTranslatedText}
        t={t}
      />

      {/* Featured In */}
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
              {project.featured_in.map((feature, index) => {
                return (
                  <motion.div
                    key={feature.id || index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="rounded-xl transition-colors group overflow-hidden"
                  >
                    {feature.image_url?.url && (
                      <div className="w-full aspect-[4/3] overflow-hidden">
                        <img
                          src={feature.image_url?.url || '/placeholder.svg'}
                          alt={getTranslatedText(feature.title) || ''}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                        {getTranslatedText(feature.title)}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {getTranslatedText(feature.description)}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default WebProjectDetail;
