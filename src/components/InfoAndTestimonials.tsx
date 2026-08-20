import React, { useState } from 'react';
import { Award, Sparkles, MapPin, Phone, Smile, Star, Cpu, ChevronLeft, ChevronRight, User } from 'lucide-react';
import { DENTIST_INFO, TESTIMONIALS } from '../data/dentistData';

export const InfoAndTestimonials: React.FC = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const handleNext = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentTestimonialIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const currentTestimonial = TESTIMONIALS[currentTestimonialIndex];

  return (
    <section id="depoimentos" className="max-w-7xl mx-auto px-6 mb-20 grid grid-cols-1 lg:grid-cols-12 gap-6">
      
      {/* SOBRE MIM CARD ESCURO */}
      <div className="lg:col-span-4 bg-[#18181B] text-white p-8 rounded-3xl shadow-xl flex flex-col justify-between space-y-6 relative overflow-hidden border border-white/10">
        <div>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold tracking-tight">Sobre mim</h3>
            <span className="p-2.5 bg-white/10 rounded-full text-[#C29B72]">
              <User className="w-5 h-5" />
            </span>
          </div>

          <p className="text-sm text-gray-300 font-medium leading-relaxed mb-6">
            Cirurgião-Dentista | {DENTIST_INFO.title.split('|')[1]}<br/>
            Especializando em Implantodontia e Prótese dentária, formado na UFPE.
          </p>

          <div className="space-y-4 text-xs text-gray-300 border-t border-white/10 pt-6">
            <div className="flex items-center gap-3">
              <Award className="w-4 h-4 text-[#C29B72] shrink-0" />
              <span>Graduado em Odontologia na UFPE</span>
            </div>
            <div className="flex items-center gap-3">
              <Sparkles className="w-4 h-4 text-[#C29B72] shrink-0" />
              <span>Especialização em Implantodontia e Prótese</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-[#C29B72] shrink-0" />
              <span>Porto de Galinhas, PE</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-[#C29B72] shrink-0" />
              <span>{DENTIST_INFO.phone}</span>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-400">
          <span>Atendimento Humanizado</span>
          <span className="text-[#C29B72] font-semibold">Porto de Galinhas</span>
        </div>
      </div>

      {/* HISTÓRIAS QUE INSPIRAM (DEPOIMENTOS) */}
      <div className="lg:col-span-4 bg-white p-8 rounded-3xl shadow-sm border border-black/5 flex flex-col justify-between min-h-[320px]">
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-[#1A1A1A]">Histórias que inspiram</h3>
            <div className="flex gap-1 text-[#C29B72]">
              {[...Array(currentTestimonial.stars)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
          </div>

          <span className="text-5xl text-[#C29B72] font-serif leading-none block -mb-2">“</span>
          
          <p className="text-sm text-gray-700 leading-relaxed italic my-2">
            {currentTestimonial.comment}
          </p>
        </div>

        <div className="flex items-center justify-between pt-6 border-t border-gray-100 mt-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-gray-200 overflow-hidden relative border-2 border-[#C29B72]/30 shrink-0">
              <img 
                src={currentTestimonial.avatarUrl} 
                alt={currentTestimonial.name} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <p className="text-sm font-bold text-[#1A1A1A]">{currentTestimonial.name}</p>
              <p className="text-xs text-gray-400 font-medium">{currentTestimonial.role}</p>
            </div>
          </div>

          <div className="flex gap-1.5">
            <button 
              onClick={handlePrev} 
              aria-label="Anterior"
              className="p-2 rounded-full border border-gray-200 hover:bg-[#C29B72] hover:text-white transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button 
              onClick={handleNext} 
              aria-label="Próximo"
              className="p-2 rounded-full border border-gray-200 hover:bg-[#C29B72] hover:text-white transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* MÉTRICAS */}
      <div className="lg:col-span-4 grid grid-cols-1 gap-4">
        <div className="bg-[#EADEC9]/50 p-6 rounded-3xl flex flex-col justify-center border border-[#C29B72]/20">
          <Smile className="w-7 h-7 text-[#C29B72] mb-2" />
          <span className="text-4xl font-bold text-[#1A1A1A]">500+</span>
          <span className="text-xs text-gray-700 font-semibold mt-1">Sorrisos transformados com excelência</span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#EADEC9]/50 p-6 rounded-3xl flex flex-col justify-center border border-[#C29B72]/20">
            <Star className="w-6 h-6 text-[#C29B72] mb-2" />
            <span className="text-3xl font-bold text-[#1A1A1A]">5+</span>
            <span className="text-xs text-gray-700 font-semibold mt-1">Anos de prática e estudo constante</span>
          </div>

          <div className="bg-[#EADEC9]/50 p-6 rounded-3xl flex flex-col justify-center border border-[#C29B72]/20">
            <Cpu className="w-6 h-6 text-[#C29B72] mb-2" />
            <span className="text-sm font-bold text-[#1A1A1A]">Tecnologia</span>
            <span className="text-xs text-gray-700 font-semibold mt-1">Digital e precisão 3D</span>
          </div>
        </div>
      </div>

    </section>
  );
};
