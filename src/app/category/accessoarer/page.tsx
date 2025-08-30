import PageLayout from '@/components/page-layout';
import { getProductsByCategory } from '@/data/products';
import Link from 'next/link';

export default function AccessoriesPage() {
  const accessoryProducts = getProductsByCategory('Accessoarer');
  
  return (
    <PageLayout 
      title="Accessoarer" 
      description="Personliga accessoarer som telefonfodral, strumpor, hattar och mycket mer. Gör dina favoritsaker unika."
    >
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accessoryProducts.map((product) => (
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
                <p className="font-semibold text-black">
                  från {product.price.base} {product.price.currency}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 bg-green-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Populära Accessoarer</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">📱 Telefonfodral</h3>
              <p className="text-gray-600 text-sm mb-4">Skydda din telefon med stil. Kompatibel med trådlös laddning.</p>
              
              <h3 className="font-semibold text-gray-900 mb-2">🧦 Premium Strumpor</h3>
              <p className="text-gray-600 text-sm mb-4">Bekväma strumpor i premium bomull med dina egna design.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">🧢 Kepsar & Hattar</h3>
              <p className="text-gray-600 text-sm mb-4">Klassiska kepsar och hattar för alla tillfällen.</p>
              
              <h3 className="font-semibold text-gray-900 mb-2">👜 Väskor & Kassar</h3>
              <p className="text-gray-600 text-sm mb-4">Praktiska väskor och tygkassar med personlig touch.</p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
