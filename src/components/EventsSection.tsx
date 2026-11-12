import React, { useState } from 'react';
import { EVENT_PACKAGES, formatPrice } from '../data/menuData';
import { EventQuoteModal } from './EventQuoteModal';

export const EventsSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPkgId, setSelectedPkgId] = useState<string | undefined>(undefined);

  const handleOpenQuote = (packageId?: string) => {
    setSelectedPkgId(packageId);
    setIsModalOpen(true);
  };

  return (
    <section className="py-16 sm:py-20 bg-[#fff8f6]" id="eventos">
      <div className="max-w-7xl mx-auto px-4 lg:px-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-sans text-[12px] font-bold uppercase tracking-wider text-[#994700]">
            Atención Especial
          </span>
          <h2 className="font-serif text-[32px] sm:text-[38px] font-bold text-[#502416] mt-1">
            Tus Eventos Caseritos
          </h2>
          <p className="font-sans text-[15px] text-[#52443f] mt-2 leading-relaxed">
            Llevamos el sabor y la calidez del fogón típico directamente a tus reuniones, cumpleaños y celebraciones empresariales.
          </p>
        </div>

        {/* 8 Event Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {EVENT_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              onClick={() => handleOpenQuote(pkg.id)}
              className="p-6 rounded-3xl bg-white border border-[#ffe9e1] shadow-xs hover:shadow-lg hover:border-[#fde3d9] transition-all flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#fff1ec] group-hover:bg-[#fe852c] group-hover:text-white transition-colors flex items-center justify-center text-[#502416] mb-4">
                  <span className="material-symbols-outlined text-[26px]">
                    {pkg.icon}
                  </span>
                </div>
                <h3 className="font-serif text-[18px] sm:text-[19px] font-bold text-[#502416] group-hover:text-[#994700] transition-colors leading-snug">
                  {pkg.name}
                </h3>
                <p className="font-sans text-[13px] text-[#52443f] mt-2 leading-relaxed">
                  {pkg.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#ffe9e1] flex items-center justify-between">
                <span className="font-sans text-[18px] font-bold text-[#994700]">
                  {formatPrice(pkg.price)}
                </span>
                <span className="text-xs font-semibold text-[#502416] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Cotizar →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => handleOpenQuote()}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#fe852c] hover:bg-[#994700] text-white font-sans text-[17px] font-bold shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.186 8.186 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.77 2.7 4.28 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.12-.22-.19-.47-.32"></path>
            </svg>
            <span>Cotizar mi evento</span>
          </button>
        </div>
      </div>

      {/* Quote Calculator Modal */}
      <EventQuoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialPackageId={selectedPkgId}
      />
    </section>
  );
};
