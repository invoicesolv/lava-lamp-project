import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Meshkeps Snapback Trucker Beechfield - B640 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Meshkeps Snapback Trucker Beechfield B640 kombinerar stil och funktionalitet med sin moderna design och högkvalitativa material. Tillverkad av en slitstark blandning av bomull och polyester, erbjuder denna keps både komfort och hållbarhet. B640 har en klassisk snapback-stängning som gör den enkel att justera för perfekt passform, vilket garanterar komfort under hela dagen. Den ventilerande meshpanelen på baksidan av kepsen bidrar till ökad luftcirkulation, vilket gör den idealisk för varmare dagar eller intensiva utomhusaktiviteter. Den platta skärmen ger ett modernt utseende och utgör en perfekt yta för anpassat tryck eller broderi, vilket gör kepsen till ett utmärkt val för företag eller evenemang som vill skapa personliga och professionella accessoarer. Beechfield B640 är designad för att tåla dagligt slitage och erbjuder en professionell finish som kompletterar både casual och sportiga outfits. Med snabb leveranstid är denna keps ett utmärkt val för de som söker en stilren och anpassningsbar accessoar.",
  keywords: "meshkeps snapback trucker beechfield - b640, bulkprodukt, tryck eget, accessoarer, företagsprodukt, eventprodukt, tryck på accessoarer, bulk beställning",
  openGraph: {
    title: "Meshkeps Snapback Trucker Beechfield - B640 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ meshkeps snapback trucker beechfield - b640 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "mesh-cap-snapback-trucker-beechfield-b640",
  name: "Meshkeps Snapback Trucker Beechfield - B640",
  articleNumber: "MESHKEPS-SNAPBACK-TRUCKER-BEECHFIELD---B640",
  description: "Högkvalitativ meshkeps snapback trucker beechfield - b640 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Meshkeps Snapback Trucker Beechfield B640 är en stilren och bekväm keps, perfekt för tryck och broderi.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/07/CB640_Black_White-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/07/CB640_Black_White-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/07/CB640_Black_White-glowne.jpg"
    ]
  },
  category: "Kepsar",
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
  keywords: ["meshkeps snapback trucker beechfield - b640", "bulkprodukt", "tryck eget", "accessoarer", "företagsprodukt"],
  seoTitle: "Meshkeps Snapback Trucker Beechfield - B640 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ meshkeps snapback trucker beechfield - b640 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 30,
  leadTime: "7-10 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/mesh-cap-snapback-trucker-beechfield/",
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