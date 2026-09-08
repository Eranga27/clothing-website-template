/**
 * NAXIS — Offshore Garment Manufacturing & Apparel Atelier
 * Global manufacturing partner for luxury, premium lifestyle, and technical sportswear brands.
 */

export interface CountryHub {
  id: string;
  name: string;
  code: string;
  region: string;
  facilities: string;
  capacity: string;
  specialization: string;
  leadTime: string;
  certifications: string[];
  description: string;
  keyStrengths: string[];
  image: string;
}

export interface CapabilityCategory {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  image: string;
  specs: string[];
  moq: string;
  finishing: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  subtagline: string;
  description: string;
  announcement: string;
  brandStatement: string;
  /** @deprecated legacy field kept for e-commerce shop compatibility */
  philosophy: string;
  /** @deprecated legacy field kept for e-commerce shop/cart compatibility */
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
  stats: Array<{ value: string; label: string }>;
  countries: CountryHub[];
  capabilities: CapabilityCategory[];
  certifications: Array<{
    name: string;
    acronym: string;
    issuer: string;
    description: string;
  }>;
}

export const siteConfig: SiteConfig = {
  name: "NAXIS",
  tagline: "Offshore Garment Manufacturing Excellence",
  subtagline: "Sovereign Craftsmanship • Global Manufacturing Scale • Ethical Provenance",
  description: "NAXIS is an offshore garment manufacturing partner powering world-class fashion houses, performance labels, and luxury brands across 6 sovereign production hubs.",
  announcement: "ISO 9001 & SEDEX Smeta Certified Offshore Manufacturing Facilities • 2026 Production Window Open",
  brandStatement: "Architecting offshore garment manufacturing with the precision of an haute couture atelier and the scale of a global supply chain.",
  // Legacy compatibility shim — used by shop/cart/checkout pages
  philosophy: "Engineering garments at the intersection of sovereign craftsmanship and global industrial precision.",
  currency: {
    code: "AUD",
    symbol: "$",
    freeShippingThreshold: 500,
  },
  
  navigation: [
    { name: "Capabilities", href: "#capabilities" },
    { name: "Global Network", href: "#global-network" },
    { name: "Certifications", href: "#certifications" },
    { name: "About NAXIS", href: "#about" },
    { name: "Procurement", href: "#contact" },
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
      "Melbourne (Executive & Client Services)",
      "Colombo (High-Tech Activewear & Sustainable Operations)",
      "Dhaka (Volume Wovens & Technical Tailoring)",
      "Tirupur / Mumbai (Organic Textiles & Circular Knits)",
      "Ho Chi Minh City (Bonded Apparel & Outerwear)",
      "Shanghai / Ningbo (Advanced Synthetics & Custom Trims)",
      "Milan (Pattern Engineering & Material Sourcing)",
    ],
  },

  stats: [
    { value: "6", label: "Sovereign Production Hubs" },
    { value: "100%", label: "SEDEX & WRAP Audited Facilities" },
    { value: "<0.12%", label: "Micro-tolerance Quality Threshold" },
    { value: "4.2M+", label: "Garments Engineered Annually" },
  ],

  countries: [
    {
      id: "sri-lanka",
      name: "Sri Lanka",
      code: "LK",
      region: "South Asia",
      facilities: "3 Atelier & High-Tech Facilities (Colombo & Biyagama EPZ)",
      capacity: "950,000 units / month",
      specialization: "Technical Activewear, Bonded Seamless & High-End Knits",
      leadTime: "30–45 days",
      certifications: ["SEDEX Smeta", "WRAP Gold", "OEKO-TEX Standard 100", "GOTS Organic"],
      description: "Recognized as the ethical garment capital of South Asia. Zero-carbon manufacturing certified plants with computerized laser cutting, ultrasonic bonding, and high-gauge seamless sportswear.",
      keyStrengths: ["Ethical labor sovereignty", "Ultrasonic seam bonding", "Duty-free export channels", "Rapid prototyping lab"],
      image: "/apparel1.jpg",
    },
    {
      id: "india",
      name: "India",
      code: "IN",
      region: "South Asia",
      facilities: "4 Specialized Mills & Sewing Hubs (Tirupur, Coimbatore, Mumbai)",
      capacity: "1,200,000 units / month",
      specialization: "Organic Cotton, Fine Linens, Luxury Jersey & Artisanal Embellishment",
      leadTime: "35–50 days",
      certifications: ["GOTS Certified", "Fair Trade", "SA8000", "ISO 9001:2015"],
      description: "Direct farm-to-hanger vertical integration. Unrivaled organic cotton cultivation, artisanal hand-embroidery, premium heavy-weight French terry, and mercerized luxury shirting.",
      keyStrengths: ["Farm-to-fabric yarn tracing", "Supima & GOTS certified organic", "Complex wash treatments", "Mercerized luxury knits"],
      image: "/apparel2.jpg",
    },
    {
      id: "bangladesh",
      name: "Bangladesh",
      code: "BD",
      region: "South Asia",
      facilities: "2 Platinum LEED Certified Production Campuses (Dhaka & Gazipur)",
      capacity: "1,600,000 units / month",
      specialization: "Structured Wovens, Tailored Trousers, Denim & Workwear",
      leadTime: "40–55 days",
      certifications: ["LEED Platinum", "SEDEX 4-Pillar", "WRAP Platinum", "C-TPAT Tier 2"],
      description: "World-leading green manufacturing campuses. Unmatched production volume for structured tailored blazers, precision trousers, luxury selvedge denim, and automated outerwear lines.",
      keyStrengths: ["LEED certified water recycling", "High-volume price efficiency", "Automated hanger conveyer systems", "Laser denim distressing"],
      image: "/apparel3.jpg",
    },
    {
      id: "vietnam",
      name: "Vietnam",
      code: "VN",
      region: "Southeast Asia",
      facilities: "2 Performance Outerwear Hubs (Ho Chi Minh City & Binh Duong)",
      capacity: "750,000 units / month",
      specialization: "Performance Outerwear, Waterproof Membrane Shells & Skiwear",
      leadTime: "35–45 days",
      certifications: ["bluesign® approved", "ISO 14001", "C-TPAT", "WRAP Gold"],
      description: "State-of-the-art climate-controlled cleanrooms dedicated to 3-layer laminated waterproof garments, taped seams, down-filled technical jackets, and aerodynamic cycling fits.",
      keyStrengths: ["Seam-sealing precision", "DWR fluorine-free coatings", "Technical down baffles", "CPTPP trade advantages"],
      image: "/apparel5.jpg",
    },
    {
      id: "china",
      name: "China",
      code: "CN",
      region: "East Asia",
      facilities: "3 Specialized Facilities (Zhejiang, Guangdong & Jiangsu)",
      capacity: "1,100,000 units / month",
      specialization: "Engineered Synthetics, Custom Alloy Hardware & Leathergoods",
      leadTime: "25–40 days",
      certifications: ["ISO 9001", "GRS Global Recycled", "OEKO-TEX", "Sedex"],
      description: "Precision micro-engineering hub. Pioneers in custom hardware casting, electroplated gold and matte-black metal finishes, bonded vegan leathers, and high-performance nylon synthetics.",
      keyStrengths: ["Custom alloy mold making", "Rapid 7-day 3D tech-pack sampling", "Micro-engineered zippers & pulls", "Fine leather crafting"],
      image: "/apparel4.jpg",
    },
    {
      id: "italy",
      name: "Italy",
      code: "IT",
      region: "Southern Europe",
      facilities: "1 Tailoring Atelier & Pattern Engineering Studio (Prato & Biella)",
      capacity: "120,000 units / month",
      specialization: "Master Pattern Architecture, Sartorial Tailoring & Cashmere",
      leadTime: "20–35 days",
      certifications: ["100% Made in Italy Traceability", "Animal Welfare Wool Protocol", "ISO 9001"],
      description: "The creative and technical apex of the NAXIS network. Italian master pattern cutters develop sizing architecture, bespoke luxury suiting, and source premium double-faced woollens.",
      keyStrengths: ["Master Italian pattern drafting", "Virgin wool & pure cashmere blends", "Haute couture hand-finishing", "EU client dispatch"],
      image: "/apparel7.jpg",
    },
  ],

  capabilities: [
    {
      id: "sports-fits",
      title: "Performance Sports Fits & Activewear",
      subtitle: "Technical Athletic Silhouettes",
      tagline: "Engineered compression, bonded seams, and 4-way aerodynamic elasticity.",
      description: "We manufacture elite sportswear for international athletics, gymwear, and running brands. Utilizing 24-gauge circular knitting, laser micro-perforations, and thermo-welded bonding for chafe-free durability.",
      image: "/apparel1.jpg",
      specs: ["Ultrasonic Flatlock Seaming", "Moisture-Wicking Antimicrobial Treatment", "Custom Sublimation & High-Density Silicone", "4-Way Recycled Polyamide Elastane"],
      moq: "500 pcs / style",
      finishing: "Laser Edge Hemming & Reflective Heat Transfers",
    },
    {
      id: "belts-accessories",
      title: "Handcrafted Belts & Leather Accessories",
      subtitle: "Saddlery & Hardware Craftsmanship",
      tagline: "Full-grain vegetable-tanned leathers, hand-burnished edges, and custom alloy buckles.",
      description: "From reversible formal dress belts to heavy-duty tactical webbing and small leathergoods. Every piece is cut from certified hides, edge-painted in multiple coats, and fitted with custom-molded brand hardware.",
      image: "/apparel6.jpg",
      specs: ["Full-Grain & Bridle Grade Leathers", "Cast Solid Brass & Zinc Alloy Hardware", "Triple-Coat Hand Painted Edge Finishes", "Custom Hot-Stamping & Laser Debossing"],
      moq: "300 pcs / colorway",
      finishing: "Italian Edge Waxing & Corrosion-Resistant Electroplating",
    },
    {
      id: "tailored-outerwear",
      title: "Sartorial Outerwear & Tailoring",
      subtitle: "Architectural Garment Construction",
      tagline: "Double-faced wools, structured trench coats, tailored overcoats, and modern suiting.",
      description: "Bridging the gap between bespoke atelier handcraft and offshore production scale. Our tailored lines feature full-canvas lapels, Bemberg cupro linings, horn buttons, and hand-basted shoulder heads.",
      image: "/apparel5.jpg",
      specs: ["Floating Canvas Construction", "Water-Repellent Cotton Gabardine", "Premium Bemberg / Silk Lining Options", "Pick-Stitched Lapels & Functional Cuff Vents"],
      moq: "300 pcs / style",
      finishing: "Hand-Rolled Buttonholes & Molded Hanger Packaging",
    },
    {
      id: "luxury-knits",
      title: "Luxury Knitwear & Premium Circular Knits",
      subtitle: "Tactile Yarn Innovation",
      tagline: "Fine-gauge merino sweaters, heavy loopback French terry, and mercerized shirting.",
      description: "Engineered on 12-gauge to 18-gauge computerized flat knits and heavyweight 450–520 GSM loopback jersey machines. Tested against shrinkage, pilling, and torque to exceed international boutique standards.",
      image: "/apparel8.jpg",
      specs: ["100% Extra-Fine Australian Merino Wool", "480 GSM Compact French Terry Cotton", "Garment Pigment Wash & Vintage Sun Fade", "Zero-Pill Combed Organic Cotton Yarns"],
      moq: "400 pcs / colorway",
      finishing: "Pre-Shrunk Cold Water Wash & Anti-Pill Enzyme Bath",
    },
  ],

  certifications: [
    {
      name: "SEDEX Smeta 4-Pillar",
      acronym: "SEDEX",
      issuer: "Supplier Ethical Data Exchange",
      description: "Comprehensive audits on labor standards, health & safety, environmental management, and business ethics.",
    },
    {
      name: "Worldwide Responsible Accredited Production",
      acronym: "WRAP",
      issuer: "WRAP Global Board",
      description: "Gold & Platinum certified compliance ensuring lawful, humane, and ethical manufacturing across all plants.",
    },
    {
      name: "Customs-Trade Partnership Against Terrorism",
      acronym: "C-TPAT",
      issuer: "U.S. Customs & Border Protection",
      description: "Tier 2 supply chain security certification accelerating priority customs clearance for USA shipments.",
    },
    {
      name: "OEKO-TEX® Standard 100",
      acronym: "OEKO-TEX",
      issuer: "International OEKO-TEX Association",
      description: "Certified free from harmful chemicals, allergens, and toxic dyes across all threads, fabrics, and hardware.",
    },
    {
      name: "Global Organic Textile Standard",
      acronym: "GOTS",
      issuer: "Global Standard gGmbH",
      description: "Full supply chain traceability of organic cotton and raw natural fibers from harvesting to finished garment.",
    },
    {
      name: "ISO 9001:2015 Quality Management",
      acronym: "ISO 9001",
      issuer: "International Organization for Standardization",
      description: "Audited standardized quality assurance protocols ensuring 0.12% micro-tolerance defect rates.",
    },
  ],
};

