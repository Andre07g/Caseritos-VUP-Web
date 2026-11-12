import React from 'react';
import { CartProvider } from './context/CartContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PopularSection } from './components/PopularSection';
import { MenuSection } from './components/MenuSection';
import { EventsSection } from './components/EventsSection';
import { HowToOrderSection } from './components/HowToOrderSection';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-[#fff8f6] text-[#261813] flex flex-col font-sans selection:bg-[#ffdbc8] selection:text-[#321300]">
        <Header />

        <main className="flex-1 w-full">
          <Hero />
          <PopularSection />
          <MenuSection />
          <EventsSection />
          <HowToOrderSection />
          <AboutSection />
          <TestimonialsSection />
          <FaqSection />
          <FinalCtaSection />
        </main>

        <Footer />
        <CartDrawer />
        <FloatingWhatsApp />
      </div>
    </CartProvider>
  );
}
