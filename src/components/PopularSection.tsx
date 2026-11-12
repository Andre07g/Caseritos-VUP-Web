import React from 'react';
import { POPULAR_ITEMS, formatPrice } from '../data/menuData';
import { useCart } from '../context/CartContext';

export const PopularSection: React.FC = () => {
  const { addItem, openCart } = useCart();

  const handleOrderDish = (dish: typeof POPULAR_ITEMS[0]) => {
    addItem(dish);
    openCart();
  };

  const getButtonLabel = (id: string) => {
    switch (id) {
      case 'pop-1':
        return 'Pedir desayuno';
      case 'pop-2':
        return 'Pedir desayuno mixto';
      case 'pop-3':
        return 'Pedir almuerzo';
      case 'pop-4':
        return 'Pedir bandeja vallenata';
      case 'pop-5':
        return 'Pedir arepa rellena';
      case 'pop-6':
        return 'Pedir empanadas';
      default:
        return 'Pedir ahora';
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-[#fff8f6]" id="lo-mas-pedido">
      <div className="max-w-7xl mx-auto px-4 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-3">
          <div>
            <span className="font-sans text-[12px] font-bold uppercase tracking-wider text-[#994700]">
              Favoritos del Valle
            </span>
            <h2 className="font-serif text-[32px] sm:text-[38px] font-bold text-[#502416] mt-1">
              Lo más pedido
            </h2>
          </div>
          <p className="font-sans text-[15px] text-[#52443f] max-w-md">
            Las delicias que nunca faltan en la mesa de los amantes del buen sabor casero.
          </p>
        </div>

        {/* 6 Grid Dishes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {POPULAR_ITEMS.map((dish) => (
            <div
              key={dish.id}
              className="group flex flex-col rounded-3xl bg-white overflow-hidden shadow-sm hover:shadow-xl border border-[#ffe9e1] transition-all duration-300"
            >
              {/* Image with Price Badge */}
              <div className="relative h-60 sm:h-64 overflow-hidden bg-[#ffe9e1]">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <span className="absolute top-4 right-4 px-4 py-1.5 rounded-full bg-[#ffdbc8] text-[#321300] font-sans text-[15px] font-bold shadow-md">
                  {formatPrice(dish.price)}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1 justify-between gap-5">
                <div>
                  <h3 className="font-serif text-[20px] font-bold text-[#502416] mb-1.5 leading-snug">
                    {dish.name}
                  </h3>
                  <p className="font-sans text-[14px] text-[#52443f] leading-relaxed">
                    {dish.description}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleOrderDish(dish)}
                    className="inline-flex items-center justify-center gap-2 flex-1 py-3 px-4 rounded-xl bg-[#fe852c] hover:bg-[#994700] text-white font-sans text-[14px] font-semibold transition-all shadow-md active:scale-98"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.186 8.186 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.77 2.7 4.28 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.12-.22-.19-.47-.32"></path>
                    </svg>
                    <span>{getButtonLabel(dish.id)}</span>
                  </button>

                  <a
                    href={`https://wa.me/573137799512?text=Hola,%20quiero%20hacer%20el%20pedido:%20${encodeURIComponent(
                      dish.name
                    )}%20(${formatPrice(dish.price)})`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Pedir ${dish.name} directo por WhatsApp`}
                    className="p-3 rounded-xl bg-[#ffe9e1] hover:bg-[#ffdbc8] text-[#994700] transition-colors flex items-center justify-center shrink-0"
                    title="Pedir directo a WhatsApp"
                  >
                    <span className="material-symbols-outlined text-[19px]">share</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
