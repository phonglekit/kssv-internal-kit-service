import { createContext, useContext, ReactNode, useEffect, useState } from 'react';
import { 
  fetchProjects, 
  KitServicesResponse, 
  extractProjects, 
  extractGeneralContent,
  Project,
  Domain,
  Certificate,
  Partner
} from './microcms';

interface KitServicesContextType {
  projects: Project[];
  domains: Domain[];
  certificates: Certificate[];
  partners: Partner[];
  loading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}

const KitServicesContext = createContext<KitServicesContextType | undefined>(undefined);

export const KitServicesProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<KitServicesResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const loadData = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetchProjects();
      setData(response);
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Failed to load data');
      setError(error);
      console.error('Failed to fetch from MicroCMS:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const projects = data ? extractProjects(data) : [];
  const generalContent = data ? extractGeneralContent(data) : undefined;
  const domains = generalContent?.domains || [];
  const certificates = generalContent?.certificates || [];
  const partners = generalContent?.partners || [];

  return (
    <KitServicesContext.Provider 
      value={{ 
        projects, 
        domains, 
        certificates, 
        partners, 
        loading, 
        error,
        refetch: loadData
      }}
    >
      {children}
    </KitServicesContext.Provider>
  );
};

export const useKitServices = () => {
  const context = useContext(KitServicesContext);
  if (context === undefined) {
    throw new Error('useKitServices must be used within a KitServicesProvider');
  }
  return context;
};

// Convenience hooks
export const useProjects = () => {
  const { projects, loading, error } = useKitServices();
  return { projects, loading, error };
};

export const useDomains = () => {
  const { domains, loading, error } = useKitServices();
  return { domains, loading, error };
};

export const useCertificates = () => {
  const { certificates, loading, error } = useKitServices();
  return { certificates, loading, error };
};

export const usePartners = () => {
  const { partners, loading, error } = useKitServices();
  return { partners, loading, error };
};
