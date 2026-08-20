import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, X, Sparkles } from 'lucide-react';
import { DENTIST_INFO } from '../data/dentistData';

export const AboutSection: React.FC = () => {
  const [approachModalOpen, setApproachModalOpen] = useState(false);

  return (
    <section id="sobre" className="max-w-7xl mx-auto px-6 mb-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      
      {/* LEFT CONTENT */}
      <div className="lg:col-span-6 space-y-6">
        <span className="text-xs font-bold uppercase tracking-wider text-[#C29B72] flex items-center gap-2">
          <span>SOBRE NÓS</span>
          <span className="w-2 h-2 rounded-full bg-[#C29B72]"></span>
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] leading-tight">
          Excelência em cada detalhe do seu tratamento
        </h2>

        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
          Aqui, cada tratamento é planejado especialmente para você. Unimos conhecimento científico atualizado, tecnologia digital e sensibilidade para entregar resultados que vão muito além da estética: devolvemos confiança e qualidade de vida.
        </p>

        <ul className="space-y-3 pt-1">
          {[
            "Atendimento exclusivo e agendamento sem longas esperas",
            "Fotografia odontológica e simulação de sorriso digital",
            "Estrutura moderna e higienizada em Porto de Galinhas",
            "Transparência total nos custos e etapas do tratamento"
          ].map((point, index) => (
            <li key={index} className="flex items-center gap-3 text-xs md:text-sm font-medium text-gray-700">
              <CheckCircle2 className="w-4 h-4 text-[#C29B72] shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <div className="pt-2">
          <button 
            onClick={() => setApproachModalOpen(true)}
            className="bg-[#C29B72] hover:bg-[#A8825A] text-white px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-md transition-all transform hover:scale-105 cursor-pointer"
          >
            <span>CONHEÇA NOSSA ABORDAGEM</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* RIGHT PHOTO */}
      <div className="lg:col-span-6 relative h-[340px] md:h-[400px] rounded-3xl overflow-hidden shadow-xl border-4 border-white group">
        <img 
          src={DENTIST_INFO.clinicImage} 
          alt="Consultório Dr. Yan Guilherme em Porto de Galinhas" 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
          <div className="text-white space-y-1">
            <span className="text-[11px] font-semibold text-[#C29B72] uppercase tracking-wider">Estrutura Própria</span>
            <h3 className="text-lg font-bold">Consultório Dr. Yan Guilherme</h3>
            <p className="text-xs text-gray-300">Porto de Galinhas - PE</p>
          </div>
        </div>
      </div>

      {/* APPROACH MODAL */}
      {approachModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white text-[#2C2A29] p-8 rounded-3xl max-w-xl w-full relative shadow-2xl border border-gray-100 max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setApproachModalOpen(false)}
              className="absolute top-5 right-5 p-1 rounded-full text-gray-400 hover:text-black hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 text-[#C29B72] mb-4">
              <Sparkles className="w-6 h-6" />
              <span className="text-xs font-bold uppercase tracking-widest">Nossa Metodologia</span>
            </div>

            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">Como funciona a jornada do paciente</h3>

            <div className="space-y-4 text-sm text-gray-600">
              <div className="p-4 bg-[#F5F2EC] rounded-2xl border border-gray-200/60 space-y-1">
                <span className="text-xs font-bold text-[#C29B72]">ETAPA 1</span>
                <h4 className="font-bold text-[#1A1A1A]">Anamnese e Escaneamento Inicial</h4>
                <p className="text-xs text-gray-500">Avaliamos a sua queixa principal, expectativas estéticas e realizamos fotos em estúdio e escaneamento.</p>
              </div>

              <div className="p-4 bg-[#F5F2EC] rounded-2xl border border-gray-200/60 space-y-1">
                <span className="text-xs font-bold text-[#C29B72]">ETAPA 2</span>
                <h4 className="font-bold text-[#1A1A1A]">Digital Smile Design (DSD)</h4>
                <p className="text-xs text-gray-500">Planejamos o seu novo sorriso no computador e apresentamos uma simulação para você visualizar antes de iniciar.</p>
              </div>

              <div className="p-4 bg-[#F5F2EC] rounded-2xl border border-gray-200/60 space-y-1">
                <span className="text-xs font-bold text-[#C29B72]">ETAPA 3</span>
                <h4 className="font-bold text-[#1A1A1A]">Execução Guiada e Sem Dor</h4>
                <p className="text-xs text-gray-500">Utilizamos anestesia computadorizada e materiais nobres importados para sua total tranquilidade.</p>
              </div>
            </div>

            <button 
              onClick={() => setApproachModalOpen(false)}
              className="mt-6 w-full bg-[#18181B] hover:bg-black text-white py-3 rounded-2xl font-semibold text-xs tracking-wider uppercase transition-colors"
            >
              ENTENDI, FECHAR
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
