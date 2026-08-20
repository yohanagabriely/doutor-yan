import React from 'react';
import { Calendar, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface WelcomePopupProps {
  show: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const WelcomePopup: React.FC<WelcomePopupProps> = ({
  show,
  onClose,
  onOpenBooking,
}) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed bottom-6 right-6 md:right-24 bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 max-w-xs z-40 text-center"
        >
          {/* CLOSE BUTTON */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-400 hover:text-black p-1 rounded-full transition-colors"
            aria-label="Fechar"
          >
            <X className="w-4 h-4" />
          </button>

          {/* CALENDAR BADGE */}
          <div className="w-12 h-12 bg-[#EADEC9] rounded-2xl flex items-center justify-center mx-auto mb-3 text-[#C29B72] shadow-sm">
            <Calendar className="w-6 h-6" />
          </div>

          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">
            Bem-vindo!
          </span>

          <h4 className="text-base font-bold text-[#1A1A1A] mt-1">
            Vamos cuidar do seu melhor sorriso?
          </h4>

          <p className="text-xs text-gray-500 mt-1 mb-5 leading-relaxed">
            Agende sua avaliação e descubra o plano ideal para o que você precisa.
          </p>

          <button
            onClick={() => {
              onClose();
              onOpenBooking();
            }}
            className="w-full bg-[#18181B] hover:bg-black text-white text-xs py-3 rounded-xl font-bold tracking-wider uppercase transition-colors shadow-md cursor-pointer"
          >
            AGENDAR AGORA
          </button>

          <button
            onClick={onClose}
            className="text-[11px] text-gray-400 font-semibold tracking-wider block mx-auto mt-3 hover:text-gray-700 hover:underline cursor-pointer"
          >
            TALVEZ DEPOIS
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
