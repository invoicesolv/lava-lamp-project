'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Search, ShoppingCart, Heart, User, Menu, X } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { searchProducts } from '@/data/products';
import { bulkProducts } from '@/data/bulk-products';
import Image from 'next/image';

export function GlobalNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const { getTotalItems } = useCart();

  // Live search effect
  useEffect(() => {
    const performSearch = async () => {
      if (searchQuery.trim().length >= 2) {
        setIsSearching(true);
        try {
          // Search in both regular and bulk products
          const regularResults = searchProducts(searchQuery);
          const bulkResults = bulkProducts.filter(product => 
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.category.toLowerCase().includes(searchQuery.toLowerCase())
          );
          
          const allResults = [...regularResults, ...bulkResults];
          setSearchResults(allResults.slice(0, 8)); // Limit to 8 results
          setShowResults(true);
        } catch (error) {
          console.error('Search error:', error);
          setSearchResults([]);
        } finally {
          setIsSearching(false);
        }
      } else {
        setSearchResults([]);
        setShowResults(false);
      }
    };

    const timeoutId = setTimeout(performSearch, 300); // Debounce search
    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  const handleProductClick = (productId: string, isBulkProduct: boolean) => {
    setShowResults(false);
    setSearchQuery('');
    // Navigate to product page
    window.location.href = isBulkProduct ? `/produkter/${productId}` : `/products/${productId}`;
  };

  return (
    <>
                  {/* Main Navigation */}
                  <nav className="bg-gray-800 text-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0">
              <img 
                src="/logo.png" 
                alt="Tryckeget Logotyp" 
                className="h-12 w-auto object-contain max-w-[120px]"
              />
            </Link>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-lg mx-8">
              <form onSubmit={handleSearch} className="w-full">
                <div className="relative" ref={searchRef}>
                  <input
                    type="text"
                    placeholder="Sök produkt, kategori eller design..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => searchQuery.length >= 2 && setShowResults(true)}
                    className="w-full px-4 py-2 pl-10 pr-4 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-gray-900"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  
                  {/* Live Search Results Dropdown */}
                  {showResults && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
                      {isSearching ? (
                        <div className="p-4 text-center text-gray-500">
                          <Search className="h-5 w-5 animate-spin mx-auto mb-2" />
                          Söker...
                        </div>
                      ) : searchResults.length > 0 ? (
                        <div className="py-2">
                          {searchResults.map((product) => {
                            const isBulkProduct = bulkProducts.some(bp => bp.id === product.id);
                            return (
                              <div
                                key={product.id}
                                onClick={() => handleProductClick(product.id, isBulkProduct)}
                                className="flex items-center p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                              >
                                <div className="w-12 h-12 bg-gray-100 rounded overflow-hidden flex-shrink-0 mr-3">
                                  <Image
                                    src={product.images.main}
                                    alt={product.name}
                                    width={48}
                                    height={48}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h4 className="text-sm font-medium text-gray-900 truncate">
                                    {product.name}
                                  </h4>
                                  <p className="text-xs text-gray-500 truncate">
                                    {product.shortDescription}
                                  </p>
                                  <div className="flex items-center justify-between mt-1">
                                    <span className="text-sm font-semibold text-orange-600">
                                      {product.price.base} {product.price.currency}
                                    </span>
                                    <span className="text-xs text-gray-400">
                                      {product.category}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                          <div className="p-3 border-t border-gray-200">
                            <button
                              type="submit"
                              className="w-full text-center text-sm text-orange-600 hover:text-orange-700 font-medium"
                            >
                              Visa alla resultat för &quot;{searchQuery}&quot;
                            </button>
                          </div>
                        </div>
                      ) : searchQuery.length >= 2 ? (
                        <div className="p-4 text-center text-gray-500">
                          <Search className="h-5 w-5 mx-auto mb-2" />
                          <p className="text-sm">Inga produkter hittades</p>
                        </div>
                      ) : null}
                    </div>
                  )}
                </div>
              </form>
            </div>

            {/* Right Side Icons */}
                        <div className="hidden md:flex items-center space-x-4">
                          <Link 
                            href="/wishlist" 
                            className="p-2 text-gray-300 hover:text-orange-500 transition-colors"
                            title="Önskelista"
                          >
                            <Heart className="h-5 w-5" />
                          </Link>
                          <Link 
                            href="/cart" 
                            className="p-2 text-gray-300 hover:text-orange-500 transition-colors relative"
                            title="Kundvagn"
                          >
                            <ShoppingCart className="h-5 w-5" />
                            <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                              {getTotalItems()}
                            </span>
                          </Link>
                          <Link 
                            href="/login" 
                            className="p-2 text-gray-300 hover:text-orange-500 transition-colors"
                            title="Logga in"
                          >
                            <User className="h-5 w-5" />
                          </Link>
              <Link 
                href="/design/upload?productId=unisex-jersey-tshirt&size=M&color=Vit&quantity=1" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Börja designa
              </Link>
            </div>

                    {/* Mobile Actions */}
                    <div className="flex md:hidden items-center space-x-3">
                      {/* Mobile Cart with Badge */}
                      <Link 
                        href="/checkout" 
                        className="relative text-gray-300 hover:text-white focus:outline-none p-2"
                        title="Kundvagn"
                      >
                        <ShoppingCart className="h-6 w-6" />
                        <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                          {getTotalItems()}
                        </span>
                      </Link>
                      
                      {/* Mobile Menu Button */}
                      <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-gray-300 hover:text-white focus:outline-none focus:text-white p-2"
                      >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                      </button>
                    </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800">
            {/* Mobile Search */}
            <div className="px-4 py-3">
              <form onSubmit={handleSearch}>
                <div className="relative" ref={searchRef}>
                  <input
                    type="text"
                    placeholder="Sök produkt..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => searchQuery.length >= 2 && setShowResults(true)}
                    className="w-full px-4 py-2 pl-10 pr-4 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-gray-900"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  
                  {/* Mobile Live Search Results */}
                  {showResults && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto">
                      {isSearching ? (
                        <div className="p-3 text-center text-gray-500">
                          <Search className="h-4 w-4 animate-spin mx-auto mb-1" />
                          <p className="text-xs">Söker...</p>
                        </div>
                      ) : searchResults.length > 0 ? (
                        <div className="py-1">
                          {searchResults.map((product) => {
                            const isBulkProduct = bulkProducts.some(bp => bp.id === product.id);
                            return (
                              <div
                                key={product.id}
                                onClick={() => handleProductClick(product.id, isBulkProduct)}
                                className="flex items-center p-2 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                              >
                                <div className="w-8 h-8 bg-gray-100 rounded overflow-hidden flex-shrink-0 mr-2">
                                  <Image
                                    src={product.images.main}
                                    alt={product.name}
                                    width={32}
                                    height={32}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h4 className="text-xs font-medium text-gray-900 truncate">
                                    {product.name}
                                  </h4>
                                  <p className="text-xs text-orange-600 font-semibold">
                                    {product.price.base} {product.price.currency}
                                  </p>
                                </div>
                              </div>
                            );
                          })}
                          <div className="p-2 border-t border-gray-200">
                            <button
                              type="submit"
                              className="w-full text-center text-xs text-orange-600 hover:text-orange-700 font-medium"
                            >
                              Visa alla resultat
                            </button>
                          </div>
                        </div>
                      ) : searchQuery.length >= 2 ? (
                        <div className="p-3 text-center text-gray-500">
                          <p className="text-xs">Inga produkter hittades</p>
                        </div>
                      ) : null}
                    </div>
                  )}
                </div>
              </form>
            </div>

            {/* Mobile Menu Links */}
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                href="/products" 
                className="block px-3 py-2 text-gray-300 hover:text-white font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Produkter
              </Link>
              <Link 
                href="/design/upload" 
                className="block px-3 py-2 text-gray-300 hover:text-white font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Designa
              </Link>
              <Link 
                href="/har-finns-vi" 
                className="block px-3 py-2 text-gray-300 hover:text-white font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Här finns vi
              </Link>
              <Link 
                href="/how-it-works" 
                className="block px-3 py-2 text-gray-300 hover:text-white font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Så fungerar det
              </Link>
              <Link 
                href="/contact" 
                className="block px-3 py-2 text-gray-300 hover:text-white font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontakt
              </Link>
              <div className="border-t border-gray-600 pt-4">
                <Link 
                  href="/checkout" 
                  className="block px-3 py-2 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg mx-3 mb-3 text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  🛒 Till kassan ({getTotalItems()} varor)
                </Link>
                <Link 
                  href="/login" 
                  className="block px-3 py-2 text-gray-300 hover:text-white font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Logga in
                </Link>
                <Link 
                  href="/design/upload?productId=unisex-jersey-tshirt&size=M&color=Vit&quantity=1" 
                  className="block mx-3 my-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  🎨 Börja designa
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Secondary Navigation - Categories */}
      <nav className="bg-gray-800 text-white relative z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 py-3 overflow-x-auto">
            <Link 
              href="/kategori/klader" 
              className="whitespace-nowrap text-sm font-medium text-white hover:text-orange-300 transition-colors cursor-pointer underline-offset-4 hover:underline"
            >
              Kläder
            </Link>
            <Link 
              href="/kategori/accessoarer" 
              className="whitespace-nowrap text-sm font-medium text-white hover:text-orange-300 transition-colors cursor-pointer underline-offset-4 hover:underline"
            >
              Accessoarer
            </Link>
            <Link 
              href="/kategori/hem-inredning" 
              className="whitespace-nowrap text-sm font-medium text-white hover:text-orange-300 transition-colors cursor-pointer underline-offset-4 hover:underline"
            >
              Hem & Inredning
            </Link>
            <Link 
              href="/kategori/kontorsartiklar" 
              className="whitespace-nowrap text-sm font-medium text-white hover:text-orange-300 transition-colors cursor-pointer underline-offset-4 hover:underline"
            >
              Kontorsartiklar
            </Link>
            <Link 
              href="/har-finns-vi" 
              className="whitespace-nowrap text-sm font-medium text-white hover:text-orange-300 transition-colors cursor-pointer underline-offset-4 hover:underline bg-orange-600 px-3 py-1 rounded-md"
            >
              📍 Här finns vi
            </Link>
            <Link 
              href="/bulk-orders" 
              className="whitespace-nowrap text-sm font-medium text-white hover:text-orange-300 transition-colors cursor-pointer underline-offset-4 hover:underline"
            >
              Bulkbeställningar
            </Link>
            <Link 
              href="/dropshipping" 
              className="whitespace-nowrap text-sm font-medium text-white hover:text-orange-300 transition-colors cursor-pointer underline-offset-4 hover:underline"
            >
              Dropshipping
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
