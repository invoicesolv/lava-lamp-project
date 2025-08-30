import PageLayout from '@/components/page-layout';

export default function SizeGuidePage() {
  return (
    <PageLayout title="Storleksguide" description="Hitta rätt storlek för dina kläder och accessoarer.">
      <div className="max-w-4xl mx-auto px-8">
        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">👕 T-shirts & Hoodies</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Storlek</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bredd (cm)</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Längd (cm)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr><td className="px-6 py-4 text-sm text-gray-900">XS</td><td className="px-6 py-4 text-sm text-gray-900">42</td><td className="px-6 py-4 text-sm text-gray-900">63</td></tr>
                  <tr><td className="px-6 py-4 text-sm text-gray-900">S</td><td className="px-6 py-4 text-sm text-gray-900">45</td><td className="px-6 py-4 text-sm text-gray-900">66</td></tr>
                  <tr><td className="px-6 py-4 text-sm text-gray-900">M</td><td className="px-6 py-4 text-sm text-gray-900">48</td><td className="px-6 py-4 text-sm text-gray-900">69</td></tr>
                  <tr><td className="px-6 py-4 text-sm text-gray-900">L</td><td className="px-6 py-4 text-sm text-gray-900">51</td><td className="px-6 py-4 text-sm text-gray-900">72</td></tr>
                  <tr><td className="px-6 py-4 text-sm text-gray-900">XL</td><td className="px-6 py-4 text-sm text-gray-900">54</td><td className="px-6 py-4 text-sm text-gray-900">75</td></tr>
                  <tr><td className="px-6 py-4 text-sm text-gray-900">XXL</td><td className="px-6 py-4 text-sm text-gray-900">57</td><td className="px-6 py-4 text-sm text-gray-900">78</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">📱 Telefonfodral</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-3">iPhone</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• iPhone 15 Pro Max</li>
                  <li>• iPhone 15 Pro</li>
                  <li>• iPhone 15</li>
                  <li>• iPhone 14 Pro Max</li>
                  <li>• iPhone 14 Pro</li>
                  <li>• iPhone 14</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Samsung</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Galaxy S24 Ultra</li>
                  <li>• Galaxy S24+</li>
                  <li>• Galaxy S24</li>
                  <li>• Galaxy S23 Ultra</li>
                  <li>• Galaxy S23+</li>
                  <li>• Galaxy S23</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-2">💡 Tips för att mäta</h3>
            <p className="text-gray-600">
              Mät dina kläder platt på en yta för bästa resultat. Jämför med våra mått ovan för att hitta rätt storlek. Vid tvivel, välj en storlek större.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
