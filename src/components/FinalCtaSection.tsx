import React from 'react';
import { RESTAURANT_INFO } from '../data/menuData';

export const FinalCtaSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-t from-[#fde3d9] to-[#fff8f6]">
      <div className="max-w-7xl mx-auto px-4 lg:px-10">
        <div className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-[#ffdbc8] text-[#321300] shadow-md border border-[#fcb6a0]/40 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="max-w-2xl">
            <h2 className="font-serif text-[32px] sm:text-[40px] font-bold text-[#321300] leading-tight">
              ¿Antojo de comida casera?
            </h2>
            <p className="font-sans text-[16px] sm:text-[18px] text-[#753400] mt-2 font-normal">
              Pide en línea y saborea lo más auténtico de nuestra tradición sin esperar.
            </p>
          </div>

          <a
            href={`https://wa.me/${RESTAURANT_INFO.whatsappRaw}?text=Hola%20Caseritos,%20quiero%20pedir%20ahora`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#fe852c] hover:bg-[#994700] text-white font-sans text-[17px] font-bold shadow-xl transition-all hover:scale-105 active:scale-95 shrink-0"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.186 8.186 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.77 2.7 4.28 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.12-.22-.19-.47-.32"></path>
            </svg>
            <span>Pedir ahora</span>
          </a>
        </div>
      </div>
    </section>
  );
};
