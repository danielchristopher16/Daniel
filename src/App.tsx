import { useState } from 'react';
import type { ShowcaseProject } from './data/siteConfig';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { DifferentialsSection } from './components/DifferentialsSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { BriefingModal } from './components/BriefingModal';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ShowcaseProject | null>(
    null
  );
  const [briefingOpen, setBriefingOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<
    string | undefined
  >(undefined);

  const handleOpenBriefing = (service?: string) => {
    setPreselectedService(service);
    setBriefingOpen(true);
  };

  const handleRequestSimilarProject = (category: string) => {
    setSelectedProject(null);
    handleOpenBriefing(category);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header onOpenBriefing={handleOpenBriefing} />

      <main>
        <Hero onOpenBriefing={handleOpenBriefing} />
        <DifferentialsSection />
        <PortfolioSection onSelectProject={setSelectedProject} />
        <ServicesSection onOpenBriefing={handleOpenBriefing} />
        <ProcessSection />
        <ContactSection onOpenBriefing={handleOpenBriefing} />
      </main>

      <Footer onOpenBriefing={handleOpenBriefing} />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onRequestSimilar={handleRequestSimilarProject}
      />

      <BriefingModal
        isOpen={briefingOpen}
        initialService={preselectedService}
        onClose={() => setBriefingOpen(false)}
      />
    </div>
  );
}
