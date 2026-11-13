import React, { useState, useMemo } from 'react';
import { MENU_CATEGORIES, MENU_ITEMS, MENU_MOMENTS, RESTAURANT_INFO, formatPrice } from '../data/menuData';
import { useCart } from '../context/CartContext';

export const MenuSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('pa-toa-hora');
  const [searchQuery, setSearchQuery] = useState('');
  const { addItem, openCart } = useCart();

  const currentCategory = MENU_CATEGORIES.find((c) => c.id === selectedCategory) || MENU_CATEGORIES[0];

  const currentMoment =
    MENU_MOMENTS.find((m) => m.categories.includes(selectedCategory)) || MENU_MOMENTS[0];
  const visibleCategories = MENU_CATEGORIES.filter((c) => currentMoment.categories.includes(c.id));

  const categoryItems = useMemo(() => {
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      return MENU_ITEMS.filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          (item.description && item.description.toLowerCase().includes(q))
      );
    }
    return MENU_ITEMS.filter((item) => item.category === selectedCategory);
  }, [selectedCategory, searchQuery]);

  const handleQuickAdd = (item: typeof MENU_ITEMS[0]) => {
    addItem(item);
  };

  const getWhatsAppCategoryUrl = (categoryName: string) => {
    const text = encodeURIComponent(`Hola Caseritos Valledupar, quiero hacer un pedido de ${categoryName}`);
    return `https://wa.me/${RESTAURANT_INFO.whatsappRaw}?text=${text}`;
  };

  return (
    <section className="py-16 sm:py-20 bg-[#fff1ec]" id="menu">
      <div className="max-w-7xl mx-auto px-4 lg:px-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="font-sans text-[12px] font-bold uppercase tracking-wider text-[#994700]">
            Nuestra Carta Completa
          </span>
          <h2 className="font-serif text-[32px] sm:text-[38px] font-bold text-[#502416] mt-1">
            Menú Completo
          </h2>
          <p className="font-sans text-[15px] text-[#52443f] mt-2">
            Selecciona una categoría para explorar todos los bocados y platos caseritos preparados al instante.
          </p>

          {/* Quick Search Input */}
          <div className="mt-6 max-w-md mx-auto relative">
            <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[#85736e] text-[20px]">
              search
            </span>
            <input
              type="text"
              placeholder="Buscar arepa, cayeye, sancocho, jugo..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-10 py-2.5 rounded-full bg-white border border-[#f7ddd3] text-sm text-[#261813] placeholder-[#85736e] focus:outline-none focus:ring-2 focus:ring-[#fe852c] transition-all shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-sm"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Momento del día */}
        {!searchQuery && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4" role="tablist" aria-label="Momento del día">
            {MENU_MOMENTS.map((m) => {
              const isActive = m.id === currentMoment.id;
              return (
                <button
                  key={m.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedCategory(m.categories[0])}
                  className={`min-h-11 px-3 py-2.5 rounded-xl font-sans text-[14px] font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#fe852c] text-white shadow-md'
                      : 'bg-white text-[#502416] border border-[#f7ddd3] hover:bg-[#ffe9e1]'
                  }`}
                >
                  {m.name}
                </button>
              );
            })}
          </div>
        )}

        {/* Categories Pills Horizontal Scroll */}
        {!searchQuery && (
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
            {visibleCategories.map((cat) => {
              const isActive = cat.id === selectedCategory;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`min-h-11 px-4 py-2.5 rounded-full font-sans text-[13px] sm:text-[14px] font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#502416] text-white shadow-md'
                      : 'bg-[#ffe9e1] text-[#261813] hover:bg-[#fde3d9]'
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>
        )}

        {/* Search Results Notification */}
        {searchQuery && (
          <div className="mb-4 flex items-center justify-between text-sm text-[#52443f]">
            <span>
              Resultados para <strong>"{searchQuery}"</strong> ({categoryItems.length} platos encontrados)
            </span>
            <button
              onClick={() => setSearchQuery('')}
              className="text-[#994700] underline font-medium hover:text-[#502416]"
            >
              Ver todas las categorías
            </button>
          </div>
        )}

        {/* Tab Content Box */}
        <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-3xl shadow-sm border border-[#ffe9e1] min-h-[380px] flex flex-col justify-between">
          <div>
            {/* Tab Inner Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#ffe9e1] gap-2">
              <div>
                <h3 className="font-serif text-[24px] sm:text-[26px] font-bold text-[#502416]">
                  {searchQuery ? `Resultados de búsqueda` : currentCategory.name}
                </h3>
                <p className="font-sans text-[13px] text-[#52443f] mt-0.5">
                  {currentCategory.id === 'bandeja-vallenata-cat'
                    ? 'El plato más representativo con todos los acompañamientos de nuestra tierra'
                    : currentCategory.id === 'arma-tu-desayuno'
                    ? 'Combos especiales para desayuno sorpresa, regalos o empezar la mañana con alegría'
                    : 'Ingredientes seleccionados y preparación fresca al instante'}
                </p>
              </div>
              <span className="font-sans text-[12px] font-bold text-[#994700] uppercase tracking-wider self-start sm:self-center bg-[#ffe9e1] px-3 py-1 rounded-full">
                {currentCategory.subtitle}
              </span>
            </div>

            {/* Special display for Bandeja Vallenata */}
            {currentCategory.id === 'bandeja-vallenata-cat' && !searchQuery ? (
              <div className="my-6 p-6 rounded-2xl bg-[#fff1ec] border border-[#fde3d9] flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="max-w-xl">
                  <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#ffe08b] text-[#241a00] text-[11px] font-bold uppercase mb-2">
                    Plato Más Completo
                  </div>
                  <h4 className="font-serif text-[22px] font-bold text-[#502416]">
                    Bandeja vallenata completa
                  </h4>
                  <p className="font-sans text-[15px] text-[#52443f] mt-2 leading-relaxed">
                    Carne jugosa, chicharrón crocante, arroz bien sazonado, frijoles en su punto, tajadas doradas de plátano maduro, huevo frito y arepa con queso costeño.
                  </p>
                </div>
                <div className="flex flex-col items-center md:items-end gap-3 shrink-0">
                  <span className="font-serif text-[34px] font-bold text-[#502416]">
                    $48.000
                  </span>
                  <button
                    onClick={() => {
                      const item = MENU_ITEMS.find((m) => m.id === 'bv-1');
                      if (item) addItem(item);
                      openCart();
                    }}
                    className="px-5 py-2.5 rounded-xl bg-[#fe852c] hover:bg-[#994700] text-white font-sans text-[14px] font-semibold shadow-md transition-all active:scale-95"
                  >
                    + Agregar a mi orden
                  </button>
                </div>
              </div>
            ) : currentCategory.id === 'arma-tu-desayuno' && !searchQuery ? (
              /* Special layout for Desayunos Especiales */
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-6">
                {categoryItems.map((item) => (
                  <div
                    key={item.id}
                    className="p-5 rounded-2xl bg-[#fff8f6] border border-[#ffe9e1] hover:border-[#fde3d9] hover:shadow-md transition-all flex flex-col justify-between gap-3"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <h4 className="font-serif text-[17px] font-bold text-[#502416]">
                          {item.name}
                        </h4>
                        <span className="font-sans text-[18px] font-bold text-[#502416]">
                          {formatPrice(item.price)}
                        </span>
                      </div>
                      <p className="font-sans text-[13px] text-[#52443f] mt-1.5 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-[#f7ddd3]/50">
                      <span className="text-[12px] font-semibold text-[#994700]">
                        Incluye dedicatoria
                      </span>
                      <button
                        onClick={() => {
                          addItem(item);
                          openCart();
                        }}
                        className="px-3.5 py-1.5 rounded-lg bg-[#fe852c] hover:bg-[#994700] text-white text-[13px] font-semibold transition-colors"
                      >
                        + Agregar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Standard Menu Grid */
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2 py-4">
                {categoryItems.length === 0 ? (
                  <div className="col-span-2 py-12 text-center text-[#52443f]">
                    No se encontraron platos que coincidan con tu búsqueda.
                  </div>
                ) : (
                  categoryItems.map((item) => (
                    <div
                      key={item.id}
                      className="group flex justify-between items-center py-2.5 border-b border-[#ffe9e1]/60 hover:bg-[#fff8f6] px-2 rounded-lg transition-colors"
                    >
                      <div className="pr-3 flex-1 min-w-0">
                        <span className="font-sans text-[15px] sm:text-[16px] text-[#261813] font-medium block truncate">
                          {item.name}
                        </span>
                        {item.description && (
                          <span className="font-sans text-[12px] text-[#52443f] block truncate">
                            {item.description}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        <span className="font-sans text-[15px] sm:text-[16px] font-bold text-[#502416]">
                          {formatPrice(item.price)}
                        </span>

                        <a
                          href={`https://wa.me/${RESTAURANT_INFO.whatsappRaw}?text=${encodeURIComponent(
                            `Hola Caseritos Valledupar, quiero pedir: ${item.name} (${formatPrice(item.price)})`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-white border border-[#f7ddd3] hover:bg-[#ffe9e1] text-[#994700] flex items-center justify-center transition-colors"
                          title="Preguntar por WhatsApp"
                          aria-label={`Pedir ${item.name} por WhatsApp`}
                        >
                          <span className="material-symbols-outlined text-[18px]">chat</span>
                        </a>

                        <button
                          onClick={() => handleQuickAdd(item)}
                          className="w-10 h-10 rounded-full bg-[#ffe9e1] hover:bg-[#fe852c] text-[#502416] hover:text-white flex items-center justify-center transition-colors shadow-xs active:scale-90"
                          title="Agregar al pedido"
                          aria-label={`Agregar ${item.name}`}
                        >
                          <span className="material-symbols-outlined text-[18px]">add</span>
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>

          {/* Tab Footer with WhatsApp Trigger */}
          <div className="pt-6 border-t border-[#ffe9e1] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs sm:text-sm text-[#52443f] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Domicilios en Valledupar • Pedidos por WhatsApp
            </span>

            <a
              href={getWhatsAppCategoryUrl(currentCategory.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#fe852c] hover:bg-[#994700] text-white font-sans text-[14px] font-semibold transition-all shadow-md active:scale-95"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.186 8.186 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.77 2.7 4.28 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.12-.22-.19-.47-.32"></path>
              </svg>
              <span>Pedir por WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
