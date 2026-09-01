'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ShoppingBag, Check, ShieldCheck, Truck, RefreshCw } from 'lucide-react';
import { products, Product } from '@/config/products';
import { siteConfig } from '@/config/site';
import { useCart } from '@/context/CartContext';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ProductCard } from '@/components/shop/ProductCard';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const productId = params?.id as string;

  const product = products.find((p) => p.id === productId) || products[0];

  const { addItem } = useCart();
  const [activeImage, setActiveImage] = useState<string>(product.images[0]);
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  // Accordion open state
  const [openSection, setOpenSection] = useState<'details' | 'fabric' | 'fit' | 'care' | null>('details');

  // Sticky mobile add-to-cart bar trigger state
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    setActiveImage(product.images[0]);
    setSelectedSize(product.sizes[0]);
    setSelectedColor(product.colors[0]);
  }, [product]);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger sticky bar on mobile when scrolled 400px down
      if (window.scrollY > 400) {
        setShowStickyBar(true);
      } else {
        setShowStickyBar(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAddToCart = () => {
    addItem(product, selectedSize, selectedColor, 1);
  };

  const relatedProducts = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .concat(products.filter((p) => p.id !== product.id))
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-cream-100 py-12 md:py-24 px-6 md:px-12 font-sans relative">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="text-xs font-mono tracking-widest uppercase text-editorial-muted mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-near-black">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-near-black">Shop</Link>
          <span>/</span>
          <span className="text-near-black">{product.name}</span>
        </div>

        {/* Main Product Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Gallery Column (7 cols on desktop) */}
          <div className="lg:col-span-7 flex flex-col md:flex-row-reverse gap-4">
            {/* Main Featured Image */}
            <div className="relative aspect-[3/4] w-full bg-cream-200 overflow-hidden shadow-sm">
              <Image
                src={activeImage}
                alt={product.name}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
                className="object-cover transition-opacity duration-500"
              />
            </div>

            {/* Thumbnail Column */}
            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-x-visible shrink-0 pb-2 md:pb-0">
              {product.images.map((imgUrl, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(imgUrl)}
                  className={`relative w-20 h-24 bg-cream-200 overflow-hidden border-2 transition-all ${
                    activeImage === imgUrl ? 'border-near-black scale-95' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <Image src={imgUrl} alt={`${product.name} thumbnail ${i}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details & Actions Form (5 cols on desktop) */}
          <div className="lg:col-span-5 space-y-8 sticky top-28">
            <div>
              <span className="text-xs font-mono tracking-[0.2em] uppercase text-editorial-muted block mb-2">
                Atelier Series &bull; {product.category}
              </span>
              <h1 className="font-serif text-3xl md:text-5xl font-normal text-near-black tracking-tight mb-3">
                {product.name}
              </h1>
              <p className="text-sm font-sans text-editorial-muted font-light mb-4">
                {product.subtitle}
              </p>
              <p className="text-2xl font-mono font-semibold text-near-black">
                {siteConfig.currency.symbol}{product.price}
              </p>
            </div>

            <p className="text-xs md:text-sm font-sans font-light text-near-black/80 leading-relaxed border-t border-b border-cream-200/80 py-6">
              {product.description}
            </p>

            {/* Color Swatches Selection */}
            <div>
              <div className="flex justify-between text-xs font-mono tracking-wider uppercase mb-3">
                <span className="text-editorial-muted">Color:</span>
                <span className="text-near-black font-semibold">{selectedColor.name}</span>
              </div>
              <div className="flex gap-4">
                {product.colors.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setSelectedColor(c)}
                    className={`w-9 h-9 rounded-full border-2 flex items-center justify-center transition-all ${
                      selectedColor.name === c.name ? 'border-near-black ring-2 ring-near-black/20 scale-105' : 'border-cream-300'
                    }`}
                    style={{ backgroundColor: c.hex }}
                    aria-label={`Select color ${c.name}`}
                  >
                    {selectedColor.name === c.name && (
                      <Check className="w-4 h-4 text-white drop-shadow-xs" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <div className="flex justify-between items-center text-xs font-mono tracking-wider uppercase mb-3">
                <span className="text-editorial-muted">Select Size:</span>
                <button className="text-near-black underline text-[11px]">Size & Fit Guide</button>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 text-xs font-mono uppercase tracking-wider border transition-all ${
                      selectedSize === size
                        ? 'bg-near-black text-cream-100 border-near-black font-semibold'
                        : 'bg-cream-50 text-near-black border-cream-300 hover:border-near-black'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Primary Desktop Add To Bag CTA */}
            <button
              onClick={handleAddToCart}
              className="w-full py-5 bg-near-black text-cream-100 text-xs font-mono tracking-widest uppercase hover:bg-editorial-charcoal transition-all shadow-xl flex items-center justify-center gap-3 group"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Add to Bag &bull; {siteConfig.currency.symbol}{product.price}</span>
            </button>

            {/* Guarantees / Shipping info */}
            <div className="grid grid-cols-3 gap-4 pt-4 text-[10px] font-mono tracking-widest uppercase text-editorial-muted border-t border-cream-200 text-center">
              <div className="flex flex-col items-center gap-1.5">
                <Truck className="w-4 h-4 stroke-[1.2]" />
                <span>Global Express</span>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <RefreshCw className="w-4 h-4 stroke-[1.2]" />
                <span>30-Day Returns</span>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 stroke-[1.2]" />
                <span>Authentic Guarantee</span>
              </div>
            </div>

            {/* Accordion Information Sections */}
            <div className="pt-6 border-t border-cream-200/80 space-y-4">
              {/* Accordion Item: Garment Details */}
              <div className="border-b border-cream-200 pb-4">
                <button
                  onClick={() => setOpenSection(openSection === 'details' ? null : 'details')}
                  className="w-full flex justify-between items-center text-xs font-mono tracking-widest uppercase text-near-black font-semibold py-2"
                >
                  <span>Garment Details</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openSection === 'details' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openSection === 'details' && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="text-xs text-editorial-muted font-light space-y-2 pt-3 list-disc list-inside font-sans"
                    >
                      {product.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>

              {/* Accordion Item: Fabric & Origin */}
              <div className="border-b border-cream-200 pb-4">
                <button
                  onClick={() => setOpenSection(openSection === 'fabric' ? null : 'fabric')}
                  className="w-full flex justify-between items-center text-xs font-mono tracking-widest uppercase text-near-black font-semibold py-2"
                >
                  <span>Fabric & Sourcing</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openSection === 'fabric' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openSection === 'fabric' && (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="text-xs text-editorial-muted font-light pt-3 leading-relaxed font-sans"
                    >
                      {product.fabric}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Accordion Item: Fit & Silhouette */}
              <div className="border-b border-cream-200 pb-4">
                <button
                  onClick={() => setOpenSection(openSection === 'fit' ? null : 'fit')}
                  className="w-full flex justify-between items-center text-xs font-mono tracking-widest uppercase text-near-black font-semibold py-2"
                >
                  <span>Fit & Silhouette</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openSection === 'fit' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openSection === 'fit' && (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="text-xs text-editorial-muted font-light pt-3 leading-relaxed font-sans"
                    >
                      {product.fit}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Accordion Item: Care Instructions */}
              <div className="border-b border-cream-200 pb-4">
                <button
                  onClick={() => setOpenSection(openSection === 'care' ? null : 'care')}
                  className="w-full flex justify-between items-center text-xs font-mono tracking-widest uppercase text-near-black font-semibold py-2"
                >
                  <span>Garment Care</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openSection === 'care' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openSection === 'care' && (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="text-xs text-editorial-muted font-light pt-3 leading-relaxed font-sans"
                    >
                      {product.care}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* Related Garments Section */}
        <div className="mt-28 pt-16 border-t border-cream-300/40">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-xs font-mono tracking-widest uppercase text-editorial-muted block mb-2">Complementary Pieces</span>
              <h2 className="font-serif text-3xl font-light text-near-black">Complete the Look</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {relatedProducts.map((rel, idx) => (
              <ScrollReveal key={rel.id} delay={idx * 0.1}>
                <ProductCard product={rel} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* STICKY ADD TO CART BAR ON PDP MOBILE VIEW (PROMPT REQUIREMENT) */}
      <AnimatePresence>
        {showStickyBar && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-0 left-0 right-0 z-40 bg-near-black text-cream-100 p-4 border-t border-cream-100/20 shadow-2xl md:hidden flex items-center justify-between gap-4"
          >
            <div className="flex flex-col min-w-0">
              <span className="font-serif text-sm truncate font-medium">{product.name}</span>
              <span className="text-[11px] font-mono text-cream-300">
                Size: {selectedSize} &bull; {siteConfig.currency.symbol}{product.price}
              </span>
            </div>

            <button
              onClick={handleAddToCart}
              className="px-6 py-3 bg-cream-100 text-near-black text-xs font-mono tracking-widest uppercase shrink-0 font-semibold hover:bg-cream-200 active:scale-95 transition-transform flex items-center gap-2"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Add to Bag</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
