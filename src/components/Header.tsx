import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { RESTAURANT_INFO } from '../data/menuData';

export const Header: React.FC = () => {
  const { totalCount, openCart } = useCart();
  const [activeSection, setActiveSection] = useState('inicio');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['lo-mas-pedido', 'menu', 'eventos', 'preguntas'];
      const scrollY = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('inicio');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fff8f6]/95 backdrop-blur-md shadow-[0_4px_20px_rgba(43,29,23,0.06)] border-b border-[#ffe9e1]/60 transition-all">
      <div className="h-20 max-w-7xl mx-auto px-4 lg:px-10 flex items-center justify-between gap-4">
        {/* Brand Logo & Name */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <img
            src={RESTAURANT_INFO.logo}
            alt="Logo Caseritos Valledupar"
            className="h-9 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <span className="font-serif text-[21px] font-bold text-[#502416] tracking-tight">
            Caseritos Valledupar
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1.5 p-1 rounded-full bg-[#fff1ec] border border-[#f7ddd3]/50">
          <button
            onClick={() => scrollTo('lo-mas-pedido')}
            className={`px-4 py-2 rounded-full font-sans text-[14px] font-semibold transition-all ${
              activeSection === 'lo-mas-pedido'
                ? 'bg-[#fde3d9] text-[#502416] shadow-xs'
                : 'text-[#52443f] hover:text-[#261813] hover:bg-[#ffe9e1]'
            }`}
          >
            Lo más pedido
          </button>
          <button
            onClick={() => scrollTo('menu')}
            className={`px-4 py-2 rounded-full font-sans text-[14px] font-semibold transition-all ${
              activeSection === 'menu'
                ? 'bg-[#fde3d9] text-[#502416] shadow-xs'
                : 'text-[#52443f] hover:text-[#261813] hover:bg-[#ffe9e1]'
            }`}
          >
            Menú
          </button>
          <button
            onClick={() => scrollTo('eventos')}
            className={`px-4 py-2 rounded-full font-sans text-[14px] font-semibold transition-all ${
              activeSection === 'eventos'
                ? 'bg-[#fde3d9] text-[#502416] shadow-xs'
                : 'text-[#52443f] hover:text-[#261813] hover:bg-[#ffe9e1]'
            }`}
          >
            Eventos
          </button>
          <button
            onClick={() => scrollTo('preguntas')}
            className={`px-4 py-2 rounded-full font-sans text-[14px] font-semibold transition-all ${
              activeSection === 'preguntas'
                ? 'bg-[#fde3d9] text-[#502416] shadow-xs'
                : 'text-[#52443f] hover:text-[#261813] hover:bg-[#ffe9e1]'
            }`}
          >
            Preguntas
          </button>
        </nav>

        {/* Action Buttons: WhatsApp & Cart */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={`https://wa.me/${RESTAURANT_INFO.whatsappRaw}?text=Hola%20Caseritos%20Valledupar,%20quiero%20hacer%20un%20pedido`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl bg-[#fe852c] text-white font-sans text-[13px] sm:text-[14px] font-semibold shadow-[0_4px_16px_rgba(153,71,0,0.25)] hover:bg-[#994700] hover:shadow-lg transition-all active:scale-95"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span>Escríbenos</span>
          </a>

          {/* Cart Trigger */}
          <button
            onClick={openCart}
            aria-label="Ver carrito"
            className="relative w-10 h-10 rounded-full bg-[#502416] text-white flex items-center justify-center hover:bg-[#6b3a2a] transition-colors shadow-sm active:scale-95"
          >
            <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
            {totalCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#fe852c] text-white text-[11px] font-bold h-5 min-w-5 px-1 rounded-full flex items-center justify-center shadow-md animate-pulse">
                {totalCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-full bg-[#ffe9e1] text-[#502416] flex items-center justify-center hover:bg-[#fde3d9] transition-colors"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-[22px]">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#fff8f6] border-b border-[#ffe9e1] px-6 py-4 shadow-xl flex flex-col gap-3">
          <button
            onClick={() => scrollTo('lo-mas-pedido')}
            className="text-left py-2 font-sans font-semibold text-[#502416] text-[16px] border-b border-[#f7ddd3]/50"
          >
            Lo más pedido
          </button>
          <button
            onClick={() => scrollTo('menu')}
            className="text-left py-2 font-sans font-semibold text-[#502416] text-[16px] border-b border-[#f7ddd3]/50"
          >
            Menú Completo
          </button>
          <button
            onClick={() => scrollTo('eventos')}
            className="text-left py-2 font-sans font-semibold text-[#502416] text-[16px] border-b border-[#f7ddd3]/50"
          >
            Tus Eventos Caseritos
          </button>
          <button
            onClick={() => scrollTo('preguntas')}
            className="text-left py-2 font-sans font-semibold text-[#502416] text-[16px]"
          >
            Preguntas Frecuentes
          </button>
        </div>
      )}
    </header>
  );
};
