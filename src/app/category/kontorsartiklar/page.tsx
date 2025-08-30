import PageLayout from '@/components/page-layout';

export default function OfficeSuppliesPage() {
  return (
    <PageLayout 
      title="Kontorsartiklar" 
      description="Professionella kontorsartiklar med din egen design. Anteckningsböcker, pennor, kalendrar och mer."
    >
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="aspect-square bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
              <span className="text-6xl">📝</span>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Anteckningsböcker</h3>
              <p className="text-gray-600 text-sm mb-3">Personaliserade anteckningsböcker för kontoret eller skolan.</p>
              <p className="font-semibold text-blue-600">från 149 SEK</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="aspect-square bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
              <span className="text-6xl">📅</span>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Kalendrar</h3>
              <p className="text-gray-600 text-sm mb-3">Väggkalendrar och skrivbordskalendrar med egen design.</p>
              <p className="font-semibold text-blue-600">från 199 SEK</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="aspect-square bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center">
              <span className="text-6xl">✏️</span>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Pennor & Markers</h3>
              <p className="text-gray-600 text-sm mb-3">Anpassade pennor och markers för företag och event.</p>
              <p className="font-semibold text-blue-600">från 29 SEK</p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-orange-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Perfekt för företag</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">🏢 Corporate Branding</h3>
              <p className="text-gray-600 text-sm mb-4">Stärk ditt varumärke med professionella kontorsartiklar.</p>
              
              <h3 className="font-semibold text-gray-900 mb-2">🎓 Skolor & Utbildning</h3>
              <p className="text-gray-600 text-sm">Skolmaterial med skolans logga eller elevernas egna design.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">🎁 Företagspresenter</h3>
              <p className="text-gray-600 text-sm mb-4">Unika presenter till kunder, partners och anställda.</p>
              
              <h3 className="font-semibold text-gray-900 mb-2">📊 Event & Mässor</h3>
              <p className="text-gray-600 text-sm">Marknadsföringsmaterial för event, mässor och konferenser.</p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
