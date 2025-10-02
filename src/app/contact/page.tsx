'use client';

import { useState } from 'react';
import { PageLayout } from '@/components/page-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Mail, 
  Phone, 
  Clock, 
  Send,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { submitForm, FormData, validateEmail } from '@/lib/form-utils';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    // Validate email
    if (!validateEmail(formData.email)) {
      setSubmitStatus({ type: 'error', message: 'Vänligen ange en giltig e-postadress.' });
      setIsSubmitting(false);
      return;
    }

    try {
      const formSubmissionData: FormData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        subject: formData.subject,
        category: formData.category,
        form_type: 'contact'
      };

      const result = await submitForm(formSubmissionData);
      
      if (result.success) {
        setSubmitStatus({ 
          type: 'success', 
          message: result.message + (result.reference ? ` (Referens: ${result.reference})` : '')
        });
        setFormData({ name: '', email: '', phone: '', subject: '', category: '', message: '' });
      } else {
        setSubmitStatus({ type: 'error', message: result.message || 'Ett fel uppstod. Försök igen.' });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({ type: 'error', message: 'Ett fel uppstod. Försök igen.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Kontakta oss
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Har du frågor om våra produkter eller tjänster? Vi är här för att hjälpa!
            Kontakta vårt supportteam för snabb och vänlig hjälp.
          </p>
          <Badge variant="outline" className="text-sm px-4 py-2">
            <Clock className="mr-2 h-4 w-4" />
            Genomsnittlig svarstid: 4-6 timmar
          </Badge>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Skicka oss ett meddelande</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Fullständigt namn *</Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Ditt fullständiga namn"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">E-postadress *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone">Telefonnummer</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="070-123 45 67"
                    />
                  </div>

                  <div>
                    <Label htmlFor="category">Kategori</Label>
                    <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Välj en kategori" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">Allmän förfrågan</SelectItem>
                        <SelectItem value="technical">Teknisk support</SelectItem>
                        <SelectItem value="billing">Fakturering & betalningar</SelectItem>
                        <SelectItem value="shipping">Frakt & leverans</SelectItem>
                        <SelectItem value="quality">Kvalitetsproblem</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="subject">Ämne</Label>
                    <Input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      placeholder="Kort beskrivning av din förfrågan"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Meddelande *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Vänligen ange så mycket detaljer som möjligt..."
                      rows={6}
                      required
                    />
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
                      <span>{submitStatus.message}</span>
                    </div>
                  )}

                  <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <div className="mr-2 h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        Skickar...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Skicka meddelande
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Kontaktinformation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-full text-primary mt-1">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">E-postsupport</h4>
                    <p className="text-lg font-medium text-primary">support@tryckeget.se</p>
                    <p className="text-sm text-muted-foreground">Vi svarar vanligtvis inom 4-6 timmar</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p2 bg-primary/10 rounded-full text-primary mt-1">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Telefonsupport</h4>
                    <p className="text-lg font-medium text-primary">+46 8 123 456 78</p>
                    <p className="text-sm text-muted-foreground">Måndag - fredag, 09:00 - 18:00 CET</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
