'use client';

import { PageLayout } from '@/components/page-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Truck, 
  Clock, 
  Globe, 
  Package, 
  MapPin,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Info
} from 'lucide-react';
import Link from 'next/link';

export default function ShippingPage() {
  const domesticRates = [
    { method: 'Standard Shipping', time: '5-7 business days', cost: '$4.99' },
    { method: 'Express Shipping', time: '2-3 business days', cost: '$9.99' },
    { method: 'Overnight Shipping', time: '1 business day', cost: '$19.99' }
  ];

  const internationalRates = [
    { region: 'Canada', time: '7-10 business days', cost: '$12.99' },
    { region: 'Europe (EU)', time: '10-14 business days', cost: '$15.99' },
    { region: 'United Kingdom', time: '8-12 business days', cost: '$14.99' },
    { region: 'Australia/New Zealand', time: '12-16 business days', cost: '$18.99' },
    { region: 'Asia (Japan, Singapore)', time: '10-15 business days', cost: '$16.99' },
    { region: 'Rest of World', time: '15-25 business days', cost: '$22.99' }
  ];

  const processingInfo = [
    {
      icon: <Package className="h-6 w-6" />,
      title: "Production Time",
      description: "2-3 business days for printing and quality checks"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Order Processing",
      description: "Orders placed before 2 PM EST ship the same day"
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Quality Control",
      description: "Every product is inspected before shipping"
    }
  ];

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Shipping Information
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Fast, reliable shipping worldwide. We handle everything from printing to delivery 
            so you can focus on your business.
          </p>
          <Badge variant="outline" className="text-sm px-4 py-2">
            <Globe className="mr-2 h-4 w-4" />
            Worldwide Shipping Available
          </Badge>
        </div>

        {/* Processing Information */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Production & Processing</h2>
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
          <h2 className="text-3xl font-bold mb-4">Ready to Ship Your Designs?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start your order today and we'll have it printed and on its way to you in no time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/products">
                Start Designing
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">
                Shipping Questions?
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
