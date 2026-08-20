import React from 'react';
import { MessageCircle } from 'lucide-react';
import { DENTIST_INFO } from '../data/dentistData';

export const WhatsAppButton: React.FC = () => {
  return (
    <a
      href={`https://wa.me/${DENTIST_INFO.whatsappNumber}?text=Olá%20Dr.%20Yan,%20gostaria%20de%20agendar%20uma%20consulta!`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-[70] bg-[#C29B72] hover:bg-[#A8825A] text-white p-3.5 rounded-full shadow-2xl transition-all transform hover:scale-110 group flex items-center gap-2 cursor-pointer border-2 border-white/60"
    >
      <MessageCircle className="w-6 h-6 fill-current" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap text-xs font-bold uppercase tracking-wider pl-0 group-hover:pl-1 pr-1">
        Falar no WhatsApp
      </span>
    </a>
  );
};
