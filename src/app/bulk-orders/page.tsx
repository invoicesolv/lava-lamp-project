import PageLayout from '@/components/page-layout';

export default function BulkOrdersPage() {
  return (
    <PageLayout 
      title="Bulkbeställningar" 
      description="Stora beställningar med rabatt. Perfekt för företag, event, skolor och organisationer."
    >
      <div className="max-w-4xl mx-auto px-8">
        <div className="bg-green-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">💰 Volymrabatter</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">50+ st</p>
              <p className="text-sm text-gray-600">5% rabatt</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">100+ st</p>
              <p className="text-sm text-gray-600">10% rabatt</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">250+ st</p>
              <p className="text-sm text-gray-600">15% rabatt</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">500+ st</p>
              <p className="text-sm text-gray-600">20% rabatt</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">🏢 Företag</h3>
            <p className="text-gray-600 mb-4">
              Uniforms, företagskläder och marknadsföringsmaterial för hela teamet.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">🎓 Skolor & Utbildning</h3>
            <p className="text-gray-600 mb-4">
              Klassresor, studentkläder och skolmaterial med egen design.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">🎉 Event & Festivaler</h3>
            <p className="text-gray-600 mb-4">
              T-shirts, hoodies och accessoarer för event och festivaler.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">💑 Bröllop & Fester</h3>
            <p className="text-gray-600 mb-4">
              Personliga presenter och minnen för alla gäster.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Få en offert</h3>
          <p className="text-gray-600 mb-6">
            Kontakta oss för en skräddarsydd offert baserad på dina behov.
          </p>
          <button className="bg-black text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors">
            Begär offert
          </button>
        </div>
      </div>
    </PageLayout>
  );
}
