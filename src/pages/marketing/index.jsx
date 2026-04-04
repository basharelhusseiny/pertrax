import React, { useState } from "react";
import CanvasBackground from "./CanvasBackground";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ApproachSection from "./ApproachSection";
import ServicesSection from "./ServicesSection";
import ProjectModal from "./ProjectModal";
import ChatWidget from "./ChatWidget";
import TestimonialsSection from "../../components/TestimonialsSection";
import LogoSwiper from "../../components/LogoSwiper.jsx";

export default function MarketingPage({ t, lang }) {
  // Use local state only for modal and form data
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    brandingColor: "",
    webFeatures: [],
    socialPlatforms: [],
    generalNotes: "",
  });

  const toggleServiceSelection = (id) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id],
    );
  };

  const openProjectModal = (preselectId = null) => {
    if (preselectId && !selectedServices.includes(preselectId)) {
      setSelectedServices((prev) => [...prev, preselectId]);
    }
    setIsModalOpen(true);
  };

  const handleFormChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const isContactValid = formData.name && formData.email && formData.company;

  return (
    <div
      className="min-h-screen text-white overflow-x-hidden selection:bg-[#1A1AFA] selection:text-white relative"
      style={{
        background: "linear-gradient(180deg, #03030f 0%, #04041e 100%)",
      }}
    >
      <CanvasBackground />

      {/* Premium Background Overlays */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#1A1AFA]/8 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-800/10 blur-[150px] rounded-full animate-pulse delay-700" />
      </div>

      {/* Hero Section */}
      <HeroSection t={t} lang={lang} openProjectModal={openProjectModal} />


      {/* About Section */}
      <AboutSection t={t} lang={lang} />

      {/* Services Section */}
      <ServicesSection
        t={t}
        lang={lang}
        selectedServices={selectedServices}
        openProjectModal={openProjectModal}
      />

      {/* Approach Section */}
      <ApproachSection t={t} lang={lang} />

      {/* Swiper Section */}
      <LogoSwiper />

      {/* <TestimonialsSection lang={lang} /> */}
      {/* Project Modal */}
      <ProjectModal
        t={t}
        lang={lang}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        selectedServices={selectedServices}
        toggleServiceSelection={toggleServiceSelection}
        formData={formData}
        handleFormChange={handleFormChange}
        isContactValid={isContactValid}
      />

      {/* Floating Chat */}
      {/* <ChatWidget t={t} lang={lang} /> */}

      {/* Custom Styles for this page */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(30px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #0A0A0A;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #222;
          border-radius: 10px;
          border: 2px solid #0A0A0A;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #333;
        }
      `,
        }}
      />
    </div>
  );
}
