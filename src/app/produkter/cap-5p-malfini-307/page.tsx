import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Keps 5P Malfini - 307 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Keps 5P Malfini - 307 är tillverkad av högkvalitativt material som säkerställer både hållbarhet och komfort. Denna keps är designad med fem paneler och har en klassisk passform som passar de flesta huvudstorlekar. Det robusta tyget gör den idealisk för anpassning med både tryck och broderi, vilket gör den till ett utmärkt val för promotioner eller personliga projekt.  Med fokus på både stil och funktion erbjuder denna keps en professionell finish som gör att den ser lika bra ut på en arbetsplats som på en fritidsaktivitet. Den justerbara stängningen baktill säkerställer en perfekt passform varje gång och ger extra komfort under långa användningsperioder. Keps 5P Malfini - 307 är också lätt att underhålla och behåller sin form även efter upprepad användning. Den finns i ett brett utbud av färger, vilket ger dig flexibiliteten att välja den som bäst kompletterar ditt varumärke eller personliga stil. Med snabb leverans är denna keps redo att bli en pålitlig del av din garderob eller företagskollektion, redo att anpassas efter dina behov.",
  keywords: "keps 5p malfini - 307, bulkprodukt, tryck eget, accessoarer, företagsprodukt, eventprodukt, tryck på accessoarer, bulk beställning",
  openGraph: {
    title: "Keps 5P Malfini - 307 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ keps 5p malfini - 307 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "cap-5p-malfini-307",
  name: "Keps 5P Malfini - 307",
  description: "Högkvalitativ keps 5p malfini - 307 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Keps 5P Malfini - 307 är en stilren och bekväm keps, perfekt för både tryck och broderi.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/07/307_14_a_xl_preview_maxWidth_740_maxHeight_740_ppi_100_quality_100-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/07/307_14_a_xl_preview_maxWidth_740_maxHeight_740_ppi_100_quality_100-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/07/307_14_a_xl_preview_maxWidth_740_maxHeight_740_ppi_100_quality_100-glowne.jpg"
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
  sizes: ["One size"],
  colors: ["Vit", "Svart", "Grå", "Navy", "Röd", "Blå"],
  material: "Högkvalitativ material",
  printArea: "Anpassningsbar tryckyta",
  keywords: ["keps 5p malfini - 307", "bulkprodukt", "tryck eget", "accessoarer", "företagsprodukt"],
  seoTitle: "Keps 5P Malfini - 307 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ keps 5p malfini - 307 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 30,
  leadTime: "7-10 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/cap-5p-malfini/",
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