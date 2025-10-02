'use client';

import { PageLayout } from '@/components/page-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Scale, Info } from 'lucide-react';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Användarvillkor
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Dessa villkor styr din användning av vår tryck-på-begäran-plattform och tjänster. 
            Läs dem noggrant innan du använder våra tjänster.
          </p>
          <Badge variant="outline" className="text-sm px-4 py-2">
            <Scale className="mr-2 h-4 w-4" />
            Senast uppdaterad: December 2024
          </Badge>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>1. Godkännande av villkor</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Genom att komma åt och använda vår tryck-på-begäran-plattform accepterar och godkänner du att vara bunden av 
                dessa användarvillkor. Om du inte godkänner dessa villkor, använd inte våra tjänster.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Beställningar och betalningar</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Alla beställningar är föremål för godkännande. Betalning krävs vid beställning.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Priser visas i SEK och kan komma att ändras</li>
                <li>• Vi accepterar stora kreditkort och PayPal</li>
                <li>• Beställningar kan inte modifieras efter att de lagts</li>
                <li>• Bulkrabatter tillgängliga</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Immateriella rättigheter</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Du behåller äganderätten till dina designfiler. Vi använder dem endast för att fullfölja dina beställningar.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Du garanterar att dina design inte kränker tredje parts rättigheter</li>
                <li>• Vi är inte ansvariga för upphovsrättsintrång</li>
                <li>• Vårt plattformsinnehåll är skyddat av upphovsrätt</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-blue-50/50 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-900">
                <Info className="h-5 w-5" />
                Frågor om dessa villkor?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-blue-800 mb-4">
                Om du har frågor om dessa användarvillkor, kontakta vårt juridiska team.
              </p>
              <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-100" asChild>
                <Link href="/contact">
                  Kontakta juridiskt team
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
}
