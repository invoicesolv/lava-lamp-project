import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { bulkProducts } from '@/data/bulk-products';
import { ProductListSchemaMarkup } from '@/components/schema-markup';

export const metadata: Metadata = {
  title: "Bulkprodukter för tryck eget | Tryckeget",
  description: "Högkvalitativa bulkprodukter för företag och events. Snabb leverans och konkurrenskraftiga priser från Tryckeget.",
  keywords: "bulkprodukter, tryck eget, företagsprodukter, eventprodukter, snabb leverans, konkurrenskraftiga priser",
  openGraph: {
    title: "Bulkprodukter för tryck eget | Tryckeget",
    description: "Högkvalitativa bulkprodukter för företag och events. Snabb leverans och konkurrenskraftiga priser.",
    type: "website",
    locale: "sv_SE",
  },
};

export default function BulkProductsPage() {
  // Group products by category
  const productsByCategory = bulkProducts.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {} as Record<string, typeof bulkProducts>);

  return (
    <>
      <ProductListSchemaMarkup products={bulkProducts} />
      <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Bulkprodukter för tryck eget
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Högkvalitativa produkter för företag och events. Snabb leverans och konkurrenskraftiga priser.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-orange-500 px-4 py-2 rounded-full">✓ Snabb leverans</span>
              <span className="bg-orange-500 px-4 py-2 rounded-full">✓ Kvalitetsgaranti</span>
              <span className="bg-orange-500 px-4 py-2 rounded-full">✓ Bulkrabatter</span>
              <span className="bg-orange-500 px-4 py-2 rounded-full">✓ Professionell finish</span>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        {Object.entries(productsByCategory).map(([category, products]) => (
          <div key={category} className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">{category}</h2>
              <Link 
                href={`/kategori/${category.toLowerCase().replace(' & ', '-').replace(' ', '-')}`}
                className="text-orange-500 hover:text-orange-600 font-semibold"
              >
                Visa alla →
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.slice(0, 8).map((product) => (
                <Link
                  key={product.id}
                      href={`/produkter/${product.id}`}
                  className="group bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden rounded-lg flex flex-col h-full"
                >
                  <div className="relative overflow-hidden bg-gray-50 flex items-center justify-center">
                    <Image
                      src={product.images.main}
                      alt={product.name}
                      width={400}
                      height={300}
                      className="w-full h-48 object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 bg-orange-500 text-white px-2 py-1 rounded text-xs font-bold">
                      BULK
                    </div>
                  </div>
                  
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {product.shortDescription}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-lg font-bold text-orange-500">
                        Från {product.price.base} {product.price.currency}
                      </span>
                      <span className="text-sm text-gray-500">
                        Min {product.minOrder} st
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Redo att börja designa?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Välj en produkt och börja skapa ditt unika design redan idag!
          </p>
          <Link
            href="/design/canvas"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
          >
            Börja designa nu
          </Link>
        </div>
      </div>
      </div>
    </>
  );
}