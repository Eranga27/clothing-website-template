'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag, Eye } from 'lucide-react';
import { Product } from '@/config/products';
import { siteConfig } from '@/config/site';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Quick add default first size & color
    const defaultSize = product.sizes[0] || 'M';
    const defaultColor = product.colors[0] || { name: 'Standard', hex: '#111' };
    addItem(product, defaultSize, defaultColor, 1);
  };

  return (
    <div
      className="group relative flex flex-col font-sans"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container with Crossfade on Hover */}
      <Link href={`/shop/${product.id}`} className="relative aspect-[3/4] w-full overflow-hidden bg-cream-200 block">
        {/* Primary Image */}
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`object-cover transition-opacity duration-700 ease-editorial ${
            isHovered && product.hoverImage ? 'opacity-0' : 'opacity-100'
          }`}
        />

        {/* Hover Crossfade Image */}
        {product.hoverImage && (
          <Image
            src={product.hoverImage}
            alt={`${product.name} lifestyle`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={`object-cover transition-opacity duration-700 ease-editorial ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Badge */}
        {product.isNew && (
          <span className="absolute top-4 left-4 bg-near-black text-cream-100 px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest z-10">
            New Arrival
          </span>
        )}

        {/* Hover Quick Action Buttons */}
        <div className="absolute inset-x-4 bottom-4 z-10 flex gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 ease-editorial">
          <button
            onClick={handleQuickAdd}
            className="flex-1 py-3 bg-cream-100 text-near-black text-[11px] font-mono tracking-widest uppercase hover:bg-near-black hover:text-cream-100 transition-colors shadow-lg flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Quick Add</span>
          </button>

          {onQuickView && (
            <button
              onClick={(e) => {
                e.preventDefault();
                onQuickView(product);
              }}
              className="p-3 bg-cream-100/90 text-near-black hover:bg-near-black hover:text-cream-100 transition-colors shadow-lg"
              aria-label="Quick view"
            >
              <Eye className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </Link>

      {/* Info Container */}
      <div className="pt-4 flex flex-col justify-between flex-1">
        <div>
          <div className="flex justify-between items-baseline gap-2">
            <Link href={`/shop/${product.id}`}>
              <h3 className="font-serif text-base font-normal text-near-black group-hover:text-editorial-muted transition-colors leading-snug">
                {product.name}
              </h3>
            </Link>
            <span className="text-xs font-mono text-near-black font-semibold shrink-0">
              {siteConfig.currency.symbol}{product.price}
            </span>
          </div>

          <p className="text-xs text-editorial-muted mt-1 font-light line-clamp-1">
            {product.subtitle}
          </p>
        </div>

        {/* Color Swatches */}
        <div className="flex items-center gap-1.5 mt-3">
          {product.colors.map((c) => (
            <span
              key={c.name}
              title={c.name}
              className="w-2.5 h-2.5 rounded-full border border-cream-300 shadow-2xs"
              style={{ backgroundColor: c.hex }}
            />
          ))}
          <span className="text-[10px] text-editorial-muted font-mono ml-1">
            {product.colors.length} {product.colors.length === 1 ? 'shade' : 'shades'}
          </span>
        </div>
      </div>
    </div>
  );
};
