import React from 'react';
import { notFound } from 'next/navigation';
import { products } from '@/config/products';
import { ProductDetailClient } from '@/components/shop/ProductDetailClient';

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

interface PageProps {
  params: {
    id: string;
  };
}

export default function ProductDetailPage({ params }: PageProps) {
  const product = products.find((p) => p.id === params.id) || products[0];

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}
