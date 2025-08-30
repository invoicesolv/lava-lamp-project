import PageLayout from '@/components/page-layout';

export default function ShippingPage() {
  return (
    <PageLayout title="Frakt & Leverans" description="Information om leveranstider, fraktkostnader och leveransalternativ.">
      <div className="max-w-4xl mx-auto px-8">
        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">🚚 Leveransalternativ</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">Standard Leverans</h3>
                <p className="text-2xl font-bold text-green-600 mb-2">GRATIS</p>
                <p className="text-gray-600 mb-4">5-7 arbetsdagar</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Gratis frakt på alla beställningar</li>
                  <li>• Spårningsnummer inkluderat</li>
                  <li>• Leverans till din brevlåda</li>
                </ul>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">Express Leverans</h3>
                <p className="text-2xl font-bold text-blue-600 mb-2">89 SEK</p>
                <p className="text-gray-600 mb-4">2-3 arbetsdagar</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Snabb leverans</li>
                  <li>• Prioriterad hantering</li>
                  <li>• SMS-uppdateringar</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">🌍 Leveransområden</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Sverige</h3>
                <p className="text-gray-600 text-sm">Leverans till hela Sverige via PostNord och Bring.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Europa</h3>
                <p className="text-gray-600 text-sm">7-14 dagar, fraktkostnad beräknas vid checkout.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Internationellt</h3>
                <p className="text-gray-600 text-sm">Kontakta oss för leverans utanför Europa.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">📦 Orderhantering</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Produktionstid</h3>
                <p className="text-gray-600">
                  Vi börjar producera din beställning inom 24 timmar efter att du lagt ordern. Produktionen tar vanligtvis 2-3 arbetsdagar.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Orderbekräftelse</h3>
                <p className="text-gray-600">
                  Du får en bekräftelse via e-post när din order är mottagen och när den skickas.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Spårning</h3>
                <p className="text-gray-600">
                  Alla beställningar kommer med spårningsnummer så att du kan följa din leverans.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-2">⚠️ Viktigt att veta</h3>
            <ul className="text-gray-600 space-y-1">
              <li>• Leveranstider räknas från arbetsdagar (måndag-fredag)</li>
              <li>• Helger kan förlänga leveranstiden</li>
              <li>• Stora beställningar kan ta längre tid att producera</li>
              <li>• Anpassade produkter kan inte returneras</li>
            </ul>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
