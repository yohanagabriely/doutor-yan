import React, { useEffect, useMemo, useState } from 'react';
import { Calendar, X, CheckCircle, Send, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { DENTIST_INFO, TREATMENTS } from '../data/dentistData';
import { AppointmentFormData } from '../types';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const APPOINTMENT_STORAGE_KEY = 'dr-yan-reserved-appointments';
const WEEKDAY_TIMES = ['08:00', '09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00'];
const SATURDAY_TIMES = ['08:00', '09:00', '10:00', '11:00'];

interface ReservedAppointment {
  date: string;
  time: string;
}

const formatDateForLabel = (date: string) => {
  return new Intl.DateTimeFormat('pt-BR', {
    weekday: 'short',
    day: '2-digit',
    month: '2-digit',
  }).format(new Date(`${date}T12:00:00`));
};

const getAvailableDates = () => {
  const dates: string[] = [];
  const date = new Date();
  date.setHours(12, 0, 0, 0);

  while (dates.length < 21) {
    date.setDate(date.getDate() + 1);
    const day = date.getDay();
    if (day !== 0) {
      dates.push(date.toISOString().slice(0, 10));
    }
  }

  return dates;
};

const getTimesForDate = (date: string) => {
  if (!date) return [];
  return new Date(`${date}T12:00:00`).getDay() === 6 ? SATURDAY_TIMES : WEEKDAY_TIMES;
};

const readReservedAppointments = (): ReservedAppointment[] => {
  try {
    return JSON.parse(localStorage.getItem(APPOINTMENT_STORAGE_KEY) || '[]');
  } catch {
    return [];
  }
};

export const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    whatsapp: '',
    email: '',
    treatment: TREATMENTS[0].title,
    appointmentTime: '',
    appointmentDate: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const availableDates = useMemo(getAvailableDates, []);
  const [reservedAppointments, setReservedAppointments] = useState<ReservedAppointment[]>([]);

  useEffect(() => {
    if (isOpen) {
      setReservedAppointments(readReservedAppointments());
    }
  }, [isOpen]);

  const availableTimes = getTimesForDate(formData.appointmentDate);
  const isReserved = (time: string) => reservedAppointments.some(
    (appointment) => appointment.date === formData.appointmentDate && appointment.time === time,
  );

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendWhatsApp = () => {
    const reservation = { date: formData.appointmentDate, time: formData.appointmentTime };
    const updatedReservations = [...reservedAppointments, reservation];
    localStorage.setItem(APPOINTMENT_STORAGE_KEY, JSON.stringify(updatedReservations));
    setReservedAppointments(updatedReservations);

    const text = `Olá Dr. Yan! Gostaria de agendar uma avaliação:%0A%0A*Nome:* ${encodeURIComponent(formData.fullName)}%0A*WhatsApp:* ${encodeURIComponent(formData.whatsapp)}%0A*Tratamento:* ${encodeURIComponent(formData.treatment)}%0A*Data:* ${encodeURIComponent(formatDateForLabel(formData.appointmentDate))}%0A*Horário:* ${encodeURIComponent(formData.appointmentTime)}%0A*Observações:* ${encodeURIComponent(formData.notes || 'Nenhuma')}`;
    
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

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-300 mb-1">Data disponível *</label>
                    <select
                      required
                      value={formData.appointmentDate}
                      onChange={(e) => setFormData({ ...formData, appointmentDate: e.target.value, appointmentTime: '' })}
                      className="w-full bg-[#27272A] border border-white/10 rounded-xl px-3 py-3 text-xs text-white focus:outline-none focus:border-[#C29B72] transition-colors"
                    >
                      <option value="" disabled className="bg-[#18181B] text-white">Escolha uma data</option>
                      {availableDates.map((date) => (
                        <option key={date} value={date} className="bg-[#18181B] text-white">
                          {formatDateForLabel(date)}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-gray-300 mb-1">Horário disponível *</label>
                    <select
                      required
                      value={formData.appointmentTime}
                      onChange={(e) => setFormData({ ...formData, appointmentTime: e.target.value })}
                      className="w-full bg-[#27272A] border border-white/10 rounded-xl px-3 py-3 text-xs text-white focus:outline-none focus:border-[#C29B72] transition-colors"
                    >
                      <option value="" disabled className="bg-[#18181B] text-white">Escolha um horário</option>
                      {availableTimes.map((time) => (
                        <option key={time} value={time} disabled={isReserved(time)} className="bg-[#18181B] text-white">
                          {time}{isReserved(time) ? ' (ocupado)' : ''}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <p className="text-[10px] text-gray-500">Os horários exibidos seguem o funcionamento da clínica. A confirmação final será feita pelo WhatsApp.</p>

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
