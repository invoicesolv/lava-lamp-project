'use client';

import { PageLayout } from '@/components/page-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Ruler, 
  Info, 
  ArrowRight,
  Shirt,
  Coffee,
  Smartphone,
  ShoppingBag
} from 'lucide-react';
import Link from 'next/link';

export default function SizeGuidePage() {
  const tshirtSizes = [
    { size: 'XS', chest: '31-34', length: '27', sleeve: '7' },
    { size: 'S', chest: '34-37', length: '28', sleeve: '8' },
    { size: 'M', chest: '38-41', length: '29', sleeve: '8.5' },
    { size: 'L', chest: '42-45', length: '30', sleeve: '9' },
    { size: 'XL', chest: '46-49', length: '31', sleeve: '9.5' },
    { size: '2XL', chest: '50-53', length: '32', sleeve: '10' },
    { size: '3XL', chest: '54-57', length: '33', sleeve: '10.5' }
  ];

  const hoodieSizes = [
    { size: 'XS', chest: '34-36', length: '25', sleeve: '23' },
    { size: 'S', chest: '36-38', length: '26', sleeve: '24' },
    { size: 'M', chest: '38-40', length: '27', sleeve: '25' },
    { size: 'L', chest: '40-42', length: '28', sleeve: '26' },
    { size: 'XL', chest: '42-44', length: '29', sleeve: '27' },
    { size: '2XL', chest: '44-46', length: '30', sleeve: '28' },
    { size: '3XL', chest: '46-48', length: '31', sleeve: '29' }
  ];

  const accessorySizes = [
    { product: 'Mug', dimensions: '11 oz (325ml)', printArea: '8.5" x 3"' },
    { product: 'Phone Case', dimensions: 'Multiple sizes available', printArea: 'Full coverage' },
    { product: 'Tote Bag', dimensions: '15" x 16"', printArea: '12" x 12"' },
    { product: 'Poster', dimensions: 'A4, A3, A2, A1', printArea: 'Full size' },
    { product: 'Stickers', dimensions: 'Custom sizes', printArea: 'Full coverage' }
  ];

  const measurementTips = [
    {
      title: "Chest Measurement",
      description: "Measure around the fullest part of the chest, keeping the tape horizontal."
    },
    {
      title: "Length Measurement", 
      description: "Measure from the highest point of the shoulder to the bottom hem."
    },
    {
      title: "Sleeve Length",
      description: "Measure from the center back neck to the end of the sleeve."
    },
    {
      title: "Print Area",
      description: "The maximum printable area varies by product. Design within recommended dimensions for best results."
    }
  ];

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Size Guide
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Find the perfect fit for your custom products. All measurements are in inches unless otherwise specified.
          </p>
          <Badge variant="outline" className="text-sm px-4 py-2">
            <Ruler className="mr-2 h-4 w-4" />
            Professional Sizing Standards
          </Badge>
        </div>

        {/* Size Charts */}
        <div className="mb-16">
          <Tabs defaultValue="apparel" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
              <TabsTrigger value="apparel" className="flex items-center gap-2">
                <Shirt className="h-4 w-4" />
                Apparel
              </TabsTrigger>
              <TabsTrigger value="accessories" className="flex items-center gap-2">
                <Coffee className="h-4 w-4" />
                Accessories
              </TabsTrigger>
              <TabsTrigger value="phone" className="flex items-center gap-2">
                <Smartphone className="h-4 w-4" />
                Phone Cases
              </TabsTrigger>
              <TabsTrigger value="bags" className="flex items-center gap-2">
                <ShoppingBag className="h-4 w-4" />
                Bags
              </TabsTrigger>
            </TabsList>

            <TabsContent value="apparel" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>T-Shirt Sizes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4">Size</th>
                          <th className="text-left py-3 px-4">Chest (inches)</th>
                          <th className="text-left py-3 px-4">Length (inches)</th>
                          <th className="text-left py-3 px-4">Sleeve (inches)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tshirtSizes.map((size, index) => (
                          <tr key={index} className="border-b hover:bg-muted/50">
                            <td className="py-3 px-4 font-medium">{size.size}</td>
                            <td className="py-3 px-4">{size.chest}</td>
                            <td className="py-3 px-4">{size.length}</td>
                            <td className="py-3 px-4">{size.sleeve}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Hoodie Sizes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4">Size</th>
                          <th className="text-left py-3 px-4">Chest (inches)</th>
                          <th className="text-left py-3 px-4">Length (inches)</th>
                          <th className="text-left py-3 px-4">Sleeve (inches)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {hoodieSizes.map((size, index) => (
                          <tr key={index} className="border-b hover:bg-muted/50">
                            <td className="py-3 px-4 font-medium">{size.size}</td>
                            <td className="py-3 px-4">{size.chest}</td>
                            <td className="py-3 px-4">{size.length}</td>
                            <td className="py-3 px-4">{size.sleeve}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="accessories" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Accessory Dimensions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4">Product</th>
                          <th className="text-left py-3 px-4">Dimensions</th>
                          <th className="text-left py-3 px-4">Print Area</th>
                        </tr>
                      </thead>
                      <tbody>
                        {accessorySizes.map((item, index) => (
                          <tr key={index} className="border-b hover:bg-muted/50">
                            <td className="py-3 px-4 font-medium">{item.product}</td>
                            <td className="py-3 px-4">{item.dimensions}</td>
                            <td className="py-3 px-4">{item.printArea}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="phone" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Phone Case Compatibility</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">iPhone Models</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• iPhone 15, 15 Plus, 15 Pro, 15 Pro Max</li>
                        <li>• iPhone 14, 14 Plus, 14 Pro, 14 Pro Max</li>
                        <li>• iPhone 13, 13 mini, 13 Pro, 13 Pro Max</li>
                        <li>• iPhone 12, 12 mini, 12 Pro, 12 Pro Max</li>
                        <li>• iPhone 11, 11 Pro, 11 Pro Max</li>
                        <li>• iPhone SE (2022)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Samsung Models</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Galaxy S24, S24+, S24 Ultra</li>
                        <li>• Galaxy S23, S23+, S23 Ultra</li>
                        <li>• Galaxy S22, S22+, S22 Ultra</li>
                        <li>• Galaxy Note series</li>
                        <li>• Galaxy A series</li>
                        <li>• And many more models</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="bags" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Bag Specifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-4">Tote Bags</h4>
                      <ul className="space-y-2 text-sm">
                        <li><strong>Dimensions:</strong> 15" x 16" (38cm x 40cm)</li>
                        <li><strong>Handle:</strong> 22" (56cm)</li>
                        <li><strong>Material:</strong> 100% cotton canvas</li>
                        <li><strong>Weight:</strong> 6 oz</li>
                        <li><strong>Print Area:</strong> 12" x 12" (30cm x 30cm)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4">Drawstring Bags</h4>
                      <ul className="space-y-2 text-sm">
                        <li><strong>Dimensions:</strong> 17" x 20" (43cm x 51cm)</li>
                        <li><strong>Drawstring:</strong> Reinforced eyelets</li>
                        <li><strong>Material:</strong> Polyester</li>
                        <li><strong>Weight:</strong> Lightweight</li>
                        <li><strong>Print Area:</strong> 13" x 13" (33cm x 33cm)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Measurement Tips */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">How to Measure</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {measurementTips.map((tip, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Info className="h-5 w-5 text-primary" />
                    {tip.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{tip.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tips and Notes */}
        <Card className="mb-16 bg-blue-50/50 border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-900">
              <Info className="h-5 w-5" />
              Important Notes
            </CardTitle>
          </CardHeader>
          <CardContent className="text-blue-800">
            <ul className="space-y-2">
              <li>• All measurements are approximate and may vary by ±0.5 inches</li>
              <li>• Sizes may vary slightly between different product brands</li>
              <li>• For the best fit, measure a similar garment you already own</li>
              <li>• When in doubt between sizes, we recommend sizing up</li>
              <li>• Custom sizing available for bulk orders - contact us for details</li>
            </ul>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center bg-muted/30 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our support team is here to help you find the perfect fit for your custom products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                Contact Support
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/products">
                Browse Products
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
