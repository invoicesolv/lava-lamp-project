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
      title: "Upload Your Design",
      description: "Upload your artwork, logo, or choose from our design templates. We accept PNG, JPG, PDF, and SVG files.",
      details: ["High-resolution files recommended", "Multiple file formats supported", "Free design templates available"]
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Customize Your Product",
      description: "Choose your product, colors, sizes, and see a live preview of how your design will look.",
      details: ["Real-time preview", "Multiple product options", "Various sizes and colors"]
    },
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      title: "Place Your Order",
      description: "Add to cart, review your order, and complete your purchase securely through our platform.",
      details: ["Secure payment processing", "Order confirmation", "Digital receipt"]
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "We Print & Ship",
      description: "We print your custom products on-demand and ship them directly to your customers or to you.",
      details: ["High-quality printing", "Fast turnaround", "Global shipping available"]
    }
  ];

  const features = [
    {
      icon: <Star className="h-6 w-6" />,
      title: "Premium Quality",
      description: "Professional-grade printing with vibrant, long-lasting colors"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "White Label",
      description: "Your brand, your packaging - we stay invisible to your customers"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Fast Turnaround",
      description: "Most orders printed and shipped within 2-3 business days"
    }
  ];

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How It Works
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Our print-on-demand process is simple, efficient, and designed to help you 
            create amazing custom products without any upfront investment or inventory management.
          </p>
          <Badge variant="outline" className="text-sm px-4 py-2">
            <CheckCircle className="mr-2 h-4 w-4" />
            No Minimum Orders • No Upfront Costs • Global Shipping
          </Badge>
        </div>

        {/* Process Steps */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Simple 4-Step Process</h2>
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
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Platform?</h2>
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
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start creating your custom products today. No setup fees, no minimum orders, 
            and no long-term commitments required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/products">
                Browse Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">
                Get Support
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
