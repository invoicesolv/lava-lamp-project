import PageLayout from '@/components/page-layout';

export default function DesignServicePage() {
  return (
    <PageLayout 
      title="Designhjälp" 
      description="Behöver du hjälp med designen? Våra professionella designers hjälper dig att skapa perfekta produkter."
    >
      <div className="max-w-4xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">🎨 Professionell Design</h2>
            <p className="text-gray-600 mb-6">
              Har du en idé men vet inte hur du ska förverkliga den? Våra erfarna designers hjälper dig att skapa professionella designs som får dina produkter att sticka ut.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Logotyper och varumärken</li>
              <li>• Illustrationer och grafik</li>
              <li>• Typografi och textlayout</li>
              <li>• Färgval och komposition</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">⚡ Snabb Process</h2>
            <p className="text-gray-600 mb-6">
              Från idé till färdig design på bara 24-48 timmar. Vi arbetar nära dig för att säkerställa att resultatet blir precis som du vill ha det.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                <p className="text-gray-600">Berätta om din idé</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                <p className="text-gray-600">Vi skapar första utkastet</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                <p className="text-gray-600">Revidering efter din feedback</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                <p className="text-gray-600">Färdig design levereras</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Priser</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Basic</h3>
              <p className="text-3xl font-bold text-blue-600 mb-4">299 SEK</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• En design</li>
                <li>• 2 revisioner</li>
                <li>• 48h leverans</li>
              </ul>
            </div>
            <div className="bg-blue-600 text-white rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Premium</h3>
              <p className="text-3xl font-bold mb-4">599 SEK</p>
              <ul className="text-sm space-y-2">
                <li>• 3 designförslag</li>
                <li>• Obegränsade revisioner</li>
                <li>• 24h leverans</li>
                <li>• Källfiler inkluderat</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Enterprise</h3>
              <p className="text-3xl font-bold text-blue-600 mb-4">1299 SEK</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Komplett varumärke</li>
                <li>• Flera produkttyper</li>
                <li>• 12h leverans</li>
                <li>• Dedikerad designer</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
            Beställ designhjälp
          </button>
        </div>
      </div>
    </PageLayout>
  );
}
