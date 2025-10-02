import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Spädbarn t-shirt Baby T BABYBUGZ - BZ02 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Baby T BABYBUGZ - BZ02 är en t-shirt designad speciellt för de allra yngsta. Tillverkad av 100% ekologisk bomull, erbjuder denna baby t-shirt en mjuk och bekväm känsla mot den känsliga spädbarnshuden. Dess slitstarka material gör den utmärkt för både tryck och broderi, vilket ger en perfekt yta för personliga mönster och logotyper.  Denna t-shirt har en klassisk och enkel design med en neutral passform, vilket gör den lätt att matcha med olika outfits. Med sin ribbade halsringning är den enkel att ta av och på, vilket underlättar vid klädbyten och gör den till ett praktiskt val för föräldrar.  Baby T BABYBUGZ t-shirten är inte bara bekväm utan även hållbar, vilket säkerställer att den tål många tvättar utan att förlora formen eller komforten. Dess professionella finish gör den till ett utmärkt val för företag eller föreningar som vill trycka sin logotyp på barnkläder. Med snabb leverans kan du snabbt få dina anpassade t-shirts klara för användning.",
  keywords: "spädbarn t-shirt baby t babybugz - bz02, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Spädbarn t-shirt Baby T BABYBUGZ - BZ02 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ spädbarn t-shirt baby t babybugz - bz02 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "infant-t-shirt-baby-t-babybugz-bz02",
  name: "Spädbarn t-shirt Baby T BABYBUGZ - BZ02",
  articleNumber: "SPDBARN-T-SHIRT-BABY-T-BABYBUGZ---BZ02",
  description: "Högkvalitativ spädbarn t-shirt baby t babybugz - bz02 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Den mjuka och hållbara Baby T BABYBUGZ t-shirten är perfekt för både tryck och broderi, vilket gör den idealisk för att anpassa små barns garderober.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/BZ02_Dusty-Blue-glowny.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/BZ02_Dusty-Blue-glowny.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/BZ02_Dusty-Blue-glowny.jpg"
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
  keywords: ["spädbarn t-shirt baby t babybugz - bz02", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Spädbarn t-shirt Baby T BABYBUGZ - BZ02 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ spädbarn t-shirt baby t babybugz - bz02 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/infant-t-shirt-baby-t-babybugz/",
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