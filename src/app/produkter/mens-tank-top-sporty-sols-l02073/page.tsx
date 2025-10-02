import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Herrlinne Sportig SOL's - L02073 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Herrlinne Sportig SOL's L02073 är ett utmärkt val för den aktiva mannen. Tillverkat av en blandning av bomull och polyester, erbjuder detta linne en mjuk och andningsbar känsla som är perfekt för sport eller vardagsbruk. Materialet är speciellt utvalt för att klara av både tryck och broderi, vilket ger dig möjlighet att personalisera det med din egen design eller logotyp. Linnets passform är designad för att ge maximal rörelsefrihet samtidigt som det sitter snyggt på kroppen. Den sportiga designen gör det till ett idealiskt val för gymmet eller som en del av en casual outfit. Tack vare dess hållbara konstruktion kan du vara säker på att detta linne kommer att hålla formen och färgen trots upprepade tvättar. SOL's L02073 erbjuder också en professionell finish som gör det lämpligt för företag som vill skapa en enhetlig look för sina medarbetare. Oavsett om du använder det i ett sportlag eller som en del av din arbetsuniform, kommer detta linne att levereras snabbt och hålla hög kvalitet under lång tid.",
  keywords: "herrlinne sportig sol's - l02073, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Herrlinne Sportig SOL's - L02073 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ herrlinne sportig sol's - l02073 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "mens-tank-top-sporty-sols-l02073",
  name: "Herrlinne Sportig SOL's - L02073",
  articleNumber: "HERRLINNE-SPORTIG-SOLS---L02073",
  description: "Högkvalitativ herrlinne sportig sol's - l02073 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Herrlinne Sportig SOL's L02073 är perfekt för både träning och avslappnad stil, tillverkad av högkvalitativt material som ger komfort och hållbarhet.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/04/L02073_Neon-Yellow-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/04/L02073_Neon-Yellow-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/04/L02073_Neon-Yellow-glowne.jpg"
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
  keywords: ["herrlinne sportig sol's - l02073", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Herrlinne Sportig SOL's - L02073 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ herrlinne sportig sol's - l02073 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/mens-tank-top-sporty/",
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