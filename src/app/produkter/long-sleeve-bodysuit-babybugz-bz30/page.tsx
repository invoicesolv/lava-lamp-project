import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Långärmad Body Babybugz - BZ30 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Långärmad Body Babybugz BZ30 är designad med ditt barns komfort i åtanke. Tillverkad av 100% ekologisk bomull, ger denna body en mjuk och skonsam känsla mot den känsliga babyhuden. Dess ribbade manschetter och tryckknappar på axeln och i grenen gör den både praktisk och lätt att ta på och av.  Denna body är ett utmärkt val för personlig dekoration, vare sig det gäller tryck eller broderi. Den släta ytan säkerställer att dina designval framträder klart och tydligt, vilket gör den idealisk för specialbeställningar eller företag som vill erbjuda personliga barnkläder. Med fokus på hållbarhet och komfort, garanterar Babybugz BZ30 långvarig användning och bibehållen kvalitet även efter upprepade tvättar. Den professionella finishen och den noggranna uppmärksamheten på detaljer gör denna body till ett självklart val för både föräldrar och återförsäljare som värdesätter kvalitet och stil. Tack vare vår snabba leverans kan du lita på att få din beställning i tid, perfekt för födelsedagspresenter eller andra speciella tillfällen.",
  keywords: "långärmad body babybugz - bz30, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Långärmad Body Babybugz - BZ30 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ långärmad body babybugz - bz30 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "long-sleeve-bodysuit-babybugz-bz30",
  name: "Långärmad Body Babybugz - BZ30",
  articleNumber: "LNGRMAD-BODY-BABYBUGZ---BZ30",
  description: "Högkvalitativ långärmad body babybugz - bz30 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Långärmad Body Babybugz BZ30 erbjuder mjuk komfort och är perfekt för personlig anpassning med tryck och broderi.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/BZ30_Dusty-Blue-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/BZ30_Dusty-Blue-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/BZ30_Dusty-Blue-glowne.jpg"
    ]
  },
  category: "Barn tröjor",
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
  keywords: ["långärmad body babybugz - bz30", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Långärmad Body Babybugz - BZ30 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ långärmad body babybugz - bz30 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/long-sleeve-bodysuit-babybugz/",
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