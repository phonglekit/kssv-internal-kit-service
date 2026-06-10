import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Project, MultiLangContent } from "@/lib/microcms";
import { getTranslatedText } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import FormattedText from "@/components/FormattedText";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const ProjectCard = ({ project, index = 0 }: ProjectCardProps) => {
  const { i18n } = useTranslation();
  const currentLang = (i18n.language || 'en') as keyof MultiLangContent;
  
  const category = Array.isArray(project.category) ? project.category[0] : project.category;
  
  // Get category color
  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'WEB':
        return 'bg-blue-500/10 text-blue-500 hover:bg-blue-500/20';
      case 'AI':
        return 'bg-purple-500/10 text-purple-500 hover:bg-purple-500/20';
      case 'DATA':
        return 'bg-green-500/10 text-green-500 hover:bg-green-500/20';
      default:
        return 'bg-primary/10 text-primary hover:bg-primary/20';
    }
  };

  // Get domains as array
  const domains = project.domains ? project.domains.split(',').map(d => d.trim()) : [];

  // Get service slug based on category
  const getServiceSlug = (cat: string) => {
    switch (cat) {
      case 'WEB':
        return 'web';
      case 'AI':
        return 'ai';
      case 'DATA':
        return 'data';
      default:
        return 'web';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link
        to={`/services/${getServiceSlug(category)}/${project.slug}`}
        className="group block relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 h-full"
      >
        {/* Thumbnail */}
        {
          <div className="aspect-video overflow-hidden">
            <img
              src={project.thumbnail?.url ?? '/placeholder.svg'}
              alt={project.thumbnail?.alt || getTranslatedText(project.title, currentLang)}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        }

        {/* Content */}
        <div className="p-6 flex flex-col h-[280px]">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {/* Category Badge */}
            <Badge variant="secondary" className={getCategoryColor(category)}>
              {category}
            </Badge>

            {/* Domain Badges */}
            {domains.slice(0, 3).map((domain) => (
              <Badge
                key={domain}
                variant="outline"
                className="text-xs"
              >
                {domain}
              </Badge>
            ))}
            {domains.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{domains.length - 3}
              </Badge>
            )}
          </div>

          {/* Title */}
          <h3 className="font-display text-xl md:text-2xl text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {getTranslatedText(project.title, currentLang)}
          </h3>

          {/* Summary - Fixed height with ellipsis */}
          <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-grow overflow-hidden">
            {getTranslatedText(project.summary, currentLang)}
          </p>

          {/* Timeline & Status */}
          <div className="flex items-center gap-4 text-xs text-muted-foreground mt-auto">
            {project.timeline && (
              <span>{project.timeline}</span>
            )}
            {project.status && (
              <>
                <span>•</span>
                <span>{Array.isArray(project.status) ? project.status[0] : project.status}</span>
              </>
            )}
          </div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
