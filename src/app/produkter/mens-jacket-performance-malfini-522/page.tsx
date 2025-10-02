import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Herrjacka Performance Malfini - 522 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Herrjacka Performance Malfini 522 är tillverkad av högkvalitativa material som erbjuder både komfort och skydd mot elementen. Med en vind- och vattenavvisande yta kan du känna dig trygg oavsett om du använder den för vardagsbruk eller utomhusaktiviteter. Materialets hållbarhet gör att det är idealiskt för broderi och tryck, vilket gör denna jacka till det perfekta valet för företag som vill profilera sig eller evenemang som kräver enhetlig klädsel. Jackans passform är noggrant utformad för att ge maximal rörelsefrihet och komfort, vilket gör den bekväm att bära hela dagen. Den är också utrustad med praktiska fickor för enkel förvaring av dina personliga tillhörigheter. Förutom dess funktionella egenskaper, erbjuder Malfini 522 en professionell finish som ger ett stilrent intryck. Tillgänglig i flera storlekar och färger, kan du enkelt anpassa jackan efter dina behov och preferenser. Snabb leverans säkerställer att du har din jacka i tid för vilket behov du än har.",
  keywords: "herrjacka performance malfini - 522, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Herrjacka Performance Malfini - 522 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ herrjacka performance malfini - 522 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "mens-jacket-performance-malfini-522",
  name: "Herrjacka Performance Malfini - 522",
  articleNumber: "HERRJACKA-PERFORMANCE-MALFINI---522",
  description: "Högkvalitativ herrjacka performance malfini - 522 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Herrjacka Performance Malfini 522 är en mångsidig och hållbar jacka perfekt för alla väderförhållanden, med en design som lämpar sig utmärkt för tryck och broderi.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/522_12_a_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/522_12_a_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/522_12_a_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100-glowne.jpg"
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
  keywords: ["herrjacka performance malfini - 522", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Herrjacka Performance Malfini - 522 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ herrjacka performance malfini - 522 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/mens-jacket-performance/",
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