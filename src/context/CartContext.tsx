'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '@/config/products';
import { siteConfig } from '@/config/site';

export interface CartItem {
  id: string; // unique cart item id (product.id + size + color)
  product: Product;
  size: string;
  color: { name: string; hex: string };
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addItem: (product: Product, size: string, color: { name: string; hex: string }, quantity?: number) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  subtotal: number;
  totalItems: number;
  freeShippingProgress: number; // 0 to 100 percentage
  amountNeededForFreeShipping: number;
  promoCode: string;
  discount: number;
  applyPromoCode: (code: string) => boolean;
  toastMessage: string | null;
  clearToast: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [promoCode, setPromoCode] = useState<string>('');
  const [discount, setDiscount] = useState<number>(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Load cart from localStorage on client side mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('atelier_cart');
      if (savedCart) {
        setItems(JSON.parse(savedCart));
      }
    } catch (e) {
      console.error('Failed to load cart', e);
    }
  }, []);

  // Save cart to localStorage whenever items change
  useEffect(() => {
    try {
      localStorage.setItem('atelier_cart', JSON.stringify(items));
    } catch (e) {
      console.error('Failed to save cart', e);
    }
  }, [items]);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  const toggleCart = () => setIsOpen((prev) => !prev);
  const clearToast = () => setToastMessage(null);

  const addItem = (
    product: Product,
    size: string,
    color: { name: string; hex: string },
    quantity: number = 1
  ) => {
    const cartItemId = `${product.id}-${size}-${color.name.toLowerCase().replace(/\s+/g, '-')}`;

    setItems((prevItems) => {
      const existingIndex = prevItems.findIndex((item) => item.id === cartItemId);
      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [
          ...prevItems,
          {
            id: cartItemId,
            product,
            size,
            color,
            quantity,
          },
        ];
      }
    });

    setToastMessage(`Added ${product.name} (${size}) to your bag.`);
    setIsOpen(true);
  };

  const removeItem = (id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const threshold = siteConfig.currency.freeShippingThreshold;
  const amountNeededForFreeShipping = Math.max(0, threshold - subtotal);
  const freeShippingProgress = Math.min(100, (subtotal / threshold) * 100);

  const applyPromoCode = (code: string): boolean => {
    const clean = code.trim().toUpperCase();
    if (clean === 'EDITORIAL10' || clean === 'CLIENT10') {
      setPromoCode(clean);
      setDiscount(0.1); // 10% off
      return true;
    } else if (clean === 'VIP20') {
      setPromoCode(clean);
      setDiscount(0.2); // 20% off
      return true;
    }
    return false;
  };

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        openCart,
        closeCart,
        toggleCart,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        subtotal,
        totalItems,
        freeShippingProgress,
        amountNeededForFreeShipping,
        promoCode,
        discount,
        applyPromoCode,
        toastMessage,
        clearToast,
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
