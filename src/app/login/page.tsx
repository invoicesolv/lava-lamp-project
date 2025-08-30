import PageLayout from '@/components/page-layout';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <PageLayout title="Logga in" description="Välkommen tillbaka! Logga in på ditt konto.">
      <div className="max-w-md mx-auto px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">E-postadress</label>
              <input 
                type="email" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="din@email.se"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Lösenord</label>
              <input 
                type="password" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                <span className="ml-2 text-sm text-gray-600">Kom ihåg mig</span>
              </label>
              <Link href="/forgot-password" className="text-sm text-blue-600 hover:text-blue-500">
                Glömt lösenord?
              </Link>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
            >
              Logga in
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Har du inget konto? 
              <Link href="/register" className="text-blue-600 hover:text-blue-500 ml-1">
                Registrera dig här
              </Link>
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
