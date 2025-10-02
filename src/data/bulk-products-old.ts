export interface BulkProduct {
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
  keywords: string[];
  seoTitle: string;
  seoDescription: string;
  minOrder: number;
  leadTime: string;
  bulkDiscount: string;
}

export const bulkProducts: BulkProduct[] = [
  {
    id: "winter-cap-original-patch-beanie",
    name: "Vintermössa Original Patch Beanie",
    description: "Mjuk vintermössa i 100% akryl med broderad patch för dekoration. Perfekt för vintern.",
    shortDescription: "Mjuk vintermössa med broderad patch",
    price: {
      base: 89,
      currency: "SEK"
    },
    images: {
      main: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1000&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=1000&auto=format&fit=crop"
      ]
    },
    category: "Accessoarer",
    features: ["100% mjuk akryl", "Broderad patch (10×5 cm)", "Dubbel lager", "Vänd kant", "Tear-off etikett"],
    sizes: ["One size"],
    colors: ["Vit", "Svart", "Grå", "Navy", "Röd"],
    material: "100% akryl",
    printArea: "Broderad patch (10×5 cm)",
    keywords: ["vintermössa", "beanie", "tryck eget", "accessoarer", "vinter"],
    seoTitle: "Vintermössa Original Patch Beanie - Tryck eget | Tryckeget",
    seoDescription: "Mjuk vintermössa i 100% akryl med broderad patch för dekoration. Perfekt för vintern.",
    minOrder: 50,
    leadTime: "7-10 dagar",
    bulkDiscount: "10-30% rabatt vid stora beställningar"
  },
  {
    id: "mens-heavy-zip-hoody",
    name: "Herr Heavy Zip Hoody",
    description: "Tung herrhoodie med dragkedja. Brushed insida och dubbel ficka. Perfekt för vinter och kalla dagar.",
    shortDescription: "Tung herrhoodie med dragkedja",
    price: {
      base: 249,
      currency: "SEK"
    },
    images: {
      main: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1000&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop"
      ]
    },
    category: "Kläder",
    features: ["65% bomull / 35% polyester", "300 gsm", "Brushed insida", "Två fickor", "Huv med dubbel sömnad", "Dold dragkedja"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Vit", "Svart", "Grå", "Navy", "Röd", "Blå"],
    material: "65% bomull / 35% polyester",
    printArea: "Framsida och rygg (30x40 cm)",
    keywords: ["hoodie", "herrhoodie", "tryck eget", "kläder", "vinter"],
    seoTitle: "Herr Heavy Zip Hoody - Tryck eget | Tryckeget",
    seoDescription: "Tung herrhoodie med dragkedja. Brushed insida och dubbel ficka. Perfekt för vinter och kalla dagar.",
    minOrder: 25,
    leadTime: "7-10 dagar",
    bulkDiscount: "10-30% rabatt vid stora beställningar"
  },
  {
    id: "polyester-bag-icon-gymsac",
    name: "Polyesterväska Icon Gymsac",
    description: "Hållbar gymväska i 100% polyester med avtagbar tagg och dold ficka. Vattentät och praktisk.",
    shortDescription: "Hållbar gymväska i polyester",
    price: {
      base: 149,
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
    features: ["100% polyester", "Avtagbar tagg", "Dold ficka", "Tjocka dragsnören", "Vattentät", "15 liter kapacitet"],
    sizes: ["One size"],
    colors: ["Vit", "Svart", "Grå", "Navy", "Röd"],
    material: "100% polyester",
    printArea: "Stor tryckyta (40x30 cm)",
    keywords: ["gymväska", "polyesterväska", "tryck eget", "accessoarer", "sport"],
    seoTitle: "Polyesterväska Icon Gymsac - Tryck eget | Tryckeget",
    seoDescription: "Hållbar gymväska i 100% polyester med avtagbar tagg och dold ficka. Vattentät och praktisk.",
    minOrder: 25,
    leadTime: "7-10 dagar",
    bulkDiscount: "10-30% rabatt vid stora beställningar"
  },
  {
    id: "mens-t-shirt-heavy-cotton",
    name: "Herr T-shirt Heavy Cotton",
    description: "Högkvalitativ herr T-shirt i tung bomull. Perfekt för tryck och broderi med professionell finish.",
    shortDescription: "Högkvalitativ herr T-shirt i bomull",
    price: {
      base: 149,
      currency: "SEK"
    },
    images: {
      main: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1503341504253-dff4815485f1?q=80&w=1000&auto=format&fit=crop"
      ]
    },
    category: "Kläder",
    features: ["100% bomull", "Heavy cotton", "Förkrympt tyg", "Dubbelnålade sömmar", "Tear-away etikett", "Professionell finish"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Vit", "Svart", "Grå", "Navy", "Röd", "Blå"],
    material: "100% bomull",
    printArea: "Framsida (28x35 cm)",
    keywords: ["t-shirt", "herr t-shirt", "tryck eget", "kläder", "bomull"],
    seoTitle: "Herr T-shirt Heavy Cotton - Tryck eget | Tryckeget",
    seoDescription: "Högkvalitativ herr T-shirt i tung bomull. Perfekt för tryck och broderi med professionell finish.",
    minOrder: 30,
    leadTime: "5-7 dagar",
    bulkDiscount: "10-30% rabatt vid stora beställningar"
  },
  {
    id: "cotton-bag-shopper",
    name: "Bomullskasse Shopper",
    description: "Hållbar bomullskasse med stor tryckyta. Perfekt för shopping, strand eller vardag med ditt varumärke.",
    shortDescription: "Hållbar bomullskasse med stor tryckyta",
    price: {
      base: 89,
      currency: "SEK"
    },
    images: {
      main: "https://images.unsplash.com/photo-1594223274512-ad4803739b1c?q=80&w=1000&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1594223274512-ad4803739b1c?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1000&auto=format&fit=crop"
      ]
    },
    category: "Accessoarer",
    features: ["100% bomull", "Hållbara handtag", "Stor tryckyta", "Maskintvättbar", "Miljövänlig", "45x40 cm"],
    sizes: ["One size"],
    colors: ["Vit", "Svart", "Grå", "Navy", "Röd"],
    material: "100% bomull",
    printArea: "Stor tryckyta (40x40 cm)",
    keywords: ["bomullskasse", "shopper", "tryck eget", "accessoarer", "miljövänlig"],
    seoTitle: "Bomullskasse Shopper - Tryck eget | Tryckeget",
    seoDescription: "Hållbar bomullskasse med stor tryckyta. Perfekt för shopping, strand eller vardag med ditt varumärke.",
    minOrder: 50,
    leadTime: "7-10 dagar",
    bulkDiscount: "10-30% rabatt vid stora beställningar"
  },
  {
    id: "womens-softshell-jacket",
    name: "Dam Softshell Jacket",
    description: "Elegant dam softshell jacka med huva. Vattentät och andningsbar. Perfekt för outdoor och vardag.",
    shortDescription: "Elegant dam softshell jacka med huva",
    price: {
      base: 399,
      currency: "SEK"
    },
    images: {
      main: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1000&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop"
      ]
    },
    category: "Kläder",
    features: ["Vattentät", "Andningsbar", "Huva med dragsnöre", "Zippade fickor", "Elastiska manschetter", "Professionell design"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Svart", "Navy", "Grå", "Röd", "Blå"],
    material: "Polyester med membran",
    printArea: "Framsida och rygg (25x35 cm)",
    keywords: ["softshell", "dam jacka", "tryck eget", "kläder", "outdoor"],
    seoTitle: "Dam Softshell Jacket - Tryck eget | Tryckeget",
    seoDescription: "Elegant dam softshell jacka med huva. Vattentät och andningsbar. Perfekt för outdoor och vardag.",
    minOrder: 20,
    leadTime: "10-14 dagar",
    bulkDiscount: "10-30% rabatt vid stora beställningar"
  },
  {
    id: "mouse-pad-custom",
    name: "Musmatta med eget tryck",
    description: "Högkvalitativ musmatta med skumgummi-botten för perfekt grepp. Idealisk för kontor eller gaming.",
    shortDescription: "Högkvalitativ musmatta med skumgummi-botten",
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
    features: ["Skumgummi-botten", "Högkvalitativ yta", "Perfekt för gaming", "Enkel rengöring", "Hållbar design", "25x20 cm"],
    sizes: ["One size"],
    colors: ["Svart", "Vit", "Grå", "Blå"],
    material: "Skumgummi + textil",
    printArea: "25x20 cm",
    keywords: ["musmatta", "tryck eget", "kontorsartiklar", "gaming", "kontor"],
    seoTitle: "Musmatta med eget tryck - Tryck eget | Tryckeget",
    seoDescription: "Högkvalitativ musmatta med skumgummi-botten för perfekt grepp. Idealisk för kontor eller gaming.",
    minOrder: 30,
    leadTime: "5-7 dagar",
    bulkDiscount: "10-30% rabatt vid stora beställningar"
  },
  {
    id: "ceramic-mug-custom",
    name: "Keramikmugg med eget tryck",
    description: "Högkvalitativ keramikmugg som är perfekt för att visa ditt varumärke eller design. Hållbar och maskintvättbar.",
    shortDescription: "Högkvalitativ keramikmugg för kaffe eller te",
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
    category: "Hem & Inredning",
    features: ["Högkvalitativ keramik", "Maskintvättbar", "Dishwasher safe", "11 oz kapacitet", "C-handtag", "Hela ytan (360°)"],
    sizes: ["One size"],
    colors: ["Vit", "Svart", "Grå", "Navy"],
    material: "Keramik",
    printArea: "Hela ytan (360°)",
    keywords: ["keramikmugg", "mugg", "tryck eget", "hem & inredning", "kaffe"],
    seoTitle: "Keramikmugg med eget tryck - Tryck eget | Tryckeget",
    seoDescription: "Högkvalitativ keramikmugg som är perfekt för att visa ditt varumärke eller design. Hållbar och maskintvättbar.",
    minOrder: 40,
    leadTime: "7-10 dagar",
    bulkDiscount: "10-30% rabatt vid stora beställningar"
  }
];
