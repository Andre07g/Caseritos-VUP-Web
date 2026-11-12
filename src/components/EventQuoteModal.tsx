import React, { useState } from 'react';
import { EVENT_PACKAGES, formatPrice } from '../data/menuData';

interface EventQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPackageId?: string;
}

export const EventQuoteModal: React.FC<EventQuoteModalProps> = ({
  isOpen,
  onClose,
  initialPackageId,
}) => {
  const [selectedPackageId, setSelectedPackageId] = useState(
    initialPackageId || EVENT_PACKAGES[4].id
  );
  const [packageQty, setPackageQty] = useState(1);
  const [eventType, setEventType] = useState('Reunión familiar');
  const [guestCount, setGuestCount] = useState(25);
  const [eventDate, setEventDate] = useState('');
  const [location, setLocation] = useState('');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const currentPkg =
    EVENT_PACKAGES.find((p) => p.id === selectedPackageId) || EVENT_PACKAGES[0];
  const estimatedTotal = currentPkg.price * packageQty;

  const sendWhatsAppQuote = () => {
    let message = `*¡Hola Caseritos Valledupar! Deseo cotizar un evento:*\n\n`;
    message += `• *Paquete:* ${currentPkg.name}\n`;
    message += `• *Cantidad:* ${packageQty} unidad(es)\n`;
    message += `• *Total Estimado:* ${formatPrice(estimatedTotal)} COP\n`;
    message += `• *Tipo de Evento:* ${eventType}\n`;
    message += `• *Número Aprox. de Invitados:* ${guestCount} personas\n`;

    if (eventDate) {
      message += `• *Fecha y Hora:* ${eventDate}\n`;
    }
    if (location) {
      message += `• *Lugar en Valledupar:* ${location}\n`;
    }
    if (notes) {
      message += `• *Detalles adicionales:* ${notes}\n`;
    }

    message += `\n¿Me pueden confirmar disponibilidad para esta fecha y opciones de entrega? ¡Gracias!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/573137799512?text=${encoded}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div className="bg-[#fff8f6] rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-[#ffe9e1] max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#ffe9e1] text-[#502416] flex items-center justify-center hover:bg-[#fe852c] hover:text-white transition-colors"
          aria-label="Cerrar modal"
        >
          ✕
        </button>

        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffe9e1] text-[#994700] text-xs font-bold uppercase mb-2">
            Cotizador para Eventos
          </div>
          <h3 className="font-serif text-[26px] font-bold text-[#502416]">
            Cotiza tu Celebración Caserita
          </h3>
          <p className="text-xs sm:text-sm text-[#52443f] mt-1">
            Calcula el presupuesto para tu reunión y recibe atención directa por WhatsApp.
          </p>
        </div>

        <div className="space-y-4">
          {/* Select Package */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#502416] mb-1.5">
              1. Selecciona el combo o pasabocas
            </label>
            <select
              value={selectedPackageId}
              onChange={(e) => setSelectedPackageId(e.target.value)}
              className="w-full p-3 rounded-xl bg-white border border-[#f7ddd3] text-sm text-[#261813] font-medium focus:ring-2 focus:ring-[#fe852c] focus:outline-none"
            >
              {EVENT_PACKAGES.map((pkg) => (
                <option key={pkg.id} value={pkg.id}>
                  {pkg.name} — {formatPrice(pkg.price)}
                </option>
              ))}
            </select>
          </div>

          {/* Quantity & Guests */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#502416] mb-1.5">
                Cantidad de combos
              </label>
              <div className="flex items-center bg-white rounded-xl border border-[#f7ddd3] p-1">
                <button
                  type="button"
                  onClick={() => setPackageQty(Math.max(1, packageQty - 1))}
                  className="w-8 h-8 rounded-lg bg-[#ffe9e1] text-[#502416] font-bold hover:bg-[#fe852c] hover:text-white transition-colors flex items-center justify-center"
                >
                  -
                </button>
                <span className="flex-1 text-center font-bold text-sm text-[#261813]">
                  {packageQty}
                </span>
                <button
                  type="button"
                  onClick={() => setPackageQty(packageQty + 1)}
                  className="w-8 h-8 rounded-lg bg-[#ffe9e1] text-[#502416] font-bold hover:bg-[#fe852c] hover:text-white transition-colors flex items-center justify-center"
                >
                  +
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#502416] mb-1.5">
                No. de Invitados
              </label>
              <input
                type="number"
                min="5"
                max="500"
                value={guestCount}
                onChange={(e) => setGuestCount(Number(e.target.value))}
                className="w-full p-2.5 rounded-xl bg-white border border-[#f7ddd3] text-sm text-[#261813] font-medium focus:ring-2 focus:ring-[#fe852c] focus:outline-none"
              />
            </div>
          </div>

          {/* Event Type & Date */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#502416] mb-1.5">
                Tipo de evento
              </label>
              <select
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-white border border-[#f7ddd3] text-sm text-[#261813] focus:ring-2 focus:ring-[#fe852c] focus:outline-none"
              >
                <option value="Reunión familiar">Reunión familiar</option>
                <option value="Cumpleaños">Cumpleaños</option>
                <option value="Evento corporativo / Empresa">Evento corporativo / Empresa</option>
                <option value="Desayuno de trabajo">Desayuno de trabajo</option>
                <option value="Bautizo / Grado">Bautizo / Grado</option>
                <option value="Parranda vallenata">Parranda vallenata</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#502416] mb-1.5">
                Fecha aproximada
              </label>
              <input
                type="text"
                placeholder="Ej. Sábado 25 a las 10am"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-white border border-[#f7ddd3] text-sm text-[#261813] focus:ring-2 focus:ring-[#fe852c] focus:outline-none"
              />
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#502416] mb-1.5">
              Barrio o dirección en Valledupar
            </label>
            <input
              type="text"
              placeholder="Ej. Barrio Novalito, casa familiar"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-2.5 rounded-xl bg-white border border-[#f7ddd3] text-sm text-[#261813] focus:ring-2 focus:ring-[#fe852c] focus:outline-none"
            />
          </div>

          {/* Notes */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#502416] mb-1.5">
              Instrucciones especiales o requerimientos
            </label>
            <textarea
              rows={2}
              placeholder="Ej. Incluir servilletas y salsas adicionales, entregar a las 8:30 a.m. en punto."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full p-2.5 rounded-xl bg-white border border-[#f7ddd3] text-sm text-[#261813] focus:ring-2 focus:ring-[#fe852c] focus:outline-none resize-none"
            ></textarea>
          </div>

          {/* Live Estimate Card */}
          <div className="p-4 rounded-2xl bg-[#ffe9e1] border border-[#fde3d9] flex items-center justify-between">
            <div>
              <span className="text-xs text-[#52443f] font-medium block">
                Total estimado ({packageQty}x {currentPkg.name})
              </span>
              <span className="text-xs text-[#994700]">
                *Sujeto a confirmación de transporte
              </span>
            </div>
            <span className="font-serif text-[24px] font-bold text-[#502416]">
              {formatPrice(estimatedTotal)}
            </span>
          </div>
        </div>

        {/* Modal Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-3 rounded-xl border border-[#d7c2bc] text-[#52443f] text-sm font-semibold hover:bg-[#ffe9e1] transition-colors"
          >
            Volver
          </button>
          <button
            type="button"
            onClick={sendWhatsAppQuote}
            className="w-full sm:flex-1 py-3 px-6 rounded-xl bg-[#fe852c] hover:bg-[#994700] text-white font-sans text-sm font-bold shadow-lg transition-all flex items-center justify-center gap-2 active:scale-98"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.186 8.186 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.77 2.7 4.28 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.12-.22-.19-.47-.32"></path>
            </svg>
            <span>Enviar cotización por WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};
