'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { siteConfig } from '@/config/site';
import { ShieldCheck, Lock, ArrowLeft, CheckCircle2, CreditCard } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CheckoutPage() {
  const {
    items,
    subtotal,
    discount,
    promoCode,
    clearCart,
  } = useCart();

  const [paymentMethod, setPaymentMethod] = useState<'card' | 'apple' | 'klarna'>('card');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [orderId, setOrderId] = useState('');

  const discountAmount = subtotal * discount;
  const shippingCost = subtotal >= siteConfig.currency.freeShippingThreshold || items.length === 0 ? 0 : 25;
  const tax = subtotal * 0.08;
  const finalTotal = Math.max(0, subtotal - discountAmount + shippingCost + tax);

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsCompleted(true);
      setOrderId(`AT-2026-${Math.floor(100000 + Math.random() * 900000)}`);
      clearCart();
    }, 1800);
  };

  if (isCompleted) {
    return (
      <main className="min-h-screen bg-cream-100 py-24 px-6 flex items-center justify-center font-sans">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-lg w-full bg-cream-50 border border-cream-300 p-8 md:p-12 text-center space-y-6 shadow-xl"
        >
          <div className="flex justify-center text-emerald-700">
            <CheckCircle2 className="w-16 h-16 stroke-[1.2]" />
          </div>
          <span className="text-xs font-mono tracking-widest uppercase text-editorial-muted block">
            Order Confirmation
          </span>
          <h1 className="font-serif text-3xl font-light text-near-black">
            Thank you for your order.
          </h1>
          <p className="text-xs font-mono text-near-black bg-cream-200 py-2 px-4 inline-block uppercase">
            Order Ref: #{orderId}
          </p>
          <p className="text-xs text-editorial-muted font-light leading-relaxed">
            A confirmation email with garment tracking has been sent to your inbox. Your atelier pieces are being prepared for dispatch.
          </p>
          <div className="pt-4 border-t border-cream-200">
            <Link
              href="/"
              className="inline-block px-8 py-3.5 bg-near-black text-cream-100 text-xs font-mono tracking-widest uppercase hover:bg-editorial-charcoal transition-colors"
            >
              Return to Homepage
            </Link>
          </div>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-cream-100 py-12 md:py-20 px-6 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Navigation back */}
        <div className="mb-8">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-editorial-muted hover:text-near-black transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Shop</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Form Details Column (7 cols) */}
          <div className="lg:col-span-7 space-y-10">
            <div>
              <span className="text-xs font-mono tracking-[0.2em] uppercase text-editorial-muted block mb-2">
                Secure Express Checkout
              </span>
              <h1 className="font-serif text-3xl md:text-4xl font-light text-near-black tracking-tight">
                Shipping & Concierge Details
              </h1>
            </div>

            <form id="checkout-form" onSubmit={handleSubmitOrder} className="space-y-8">
              {/* Contact Info */}
              <div className="space-y-4">
                <h2 className="text-xs font-mono tracking-widest uppercase text-near-black font-semibold border-b border-cream-200 pb-2">
                  01. Contact Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider text-editorial-muted block mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="client@atelier.com"
                      className="w-full bg-cream-50 border border-cream-300 px-4 py-3 text-xs focus:outline-none focus:border-near-black font-sans"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider text-editorial-muted block mb-1">
                      Phone Number (For Courier)
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-cream-50 border border-cream-300 px-4 py-3 text-xs focus:outline-none focus:border-near-black font-sans"
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="space-y-4">
                <h2 className="text-xs font-mono tracking-widest uppercase text-near-black font-semibold border-b border-cream-200 pb-2">
                  02. Shipping Address
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider text-editorial-muted block mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full bg-cream-50 border border-cream-300 px-4 py-3 text-xs focus:outline-none focus:border-near-black"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider text-editorial-muted block mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full bg-cream-50 border border-cream-300 px-4 py-3 text-xs focus:outline-none focus:border-near-black"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-mono uppercase tracking-wider text-editorial-muted block mb-1">
                    Street Address *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="740 Park Avenue, Apt 12B"
                    className="w-full bg-cream-50 border border-cream-300 px-4 py-3 text-xs focus:outline-none focus:border-near-black"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider text-editorial-muted block mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full bg-cream-50 border border-cream-300 px-4 py-3 text-xs focus:outline-none focus:border-near-black"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider text-editorial-muted block mb-1">
                      Country *
                    </label>
                    <select className="w-full bg-cream-50 border border-cream-300 px-4 py-3 text-xs focus:outline-none focus:border-near-black uppercase font-mono">
                      <option value="US">United States</option>
                      <option value="FR">France</option>
                      <option value="UK">United Kingdom</option>
                      <option value="JP">Japan</option>
                      <option value="CA">Canada</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider text-editorial-muted block mb-1">
                      Postal Code *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full bg-cream-50 border border-cream-300 px-4 py-3 text-xs focus:outline-none focus:border-near-black font-mono"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="space-y-4">
                <h2 className="text-xs font-mono tracking-widest uppercase text-near-black font-semibold border-b border-cream-200 pb-2">
                  03. Payment Method
                </h2>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`py-3 px-4 text-xs font-mono uppercase border text-center transition-all ${
                      paymentMethod === 'card'
                        ? 'bg-near-black text-cream-100 border-near-black'
                        : 'bg-cream-50 text-near-black border-cream-300'
                    }`}
                  >
                    Credit Card
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('apple')}
                    className={`py-3 px-4 text-xs font-mono uppercase border text-center transition-all ${
                      paymentMethod === 'apple'
                        ? 'bg-near-black text-cream-100 border-near-black'
                        : 'bg-cream-50 text-near-black border-cream-300'
                    }`}
                  >
                    Apple Pay
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('klarna')}
                    className={`py-3 px-4 text-xs font-mono uppercase border text-center transition-all ${
                      paymentMethod === 'klarna'
                        ? 'bg-near-black text-cream-100 border-near-black'
                        : 'bg-cream-50 text-near-black border-cream-300'
                    }`}
                  >
                    Klarna 4x
                  </button>
                </div>

                {paymentMethod === 'card' && (
                  <div className="space-y-4 pt-2">
                    <div>
                      <label className="text-[11px] font-mono uppercase tracking-wider text-editorial-muted block mb-1">
                        Card Number
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="4532 &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; 8892"
                          required
                          className="w-full bg-cream-50 border border-cream-300 px-4 py-3 text-xs focus:outline-none focus:border-near-black font-mono"
                        />
                        <CreditCard className="w-4 h-4 text-editorial-muted absolute right-4 top-3.5" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-[11px] font-mono uppercase tracking-wider text-editorial-muted block mb-1">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          placeholder="MM / YY"
                          required
                          className="w-full bg-cream-50 border border-cream-300 px-4 py-3 text-xs focus:outline-none focus:border-near-black font-mono"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] font-mono uppercase tracking-wider text-editorial-muted block mb-1">
                          Security Code (CVC)
                        </label>
                        <input
                          type="text"
                          placeholder="123"
                          required
                          className="w-full bg-cream-50 border border-cream-300 px-4 py-3 text-xs focus:outline-none focus:border-near-black font-mono"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting || items.length === 0}
                className="w-full py-5 bg-near-black text-cream-100 text-xs font-mono tracking-widest uppercase hover:bg-editorial-charcoal transition-all shadow-xl flex items-center justify-center gap-3 disabled:opacity-50"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>
                  {isSubmitting ? 'Processing Payment...' : `Complete Order \u2022 ${siteConfig.currency.symbol}${finalTotal.toFixed(2)}`}
                </span>
              </button>
            </form>
          </div>

          {/* Order Summary Sidebar (5 cols) */}
          <div className="lg:col-span-5 bg-cream-200/50 p-6 md:p-8 border border-cream-300/60 h-fit space-y-6">
            <h2 className="font-serif text-xl tracking-wide uppercase border-b border-cream-300/80 pb-4">
              Order Summary ({items.length} {items.length === 1 ? 'item' : 'items'})
            </h2>

            {/* Item list */}
            <div className="space-y-4 max-h-80 overflow-y-auto pr-2">
              {items.length === 0 ? (
                <p className="text-xs font-mono text-editorial-muted italic">Your bag is empty.</p>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="relative w-16 h-20 bg-cream-200 shrink-0 overflow-hidden">
                      <Image src={item.product.images[0]} alt={item.product.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between text-xs">
                      <div>
                        <h3 className="font-serif text-sm font-medium">{item.product.name}</h3>
                        <p className="text-[11px] font-mono text-editorial-muted uppercase mt-0.5">
                          Size: {item.size} &bull; Qty: {item.quantity}
                        </p>
                      </div>
                      <p className="font-mono font-semibold">
                        {siteConfig.currency.symbol}{item.product.price * item.quantity}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Calculations */}
            <div className="space-y-2 text-xs font-mono tracking-wider uppercase border-t border-cream-300/80 pt-4 text-editorial-muted">
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

              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{shippingCost === 0 ? 'Complimentary' : `${siteConfig.currency.symbol}${shippingCost}`}</span>
              </div>

              <div className="flex justify-between">
                <span>Estimated Tax (8%)</span>
                <span>{siteConfig.currency.symbol}{tax.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-near-black font-semibold text-sm pt-4 border-t border-cream-300">
                <span>Total</span>
                <span>{siteConfig.currency.symbol}{finalTotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Security note */}
            <div className="flex items-center gap-3 text-[11px] font-mono text-editorial-muted pt-2 border-t border-cream-300/50">
              <ShieldCheck className="w-4 h-4 text-near-black shrink-0" />
              <span>256-bit SSL encrypted checkout for complete privacy.</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
