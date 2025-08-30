import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="font-bold text-lg">PrintDesign</span>
            </div>
            <p className="text-gray-400 mb-4">
              Skapa dina egna kläder – snabbt, enkelt och unikt. Från 1 produkt till hundratals.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                📘
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                🐦
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                📸
              </Link>
            </div>
          </div>

          {/* Produkter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Produkter</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/category/klader" className="hover:text-white transition-colors">Kläder</Link></li>
              <li><Link href="/category/accessoarer" className="hover:text-white transition-colors">Accessoarer</Link></li>
              <li><Link href="/category/hem-inredning" className="hover:text-white transition-colors">Hem & Inredning</Link></li>
              <li><Link href="/category/kontorsartiklar" className="hover:text-white transition-colors">Kontorsartiklar</Link></li>
            </ul>
          </div>

          {/* Tjänster */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Tjänster</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/design-service" className="hover:text-white transition-colors">Designhjälp</Link></li>
              <li><Link href="/bulk-orders" className="hover:text-white transition-colors">Bulkbeställningar</Link></li>
              <li><Link href="/custom-branding" className="hover:text-white transition-colors">Egen Branding</Link></li>
              <li><Link href="/dropshipping" className="hover:text-white transition-colors">Dropshipping</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/how-it-works" className="hover:text-white transition-colors">Så fungerar det</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">Vanliga frågor</Link></li>
              <li><Link href="/size-guide" className="hover:text-white transition-colors">Storleksguide</Link></li>
              <li><Link href="/shipping" className="hover:text-white transition-colors">Frakt & Leverans</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Kontakt</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 PrintDesign. Alla rättigheter förbehållna.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
              Integritetspolicy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
              Användarvillkor
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
