import React from 'react';
import { DENTIST_INFO } from '../data/dentistData';

interface BrandLogoProps {
  variant?: 'light' | 'dark' | 'image';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ 
  variant = 'dark', 
  className = '',
  size = 'md'
}) => {
  const isDark = variant === 'dark';

  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10 md:h-12',
    lg: 'h-14 md:h-16',
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* BRAND LOGO IMAGE FROM USER */}
      <div className="relative rounded-xl overflow-hidden bg-black p-1.5 shadow-md border border-white/10 shrink-0">
        <img 
          src={DENTIST_INFO.logoImage} 
          alt="Dr. Yan Guilherme Cirurgião-Dentista" 
          className={`${sizeClasses[size]} w-auto object-contain transition-transform hover:scale-105`}
          referrerPolicy="no-referrer"
        />
      </div>

      {/* TYPOGRAPHY COMPONENT */}
      <div className="flex flex-col">
        <div className={`font-bold tracking-tight leading-none ${size === 'sm' ? 'text-base' : size === 'lg' ? 'text-2xl' : 'text-lg md:text-xl'} ${isDark ? 'text-white' : 'text-[#1A1A1A]'}`}>
          <span className="text-xs font-serif font-normal block text-gray-400">Dr.</span>
          <span className="font-extrabold text-[#C29B72]">yan</span>guilherme
        </div>
        <span className={`text-[9px] md:text-[10px] tracking-widest uppercase font-semibold mt-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          CIRURGIÃO - DENTISTA | CRO-PE 21214
        </span>
      </div>
    </div>
  );
};
