import React, { createContext, useContext, useState, useEffect } from 'react';
import { MenuItem } from '../data/menuData';

export interface CartItem {
  item: MenuItem;
  quantity: number;
  selectedOption?: string;
  notes?: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: MenuItem, option?: string) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, delta: number) => void;
  clearCart: () => void;
  totalCount: number;
  totalPrice: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  openCart: () => void;
  closeCart: () => void;
  customerName: string;
  setCustomerName: (name: string) => void;
  customerAddress: string;
  setCustomerAddress: (address: string) => void;
  orderNotes: string;
  setOrderNotes: (notes: string) => void;
  sendOrderViaWhatsApp: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('caseritos_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [orderNotes, setOrderNotes] = useState('');

  useEffect(() => {
    try {
      localStorage.setItem('caseritos_cart', JSON.stringify(items));
    } catch (e) {
      console.error(e);
    }
  }, [items]);

  const addItem = (item: MenuItem, option?: string) => {
    setItems((prev) => {
      const existingIndex = prev.findIndex((ci) => ci.item.id === item.id && ci.selectedOption === option);
      if (existingIndex >= 0) {
        const next = [...prev];
        next[existingIndex].quantity += 1;
        return next;
      }
      return [...prev, { item, quantity: 1, selectedOption: option }];
    });
  };

  const removeItem = (itemId: string) => {
    setItems((prev) => prev.filter((ci) => ci.item.id !== itemId));
  };

  const updateQuantity = (itemId: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((ci) => {
          if (ci.item.id === itemId) {
            const newQty = ci.quantity + delta;
            return newQty > 0 ? { ...ci, quantity: newQty } : null;
          }
          return ci;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const totalCount = items.reduce((sum, ci) => sum + ci.quantity, 0);
  const totalPrice = items.reduce((sum, ci) => sum + ci.item.price * ci.quantity, 0);

  const sendOrderViaWhatsApp = () => {
    if (items.length === 0) return;

    let text = `*¡Hola Caseritos Valledupar! Quiero hacer un pedido:*\n\n`;
    items.forEach((ci) => {
      const opt = ci.selectedOption ? ` (${ci.selectedOption})` : '';
      const subtotal = (ci.item.price * ci.quantity).toLocaleString('es-CO');
      text += `• ${ci.quantity}x ${ci.item.name}${opt} - $${subtotal}\n`;
    });

    text += `\n*Total:* $${totalPrice.toLocaleString('es-CO')} COP\n`;

    if (customerName.trim()) {
      text += `*Cliente:* ${customerName.trim()}\n`;
    }
    if (customerAddress.trim()) {
      text += `*Dirección / Barrio:* ${customerAddress.trim()}\n`;
    }
    if (orderNotes.trim()) {
      text += `*Notas:* ${orderNotes.trim()}\n`;
    }

    text += `\n¿Me confirman tiempo estimado de entrega y valor del domicilio? ¡Muchas gracias!`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/573137799512?text=${encoded}`, '_blank');
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalCount,
        totalPrice,
        isCartOpen,
        setIsCartOpen,
        openCart,
        closeCart,
        customerName,
        setCustomerName,
        customerAddress,
        setCustomerAddress,
        orderNotes,
        setOrderNotes,
        sendOrderViaWhatsApp,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
