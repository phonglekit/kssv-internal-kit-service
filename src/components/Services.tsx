import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import ServiceCard from "./ServiceCard";
import serviceWeb from "@/assets/service-web.jpg";
import serviceAi from "@/assets/service-ai.jpg";
import serviceData from "@/assets/service-data.jpg";
import { useProjects } from "@/lib/KitServicesContext";
import { Project } from "@/lib/microcms";

const serviceConfig = [
  {
    titleKey: "services.web",
    image: serviceWeb,
    slug: "web",
    category: "WEB" as const,
  },
  {
    titleKey: "services.ai",
    image: serviceAi,
    slug: "ai",
    category: "AI" as const,
  },
  {
    titleKey: "services.data",
    image: serviceData,
    slug: "data",
    category: "DATA" as const,
  },
];

const Services = () => {
  const { projects } = useProjects();
  const { t } = useTranslation();

  // Group projects by category
  const projectsByCategory = projects.reduce((acc, project) => {
    const categories = Array.isArray(project.category) 
      ? project.category 
      : [project.category];
    
    categories.forEach((category) => {
      const categoryKey = String(category).toUpperCase();
      if (!acc[categoryKey]) {
        acc[categoryKey] = [];
      }
      acc[categoryKey].push(project);
    });
    
    return acc;
  }, {} as Record<string, Project[]>);

  return (
    <section className="py-24 px-8 md:px-16 lg:px-24 hero-gradient" id="services">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4"
        >
          {t('services.subtitle')}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-4"
        >
          {t('services.title')}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-normal text-muted-foreground text-lg max-w-2xl mb-16 text-justify"
        >
          {t('services.description')}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceConfig.map((service, index) => (
            <ServiceCard
              key={service.slug}
              title={t(service.titleKey)}
              image={service.image ?? '/placeholder.svg'}
              slug={service.slug}
              index={index}
              projectCount={projectsByCategory[service.category]?.length || 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
