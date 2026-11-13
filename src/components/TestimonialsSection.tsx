import React from 'react';
import { RESTAURANT_INFO } from '../data/menuData';

// Aún no hay reseñas reales autorizadas por la dueña (ver wiki/pendientes.md).
// Cuando existan, se agregan aquí con nombre y autorización; no se inventan.
export const TestimonialsSection: React.FC = () => {
  const href = `https://wa.me/${RESTAURANT_INFO.whatsappRaw}?text=${encodeURIComponent(
    'Hola Caseritos Valledupar, quiero compartir mi opinión sobre mi pedido'
  )}`;
  return (
    <section className="py-16 sm:py-20 bg-[#fff8f6]" id="opiniones">
      <div className="max-w-3xl mx-auto px-4 lg:px-10 text-center">
        <span className="font-sans text-[12px] font-bold uppercase tracking-wider text-[#994700]">
          Tu opinión cuenta
        </span>
        <h2 className="font-serif text-[32px] sm:text-[38px] font-bold text-[#502416] mt-1">
          ¿Ya probaste Caseritos?
        </h2>
        <p className="font-sans text-[16px] text-[#52443f] mt-3 leading-relaxed">
          Cuéntanos cómo te fue con tu pedido. Tu opinión nos ayuda a mejorar cada día.
        </p>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center gap-2 min-h-12 px-6 py-3 rounded-xl bg-[#fe852c] hover:bg-[#994700] text-white font-sans text-[15px] font-semibold shadow-md transition-all active:scale-95"
        >
          <span className="material-symbols-outlined text-[20px]">chat</span>
          Escríbenos tu opinión
        </a>
      </div>
    </section>
  );
};
