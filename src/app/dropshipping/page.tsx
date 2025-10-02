import { PageLayout } from '@/components/page-layout';

export default function DropshippingPage() {
  return (
    <PageLayout 
      title="Dropshipping" 
      description="Starta din egen e-handelsverksamhet utan lagerhantering. Vi sköter produktionen och leveransen."
    >
      <div className="max-w-4xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">🚀 Starta utan risk</h2>
            <p className="text-gray-600 mb-6">
              Med vår dropshipping-tjänst kan du starta din e-handelsverksamhet utan att investera i lager eller produktion.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Ingen initial investering</li>
              <li>• Vi hanterar produktion</li>
              <li>• Automatisk leverans</li>
              <li>• Du fokuserar på försäljning</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">💰 Tjäna pengar</h2>
            <p className="text-gray-600 mb-6">
              Sätt dina egna priser och behåll skillnaden. Ju mer du säljer, desto mer tjänar du.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Flexibel prissättning</li>
              <li>• Upp till 50% marginal</li>
              <li>• Månatlig utbetalning</li>
              <li>• Transparenta kostnader</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Så fungerar det</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full mx-auto mb-3 flex items-center justify-center font-bold">1</div>
              <h3 className="font-semibold mb-2">Registrera dig</h3>
              <p className="text-sm text-gray-600">Skapa ditt konto och välj produkter</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full mx-auto mb-3 flex items-center justify-center font-bold">2</div>
              <h3 className="font-semibold mb-2">Sätt priser</h3>
              <p className="text-sm text-gray-600">Bestäm dina försäljningspriser</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full mx-auto mb-3 flex items-center justify-center font-bold">3</div>
              <h3 className="font-semibold mb-2">Marknadsför</h3>
              <p className="text-sm text-gray-600">Säll produkter via din kanal</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full mx-auto mb-3 flex items-center justify-center font-bold">4</div>
              <h3 className="font-semibold mb-2">Tjäna pengar</h3>
              <p className="text-sm text-gray-600">Vi levererar, du får betalt</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors">
            Bli dropshipping-partner
          </button>
        </div>
      </div>
    </PageLayout>
  );
}
