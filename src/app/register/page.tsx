'use client';

import { useState } from 'react';
import { PageLayout } from '@/components/page-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Mail, Lock, Eye, EyeOff, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { submitForm, FormData, validateEmail } from '@/lib/form-utils';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: '' });
    
    if (!formData.acceptTerms) {
      setSubmitStatus({ type: 'error', message: 'Vänligen godkänn användarvillkoren för att fortsätta' });
      setIsLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setSubmitStatus({ type: 'error', message: 'Lösenorden matchar inte' });
      setIsLoading(false);
      return;
    }

    // Validate email
    if (!validateEmail(formData.email)) {
      setSubmitStatus({ type: 'error', message: 'Vänligen ange en giltig e-postadress' });
      setIsLoading(false);
      return;
    }

    try {
      // Send registration data to CRM
      const formSubmissionData: FormData = {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        message: `Ny användarregistrering: ${formData.firstName} ${formData.lastName}`,
        form_type: 'registration',
        service_category: 'user_registration'
      };

      const result = await submitForm(formSubmissionData);
      
      if (result.success) {
        setSubmitStatus({ 
          type: 'success', 
          message: 'Registrering lyckades! Du kommer att få ett bekräftelsemail inom kort.' + (result.reference ? ` (Referens: ${result.reference})` : '')
        });
        setFormData({ firstName: '', lastName: '', email: '', password: '', confirmPassword: '', acceptTerms: false });
      } else {
        setSubmitStatus({ type: 'error', message: result.message || 'Ett fel uppstod vid registreringen. Försök igen.' });
      }
    } catch (error) {
      console.error('Registration error:', error);
      setSubmitStatus({ type: 'error', message: 'Ett fel uppstod vid registreringen. Försök igen.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-4">
              Skapa konto
            </h1>
            <p className="text-muted-foreground">
              Anslöt dig till tusentals skapare som bygger fantastiska anpassade produkter
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-center">Registrera dig</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Förnamn</Label>
                    <Input
                      id="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      placeholder="Erik"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Efternamn</Label>
                    <Input
                      id="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      placeholder="Andersson"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">E-postadress</Label>
                  <div className="relative mt-1">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="din.epost@exempel.se"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="password">Lösenord</Label>
                  <div className="relative mt-1">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                      placeholder="Skapa ett starkt lösenord"
                      className="pl-10 pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.acceptTerms}
                    onCheckedChange={(checked) => handleInputChange('acceptTerms', !!checked)}
                    className="mt-1"
                  />
                  <Label htmlFor="terms" className="text-sm leading-tight">
                    Jag godkänner{' '}
                    <Link href="/terms" className="text-primary hover:underline">
                      Användarvillkoren
                    </Link>{' '}
                    och{' '}
                    <Link href="/privacy" className="text-primary hover:underline">
                      Integritetspolicyn
                    </Link>
                  </Label>
                </div>

                {/* Status Messages */}
                {submitStatus.type && (
                  <div className={`p-4 rounded-lg flex items-center gap-2 ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-50 text-green-800 border border-green-200' 
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}>
                    {submitStatus.type === 'success' ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : (
                      <AlertCircle className="h-5 w-5 text-red-600" />
                    )}
                    <span className="text-sm">{submitStatus.message}</span>
                  </div>
                )}

                <Button 
                  type="submit" 
                  className="w-full" 
                  size="lg" 
                  disabled={isLoading || !formData.acceptTerms}
                >
                  {isLoading ? "Skapar konto..." : (
                    <>
                      Skapa konto
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Har du redan ett konto?{' '}
                  <Link href="/login" className="text-primary hover:underline font-medium">
                    Logga in här
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
}
