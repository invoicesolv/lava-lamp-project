import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Cropp Crew damtröja Bygg ditt varumärke - BY131 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Cropp Crew damtröja BY131 är utformad med högkvalitativt material för att säkerställa både hållbarhet och komfort. Tillverkad av en mjuk bomullsblandning, erbjuder denna tröja en skön känsla mot huden samt en passform som är perfekt för alla kroppstyper. Den klassiska designen gör den till ett mångsidigt plagg som kan användas vid många tillfällen. Denna tröja är speciellt designad för att vara ett utmärkt val för tryck och broderi. Det högkvalitativa tyget säkerställer att dina varumärkeslogotyper och mönster framhävs med precision och skarphet. Tack vare tröjans släta yta blir resultatet alltid professionellt och iögonfallande. Passformen hos Cropp Crew damtröja är avslappnad men ändå smickrande, vilket gör den perfekt för dagligt bruk eller som en del av en arbetsuniform. Den hållbara konstruktionen garanterar att tröjan håller sin form och färg även efter många tvättar, vilket gör den till ett pålitligt val för både privat- och företagsanvändning. Med snabb leverans kan du enkelt få denna tröja till ditt nästa projekt utan dröjsmål.",
  keywords: "cropp crew damtröja bygg ditt varumärke - by131, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Cropp Crew damtröja Bygg ditt varumärke - BY131 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ cropp crew damtröja bygg ditt varumärke - by131 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "cropp-crew-womens-sweatshirt-build-your-brand-by131",
  name: "Cropp Crew damtröja Bygg ditt varumärke - BY131",
  articleNumber: "CROPP-CREW-DAMTRJA-BYGG-DITT-VARUMRKE---BY131",
  description: "Högkvalitativ cropp crew damtröja bygg ditt varumärke - by131 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Cropp Crew damtröja BY131 erbjuder en perfekt kombination av komfort och stil, idealisk för tryck och broderi.",
  price: {
    base: 199,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/04/BY131_Black.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/04/BY131_Black.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/04/BY131_Black.jpg"
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
  keywords: ["cropp crew damtröja bygg ditt varumärke - by131", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Cropp Crew damtröja Bygg ditt varumärke - BY131 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ cropp crew damtröja bygg ditt varumärke - by131 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/cropp-crew-womens-sweatshirt/",
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