import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Oversize T-shirt Stanley&Stella Blaster - STTU815 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Stanley&Stella Blaster Oversize T-shirt (STTU815) är en trendig och mångsidig t-shirt, designad med en modern oversize passform för att ge en avslappnad och bekväm look. Tillverkad av 100% ekologisk bomull, erbjuder denna t-shirt en mjuk och behaglig känsla mot huden, samtidigt som den är hållbar och tålig för dagligt bruk. Materialet är av högsta kvalitet och lämpar sig utmärkt för tryck och broderi, vilket gör den till ett perfekt val för företag och organisationer som vill skapa egna anpassade kläder. Dess släta yta säkerställer en professionell finish på alla typer av tryck, från digitaltryck till screentryck. Denna t-shirt är både stilren och funktionell, med förstärkta sömmar som garanterar långvarig hållbarhet. Perfekt för både vardagsbruk och speciella tillfällen, erbjuder Stanley&Stella Blaster en perfekt balans mellan stil och funktionalitet. Dessutom garanterar vi snabb leverans så att du kan få dina anpassade plagg i tid för ditt nästa event eller kampanj.",
  keywords: "oversize t-shirt stanley&stella blaster - sttu815, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Oversize T-shirt Stanley&Stella Blaster - STTU815 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ oversize t-shirt stanley&stella blaster - sttu815 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "t-shirt-oversize-stanleystella-blaster-sttu815",
  name: "Oversize T-shirt Stanley&Stella Blaster - STTU815",
  articleNumber: "OVERSIZE-T-SHIRT-STANLEYSTELLA-BLASTER---STTU815",
  description: "Högkvalitativ oversize t-shirt stanley&stella blaster - sttu815 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Oversize T-shirt Stanley&Stella Blaster är den perfekta kombinationen av stil och komfort, idealisk för både tryck och broderi.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/07/Blaster-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/07/Blaster-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/07/Blaster-glowne.jpg"
    ]
  },
  category: "T-shirts",
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
  keywords: ["oversize t-shirt stanley&stella blaster - sttu815", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Oversize T-shirt Stanley&Stella Blaster - STTU815 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ oversize t-shirt stanley&stella blaster - sttu815 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/t-shirt-oversize-stanleystella-blaster/",
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