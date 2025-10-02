'use client';

import { PageLayout } from '@/components/page-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Upload, 
  Palette, 
  ShoppingCart, 
  Truck, 
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Clock
} from 'lucide-react';
import Link from 'next/link';

export default function HowItWorksPage() {
  const steps = [
    {
      icon: <Upload className="h-8 w-8" />,
      title: "Ladda upp din design",
      description: "Ladda upp ditt konstverk, logotyp eller välj från våra designmallar. Vi accepterar PNG, JPG, PDF och SVG-filer.",
      details: ["Högupplösta filer rekommenderas", "Flera filformat stöds", "Gratis designmallar tillgängliga"]
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Anpassa din produkt",
      description: "Välj din produkt, färger, storlekar och se en live-förhandsvisning av hur din design kommer att se ut.",
      details: ["Realtidsförhandsvisning", "Flera produktalternativ", "Olika storlekar och färger"]
    },
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      title: "Lägg din beställning",
      description: "Lägg till i varukorgen, granska din beställning och slutför ditt köp säkert genom vår plattform.",
      details: ["Säker betalningshantering", "Beställningsbekräftelse", "Digital kvitto"]
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Vi trycker & skickar",
      description: "Vi trycker dina anpassade produkter på begäran och skickar dem direkt till dina kunder eller till dig.",
      details: ["Högkvalitativ tryckning", "Snabb leverans", "Global frakt tillgänglig"]
    }
  ];

  const features = [
    {
      icon: <Star className="h-6 w-6" />,
      title: "Premiumkvalitet",
      description: "Professionell tryckkvalitet med livliga, långvariga färger"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Vit etikett",
      description: "Ditt varumärke, din förpackning - vi håller oss osynliga för dina kunder"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Snabb leverans",
      description: "De flesta beställningar trycks och skickas inom 2-3 arbetsdagar"
    }
  ];

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Så fungerar det
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Vår tryck-på-begäran-process är enkel, effektiv och utformad för att hjälpa dig 
            skapa fantastiska anpassade produkter utan någon initial investering eller lagerhantering.
          </p>
          <Badge variant="outline" className="text-sm px-4 py-2">
            <CheckCircle className="mr-2 h-4 w-4" />
            Inga minsta beställningar • Inga initiala kostnader • Global frakt
          </Badge>
        </div>

        {/* Process Steps */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Enkel 4-stegsprocess</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {step.icon}
                  </div>
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{step.description}</p>
                  <ul className="space-y-1">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center">
                        <CheckCircle className="h-3 w-3 mr-2 text-green-500" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                    <ArrowRight className="h-6 w-6" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Varför välja vår plattform?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="pt-8">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full text-primary w-fit">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-muted/30 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-4">Redo att komma igång?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Börja skapa dina anpassade produkter idag. Inga installationsavgifter, inga minsta beställningar, 
            och inga långsiktiga åtaganden krävs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/produkter">
                Bläddra produkter
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">
                Få support
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
