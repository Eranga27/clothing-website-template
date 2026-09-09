import type { Metadata } from 'next';
import './globals.css';
import { siteConfig } from '@/config/site';
import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Preloader } from '@/components/ui/Preloader';
import { PageTransition } from '@/components/ui/PageTransition';
import { SmoothScroll } from '@/components/ui/SmoothScroll';

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} \u2022 ${siteConfig.subtagline}`,
    template: `%s \u2022 ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'offshore garment manufacturing',
    'NAXIS',
    'apparel manufacturing partner',
    'sports fits activewear manufacturing',
    'leather belts manufacturing',
    'SEDEX certified apparel manufacturing',
    'WRAP compliant clothing manufacturer',
    'CT-PAT validated offshore production',
    'Sri Lanka garment manufacturing',
    'Vietnam apparel production',
    'India textile manufacturing',
    'Bangladesh garment factory',
    'China apparel trims',
    'Italy pattern making tailoring',
  ],
  openGraph: {
    title: `${siteConfig.name} \u2022 ${siteConfig.subtagline}`,
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
      <body className="bg-cream-100 text-naxis-brown antialiased selection:bg-naxis-brown selection:text-naxis-gold-light min-h-screen flex flex-col justify-between">
        <SmoothScroll>
          <Preloader />
          <Navbar />
          <div className="flex-1">
            <PageTransition>{children}</PageTransition>
          </div>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
