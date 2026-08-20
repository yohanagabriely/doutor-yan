import React from 'react';
import { Calendar, Play, Sparkles, ShieldCheck, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { DENTIST_INFO } from '../data/dentistData';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenClinicTour: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenClinicTour }) => {
  return (
    <section id="inicio" className="max-w-7xl mx-auto px-6 pt-6 pb-12 md:pb-16 relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center overflow-hidden">
      
      {/* TEXT CONTENT */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="lg:col-span-7 space-y-6 z-10"
      >
        <div className="inline-flex items-center gap-2 bg-[#EADEC9]/60 border border-[#C29B72]/30 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#8B6137]">
          <Sparkles className="w-3.5 h-3.5 text-[#C29B72]" />
          <span>Odontologia Estética & Reabilitadora em Porto de Galinhas</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold leading-[1.15] tracking-tight text-[#1A1A1A]">
          Cuidar do seu sorriso é <span className="text-[#C29B72] italic font-serif font-normal">transformar vidas.</span>
        </h1>

        <p className="text-gray-600 text-base md:text-lg max-w-xl leading-relaxed">
          Atendimento personalizado com máxima precisão, tecnologia digital de ponta e materiais de alto padrão para devolver sua autoestima e saúde bucal.
        </p>
        
        {/* ACTION BUTTONS */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <button 
            onClick={onOpenBooking}
            className="bg-[#C29B72] hover:bg-[#A8825A] text-white px-7 py-3.5 rounded-full font-medium text-xs tracking-wider uppercase flex items-center gap-3 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>AGENDAR CONSULTA</span>
            <Calendar className="w-4 h-4" />
          </button>

          <button 
            onClick={onOpenClinicTour}
            className="flex items-center gap-3 text-[#1A1A1A] font-semibold text-xs uppercase tracking-wider hover:text-[#C29B72] px-4 py-3 transition-colors group cursor-pointer"
          >
            <span className="w-9 h-9 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-[#C29B72] group-hover:bg-[#C29B72] group-hover:text-white transition-all">
              <Play className="w-4 h-4 fill-current ml-0.5" />
            </span>
            <span>CONHEÇA NOSSA CLÍNICA</span>
          </button>
        </div>

        {/* TRUST BADGES */}
        <div className="pt-6 border-t border-gray-200/60 grid grid-cols-3 gap-4 max-w-lg">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#C29B72] shrink-0" />
            <span className="text-[11px] font-semibold text-gray-700">CRO-PE 21214</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-[#C29B72] shrink-0" />
            <span className="text-[11px] font-semibold text-gray-700">Formado UFPE</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#C29B72] shrink-0" />
            <span className="text-[11px] font-semibold text-gray-700">Especializando Implante</span>
          </div>
        </div>
      </motion.div>

      {/* DOCTOR IMAGE CONTAINER WITH BACKDROP WATERMARK */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="lg:col-span-5 relative flex justify-center items-end min-h-[420px] md:min-h-[480px] pt-4"
      >
        {/* WATERMARK TEXT */}
        <span className="absolute inset-0 flex items-center justify-center text-[160px] md:text-[220px] font-bold text-[#EADEC9]/30 select-none pointer-events-none font-serif leading-none">
          yg
        </span>

        {/* DOCTOR PORTRAIT CARD */}
        <div className="relative z-10 w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 bg-gradient-to-t from-[#2C2A29]/20 to-transparent">
          <img 
            src={DENTIST_INFO.doctorImage} 
            alt="Dr. Yan Guilherme - Cirurgião Dentista"
            className="w-full h-[440px] md:h-[480px] object-cover object-top brightness-[1.08] contrast-[1.05] hover:scale-105 transition-all duration-700"
            referrerPolicy="no-referrer"
          />

          {/* FLOATING OVERLAY BADGE */}
          <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3.5 rounded-2xl shadow-lg border border-white/40 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-[#1A1A1A]">Dr. Yan Guilherme</p>
              <p className="text-[11px] text-[#C29B72] font-semibold">Cirurgião-Dentista | CRO-PE 21214</p>
            </div>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" title="Atendendo em Porto de Galinhas" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};
