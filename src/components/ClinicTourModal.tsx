import React from 'react';
import { X, Play, Shield, Sparkles, MapPin, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { DENTIST_INFO } from '../data/dentistData';

interface ClinicTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const ClinicTourModal: React.FC<ClinicTourModalProps> = ({
  isOpen,
  onClose,
  onOpenBooking,
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="bg-[#18181B] text-white p-6 sm:p-8 rounded-3xl max-w-3xl w-full relative shadow-2xl border border-white/10"
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-gray-400 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-[#C29B72] text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Tour Virtual do Consultório</span>
          </div>

          <h3 className="text-2xl font-bold text-white mb-4">
            Conheça o espaço do Dr. Yan Guilherme
          </h3>

          {/* SIMULATED HIGH END VIDEO PREVIEW */}
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden bg-black border border-white/10 group mb-6">
            <img
              src={DENTIST_INFO.clinicImage}
              alt="Consultório Dr. Yan Guilherme"
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            
            <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-[#C29B72] text-white flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform">
                <Play className="w-7 h-7 fill-current ml-1" />
              </div>
              <p className="text-sm font-bold mt-4 text-white drop-shadow">
                Assistir Apresentação do Consultório
              </p>
              <p className="text-xs text-gray-300 mt-1 max-w-sm">
                Ambiente projetado em Porto de Galinhas focado no conforto acústico, térmico e segurança dos procedimentos.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-gray-300 mb-6">
            <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#C29B72] shrink-0" />
              <span>Biossegurança rigorosa nível hospitalar</span>
            </div>
            <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#C29B72] shrink-0" />
              <span>Equipamentos de raio-x 3D digital</span>
            </div>
            <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#C29B72] shrink-0" />
              <span>Fácil estacionamento em Porto de Galinhas</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="bg-[#C29B72] hover:bg-[#A8825A] text-white py-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-colors cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>AGENDAR UMA VISITA PRESENCIAL</span>
            </button>
            <button
              onClick={onClose}
              className="px-6 py-3 border border-white/20 text-gray-300 hover:text-white rounded-xl font-semibold text-xs uppercase tracking-wider"
            >
              Fechar
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
