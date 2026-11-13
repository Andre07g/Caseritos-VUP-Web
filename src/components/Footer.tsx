import React from 'react';
import { RESTAURANT_INFO } from '../data/menuData';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="w-full">
      {/* Quick Details Bar */}
      <section className="py-8 bg-[#ffe9e1] border-t border-[#f7ddd3]/80">
        <div className="max-w-7xl mx-auto px-4 lg:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#502416] text-[26px]">
              schedule
            </span>
            <div>
              <p className="font-sans text-[15px] font-bold text-[#502416]">Horarios</p>
              <p className="font-sans text-[13px] text-[#52443f]">{RESTAURANT_INFO.hours}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#502416] text-[26px]">
              location_on
            </span>
            <div>
              <p className="font-sans text-[15px] font-bold text-[#502416]">Ubicación</p>
              <p className="font-sans text-[13px] text-[#52443f]">{RESTAURANT_INFO.address}</p>
            </div>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <span className="material-symbols-outlined text-[#502416] text-[26px]">
              photo_camera
            </span>
            <div>
              <p className="font-sans text-[15px] font-bold text-[#502416]">Instagram</p>
              <p className="font-sans text-[13px] text-[#52443f]">{RESTAURANT_INFO.instagram}</p>
            </div>
          </a>

          <a
            href={`https://wa.me/${RESTAURANT_INFO.whatsappRaw}?text=Hola%20Caseritos`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <span className="material-symbols-outlined text-[#502416] text-[26px]">
              chat
            </span>
            <div>
              <p className="font-sans text-[15px] font-bold text-[#502416]">WhatsApp</p>
              <p className="font-sans text-[13px] text-[#52443f]">{RESTAURANT_INFO.phone}</p>
            </div>
          </a>
        </div>
      </section>

      {/* Main Footer Block */}
      <div className="w-full bg-[#fff1ec] text-[#52443f] pt-12 pb-8 border-t border-[#f7ddd3]/50">
        <div className="max-w-7xl mx-auto px-4 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Column 1: Brand Info */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <img
                  src={RESTAURANT_INFO.logo}
                  alt="Logo Caseritos Valledupar"
                  className="h-8 w-auto object-contain rounded-md"
                />
                <span className="font-serif text-[20px] font-bold text-[#502416]">
                  Caseritos Valledupar
                </span>
              </div>
              <p className="font-sans text-[13px] text-[#52443f] leading-relaxed">
                Sabor criollo, recetas de antaño y el calor de hogar vallenato en cada plato servido en tu mesa.
              </p>
            </div>

            {/* Column 2: Location & Contact */}
            <div className="flex flex-col gap-2">
              <h4 className="font-sans text-[15px] font-bold text-[#261813] mb-1">
                Ubicación y Contacto
              </h4>
              <div className="flex items-start gap-2 text-[13px]">
                <span className="material-symbols-outlined text-[17px] text-[#502416] shrink-0 mt-0.5">
                  location_on
                </span>
                <span>{RESTAURANT_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2 text-[13px]">
                <span className="material-symbols-outlined text-[17px] text-[#502416] shrink-0">
                  call
                </span>
                <span>{RESTAURANT_INFO.phone}</span>
              </div>
            </div>

            {/* Column 3: Hours & Socials */}
            <div className="flex flex-col gap-2">
              <h4 className="font-sans text-[15px] font-bold text-[#261813] mb-1">
                Atención al Cliente
              </h4>
              <div className="flex items-start gap-2 text-[13px]">
                <span className="material-symbols-outlined text-[17px] text-[#502416] shrink-0 mt-0.5">
                  schedule
                </span>
                <span>{RESTAURANT_INFO.hours}</span>
              </div>
              <div className="flex items-center gap-2 text-[13px]">
                <span className="material-symbols-outlined text-[17px] text-[#502416] shrink-0">
                  photo_camera
                </span>
                <span>Instagram: {RESTAURANT_INFO.instagram}</span>
              </div>
            </div>

            {/* Column 4: WhatsApp Direct */}
            <div className="flex flex-col gap-2.5">
              <h4 className="font-sans text-[15px] font-bold text-[#261813]">
                Pedidos Directos
              </h4>
              <p className="font-sans text-[13px] text-[#52443f]">
                Atención ágil para tus desayunos, almuerzos familiares y eventos empresariales.
              </p>
              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsappRaw}?text=Hola%20Caseritos,%20quiero%20hacer%20un%20pedido`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#502416] hover:bg-[#6b3a2a] text-white font-sans text-[13px] font-semibold transition-colors shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.186 8.186 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.77 2.7 4.28 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.12-.22-.19-.47-.32"></path>
                </svg>
                <span>WhatsApp {RESTAURANT_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Sub-footer Copyright and Quick Nav */}
          <div className="pt-6 border-t border-[#f7ddd3]/80 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <span className="font-sans text-[13px] text-[#85736e]">
              © {new Date().getFullYear()} Caseritos Valledupar. Tradición culinaria auténtica.
            </span>

            <div className="flex gap-6">
              <button
                onClick={() => scrollTo('preguntas')}
                className="font-sans text-[13px] text-[#52443f] hover:text-[#502416] transition-colors"
              >
                Preguntas frecuentes
              </button>
              <button
                onClick={() => scrollTo('eventos')}
                className="font-sans text-[13px] text-[#52443f] hover:text-[#502416] transition-colors"
              >
                Servicio para eventos
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
