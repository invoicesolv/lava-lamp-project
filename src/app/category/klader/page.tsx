import PageLayout from '@/components/page-layout';
import { products, getProductsByCategory } from '@/data/products';
import Link from 'next/link';

export default function ClothingCategoryPage() {
  const clothingProducts = getProductsByCategory('Kläder');
  
  return (
    <PageLayout 
      title="Kläder" 
      description="Designa t-shirts, hoodies, kepsar och andra klädesplagg med dina egna design. Hög kvalitet och snabb leverans."
    >
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clothingProducts.map((product) => (
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

        {clothingProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">Inga kläder hittades i denna kategori ännu.</p>
          </div>
        )}

        <div className="mt-16 bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Varför välja våra kläder?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Premium Material</h3>
              <p className="text-gray-600 text-sm">Endast högkvalitativa tyger som är bekväma och hållbara.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Perfekt Passform</h3>
              <p className="text-gray-600 text-sm">Våra storlekar är noggrant testade för optimal komfort.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Långvarigt Tryck</h3>
              <p className="text-gray-600 text-sm">Avancerad tryckteknik som håller tvätt efter tvätt.</p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
