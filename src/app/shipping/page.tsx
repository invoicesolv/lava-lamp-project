'use client';

import { PageLayout } from '@/components/page-layout';
import { Breadcrumb } from '@/components/breadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Clock, 
  Globe, 
  Package, 
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import Link from 'next/link';

export default function ShippingPage() {
  const domesticRates = [
    { method: 'Standardfrakt', time: '5-7 arbetsdagar', cost: '49 kr' },
    { method: 'Expressfrakt', time: '2-3 arbetsdagar', cost: '99 kr' },
    { method: 'Nattfrakt', time: '1 arbetsdag', cost: '199 kr' }
  ];

  const internationalRates = [
    { region: 'Norden', time: '7-10 arbetsdagar', cost: '129 kr' },
    { region: 'Europa (EU)', time: '10-14 arbetsdagar', cost: '159 kr' },
    { region: 'Storbritannien', time: '8-12 arbetsdagar', cost: '149 kr' },
    { region: 'Australien/Nya Zeeland', time: '12-16 arbetsdagar', cost: '189 kr' },
    { region: 'Asien (Japan, Singapore)', time: '10-15 arbetsdagar', cost: '169 kr' },
    { region: 'Resten av världen', time: '15-25 arbetsdagar', cost: '229 kr' }
  ];

  const processingInfo = [
    {
      icon: <Package className="h-6 w-6" />,
      title: "Produktionstid",
      description: "2-3 arbetsdagar för tryckning och kvalitetskontroll"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Beställningshantering",
      description: "Beställningar gjorda före 14:00 skickas samma dag"
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Kvalitetskontroll",
      description: "Varje produkt inspekteras före leverans"
    }
  ];

  const breadcrumbItems = [
    { label: 'Hem', href: '/' },
    { label: 'Frakt & Leverans' }
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <PageLayout>
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Fraktinformation
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Snabb, pålitlig frakt världen över. Vi hanterar allt från tryckning till leverans 
            så du kan fokusera på ditt företag.
          </p>
          <Badge variant="outline" className="text-sm px-4 py-2">
            <Globe className="mr-2 h-4 w-4" />
            Global frakt tillgänglig
          </Badge>
        </div>

        {/* Processing Information */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Produktion & hantering</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {processingInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="pt-8">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full text-primary w-fit">
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{info.title}</h3>
                  <p className="text-muted-foreground">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-muted/30 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-4">Redo att skicka dina design?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Börja din beställning idag så har vi den tryckt och på väg till dig på nolltid.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/produkter">
                Börja designa
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">
                Frågor om frakt?
              </Link>
            </Button>
          </div>
        </div>
      </div>
      </PageLayout>
    </>
  );
}
