import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Herr Lätt Crew Sweatshirt Bygg Ditt Varumärke - BY010 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Herr Lätt Crew Sweatshirt BY010 är tillverkad av en mjuk och hållbar bomullsblandning som säkerställer både komfort och långvarig användning. Denna sweatshirt är designad för att ge en perfekt passform, vilket gör den idealisk för daglig användning och speciella evenemang. Tygmaterialet är noggrant utvalt för att ge en slät yta, vilket gör det lätt att applicera både tryck och broderi med professionell finish. Denna tröja är särskilt populär för företag och organisationer som vill bygga sitt varumärke, tack vare dess förstklassiga kvalitet och möjligheten att enkelt anpassa med logotyper eller slogans. Med Herr Lätt Crew Sweatshirt BY010 kan du vara säker på att du investerar i en produkt som inte bara ser bra ut, utan också håller över tid.",
  keywords: "herr lätt crew sweatshirt bygg ditt varumärke - by010, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Herr Lätt Crew Sweatshirt Bygg Ditt Varumärke - BY010 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ herr lätt crew sweatshirt bygg ditt varumärke - by010 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "mens-light-crew-sweatshirt-build-your-brand-by010",
  name: "Herr Lätt Crew Sweatshirt Bygg Ditt Varumärke - BY010",
  articleNumber: "HERR-LATT-CREW-SWEATSHIRT-BYGG-DITT-VARUMARKE-BY010",
  description: "Högkvalitativ herr lätt crew sweatshirt bygg ditt varumärke - by010 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Herr Lätt Crew Sweatshirt BY010 är perfekt för att bygga ditt varumärke med dess högkvalitativa material och utmärkta tryck- och broderimöjligheter.",
  price: {
    base: 199,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/04/BY010-violet-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/04/BY010-violet-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/04/BY010-violet-glowne.jpg"
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
  keywords: ["herr lätt crew sweatshirt bygg ditt varumärke - by010", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Herr Lätt Crew Sweatshirt Bygg Ditt Varumärke - BY010 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ herr lätt crew sweatshirt bygg ditt varumärke - by010 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/mens-light-crew-sweatshirt/",
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