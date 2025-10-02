const fs = require('fs');
const path = require('path');

// Read the CSV file
const csvPath = path.join(__dirname, '..', 'winter-cap-woolly-ski-hat-result---gad-ety-i-ubrania-z-nadrukiem---printexpress-2025-09-25T19-50-48-973Z.csv');
const csvData = fs.readFileSync(csvPath, 'utf8');

// Parse CSV data
const lines = csvData.split('\n');
const products = [];

for (let i = 1; i < lines.length; i++) {
  if (lines[i].trim()) {
    // Better CSV parsing that handles quoted fields
    const line = lines[i];
    const values = [];
    let current = '';
    let inQuotes = false;

    for (let j = 0; j < line.length; j++) {
      const char = line[j];
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        values.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }
    values.push(current.trim());

    if (values.length >= 3) {
      const product = {
        pageUrl: values[0].replace(/"/g, ''),
        name: values[1].replace(/"/g, ''),
        image: values[2].replace(/"/g, '')
      };
      products.push(product);
    }
  }
}

console.log(`Found ${products.length} products`);

// Helper function to escape strings for JavaScript
function escapeString(str) {
  return str.replace(/"/g, '\\"').replace(/'/g, "\\'");
}

// Helper function to get category from product name
function getCategoryFromName(name) {
  const lowerName = name.toLowerCase();
  if (lowerName.includes('t-shirt') || lowerName.includes('sweatshirt') || lowerName.includes('hoodie') || lowerName.includes('polo') || lowerName.includes('tank') || lowerName.includes('bodysuit') || lowerName.includes('fleece') || lowerName.includes('softshell') || lowerName.includes('jacket') || lowerName.includes('sweater') || lowerName.includes('shirt') || lowerName.includes('top') || lowerName.includes('tee') || lowerName.includes('long sleeve') || lowerName.includes('short sleeve') || lowerName.includes('cropped') || lowerName.includes('oversized') || lowerName.includes('unisex') || lowerName.includes("men's") || lowerName.includes("women's") || lowerName.includes("children's") || lowerName.includes('infant') || lowerName.includes('baby')) {
    return 'Kläder';
  } else if (lowerName.includes('cap') || lowerName.includes('hat') || lowerName.includes('beanie') || lowerName.includes('backpack') || lowerName.includes('bag') || lowerName.includes('mug') || lowerName.includes('bottle') || lowerName.includes('phone') || lowerName.includes('case') || lowerName.includes('keychain') || lowerName.includes('sticker') || lowerName.includes('pin') || lowerName.includes('badge') || lowerName.includes('patch') || lowerName.includes('accessory') || lowerName.includes('gift')) {
    return 'Accessoarer';
  } else if (lowerName.includes('mug') || lowerName.includes('bottle') || lowerName.includes('tumbler') || lowerName.includes('cup') || lowerName.includes('plate') || lowerName.includes('bowl') || lowerName.includes('towel') || lowerName.includes('blanket') || lowerName.includes('pillow') || lowerName.includes('cushion') || lowerName.includes('mat') || lowerName.includes('rug') || lowerName.includes('curtain') || lowerName.includes('decoration') || lowerName.includes('frame') || lowerName.includes('canvas') || lowerName.includes('poster') || lowerName.includes('print') || lowerName.includes('art') || lowerName.includes('home') || lowerName.includes('kitchen') || lowerName.includes('bathroom') || lowerName.includes('bedroom') || lowerName.includes('living') || lowerName.includes('dining') || lowerName.includes('garden') || lowerName.includes('outdoor')) {
    return 'Hem & Inredning';
  } else {
    return 'Kontorsartiklar';
  }
}

// Helper function to get price based on category
function getPriceFromName(name, category) {
  const lowerName = name.toLowerCase();
  if (category === 'Kläder') {
    if (lowerName.includes('premium') || lowerName.includes('luxury') || lowerName.includes('organic')) {
      return 299;
    } else if (lowerName.includes('heavy') || lowerName.includes('fleece') || lowerName.includes('hoodie')) {
      return 249;
    } else if (lowerName.includes('sweatshirt') || lowerName.includes('polo')) {
      return 199;
    } else {
      return 149;
    }
  } else if (category === 'Accessoarer') {
    if (lowerName.includes('backpack') || lowerName.includes('bag')) {
      return 199;
    } else if (lowerName.includes('cap') || lowerName.includes('hat')) {
      return 149;
    } else {
      return 99;
    }
  } else if (category === 'Hem & Inredning') {
    if (lowerName.includes('mug') || lowerName.includes('bottle')) {
      return 149;
    } else {
      return 199;
    }
  } else {
    return 99;
  }
}

// Create bulk products directory
const bulkProductsDir = path.join(__dirname, '..', 'src', 'app', 'produkter');
if (!fs.existsSync(bulkProductsDir)) {
  fs.mkdirSync(bulkProductsDir, { recursive: true });
}

// Generate individual product pages
products.forEach((product) => {
  const slug = product.name.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
  
  const category = getCategoryFromName(product.name);
  const price = getPriceFromName(product.name, category);

  const productDir = path.join(bulkProductsDir, slug);
  if (!fs.existsSync(productDir)) {
    fs.mkdirSync(productDir, { recursive: true });
  }

  const pageContent = `import { Metadata } from 'next';
import ProductDetail from '@/components/product-detail';

export const metadata: Metadata = {
  title: "${escapeString(product.name)} - Bulkprodukt för tryck eget | Tryckeget",
  description: "Högkvalitativ ${escapeString(product.name.toLowerCase())} perfekt för tryck och broderi. Professionell finish och snabb leverans från Tryckeget.",
  keywords: "${escapeString(product.name.toLowerCase())}, bulkprodukt, tryck eget, ${category.toLowerCase()}, företagsprodukt, eventprodukt, tryck på ${category.toLowerCase()}, bulk beställning",
  openGraph: {
    title: "${escapeString(product.name)} - Bulkprodukt för tryck eget | Tryckeget",
    description: "Högkvalitativ ${escapeString(product.name.toLowerCase())} perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    type: "website",
    locale: "sv_SE",
  },
};

const product = {
  id: "${slug}",
  name: "${escapeString(product.name)}",
  description: "Högkvalitativ ${escapeString(product.name.toLowerCase())} perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  shortDescription: "Högkvalitativ ${escapeString(product.name.toLowerCase())} perfekt för tryck och broderi.",
  price: {
    base: ${price},
    currency: "SEK"
  },
  images: {
    main: "${product.image}",
    gallery: [
      "${product.image}",
      "${product.image}"
    ]
  },
  category: "${category}",
  features: [
    "Högkvalitativ material",
    "Professionell finish", 
    "Perfekt för tryck",
    "Snabb leverans",
    "Bulkrabatter tillgängliga"
  ],
  sizes: ${category === 'Kläder' ? '["S", "M", "L", "XL", "XXL"]' : '["One size"]'},
  colors: ["Vit", "Svart", "Grå", "Navy", "Röd", "Blå"],
  material: "Högkvalitativ material",
  printArea: "Anpassningsbar tryckyta",
  keywords: ["${escapeString(product.name.toLowerCase())}", "bulkprodukt", "tryck eget", "${category.toLowerCase()}", "företagsprodukt"],
  seoTitle: "${escapeString(product.name)} - Bulkprodukt för tryck eget | Tryckeget",
  seoDescription: "Högkvalitativ ${escapeString(product.name.toLowerCase())} perfekt för tryck och broderi. Professionell finish och snabb leverans.",
  minOrder: ${category === 'Kläder' ? 25 : 30},
  leadTime: "${category === 'Kläder' ? '5-7 dagar' : '7-10 dagar'}",
  bulkDiscount: "10-30% rabatt vid stora beställningar",
  pageUrl: "${product.pageUrl}",
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
  return <ProductDetail product={product} />;
}`;

  fs.writeFileSync(path.join(productDir, 'page.tsx'), pageContent);
  console.log(`Generated page for: ${product.name}`);
});

console.log(`Generated ${products.length} bulk product pages!`);