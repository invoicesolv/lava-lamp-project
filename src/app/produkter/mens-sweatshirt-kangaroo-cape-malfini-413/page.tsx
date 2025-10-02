import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Herrtröja, känguruficka Cape Malfini - 413 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Herrtröja Cape Malfini - 413 är designad med både stil och funktion i åtanke. Tillverkad av högkvalitativt material som kombinerar komfort och hållbarhet, erbjuder denna tröja en professionell finish som gör den idealisk för företagsprofilering genom tryck och broderi. Tröjan har en modern passform som är både bekväm och smickrande, vilket gör den perfekt för dagligt bruk eller som en del av en arbetsuniform. Materialet, ofta en blandning av bomull och polyester, ger en mjuk känsla mot huden samtidigt som det är slitstarkt och lätt att underhålla. Kängurufickan på framsidan lägger till både stil och funktionalitet, vilket gör det enkelt att hålla händerna varma eller förvara små föremål. Tröjans hållbara sömmar och kvalitativa detaljer säkerställer att den håller formen och färgen även efter upprepade tvättar. Med sin professionella finish och mångsidighet är Cape Malfini - 413 ett utmärkt val för företag som vill presentera en enhetlig och stilren image. Snabb leverans gör att du kan få dina anpassade tröjor på nolltid, redo att imponera på kunder och medarbetare.",
  keywords: "herrtröja, känguruficka cape malfini - 413, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Herrtröja, känguruficka Cape Malfini - 413 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ herrtröja, känguruficka cape malfini - 413 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "mens-sweatshirt-kangaroo-cape-malfini-413",
  name: "Herrtröja, känguruficka Cape Malfini - 413",
  articleNumber: "HERRTRJA-KNGURUFICKA-CAPE-MALFINI---413",
  description: "Högkvalitativ herrtröja, känguruficka cape malfini - 413 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Herrtröja Cape Malfini - 413 med känguruficka är perfekt för både vardag och arbete, och är idealisk för tryck och broderi.",
  price: {
    base: 199,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/413_16_A_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/413_16_A_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/413_16_A_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100-glowne.jpg"
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
  keywords: ["herrtröja, känguruficka cape malfini - 413", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Herrtröja, känguruficka Cape Malfini - 413 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ herrtröja, känguruficka cape malfini - 413 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/mens-sweatshirt-kangaroo-cape-malfini/",
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