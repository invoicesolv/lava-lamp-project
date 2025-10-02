import { Product } from '@/data/products';

interface SchemaMarkupProps {
  product: Product;
}

export function ProductSchemaMarkup({ product }: SchemaMarkupProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "image": product.images.gallery,
    "brand": {
      "@type": "Brand",
      "name": "Tryckeget"
    },
    "offers": {
      "@type": "Offer",
      "price": product.price.base,
      "priceCurrency": product.price.currency,
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Tryckeget"
      }
    },
    "category": product.category,
    "keywords": product.keywords.join(", "),
    "material": product.material,
    "size": product.sizes,
    "color": product.colors,
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Print Area",
        "value": product.printArea
      },
      {
        "@type": "PropertyValue",
        "name": "Features",
        "value": product.features.join(", ")
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "127"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Lisa Johansson"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "Jag beställde t-shirts till en möhippa och det blev en succé! Designverktyget var lätt att använda och resultatet blev till och med bättre än jag hade föreställt mig."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Kalle Edström"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "Vi i klassen tryckte hoodies inför skolavslutningen och är supernöjda. Alla fick välja sin storlek och designen såg exakt ut som vi ville."
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function OrganizationSchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Tryckeget",
    "description": "Tryck egna kläder – snabbt, enkelt och professionellt. Hos Tryckeget kan du designa och beställa allt från en enda t-shirt till hundratals hoodies – direkt online.",
    "url": "https://www.tryckeget.se",
    "logo": "https://www.tryckeget.se/logo.png",
    "sameAs": [
      "https://www.facebook.com/tryckeget",
      "https://www.instagram.com/tryckeget",
      "https://www.linkedin.com/company/tryckeget"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+46-123-456-789",
      "contactType": "customer service",
      "availableLanguage": "Swedish"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Exempelgatan 123",
      "addressLocality": "Stockholm",
      "postalCode": "12345",
      "addressCountry": "SE"
    },
    "keywords": "tryck eget, tröja med eget tryck, t shirt med eget tryck, keps med eget tryck, kalsonger med eget tryck, tryck på kläder, anpassade kläder, personliga kläder, print on demand, tryck på t-shirt, tryck på hoodie, tryck på keps, tryck på strumpor, tryck på accessoarer",
    "serviceArea": {
      "@type": "Country",
      "name": "Sweden"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Tryck eget produkter",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "T-shirt med eget tryck",
            "offers": {
              "@type": "Offer",
              "price": "199",
              "priceCurrency": "SEK",
              "availability": "https://schema.org/InStock"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Hoodie med eget tryck",
            "offers": {
              "@type": "Offer",
              "price": "399",
              "priceCurrency": "SEK",
              "availability": "https://schema.org/InStock"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Keps med eget tryck",
            "offers": {
              "@type": "Offer",
              "price": "149",
              "priceCurrency": "SEK",
              "availability": "https://schema.org/InStock"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Kalsonger med eget tryck",
            "offers": {
              "@type": "Offer",
              "price": "89",
              "priceCurrency": "SEK",
              "availability": "https://schema.org/InStock"
            }
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebsiteSchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Tryckeget",
    "description": "Tryck egna kläder – snabbt, enkelt och professionellt. Hos Tryckeget kan du designa och beställa allt från en enda t-shirt till hundratals hoodies – direkt online.",
    "url": "https://www.tryckeget.se",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://tryckeget.se/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "keywords": "tryck eget, tröja med eget tryck, t shirt med eget tryck, keps med eget tryck, kalsonger med eget tryck, tryck på kläder, anpassade kläder, personliga kläder, print on demand"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ProductListSchemaMarkup({ products }: { products: any[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Produkter - Tryckeget",
    "description": "Upptäck vårt breda sortiment av kläder, accessoarer och produkter som du kan anpassa med dina egna designer.",
    "url": "https://tryckeget.se/products",
    "numberOfItems": products.length,
    "itemListElement": products.map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": product.name,
        "description": product.shortDescription,
        "image": product.images.main,
        "offers": {
          "@type": "Offer",
          "price": product.price.base.toString(),
          "priceCurrency": product.price.currency,
          "availability": "https://schema.org/InStock"
        },
        "category": product.category,
        "brand": {
          "@type": "Brand",
          "name": "Tryckeget"
        }
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
