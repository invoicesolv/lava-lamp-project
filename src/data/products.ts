export interface Product {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  price: {
    base: number;
    currency: string;
  };
  images: {
    main: string;
    gallery: string[];
  };
  category: string;
  features: string[];
  sizes: string[];
  colors: string[];
  material: string;
  printArea: string;
}

export const products: Product[] = [
  {
    id: "unisex-jersey-tshirt",
    name: "Unisex Jersey T-shirt",
    description: "En klassisk unisex t-shirt tillverkad av mjuk och bekväm jersey-bomull. Perfekt för vardagsbruk och anpassning med dina egna designer. Denna t-shirt erbjuder en bekväm passform och är tillverkad av hållbara material.",
    shortDescription: "Klassisk bomulls-t-shirt för alla tillfällen",
    price: {
      base: 199,
      currency: "SEK"
    },
    images: {
      main: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1583743814966-8936f37f4678?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop"
      ]
    },
    category: "Kläder",
    features: [
      "100% bomull",
      "Förkrympt tyg",
      "Ribbkrage",
      "Dubbelnålade sömmar",
      "Tearaway-etikett"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Vit", "Svart", "Navy", "Grå", "Röd", "Blå"],
    material: "100% bomull, 180 g/m²",
    printArea: "28 x 35 cm (framsida)"
  },
  {
    id: "heavy-blend-hoodie",
    name: "Heavy Blend™ Hoodie",
    description: "En varm och bekväm hoodie tillverkad av en blandning av bomull och polyester. Perfekt för kalla dagar och casual wear. Med känguru-ficka och justerbara snören för optimal komfort.",
    shortDescription: "Varm hoodie med känguru-ficka",
    price: {
      base: 449,
      currency: "SEK"
    },
    images: {
      main: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1000&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1000&auto=format&fit=crop"
      ]
    },
    category: "Kläder",
    features: [
      "50% bomull, 50% polyester",
      "Känguru-ficka",
      "Justerbara snören",
      "Ribbkanter",
      "Förkrympt tyg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Svart", "Grå", "Navy", "Vit", "Röd"],
    material: "50% bomull, 50% polyester, 280 g/m²",
    printArea: "25 x 35 cm (framsida)"
  },
  {
    id: "premium-socks",
    name: "Premium Strumpor",
    description: "Bekväma och hållbara strumpor tillverkade av premium bomullsblandning. Perfekt för dagligt bruk med mjuk känsla och bra andningsförmåga.",
    shortDescription: "Komfortabla premium strumpor",
    price: {
      base: 89,
      currency: "SEK"
    },
    images: {
      main: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?q=80&w=1000&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1586350431067-e0a1bb958eb8?q=80&w=1000&auto=format&fit=crop"
      ]
    },
    category: "Accessoarer",
    features: [
      "75% bomull, 22% polyamid, 3% elastan",
      "Förstärkta häl och tå",
      "Andningsbart material",
      "Maskintvättbar",
      "One size fits most"
    ],
    sizes: ["35-38", "39-42", "43-46"],
    colors: ["Vit", "Svart", "Grå", "Navy"],
    material: "75% bomull, 22% polyamid, 3% elastan",
    printArea: "6 x 8 cm (sida)"
  },
  {
    id: "phone-case",
    name: "Telefonfodral",
    description: "Skyddande telefonfodral som kombinerar stil med funktionalitet. Anpassningsbar med dina egna designer och bilder.",
    shortDescription: "Skyddande fodral för din telefon",
    price: {
      base: 249,
      currency: "SEK"
    },
    images: {
      main: "https://images.unsplash.com/photo-1601593346740-925612772716?q=80&w=1000&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1601593346740-925612772716?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?q=80&w=1000&auto=format&fit=crop"
      ]
    },
    category: "Accessoarer",
    features: [
      "Robust polykarbonat",
      "Transparent kanter",
      "Exakt passform",
      "Trådlös laddning kompatibel",
      "Reptåligt material"
    ],
    sizes: ["iPhone 14", "iPhone 15", "Samsung Galaxy S23", "Samsung Galaxy S24"],
    colors: ["Transparent", "Svart", "Vit"],
    material: "Polykarbonat och TPU",
    printArea: "Hela baksidan"
  },
  {
    id: "canvas-prints",
    name: "Canvas Prints",
    description: "Högkvalitativa canvas-tryck som ger dina bilder och konstverk ett professionellt och elegant utseende. Perfekt för hem, kontor eller som presenter.",
    shortDescription: "Professionella canvas-tryck för väggdekor",
    price: {
      base: 399,
      currency: "SEK"
    },
    images: {
      main: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1000&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=1000&auto=format&fit=crop"
      ]
    },
    category: "Hem & Inredning",
    features: [
      "Premium canvas material",
      "Träram inkluderad",
      "UV-beständig ink",
      "Redo att hänga",
      "Mattfinish"
    ],
    sizes: ["30x40 cm", "50x70 cm", "70x100 cm"],
    colors: ["Standard"],
    material: "100% bomullscanvas, träram",
    printArea: "Hela ytan"
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};
