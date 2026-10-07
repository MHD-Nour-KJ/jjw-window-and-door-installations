import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ParallaxBanner from './components/ParallaxBanner';
import FeaturesGrid from './components/FeaturesGrid';
import ProjectGallery from './components/ProjectGallery';
import ParallaxBanner2 from './components/ParallaxBanner2';
import Footer from './components/Footer';
import EstimateModal from './components/EstimateModal';
import ServiceDetailModal from './components/ServiceDetailModal';
import ProjectModal from './components/ProjectModal';

export default function App() {
  const [estimateModalOpen, setEstimateModalOpen] = useState(false);
  const [activeServiceModal, setActiveServiceModal] = useState(null);
  const [activeProjectModal, setActiveProjectModal] = useState(null);

  const handleOpenEstimate = () => {
    setEstimateModalOpen(true);
  };

  const handleCloseEstimate = () => {
    setEstimateModalOpen(false);
  };

  const handleOpenServiceModal = (service) => {
    setActiveServiceModal(service);
  };

  const handleCloseServiceModal = () => {
    setActiveServiceModal(null);
  };

  const handleSelectProject = (project) => {
    setActiveProjectModal(project);
  };

  const handleCloseProjectModal = () => {
    setActiveProjectModal(null);
  };

  return (
    <div className="min-h-screen bg-white text-ink flex flex-col font-sans selection:bg-brand-coral selection:text-white">
      {/* 1. Header with Top Bar and Navigation */}
      <Navbar onOpenEstimate={handleOpenEstimate} />

      {/* Main Content */}
      <main className="flex-1">
        {/* 2. Hero Carousel with Parallax Slides (Reference Image 1) */}
        <HeroCarousel onOpenEstimate={handleOpenEstimate} />

        {/* 3. About Section with 2-Column Split & Trust Badges (Reference Image 2) */}
        <AboutSection onOpenEstimate={handleOpenEstimate} />

        {/* 4. Our Services with 3-Tier Interactive Accordions (Reference Image 3) */}
        <ServicesSection 
          onOpenEstimate={handleOpenEstimate} 
          onOpenServiceModal={handleOpenServiceModal} 
        />

        {/* 5. Parallax Banner 1: Revitalize Your Home Today (Reference Image 4) */}
        <ParallaxBanner onOpenEstimate={handleOpenEstimate} />

        {/* 6. 3-Column Features Grid: Precision Craftsmanship (Reference Image 4) */}
        <FeaturesGrid />

        {/* 7. Real Projects & Transformations Showcase (Facebook Field Work) */}
        <ProjectGallery onSelectProject={handleSelectProject} />

        {/* 8. Parallax Banner 2: Get Started with JJW Today (Reference Image 5) */}
        <ParallaxBanner2 onOpenEstimate={handleOpenEstimate} />
      </main>

      {/* 9. Comprehensive Ice-Blue Footer (Reference Image 5) */}
      <Footer onOpenEstimate={handleOpenEstimate} />

      {/* Interactive Modals */}
      <EstimateModal 
        isOpen={estimateModalOpen} 
        onClose={handleCloseEstimate} 
      />

      <ServiceDetailModal 
        service={activeServiceModal} 
        onClose={handleCloseServiceModal} 
        onOpenEstimate={handleOpenEstimate} 
      />

      <ProjectModal 
        project={activeProjectModal} 
        onClose={handleCloseProjectModal} 
        onOpenEstimate={handleOpenEstimate} 
      />
    </div>
  );
}
