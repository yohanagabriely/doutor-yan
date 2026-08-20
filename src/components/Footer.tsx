import React from 'react';
import { DENTIST_INFO } from '../data/dentistData';
import { Phone, MapPin, Mail, ArrowUp } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#18181B] text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* BRAND COLUMN */}
          <div className="md:col-span-5 space-y-4">
            <BrandLogo variant="dark" size="md" />

            <p className="text-xs text-gray-400 max-w-sm leading-relaxed">
              Odontologia estética, reabilitadora, cirúrgica e atendimento de urgência com excelência técnica em Porto de Galinhas, Pernambuco.
            </p>

            <div className="text-xs text-[#C29B72] font-semibold pt-1">
              {DENTIST_INFO.specialties}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C29B72]">Navegação Rápida</h4>
            <ul className="space-y-2 text-xs text-gray-400 font-medium">
              <li><a href="#inicio" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-white transition-colors">Sobre o Doutor</a></li>
              <li><a href="#urgencia" className="text-amber-400 hover:text-amber-300 font-bold transition-colors">Urgência Odontológica</a></li>
              <li><a href="#tratamentos" className="hover:text-white transition-colors">Procedimentos & Tratamentos</a></li>
              <li><a href="#blog" className="hover:text-white transition-colors">Dicas de Saúde Bucal</a></li>
              <li><a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos dos Pacientes</a></li>
              <li><a href="#contato" className="hover:text-white transition-colors">Localização & Contato</a></li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C29B72]">Atendimento</h4>
            <div className="space-y-2.5 text-xs text-gray-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C29B72] shrink-0 mt-0.5" />
                <span>{DENTIST_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C29B72] shrink-0" />
                <span>{DENTIST_INFO.phone}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C29B72] shrink-0" />
                <span>{DENTIST_INFO.email}</span>
              </p>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Dr. Yan Guilherme - Todos os direitos reservados. CRO-PE 21214.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-gray-400 hover:text-[#C29B72] transition-colors cursor-pointer"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
