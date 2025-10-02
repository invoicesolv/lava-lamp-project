'use client';

import { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getSearchSuggestions } from '@/data/products';
import { bulkProducts } from '@/data/bulk-products';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface SearchComponentProps {
  onClose?: () => void;
  showSuggestions?: boolean;
  placeholder?: string;
  className?: string;
}

export function SearchComponent({ 
  onClose, 
  showSuggestions = true, 
  placeholder = "Sök produkter...",
  className = ""
}: SearchComponentProps) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<Array<{
    id: string;
    name: string;
    shortDescription: string;
    images: { main: string };
    category: string;
    price: { base: number; currency: string };
  }>>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (query.length >= 2) {
      setIsLoading(true);
      // Debounce search
      const timer = setTimeout(() => {
        // Search in bulk products first, then fallback to regular products
        const bulkResults = bulkProducts.filter(product => 
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.shortDescription.toLowerCase().includes(query.toLowerCase()) ||
          product.category.toLowerCase().includes(query.toLowerCase())
        ).slice(0, 6);
        
        const regularResults = getSearchSuggestions(query, 6 - bulkResults.length);
        const results = [...bulkResults, ...regularResults];
        
        setSuggestions(results);
        setShowDropdown(showSuggestions && results.length > 0);
        setIsLoading(false);
      }, 300);

      return () => clearTimeout(timer);
    } else {
      setSuggestions([]);
      setShowDropdown(false);
      setIsLoading(false);
    }
  }, [query, showSuggestions]);

  const handleSearch = (searchQuery: string = query) => {
    if (searchQuery.trim().length >= 2) {
      setShowDropdown(false);
      onClose?.();
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearch();
    }
    if (e.key === 'Escape') {
      setShowDropdown(false);
      onClose?.();
    }
  };

  const handleSuggestionClick = (product: {
    id: string;
    name: string;
    shortDescription: string;
    images: { main: string };
    category: string;
    price: { base: number; currency: string };
  }) => {
    setQuery('');
    setShowDropdown(false);
    onClose?.();
    // Check if it's a bulk product or regular product
    const isBulkProduct = bulkProducts.some(bp => bp.id === product.id);
    router.push(isBulkProduct ? `/produkter/${product.id}` : `/products/${product.id}`);
  };

  const clearSearch = () => {
    setQuery('');
    setSuggestions([]);
    setShowDropdown(false);
    inputRef.current?.focus();
  };

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => {
            if (suggestions.length > 0 && showSuggestions) {
              setShowDropdown(true);
            }
          }}
          className="pl-10 pr-10"
        />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Dropdown Results */}
      {showDropdown && showSuggestions && (
        <Card className="absolute top-full left-0 right-0 mt-2 shadow-lg border z-50 max-h-96 overflow-y-auto">
          <CardContent className="p-0">
            {isLoading ? (
              <div className="p-4 text-center text-muted-foreground">
                Söker...
              </div>
            ) : suggestions.length > 0 ? (
              <div>
                <div className="p-3 border-b bg-muted/50">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-muted-foreground">
                      Förslag ({suggestions.length})
                    </span>
                    <button
                      onClick={() => handleSearch()}
                      className="text-xs text-primary hover:underline"
                    >
                      Se alla resultat
                    </button>
                  </div>
                </div>
                {suggestions.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => handleSuggestionClick(product)}
                    className="p-3 hover:bg-muted/50 cursor-pointer border-b last:border-b-0 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <img
                        src={product.images.main}
                        alt={product.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm truncate">{product.name}</h4>
                        <p className="text-xs text-muted-foreground truncate">
                          {product.shortDescription}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="text-xs px-2 py-0">
                            {product.category}
                          </Badge>
                          <span className="text-xs font-medium">
                            {product.price.base} {product.price.currency}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : query.length >= 2 ? (
              <div className="p-4 text-center text-muted-foreground">
                <p>Inga produkter hittades för &quot;{query}&quot;</p>
                <button
                  onClick={() => handleSearch()}
                  className="text-xs text-primary hover:underline mt-2"
                >
                  Visa alla produkter
                </button>
              </div>
            ) : null}
          </CardContent>
        </Card>
      )}
    </div>
  );
}

// Mobile search overlay component
export function MobileSearchOverlay({ 
  isOpen, 
  onClose 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 lg:hidden">
      <div className="bg-white h-full flex flex-col">
        <div className="p-4 border-b">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Sök produkter</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <SearchComponent 
            onClose={onClose}
            showSuggestions={true}
            placeholder="Vad letar du efter?"
            className="w-full"
          />
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2 text-sm text-muted-foreground">Populära kategorier</h3>
              <div className="grid grid-cols-2 gap-2">
                <Link 
                  href="/kategori/klader" 
                  onClick={onClose}
                  className="p-3 bg-muted/50 rounded-lg text-sm text-center hover:bg-muted transition-colors"
                >
                  Kläder
                </Link>
                <Link 
                  href="/kategori/accessoarer" 
                  onClick={onClose}
                  className="p-3 bg-muted/50 rounded-lg text-sm text-center hover:bg-muted transition-colors"
                >
                  Accessoarer
                </Link>
                <Link 
                  href="/kategori/hem-inredning" 
                  onClick={onClose}
                  className="p-3 bg-muted/50 rounded-lg text-sm text-center hover:bg-muted transition-colors"
                >
                  Hem & Inredning
                </Link>
                <Link 
                  href="/kategori/kontorsartiklar" 
                  onClick={onClose}
                  className="p-3 bg-muted/50 rounded-lg text-sm text-center hover:bg-muted transition-colors"
                >
                  Kontorsartiklar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
