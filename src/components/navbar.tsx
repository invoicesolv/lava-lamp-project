"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { products } from "@/data/products";
import Link from "next/link";

export function PrintOnDemandNavbar() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  
  return (
    <div
      className={cn("fixed top-6 inset-x-0 max-w-7xl mx-auto z-50 px-4", className)}
    >
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 z-50">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">P</span>
          </div>
          <span className="font-bold text-lg text-gray-900 dark:text-white">PrintDesign</span>
        </Link>
        
        {/* Center Menu */}
        <div className="flex-1 flex justify-center">
          <Menu setActive={setActive}>
            <MenuItem setActive={setActive} active={active} item="Produkter">
              <div className="text-sm grid grid-cols-2 gap-6 p-4">
                {products.slice(0, 4).map((product) => (
                  <ProductItem
                    key={product.id}
                    title={product.name}
                    href={`/products/${product.id}`}
                    src={product.images.main}
                    description={product.shortDescription}
                  />
                ))}
              </div>
            </MenuItem>
            
            <MenuItem setActive={setActive} active={active} item="Kategorier">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/category/klader">Kläder</HoveredLink>
                <HoveredLink href="/category/accessoarer">Accessoarer</HoveredLink>
                <HoveredLink href="/category/hem-inredning">Hem & Inredning</HoveredLink>
                <HoveredLink href="/category/kontorsartiklar">Kontorsartiklar</HoveredLink>
              </div>
            </MenuItem>
            
            <MenuItem setActive={setActive} active={active} item="Tjänster">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/design-service">Designhjälp</HoveredLink>
                <HoveredLink href="/bulk-orders">Bulkbeställningar</HoveredLink>
                <HoveredLink href="/custom-branding">Egen Branding</HoveredLink>
                <HoveredLink href="/dropshipping">Dropshipping</HoveredLink>
              </div>
            </MenuItem>
            
            <MenuItem setActive={setActive} active={active} item="Support">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/how-it-works">Så fungerar det</HoveredLink>
                <HoveredLink href="/faq">Vanliga frågor</HoveredLink>
                <HoveredLink href="/size-guide">Storleksguide</HoveredLink>
                <HoveredLink href="/shipping">Frakt & Leverans</HoveredLink>
                <HoveredLink href="/contact">Kontakt</HoveredLink>
              </div>
            </MenuItem>
          </Menu>
        </div>
        
        {/* Auth Buttons */}
        <div className="flex items-center space-x-4 z-50">
          <Link 
            href="/login" 
            className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white font-medium transition-colors"
          >
            Logga in
          </Link>
          <Link 
            href="/register" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
          >
            Registrera dig
          </Link>
        </div>
      </div>
    </div>
  );
}
