import React, { useState } from 'react';
import { Calendar, X, CheckCircle, Send, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { DENTIST_INFO, TREATMENTS } from '../data/dentistData';
import { AppointmentFormData } from '../types';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    whatsapp: '',
    email: '',
    treatment: TREATMENTS[0].title,
    preferredShift: 'tarde',
    preferredDate: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendWhatsApp = () => {
    const text = `Olá Dr. Yan! Gostaria de agendar uma avaliação:%0A%0A*Nome:* ${encodeURIComponent(formData.fullName)}%0A*WhatsApp:* ${encodeURIComponent(formData.whatsapp)}%0A*Tratamento:* ${encodeURIComponent(formData.treatment)}%0A*Turno de Preferência:* ${encodeURIComponent(formData.preferredShift.toUpperCase())}%0A*Data Preferida:* ${encodeURIComponent(formData.preferredDate || 'A combinar')}%0A*Observações:* ${encodeURIComponent(formData.notes || 'Nenhuma')}`;
    
    window.open(`https://wa.me/${DENTIST_INFO.whatsappNumber}?text=${text}`, '_blank');
    onClose();
    setSubmitted(false);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 10 }}
          className="bg-[#18181B] text-white p-6 sm:p-8 rounded-3xl max-w-md w-full relative shadow-2xl border border-white/10 my-8"
        >
          {/* CLOSE BUTTON */}
          <button
            onClick={() => {
              onClose();
              setSubmitted(false);
            }}
            className="absolute top-5 right-5 text-gray-400 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div>
              <div className="flex justify-center mb-3 text-[#C29B72]">
                <div className="w-12 h-12 rounded-2xl bg-[#C29B72]/15 flex items-center justify-center border border-[#C29B72]/30">
                  <Calendar className="w-6 h-6" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-center tracking-tight">Agende sua consulta</h3>
              <p className="text-xs text-gray-400 text-center mt-1 mb-6">
                Preencha seus dados e nossa equipe entrará em contato para confirmar seu horário em Porto de Galinhas.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-semibold text-gray-300 mb-1">Nome Completo *</label>
                  <input
                    type="text"
                    required
                    placeholder="Seu nome e sobrenome"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-[#27272A] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#C29B72] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-gray-300 mb-1">WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="(81) 99999-9999"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="w-full bg-[#27272A] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#C29B72] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-gray-300 mb-1">E-mail</label>
                  <input
                    type="email"
                    placeholder="seu.email@exemplo.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#27272A] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#C29B72] transition-colors"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-300 mb-1">Tratamento</label>
                    <select
                      value={formData.treatment}
                      onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                      className="w-full bg-[#27272A] border border-white/10 rounded-xl px-3 py-3 text-xs text-white focus:outline-none focus:border-[#C29B72] transition-colors"
                    >
                      {TREATMENTS.map((t) => (
                        <option key={t.id} value={t.title} className="bg-[#18181B] text-white">
                          {t.title}
                        </option>
                      ))}
                      <option value="Outro / Avaliação Geral" className="bg-[#18181B] text-white">
                        Avaliação Geral
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-gray-300 mb-1">Turno Preferido</label>
                    <select
                      value={formData.preferredShift}
                      onChange={(e) => setFormData({ ...formData, preferredShift: e.target.value as any })}
                      className="w-full bg-[#27272A] border border-white/10 rounded-xl px-3 py-3 text-xs text-white focus:outline-none focus:border-[#C29B72] transition-colors"
                    >
                      <option value="manha" className="bg-[#18181B] text-white">Manhã (08h às 12h)</option>
                      <option value="tarde" className="bg-[#18181B] text-white">Tarde (13h às 18h)</option>
                      <option value="noite" className="bg-[#18181B] text-white">Sábado de manhã</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#C29B72] hover:bg-[#A8825A] text-white py-3.5 rounded-xl font-bold text-xs tracking-wider uppercase transition-all shadow-lg mt-2 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>ENVIAR SOLICITAÇÃO</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          ) : (
            <div className="text-center space-y-4 py-4 animate-in fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                <CheckCircle className="w-8 h-8" />
              </div>

              <h3 className="text-xl font-bold text-white">Solicitação Recebida!</h3>
              
              <p className="text-xs text-gray-300 leading-relaxed max-w-xs mx-auto">
                Obrigado, <strong className="text-white">{formData.fullName}</strong>! Para agilizar o atendimento, você pode enviar seus dados diretamente ao WhatsApp do Dr. Yan.
              </p>

              <div className="pt-2 space-y-2">
                <button
                  onClick={handleSendWhatsApp}
                  className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-3.5 rounded-xl font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>CONFIRMAR PELO WHATSAPP NOW</span>
                </button>

                <button
                  onClick={() => {
                    onClose();
                    setSubmitted(false);
                  }}
                  className="w-full bg-transparent hover:bg-white/10 text-gray-400 hover:text-white py-2.5 rounded-xl font-semibold text-xs transition-colors"
                >
                  Fechar janela
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
