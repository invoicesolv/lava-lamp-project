import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Women\'s Polo Sittande Stretch Russell - R-566F-0 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Women's Polo Sittande Stretch Russell - R-566F-0 är en elegant pikétröja designad för den moderna kvinnan som söker både stil och funktionalitet. Tillverkad av högkvalitativt stretchmaterial, ger denna polo en smickrande passform som följer kroppens naturliga linjer utan att begränsa rörelsefriheten. Materialet är noga utvalt för att tåla både dagligt slitage och hålla färgen intakt efter flera tvättar, vilket säkerställer långvarig användning. Denna piké är idealisk för företag som vill lägga till en professionell touch med anpassade broderier eller tryck. Tygets struktur och kvalitet gör det lätt att applicera logotyper och andra designelement, vilket ger en skarp och tydlig finish. Oavsett om det är för ett team-event, en arbetsuniform eller en personlig gåva, erbjuder denna polo en perfekt grund för anpassning. Komfort är i fokus med denna design, där andningsförmåga och mjukhet prioriteras. Den klassiska kragen och knappslån ger ett tidlöst utseende samtidigt som den stretchiga kvaliteten säkerställer att plagget håller formen. Women's Polo Sittande Stretch Russell är inte bara en tröja, utan en investering i stil och hållbarhet, med snabb leverans för att möta dina behov.",
  keywords: "women\'s polo sittande stretch russell - r-566f-0, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Women\'s Polo Sittande Stretch Russell - R-566F-0 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ women\'s polo sittande stretch russell - r-566f-0 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "womens-polo-fitted-stretch-russell-r-566f-0",
  name: "Women\'s Polo Sittande Stretch Russell - R-566F-0",
  description: "Högkvalitativ women\'s polo sittande stretch russell - r-566f-0 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Women's Polo Sittande Stretch Russell är en premium pikétröja med en stretchig passform, perfekt för broderi och tryck.",
  price: {
    base: 199,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/04/Z566F_Classic-Red-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/04/Z566F_Classic-Red-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/04/Z566F_Classic-Red-glowne.jpg"
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
  keywords: ["women\'s polo sittande stretch russell - r-566f-0", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Women\'s Polo Sittande Stretch Russell - R-566F-0 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ women\'s polo sittande stretch russell - r-566f-0 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/womens-polo-fitted-stretch/",
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