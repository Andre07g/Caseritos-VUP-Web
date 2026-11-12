import React from 'react';
import { RESTAURANT_INFO } from '../data/menuData';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <>
      {/* Floating Badge Indicator */}
      <div className="fixed bottom-6 right-22 z-40 hidden sm:flex items-center pointer-events-none">
        <span className="px-4 py-1.5 rounded-full bg-white font-sans text-xs font-bold text-[#502416] shadow-lg border border-[#ffe9e1] animate-bounce flex items-center gap-1.5">
          <span>¡Pide aquí!</span>
          <span className="text-base">🍲</span>
        </span>
      </div>

      {/* Floating Circle Button */}
      <aside className="fixed bottom-6 right-6 z-40">
        <a
          aria-label="Chat de WhatsApp con Caseritos Valledupar"
          className="w-14 h-14 rounded-full bg-[#fe852c] text-white flex items-center justify-center shadow-[0_8px_24px_rgba(43,29,23,0.25)] hover:bg-[#994700] hover:scale-105 active:scale-95 transition-all"
          href={`https://wa.me/${RESTAURANT_INFO.whatsappRaw}?text=Hola%20Caseritos%20Valledupar,%20quiero%20hacer%20un%20pedido`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="material-symbols-outlined text-[30px]">chat</span>
        </a>
      </aside>
    </>
  );
};
