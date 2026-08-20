import React, { useState } from 'react';
import { Calendar, Menu, X, Phone, Zap } from 'lucide-react';
import { DENTIST_INFO } from '../data/dentistData';
import { BrandLogo } from './BrandLogo';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'INÍCIO', href: '#inicio' },
    { label: 'SOBRE', href: '#sobre' },
    { label: 'URGÊNCIA', href: '#urgencia', highlight: true },
    { label: 'TRATAMENTOS', href: '#tratamentos' },
    { label: 'BLOG', href: '#blog' },
    { label: 'DEPOIMENTOS', href: '#depoimentos' },
    { label: 'CONTATO', href: '#contato' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#F5F2EC]/95 backdrop-blur-md border-b border-black/5 transition-all">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* LOGO */}
        <a href="#inicio" className="flex items-center group">
          <BrandLogo variant="light" size="sm" />
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center space-x-7 text-xs font-semibold tracking-wider text-gray-700">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`py-1 relative transition-colors ${
                link.highlight 
                  ? 'text-amber-700 font-extrabold flex items-center gap-1 bg-amber-500/15 px-2.5 py-1 rounded-full border border-amber-500/30 hover:bg-amber-500/25' 
                  : 'hover:text-[#C29B72] after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C29B72] hover:after:w-full after:transition-all'
              }`}
            >
              {link.highlight && <Zap className="w-3.5 h-3.5 fill-amber-500 text-amber-600 animate-pulse" />}
              <span>{link.label}</span>
            </a>
          ))}
        </nav>

        {/* HEADER ACTIONS */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href={`https://wa.me/${DENTIST_INFO.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden xl:flex items-center gap-1.5 text-xs font-medium text-gray-600 hover:text-[#C29B72] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#C29B72]" />
            <span>{DENTIST_INFO.phone}</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="bg-[#C29B72] hover:bg-[#A8825A] text-white px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase flex items-center gap-2 shadow-sm transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>AGENDAR CONSULTA</span>
          </button>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-gray-700 hover:text-[#C29B72] focus:outline-none"
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F5F2EC] border-b border-gray-200/80 px-6 py-6 shadow-xl space-y-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3 text-sm font-semibold text-gray-800">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#C29B72] transition-colors py-1.5 border-b border-gray-200/40"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full bg-[#C29B72] hover:bg-[#A8825A] text-white py-3 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm"
            >
              <Calendar className="w-4 h-4" />
              <span>AGENDAR CONSULTA</span>
            </button>
            <a
              href={`https://wa.me/${DENTIST_INFO.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full border border-[#C29B72] text-[#C29B72] py-2.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
