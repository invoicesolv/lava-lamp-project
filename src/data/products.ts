export interface Product {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  articleNumber?: string;
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
  keywords: string[];
  seoTitle: string;
  seoDescription: string;
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
    printArea: "28 x 35 cm (framsida)",
    keywords: ["tryck eget", "tröja med eget tryck", "t shirt med eget tryck", "tryck på t-shirt", "anpassad t-shirt", "personlig t-shirt", "tryck på tröja", "custom t-shirt", "tryck på kläder"],
    seoTitle: "T-shirt med eget tryck - Tryck eget på tröja | Tryckeget",
    seoDescription: "Beställ t-shirt med eget tryck hos Tryckeget. Tröja med eget tryck i hög kvalitet från 199 kr. Snabb leverans och enkelt designverktyg."
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
    printArea: "25 x 35 cm (framsida)",
    keywords: ["tryck eget", "tröja med eget tryck", "tryck på hoodie", "anpassad hoodie", "personlig hoodie", "tryck på tröja", "custom hoodie", "tryck på kläder", "hoodie med eget tryck"],
    seoTitle: "Hoodie med eget tryck - Tryck eget på tröja | Tryckeget",
    seoDescription: "Beställ hoodie med eget tryck hos Tryckeget. Tröja med eget tryck i hög kvalitet från 449 kr. Snabb leverans och enkelt designverktyg."
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
    printArea: "6 x 8 cm (sida)",
    keywords: ["tryck eget", "kalsonger med eget tryck", "strumpor med eget tryck", "tryck på strumpor", "anpassade strumpor", "personliga strumpor", "tryck på kalsonger", "custom socks", "tryck på accessoarer"],
    seoTitle: "Kalsonger med eget tryck - Tryck eget på strumpor | Tryckeget",
    seoDescription: "Beställ kalsonger med eget tryck hos Tryckeget. Strumpor med eget tryck i hög kvalitet från 89 kr. Snabb leverans och enkelt designverktyg."
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
    printArea: "Hela baksidan",
    keywords: ["tryck eget", "telefonfodral med eget tryck", "tryck på telefonfodral", "anpassat telefonfodral", "personligt telefonfodral", "tryck på accessoarer", "custom phone case", "tryck på fodral"],
    seoTitle: "Telefonfodral med eget tryck - Tryck eget på fodral | Tryckeget",
    seoDescription: "Beställ telefonfodral med eget tryck hos Tryckeget. Fodral med eget tryck i hög kvalitet från 249 kr. Snabb leverans och enkelt designverktyg."
  },
  {
    id: "baseball-cap",
    name: "Baseball Keps",
    description: "Klassisk baseball-keps tillverkad av mjuk bomull med justerbar keps. Perfekt för att visa ditt varumärke eller design med hög kvalitet och komfort.",
    shortDescription: "Klassisk baseball-keps med justerbar keps",
    price: {
      base: 299,
      currency: "SEK"
    },
    images: {
      main: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=1000&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1521369909029-2afed882baee?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1000&auto=format&fit=crop"
      ]
    },
    category: "Accessoarer",
    features: [
      "100% bomull",
      "Justerbar keps",
      "Förstärkt frontpanel",
      "Ventileringshål",
      "Maskintvättbar"
    ],
    sizes: ["One size fits all"],
    colors: ["Svart", "Vit", "Navy", "Grå", "Röd", "Blå"],
    material: "100% bomull, 180 g/m²",
    printArea: "Frontpanel: 15 x 5 cm",
    keywords: ["tryck eget", "keps med eget tryck", "tryck på keps", "anpassad keps", "personlig keps", "tryck på accessoarer", "custom cap", "tryck på keps", "baseball keps med tryck"],
    seoTitle: "Keps med eget tryck - Tryck eget på keps | Tryckeget",
    seoDescription: "Beställ keps med eget tryck hos Tryckeget. Keps med eget tryck i hög kvalitet från 299 kr. Snabb leverans och enkelt designverktyg."
  },
  {
    id: "mug-cup",
    name: "Kaffemugg",
    description: "Högkvalitativ keramikmugg som är perfekt för att visa ditt varumärke eller design. Hållbar och maskintvättbar med elegant finish.",
    shortDescription: "Keramikmugg för kaffe eller te",
    price: {
      base: 149,
      currency: "SEK"
    },
    images: {
      main: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?q=80&w=1000&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=1000&auto=format&fit=crop"
      ]
    },
    category: "Accessoarer",
    features: [
      "Högkvalitativ keramik",
      "Maskintvättbar",
      "Dishwasher safe",
      "11 oz kapacitet",
      "C-handtag"
    ],
    sizes: ["One size"],
    colors: ["Vit", "Svart", "Grå", "Navy"],
    material: "Keramik",
    printArea: "Hela ytan (360°)",
    keywords: ["tryck eget", "mugg med eget tryck", "tryck på mugg", "anpassad mugg", "personlig mugg", "tryck på accessoarer", "custom mug", "tryck på kaffemugg"],
    seoTitle: "Mugg med eget tryck - Tryck eget på kaffemugg | Tryckeget",
    seoDescription: "Beställ mugg med eget tryck hos Tryckeget. Kaffemugg med eget tryck i hög kvalitet från 149 kr. Snabb leverans och enkelt designverktyg."
  },
  {
    id: "tote-bag",
    name: "Tyngre kasse",
    description: "Hållbar tyngre kasse i bomull som är perfekt för shopping, strand eller vardag. Stor tryckyta för ditt design eller varumärke.",
    shortDescription: "Hållbar bomullskasse med stor tryckyta",
    price: {
      base: 89,
      currency: "SEK"
    },
    images: {
      main: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1000&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1594223274512-ad4803739b1c?q=80&w=1000&auto=format&fit=crop"
      ]
    },
    category: "Accessoarer",
    features: [
      "100% bomull",
      "Hållbara handtag",
      "Stor tryckyta",
      "Maskintvättbar",
      "Miljövänlig"
    ],
    sizes: ["One size"],
    colors: ["Vit", "Svart", "Grå", "Navy", "Röd"],
    material: "100% bomull",
    printArea: "40x40 cm",
    keywords: ["tryck eget", "kasse med eget tryck", "tyngre kasse", "tryck på kasse", "anpassad kasse", "shoppingkasse", "bomullskasse"],
    seoTitle: "Kasse med eget tryck - Tyngre kasse med eget tryck | Tryckeget",
    seoDescription: "Beställ kasse med eget tryck hos Tryckeget. Tyngre kasse i bomull med stor tryckyta från 89 kr. Snabb leverans och enkelt designverktyg."
  },
  {
    id: "mouse-pad",
    name: "Musmatta",
    description: "Högkvalitativ musmatta med skumgummi-botten för perfekt grepp. Idealisk för kontor eller gaming med din egen design.",
    shortDescription: "Musmatta med skumgummi-botten",
    price: {
      base: 79,
      currency: "SEK"
    },
    images: {
      main: "https://images.unsplash.com/photo-1527864550417-7f91c4adf5a1?q=80&w=1000&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1527864550417-7f91c4adf5a1?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1000&auto=format&fit=crop"
      ]
    },
    category: "Kontorsartiklar",
    features: [
      "Skumgummi-botten",
      "Högkvalitativ yta",
      "Perfekt för gaming",
      "Enkel rengöring",
      "Hållbar design"
    ],
    sizes: ["One size"],
    colors: ["Svart", "Vit", "Grå", "Blå"],
    material: "Skumgummi + textil",
    printArea: "25x20 cm",
    keywords: ["tryck eget", "musmatta med eget tryck", "tryck på musmatta", "anpassad musmatta", "gaming musmatta", "kontorsartiklar"],
    seoTitle: "Musmatta med eget tryck - Tryck eget på musmatta | Tryckeget",
    seoDescription: "Beställ musmatta med eget tryck hos Tryckeget. Högkvalitativ musmatta med skumgummi-botten från 79 kr. Snabb leverans och enkelt designverktyg."
  },
  {
    id: "notebook",
    name: "Anteckningsbok",
    description: "Elegant anteckningsbok med hård pärm och linjerat papper. Perfekt för kontor, skola eller personlig användning med ditt eget tryck.",
    shortDescription: "Anteckningsbok med hård pärm",
    price: {
      base: 129,
      currency: "SEK"
    },
    images: {
      main: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1000&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1506905925346-14b1e3dba714?q=80&w=1000&auto=format&fit=crop"
      ]
    },
    category: "Kontorsartiklar",
    features: [
      "Hård pärm",
      "Linjerat papper",
      "200 sidor",
      "Högkvalitativ design",
      "Perfekt för gåvor"
    ],
    sizes: ["A5", "A4"],
    colors: ["Vit", "Svart", "Grå", "Navy"],
    material: "Papper + hård pärm",
    printArea: "Framsida (A5: 14x21cm, A4: 21x30cm)",
    keywords: ["tryck eget", "anteckningsbok med eget tryck", "tryck på anteckningsbok", "anpassad anteckningsbok", "kontorsartiklar", "notebook"],
    seoTitle: "Anteckningsbok med eget tryck - Tryck eget på anteckningsbok | Tryckeget",
    seoDescription: "Beställ anteckningsbok med eget tryck hos Tryckeget. Elegant anteckningsbok med hård pärm från 129 kr. Snabb leverans och enkelt designverktyg."
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const searchProducts = (query: string): Product[] => {
  if (!query || query.trim().length < 2) {
    return [];
  }
  
  const searchTerm = query.toLowerCase().trim();
  
  return products.filter(product => {
    // Search in name
    if (product.name.toLowerCase().includes(searchTerm)) {
      return true;
    }
    
    // Search in description
    if (product.description.toLowerCase().includes(searchTerm)) {
      return true;
    }
    
    // Search in short description
    if (product.shortDescription.toLowerCase().includes(searchTerm)) {
      return true;
    }
    
    // Search in category
    if (product.category.toLowerCase().includes(searchTerm)) {
      return true;
    }
    
    // Search in features
    if (product.features.some(feature => feature.toLowerCase().includes(searchTerm))) {
      return true;
    }
    
    // Search in colors
    if (product.colors.some(color => color.toLowerCase().includes(searchTerm))) {
      return true;
    }
    
    // Search in material
    if (product.material.toLowerCase().includes(searchTerm)) {
      return true;
    }
    
    return false;
  });
};

export const getSearchSuggestions = (query: string, limit: number = 5): Product[] => {
  const results = searchProducts(query);
  return results.slice(0, limit);
};
