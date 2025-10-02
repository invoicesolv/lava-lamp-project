'use client';

import { PageLayout } from '@/components/page-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Lock } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Integritetspolicy
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Vi tar din integritet på allvar. Denna policy förklarar hur vi samlar in, använder 
            och skyddar din personliga information.
          </p>
          <Badge variant="outline" className="text-sm px-4 py-2">
            <Shield className="mr-2 h-4 w-4" />
            Senast uppdaterad: December 2024
          </Badge>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Information vi samlar in</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Vi samlar in information som du tillhandahåller direkt till oss, till exempel när du skapar ett konto, 
                lägger en beställning eller kontaktar oss för support.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Namn och kontaktinformation</li>
                <li>• Kontouppgifter</li>
                <li>• Beställningshistorik och preferenser</li>
                <li>• Designfiler och anpassat innehåll</li>
                <li>• Betalningsinformation (hanteras säkert)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Hur vi använder din information</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm">
                <li>• Bearbeta och fullfölja dina beställningar</li>
                <li>• Tillhandahålla kundsupport</li>
                <li>• Skicka beställningsuppdateringar och bekräftelser</li>
                <li>• Förbättra våra tjänster och användarupplevelse</li>
                <li>• Följa lagliga skyldigheter</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-green-50/50 border-green-200">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <Lock className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-green-900 mb-2">Dina data är säkra</h3>
                  <p className="text-sm text-green-800">
                    Vi använder branschstandard kryptering och säkerhetsåtgärder för att skydda din information. 
                    Vi säljer aldrig din personliga data till tredje parter.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
}
