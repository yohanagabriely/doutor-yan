import React, { useEffect, useState } from 'react';
import { Accessibility } from 'lucide-react';

export const AccessibilityButton: React.FC = () => {
  const [easyMode, setEasyMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('accessibility-easy-mode', easyMode);
    root.style.setProperty('--accessibility-font-scale', easyMode ? '1.18' : '1');
  }, [easyMode]);

  return (
    <button
      type="button"
      onClick={() => setEasyMode((current) => !current)}
      aria-pressed={easyMode}
      aria-label={easyMode ? 'Voltar ao modo normal' : 'Ativar modo fácil'}
      title={easyMode ? 'Voltar ao normal' : 'Acessibilidade'}
      className="fixed top-[88px] right-[24px] z-[70] flex min-h-14 items-center gap-2 rounded-full border-2 border-white/80 bg-[#1D4D4F] px-4 text-sm font-bold text-white shadow-2xl transition-transform hover:scale-105 focus-visible:outline-none md:top-[96px]"
    >
      <Accessibility className="h-6 w-6" />
      <span>{easyMode ? 'Voltar ao normal' : 'Modo fácil'}</span>
    </button>
  );
};