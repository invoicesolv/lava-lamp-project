import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Herrlinne Inspire B&C - TM072 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Herrlinne Inspire B&C - TM072 erbjuder en perfekt blandning av stil och funktionalitet. Tillverkat av 100% ringspunnen bomull, ger detta linne en exceptionellt mjuk känsla mot huden, vilket säkerställer optimal komfort hela dagen. Materialet är också förtvättat för att minimera krympning och bibehålla sin form över tid. Linnet är designat med en modern passform som smickrar alla kroppstyper och ger en stilren silhuett. Det är särskilt lämpat för tryck och broderi, tack vare sin jämna och fina yta som garanterar ett professionellt och skarpt resultat. Tryck och broderi fäster väl, vilket gör det till ett perfekt val för företagsloggor eller personliga motiv. Med fokus på hållbarhet är linnet certifierat enligt Oeko-Tex Standard 100, vilket innebär att det är fritt från skadliga ämnen. Dessutom är det lättskött och tål frekvent tvätt, vilket gör det till ett långvarigt tillskott i garderoben. Denna produkt levereras snabbt, vilket gör den idealisk för både individuella kunder och företag som behöver en snabb och pålitlig lösning för sina klädbehov.",
  keywords: "herrlinne inspire b&c - tm072, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Herrlinne Inspire B&C - TM072 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ herrlinne inspire b&c - tm072 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "mens-tank-top-inspire-bc-tm072",
  name: "Herrlinne Inspire B&C - TM072",
  articleNumber: "HERRLINNE-INSPIRE-BC---TM072",
  description: "Högkvalitativ herrlinne inspire b&c - tm072 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Herrlinne Inspire B&C - TM072 är ett högkvalitativt linne perfekt för tryck och broderi, tillverkat av mjuk och hållbar bomull.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/BCTM072_Black-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/BCTM072_Black-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/BCTM072_Black-glowne.jpg"
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
  keywords: ["herrlinne inspire b&c - tm072", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Herrlinne Inspire B&C - TM072 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ herrlinne inspire b&c - tm072 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/mens-tank-top-inspire-bc/",
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