import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Bomullspåse Gymsac - W110 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Bomullspåse Gymsac W110 är tillverkad av högkvalitativ bomull, vilket ger en mjuk och naturlig känsla samtidigt som den är robust och hållbar. Denna gymsäck är designad för att enkelt kunna anpassas med både tryck och broderi, vilket gör den till ett utmärkt val för företagspromotioner, teamevenemang eller personliga gåvor.  Med sin rymliga design och starka dragsnoddar erbjuder W110 både stil och funktionalitet. Den passar perfekt för att bära med sig gymkläder, böcker eller vardagsartiklar. Den minimalistiska stilen gör det enkelt att addera din egen touch, vilket förvandlar denna enkla bomullspåse till en personlig accessoar.  Bomullspåse Gymsac W110 är inte bara praktisk utan också miljövänlig, tack vare sitt naturliga materialval. Den håller för daglig användning och är lätt att tvätta, vilket säkerställer att den behåller sin fräschhet och kvalitet över tid. Snabb leverans och en professionell finish gör detta till ett pålitligt val för alla dina behov.",
  keywords: "bomullspåse gymsac - w110, bulkprodukt, tryck eget, accessoarer, företagsprodukt, eventprodukt, tryck på accessoarer, bulk beställning",
  openGraph: {
    title: "Bomullspåse Gymsac - W110 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ bomullspåse gymsac - w110 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "cotton-bag-gymsac-w110",
  name: "Bomullspåse Gymsac - W110",
  articleNumber: "BOMULLSPSE-GYMSAC---W110",
  description: "Högkvalitativ bomullspåse gymsac - w110 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Bomullspåse Gymsac W110 är den perfekta följeslagaren för alla dina dagliga äventyr, enkel att anpassa med tryck och broderi.",
  price: {
    base: 199,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/07/WM110_Sapphire-Blue_glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/07/WM110_Sapphire-Blue_glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/07/WM110_Sapphire-Blue_glowne.jpg"
    ]
  },
  category: "Väskor",
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
  keywords: ["bomullspåse gymsac - w110", "bulkprodukt", "tryck eget", "accessoarer", "företagsprodukt"],
  seoTitle: "Bomullspåse Gymsac - W110 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ bomullspåse gymsac - w110 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 30,
  leadTime: "7-10 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/cotton-bag-gymsac/",
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