import PageLayout from '@/components/page-layout';
import { getProductsByCategory } from '@/data/products';
import Link from 'next/link';

export default function HomeDecorPage() {
  const homeProducts = getProductsByCategory('Hem & Inredning');
  
  return (
    <PageLayout 
      title="Hem & Inredning" 
      description="Personalisera ditt hem med unika canvas-tryck, kuddar, filtar och inredningsdetaljer."
    >
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {homeProducts.map((product) => (
            <Link 
              key={product.id} 
              href={`/products/${product.id}`}
              className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-square bg-gray-200">
                <img 
                  src={product.images.main}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{product.shortDescription}</p>
                <p className="font-semibold text-blue-600">
                  från {product.price.base} {product.price.currency}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 bg-purple-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Förvandla ditt hem</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">🖼️ Canvas Prints</h3>
              <p className="text-gray-600 text-sm">Högkvalitativa canvas-tryck som ger dina foton konstverks-känsla.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">☕ Muggar & Koppar</h3>
              <p className="text-gray-600 text-sm">Personliga muggar som gör varje kaffepaus speciell.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">🛏️ Textilier</h3>
              <p className="text-gray-600 text-sm">Kuddar, filtar och andra textilier för hemkänsla.</p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
