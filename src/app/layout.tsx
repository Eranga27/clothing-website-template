import type { Metadata } from 'next';
import './globals.css';
import { siteConfig } from '@/config/site';
import { CartProvider } from '@/context/CartContext';
import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CartDrawer } from '@/components/layout/CartDrawer';
import { Toast } from '@/components/ui/Toast';

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} \u2022 ${siteConfig.tagline}`,
    template: `%s \u2022 ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ['editorial clothing brand', 'luxury fashion', 'minimalism', 'Bottega Veneta aesthetic', 'Aesop design', 'cashmere overcoat', 'organic cotton trench'],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-cream-100 text-near-black antialiased selection:bg-near-black selection:text-cream-100 min-h-screen flex flex-col justify-between">
        <CartProvider>
          <AnnouncementBar />
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
          <CartDrawer />
          <Toast />
        </CartProvider>
      </body>
    </html>
  );
}
