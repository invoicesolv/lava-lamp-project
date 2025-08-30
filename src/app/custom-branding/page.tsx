import PageLayout from '@/components/page-layout';

export default function CustomBrandingPage() {
  return (
    <PageLayout 
      title="Egen Branding" 
      description="Bygg ditt varumärke med anpassade produkter. Från logga till komplett varumärkesidentitet."
    >
      <div className="max-w-4xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">🎯 Varumärkesidentitet</h2>
            <p className="text-gray-600 mb-6">
              Skapa en stark varumärkesidentitet som återspeglar dina värderingar och sticker ut från mängden.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Logotypdesign och varumärke</li>
              <li>• Färgschema och typografi</li>
              <li>• Produktkatalog och mockups</li>
              <li>• Marknadsföringsmaterial</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">🏪 Egen Webshop</h2>
            <p className="text-gray-600 mb-6">
              Vi hjälper dig att sätta upp din egen webshop med ditt varumärke i fokus.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Anpassad design och layout</li>
              <li>• Integration med vår produktion</li>
              <li>• Automatisk orderhantering</li>
              <li>• Support och underhåll</li>
            </ul>
          </div>
        </div>

        <div className="bg-purple-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Vad ingår i våra brandingpaket?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold text-lg mb-3">Starter</h3>
              <p className="text-2xl font-bold text-purple-600 mb-4">2 999 SEK</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Logotypdesign</li>
                <li>✓ 5 produktmallar</li>
                <li>✓ Färgschema</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3">Professional</h3>
              <p className="text-2xl font-bold text-purple-600 mb-4">7 999 SEK</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Komplett varumärke</li>
                <li>✓ 20 produktmallar</li>
                <li>✓ Webshop setup</li>
                <li>✓ Marknadsföringsmaterial</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3">Enterprise</h3>
              <p className="text-2xl font-bold text-purple-600 mb-4">19 999 SEK</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Allt i Professional</li>
                <li>✓ Dedikerad projektledare</li>
                <li>✓ Ongoing support</li>
                <li>✓ Marknadsföringsstrategi</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors">
            Starta ditt varumärke
          </button>
        </div>
      </div>
    </PageLayout>
  );
}
