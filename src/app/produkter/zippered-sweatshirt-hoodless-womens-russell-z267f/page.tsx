import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Dragkedjaed Sweatshirt, Utan huva, women\'s Russell - z267f - Bulkprodukt för tryck eget | Tryckeget",
  description: "Upplev komfort och stil med vår dragkedjaed sweatshirt utan huva från Women's Russell. Tillverkad av högkvalitativa material, erbjuder denna tröja en mjuk och hållbar yta som är idealisk för både tryck och broderi. Sweatshirten har en perfekt passform som följer kroppens konturer, vilket ger en professionell look oavsett tillfälle. Designad med tanke på användarens komfort, är denna tröja både andningsbar och värmeisolerande, vilket gör den till ett utmärkt val för alla säsonger. Det starka materialet säkerställer att plagget bibehåller sin form och färg även efter upprepade tvättar, vilket gör det till en hållbar investering för din garderob. Dessutom ger den rena och stilrena designen en perfekt grund för personlig anpassning. Oavsett om du vill använda den för företagsloggor eller personliga motiv, erbjuder sweatshirten en slät yta som garanterar skarpa och tydliga resultat. Snabb leverans säkerställer att du får ditt skräddarsydda plagg i tid för alla dina evenemang.",
  keywords: "dragkedjaed sweatshirt, utan huva, women\'s russell - z267f, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Dragkedjaed Sweatshirt, Utan huva, women\'s Russell - z267f - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ dragkedjaed sweatshirt, utan huva, women\'s russell - z267f perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "zippered-sweatshirt-hoodless-womens-russell-z267f",
  name: "Dragkedjaed Sweatshirt, Utan huva, women\'s Russell - z267f",
  description: "Högkvalitativ dragkedjaed sweatshirt, utan huva, women\'s russell - z267f perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Denna dragkedjeförsedda sweatshirt utan huva från Women's Russell kombinerar stil och funktionalitet, perfekt för tryck och broderi.",
  price: {
    base: 199,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/04/Z267F_Convoy-Grey-Solid-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/04/Z267F_Convoy-Grey-Solid-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/04/Z267F_Convoy-Grey-Solid-glowne.jpg"
    ]
  },
  category: "Tröjor",
  features: [
    "Högkvalitativ material",
    "Professionell finish", 
    "Perfekt för tryck",
    "Snabb leverans",
    "Bulkrabatter tillgängliga"
  ],
  sizes: ["S", "M", "L", "XL", "XXL"],
  colors: ["Vit", "Svart", "Grå", "Navy", "Röd", "Blå"],
  material: "Högkvalitativ material",
  printArea: "Anpassningsbar tryckyta",
  keywords: ["dragkedjaed sweatshirt, utan huva, women\'s russell - z267f", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Dragkedjaed Sweatshirt, Utan huva, women\'s Russell - z267f - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ dragkedjaed sweatshirt, utan huva, women\'s russell - z267f perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/zippered-sweatshirt-hoodless-womens/",
  specifications: [
    "Högkvalitativ material",
    "Professionell finish", 
    "Perfekt för tryck",
    "Snabb leverans",
    "Bulkrabatter tillgängliga",
    "Anpassningsbar tryckyta"
  ]
};

export default function BulkProductPage() {
  return (
    <>
      <ProductSchemaMarkup product={product} />
      <ProductDetail product={product} />
    </>
  );
}