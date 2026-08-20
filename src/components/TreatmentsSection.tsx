import React, { useState } from 'react';
import { TREATMENTS } from '../data/dentistData';
import { Treatment } from '../types';
import { ArrowUpRight, Check, X, Calendar } from 'lucide-react';

interface TreatmentsSectionProps {
  onOpenBooking: () => void;
}

export const TreatmentsSection: React.FC<TreatmentsSectionProps> = ({ onOpenBooking }) => {
  const [selectedTag, setSelectedTag] = useState<string>('Todos');
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);

  const tags = ['Todos', 'Urgência', 'Estética', 'Reabilitação', 'Harmonização', 'Ortodontia'];

  const filteredTreatments = selectedTag === 'Todos'
    ? TREATMENTS
    : TREATMENTS.filter(t => t.tag === selectedTag);

  return (
    <section id="tratamentos" className="max-w-7xl mx-auto px-6 mb-20">
      
      {/* SECTION HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#C29B72] flex items-center gap-2">
            <span>PROCEDIMENTOS DENTÁRIOS</span>
            <span className="w-2 h-2 rounded-full bg-[#C29B72]"></span>
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mt-2">
            Tratamentos que devolvem confiança
          </h2>
        </div>

        {/* TAG FILTERS */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                selectedTag === tag
                  ? 'bg-[#C29B72] text-white shadow-sm'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200/80'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* TREATMENTS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTreatments.map((treatment) => (
          <div
            key={treatment.id}
            onClick={() => setSelectedTreatment(treatment)}
            className="bg-white rounded-3xl overflow-hidden border border-black/5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer transform hover:-translate-y-1"
          >
            <div>
              {/* CARD IMAGE */}
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <img
                  src={treatment.imageUrl}
                  alt={treatment.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold tracking-wider text-[#C29B72] uppercase shadow-sm">
                  {treatment.tag}
                </span>
              </div>

              {/* CARD CONTENT */}
              <div className="p-6 space-y-3">
                <h3 className="text-lg font-bold text-[#1A1A1A] group-hover:text-[#C29B72] transition-colors flex items-center justify-between">
                  <span>{treatment.title}</span>
                  <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-[#C29B72] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {treatment.shortDesc}
                </p>
              </div>
            </div>

            <div className="px-6 pb-6 pt-2 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#C29B72]">
              <span>Saber mais sobre o tratamento</span>
              <span className="w-6 h-6 rounded-full bg-[#EADEC9]/40 flex items-center justify-center group-hover:bg-[#C29B72] group-hover:text-white transition-colors">
                +
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* TREATMENT DETAIL MODAL */}
      {selectedTreatment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white text-[#2C2A29] p-6 md:p-8 rounded-3xl max-w-2xl w-full relative shadow-2xl border border-gray-100 max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setSelectedTreatment(null)}
              className="absolute top-5 right-5 p-1.5 rounded-full text-gray-400 hover:text-black hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-56 rounded-2xl overflow-hidden mb-6 bg-gray-100">
              <img 
                src={selectedTreatment.imageUrl} 
                alt={selectedTreatment.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <span className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-[#C29B72]">
                {selectedTreatment.tag}
              </span>
            </div>

            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">{selectedTreatment.title}</h3>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              {selectedTreatment.fullDesc}
            </p>

            <div className="space-y-3 mb-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#C29B72]">Principais Benefícios</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedTreatment.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 bg-[#F5F2EC] rounded-xl text-xs font-medium text-gray-700">
                    <Check className="w-4 h-4 text-[#C29B72] shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-100">
              <button
                onClick={() => {
                  setSelectedTreatment(null);
                  onOpenBooking();
                }}
                className="flex-1 bg-[#C29B72] hover:bg-[#A8825A] text-white py-3.5 rounded-2xl font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-md transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>AGENDAR ESTE TRATAMENTO</span>
              </button>
              <button
                onClick={() => setSelectedTreatment(null)}
                className="px-6 py-3.5 border border-gray-200 text-gray-700 hover:bg-gray-50 rounded-2xl font-semibold text-xs uppercase tracking-wider"
              >
                FECHAR
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
