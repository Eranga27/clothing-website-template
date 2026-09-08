/**
 * NAXIS — Offshore Garment Manufacturing
 * Corporate configuration file with verified company facts and client copy deck.
 */

export interface CountryHub {
  id: string;
  name: string;
  code: string;
  region: string;
  description: string;
  confirmPlaceholder: string;
  highlights: string[];
  image: string;
}

export interface CapabilityCategory {
  id: string;
  title: string;
  description: string;
  confirmPlaceholder?: string;
  image: string;
  specs: string[];
  isPlaceholder?: boolean;
}

export interface CertificationItem {
  acronym: string;
  name: string;
  tag: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  subtagline: string;
  description: string;
  announcement: string;
  brandStatement: string;
  marqueeItems: string[];
  /** @deprecated shim kept for any residual imports */
  currency: {
    code: string;
    symbol: string;
    freeShippingThreshold: number;
  };
  navigation: Array<{ name: string; href: string }>;
  heroVideoUrl: string;
  heroFallbackImage: string;
  contact: {
    phone: string;
    phoneDisplay: string;
    whatsapp: string;
    whatsappLink: string;
    email: string;
    hqAddress: string;
    offices: string[];
  };
  countries: CountryHub[];
  capabilities: CapabilityCategory[];
  certifications: CertificationItem[];
}

export const siteConfig: SiteConfig = {
  name: "NAXIS",
  tagline: "Offshore Garment Manufacturing",
  subtagline: "Precision Manufacturing. Six Countries. One Standard.",
  description: "NAXIS partners with global apparel brands to deliver offshore garment manufacturing you can trust — from sportswear to leather accessories, produced across Sri Lanka, India, Bangladesh, Vietnam, China, and Italy.",
  announcement: "SEDEX, WRAP & CT-PAT Certified Offshore Garment Manufacturing • Melbourne & Colombo",
  brandStatement: "We manufacture with the discipline of a global operation and the care of a small workshop.",
  
  marqueeItems: [
    "SEDEX CERTIFIED",
    "WRAP COMPLIANT",
    "CT-PAT VALIDATED",
    "SIX COUNTRIES",
    "ONE STANDARD",
  ],

  // Backward compatibility shim
  currency: {
    code: "AUD",
    symbol: "$",
    freeShippingThreshold: 500,
  },
  
  navigation: [
    { name: "Capabilities", href: "/#capabilities" },
    { name: "Global Network", href: "/#global-network" },
    { name: "Certifications", href: "/#certifications" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/#contact" },
  ],

  heroVideoUrl: "/media/horizontal1.mp4",
  heroFallbackImage: "/apparel1.jpg",

  contact: {
    phone: "+61390004820",
    phoneDisplay: "+61 (03) 9000 4820",
    whatsapp: "+61480029888",
    whatsappLink: "https://wa.me/61480029888?text=Hello%20NAXIS%20Production%20Desk%2C%20I%20would%20like%20to%20discuss%20an%20offshore%20garment%20manufacturing%20inquiry.",
    email: "production@naxis-garments.com",
    hqAddress: "Collins Street Commercial Precinct, Melbourne VIC 3000, Australia",
    offices: [
      "Melbourne (Headquarters & Client Services)",
      "Colombo (Headquarters & Production Operations)",
      "[CONFIRM WITH CLIENT: Additional office/factory locations]",
    ],
  },

  countries: [
    {
      id: "sri-lanka",
      name: "Sri Lanka",
      code: "LK",
      region: "South Asia",
      description: "Known across South Asia for ethical, well-regulated garment production.",
      confirmPlaceholder: "[CONFIRM: specific specialization — activewear, knits, etc.]",
      highlights: [
        "Ethical, well-regulated garment production",
        "Direct shipping routes to APAC, EU & US markets",
        "[CONFIRM: verified facility specialization]",
      ],
      image: "/apparel1.jpg",
    },
    {
      id: "india",
      name: "India",
      code: "IN",
      region: "South Asia",
      description: "A strong base for textiles and natural-fiber production.",
      confirmPlaceholder: "[CONFIRM specialization]",
      highlights: [
        "Rich textile and natural-fiber foundation",
        "Integrated spinning, weaving, and knitting",
        "[CONFIRM: verified facility specialization]",
      ],
      image: "/apparel2.jpg",
    },
    {
      id: "bangladesh",
      name: "Bangladesh",
      code: "BD",
      region: "South Asia",
      description: "High-volume production capability for large orders.",
      confirmPlaceholder: "[CONFIRM specialization]",
      highlights: [
        "High-volume manufacturing infrastructure",
        "Established large-batch efficiency",
        "[CONFIRM: verified facility specialization]",
      ],
      image: "/apparel3.jpg",
    },
    {
      id: "vietnam",
      name: "Vietnam",
      code: "VN",
      region: "Southeast Asia",
      description: "A growing hub for apparel export with modern facilities.",
      confirmPlaceholder: "[CONFIRM specialization]",
      highlights: [
        "Modern export-oriented facilities",
        "Advanced technical assembly lines",
        "[CONFIRM: verified facility specialization]",
      ],
      image: "/apparel5.jpg",
    },
    {
      id: "china",
      name: "China",
      code: "CN",
      region: "East Asia",
      description: "Advanced manufacturing capability and access to a wide range of trims and materials.",
      confirmPlaceholder: "[CONFIRM specialization]",
      highlights: [
        "Advanced manufacturing precision",
        "Extensive trims, hardware & raw material access",
        "[CONFIRM: verified facility specialization]",
      ],
      image: "/apparel4.jpg",
    },
    {
      id: "italy",
      name: "Italy",
      code: "IT",
      region: "Southern Europe",
      description: "Pattern-making and material sourcing expertise, drawing on longstanding tailoring tradition.",
      confirmPlaceholder: "[CONFIRM specialization]",
      highlights: [
        "Pattern-making and architectural sizing",
        "Longstanding tailoring and premium sourcing",
        "[CONFIRM: verified facility specialization]",
      ],
      image: "/apparel7.jpg",
    },
  ],

  capabilities: [
    {
      id: "sports-fits",
      title: "Sports Fits & Activewear",
      description: "Compression wear, gymwear, and running apparel, manufactured to hold up to daily performance use.",
      confirmPlaceholder: "[CONFIRM: any specific fabrics, MOQ, or lead time to mention]",
      image: "/apparel1.jpg",
      specs: [
        "Technical compression & 4-way stretch fabrics",
        "Flatlock & bonded chafe-free seaming options",
        "Moisture-wicking, breathable athletic knits",
        "Custom silicone grips, badging & heat-seal transfers",
      ],
    },
    {
      id: "belts-accessories",
      title: "Belts & Leather Accessories",
      description: "Formal and casual belts, built from quality leathers with custom hardware to match your brand.",
      confirmPlaceholder: "[CONFIRM: leather type, MOQ, or finishing details]",
      image: "/apparel6.jpg",
      specs: [
        "Full-grain, bridle, and top-grain leather selections",
        "Custom molded cast alloy and solid brass buckles",
        "Precision edge beveling, painting, and burnishing",
        "Blind debossing, laser etching, and foil stamp branding",
      ],
    },
    {
      id: "client-categories-placeholder",
      title: "[CONFIRM with client]",
      description: "Placeholder — client mentioned 'sports fits, belts, etc.' — need the full category list before writing final copy. Suggested categories to ask about: outerwear, knitwear, denim, uniforms, accessories.",
      confirmPlaceholder: "[CONFIRM WITH CLIENT: full category list]",
      image: "/apparel5.jpg",
      isPlaceholder: true,
      specs: [
        "Outerwear [CONFIRM with client]",
        "Knitwear & Circular Knits [CONFIRM with client]",
        "Tailoring & Wovens [CONFIRM with client]",
        "Uniforms & Accessories [CONFIRM with client]",
      ],
    },
  ],

  certifications: [
    {
      acronym: "SEDEX",
      name: "SEDEX Audited",
      tag: "Labor Standards & Business Ethics",
      description: "Independent audits covering labor standards, health and safety, and business ethics.",
    },
    {
      acronym: "WRAP",
      name: "WRAP Compliant",
      tag: "Humane & Ethical Manufacturing",
      description: "Certified for lawful, humane, and ethical manufacturing practices.",
    },
    {
      acronym: "CT-PAT",
      name: "CT-PAT Validated",
      tag: "Supply Chain Security",
      description: "U.S. Customs-recognized supply chain security certification, supporting faster customs clearance.",
    },
  ],
};
