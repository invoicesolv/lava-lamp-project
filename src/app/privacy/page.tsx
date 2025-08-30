'use client';

import { PageLayout } from '@/components/page-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Shield, Lock, Info } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            We take your privacy seriously. This policy explains how we collect, use, 
            and protect your personal information.
          </p>
          <Badge variant="outline" className="text-sm px-4 py-2">
            <Shield className="mr-2 h-4 w-4" />
            Last Updated: December 2024
          </Badge>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Information We Collect</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                We collect information you provide directly to us, such as when you create an account, 
                place an order, or contact us for support.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Name and contact information</li>
                <li>• Account credentials</li>
                <li>• Order history and preferences</li>
                <li>• Design files and custom content</li>
                <li>• Payment information (processed securely)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm">
                <li>• Process and fulfill your orders</li>
                <li>• Provide customer support</li>
                <li>• Send order updates and confirmations</li>
                <li>• Improve our services and user experience</li>
                <li>• Comply with legal obligations</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-green-50/50 border-green-200">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <Lock className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-green-900 mb-2">Your Data is Secure</h3>
                  <p className="text-sm text-green-800">
                    We use industry-standard encryption and security measures to protect your information. 
                    We never sell your personal data to third parties.
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
