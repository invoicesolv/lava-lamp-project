const fs = require('fs');
const path = require('path');

// Read the new CSV file
const csvPath = '/Users/solvifyab/Desktop/lava-lamp-project/winter-cap-woolly-ski-hat-result---gad-ety-i-ubrania-z-nadrukiem---printexpress-2025-09-25T19-50-48-973Z.csv';
const csvData = fs.readFileSync(csvPath, 'utf8');
const lines = csvData.split('\n');

// Parse CSV data
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

// Helper functions
function getCategoryFromName(name) {
  const lowerName = name.toLowerCase();
  
  if (lowerName.includes('t-shirt') || lowerName.includes('sweatshirt') || 
      lowerName.includes('hoodie') || lowerName.includes('jacket') || 
      lowerName.includes('polo') || lowerName.includes('tank') || 
      lowerName.includes('fleece') || lowerName.includes('softshell') ||
      lowerName.includes('bodysuit') || lowerName.includes('long sleeve')) {
    return 'Kläder';
  } else if (lowerName.includes('cap') || lowerName.includes('beanie') || 
             lowerName.includes('hat') || lowerName.includes('bag') || 
             lowerName.includes('backpack') || lowerName.includes('keychain') ||
             lowerName.includes('pen') || lowerName.includes('mug')) {
    return 'Accessoarer';
  } else if (lowerName.includes('cushion') || lowerName.includes('pillow') || 
             lowerName.includes('blanket') || lowerName.includes('towel') ||
             lowerName.includes('apron') || lowerName.includes('placemat')) {
    return 'Hem & Inredning';
  } else {
    return 'Kontorsartiklar';
  }
}

function getPriceFromName(name) {
  const lowerName = name.toLowerCase();
  
  if (lowerName.includes('t-shirt') || lowerName.includes('polo')) {
    return 129;
  } else if (lowerName.includes('sweatshirt') || lowerName.includes('hoodie')) {
    return 199;
  } else if (lowerName.includes('cap') || lowerName.includes('beanie') || lowerName.includes('hat')) {
    return 89;
  } else if (lowerName.includes('bag') || lowerName.includes('backpack')) {
    return 149;
  } else if (lowerName.includes('jacket') || lowerName.includes('softshell')) {
    return 299;
  } else {
    return 99;
  }
}

function createSlug(name) {
  return name.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

// Generate TypeScript file content
let tsContent = `export interface BulkProduct {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  price: {
    base: number;
    currency: string;
  };
  images: {
    main: string;
    gallery: string[];
  };
  category: string;
  features: string[];
  sizes: string[];
  colors: string[];
  material: string;
  printArea: string;
  keywords: string[];
  seoTitle: string;
  seoDescription: string;
  minOrder: number;
  leadTime: string;
  bulkDiscount: string;
  pageUrl: string;
  specifications: string[];
}

// Create products from CSV data
const csvProducts = [
`;

// Add each product
products.forEach((product, index) => {
  const category = getCategoryFromName(product.name);
  const price = getPriceFromName(product.name);
  const slug = createSlug(product.name);
  
  const features = [
    'Högkvalitativ material',
    'Professionell finish',
    'Perfekt för tryck',
    'Snabb leverans',
    'Bulkrabatter tillgängliga'
  ];
  
  tsContent += `  {
    pageUrl: "${product.pageUrl}",
    name: "${product.name}",
    image: "${product.image}",
    features: ${JSON.stringify(features)},
    category: "${category}",
    price: ${price},
    slug: "${slug}"
  },\n`;
});

tsContent += `];

// Convert to BulkProduct format
export const bulkProducts: BulkProduct[] = csvProducts.map((product) => {
  return {
    id: product.slug,
    name: product.name,
    description: "Högkvalitativ " + product.name.toLowerCase() + " perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    shortDescription: "Högkvalitativ " + product.name.toLowerCase() + " perfekt för tryck och broderi.",
    price: {
      base: product.price,
      currency: "SEK"
    },
    images: {
      main: product.image,
      gallery: [
        product.image,
        product.image
      ]
    },
    category: product.category,
    features: product.features,
    sizes: product.category === 'Kläder' ? ["S", "M", "L", "XL", "XXL"] : ["One size"],
    colors: ["Vit", "Svart", "Grå", "Navy", "Röd", "Blå"],
    material: "Högkvalitativ material",
    printArea: "Anpassningsbar tryckyta",
    keywords: [product.name.toLowerCase(), "bulkprodukt", "tryck eget", product.category.toLowerCase()],
    seoTitle: product.name + " - Bulkprodukt för tryck eget | Tryckeget",
    seoDescription: "Högkvalitativ " + product.name.toLowerCase() + " perfekt för tryck och broderi. Professionell finish och snabb leverans.",
    minOrder: product.category === 'Kläder' ? 25 : 30,
    leadTime: product.category === 'Kläder' ? "5-7 dagar" : "7-10 dagar",
    bulkDiscount: "10-30% rabatt vid stora beställningar",
    pageUrl: product.pageUrl,
    specifications: product.features.slice(0, 6)
  };
});
`;

// Write the new bulk-products.ts file
const outputPath = path.join(__dirname, '..', 'src', 'data', 'bulk-products.ts');
fs.writeFileSync(outputPath, tsContent);

console.log(`Generated bulk-products.ts with ${products.length} products`);
console.log('Categories distribution:');
const categoryCount = {};
products.forEach(p => {
  const cat = getCategoryFromName(p.name);
  categoryCount[cat] = (categoryCount[cat] || 0) + 1;
});
console.log(categoryCount);
