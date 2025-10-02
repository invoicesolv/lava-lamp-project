'use client';

import { bulkProducts } from '@/data/bulk-products';
import { PageLayout } from '@/components/page-layout';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useMemo } from 'react';
import { useCart } from '@/contexts/CartContext';

export default function AccessoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Accessoarer');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { addToCart } = useCart();

  const categories = [
    { id: 'all', name: 'Alla produkter', count: bulkProducts.length },
    { id: 'Kläder', name: 'Kläder', count: bulkProducts.filter(p => p.category === 'Kläder').length },
    { id: 'Accessoarer', name: 'Accessoarer', count: bulkProducts.filter(p => p.category === 'Accessoarer').length },
    { id: 'Hem & Inredning', name: 'Hem & Inredning', count: bulkProducts.filter(p => p.category === 'Hem & Inredning').length },
    { id: 'Kontorsartiklar', name: 'Kontorsartiklar', count: bulkProducts.filter(p => p.category === 'Kontorsartiklar').length },
  ];

  const filteredProducts = useMemo(() => {
    return bulkProducts.filter(product => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);
  
  return (
    <PageLayout 
      title="Accessoarer - Kategori" 
      description="Personliga accessoarer som telefonfodral, strumpor, hattar och mycket mer. Gör dina favoritsaker unika."
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Filtrera produkter</h3>
              
              {/* Search */}
              <div className="mb-6">
                <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                  Sök produkter
                </label>
                <input
                  type="text"
                  id="search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Sök efter produkt..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              {/* Categories */}
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Kategorier</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-orange-100 text-orange-700 font-medium'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span>{category.name}</span>
                        <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                          {category.count}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear filters */}
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchTerm('');
                }}
                className="w-full mt-4 text-sm text-orange-600 hover:text-orange-700 font-medium"
              >
                Rensa alla filter
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-lg p-8 mb-8 text-white">
              <h1 className="text-3xl font-bold mb-4">
                Accessoarer
              </h1>
              <p className="text-orange-100 text-lg mb-4">
                Personliga accessoarer som telefonfodral, strumpor, hattar och mycket mer. Gör dina favoritsaker unika.
              </p>
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center">
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Snabb leverans
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Hög kvalitet
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Bulkrabatter
                </div>
              </div>
            </div>

            {/* Results header */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Accessoarer
              </h2>
              <p className="text-gray-600 mt-1">
                {filteredProducts.length} produkt{filteredProducts.length !== 1 ? 'er' : ''} hittades
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div 
                  key={product.id} 
                  className="group bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
                >
                  {/* Product Image Container */}
                  <div className="relative aspect-square bg-gray-50 flex items-center justify-center overflow-hidden">
                    <Image
                      src={product.images.main}
                      alt={product.name}
                      width={400}
                      height={400}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                    
                    {/* REA Badge */}
                    <div className="absolute top-3 left-3 bg-orange-500 text-white px-2 py-1 rounded text-xs font-bold">
                      REA
                    </div>
                    
                    {/* Wishlist Button */}
                    <div className="absolute top-3 right-3">
                      <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors">
                        <svg className="h-4 w-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  {/* Product Info */}
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-sm font-semibold text-gray-900 mb-2 group-hover:text-orange-600 line-clamp-2">
                      {product.name}
                    </h3>
                    
                    {/* Delivery Info */}
                    <div className="text-green-600 text-sm font-medium mb-2">
                      Lev. {product.leadTime}
                    </div>
                    
                    {/* Price and Discount */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold text-gray-900">
                          {product.price.base} {product.price.currency}
                        </span>
                        <div className="flex items-center text-xs text-gray-600">
                          <span>Spara 10%</span>
                          <svg className="h-3 w-3 ml-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    {/* Specifications */}
                    <div className="text-xs text-gray-600 mb-3">
                      Min beställning: {product.minOrder} st
                    </div>
                    
                    {/* Brand/Category */}
                    <div className="text-xs text-gray-500 mb-3">
                      {product.category}
                    </div>
                    
                    {/* Call to Action Buttons */}
                <div className="flex gap-2 mt-auto">
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart({
                        id: product.id,
                        name: product.name,
                        price: product.price.base,
                        currency: product.price.currency,
                        image: product.images.main,
                        category: product.category
                      });
                      alert('Produkten har lagts till i varukorgen!');
                    }}
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-2 rounded text-sm font-medium transition-colors"
                  >
                    Lägg i varukorg
                  </button>
                  <Link 
                    href={`/produkter/${product.id}`}
                    className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-2 px-2 rounded text-sm font-medium transition-colors text-center"
                  >
                    Visa mer
                  </Link>
                </div>
              </div>
                </div>
          ))}
        </div>

            {/* No results */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">🔍</div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Inga produkter hittades</h3>
                <p className="text-gray-600 mb-4">
                  Prova att ändra dina sökfilter eller söktermer
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchTerm('');
                  }}
                  className="text-orange-600 hover:text-orange-700 font-medium"
                >
                  Rensa alla filter
                </button>
              </div>
            )}

            {/* Call to Action */}
            {filteredProducts.length > 0 && (
              <div className="text-center mt-16 py-12 bg-gray-50 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Populära Accessoarer
                </h2>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
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
                <Link 
                  href="/contact"
                  className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                >
                  Kontakta oss
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}