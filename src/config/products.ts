/**
 * Product Data Configuration
 * 
 * Edit this single file to update products, prices, images, colors, sizes, and specs.
 * The website UI updates automatically without touching layout code.
 */

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  category: 'outerwear' | 'tailoring' | 'knitwear' | 'dresses' | 'accessories';
  isNew?: boolean;
  isFeatured?: boolean;
  images: string[];
  hoverImage: string;
  description: string;
  details: string[];
  fabric: string;
  fit: string;
  care: string;
  colors: Array<{ name: string; hex: string }>;
  sizes: string[];
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: "v-01",
    name: "Architectural Double-Breasted Trench",
    subtitle: "Heavyweight Organic Cotton Gabardine",
    price: 890,
    category: "outerwear",
    isNew: true,
    isFeatured: true,
    images: [
      "/apparel1.jpg",
      "/apparel4.jpg",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1200&auto=format&fit=crop"
    ],
    hoverImage: "/apparel4.jpg",
    description: "Sculpted with exaggerated peak lapels and a relaxed columnar silhouette. Cut from dense Italian organic gabardine with horn button closures and a removable waist sash.",
    details: [
      "Water-repellent organic cotton gabardine",
      "Deep storm flap and high neck latch",
      "Unlined clean finish interior with bound seams",
      "Hand-finished double welt pockets"
    ],
    fabric: "100% Organic Italian Cotton Gabardine",
    fit: "Intentionally oversized. Select one size down for a tailored profile.",
    care: "Dry clean only. Gentle steam when required.",
    colors: [
      { name: "Oat Cream", hex: "#EAE6DF" },
      { name: "Mineral Slate", hex: "#3A3D36" },
      { name: "Noir", hex: "#111110" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true
  },
  {
    id: "v-02",
    name: "Brushed Cashmere Cocoon Overcoat",
    subtitle: "Mongolian Raw Cashmere",
    price: 1450,
    category: "outerwear",
    isNew: false,
    isFeatured: true,
    images: [
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550614000-4895a10e1bfd?q=80&w=1200&auto=format&fit=crop"
    ],
    hoverImage: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop",
    description: "An enveloping coat formed from double-faced brushed cashmere. Features raglan sleeves, seamless collar roll, and hidden magnet closure for minimal purity.",
    details: [
      "Double-face unlined construction",
      "Hand-stitched perimeter trim",
      "Concealed side seam pockets",
      "Ultra-soft felted hand feel"
    ],
    fabric: "100% Undyed Mongolian Cashmere",
    fit: "Loose cocoon fit with gentle drape.",
    care: "Specialist dry clean only. Store on wide wooden hanger.",
    colors: [
      { name: "Raw Camel", hex: "#A88B73" },
      { name: "Chalk", hex: "#F3F1EC" }
    ],
    sizes: ["S", "M", "L"],
    inStock: true
  },
  {
    id: "v-03",
    name: "Pleated Wool Gabardine Trousers",
    subtitle: "Virgin Wool & Mohair Blend",
    price: 520,
    category: "tailoring",
    isNew: true,
    isFeatured: true,
    images: [
      "/apparel4.jpg",
      "https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?q=80&w=1200&auto=format&fit=crop"
    ],
    hoverImage: "/apparel4.jpg",
    description: "High-waisted trousers with twin forward pleats that cascade into a wide, straight leg. Engineered with a crisp crease that holds its form all day.",
    details: [
      "Extended tab waistband with horn buttons",
      "Deep side pockets & rear jet pockets",
      "Curved inner curtain waistband",
      "Generous hem allowance for custom length tailoring"
    ],
    fabric: "85% Virgin Wool, 15% Kid Mohair",
    fit: "True to size. High waist with straight wide leg.",
    care: "Dry clean only. Warm iron.",
    colors: [
      { name: "Obsidian", hex: "#191918" },
      { name: "Warm Olive", hex: "#4A4D3E" },
      { name: "Bone", hex: "#E3DFD5" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true
  },
  {
    id: "v-04",
    name: "Seamless Ribbed Silk-Merino Crew",
    subtitle: "Extra Fine Australian Merino & Mulberry Silk",
    price: 380,
    category: "knitwear",
    isNew: false,
    isFeatured: true,
    images: [
      "/apparel3.jpg",
      "/apparel2.jpg"
    ],
    hoverImage: "/apparel2.jpg",
    description: "A weightless second-skin knit crafted on 3D seamless looms. Combines the sheen of mulberry silk with the soft thermal insulation of extra-fine merino wool.",
    details: [
      "Fully seamless 3D knit technology",
      "Elongated cuffs with subtle thumb slot",
      "Fine 18-gauge gauge structure",
      "Ribbed collar detail"
    ],
    fabric: "70% Extra Fine Merino Wool, 30% Mulberry Silk",
    fit: "Slim architectural fit.",
    care: "Hand wash cold with wool detergent. Flat dry.",
    colors: [
      { name: "Ecru", hex: "#F2EFEB" },
      { name: "Charcoal", hex: "#2C2C2A" },
      { name: "Terracotta", hex: "#8F5642" }
    ],
    sizes: ["S", "M", "L"],
    inStock: true
  },
  {
    id: "v-05",
    name: "Asymmetric Heavy Silk Column Dress",
    subtitle: "Sandwashed Heavy Silk Charmeuse",
    price: 780,
    category: "dresses",
    isNew: true,
    isFeatured: true,
    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1200&auto=format&fit=crop"
    ],
    hoverImage: "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1200&auto=format&fit=crop",
    description: "Fluid column dress cut on the bias with a soft cowl neck and asymmetric back drape. Crafted from matte sandwashed silk charmeuse that glides against the skin.",
    details: [
      "Bias-cut construction for natural body mold",
      "Deep back plunge with keyhole tie",
      "Raw edge hem finish",
      "Fully lined in matching silk crepe"
    ],
    fabric: "100% Sandwashed Silk Charmeuse (40 momme)",
    fit: "Fluid fit that skim the body.",
    care: "Dry clean only.",
    colors: [
      { name: "Sage Earth", hex: "#7B8272" },
      { name: "Midnight Noir", hex: "#0E0F10" }
    ],
    sizes: ["XS", "S", "M", "L"],
    inStock: true
  },
  {
    id: "v-06",
    name: "Sculpted Nappa Leather Tote",
    subtitle: "Full-Grain Italian Calfskin",
    price: 920,
    category: "accessories",
    isNew: false,
    isFeatured: false,
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1200&auto=format&fit=crop"
    ],
    hoverImage: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1200&auto=format&fit=crop",
    description: "An unlined structural tote cut from single-piece full grain nappa leather. Features hand-burnished edges, internal zip pouch, and soft magnetic bridge closure.",
    details: [
      "Single-piece seamless base construction",
      "Removable interior canvas zippered pouch",
      "Embossed serial number tag",
      "Protective brass feet"
    ],
    fabric: "100% Full-Grain Italian Calfskin Leather",
    fit: "Dimensions: 42cm W x 34cm H x 18cm D",
    care: "Wipe with soft damp cloth. Condition periodically with natural leather balm.",
    colors: [
      { name: "Espresso", hex: "#2A1E17" },
      { name: "Butter", hex: "#EAE1CF" }
    ],
    sizes: ["One Size"],
    inStock: true
  }
];

export const featuredCollections = [
  {
    id: "col-01",
    title: "Collection 04 — Modern Form",
    subtitle: "Structured tailoring and quiet outerwear crafted from heavy Italian wool and raw organic gabardine.",
    image: "/apparel4.jpg",
    href: "/shop?collection=04",
    gridSpan: "col-span-12 lg:col-span-7",
  },
  {
    id: "col-02",
    title: "Everyday Essentials",
    subtitle: "Clean-cut knitwear and premium basics in seamless organic cotton blends.",
    image: "/apparel3.jpg",
    href: "/shop?category=knitwear",
    gridSpan: "col-span-12 lg:col-span-5",
  },
  {
    id: "col-03",
    title: "The Atelier Edit",
    subtitle: "Curated pieces from the newest seasonal drop, worn and styled as intended.",
    image: "/apparel1.jpg",
    href: "/shop?category=outerwear",
    gridSpan: "col-span-12 lg:col-span-5",
  },
  {
    id: "col-04",
    title: "Archive & Atelier",
    subtitle: "Architectural carryware and editorial wardrobe selections hand-finished in our Paris studio.",
    image: "/apparel2.jpg",
    href: "/shop?category=accessories",
    gridSpan: "col-span-12 lg:col-span-7",
  }
];

