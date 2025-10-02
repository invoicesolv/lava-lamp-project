import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Dam T-shirt Stanley&Stella - Stella Serena - STTW173 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Stanley&Stella Stella Serena STTW173 är den perfekta dam t-shirten för dem som värdesätter både stil och hållbarhet. Tillverkad av 100% ekologisk ringspunnen bomull, erbjuder denna t-shirt en mjuk och skön känsla mot huden samtidigt som den är tålig nog för dagligt bruk. Den ekologiska bomullen säkerställer att plagget är både miljövänligt och av högsta kvalitet.  Med en slimmad passform och rund halsringning, är Stella Serena designad för att framhäva kroppens naturliga linjer utan att kompromissa med komforten. Detta gör den till ett populärt val för både casual outfits och mer formella tillfällen. Dessutom är t-shirten speciellt framtagen för att enkelt kunna anpassas med tryck och broderi, vilket gör den idealisk för företag, organisationer och event. Hållbarhet är en kärnkomponent hos Stanley&Stella, och detta plagg är inget undantag. Med en professionell finish och högsta standard av sömnad, kommer denna t-shirt att behålla sin form och färg tvätt efter tvätt. Kombinera detta med snabb leverans och du har den perfekta produkten för din garderob eller ditt varumärkes behov.",
  keywords: "dam t-shirt stanley&stella - stella serena - sttw173, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Dam T-shirt Stanley&Stella - Stella Serena - STTW173 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ dam t-shirt stanley&stella - stella serena - sttw173 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "womens-t-shirt-stanleystella-stella-serena-sttw173",
  name: "Dam T-shirt Stanley&Stella - Stella Serena - STTW173",
  articleNumber: "DAM-T-SHIRT-STANLEYSTELLA---STELLA-SERENA---STTW173",
  description: "Högkvalitativ dam t-shirt stanley&stella - stella serena - sttw173 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Dam T-shirt Stanley&Stella Stella Serena STTW173 är en högkvalitativ, miljövänlig t-shirt perfekt för tryck och broderi. Skapad för optimal komfort och hållbarhet.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/07/Stella-Serena-_-Womens-scoop-neck-t-shirt-_-Stanley_Stella.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/07/Stella-Serena-_-Womens-scoop-neck-t-shirt-_-Stanley_Stella.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/07/Stella-Serena-_-Womens-scoop-neck-t-shirt-_-Stanley_Stella.jpg"
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
  keywords: ["dam t-shirt stanley&stella - stella serena - sttw173", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Dam T-shirt Stanley&Stella - Stella Serena - STTW173 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ dam t-shirt stanley&stella - stella serena - sttw173 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/womens-t-shirt-stanleystella-stella-serena/",
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