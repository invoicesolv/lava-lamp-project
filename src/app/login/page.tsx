'use client';

import { useState } from 'react';
import { PageLayout } from '@/components/page-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, Lock, Eye, EyeOff, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { submitForm, FormData, validateEmail } from '@/lib/form-utils';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
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

    // Validate email
    if (!validateEmail(formData.email)) {
      setSubmitStatus({ type: 'error', message: 'Vänligen ange en giltig e-postadress.' });
      setIsLoading(false);
      return;
    }

    try {
      const formSubmissionData: FormData = {
        email: formData.email,
        password: formData.password,
        form_type: 'login_attempt',
        service_category: 'user_authentication'
      };

      const result = await submitForm(formSubmissionData);
      
      if (result.success) {
        setSubmitStatus({ 
          type: 'success', 
          message: 'Inloggningsförsök registrerat. Autentiseringstjänst kommer att implementeras snart.'
        });
      } else {
        setSubmitStatus({ type: 'error', message: result.message || 'Ett fel uppstod. Försök igen.' });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({ type: 'error', message: 'Ett fel uppstod. Försök igen.' });
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
              Välkommen tillbaka
            </h1>
            <p className="text-muted-foreground">
              Logga in på ditt konto för att fortsätta designa fantastiska produkter
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-center">Sign In</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="email">E-postadress</Label>
                  <div className="relative mt-1">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your.email@example.com"
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
                      placeholder="Enter your password"
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

                {/* Status Messages */}
                {submitStatus.type && (
                  <div className={`p-3 rounded-lg flex items-center gap-2 ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-50 text-green-800 border border-green-200' 
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}>
                    {submitStatus.type === 'success' ? (
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    ) : (
                      <AlertCircle className="h-4 w-4 text-red-600" />
                    )}
                    <span className="text-sm">{submitStatus.message}</span>
                  </div>
                )}

                <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
                  {isLoading ? "Signing in..." : (
                    <>
                      Sign In
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Don&apos;t have an account?{' '}
                  <Link href="/register" className="text-primary hover:underline font-medium">
                    Registrera dig här
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
