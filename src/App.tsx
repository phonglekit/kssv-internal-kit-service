import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "@/lib/i18n";
import { KitServicesProvider } from "@/lib/KitServicesContext";
import Index from "./pages/Index";
import ServiceDetail from "./pages/ServiceDetail";
import ProjectDetail from "./pages/ProjectDetail";
import DomainDetail from "./pages/DomainDetail";
import AllProjects from "./pages/AllProjects";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <I18nextProvider i18n={i18n}>
    <QueryClientProvider client={queryClient}>
      <KitServicesProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/services/:slug" element={<ServiceDetail />} />
                <Route path="/services/:serviceSlug/:projectId" element={<ProjectDetail />} />
                <Route path="/domains/:domainSlug" element={<DomainDetail />} />
                <Route path="/projects" element={<AllProjects />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
      </KitServicesProvider>
    </QueryClientProvider>
  </I18nextProvider>
);

export default App;
