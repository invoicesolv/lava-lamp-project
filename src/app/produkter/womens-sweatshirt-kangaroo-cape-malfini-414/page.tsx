import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Damtröja, känguru, Cape Malfini - 414 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Damtröjan Cape Malfini 414 är designad för att passa den moderna kvinnan som söker både komfort och stil. Tillverkad av högkvalitativt material, erbjuder denna tröja en mjuk och behaglig känsla mot huden, vilket gör den perfekt för både vardagligt bruk och mer formella tillfällen. Tröjans design med känguruficka ger en praktisk touch som samtidigt erbjuder en avslappnad stil. Materialet är noggrant utvalt för att säkerställa en perfekt yta för tryck och broderi, vilket gör det enkelt att anpassa tröjan med ditt unika märke eller design. Dessutom ger den professionella finishen och den hållbara konstruktionen långvarig användning, så att du kan njuta av din tröja i många år framöver. Tröjan har en avslappnad passform som gör den bekväm att bära hela dagen, med en design som smickrar alla kroppstyper. Med sitt eleganta utseende och slitstarka kvalitet är Cape Malfini 414 en investering i både stil och funktionalitet. Vi erbjuder snabb leverans för att säkerställa att du får din nya favorittröja så snart som möjligt.",
  keywords: "damtröja, känguru, cape malfini - 414, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Damtröja, känguru, Cape Malfini - 414 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ damtröja, känguru, cape malfini - 414 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "womens-sweatshirt-kangaroo-cape-malfini-414",
  name: "Damtröja, känguru, Cape Malfini - 414",
  articleNumber: "DAMTRJA-KNGURU-CAPE-MALFINI---414",
  description: "Högkvalitativ damtröja, känguru, cape malfini - 414 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Damtröja Cape Malfini 414 är den perfekta kombinationen av stil och funktionalitet, idealisk för tryck och broderi.",
  price: {
    base: 199,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/414_16_A_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100-glowna.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/414_16_A_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100-glowna.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/414_16_A_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100-glowna.jpg"
    ]
  },
  category: "Kepsar",
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
  keywords: ["damtröja, känguru, cape malfini - 414", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Damtröja, känguru, Cape Malfini - 414 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ damtröja, känguru, cape malfini - 414 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/womens-sweatshirt-kangaroo-cape-malfini/",
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