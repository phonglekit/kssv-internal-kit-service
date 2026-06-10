import { createContext, useContext, ReactNode } from 'react';
import { Project } from './microcms';
import { useKitServices } from './KitServicesContext';

interface ProjectsContextType {
  projects: Project[];
  loading: boolean;
  error: Error | null;
}

const ProjectsContext = createContext<ProjectsContextType | undefined>(undefined);

export const ProjectsProvider = ({ children }: { children: ReactNode }) => {
  const { projects, loading, error } = useKitServices();

  return (
    <ProjectsContext.Provider value={{ projects, loading, error }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjects = () => {
  const context = useContext(ProjectsContext);
  if (context === undefined) {
    throw new Error('useProjects must be used within a ProjectsProvider');
  }
  return context;
};
