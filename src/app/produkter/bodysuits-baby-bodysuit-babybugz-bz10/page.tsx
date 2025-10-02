import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Bodysuits Baby Bodysuit Babybugz - BZ10 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Babybugz BZ10 bodysuit är tillverkad av högkvalitativ bomull som är skonsam mot barnets känsliga hud. Med sin mjuka och stretchiga passform garanterar den komfort under hela dagen. Den är designad för att enkelt kunna anpassas med tryck och broderi, vilket gör den till ett utmärkt val för anpassade presenter eller företagsprofilering.  Materialet består av 100% bomull, vilket säkerställer både hållbarhet och komfort. Bodysuiten har tryckknappar i grenen för enkel på- och avklädning, och den ribbade kragen bidrar till en bekväm passform utan att begränsa rörelsefriheten. Denna bodysuit är inte bara praktisk och bekväm, utan också stilren. Den erbjuder en professionell finish som håller tvätt efter tvätt, vilket gör den till en långvarig favorit i barnens garderob. Med snabb leverans kan du få den hem till dig i tid för alla speciella tillfällen.",
  keywords: "bodysuits baby bodysuit babybugz - bz10, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Bodysuits Baby Bodysuit Babybugz - BZ10 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ bodysuits baby bodysuit babybugz - bz10 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "bodysuits-baby-bodysuit-babybugz-bz10",
  name: "Bodysuits Baby Bodysuit Babybugz - BZ10",
  description: "Högkvalitativ bodysuits baby bodysuit babybugz - bz10 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Babybugz BZ10 är en mjuk och hållbar bodysuit för barn, perfekt för tryck och broderi.",
  price: {
    base: 149,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/BZ10_Dusty-Blue-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/BZ10_Dusty-Blue-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/BZ10_Dusty-Blue-glowne.jpg"
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
  keywords: ["bodysuits baby bodysuit babybugz - bz10", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Bodysuits Baby Bodysuit Babybugz - BZ10 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ bodysuits baby bodysuit babybugz - bz10 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/bodysuits-baby-bodysuit-babybugz/",
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