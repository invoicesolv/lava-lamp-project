import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Oförknäppt, huvtröja, dam Trendig Dragkedja Malfini - 411 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Trendig Dragkedja Malfini - 411 är den perfekta huvtröjan för damer som söker både stil och funktion. Tillverkad av högkvalitativt material som kombinerar hållbarhet och mjukhet, erbjuder denna tröja en komfort som varar hela dagen. Den oslagbara dragkedjan gör den lätt att ta på och av, samtidigt som den erbjuder en modern och trendig look.  Denna huvtröja är speciellt designad för att ge en fantastisk yta för både tryck och broderi, vilket gör den idealisk för företag eller evenemang som vill ha en personlig touch. Materialets struktur säkerställer att tryck och broderi fäster väl och håller sig snyggt över tid.  Passformen är noggrant utformad för att passa perfekt till den kvinnliga figuren utan att kompromissa med rörelsefriheten. Huvtröjan är tillverkad för att hålla, med förstärkta sömmar och en professionell finish som klarar av dagligt slitage.  Dessutom erbjuder vi snabb leverans för att säkerställa att du får din huvtröja när du behöver den, oavsett om det är för en speciell händelse eller för att utöka din garderob.",
  keywords: "oförknäppt, huvtröja, dam trendig dragkedja malfini - 411, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Oförknäppt, huvtröja, dam Trendig Dragkedja Malfini - 411 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ oförknäppt, huvtröja, dam trendig dragkedja malfini - 411 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "unbuttoned-hooded-sweatshirt-womens-trendy-zipper-malfini-411",
  name: "Oförknäppt, huvtröja, dam Trendig Dragkedja Malfini - 411",
  articleNumber: "OFRKNPPT-HUVTRJA-DAM-TRENDIG-DRAGKEDJA-MALFINI---411",
  description: "Högkvalitativ oförknäppt, huvtröja, dam trendig dragkedja malfini - 411 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Trendig Dragkedja Malfini - 411 är en stilren huvtröja för damer med en oslagbar komfort och kvalitet, perfekt för tryck och broderi.",
  price: {
    base: 199,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/411_44_A_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100-glowne.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/411_44_A_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100-glowne.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/411_44_A_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100-glowne.jpg"
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
  keywords: ["oförknäppt, huvtröja, dam trendig dragkedja malfini - 411", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Oförknäppt, huvtröja, dam Trendig Dragkedja Malfini - 411 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ oförknäppt, huvtröja, dam trendig dragkedja malfini - 411 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/unbuttoned-hooded-sweatshirt-womens-trendy-zipper-malfini/",
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