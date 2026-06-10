import { useRef, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Loading from "@/components/Loading";
import { MultiLangContent } from "@/lib/microcms";
import { useKitServices } from "@/lib/KitServicesContext";
import { getTranslatedText as getTranslatedTextUtil } from "@/lib/utils";
import WebProjectDetail from "@/components/ProjectDetails/WebProjectDetail";
import AIProjectDetail from "@/components/ProjectDetails/AIProjectDetail";
import DataProjectDetail from "@/components/ProjectDetails/DataProjectDetail";
import FormattedText from "@/components/FormattedText";
import RelatedProjects from "@/components/RelatedProjects";

const ProjectDetail = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const { serviceSlug, projectId } = useParams<{ serviceSlug: string; projectId: string }>();

  // Scroll to top when component mounts or projectId changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      
      const heroHeight = heroRef.current.offsetHeight;
      const scrolled = window.scrollY;
      // Slower progress: need to scroll 1.5x hero height to reach full effect
      const progress = Math.min(scrolled / (heroHeight * 1.5), 1);
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { projects, loading } = useKitServices();
  const { i18n, t } = useTranslation();
  const currentLang = (i18n.language || 'en') as keyof MultiLangContent;

  const project = projects.find(p => p.slug === projectId);
  
  // Get domains data from KitServices context
  const {  domains } = useKitServices();
  const allDomains = domains || [];
  
  // Parse project domains and match with domain data
  const getProjectDomains = () => {
    if (!project?.domains) return [];
    const domainSlugs = project.domains.split(',').map(s => s.trim());
    return allDomains.filter(domain => domainSlugs.includes(domain.slug));
  };
  
  const projectDomains = getProjectDomains();

  const getTranslatedText = (content: MultiLangContent | string | MultiLangContent[]): string => {
    return getTranslatedTextUtil(content, currentLang);
  };

  // Show loading while data is being fetched
  if (loading) {
    return <Loading />;
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-foreground">{t('common.notFound')}</p>
      </div>
    );
  }

  // Select appropriate detail component based on project category
  const renderProjectDetails = () => {
    const detailProps = { project, getTranslatedText };
    
    const category = Array.isArray(project.category) 
      ? project.category[0] 
      : project.category;
    
    switch (category) {
      case 'WEB':
        return <WebProjectDetail {...detailProps} />;
      case 'AI':
        return <AIProjectDetail {...detailProps} />;
      case 'DATA':
        return <DataProjectDetail {...detailProps} />;
      default:
        return <WebProjectDetail {...detailProps} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* First Hero Section - Thumbnail 1 (Static) */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-end pt-28 pb-16 px-6 md:px-12 lg:px-20 overflow-hidden"
      >
        <div className="absolute inset-0">
          {/* Static thumbnail - no effects */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: `url(${project.thumbnail?.url ?? '/placeholder.svg'})`
            }}
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background/90" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to={`/services/${serviceSlug}`}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm uppercase tracking-[0.2em]">{t('project.backToService')}</span>
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm uppercase tracking-[0.3em] text-primary mb-4"
          >
            {project.category}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display font-extrabold text-4xl md:text-5xl lg:text-7xl text-foreground mb-6"
          >
            {getTranslatedText(project.title)}
          </motion.h1>

          {/* Project Domains */}
          {projectDomains.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-wrap gap-3 mb-6"
            >
              {projectDomains.map((domain, index) => (
                <div
                  key={domain.slug}
                  className="group flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-primary/20 hover:border-primary/50 hover:bg-card transition-all duration-300"
                >
                  {domain.icon?.url && (
                    <img 
                      src={domain.icon.url} 
                      alt={getTranslatedText(domain.name)}
                      className="w-5 h-5 object-contain"
                    />
                  )}
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                    {getTranslatedText(domain.name)}
                  </span>
                </div>
              ))}
            </motion.div>
          )}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-muted-foreground text-lg md:text-xl max-w-3xl mb-6 text-justify"
          >
            <FormattedText text={getTranslatedText(project.summary)} />
          </motion.p>

          <div className="flex flex-wrap gap-6 mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-sm text-muted-foreground mb-2">{t('project.timeline')}</p>
              <p className="text-lg text-foreground font-medium">{project.timeline}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <p className="text-sm text-muted-foreground mb-2">{t('project.status')}</p>
              <p className="text-lg text-foreground font-medium">
                {Array.isArray(project.status) ? project.status[0] : project.status}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Second Hero Section - Duplicate with Scale Effect */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          {/* Duplicate thumbnail with scale effect */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: `url(${project.thumbnail?.url ?? '/placeholder.svg'})`,
              transform: `scale(${1 + scrollProgress * 0.2})`,
              filter: `brightness(${0.9 - scrollProgress * 0.2})`,
              transition: 'transform 0.3s ease-out'
            }}
          />

          {/* Circular reveal mask for thumbnail2 - starts from bottom */}
          {project.thumbnail2?.url && (
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ 
                backgroundImage: `url(${project.thumbnail2.url})`,
                clipPath: `circle(${scrollProgress * 150}% at 50% 100%)`,
                transition: 'clip-path 0.3s ease-out'
              }}
            />
          )}
          
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/40 to-background/60" />
        </div>
      </section>

      {/* Render category-specific detail component */}
      {renderProjectDetails()}

      {/* Related Projects Section */}
      <RelatedProjects currentProject={project} allProjects={projects} />

      <Footer />
    </div>
  );
};

export default ProjectDetail;
