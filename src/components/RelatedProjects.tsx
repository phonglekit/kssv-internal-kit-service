import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Project, MultiLangContent } from "@/lib/microcms";
import { getTranslatedText } from "@/lib/utils";
import ProjectCard from "./ProjectCard";

interface RelatedProjectsProps {
  currentProject: Project;
  allProjects: Project[];
}

const RelatedProjects = ({ currentProject, allProjects }: RelatedProjectsProps) => {
  const { t } = useTranslation();

  // Get current project domains
  const currentDomains = currentProject.domains 
    ? currentProject.domains.split(',').map(d => d.trim())
    : [];

  // Filter related projects:
  // 1. Same domain(s)
  // 2. Not the current project
  // 3. Limit to 3 projects
  const relatedProjects = allProjects
    .filter(project => {
      // Exclude current project
      if (project.slug === currentProject.slug) return false;

      // Get project domains
      const projectDomains = project.domains 
        ? project.domains.split(',').map(d => d.trim())
        : [];

      // Check if has at least one matching domain
      return projectDomains.some(domain => currentDomains.includes(domain));
    })
    .slice(0, 3);

  // Don't render if no related projects
  if (relatedProjects.length === 0) {
    return null;
  }

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-background/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">
            {t('project.relatedProjects')}
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-12 font-bold">
            {t('project.relatedProjectsTitle')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProjects;
