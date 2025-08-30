import { PrintOnDemandNavbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

interface PageLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export default function PageLayout({ children, title, description }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <PrintOnDemandNavbar />
      
      <main className="pt-24">
        {title && (
          <div className="bg-gray-50 py-12">
            <div className="max-w-6xl mx-auto px-8 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {title}
              </h1>
              {description && (
                <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                  {description}
                </p>
              )}
            </div>
          </div>
        )}
        
        <div className="py-12">
          {children}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
