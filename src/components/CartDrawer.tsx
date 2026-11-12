import React from 'react';
import { useCart } from '../context/CartContext';
import { formatPrice, RESTAURANT_INFO } from '../data/menuData';

export const CartDrawer: React.FC = () => {
  const {
    items,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeItem,
    clearCart,
    totalPrice,
    customerName,
    setCustomerName,
    customerAddress,
    setCustomerAddress,
    orderNotes,
    setOrderNotes,
    sendOrderViaWhatsApp,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-xs transition-opacity">
      {/* Click outside backdrop */}
      <div className="flex-1" onClick={closeCart}></div>

      {/* Slide-out drawer panel */}
      <div className="w-full max-w-md bg-[#fff8f6] h-full shadow-2xl flex flex-col justify-between border-l border-[#ffe9e1] animate-slide-left overflow-hidden">
        {/* Drawer Header */}
        <div className="p-5 sm:p-6 bg-white border-b border-[#ffe9e1] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-[#ffe9e1] text-[#502416] flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px]">
                shopping_bag
              </span>
            </div>
            <div>
              <h3 className="font-serif text-[20px] font-bold text-[#502416]">
                Tu Pedido Caserito
              </h3>
              <p className="text-xs text-[#52443f]">
                {items.length === 0
                  ? 'Aún no has agregado platos'
                  : `${items.length} producto(s) en tu mesa`}
              </p>
            </div>
          </div>

          <button
            onClick={closeCart}
            className="w-8 h-8 rounded-full bg-[#ffe9e1] text-[#502416] hover:bg-[#fe852c] hover:text-white transition-colors flex items-center justify-center"
            aria-label="Cerrar pedido"
          >
            ✕
          </button>
        </div>

        {/* Drawer Scrollable Content */}
        <div className="p-5 sm:p-6 flex-1 overflow-y-auto space-y-5">
          {items.length === 0 ? (
            <div className="py-16 text-center text-[#52443f] flex flex-col items-center gap-3">
              <span className="material-symbols-outlined text-[48px] text-[#85736e]">
                restaurant_menu
              </span>
              <p className="font-serif text-lg font-semibold text-[#502416]">
                ¡Tu pedido está vacío!
              </p>
              <p className="text-xs max-w-xs text-[#52443f]">
                Explora lo más pedido o nuestro menú completo y agrega tus antojitos criollos favoritos.
              </p>
              <button
                onClick={closeCart}
                className="mt-3 px-5 py-2.5 rounded-xl bg-[#fe852c] text-white text-xs font-bold uppercase tracking-wider shadow-sm hover:bg-[#994700] transition-colors"
              >
                Ver el Menú
              </button>
            </div>
          ) : (
            <>
              {/* Items List */}
              <div className="space-y-3">
                {items.map((ci) => (
                  <div
                    key={`${ci.item.id}-${ci.selectedOption || ''}`}
                    className="p-3.5 rounded-2xl bg-white border border-[#ffe9e1] shadow-xs flex items-center justify-between gap-3"
                  >
                    <div className="flex-1 min-w-0">
                      <h4 className="font-sans text-[14px] font-bold text-[#261813] truncate">
                        {ci.item.name}
                      </h4>
                      {ci.selectedOption && (
                        <span className="text-[11px] text-[#994700] block">
                          {ci.selectedOption}
                        </span>
                      )}
                      <span className="font-sans text-[13px] font-semibold text-[#502416]">
                        {formatPrice(ci.item.price * ci.quantity)}
                      </span>
                    </div>

                    {/* Stepper */}
                    <div className="flex items-center gap-1.5 bg-[#fff8f6] border border-[#f7ddd3] rounded-lg p-0.5">
                      <button
                        onClick={() => updateQuantity(ci.item.id, -1)}
                        className="w-6 h-6 rounded flex items-center justify-center text-[#502416] hover:bg-[#fe852c] hover:text-white transition-colors text-xs font-bold"
                        aria-label="Disminuir"
                      >
                        -
                      </button>
                      <span className="w-6 text-center text-xs font-bold text-[#261813]">
                        {ci.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(ci.item.id, 1)}
                        className="w-6 h-6 rounded flex items-center justify-center text-[#502416] hover:bg-[#fe852c] hover:text-white transition-colors text-xs font-bold"
                        aria-label="Aumentar"
                      >
                        +
                      </button>
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => removeItem(ci.item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors p-1"
                      title="Eliminar del pedido"
                      aria-label="Eliminar plato"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        delete
                      </span>
                    </button>
                  </div>
                ))}
              </div>

              {/* Delivery Details Form */}
              <div className="p-4 rounded-2xl bg-white border border-[#ffe9e1] space-y-3">
                <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-[#502416]">
                  Datos para tu entrega en Valledupar
                </h4>

                <div>
                  <input
                    type="text"
                    placeholder="Tu nombre completo *"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full p-2.5 text-xs rounded-xl border border-[#f7ddd3] focus:ring-2 focus:ring-[#fe852c] focus:outline-none"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Dirección o barrio (Ej. San Joaquín, Cra 14 # 9-20) *"
                    value={customerAddress}
                    onChange={(e) => setCustomerAddress(e.target.value)}
                    className="w-full p-2.5 text-xs rounded-xl border border-[#f7ddd3] focus:ring-2 focus:ring-[#fe852c] focus:outline-none"
                  />
                </div>

                <div>
                  <textarea
                    rows={2}
                    placeholder="Instrucciones especiales (Ej. Con bastante ají, huevo bien frito, timbre no sirve)"
                    value={orderNotes}
                    onChange={(e) => setOrderNotes(e.target.value)}
                    className="w-full p-2.5 text-xs rounded-xl border border-[#f7ddd3] focus:ring-2 focus:ring-[#fe852c] focus:outline-none resize-none"
                  ></textarea>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={clearCart}
                  className="text-xs text-[#85736e] hover:text-red-600 underline font-medium transition-colors"
                >
                  Vaciar pedido
                </button>
              </div>
            </>
          )}
        </div>

        {/* Drawer Footer */}
        {items.length > 0 && (
          <div className="p-5 sm:p-6 bg-white border-t border-[#ffe9e1] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase font-bold tracking-wider text-[#52443f]">
                Subtotal
              </span>
              <span className="font-serif text-[24px] font-bold text-[#502416]">
                {formatPrice(totalPrice)}
              </span>
            </div>
            <p className="text-[11px] text-[#85736e]">
              *El valor del domicilio se confirma por WhatsApp según tu ubicación en Valledupar.
            </p>

            <button
              onClick={sendOrderViaWhatsApp}
              className="w-full py-3.5 px-4 rounded-xl bg-[#fe852c] hover:bg-[#994700] text-white font-sans text-sm font-bold shadow-xl transition-all flex items-center justify-center gap-2 active:scale-98"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.186 8.186 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.77 2.7 4.28 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.12-.22-.19-.47-.32"></path>
              </svg>
              <span>Enviar Pedido a WhatsApp</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
