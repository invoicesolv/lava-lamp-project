import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Herr T-shirt FIT Imperial SOL's - 00580 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Herr T-shirt FIT Imperial från SOL's är en premium t-shirt designad för optimal passform och komfort. Tillverkad av 100% ringspunnen bomull, erbjuder denna t-shirt en mjuk och skön känsla mot huden samtidigt som den är mycket hållbar. Den är perfekt för både tryck och broderi, vilket gör den till ett utmärkt val för företag eller event som kräver anpassade kläder.  Den moderna passformen sitter snyggt på kroppen och är lämplig för alla kroppsformer. Med en vikt på 190 g/m² är materialet tillräckligt tjockt för att ge en professionell finish, men ändå lätt nog för att bäras bekvämt hela dagen.  Denna t-shirt är särskilt utformad för att motstå krympning och förlorar inte sin form efter tvätt, vilket säkerställer långvarig användning. Vi erbjuder snabb leverans för att möta dina behov i tid och med stil.",
  keywords: "herr t-shirt fit imperial sol's - 00580, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Herr T-shirt FIT Imperial SOL's - 00580 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ herr t-shirt fit imperial sol's - 00580 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "mens-t-shirt-fit-imperial-sols-00580",
  name: "Herr T-shirt FIT Imperial SOL's - 00580",
  articleNumber: "HERR-T-SHIRT-FIT-IMPERIAL-SOLS---00580",
  description: "Högkvalitativ herr t-shirt fit imperial sol's - 00580 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Herr T-shirt FIT Imperial från SOL's är den perfekta kombinationen av komfort och stil, tillverkad i högkvalitativt material som är idealiskt för tryck och broderi.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/L189_Dark-Grey-Solid-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/L189_Dark-Grey-Solid-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/L189_Dark-Grey-Solid-glowne.jpg"
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
  keywords: ["herr t-shirt fit imperial sol's - 00580", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Herr T-shirt FIT Imperial SOL's - 00580 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ herr t-shirt fit imperial sol's - 00580 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/mens-t-shirt-fit-imperial-sols/",
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