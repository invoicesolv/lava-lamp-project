import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Klassisk Barntröja Set I B&C - WK680 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Klassisk Barntröja Set I B&C - WK680 är designad med både stil och funktion i åtanke. Tillverkad av 100% högkvalitativ bomull, erbjuder denna tröja en mjuk och behaglig känsla mot huden, vilket gör den perfekt för daglig användning. Materialet är inte bara bekvämt utan även hållbart, vilket säkerställer att tröjan behåller sin form och färg även efter många tvättar. Denna barntröja är idealisk för tryck och broderi, vilket gör den till ett utmärkt val för skolor, idrottslag eller andra organisationer som vill skapa en personlig och professionell look. Den släta ytan och den noggrant utformade passformen gör det lätt att applicera tryck eller broderi med precision och kvalitet. Med en klassisk passform ger tröjan både stil och komfort, vilket gör den lämplig för barn i alla åldrar. Den ribbade kragen och muddar bidrar till en bekväm och säker passform, medan den förstärkta sömmen ger extra hållbarhet. Oavsett om det är för skolan, fritidsaktiviteter eller speciella tillfällen, erbjuder Klassisk Barntröja Set I B&C - WK680 både funktionalitet och stil i ett paket. Dessutom erbjuder vi snabb leverans, så att du kan få dina personliga tröjor i tid för vilket event du än planerar. Oavsett om du behöver en enstaka beställning eller bulkinköp, är den här tröjan ett pålitligt val som garanterat kommer att leverera både kvalitet och estetik.",
  keywords: "klassisk barntröja set i b&c - wk680, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Klassisk Barntröja Set I B&C - WK680 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ klassisk barntröja set i b&c - wk680 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "childrens-classic-sweatshirt-set-in-bc-wk680",
  name: "Klassisk Barntröja Set I B&C - WK680",
  articleNumber: "KLASSISK-BARNTRJA-SET-I-BC---WK680",
  description: "Högkvalitativ klassisk barntröja set i b&c - wk680 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Klassisk Barntröja Set I B&C - WK680 är perfekt för tryck och broderi, tillverkad av högkvalitativt bomullsmaterial för optimal komfort och hållbarhet.",
  price: {
    base: 199,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/BCWK680_Royal-Blue-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/BCWK680_Royal-Blue-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/BCWK680_Royal-Blue-glowne.jpg"
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
  keywords: ["klassisk barntröja set i b&c - wk680", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Klassisk Barntröja Set I B&C - WK680 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ klassisk barntröja set i b&c - wk680 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/childrens-classic-sweatshirt-set-in-bc/",
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