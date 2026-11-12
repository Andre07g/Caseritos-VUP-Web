import React from 'react';

export const HowToOrderSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#fff1ec]">
      <div className="max-w-7xl mx-auto px-4 lg:px-10">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="font-sans text-[12px] font-bold uppercase tracking-wider text-[#994700]">
            Fácil y Rápido
          </span>
          <h2 className="font-serif text-[32px] sm:text-[38px] font-bold text-[#502416] mt-1">
            Cómo pedir en 3 pasos
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative">
          {/* Step 1 */}
          <div className="p-8 rounded-3xl bg-white shadow-sm border border-[#ffe9e1] flex flex-col items-center text-center relative hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-2xl bg-[#ffdbc8] text-[#321300] flex items-center justify-center font-serif text-[28px] font-bold mb-5 shadow-xs">
              1
            </div>
            <h3 className="font-serif text-[20px] font-bold text-[#502416] mb-2.5">
              Escríbenos por WhatsApp
            </h3>
            <p className="font-sans text-[14px] text-[#52443f] leading-relaxed">
              Haz clic en cualquiera de nuestros botones o arma tu carrito y dinos qué antojo criollo se te apetece hoy.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-8 rounded-3xl bg-white shadow-sm border border-[#ffe9e1] flex flex-col items-center text-center relative hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-2xl bg-[#ffdbc8] text-[#321300] flex items-center justify-center font-serif text-[28px] font-bold mb-5 shadow-xs">
              2
            </div>
            <h3 className="font-serif text-[20px] font-bold text-[#502416] mb-2.5">
              Confirma tu pedido
            </h3>
            <p className="font-sans text-[14px] text-[#52443f] leading-relaxed">
              Te confirmamos el valor exacto, adicionales y la hora de entrega en tu casa o lugar del evento en Valledupar.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-8 rounded-3xl bg-white shadow-sm border border-[#ffe9e1] flex flex-col items-center text-center relative hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-2xl bg-[#ffdbc8] text-[#321300] flex items-center justify-center font-serif text-[28px] font-bold mb-5 shadow-xs">
              3
            </div>
            <h3 className="font-serif text-[20px] font-bold text-[#502416] mb-2.5">
              Recíbelo y disfrútalo
            </h3>
            <p className="font-sans text-[14px] text-[#52443f] leading-relaxed">
              Recibe tu plato fresco, caliente y con toda la generosidad de la sazón vallenata directo en tu mesa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
