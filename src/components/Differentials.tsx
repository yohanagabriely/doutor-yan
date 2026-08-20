import React from 'react';
import { Sparkles, ShieldCheck, Smile, Cpu, HeartHandshake } from 'lucide-react';

export const Differentials: React.FC = () => {
  const differentialsList = [
    { icon: Sparkles, title: "Estética Dental", desc: "Harmonia, beleza e naturalidade" },
    { icon: ShieldCheck, title: "Reabilitação Oral", desc: "Recupere função e autoestima" },
    { icon: Smile, title: "Implantes Dentários", desc: "Soluções modernas e seguras" },
    { icon: Cpu, title: "Tecnologia Avançada", desc: "Precisão, conforto e resultados" },
    { icon: HeartHandshake, title: "Atendimento Humanizado", desc: "Você no centro de tudo" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 mb-16 md:mb-20">
      <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-sm border border-black/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-center md:text-left">
        {differentialsList.map((item, idx) => (
          <div 
            key={idx} 
            className="flex flex-col md:flex-row items-center md:items-start gap-3 lg:border-r lg:last:border-0 border-gray-200/60 lg:pr-4 group hover:-translate-y-0.5 transition-transform"
          >
            <div className="w-10 h-10 rounded-xl bg-[#EADEC9]/50 flex items-center justify-center shrink-0 group-hover:bg-[#C29B72] group-hover:text-white transition-colors">
              <item.icon className="w-5 h-5 text-[#C29B72] group-hover:text-white transition-colors" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#1A1A1A]">{item.title}</h4>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
