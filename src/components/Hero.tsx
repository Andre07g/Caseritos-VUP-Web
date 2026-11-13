import React from 'react';
import { RESTAURANT_INFO } from '../data/menuData';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#fff8f6] via-[#fff4ef] to-[#fff1ec] pt-28 pb-12 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Text Column */}
          <div className="lg:col-span-6 flex flex-col gap-5 z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffe9e1] border border-[#f7ddd3] self-start shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-[#fe852c] animate-pulse"></span>
              <span className="font-sans text-[12px] font-bold text-[#502416] tracking-wider uppercase">
                Tradición & Fogón Vallenato
              </span>
            </div>

            <h1 className="font-serif text-[38px] sm:text-[46px] lg:text-[52px] leading-[1.12] text-[#502416] font-bold tracking-tight">
              Comida típica vallenata, como en casa
            </h1>

            <p className="font-sans text-[17px] sm:text-[19px] text-[#52443f] font-normal leading-relaxed">
              Desayunos, almuerzos y antojos para toda hora, en Valledupar
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsappRaw}?text=Hola%20Caseritos%20Valledupar,%20quiero%20hacer%20mi%20pedido`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#fe852c] hover:bg-[#994700] text-white font-sans text-[16px] font-semibold shadow-[0_8px_24px_rgba(254,133,44,0.35)] transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.186 8.186 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.77 2.7 4.28 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.12-.22-.19-.47-.32"></path>
                </svg>
                <span>Quiero hacer mi pedido</span>
              </a>

              <button
                onClick={() => scrollTo('menu')}
                className="font-sans text-[14px] font-semibold text-[#52443f] hover:text-[#502416] flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-[#ffe9e1]/60 transition-colors"
              >
                <span className="material-symbols-outlined text-[20px] text-[#745b00]">
                  verified
                </span>
                <span>Directo al fogón casero</span>
              </button>
            </div>
          </div>

          {/* Visual Hero Image Container */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full rounded-3xl overflow-hidden shadow-[0_20px_40px_rgba(80,36,22,0.15)] border-4 border-white bg-[#ffe9e1] group">
              <img
                src={RESTAURANT_INFO.heroImage}
                alt="Bowl de almuerzo con pechuga, frijol, arroz con fideos y plátano de Caseritos Valledupar"
                className="w-full h-[360px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>

              {/* Card Tag Overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/92 backdrop-blur-md shadow-lg border border-[#f7ddd3] flex items-center justify-between">
                <div>
                  <p className="font-sans text-[11px] font-bold uppercase tracking-wider text-[#994700]">
                    Plato Insignia
                  </p>
                  <p className="font-serif text-[17px] font-bold text-[#502416]">
                    Sazón de olla de barro y leña
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#ffe08b] text-[#241a00] font-sans text-[12px] font-bold shadow-xs">
                  100% Criollo
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          <div
            onClick={() => scrollTo('menu')}
            className="p-5 rounded-2xl bg-white shadow-sm border border-[#ffe9e1] flex items-center gap-4 hover:shadow-md hover:border-[#fde3d9] transition-all cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-[#ffe9e1] flex items-center justify-center shrink-0 text-[#502416]">
              <span className="material-symbols-outlined text-[28px]">restaurant</span>
            </div>
            <div className="min-w-0">
              <h2 className="font-sans text-[16px] font-bold text-[#261813]">
                Desayunos, almuerzos y antojos
              </h2>
              <p className="font-sans text-[13px] text-[#52443f] truncate">
                Para todos los momentos del día vallenato
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/${RESTAURANT_INFO.whatsappRaw}?text=Hola%20Caseritos,%20quiero%20hacer%20un%20pedido`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-white shadow-sm border border-[#ffe9e1] flex items-center gap-4 hover:shadow-md hover:border-[#fde3d9] transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-[#ffdbc8] flex items-center justify-center shrink-0 text-[#994700]">
              <span className="material-symbols-outlined text-[28px]">chat</span>
            </div>
            <div className="min-w-0">
              <h2 className="font-sans text-[16px] font-bold text-[#261813]">
                Pedidos por WhatsApp
              </h2>
              <p className="font-sans text-[13px] text-[#52443f] truncate">
                Atención rápida y personalizada sin rodeos
              </p>
            </div>
          </a>

          <div
            onClick={() => scrollTo('eventos')}
            className="p-5 rounded-2xl bg-white shadow-sm border border-[#ffe9e1] flex items-center gap-4 hover:shadow-md hover:border-[#fde3d9] transition-all cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-[#ffe08b]/50 flex items-center justify-center shrink-0 text-[#745b00]">
              <span className="material-symbols-outlined text-[28px]">celebration</span>
            </div>
            <div className="min-w-0">
              <h2 className="font-sans text-[16px] font-bold text-[#261813]">
                Cajas para tus eventos
              </h2>
              <p className="font-sans text-[13px] text-[#52443f] truncate">
                Banquete criollo listo para celebraciones
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
