import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/menuData';

export const TestimonialsSection: React.FC = () => {
  const [reviews, setReviews] = useState(TESTIMONIALS);
  const [showForm, setShowForm] = useState(false);
  const [author, setAuthor] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [text, setText] = useState('');
  const [rating, setRating] = useState(5);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !text.trim()) return;

    const newRev = {
      id: `t-${Date.now()}`,
      name: author.trim(),
      city: `Valledupar, ${neighborhood.trim() || 'Cesar'}`,
      rating,
      comment: text.trim(),
    };

    setReviews([newRev, ...reviews]);
    setAuthor('');
    setNeighborhood('');
    setText('');
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setShowForm(false);
    }, 2000);
  };

  return (
    <section className="py-16 sm:py-20 bg-[#fff1ec]">
      <div className="max-w-7xl mx-auto px-4 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="font-sans text-[12px] font-bold uppercase tracking-wider text-[#994700]">
              Opiniones de Nuestra Mesa
            </span>
            <h2 className="font-serif text-[32px] sm:text-[38px] font-bold text-[#502416] mt-1">
              Lo que dicen nuestros clientes
            </h2>
          </div>

          <button
            onClick={() => setShowForm(!showForm)}
            className="self-start md:self-end px-4 py-2 rounded-xl bg-white border border-[#ffe9e1] hover:bg-[#ffe9e1] text-[#502416] text-sm font-semibold transition-colors flex items-center gap-1.5 shadow-xs"
          >
            <span className="material-symbols-outlined text-[18px]">rate_review</span>
            <span>{showForm ? 'Cerrar formulario' : 'Dejar mi opinión'}</span>
          </button>
        </div>

        {/* Review Submission Form (Accordion) */}
        {showForm && (
          <form
            onSubmit={handleSubmitReview}
            className="mb-10 p-6 sm:p-8 rounded-3xl bg-white border border-[#ffe9e1] shadow-md max-w-2xl mx-auto"
          >
            <h3 className="font-serif text-[20px] font-bold text-[#502416] mb-4">
              Comparte tu experiencia en Caseritos
            </h3>

            {submitted ? (
              <div className="p-4 rounded-xl bg-emerald-50 text-emerald-800 text-sm font-semibold flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px]">check_circle</span>
                ¡Muchas gracias por tu comentario! Ha sido publicado.
              </div>
            ) : (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#502416] mb-1">
                      Tu Nombre
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Carlos Maestre"
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-[#f7ddd3] text-sm focus:ring-2 focus:ring-[#fe852c] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#502416] mb-1">
                      Barrio / Sector
                    </label>
                    <input
                      type="text"
                      placeholder="Ej. Garupal, Valledupar"
                      value={neighborhood}
                      onChange={(e) => setNeighborhood(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-[#f7ddd3] text-sm focus:ring-2 focus:ring-[#fe852c] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-[#502416] mb-1">
                    Calificación
                  </label>
                  <div className="flex items-center gap-1 text-[#d0a600]">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setRating(star)}
                        className="hover:scale-110 transition-transform"
                      >
                        <span className="material-symbols-outlined text-[28px]">
                          {star <= rating ? 'star' : 'star_border'}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-[#502416] mb-1">
                    Tu Opinión
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Cuéntanos qué te pareció la comida, la sazón y la entrega..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-[#f7ddd3] text-sm focus:ring-2 focus:ring-[#fe852c] focus:outline-none resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-[#fe852c] hover:bg-[#994700] text-white font-sans text-sm font-semibold transition-all shadow-md"
                >
                  Publicar reseña
                </button>
              </div>
            )}
          </form>
        )}

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 rounded-3xl bg-white shadow-sm border border-[#ffe9e1] flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#fde3d9] font-sans text-[11px] font-bold text-[#502416]">
                    Cliente Verificado
                  </span>
                  <div className="flex text-[#d0a600]">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-[19px]">
                        star
                      </span>
                    ))}
                  </div>
                </div>

                <p className="font-sans text-[14px] text-[#52443f] italic leading-relaxed">
                  "{item.comment}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#ffe9e1]/60 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#ffe9e1] text-[#502416] font-bold flex items-center justify-center shrink-0">
                  {item.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <p className="font-sans text-[15px] font-bold text-[#502416] truncate">
                    {item.name}
                  </p>
                  <p className="font-sans text-[12px] text-[#85736e] truncate">
                    {item.city}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
