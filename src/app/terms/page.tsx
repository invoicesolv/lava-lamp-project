'use client';

import { PageLayout } from '@/components/page-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Scale, CreditCard, RefreshCw, FileText, Gavel, Info } from 'lucide-react';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            These terms govern your use of our print-on-demand platform and services. 
            Please read them carefully before using our services.
          </p>
          <Badge variant="outline" className="text-sm px-4 py-2">
            <Scale className="mr-2 h-4 w-4" />
            Last Updated: December 2024
          </Badge>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>1. Acceptance of Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                By accessing and using our print-on-demand platform, you accept and agree to be bound by 
                these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Orders and Payments</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                All orders are subject to acceptance. Payment is required at the time of order placement.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Prices are displayed in USD and subject to change</li>
                <li>• We accept major credit cards and PayPal</li>
                <li>• Orders cannot be modified once placed</li>
                <li>• Bulk order discounts available</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Intellectual Property</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                You retain ownership of your design files. We only use them to fulfill your orders.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• You warrant your designs don't infringe on third-party rights</li>
                <li>• We're not responsible for copyright violations</li>
                <li>• Our platform content is protected by copyright</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-blue-50/50 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-900">
                <Info className="h-5 w-5" />
                Questions About These Terms?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-blue-800 mb-4">
                If you have questions about these Terms of Service, please contact our legal team.
              </p>
              <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-100" asChild>
                <Link href="/contact">
                  Contact Legal Team
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
}
