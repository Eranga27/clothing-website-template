'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import { Product } from '@/config/products';
import { siteConfig } from '@/config/site';
import { useCart } from '@/context/CartContext';
import { EDITORIAL_EASING } from '../ui/ScrollReveal';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, onClose }) => {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<{ name: string; hex: string } | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  if (!product) return null;

  const currentSize = selectedSize || product.sizes[0];
  const currentColor = selectedColor || product.colors[0];

  const handleAddToCart = () => {
    addItem(product, currentSize, currentColor, 1);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-near-black backdrop-blur-xs"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.4, ease: EDITORIAL_EASING }}
          className="relative w-full max-w-4xl bg-cream-100 text-near-black z-50 shadow-2xl overflow-hidden border border-cream-300/60 max-h-[90vh] flex flex-col md:flex-row"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 text-editorial-muted hover:text-near-black bg-cream-100/80 rounded-full"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 stroke-[1.5]" />
          </button>

          {/* Gallery Column */}
          <div className="w-full md:w-1/2 bg-cream-200 relative aspect-[3/4] md:aspect-auto">
            <Image
              src={product.images[activeImageIndex] || product.images[0]}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            {/* Thumbnail dots */}
            {product.images.length > 1 && (
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                {product.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImageIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      activeImageIndex === i ? 'bg-near-black w-6' : 'bg-near-black/40'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Product Form Column */}
          <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-between overflow-y-auto">
            <div>
              <span className="text-[11px] font-mono tracking-widest uppercase text-editorial-muted block mb-1">
                {product.category}
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-normal text-near-black mb-2 leading-tight">
                {product.name}
              </h2>
              <p className="text-lg font-mono font-semibold text-near-black mb-6">
                {siteConfig.currency.symbol}{product.price}
              </p>

              <p className="text-xs text-editorial-muted font-light leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Color selector */}
              <div className="mb-6">
                <span className="text-xs font-mono tracking-wider uppercase text-editorial-muted block mb-2">
                  Color: <span className="text-near-black">{currentColor.name}</span>
                </span>
                <div className="flex gap-3">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c)}
                      className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all ${
                        currentColor.name === c.name ? 'border-near-black scale-110' : 'border-cream-300'
                      }`}
                      style={{ backgroundColor: c.hex }}
                    >
                      {currentColor.name === c.name && (
                        <Check className="w-3.5 h-3.5 text-white filter drop-shadow-xs" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size selector */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-mono tracking-wider uppercase text-editorial-muted">
                    Size: <span className="text-near-black">{currentSize}</span>
                  </span>
                  <span className="text-[10px] font-mono text-editorial-muted underline cursor-pointer">
                    Size Guide
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`px-4 py-2.5 text-xs font-mono uppercase tracking-wider border transition-all ${
                        currentSize === s
                          ? 'bg-near-black text-cream-100 border-near-black'
                          : 'bg-cream-50 text-near-black border-cream-300 hover:border-near-black'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Add to Cart button */}
            <button
              onClick={handleAddToCart}
              className="w-full py-4 bg-near-black text-cream-100 text-xs font-mono tracking-widest uppercase hover:bg-editorial-charcoal transition-all flex items-center justify-center gap-3 shadow-lg"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Add to Bag &bull; {siteConfig.currency.symbol}{product.price}</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
