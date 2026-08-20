import React from 'react';
import { MapPin, Phone, Clock, Mail, MessageCircle, Navigation } from 'lucide-react';
import { DENTIST_INFO } from '../data/dentistData';

interface LocationAndContactProps {
  onOpenBooking: () => void;
}

export const LocationAndContact: React.FC<LocationAndContactProps> = ({ onOpenBooking }) => {
  return (
    <section id="contato" className="max-w-7xl mx-auto px-6 mb-20">
      <div className="bg-[#18181B] text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden border border-white/10">
        
        {/* BACKGROUND DECORATION */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C29B72]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* LEFT: INFO */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#C29B72] flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4" />
                <span>NOSSO ENDEREÇO</span>
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Venha nos fazer uma visita em Porto de Galinhas
              </h2>
              <p className="text-xs md:text-sm text-gray-400 mt-2">
                Ambiente amplo, climatizado, seguro e preparado para oferecer o melhor em odontologia estética e cirúrgica.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2">
              <div className="bg-white/5 p-4 rounded-2xl border border-white/10 space-y-1">
                <div className="flex items-center gap-2 text-[#C29B72] font-bold">
                  <MapPin className="w-4 h-4" />
                  <span>Endereço</span>
                </div>
                <p className="text-gray-300 leading-relaxed pt-1">
                  {DENTIST_INFO.address}
                </p>
              </div>

              <div className="bg-white/5 p-4 rounded-2xl border border-white/10 space-y-1">
                <div className="flex items-center gap-2 text-[#C29B72] font-bold">
                  <Clock className="w-4 h-4" />
                  <span>Horários de Atendimento</span>
                </div>
                <p className="text-gray-300 leading-relaxed pt-1">
                  {DENTIST_INFO.hours}
                </p>
              </div>

              <div className="bg-white/5 p-4 rounded-2xl border border-white/10 space-y-1">
                <div className="flex items-center gap-2 text-[#C29B72] font-bold">
                  <Phone className="w-4 h-4" />
                  <span>Telefone & WhatsApp</span>
                </div>
                <p className="text-gray-300 font-semibold pt-1">
                  {DENTIST_INFO.phone}
                </p>
              </div>

              <div className="bg-white/5 p-4 rounded-2xl border border-white/10 space-y-1">
                <div className="flex items-center gap-2 text-[#C29B72] font-bold">
                  <Mail className="w-4 h-4" />
                  <span>E-mail</span>
                </div>
                <p className="text-gray-300 font-semibold pt-1">
                  {DENTIST_INFO.email}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={`https://wa.me/${DENTIST_INFO.whatsappNumber}?text=Olá%20Dr.%20Yan,%20gostaria%20de%20agendar%20uma%20consulta!`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase flex items-center gap-2 shadow-lg transition-all transform hover:scale-105"
              >
                <MessageCircle className="w-4 h-4" />
                <span>CHAMAR NO WHATSAPP</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="bg-[#C29B72] hover:bg-[#A8825A] text-white px-6 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase flex items-center gap-2 transition-all transform hover:scale-105 cursor-pointer"
              >
                <span>AGENDAR AVALIAÇÃO</span>
              </button>
            </div>
          </div>

          {/* RIGHT: MAP VISUAL CARD */}
          <div className="lg:col-span-5 bg-[#27272A] rounded-2xl p-4 border border-white/10 relative overflow-hidden flex flex-col justify-between min-h-[300px]">
            <div className="relative h-48 rounded-xl overflow-hidden bg-gray-800 border border-white/10 group">
              {/* STYLIZED MAP PLACEHOLDER */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 via-stone-800 to-black p-4 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-[#C29B72]">
                    Google Maps
                  </span>
                  <Navigation className="w-5 h-5 text-[#C29B72] animate-bounce" />
                </div>
                <div className="bg-black/80 backdrop-blur-md p-3 rounded-xl border border-white/10">
                  <p className="text-xs font-bold text-white">Porto de Galinhas, PE</p>
                  <p className="text-[10px] text-gray-400">Próximo às praias principais e centrinho</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between text-xs text-gray-300">
              <span>Como chegar:</span>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(DENTIST_INFO.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C29B72] hover:underline font-semibold flex items-center gap-1"
              >
                <span>Abrir rota no GPS</span>
                <Navigation className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
