import React, { useState } from 'react';
import { FAQS } from '../data/dentistData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIdx(openIdx === index ? null : index);
  };

  return (
    <section className="max-w-5xl mx-auto px-6 mb-20">
      <div className="text-center mb-10 space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-[#C29B72] inline-flex items-center gap-2">
          <HelpCircle className="w-4 h-4 text-[#C29B72]" />
          <span>DÚVIDAS FREQUENTES</span>
        </span>
        <h2 className="text-3xl font-bold text-[#1A1A1A]">
          Perguntas Frequentes dos Pacientes
        </h2>
        <p className="text-xs text-gray-500 max-w-md mx-auto">
          Tire suas dúvidas antes de agendar a sua primeira consulta em Porto de Galinhas.
        </p>
      </div>

      <div className="space-y-3">
        {FAQS.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-black/5 shadow-sm overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-5 text-left font-bold text-sm text-[#1A1A1A] flex items-center justify-between hover:text-[#C29B72] transition-colors cursor-pointer"
              >
                <span>{faq.question}</span>
                <ChevronDown className={`w-4 h-4 text-[#C29B72] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-xs text-gray-600 leading-relaxed border-t border-gray-100/80 animate-in fade-in duration-200">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
