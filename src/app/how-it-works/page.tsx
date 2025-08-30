import PageLayout from '@/components/page-layout';

export default function HowItWorksPage() {
  return (
    <PageLayout title="Så fungerar det" description="Från idé till färdig produkt på bara några enkla steg.">
      <div className="max-w-4xl mx-auto px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">1</div>
            <h3 className="font-bold text-lg mb-2">Välj produkt</h3>
            <p className="text-gray-600 text-sm">Bläddra bland våra 1300+ produkter och välj din favorit.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">2</div>
            <h3 className="font-bold text-lg mb-2">Designa</h3>
            <p className="text-gray-600 text-sm">Ladda upp din design eller använd våra mallar och verktyg.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">3</div>
            <h3 className="font-bold text-lg mb-2">Beställ</h3>
            <p className="text-gray-600 text-sm">Granska din design och lägg beställningen.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">4</div>
            <h3 className="font-bold text-lg mb-2">Få levererat</h3>
            <p className="text-gray-600 text-sm">Vi producerar och levererar din produkt på 5-7 dagar.</p>
          </div>
        </div>

        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">🎨 Designverktyg</h2>
            <p className="text-gray-600 mb-4">
              Vårt användarvänliga designverktyg gör det enkelt att skapa professionella designs:
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Dra-och-släpp funktionalitet</li>
              <li>• Förhandsvisning i realtid</li>
              <li>• Mallar och designelement</li>
              <li>• Automatisk kvalitetskontroll</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">🏭 Produktion</h2>
            <p className="text-gray-600">
              Vi använder de senaste tryckteknikerna och högkvalitativa material för att säkerställa att dina produkter blir perfekta varje gång.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
