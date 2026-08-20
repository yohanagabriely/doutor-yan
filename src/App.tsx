import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Differentials } from './components/Differentials';
import { AboutSection } from './components/AboutSection';
import { EmergencySection } from './components/EmergencySection';
import { TreatmentsSection } from './components/TreatmentsSection';
import { InfoAndTestimonials } from './components/InfoAndTestimonials';
import { BlogSection } from './components/BlogSection';
import { FaqSection } from './components/FaqSection';
import { LocationAndContact } from './components/LocationAndContact';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { ClinicTourModal } from './components/ClinicTourModal';
import { WelcomePopup } from './components/WelcomePopup';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [showWelcomePopup, setShowWelcomePopup] = useState(true);

  return (
    <div className="bg-[#F5F2EC] text-[#2C2A29] min-h-screen font-sans selection:bg-[#C29B72] selection:text-white relative overflow-x-hidden">
      {/* HEADER NAVBAR */}
      <Header onOpenBooking={() => setIsBookingOpen(true)} />

      {/* MAIN CONTENT LANDING PAGE */}
      <main>
        {/* HERO SECTION */}
        <Hero 
          onOpenBooking={() => setIsBookingOpen(true)} 
          onOpenClinicTour={() => setIsTourOpen(true)} 
        />

        {/* DIFFERENTIATORS / PILLS */}
        <Differentials />

        {/* ABOUT SECTION */}
        <AboutSection />

        {/* EMERGENCY DENTISTRY SECTION (PRONTO ATENDIMENTO) */}
        <EmergencySection onOpenBooking={() => setIsBookingOpen(true)} />

        {/* TREATMENTS GRID */}
        <TreatmentsSection onOpenBooking={() => setIsBookingOpen(true)} />

        {/* INFO CARD, TESTIMONIALS & METRICS */}
        <InfoAndTestimonials />

        {/* DENTAL HEALTH BLOG */}
        <BlogSection />

        {/* FREQUENTLY ASKED QUESTIONS */}
        <FaqSection />

        {/* LOCATION & CONTACT SECTION */}
        <LocationAndContact onOpenBooking={() => setIsBookingOpen(true)} />
      </main>

      {/* FOOTER */}
      <Footer />

      {/* INTERACTIVE MODALS & POPUPS */}
      <AppointmentModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />

      <ClinicTourModal 
        isOpen={isTourOpen} 
        onClose={() => setIsTourOpen(false)} 
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      <WelcomePopup 
        show={showWelcomePopup} 
        onClose={() => setShowWelcomePopup(false)} 
        onOpenBooking={() => setIsBookingOpen(true)} 
      />

      {/* FLOATING WHATSAPP ACTION BUTTON */}
      <WhatsAppButton />
    </div>
  );
}
