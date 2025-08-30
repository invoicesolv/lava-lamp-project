import PageLayout from '@/components/page-layout';

export default function ContactPage() {
  return (
    <PageLayout title="Kontakt" description="Har du frågor eller behöver hjälp? Vi finns här för dig!">
      <div className="max-w-4xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Kontakta oss</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">📞 Telefon</h3>
                <p className="text-gray-600">08-123 456 78</p>
                <p className="text-sm text-gray-500">Måndag-Fredag 09:00-17:00</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">📧 E-post</h3>
                <p className="text-gray-600">info@printdesign.se</p>
                <p className="text-sm text-gray-500">Vi svarar inom 24 timmar</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">💬 Live Chat</h3>
                <p className="text-gray-600">Tillgänglig på vår hemsida</p>
                <p className="text-sm text-gray-500">Måndag-Fredag 09:00-17:00</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Skicka ett meddelande</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Namn</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">E-post</label>
                <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Meddelande</label>
                <textarea rows={5} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors">
                Skicka meddelande
              </button>
            </form>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
