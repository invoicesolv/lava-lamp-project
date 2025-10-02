'use client';

import { useState, useEffect } from 'react';
import { PageLayout } from '@/components/page-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface CartItem {
  id: string;
  name: string;
  price: number;
  currency: string;
  quantity: number;
  size?: string;
  color?: string;
  image: string;
  category: string;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load cart items from localStorage
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (error) {
        console.error('Error loading cart:', error);
        setCartItems([]);
      }
    }
    setIsLoading(false);
  }, []);

  const updateCart = (newCart: CartItem[]) => {
    setCartItems(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id);
      return;
    }
    
    const updatedCart = cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    updateCart(updatedCart);
  };

  const removeItem = (id: string) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    updateCart(updatedCart);
  };

  const clearCart = () => {
    updateCart([]);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  if (isLoading) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">Laddar varukorg...</p>
          </div>
        </div>
      </PageLayout>
    );
  }

  if (cartItems.length === 0) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center py-16">
            <ShoppingBag className="h-24 w-24 text-gray-300 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Din varukorg är tom</h1>
            <p className="text-gray-600 mb-8">Lägg till produkter för att komma igång med din beställning.</p>
            <div className="space-x-4">
              <Link href="/produkter">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                  Fortsätt handla
                </Button>
              </Link>
              <Link href="/">
                <Button variant="outline">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Tillbaka till startsidan
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Varukorg ({getTotalItems()} artiklar)</h1>
          <Button 
            variant="outline" 
            onClick={clearCart}
            className="text-red-600 hover:text-red-700 hover:bg-red-50"
          >
            <Trash2 className="mr-2 h-4 w-4" />
            Töm varukorg
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <div className="flex">
                  <div className="w-32 h-32 bg-gray-50 flex items-center justify-center">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  <div className="flex-1 p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg text-gray-900 mb-2">
                          {item.name}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                          {item.size && <span>Storlek: {item.size}</span>}
                          {item.color && <span>Färg: {item.color}</span>}
                          <Badge variant="outline">{item.category}</Badge>
                        </div>
                        <p className="text-xl font-bold text-orange-600">
                          {item.price} {item.currency}
                        </p>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center border border-gray-300 rounded-lg">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="h-8 w-8 p-0"
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="px-3 py-1 text-sm font-medium min-w-[3rem] text-center">
                            {item.quantity}
                          </span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="h-8 w-8 p-0"
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem(item.id)}
                          className="text-red-600 hover:text-red-700 hover:bg-red-50 h-8 w-8 p-0"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Ordersammanfattning</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span>Antal artiklar:</span>
                  <span>{getTotalItems()}</span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span>Frakt:</span>
                  <span className="text-green-600">Gratis</span>
                </div>
                
                <Separator />
                
                <div className="flex justify-between text-lg font-bold">
                  <span>Totalt:</span>
                  <span>{getTotalPrice()} SEK</span>
                </div>
                
                <div className="space-y-2">
                  <Link href="/checkout">
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                      Gå till kassan
                    </Button>
                  </Link>
                  <Link href="/produkter" className="block">
                    <Button variant="outline" className="w-full">
                      Fortsätt handla
                    </Button>
                  </Link>
                </div>
                
                <div className="text-xs text-gray-500 space-y-1">
                  <p>✓ Snabb leverans 1-3 dagar</p>
                  <p>✓ Gratis retur inom 30 dagar</p>
                  <p>✓ Säker betalning</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
