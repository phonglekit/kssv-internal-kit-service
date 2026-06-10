import { useTranslation } from "react-i18next";
import { Project, MultiLangContent } from "@/lib/microcms";
import ChallengeSection from "./sections/ChallengeSection";
import SolutionSection from "./sections/SolutionSection";
import ServiceProvidedSection from "./sections/ServiceProvidedSection";
import ImpactSection from "./sections/ImpactSection";
import TechStackSection from "./sections/TechStackSection";
import { motion } from "framer-motion";
import { BarChart3, TrendingUp, Database } from "lucide-react";

interface DataProjectDetailProps {
  project: Project;
  getTranslatedText: (content: MultiLangContent | string | MultiLangContent[]) => string;
}

const DataProjectDetail = ({ project, getTranslatedText }: DataProjectDetailProps) => {
  const { t } = useTranslation();

  const challenges = Array.isArray(project.challenge) ? project.challenge : [];
  const solutions = Array.isArray(project.solution) ? project.solution : [];

  return (
    <>
      {/* Data Analytics Hero Banner */}
      <div className="relative py-12 px-8 md:px-16 lg:px-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-cyan-500/10" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-emerald-500/30 rounded-lg" />
          <div className="absolute top-20 right-20 w-24 h-24 border-2 border-teal-500/30 rounded-lg" />
          <div className="absolute bottom-10 left-1/3 w-28 h-28 border-2 border-cyan-500/30 rounded-lg" />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-7xl mx-auto"
        >
          <div className="flex items-start gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-8 h-8 text-emerald-500" />
                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
                  Data-Driven Solutions
                </h2>
              </div>
              <p className="text-muted-foreground text-lg">Transforming raw data into actionable insights and strategic advantages</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Impact First for Data - showing results */}
      <ImpactSection 
        impacts={project.impact || []}
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

      <TechStackSection 
        techStack={project.tech_stack || []}
        getTranslatedText={getTranslatedText}
        t={t}
      />

      {/* Featured In - Data Specific */}
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

export default DataProjectDetail;
