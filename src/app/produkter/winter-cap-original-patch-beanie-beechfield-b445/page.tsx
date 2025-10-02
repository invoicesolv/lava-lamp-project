import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Vintermössa Original Patch Beanie Beechfield - B445 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Vintermössa Original Patch Beanie Beechfield - B445 kombinerar stil och funktionalitet i ett perfekt paket. Tillverkad av högkvalitativt akrylmaterial, erbjuder denna mössa både värme och hållbarhet under de kallaste vinterdagarna. Dess mjuka och stretchiga tyg säkerställer en bekväm passform för alla huvudstorlekar, vilket gör den till ett utmärkt val för daglig användning. Mössan har en tidlös design med en framträdande patch som är perfekt för anpassning. Oavsett om du vill trycka din logotyp eller brodera ett namn, ger denna mössa en professionell finish som håller över tid. Beechfield är känt för sin höga standard när det gäller kvalitet och detaljer, och B445 är inget undantag. Denna mössa är inte bara en praktisk accessoar utan också ett utmärkt alternativ för företag eller evenemang som söker profilkläder. Med sin hållbara konstruktion och stilrena design, levererar Vintermössa Original Patch Beanie både stil och komfort. Snabb leverans och enkel beställningsprocess gör det ännu enklare att få dina anpassade mössor i tid till vintersäsongen.",
  keywords: "vintermössa original patch beanie beechfield - b445, bulkprodukt, tryck eget, accessoarer, företagsprodukt, eventprodukt, tryck på accessoarer, bulk beställning",
  openGraph: {
    title: "Vintermössa Original Patch Beanie Beechfield - B445 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ vintermössa original patch beanie beechfield - b445 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "winter-cap-original-patch-beanie-beechfield-b445",
  name: "Vintermössa Original Patch Beanie Beechfield - B445",
  description: "Högkvalitativ vintermössa original patch beanie beechfield - b445 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Vintermössa Original Patch Beanie Beechfield - B445 är den perfekta mössan för kalla dagar och idealisk för personlig anpassning med tryck eller broderi.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/07/CB445_Graphite-Grey-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/07/CB445_Graphite-Grey-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/07/CB445_Graphite-Grey-glowne.jpg"
    ]
  },
  category: "Mössor",
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
  keywords: ["vintermössa original patch beanie beechfield - b445", "bulkprodukt", "tryck eget", "accessoarer", "företagsprodukt"],
  seoTitle: "Vintermössa Original Patch Beanie Beechfield - B445 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ vintermössa original patch beanie beechfield - b445 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 30,
  leadTime: "7-10 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/winter-cap-original-patch-beanie-beechfield/",
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