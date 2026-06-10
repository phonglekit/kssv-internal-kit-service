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
import { getTranslatedText as getTranslatedTextUtil } from "@/lib/utils";
import ProjectCard from "@/components/ProjectCard";

const categoryMap: Record<string, { category: 'WEB' | 'AI' | 'DATA' }> = {
  "web": {
    category: "WEB"
  },
  "ai": {
    category: "AI"
  },
  "data": {
    category: "DATA"
  },
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { projects, loading } = useKitServices();
  const { i18n, t } = useTranslation();
  const currentLang = (i18n.language || 'en') as keyof MultiLangContent;

  // Scroll to top when component mounts or slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  
  const info = slug ? categoryMap[slug] : null;
  
  const serviceProjects = info ? projects.filter(p => {
    const categories = Array.isArray(p.category) ? p.category : [p.category];
    const targetCategory = String(info.category).toUpperCase();
    
    return categories.some(cat => String(cat).toUpperCase() === targetCategory);
  }) : [];

  const getTranslatedText = (content: MultiLangContent | string | MultiLangContent[]): string => {
    return getTranslatedTextUtil(content, currentLang);
  };

  // Show loading while data is being fetched
  if (loading) {
    return <Loading />;
  }

  if (!info) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-foreground">{t('common.notFound')}</p>
      </div>
    );
  }

  // Get the appropriate title and description based on slug
  const getTitleKey = () => {
    if (slug === 'web') return 'serviceDetail.webTitle';
    if (slug === 'ai') return 'serviceDetail.aiTitle';
    if (slug === 'data') return 'serviceDetail.dataTitle';
    return 'serviceDetail.webTitle';
  };

  const getDescriptionKey = () => {
    if (slug === 'web') return 'serviceDetail.webDescription';
    if (slug === 'ai') return 'serviceDetail.aiDescription';
    if (slug === 'data') return 'serviceDetail.dataDescription';
    return 'serviceDetail.webDescription';
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-8 md:px-16 lg:px-24 hero-gradient">
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

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm uppercase tracking-[0.3em] text-primary mb-4"
          >
            {t('serviceDetail.featuredProjects')}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-4xl md:text-5xl lg:text-7xl text-foreground mb-6"
          >
            {t(getTitleKey())}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-muted-foreground text-lg md:text-xl max-w-3xl"
          >
            {t(getDescriptionKey())}
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-8 md:px-16 lg:px-24 bg-background">
        <div className="max-w-7xl mx-auto">
          {serviceProjects.length === 0 ? (
            <div className="text-center text-muted-foreground">{t('common.noProjects')}</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
