/**
 * Client & Brand Configuration
 * 
 * Edit these values to rebrand or customize the store header, currency, contact details, 
 * taglines, and brand philosophy without modifying code structure.
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
  // Brand Name - Replace with your client's name or brand identity
  name: "ATELIER VÉRONIQUE",
  tagline: "Quiet Elegance & Architectural Form",
  description: "Modern editorial minimalism crafted with tactile Italian wool, organic silks, and deliberate geometry.",
  
  currency: {
    code: "USD",
    symbol: "$",
    freeShippingThreshold: 350,
  },

  announcement: "Complimentary global standard shipping on orders over $350",

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

  // Sleek fashion editorial hero video & poster image
  heroVideoUrl: "/media/hero.mp4",
  heroFallbackImage: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2000&auto=format&fit=crop",

  contact: {
    email: "concierge@atelierveronique.com",
    address: "Rue du Faubourg Saint-Honoré, 75008 Paris",
    instagram: "@atelier.veronique",
  },
};
