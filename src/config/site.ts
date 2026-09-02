/**
 * Client & Brand Configuration
 * 
 * Eranga's Clothing Store — Sri Lanka & Australia
 */

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  currency: {
    code: string;
    symbol: string;
    freeShippingThreshold: number;
  };
  navigation: Array<{ name: string; href: string }>;
  announcement: string;
  philosophy: string;
  heroVideoUrl: string;
  heroFallbackImage: string;
  contact: {
    email: string;
    address: string;
    instagram: string;
  };
}

export const siteConfig: SiteConfig = {
  // Brand Name - Eranga's Clothing Store
  name: "Eranga's Clothing Store",
  tagline: "Sri Lanka & Australia • Quiet Luxury & Fine Tailoring",
  description: "Premier luxury clothing store serving Sri Lanka and Australia. Crafted with tactile Italian wool, organic silks, and deliberate geometry.",
  
  currency: {
    code: "AUD",
    symbol: "$",
    freeShippingThreshold: 150,
  },

  announcement: "Complimentary express shipping across Sri Lanka & Australia on orders over $150 AUD",

  navigation: [
    { name: "Shop All", href: "/shop" },
    { name: "New Arrivals", href: "/shop?category=new" },
    { name: "Outerwear", href: "/shop?category=outerwear" },
    { name: "Tailoring", href: "/shop?category=tailoring" },
    { name: "Knitwear", href: "/shop?category=knitwear" },
    { name: "About", href: "/about" },
  ],

  // One-line brand philosophy (Section 2 on Home)
  philosophy: "We believe in deliberate garments—unhurried design, quiet confidence, and tactile geometry built to endure beyond seasons.",

  // Hero video & poster image
  heroVideoUrl: "/media/hero.mp4",
  heroFallbackImage: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2000&auto=format&fit=crop",

  contact: {
    email: "concierge@erangasclothing.com",
    address: "Gregory's Road, Colombo 07, Sri Lanka | Collins St, Melbourne VIC 3000, Australia",
    instagram: "@erangas.clothingstore",
  },
};
