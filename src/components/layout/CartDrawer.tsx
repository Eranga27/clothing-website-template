'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, Tag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { siteConfig } from '@/config/site';
import { EDITORIAL_EASING } from '../ui/ScrollReveal';

export const CartDrawer: React.FC = () => {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    subtotal,
    totalItems,
    freeShippingProgress,
    amountNeededForFreeShipping,
    promoCode,
    discount,
    applyPromoCode,
  } = useCart();

  const [inputCode, setInputCode] = useState('');
  const [promoError, setPromoError] = useState('');
  const [promoSuccess, setPromoSuccess] = useState('');

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError('');
    setPromoSuccess('');
    if (!inputCode.trim()) return;

    const success = applyPromoCode(inputCode);
    if (success) {
      setPromoSuccess(`Code ${inputCode.toUpperCase()} applied!`);
      setInputCode('');
    } else {
      setPromoError('Invalid code. Try VIP20 or EDITORIAL10');
    }
  };

  const discountAmount = subtotal * discount;
  const finalTotal = subtotal - discountAmount;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EDITORIAL_EASING }}
            onClick={closeCart}
            className="fixed inset-0 bg-near-black z-50 backdrop-blur-xs"
          />

          {/* Slide-out Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5, ease: EDITORIAL_EASING }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-cream-100 text-near-black z-50 shadow-2xl flex flex-col justify-between border-l border-cream-300/40 font-sans"
          >
            {/* Header */}
            <div className="p-6 border-b border-cream-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 stroke-[1.2] text-near-black" />
                <h2 className="font-serif text-lg tracking-wide uppercase">
                  Shopping Bag <span className="font-sans text-xs text-editorial-muted">({totalItems})</span>
                </h2>
              </div>
              <button
                onClick={closeCart}
                className="p-2 -mr-2 text-editorial-muted hover:text-near-black transition-colors"
                aria-label="Close cart drawer"
              >
                <X className="w-5 h-5 stroke-[1.5]" />
              </button>
            </div>

            {/* Free Shipping Meter */}
            <div className="px-6 py-3 bg-cream-200/50 border-b border-cream-200">
              <div className="flex justify-between text-xs tracking-wider text-editorial-muted mb-1.5 uppercase font-mono">
                <span>Complimentary Shipping</span>
                <span>
                  {amountNeededForFreeShipping === 0
                    ? 'Unlocked'
                    : `${siteConfig.currency.symbol}${amountNeededForFreeShipping.toFixed(0)} away`}
                </span>
              </div>
              <div className="w-full bg-cream-300 h-1 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${freeShippingProgress}%` }}
                  transition={{ duration: 0.6, ease: EDITORIAL_EASING }}
                  className="bg-accent-earth h-full"
                />
              </div>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-16">
                  <p className="font-serif text-xl italic text-editorial-muted mb-3">Your bag is currently empty.</p>
                  <p className="text-xs text-editorial-muted max-w-xs mb-8 uppercase tracking-widest font-mono">
                    Discover deliberate tailoring and quiet essential coats.
                  </p>
                  <button
                    onClick={closeCart}
                    className="inline-block px-8 py-3 bg-near-black text-cream-100 text-xs tracking-widest uppercase transition-transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Explore Collection
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4 pb-6 border-b border-cream-200/60 last:border-0">
                    <div className="relative w-20 h-28 bg-cream-200 shrink-0 overflow-hidden">
                      <Image
                        src={item.product.images[0]}
                        alt={item.product.name}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start gap-2">
                          <h3 className="font-serif text-sm font-medium tracking-wide text-near-black leading-snug">
                            {item.product.name}
                          </h3>
                          <p className="text-xs font-mono tracking-wider font-semibold text-near-black shrink-0">
                            {siteConfig.currency.symbol}{item.product.price * item.quantity}
                          </p>
                        </div>
                        <p className="text-[11px] text-editorial-muted uppercase tracking-widest font-mono mt-1">
                          Size: {item.size} &bull; {item.color.name}
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        {/* Quantity selector */}
                        <div className="flex items-center border border-cream-300/80 rounded-none bg-cream-50">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1.5 text-editorial-muted hover:text-near-black transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-xs font-mono">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1.5 text-editorial-muted hover:text-near-black transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-editorial-muted hover:text-red-800 transition-colors p-1"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4 stroke-[1.2]" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer Summary */}
            {items.length > 0 && (
              <div className="p-6 border-t border-cream-200 bg-cream-50/80 space-y-4">
                {/* Promo Code Input */}
                <form onSubmit={handleApplyPromo} className="flex gap-2">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      placeholder="PROMO CODE (e.g. VIP20)"
                      value={inputCode}
                      onChange={(e) => setInputCode(e.target.value)}
                      className="w-full bg-cream-100 border border-cream-300 px-3 py-2 text-xs uppercase font-mono tracking-wider focus:outline-none focus:border-near-black"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-cream-300 text-near-black text-xs font-mono uppercase hover:bg-near-black hover:text-cream-100 transition-colors"
                  >
                    Apply
                  </button>
                </form>

                {promoError && <p className="text-[11px] text-red-700 font-mono">{promoError}</p>}
                {promoSuccess && <p className="text-[11px] text-emerald-700 font-mono">{promoSuccess}</p>}

                {/* Subtotal & Discount details */}
                <div className="space-y-1.5 text-xs uppercase font-mono tracking-wider text-editorial-muted pt-2 border-t border-cream-200">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>{siteConfig.currency.symbol}{subtotal.toFixed(2)}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-emerald-800">
                      <span>Discount ({promoCode})</span>
                      <span>-{siteConfig.currency.symbol}{discountAmount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-near-black font-semibold pt-2 text-sm border-t border-cream-300/50">
                    <span>Total</span>
                    <span>{siteConfig.currency.symbol}{finalTotal.toFixed(2)}</span>
                  </div>
                </div>

                {/* Checkout CTA */}
                <Link
                  href="/checkout"
                  onClick={closeCart}
                  className="w-full flex items-center justify-center gap-3 py-4 bg-near-black text-cream-100 text-xs tracking-widest uppercase font-mono hover:bg-editorial-charcoal transition-all shadow-lg group"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4 stroke-[1.5] group-hover:translate-x-1 transition-transform" />
                </Link>
                <p className="text-[10px] text-center text-editorial-muted tracking-widest font-mono uppercase">
                  Taxes & duties calculated at checkout
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
