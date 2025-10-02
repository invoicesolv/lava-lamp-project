import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Damtröja med ficka Inspire B&C - WW34B - Bulkprodukt för tryck eget | Tryckeget",
  description: "Damtröja med ficka Inspire B&C - WW34B är en stilren och mångsidig tröja tillverkad av högkvalitativt bomullsmaterial, vilket ger både mjukhet och andningsförmåga. Denna tröja är perfekt för personalisering, oavsett om du föredrar tryck eller broderi, tack vare dess släta yta och jämna struktur. Designad med en avslappnad passform, erbjuder den komfort hela dagen och rörelsefrihet. Den praktiska fickan på bröstet ger både en stilfull detalj och funktionalitet, vilket gör tröjan till ett utmärkt val för både vardagsbruk och mer formella tillfällen. Tröjans hållbara konstruktion säkerställer att den bibehåller sin form och färg även efter flera tvättar, vilket gör den till en långvarig favorit i garderoben. Dess professionella finish och rena linjer gör den till ett idealiskt val för företag som söker profilkläder med hög standard. Med snabb leverans kan du snabbt få hem denna tröja för att anpassa den efter dina behov, vare sig det är för ett team, event eller som en personlig modeartikel. Damtröja med ficka Inspire B&C - WW34B är det perfekta valet för dig som värdesätter kvalitet och stil.",
  keywords: "damtröja med ficka inspire b&c - ww34b, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Damtröja med ficka Inspire B&C - WW34B - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ damtröja med ficka inspire b&c - ww34b perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "womens-sweatshirt-with-pocket-inspire-bc-ww34b",
  name: "Damtröja med ficka Inspire B&C - WW34B",
  articleNumber: "DAMTRJA-MED-FICKA-INSPIRE-BC---WW34B",
  description: "Högkvalitativ damtröja med ficka inspire b&c - ww34b perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Damtröja med ficka Inspire B&C - WW34B erbjuder en perfekt balans mellan stil och komfort, idealisk för både tryck och broderi.",
  price: {
    base: 199,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/BCWW34B_Sage-lowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/BCWW34B_Sage-lowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/BCWW34B_Sage-lowne.jpg"
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
  keywords: ["damtröja med ficka inspire b&c - ww34b", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Damtröja med ficka Inspire B&C - WW34B - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ damtröja med ficka inspire b&c - ww34b perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/womens-sweatshirt-with-pocket-inspire-bc/",
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