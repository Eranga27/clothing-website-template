'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { products, Product } from '@/config/products';
import { ProductCard } from '@/components/shop/ProductCard';
import { QuickViewModal } from '@/components/shop/QuickViewModal';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ArrowUpDown } from 'lucide-react';

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const searchQuery = searchParams.get('search') || '';

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'newest'>('featured');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const categories = [
    { id: 'all', label: 'Shop All' },
    { id: 'outerwear', label: 'Outerwear' },
    { id: 'tailoring', label: 'Tailoring' },
    { id: 'knitwear', label: 'Knitwear' },
    { id: 'dresses', label: 'Dresses' },
    { id: 'accessories', label: 'Accessories' },
  ];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by Category
    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Filter by Search Query
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.subtitle.toLowerCase().includes(q) ||
          p.fabric.toLowerCase().includes(q)
      );
    }

    // Sort Products
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'newest') {
      result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    }

    return result;
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <main className="min-h-screen bg-cream-100 py-16 md:py-24 px-6 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-editorial-muted block mb-3">
              Garments & Artifacts
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-light text-near-black tracking-tight mb-4">
              Atelier Catalog
            </h1>
            <p className="text-xs md:text-sm font-sans font-light text-editorial-muted leading-relaxed">
              Explore our permanent collection of structured coats, silk column gowns, double-faced cashmere, and fine wool gabardine.
            </p>
          </div>
        </ScrollReveal>

        {/* Filter Controls & Category Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 mb-12 border-b border-cream-300/40">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-4 text-xs font-mono tracking-widest uppercase">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-near-black text-cream-100 shadow-sm'
                    : 'bg-cream-200/60 text-near-black hover:bg-cream-300/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-3 text-xs font-mono tracking-widest uppercase">
            <ArrowUpDown className="w-3.5 h-3.5 text-editorial-muted" />
            <span className="text-editorial-muted">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-cream-200/80 border border-cream-300 text-near-black px-3 py-2 text-xs focus:outline-none focus:border-near-black font-mono uppercase"
            >
              <option value="featured">Featured Order</option>
              <option value="newest">New Arrivals First</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-24 text-center">
            <p className="font-serif text-2xl text-editorial-muted italic mb-4">No garments match your selection.</p>
            <button
              onClick={() => setSelectedCategory('all')}
              className="px-6 py-2.5 bg-near-black text-cream-100 text-xs font-mono tracking-widest uppercase"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {filteredProducts.map((product, idx) => (
              <ScrollReveal key={product.id} delay={idx * 0.08}>
                <ProductCard product={product} onQuickView={(p) => setQuickViewProduct(p)} />
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </main>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-cream-100 flex items-center justify-center">
        <span className="text-xs font-mono tracking-widest uppercase text-editorial-muted animate-pulse">
          Loading catalog...
        </span>
      </main>
    }>
      <ShopContent />
    </Suspense>
  );
}
