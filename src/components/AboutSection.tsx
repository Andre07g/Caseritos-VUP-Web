import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#fff8f6]">
      <div className="max-w-7xl mx-auto px-4 lg:px-10">
        <div className="p-8 sm:p-14 lg:p-16 rounded-3xl bg-[#6b3a2a] text-white shadow-xl relative overflow-hidden">
          {/* Subtle decorative background pattern */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#502416]/50 pointer-events-none blur-2xl"></div>
          <div className="absolute -left-10 -top-10 w-60 h-60 rounded-full bg-[#fe852c]/10 pointer-events-none blur-xl"></div>

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#502416] mb-5 border border-[#fcb6a0]/20 shadow-xs">
              <span className="material-symbols-outlined text-[17px] text-[#ffe08b]">
                eco
              </span>
              <span className="font-sans text-[12px] font-bold uppercase tracking-wider text-white">
                Amor por Valledupar
              </span>
            </div>

            <h2 className="font-serif text-[28px] sm:text-[38px] lg:text-[42px] text-[#fff8f6] mb-5 leading-tight font-bold">
              Comida típica de alta calidad, como en casa, con sabor y tradición de Valledupar.
            </h2>

            <p className="font-sans text-[16px] sm:text-[18px] text-[#f7ddd3] font-normal leading-relaxed">
              Nacimos con el anhelo de preservar los sabores entrañables de las abuelas cesarenses: el guiso aromático, la carne desmechada suave y jugosa, el queso costeño auténtico y el maíz seleccionado. En Caseritos cocinamos cada plato como si fuera para nuestra propia familia.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6 pt-6 border-t border-[#f7ddd3]/20">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#fe852c]"></span>
                <span className="font-sans text-sm text-[#fff8f6] font-medium">Ingredientes de fincas locales</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffe08b]"></span>
                <span className="font-sans text-sm text-[#fff8f6] font-medium">Recetas auténticas de olla de barro</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                <span className="font-sans text-sm text-[#fff8f6] font-medium">Empaque térmico y biodegradable</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
