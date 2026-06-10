import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Loading from "@/components/Loading";
import { MultiLangContent } from "@/lib/microcms";
import { useKitServices } from "@/lib/KitServicesContext";
import ProjectCard from "@/components/ProjectCard";
import { getTranslatedText } from "@/lib/utils";

const AllProjects = () => {
  const { projects, domains, loading } = useKitServices();
  const { i18n, t } = useTranslation();
  const currentLang = (i18n.language || 'en') as keyof MultiLangContent;
  const [filter, setFilter] = useState<string>('ALL');

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const filterOptions = [
    { slug: 'ALL', name: { vi: t('common.all') || 'All', en: t('common.all') || 'All', jp: t('common.all') || 'All' } as MultiLangContent },
    ...domains
  ];

  const filteredProjects = filter === 'ALL' 
    ? projects 
    : projects.filter(p => {
        if (!p.domains) return false;
        const projectDomains = p.domains.split(',');
        return projectDomains.includes(filter);
      });

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-28 pb-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">
              {t('nav.projects')}
            </p>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              {t('project.allProjects')}
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mb-12 text-justify">
              {t('serviceDetail.featuredProjects')}
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            {filterOptions.map((option) => (
              <button
                key={option.slug}
                onClick={() => setFilter(option.slug)}
                className={`px-6 py-2 rounded-full text-sm font-medium uppercase tracking-wider transition-all duration-300 ${
                  filter === option.slug
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-primary/20'
                }`}
              >
                {getTranslatedText(option.name, currentLang)}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-sm text-muted-foreground mb-6">
              {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
            </p>

            {filteredProjects.length === 0 ? (
              <p className="text-muted-foreground">{t('common.noProjects')}</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.slug}
                    project={project}
                    index={index}
                  />
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AllProjects;
