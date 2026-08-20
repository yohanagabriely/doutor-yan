import React, { useEffect, useState } from 'react';
import { Accessibility, Eye, Minus, Plus, RotateCcw, X } from 'lucide-react';

type AccessibilitySettings = {
  fontScale: number;
  highContrast: boolean;
  increasedSpacing: boolean;
  reducedMotion: boolean;
};

const DEFAULT_SETTINGS: AccessibilitySettings = {
  fontScale: 1,
  highContrast: false,
  increasedSpacing: false,
  reducedMotion: false,
};

const applySettings = (settings: AccessibilitySettings) => {
  const root = document.documentElement;
  root.style.setProperty('--accessibility-font-scale', String(settings.fontScale));
  root.classList.toggle('accessibility-high-contrast', settings.highContrast);
  root.classList.toggle('accessibility-increased-spacing', settings.increasedSpacing);
  root.classList.toggle('accessibility-reduced-motion', settings.reducedMotion);
};

export const AccessibilityButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState(DEFAULT_SETTINGS);

  useEffect(() => {
    applySettings(settings);
  }, [settings]);

  const updateSettings = (changes: Partial<AccessibilitySettings>) => {
    setSettings((current) => ({ ...current, ...changes }));
  };

  const resetSettings = () => setSettings(DEFAULT_SETTINGS);

  return (
    <div className="fixed bottom-24 right-6 z-50 flex flex-col items-end gap-3">
      {isOpen && (
        <section
          aria-label="Opções de acessibilidade"
          className="w-[min(20rem,calc(100vw-3rem))] rounded-2xl border border-white/20 bg-[#18181B] p-4 text-white shadow-2xl"
        >
          <div className="mb-4 flex items-center justify-between gap-3">
            <h2 className="text-sm font-bold">Acessibilidade</h2>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Fechar opções de acessibilidade"
              className="rounded-full p-1.5 text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between gap-3 rounded-xl bg-white/5 p-2.5">
              <span className="flex items-center gap-2 text-xs font-semibold"><Eye className="h-4 w-4 text-[#E7C9A5]" /> Tamanho do texto</span>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => updateSettings({ fontScale: Math.max(1, settings.fontScale - 0.1) })}
                  disabled={settings.fontScale <= 1}
                  aria-label="Diminuir tamanho do texto"
                  className="rounded-lg p-2 hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-10 text-center text-xs">{Math.round(settings.fontScale * 100)}%</span>
                <button
                  type="button"
                  onClick={() => updateSettings({ fontScale: Math.min(1.3, settings.fontScale + 0.1) })}
                  disabled={settings.fontScale >= 1.3}
                  aria-label="Aumentar tamanho do texto"
                  className="rounded-lg p-2 hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <label className="flex cursor-pointer items-center justify-between gap-3 rounded-xl bg-white/5 p-3 text-xs font-semibold">
              Alto contraste
              <input
                type="checkbox"
                checked={settings.highContrast}
                onChange={(event) => updateSettings({ highContrast: event.target.checked })}
                className="h-4 w-4 accent-[#C29B72]"
              />
            </label>

            <label className="flex cursor-pointer items-center justify-between gap-3 rounded-xl bg-white/5 p-3 text-xs font-semibold">
              Mais espaçamento
              <input
                type="checkbox"
                checked={settings.increasedSpacing}
                onChange={(event) => updateSettings({ increasedSpacing: event.target.checked })}
                className="h-4 w-4 accent-[#C29B72]"
              />
            </label>

            <label className="flex cursor-pointer items-center justify-between gap-3 rounded-xl bg-white/5 p-3 text-xs font-semibold">
              Menos movimento
              <input
                type="checkbox"
                checked={settings.reducedMotion}
                onChange={(event) => updateSettings({ reducedMotion: event.target.checked })}
                className="h-4 w-4 accent-[#C29B72]"
              />
            </label>
          </div>

          <button
            type="button"
            onClick={resetSettings}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 py-2.5 text-xs font-bold transition-colors hover:bg-white/10"
          >
            <RotateCcw className="h-4 w-4" />
            Voltar ao normal
          </button>
        </section>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-expanded={isOpen}
        aria-label="Abrir opções de acessibilidade"
        title="Acessibilidade"
        className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/80 bg-[#1D4D4F] text-white shadow-2xl transition-transform hover:scale-110 focus-visible:outline-none"
      >
        <Accessibility className="h-7 w-7" />
      </button>
    </div>
  );
};