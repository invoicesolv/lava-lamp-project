import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Herrarnas mikrofleece Russell - R114X - Bulkprodukt för tryck eget | Tryckeget",
  description: "Herrarnas mikrofleece Russell R114X är tillverkad av högkvalitativ mikrofleece som ger enastående komfort och värme. Dess lätta och andningsbara material gör den idealisk för alla säsonger, samtidigt som den erbjuder en elegant och professionell look. Denna fleecejacka är designad med enkelhet i åtanke, vilket gör den perfekt för både tryck och broderi. Med en slät yta och jämna sömmar kan du enkelt anpassa den med din egen design eller företagslogotyp, vilket gör den till ett utmärkt val för företag eller evenemang. Russell R114X har en bekväm passform som tillåter fri rörelse, och den är utrustad med praktiska funktioner som dragkedja i full längd och fickor för extra funktionalitet. Dessutom är den slitstark och lätt att underhålla, vilket garanterar långvarig användning. Med snabb leverans kan du få denna mångsidiga och stilrena fleecejacka i tid för alla behov.",
  keywords: "herrarnas mikrofleece russell - r114x, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Herrarnas mikrofleece Russell - R114X - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ herrarnas mikrofleece russell - r114x perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "mens-micro-fleece-russell-r114x",
  name: "Herrarnas mikrofleece Russell - R114X",
  articleNumber: "HERRARNAS-MIKROFLEECE-RUSSELL---R114X",
  description: "Högkvalitativ herrarnas mikrofleece russell - r114x perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Herrarnas mikrofleece Russell R114X är en mjuk och bekväm fleecejacka som erbjuder optimal värme och är perfekt för tryck och broderi.",
  price: {
    base: 249,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/04/RT114X_Navy-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/04/RT114X_Navy-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/04/RT114X_Navy-glowne.jpg"
    ]
  },
  category: "Jackor",
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
  keywords: ["herrarnas mikrofleece russell - r114x", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Herrarnas mikrofleece Russell - R114X - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ herrarnas mikrofleece russell - r114x perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/mens-micro-fleece/",
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