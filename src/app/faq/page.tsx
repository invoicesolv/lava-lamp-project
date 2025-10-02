import { PageLayout } from '@/components/page-layout';

export default function FAQPage() {
  return (
    <PageLayout title="Vanliga frågor" description="Hittar du inte svaret på din fråga? Kontakta oss så hjälper vi dig!">
      <div className="max-w-4xl mx-auto px-8">
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Hur lång tid tar det att få mina produkter?</h3>
            <p className="text-gray-600">Standardleverans tar 5-7 arbetsdagar från att beställningen läggs. Express leverans (2-3 dagar) finns tillgänglig mot extra kostnad.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Vilka filformat kan jag ladda upp?</h3>
            <p className="text-gray-600">Vi accepterar PNG, JPG, SVG och PDF filer. För bästa kvalitet rekommenderar vi PNG eller SVG i hög upplösning (minst 300 DPI).</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Kan jag få prov på produkter innan jag beställer?</h3>
            <p className="text-gray-600">Ja! Vi erbjuder provbeställningar för de flesta produkter. Kontakta vår kundservice för mer information om priser och leveranstider.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Vad är er returpolicy?</h3>
            <p className="text-gray-600">Vi erbjuder full återbetalning inom 30 dagar om produkten inte motsvarar dina förväntningar eller om det finns kvalitetsfel.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Kan ni hjälpa mig med designen?</h3>
            <p className="text-gray-600">Absolut! Vi har professionella designers som kan hjälpa dig skapa perfekta designs. Se vår designhjälp-sida för mer information.</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
