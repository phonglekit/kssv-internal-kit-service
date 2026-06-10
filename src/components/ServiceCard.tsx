import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface ServiceCardProps {
  title: string;
  image: string;
  slug: string;
  index: number;
  projectCount?: number;
}

const ServiceCard = ({ title, image, slug, index, projectCount = 0 }: ServiceCardProps) => {
  const { t } = useTranslation();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <Link
        to={`/services/${slug}`}
        className="group block relative overflow-hidden rounded-lg aspect-[4/5]"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-background/40 transition-opacity duration-500 group-hover:bg-background/60" />
        
        {/* Glow effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 glow-shadow" />
        
        {/* Title */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h4 className="font-display text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors duration-300">
            {title}
          </h4>
          {projectCount > 0 && (
            <p className="text-sm text-muted-foreground mt-1">
              {projectCount} {t('services.projects')}
            </p>
          )}
          <div className="h-px w-0 group-hover:w-full bg-primary transition-all duration-500 mt-2" />
        </div>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
