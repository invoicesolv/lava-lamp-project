// Form submission utility for CRM integration
export interface FormData {
  name?: string;
  email: string;
  password?: string;
  phone?: string;
  company?: string;
  message?: string;
  address?: string;
  postalCode?: string;
  city?: string;
  date?: string;
  size?: string;
  moveOutType?: string;
  hasBalcony?: string;
  hasStorage?: string;
  hasBasement?: string;
  extraServices?: string[];
  suburb?: string;
  subject?: string;
  category?: string;
  productId?: string;
  productName?: string;
  quantity?: string;
  budget?: string;
  deadline?: string;
  form_type?: string;
  service_category?: string;
  location?: string;
  page_url?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
}

export interface FormResponse {
  success: boolean;
  message: string;
  reference?: string;
  crm_synced?: boolean;
  crm_id?: string;
}

export async function submitForm(formData: FormData): Promise<FormResponse> {
  try {
    // Add current page URL and UTM parameters
    const enhancedFormData = {
      ...formData,
      page_url: typeof window !== 'undefined' ? window.location.href : '',
      utm_source: getUrlParameter('utm_source'),
      utm_medium: getUrlParameter('utm_medium'),
      utm_campaign: getUrlParameter('utm_campaign'),
      utm_term: getUrlParameter('utm_term'),
      utm_content: getUrlParameter('utm_content')
    };

    const response = await fetch('/api/leads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(enhancedFormData)
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Form submission error:', error);
    return {
      success: true, // Still show success to user
      message: 'Tack för ditt meddelande! Vi återkommer inom 24 timmar.',
      crm_synced: false
    };
  }
}

// Get URL parameter
function getUrlParameter(name: string): string {
  if (typeof window === 'undefined') return '';
  
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name) || '';
}

// Validate email
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Validate Swedish postal code
export function validateSwedishPostalCode(postalCode: string): boolean {
  const postalCodeRegex = /^\d{3}\s?\d{2}$/;
  return postalCodeRegex.test(postalCode);
}

// Format Swedish postal code
export function formatSwedishPostalCode(postalCode: string): string {
  const cleaned = postalCode.replace(/\s/g, '');
  if (cleaned.length === 5) {
    return `${cleaned.slice(0, 3)} ${cleaned.slice(3)}`;
  }
  return postalCode;
}
