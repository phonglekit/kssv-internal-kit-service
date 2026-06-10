import { motion } from "framer-motion";
import { ServiceProvided, MultiLangContent } from "@/lib/microcms";
import { CheckCircle } from "lucide-react";
import FormattedText from "@/components/FormattedText";

interface ServiceProvidedSectionProps {
  services: ServiceProvided[];
  getTranslatedText: (content: MultiLangContent | string | MultiLangContent[]) => string;
  t: (key: string) => string;
}

const ServiceProvidedSection = ({ services, getTranslatedText, t }: ServiceProvidedSectionProps) => {
  if (!services || services.length === 0) return null;

  return (
    <section className="py-16 px-8 md:px-16 lg:px-24 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-12 font-bold text-center"
        >
          {t('project.servicesProvided')}
        </motion.h2>
        
        {services.map((service: ServiceProvided, serviceIndex: number) => {
          const titles = Array.isArray(service.title) ? service.title : [service.title];
          const descriptions = Array.isArray(service.description) ? service.description : [service.description];
          
          return (
            <motion.div
              key={serviceIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
              className="mb-12 last:mb-0"
            >
              {service.image_url && (
                <div className="mb-8 rounded-2xl overflow-hidden max-w-2xl mx-auto">
                  <img
                    src={service.image_url.url}
                    alt="Service illustration"
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {titles.map((_, index) => {
                  const title = getTranslatedText(titles[index]);
                  const description = descriptions[index] ? getTranslatedText(descriptions[index]) : '';
                  
                  if (!title && !description) return null;
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center p-2">
                          {service.icon?.url ? (
                            <img
                              src={service.icon.url}
                              alt="Service icon"
                              className="w-full h-full object-contain"
                            />
                          ) : (
                            <CheckCircle className="w-6 h-6 text-primary" />
                          )}
                        </div>
                      </div>
                      <div className="flex-1">
                        {title && (
                          <h3 className="font-display text-lg md:text-xl text-foreground mb-2 font-semibold">
                            <FormattedText text={title} />
                          </h3>
                        )}
                        {description && (
                          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                            <FormattedText text={description} />
                          </p>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ServiceProvidedSection;
