import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Loading from "@/components/Loading";
import { MultiLangContent } from "@/lib/microcms";
import { useKitServices } from "@/lib/KitServicesContext";
import { getTranslatedText } from "@/lib/utils";
import ProjectCard from "@/components/ProjectCard";

const DomainDetail = () => {
  const { domainSlug } = useParams<{ domainSlug: string }>();
  const { projects, domains, loading } = useKitServices();
  const { i18n, t } = useTranslation();
  const currentLang = (i18n.language || 'en') as keyof MultiLangContent;

  // Scroll to top when component mounts or domainSlug changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [domainSlug]);

  const domain = domains.find(d => d.slug === domainSlug);
  
  // Filter projects that contain this domain in their domains field
  const domainProjects = projects.filter(project => {
    if (!project.domains) return false;
    const projectDomains = project.domains.split(',').map(d => d.trim());
    return projectDomains.includes(domainSlug || '');
  });

  if (loading) {
    return <Loading />;
  }

  if (!domain) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-foreground">{t('common.notFound')}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-28 pb-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm uppercase tracking-[0.2em]">{t('serviceDetail.backToHome')}</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">
              {t('domains.subtitle')}
            </p>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              {getTranslatedText(domain.name, currentLang)}
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mb-12">
              {getTranslatedText(domain.description, currentLang)}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-8">
              {t('serviceDetail.featuredProjects')} ({domainProjects.length})
            </h2>

            {domainProjects.length === 0 ? (
              <p className="text-muted-foreground">{t('common.noProjects')}</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {domainProjects.map((project, index) => (
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

export default DomainDetail;
