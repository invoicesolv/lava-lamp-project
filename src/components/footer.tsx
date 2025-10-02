import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-8 py-12">
        <div className="grid md:grid-cols-5 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/logo.png" 
                alt="Tryckeget Logotyp" 
                className="w-8 h-8 object-contain"
              />
              <span className="font-bold text-lg">Tryckeget</span>
            </div>
            <p className="text-gray-400 mb-4">
              Tryck egna kläder enkelt
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/tryckeget" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                <span className="sr-only">Facebook</span>
                📘
              </Link>
              <Link href="https://www.twitter.com/tryckeget" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                <span className="sr-only">Twitter</span>
                🐦
              </Link>
              <Link href="https://www.instagram.com/tryckeget" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                <span className="sr-only">Instagram</span>
                📸
              </Link>
            </div>
          </div>

          {/* Produkter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Produkter</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/kategori/klader" className="hover:text-white transition-colors">Kläder</Link></li>
              <li><Link href="/kategori/accessoarer" className="hover:text-white transition-colors">Accessoarer</Link></li>
              <li><Link href="/kategori/hem-inredning" className="hover:text-white transition-colors">Hem & Inredning</Link></li>
              <li><Link href="/kategori/kontorsartiklar" className="hover:text-white transition-colors">Kontorsartiklar</Link></li>
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

          {/* Städer */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Huvudstäder</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/stockholm" className="hover:text-white transition-colors">Stockholm</Link></li>
              <li><Link href="/goteborg" className="hover:text-white transition-colors">Göteborg</Link></li>
              <li><Link href="/malmo" className="hover:text-white transition-colors">Malmö</Link></li>
              <li><Link href="/uppsala" className="hover:text-white transition-colors">Uppsala</Link></li>
              <li><Link href="/linkoping" className="hover:text-white transition-colors">Linköping</Link></li>
              <li><Link href="/orebro" className="hover:text-white transition-colors">Örebro</Link></li>
              <li><Link href="/vasteras" className="hover:text-white transition-colors">Västerås</Link></li>
              <li><Link href="/har-finns-vi" className="hover:text-orange-300 transition-colors font-medium">📍 Alla städer →</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/how-it-works" className="hover:text-white transition-colors">Så fungerar det</Link></li>
              <li><Link href="/har-finns-vi" className="hover:text-white transition-colors">Här finns vi</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">Vanliga frågor</Link></li>
              <li><Link href="/size-guide" className="hover:text-white transition-colors">Storleksguide</Link></li>
              <li><Link href="/shipping" className="hover:text-white transition-colors">Frakt & Leverans</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Kontakt</Link></li>
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold mb-4">Säkra betalningsmetoder</h3>
            <div className="flex items-center justify-center flex-wrap gap-4 sm:gap-6">
              <img 
                src="/images/Swish_Logo_Secondary_White_P3.png" 
                alt="Swish" 
                className="h-10 w-auto"
              />
              <img 
                src="/images/visa-mastercard-logo.png" 
                alt="Visa Mastercard" 
                className="h-10 w-auto"
              />
              <img 
                src="/images/american-express-logo.png" 
                alt="American Express" 
                className="h-8 w-auto"
              />
              <img 
                src="/images/Klarna_Payment_Badge.svg.png" 
                alt="Klarna" 
                className="h-10 w-auto"
              />
              <img 
                src="/images/apple-pay-payment-mark-logo.png" 
                alt="Apple Pay" 
                className="h-10 w-auto"
              />
              <img 
                src="/images/google-pay-logo.png" 
                alt="Google Pay" 
                className="h-10 w-auto"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Tryckeget. Alla rättigheter förbehållna.
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
