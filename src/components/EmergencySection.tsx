import React, { useState } from 'react';
import { AlertCircle, Zap, ShieldAlert, PhoneCall, ChevronRight, MessageCircle, HeartPulse, Stethoscope } from 'lucide-react';
import { DENTIST_INFO } from '../data/dentistData';

interface EmergencySectionProps {
  onOpenBooking: () => void;
}

export const EmergencySection: React.FC<EmergencySectionProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<'dor' | 'fratura'>('dor');

  const emergencyWhatsappUrl = (subtopic: string) => {
    const text = `Olá Dr. Yan! Estou com uma URGÊNCIA ODONTOLÓGICA (${subtopic}) em Porto de Galinhas e preciso de atendimento rápido.`;
    return `https://wa.me/${DENTIST_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="urgencia" className="max-w-7xl mx-auto px-6 mb-20">
      <div className="bg-gradient-to-br from-[#18181B] via-[#242428] to-[#18181B] rounded-3xl p-6 md:p-10 text-white shadow-2xl border border-amber-500/30 relative overflow-hidden">
        
        {/* BACKGROUND GLOW DECORATION */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#C29B72]/10 rounded-full blur-3xl pointer-events-none" />

        {/* HEADER BADGE & TITLE */}
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-300 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Zap className="w-4 h-4 fill-amber-400 text-amber-400 animate-pulse" />
              <span>Pronto Atendimento de Urgência</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              Urgência Odontológica em Porto de Galinhas
            </h2>
            <p className="text-xs md:text-sm text-gray-300 max-w-2xl leading-relaxed">
              Está com dor intensa ou sofreu uma fratura no dente? Nosso consultório oferece acolhimento prioritário para eliminar seu desconforto e salvar seu dente imediatamente.
            </p>
          </div>

          <a
            href={emergencyWhatsappUrl('Atendimento de Urgência')}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold px-6 py-4 rounded-2xl text-xs uppercase tracking-wider flex items-center gap-3 shadow-lg shadow-amber-500/20 transition-all transform hover:scale-105 active:scale-95"
          >
            <PhoneCall className="w-4 h-4 animate-bounce" />
            <span>ACIONAR URGÊNCIA AGORA</span>
          </a>
        </div>

        {/* SUBTOPICS SELECTOR TABS */}
        <div className="relative z-10 pt-8">
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <button
              onClick={() => setActiveTab('dor')}
              className={`flex-1 p-4 rounded-2xl border text-left transition-all flex items-center gap-4 cursor-pointer ${
                activeTab === 'dor'
                  ? 'bg-amber-500/15 border-amber-500 text-white shadow-lg'
                  : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              <div className={`p-3 rounded-xl ${activeTab === 'dor' ? 'bg-amber-500 text-slate-950' : 'bg-white/10 text-white'}`}>
                <HeartPulse className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">Subtópico 1</span>
                <h3 className="font-bold text-base md:text-lg text-white">Dor de Dente Intense</h3>
                <p className="text-xs text-gray-400">Odontalgia aguda, pulpite e abcesso</p>
              </div>
            </button>

            <button
              onClick={() => setActiveTab('fratura')}
              className={`flex-1 p-4 rounded-2xl border text-left transition-all flex items-center gap-4 cursor-pointer ${
                activeTab === 'fratura'
                  ? 'bg-amber-500/15 border-amber-500 text-white shadow-lg'
                  : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              <div className={`p-3 rounded-xl ${activeTab === 'fratura' ? 'bg-amber-500 text-slate-950' : 'bg-white/10 text-white'}`}>
                <ShieldAlert className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">Subtópico 2</span>
                <h3 className="font-bold text-base md:text-lg text-white">Fratura Dentária e Trauma</h3>
                <p className="text-xs text-gray-400">Dente quebrado, lascado ou trauma facial</p>
              </div>
            </button>
          </div>

          {/* TAB 1: DOR DE DENTE */}
          {activeTab === 'dor' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10 animate-in fade-in duration-300">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
                  <AlertCircle className="w-4 h-4" />
                  <span>Sintomas Comuns: Dor pulsátil, sensibilidade ao frio/quente, inchaço gengival</span>
                </div>

                <h3 className="text-2xl font-bold text-white">
                  O que fazer em caso de Dor de Dente Aguda?
                </h3>

                <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                  A dor de dente severa geralmente indica inflamação ou infecção na polpa do dente (nervos). Tentar adiar o atendimento pode agravar o quadro e espalhar a infecção. O Dr. Yan Guilherme realiza a intervenção de emergência para analgesia imediata.
                </p>

                <div className="space-y-2.5 pt-2">
                  <h4 className="text-xs font-bold text-[#C29B72] uppercase tracking-wider">Primeiros Socorros Imediatos:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-300">
                    <li className="flex items-center gap-2 bg-black/30 p-2.5 rounded-xl border border-white/5">
                      <ChevronRight className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>Faça bochecho suave com água morna e sal</span>
                    </li>
                    <li className="flex items-center gap-2 bg-black/30 p-2.5 rounded-xl border border-white/5">
                      <ChevronRight className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>Use fio dental para remover restos de alimento</span>
                    </li>
                    <li className="flex items-center gap-2 bg-black/30 p-2.5 rounded-xl border border-white/5">
                      <ChevronRight className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>NÃO coloque remédios direto na gengiva</span>
                    </li>
                    <li className="flex items-center gap-2 bg-black/30 p-2.5 rounded-xl border border-white/5">
                      <ChevronRight className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>Aplique compressa gelada por fora da bochecha</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <a
                    href={emergencyWhatsappUrl('Dor de Dente')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider flex items-center gap-2 shadow-md transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Falar sobre Dor de Dente no WhatsApp</span>
                  </a>
                  <button
                    onClick={onOpenBooking}
                    className="text-xs font-semibold text-gray-300 hover:text-white underline underline-offset-4"
                  >
                    Agendar consulta prioritária
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#222226] p-6 rounded-2xl border border-white/10 space-y-4 text-xs text-gray-300">
                <div className="flex items-center gap-2 text-[#C29B72] font-bold text-sm">
                  <Stethoscope className="w-5 h-5" />
                  <span>Tratamento em Consultório</span>
                </div>
                <p>
                  No consultório, realizamos exame minucioso e teste de vitalidade pulpar para identificar a origem exata da dor.
                </p>
                <div className="space-y-2 border-t border-white/10 pt-3">
                  <div className="flex justify-between font-semibold text-white">
                    <span>• Anestesia Computadorizada</span>
                    <span className="text-amber-400">Sem dor</span>
                  </div>
                  <div className="flex justify-between font-semibold text-white">
                    <span>• Remoção da Cárie/Infecção</span>
                    <span className="text-amber-400">Imediato</span>
                  </div>
                  <div className="flex justify-between font-semibold text-white">
                    <span>• Curativo / Abertura de Canal</span>
                    <span className="text-amber-400">Alívio em minutos</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: FRATURA DENTÁRIA */}
          {activeTab === 'fratura' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10 animate-in fade-in duration-300">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
                  <ShieldAlert className="w-4 h-4" />
                  <span>Situações: Dente quebrado em alimentos duros, acidentes, quedas ou pancadas</span>
                </div>

                <h3 className="text-2xl font-bold text-white">
                  O que fazer se o Dente Fraturar ou Quebrar?
                </h3>

                <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                  Uma fratura dentária expõe as camadas internas do dente e exige atendimento imediato para recolar o pedaço, proteger a gengiva e restabelecer a estética e a função mastigatória sem sequelas.
                </p>

                <div className="space-y-2.5 pt-2">
                  <h4 className="text-xs font-bold text-[#C29B72] uppercase tracking-wider">Instruções para Salvar o Dente:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-300">
                    <li className="flex items-center gap-2 bg-black/30 p-2.5 rounded-xl border border-white/5">
                      <ChevronRight className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>Guarde o fragmento quebrado em leite ou soro</span>
                    </li>
                    <li className="flex items-center gap-2 bg-black/30 p-2.5 rounded-xl border border-white/5">
                      <ChevronRight className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>Se houver sangramento, pressione gaze limpa</span>
                    </li>
                    <li className="flex items-center gap-2 bg-black/30 p-2.5 rounded-xl border border-white/5">
                      <ChevronRight className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>Não lixe nem tente colar por conta própria</span>
                    </li>
                    <li className="flex items-center gap-2 bg-black/30 p-2.5 rounded-xl border border-white/5">
                      <ChevronRight className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>Procure o consultório nas primeiras 2 a 4 horas</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <a
                    href={emergencyWhatsappUrl('Fratura Dentária')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider flex items-center gap-2 shadow-md transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Falar sobre Fratura Dentária no WhatsApp</span>
                  </a>
                  <button
                    onClick={onOpenBooking}
                    className="text-xs font-semibold text-gray-300 hover:text-white underline underline-offset-4"
                  >
                    Agendar restauração de emergência
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#222226] p-6 rounded-2xl border border-white/10 space-y-4 text-xs text-gray-300">
                <div className="flex items-center gap-2 text-[#C29B72] font-bold text-sm">
                  <Stethoscope className="w-5 h-5" />
                  <span>Soluções para Fratura</span>
                </div>
                <p>
                  Avaliamos a profundidade da fratura. Na maioria dos casos, restauramos perfeitamente o dente no mesmo dia.
                </p>
                <div className="space-y-2 border-t border-white/10 pt-3">
                  <div className="flex justify-between font-semibold text-white">
                    <span>• Colagem do Fragmento Dental</span>
                    <span className="text-amber-400">Bio-idêntico</span>
                  </div>
                  <div className="flex justify-between font-semibold text-white">
                    <span>• Restauração Estética em Resina</span>
                    <span className="text-amber-400">Acabamento invisível</span>
                  </div>
                  <div className="flex justify-between font-semibold text-white">
                    <span>• Faceta ou Coroa Provisória</span>
                    <span className="text-amber-400">Proteção total</span>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
