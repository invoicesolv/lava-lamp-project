import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

import { ProductSchemaMarkup } from '@/components/schema-markup';
export const metadata: Metadata = {
  title: "Oknäppt Med huva Sweatshirt for men Trendig Dragkedja Malfini - 410 - Bulkprodukt för tryck eget | Tryckeget",
  description: "Denna stilrena Oknäppt Med huva Sweatshirt från Malfini är den perfekta mixen av komfort och mode. Tillverkad av högkvalitativt material som håller i längden, erbjuder den både mjukhet och slitstyrka. Den oknäppta designen med dragkedja gör den lätt att bära, medan den rymliga huvan ger extra värme och skydd. Sweatshirten är ett utmärkt val för tryck och broderi, tack vare sitt jämna tyg som ger en professionell finish. Passformen är modern och bekväm, idealisk för vardagsbruk eller som en del av en arbetsuniform. Med hållbarhet i fokus, lovar denna sweatshirt att stå emot både tidens tand och aktiva livsstilar. Snabb leverans garanterar att du får din nya favorit snabbt.",
  keywords: "oknäppt med huva sweatshirt for men trendig dragkedja malfini - 410, bulkprodukt, tryck eget, kläder, företagsprodukt, eventprodukt, tryck på kläder, bulk beställning",
  openGraph: {
    title: "Oknäppt Med huva Sweatshirt for men Trendig Dragkedja Malfini - 410 - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ oknäppt med huva sweatshirt for men trendig dragkedja malfini - 410 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "unbuttoned-hooded-sweatshirt-for-men-trendy-zipper-malfini-410",
  name: "Oknäppt Med huva Sweatshirt for men Trendig Dragkedja Malfini - 410",
  description: "Högkvalitativ oknäppt med huva sweatshirt for men trendig dragkedja malfini - 410 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Trendig och bekväm Oknäppt Med huva Sweatshirt för män från Malfini, perfekt för tryck och broderi.",
  price: {
    base: 199,
    currency: "SEK"
  },
  images: {
    main: "https://printexpress.pl/wp-content/uploads/2024/06/410_44_A_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100-glowna.jpg",
    gallery: [
      "https://printexpress.pl/wp-content/uploads/2024/06/410_44_A_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100-glowna.jpg",
      "https://printexpress.pl/wp-content/uploads/2024/06/410_44_A_preview_maxWidth_540_maxHeight_540_ppi_100_quality_100-glowna.jpg"
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
  keywords: ["oknäppt med huva sweatshirt for men trendig dragkedja malfini - 410", "bulkprodukt", "tryck eget", "kläder", "företagsprodukt"],
  seoTitle: "Oknäppt Med huva Sweatshirt for men Trendig Dragkedja Malfini - 410 - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ oknäppt med huva sweatshirt for men trendig dragkedja malfini - 410 perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: 25,
  leadTime: "5-7 dagar",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "https://printexpress.pl/en/product/unbuttoned-hooded-sweatshirt-for-men-trendy-zipper/",
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