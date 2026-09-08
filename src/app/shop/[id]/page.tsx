import { redirect } from 'next/navigation';
import { products } from '@/config/products';

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default function ProductDetailPage() {
  redirect('/capabilities');
}
