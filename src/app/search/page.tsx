'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';

export const dynamic = 'force-dynamic';
import { PageLayout } from '@/components/page-layout';
import { SearchComponent } from '@/components/search';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { searchProducts, products } from '@/data/products';
import { bulkProducts } from '@/data/bulk-products';
import { ProductListSchemaMarkup } from '@/components/schema-markup';
import { Search, Filter, SortAsc, SortDesc, Grid, List } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

function SearchPageContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [filteredResults, setFilteredResults] = useState<any[]>([]);
  const [sortBy, setSortBy] = useState<'relevance' | 'price-low' | 'price-high' | 'name'>('relevance');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isLoading, setIsLoading] = useState(true);

  // Get unique categories for filtering (from both regular and bulk products)
  const allProducts = [...products, ...bulkProducts];
  const categories = Array.from(new Set(allProducts.map(p => p.category)));

  useEffect(() => {
    setIsLoading(true);
    if (query) {
      // Search in both regular and bulk products
      const regularResults = searchProducts(query);
      const bulkResults = bulkProducts.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults([...regularResults, ...bulkResults]);
    } else {
      setSearchResults(allProducts);
    }
    setIsLoading(false);
  }, [query]);

  useEffect(() => {
    let filtered = [...searchResults];

    // Filter by category
    if (filterCategory !== 'all') {
      filtered = filtered.filter(product => product.category === filterCategory);
    }

    // Sort results
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price.base - b.price.base);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price.base - a.price.base);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'relevance':
      default:
        // Keep original order (relevance)
        break;
    }

    setFilteredResults(filtered);
  }, [searchResults, sortBy, filterCategory]);

  const highlightText = (text: string, searchQuery: string) => {
    if (!searchQuery || searchQuery.length < 2) return text;
    
    const regex = new RegExp(`(${searchQuery})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? (
        <mark key={index} className="bg-yellow-200 text-yellow-900 px-1 rounded">
          {part}
        </mark>
      ) : part
    );
  };

  return (
    <>
      <ProductListSchemaMarkup products={filteredResults} />
      <PageLayout>
        <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            {query ? `Sökresultat för "${query}"` : 'Alla produkter'}
          </h1>
          
          {/* Search Bar */}
          <div className="max-w-2xl">
            <SearchComponent 
              placeholder="Förfina din sökning..."
              showSuggestions={false}
            />
          </div>
        </div>

        {/* Results Summary & Controls */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8 p-4 bg-muted/30 rounded-lg">
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              {isLoading ? 'Söker...' : `${filteredResults.length} produkter hittades`}
            </span>
            {query && (
              <Badge variant="outline" className="text-xs">
                <Search className="mr-1 h-3 w-3" />
                {query}
              </Badge>
            )}
          </div>
          
          <div className="flex items-center gap-4">
            {/* Category Filter */}
            <Select value={filterCategory} onValueChange={setFilterCategory}>
              <SelectTrigger className="w-40">
                <Filter className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Kategori" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Alla kategorier</SelectItem>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Sort */}
            <Select value={sortBy} onValueChange={(value: any) => setSortBy(value)}>
              <SelectTrigger className="w-40">
                {sortBy.includes('price') ? <SortDesc className="mr-2 h-4 w-4" /> : <SortAsc className="mr-2 h-4 w-4" />}
                <SelectValue placeholder="Sortera" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevance">Relevans</SelectItem>
                <SelectItem value="name">Namn A-Ö</SelectItem>
                <SelectItem value="price-low">Pris: Lågt - Högt</SelectItem>
                <SelectItem value="price-high">Pris: Högt - Lågt</SelectItem>
              </SelectContent>
            </Select>

            {/* View Mode */}
            <div className="flex rounded-lg border">
              <Button
                size="sm"
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                onClick={() => setViewMode('grid')}
                className="rounded-r-none px-3"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                onClick={() => setViewMode('list')}
                className="rounded-l-none px-3"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Results */}
        {isLoading ? (
          <div className="text-center py-12">
            <div className="inline-flex items-center gap-2 text-muted-foreground">
              <Search className="h-5 w-5 animate-spin" />
              Söker produkter...
            </div>
          </div>
        ) : filteredResults.length > 0 ? (
          <div className={
            viewMode === 'grid' 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              : "space-y-4"
          }>
            {filteredResults.map((product) => {
              // Check if it's a bulk product or regular product
              const isBulkProduct = bulkProducts.some(bp => bp.id === product.id);
              return (
              <Link key={product.id} href={isBulkProduct ? `/produkter/${product.id}` : `/products/${product.id}`}>
                {viewMode === 'grid' ? (
                  <Card className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                    <div className="aspect-square bg-muted/20 overflow-hidden">
                      <Image
                        src={product.images.main}
                        alt={product.name}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-4">
                      <Badge variant="secondary" className="text-xs mb-2">
                        {product.category}
                      </Badge>
                      <h3 className="font-semibold text-base mb-2 line-clamp-2">
                        {highlightText(product.name, query)}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {highlightText(product.shortDescription, query)}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-lg">
                          {product.price.base} {product.price.currency}
                        </span>
                        <Badge variant="outline" className="text-xs">
                          {product.sizes.length} storlekar
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <Card className="group hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex gap-4">
                        <div className="w-24 h-24 bg-muted/20 rounded overflow-hidden flex-shrink-0">
                          <Image
                            src={product.images.main}
                            alt={product.name}
                            width={96}
                            height={96}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1 min-w-0">
                              <Badge variant="secondary" className="text-xs mb-2">
                                {product.category}
                              </Badge>
                              <h3 className="font-semibold text-lg mb-2">
                                {highlightText(product.name, query)}
                              </h3>
                              <p className="text-sm text-muted-foreground mb-3">
                                {highlightText(product.shortDescription, query)}
                              </p>
                              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                <span>{product.colors.length} färger</span>
                                <span>{product.sizes.length} storlekar</span>
                                <span>{product.material}</span>
                              </div>
                            </div>
                            <div className="text-right flex-shrink-0">
                              <div className="font-bold text-xl mb-2">
                                {product.price.base} {product.price.currency}
                              </div>
                              <Badge variant="outline" className="text-xs">
                                {product.printArea}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </Link>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Inga resultat hittades</h3>
              <p className="text-muted-foreground mb-6">
                {query 
                  ? `Vi hittade inga produkter som matchar "${query}". Prova med andra sökord.`
                  : 'Börja söka efter produkter ovan.'
                }
              </p>
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">Förslag:</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Link href="/search?q=t-shirt">
                    <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                      t-shirt
                    </Badge>
                  </Link>
                  <Link href="/search?q=hoodie">
                    <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                      hoodie
                    </Badge>
                  </Link>
                  <Link href="/search?q=telefonfodral">
                    <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                      telefonfodral
                    </Badge>
                  </Link>
                  <Link href="/search?q=canvas">
                    <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                      canvas
                    </Badge>
                  </Link>
                  <Link href="/search?q=bomull">
                    <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                      bomull
                    </Badge>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Popular Categories */}
        {!query && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Populära kategorier</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {categories.map(category => (
                <Link key={category} href={`/kategori/${category.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '')}`}>
                  <Card className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <h3 className="font-semibold">{category}</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {products.filter(p => p.category === category).length} produkter
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      </PageLayout>
    </>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchPageContent />
    </Suspense>
  );
}
