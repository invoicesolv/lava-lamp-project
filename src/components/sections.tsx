'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { GlareCard } from '@/components/ui/glare-card';
import { bulkProducts } from '@/data/bulk-products';
import { ProductListSchemaMarkup } from '@/components/schema-markup';
import { Heart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

export default function Sections() {
  const router = useRouter();
  const { addToCart } = useCart();
  
  const handleProductClick = (productId: string) => {
    console.log('Clicking product:', productId);
    try {
      router.push(`/produkter/${productId}`);
    } catch (error) {
      console.error('Navigation error:', error);
      // Fallback to window.location
      window.location.href = `/produkter/${productId}`;
    }
  };

  // Group products by category
  const productsByCategory = {
    'Kläder': bulkProducts.filter(p => p.category === 'Kläder').slice(0, 4),
    'Accessoarer': bulkProducts.filter(p => p.category === 'Accessoarer').slice(0, 4),
    'Hem & Inredning': bulkProducts.filter(p => p.category === 'Hem & Inredning').slice(0, 4),
    'Kontorsartiklar': bulkProducts.filter(p => p.category === 'Kontorsartiklar').slice(0, 4)
  };
  
  // Get all featured products for schema
  const allFeaturedProducts = Object.values(productsByCategory).flat();
  
  return (
    <>
      <ProductListSchemaMarkup products={allFeaturedProducts} />
      <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f3f4f6' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                🎉 SUPER SEPTEMBER - Upp till 50% rabatt
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Tryck egna kläder –<br />
                <span className="text-orange-500">snabbt, enkelt</span> och professionellt
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
                Behöver ni profilkläder till företaget, tröjor till ett event eller en unik present? Hos Tryckeget kan du designa och beställa allt från en enda t-shirt till hundratals hoodies – direkt online.
              </p>
              
              {/* Trust Signals */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8 text-sm text-gray-600">
                <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  Leverans inom 5–7 dagar
                </div>
                <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  Inga minimiordrar
                </div>
                <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  Enkelt designverktyg
                </div>
            </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link 
                  href="/design/upload?productId=unisex-jersey-tshirt&size=M&color=Vit&quantity=1"
                  className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  🎨 Skapa ditt plagg nu
                </Link>
                <Link 
                  href="/products"
                  className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-gray-300 transition-all duration-200"
                >
                  Se alla produkter
                </Link>
              </div>

              {/* Payment Methods */}
              <div className="mt-6">
                <p className="text-sm text-gray-500 mb-3 text-center lg:text-left">Säkra betalningsmetoder:</p>
                <div className="flex items-center justify-center lg:justify-start flex-wrap gap-3">
                  <div className="bg-white px-3 py-2 rounded-lg">
                    <img 
                      src="/images/swish-logo.png" 
                      alt="Swish" 
                      className="h-6 w-auto"
                    />
                  </div>
                  <img 
                    src="/images/visa-mastercard-logo.png" 
                    alt="Visa Mastercard" 
                    className="h-6 w-auto"
                  />
                  <img 
                    src="/images/american-express-logo.png" 
                    alt="American Express" 
                    className="h-5 w-auto"
                  />
                  <img 
                    src="/images/Klarna_Payment_Badge.svg.png" 
                    alt="Klarna" 
                    className="h-6 w-auto"
                  />
                  <img 
                    src="/images/apple-pay-logo.png" 
                    alt="Apple Pay" 
                    className="h-6 w-auto"
                  />
                  <img 
                    src="/images/google-pay-logo.png" 
                    alt="Google Pay" 
                    className="h-6 w-auto"
                  />
                </div>
              </div>
            </div>

            {/* Right Content - Product Showcase */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {/* Featured Products */}
                <div className="space-y-4">
                  <div className="bg-white rounded-xl shadow-lg p-4 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                    <img src={bulkProducts[0].images.main} alt={bulkProducts[0].name} className="w-full h-32 object-contain rounded-lg mb-3" />
                    <h3 className="font-semibold text-gray-900 text-sm">{bulkProducts[0].name}</h3>
                    <p className="text-orange-500 font-bold">Från {bulkProducts[0].price.base} {bulkProducts[0].price.currency}</p>
                  </div>
                  <div className="bg-white rounded-xl shadow-lg p-4 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                    <img src={bulkProducts[1].images.main} alt={bulkProducts[1].name} className="w-full h-32 object-contain rounded-lg mb-3" />
                    <h3 className="font-semibold text-gray-900 text-sm">{bulkProducts[1].name}</h3>
                    <p className="text-orange-500 font-bold">Från {bulkProducts[1].price.base} {bulkProducts[1].price.currency}</p>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-white rounded-xl shadow-lg p-4 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                    <img src={bulkProducts[2].images.main} alt={bulkProducts[2].name} className="w-full h-32 object-contain rounded-lg mb-3" />
                    <h3 className="font-semibold text-gray-900 text-sm">{bulkProducts[2].name}</h3>
                    <p className="text-orange-500 font-bold">Från {bulkProducts[2].price.base} {bulkProducts[2].price.currency}</p>
                  </div>
                  <div className="bg-white rounded-xl shadow-lg p-4 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                    <img src={bulkProducts[3].images.main} alt={bulkProducts[3].name} className="w-full h-32 object-contain rounded-lg mb-3" />
                    <h3 className="font-semibold text-gray-900 text-sm">{bulkProducts[3].name}</h3>
                    <p className="text-orange-500 font-bold">Från {bulkProducts[3].price.base} {bulkProducts[3].price.currency}</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                Från 1 st
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Products Section */}
      <section className="relative -mt-10 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Product Categories */}
          <div className="space-y-0">
            {/* Kläder Category */}
            <div>
              {/* Dark Grey Header */}
              <div className="bg-gray-800 text-white px-6 py-4 flex items-center justify-between">
                <h3 className="text-xl font-bold">Populära kläder</h3>
                <div className="flex items-center space-x-2">
                  <Link href="/kategori/klader" className="text-orange-300 hover:text-orange-200 text-sm font-medium">
                    Se alla →
                  </Link>
                </div>
              </div>
              
              {/* Product Cards Row */}
              <div className="bg-white">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
                  {productsByCategory['Kläder'].map((product) => (
                    <Link 
                      key={product.id} 
                      href={`/produkter/${product.id}`}
                      className="group bg-white border border-gray-200 hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col h-full"
                    >
                      {/* Product Image Container */}
                      <div className="relative overflow-hidden bg-gray-50 flex items-center justify-center">
                        <img
                          className="w-full h-48 object-contain group-hover:scale-105 transition-transform duration-300"
                          src={product.images.main}
                          alt={product.name}
                        />
                        
                        {/* Bulk Badge */}
                        <div className="absolute top-3 left-3 bg-orange-500 text-white px-2 py-1 rounded text-xs font-bold">
                          BULK
                        </div>
                        
                        {/* Wishlist Button */}
                        <div className="absolute top-3 right-3">
                          <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors">
                            <Heart className="h-4 w-4 text-gray-600" />
                          </button>
                        </div>
                      </div>

                      {/* Product Info */}
                      <div className="p-4 flex flex-col flex-grow">
                        {/* Delivery Info */}
                        <div className="text-green-600 text-sm font-medium mb-2">
                          {product.leadTime}
                        </div>
                        
                        <h3 className="font-semibold text-gray-900 text-sm mb-2 group-hover:text-orange-500 transition-colors">
                          {product.name}
                        </h3>
                        
                        {/* Min Order Info */}
                        <p className="text-gray-500 text-xs mb-3">
                          Min beställning: {product.minOrder} st
                        </p>
                        
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-2">
                            <span className="text-lg font-bold text-orange-500">
                              Från {product.price.base} {product.price.currency}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between mb-3">
                          <div className="text-orange-500 text-sm font-medium">
                            {product.bulkDiscount}
                          </div>
                        </div>
                        
                        <div className="flex gap-2 mt-auto">
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
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
                            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded font-medium transition-colors text-sm"
                          >
                            Lägg i varukorg
                          </button>
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              handleProductClick(product.id);
                            }}
                            className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded font-medium transition-colors text-sm"
                          >
                            Börja designa
                          </button>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Accessoarer Category */}
            <div>
              {/* Dark Grey Header */}
              <div className="bg-gray-800 text-white px-6 py-4 flex items-center justify-between">
                <h3 className="text-xl font-bold">Populära accessoarer</h3>
                <div className="flex items-center space-x-2">
                  <Link href="/kategori/accessoarer" className="text-orange-300 hover:text-orange-200 text-sm font-medium">
                    Se alla →
                  </Link>
                </div>
              </div>
              
              {/* Product Cards Row */}
              <div className="bg-white">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
                  {productsByCategory['Accessoarer'].map((product) => (
                    <Link 
                      key={product.id} 
                      href={`/produkter/${product.id}`}
                      className="group bg-white border border-gray-200 hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col h-full"
                    >
                      {/* Product Image Container */}
                      <div className="relative overflow-hidden bg-gray-50 flex items-center justify-center">
                        <img
                          className="w-full h-48 object-contain group-hover:scale-105 transition-transform duration-300"
                          src={product.images.main}
                          alt={product.name}
                        />
                        
                        {/* Bulk Badge */}
                        <div className="absolute top-3 left-3 bg-orange-500 text-white px-2 py-1 rounded text-xs font-bold">
                          BULK
                        </div>
                        
                        {/* Wishlist Button */}
                        <div className="absolute top-3 right-3">
                          <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors">
                            <Heart className="h-4 w-4 text-gray-600" />
                          </button>
                        </div>
                      </div>

                      {/* Product Info */}
                      <div className="p-4 flex flex-col flex-grow">
                        {/* Delivery Info */}
                        <div className="text-green-600 text-sm font-medium mb-2">
                          {product.leadTime}
                        </div>
                        
                        <h3 className="font-semibold text-gray-900 text-sm mb-2 group-hover:text-orange-500 transition-colors">
                          {product.name}
                        </h3>
                        
                        {/* Min Order Info */}
                        <p className="text-gray-500 text-xs mb-3">
                          Min beställning: {product.minOrder} st
                        </p>
                        
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-2">
                            <span className="text-lg font-bold text-orange-500">
                              Från {product.price.base} {product.price.currency}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between mb-3">
                          <div className="text-orange-500 text-sm font-medium">
                            {product.bulkDiscount}
                          </div>
                        </div>
                        
                        <div className="flex gap-2 mt-auto">
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
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
                            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded font-medium transition-colors text-sm"
                          >
                            Lägg i varukorg
                          </button>
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              handleProductClick(product.id);
                            }}
                            className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded font-medium transition-colors text-sm"
                          >
                            Börja designa
                          </button>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Hem & Inredning Category */}
            <div>
              {/* Dark Grey Header */}
              <div className="bg-gray-800 text-white px-6 py-4 flex items-center justify-between">
                <h3 className="text-xl font-bold">Populära hem & inredning</h3>
                <div className="flex items-center space-x-2">
                  <Link href="/kategori/hem-inredning" className="text-orange-300 hover:text-orange-200 text-sm font-medium">
                    Se alla →
                  </Link>
                </div>
              </div>
              
              {/* Product Cards Row */}
              <div className="bg-white">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
                  {productsByCategory['Hem & Inredning'].map((product) => (
              <Link 
                key={product.id} 
                href={`/produkter/${product.id}`}
                      className="group bg-white border border-gray-200 hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col h-full"
              >
                      {/* Product Image Container */}
                      <div className="relative overflow-hidden bg-gray-50 flex items-center justify-center">
                  <img
                          className="w-full h-48 object-contain group-hover:scale-105 transition-transform duration-300"
                    src={product.images.main}
                    alt={product.name}
                  />
                        
                        {/* Bulk Badge */}
                        <div className="absolute top-3 left-3 bg-orange-500 text-white px-2 py-1 rounded text-xs font-bold">
                          BULK
                        </div>
                        
                        {/* Wishlist Button */}
                        <div className="absolute top-3 right-3">
                          <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors">
                            <Heart className="h-4 w-4 text-gray-600" />
                          </button>
                        </div>
                      </div>

                      {/* Product Info */}
                      <div className="p-4 flex flex-col flex-grow">
                        {/* Delivery Info */}
                        <div className="text-green-600 text-sm font-medium mb-2">
                          {product.leadTime}
                        </div>
                        
                        <h3 className="font-semibold text-gray-900 text-sm mb-2 group-hover:text-orange-500 transition-colors">
                          {product.name}
                        </h3>
                        
                        {/* Min Order Info */}
                        <p className="text-gray-500 text-xs mb-3">
                          Min beställning: {product.minOrder} st
                        </p>
                        
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-2">
                            <span className="text-lg font-bold text-orange-500">
                              Från {product.price.base} {product.price.currency}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between mb-3">
                          <div className="text-orange-500 text-sm font-medium">
                            {product.bulkDiscount}
                          </div>
                        </div>
                        
                        <div className="flex gap-2 mt-auto">
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
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
                            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded font-medium transition-colors text-sm"
                          >
                            Lägg i varukorg
                          </button>
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              handleProductClick(product.id);
                            }}
                            className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded font-medium transition-colors text-sm"
                          >
                            Börja designa
                          </button>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Kontorsartiklar Category */}
            <div>
              {/* Dark Grey Header */}
              <div className="bg-gray-800 text-white px-6 py-4 flex items-center justify-between">
                <h3 className="text-xl font-bold">Populära kontorsartiklar</h3>
                <div className="flex items-center space-x-2">
                  <Link href="/kategori/kontorsartiklar" className="text-orange-300 hover:text-orange-200 text-sm font-medium">
                    Se alla →
                  </Link>
                  </div>
              </div>
              
              {/* Product Cards Row */}
              <div className="bg-white">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
                  {productsByCategory['Kontorsartiklar'].map((product) => (
                    <Link 
                      key={product.id} 
                      href={`/produkter/${product.id}`}
                      className="group bg-white border border-gray-200 hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col h-full"
                    >
                      {/* Product Image Container */}
                      <div className="relative overflow-hidden bg-gray-50 flex items-center justify-center">
                        <img
                          className="w-full h-48 object-contain group-hover:scale-105 transition-transform duration-300"
                          src={product.images.main}
                          alt={product.name}
                        />
                        
                        {/* Bulk Badge */}
                        <div className="absolute top-3 left-3 bg-orange-500 text-white px-2 py-1 rounded text-xs font-bold">
                          BULK
                        </div>
                        
                        {/* Wishlist Button */}
                        <div className="absolute top-3 right-3">
                          <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors">
                            <Heart className="h-4 w-4 text-gray-600" />
                          </button>
                        </div>
                      </div>

                      {/* Product Info */}
                      <div className="p-4 flex flex-col flex-grow">
                        {/* Delivery Info */}
                        <div className="text-green-600 text-sm font-medium mb-2">
                          {product.leadTime}
                        </div>
                        
                        <h3 className="font-semibold text-gray-900 text-sm mb-2 group-hover:text-orange-500 transition-colors">
                          {product.name}
                        </h3>
                        
                        {/* Min Order Info */}
                        <p className="text-gray-500 text-xs mb-3">
                          Min beställning: {product.minOrder} st
                        </p>
                        
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-2">
                            <span className="text-lg font-bold text-orange-500">
                              Från {product.price.base} {product.price.currency}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between mb-3">
                          <div className="text-orange-500 text-sm font-medium">
                            {product.bulkDiscount}
                          </div>
                        </div>
                        
                        <div className="flex gap-2 mt-auto">
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
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
                            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded font-medium transition-colors text-sm"
                          >
                            Lägg i varukorg
                          </button>
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              handleProductClick(product.id);
                            }}
                            className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded font-medium transition-colors text-sm"
                          >
                            Börja designa
                          </button>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the sections remain the same... */}
      {/* Target Groups Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border-l border-r border-gray-200">
            <div className="bg-gray-800 text-white px-6 py-4">
              <h2 className="text-xl font-bold">Målgrupper</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0">
              <div className="p-6 border-r border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Företag</h3>
                <p className="text-gray-600 text-sm">
                  Profilkläder, eventprodukter och marknadsföringsmaterial för ditt företag.
                </p>
              </div>
              <div className="p-6 border-r border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Events</h3>
                <p className="text-gray-600 text-sm">
                  Tröjor, kepsar och accessoarer för konferenser, möten och evenemang.
                </p>
              </div>
              <div className="p-6 border-r border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Privatpersoner</h3>
                <p className="text-gray-600 text-sm">
                  Unika gåvor, personliga kläder och skapande för dig och dina nära.
                </p>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Skolor</h3>
                <p className="text-gray-600 text-sm">
                  Skoltröjor, klasskläder och evenemangsmaterial för utbildning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border-l border-r border-gray-200">
            <div className="bg-gray-800 text-white px-6 py-4">
              <h2 className="text-xl font-bold">Så fungerar det</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0">
              <div className="p-6 border-r border-gray-200">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-orange-600 font-bold text-lg">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Välj produkt</h3>
                <p className="text-gray-600 text-sm">
                  Bläddra genom våra produkter och välj det som passar dina behov.
                </p>
              </div>
              <div className="p-6 border-r border-gray-200">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-orange-600 font-bold text-lg">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Designa</h3>
                <p className="text-gray-600 text-sm">
                  Använd vårt enkla designverktyg för att skapa din unika design.
                </p>
              </div>
              <div className="p-6 border-r border-gray-200">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-orange-600 font-bold text-lg">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Beställ</h3>
                <p className="text-gray-600 text-sm">
                  Lägg till i kundvagnen och slutför din beställning säkert.
                </p>
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-orange-600 font-bold text-lg">4</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Få levererat</h3>
                <p className="text-gray-600 text-sm">
                  Vi trycker och levererar dina produkter inom 5-7 arbetsdagar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Tryckeget Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Varför välja Tryckeget?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Vi erbjuder den bästa kombinationen av kvalitet, pris och service för alla dina tryckbehov.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-orange-600 text-xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Snabb leverans</h3>
              <p className="text-gray-600">
                Vi levererar dina produkter inom 5-7 arbetsdagar över hela Sverige.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-orange-600 text-xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Enkelt designverktyg</h3>
              <p className="text-gray-600">
                Vårt intuitiva designverktyg gör det enkelt att skapa professionella designs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-orange-600 text-xl">💎</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Hög kvalitet</h3>
              <p className="text-gray-600">
                Vi använder endast högkvalitativa material och avancerade trycktekniker.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-orange-600 text-xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Konkurrenskraftiga priser</h3>
              <p className="text-gray-600">
                Vi erbjuder de bästa priserna på marknaden utan att kompromissa på kvalitet.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-orange-600 text-xl">🚚</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Inga minimiordrar</h3>
              <p className="text-gray-600">
                Beställ från en enda produkt till hundratals - vi har inga minimiordrar.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-orange-600 text-xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Säker betalning</h3>
              <p className="text-gray-600">
                Vi använder endast säkra betallösningar för att skydda dina uppgifter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Dark Grey Header */}
          <div className="bg-gray-800 text-white px-6 py-4 flex items-center justify-between">
            <h2 className="text-xl font-bold">Vad våra kunder säger</h2>
          </div>
          
          {/* Content Row */}
          <div className="bg-white border-l border-r border-gray-200">
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-0">
            {/* Företagsrecensioner */}
            <div className="p-6 border-r border-gray-200">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  ⭐⭐⭐⭐⭐
                </div>
                <span className="ml-2 text-sm text-gray-600">5.0</span>
              </div>
                      <p className="text-gray-600 mb-4">
                        &ldquo;Vi beställde profilkläder till ett säljevent och blev väldigt nöjda. Processen var smidig från början till slut – enkelt att designa, tydliga priser och snabb leverans. Tryckeget gör det lätt för oss att få fram professionella kläder när vi behöver dem.&rdquo;
                      </p>
              <div className="font-semibold text-gray-900">Expand Invest AB</div>
              <div className="text-sm text-gray-500">🏢 Företagskund</div>
            </div>
            
            <div className="p-6 border-r border-gray-200">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  ⭐⭐⭐⭐⭐
                </div>
                <span className="ml-2 text-sm text-gray-600">5.0</span>
              </div>
                      <p className="text-gray-600 mb-4">
                        &ldquo;Som företag inom marknadsföring har vi ofta behov av specialtryck till kampanjer och events. Tryckeget levererade både kvalitet och snabbhet. Vi uppskattar särskilt att vi kan beställa i små volymer utan att kompromissa på servicenivån.&rdquo;
                      </p>
              <div className="font-semibold text-gray-900">Gotlin Holding AB</div>
              <div className="text-sm text-gray-500">🏢 Företagskund</div>
            </div>
            
            <div className="p-6 border-r border-gray-200">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  ⭐⭐⭐⭐⭐
                  </div>
                <span className="ml-2 text-sm text-gray-600">5.0</span>
                  </div>
                      <p className="text-gray-600 mb-4">
                        &ldquo;Vi tryckte t-shirt och vi älskade resultatet! Kvaliteten var fantastisk och processen var enkel från början till slut.&rdquo;
                      </p>
              <div className="font-semibold text-gray-900">Solvify AB</div>
              <div className="text-sm text-gray-500">🏢 Företagskund</div>
              <div className="text-xs text-gray-400 mt-1">Kevin Negash, VD</div>
                  </div>
            
            {/* Privatpersoner */}
            <div className="p-6 border-r border-gray-200">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  ⭐⭐⭐⭐⭐
                  </div>
                <span className="ml-2 text-sm text-gray-600">5.0</span>
                  </div>
                      <p className="text-gray-600 mb-4">
                        &ldquo;Jag beställde t-shirts till en möhippa och det blev en succé! Designverktyget var lätt att använda och resultatet blev till och med bättre än jag hade föreställt mig. Leveransen kom snabbt och alla i gänget älskade tröjorna.&rdquo;
                      </p>
              <div className="font-semibold text-gray-900">Lisa Johansson</div>
              <div className="text-sm text-gray-500">👤 Privatkund</div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  ⭐⭐⭐⭐⭐
                </div>
                <span className="ml-2 text-sm text-gray-600">5.0</span>
              </div>
                      <p className="text-gray-600 mb-4">
                        &ldquo;Vi i klassen tryckte hoodies inför skolavslutningen och är supernöjda. Alla fick välja sin storlek och designen såg exakt ut som vi ville. Snabb leverans och riktigt skön kvalitet på tröjorna.&rdquo;
                      </p>
              <div className="font-semibold text-gray-900">Kalle Edström</div>
              <div className="text-sm text-gray-500">👤 Privatkund</div>
                  </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Redo att börja skapa?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Gå med tusentals nöjda kunder som redan har skapat sina unika designs hos oss.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/design/upload?productId=unisex-jersey-tshirt&size=M&color=Vit&quantity=1"
              className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              🎨 Börja designa nu
            </Link>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center bg-transparent hover:bg-white/10 text-white px-8 py-4 rounded-lg text-lg font-semibold border-2 border-white transition-all duration-200"
            >
              Kontakta oss
            </Link>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
