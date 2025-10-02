import { NextRequest, NextResponse } from 'next/server';

const CRM_URL = process.env.NEXT_PUBLIC_CRM_URL || 'https://crm.solvify.se';
const CRM_API_TOKEN = process.env.CRM_API_TOKEN || '37f99e9d-a2b6-4900-8cfb-fe1e58afa592';

// Swedish postal code validation
function isValidSwedishPostalCode(postalCode: string): boolean {
  const postalCodeRegex = /^\d{3}\s?\d{2}$/;
  return postalCodeRegex.test(postalCode);
}

// Email validation
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Generate reference number
function generateReferenceNumber(): string {
  const timestamp = Date.now().toString().slice(-6);
  return `FL${timestamp}`;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const requiredFields = ['name', 'email'];
    for (const field of requiredFields) {
      if (!body[field] || body[field].trim() === '') {
        return NextResponse.json(
          { error: `Fältet ${field} är obligatoriskt` },
          { status: 400 }
        );
      }
    }

    // Validate email format
    if (!isValidEmail(body.email)) {
      return NextResponse.json(
        { error: 'Ogiltig e-postadress' },
        { status: 400 }
      );
    }

    // Validate postal code if provided
    if (body.postalCode && !isValidSwedishPostalCode(body.postalCode)) {
      return NextResponse.json(
        { error: 'Ogiltigt postnummer (använd format: 123 45)' },
        { status: 400 }
      );
    }

    // Prepare CRM data
    const crmData = {
      // Standard CRM fields
      name: body.name.trim(),
      email: body.email.trim(),
      phone: body.phone?.trim() || '',
      company: body.company?.trim() || 'Tryckeget',
      source: body.source?.trim() || 'tryckeget.se',
      message: body.message?.trim() || '',
      
      // Custom fields
      address: body.address?.trim() || '',
      postalCode: body.postalCode?.trim() || '',
      city: body.city?.trim() || '',
      date: body.date?.trim() || '',
      size: body.size?.trim() || '',
      moveOutType: body.moveOutType?.trim() || '',
      hasBalcony: body.hasBalcony?.trim() || '',
      hasStorage: body.hasStorage?.trim() || '',
      hasBasement: body.hasBasement?.trim() || '',
      extraServices: body.extraServices || [],
      suburb: body.suburb?.trim() || '',
      
      // Metadata
      booking_type: body.booking_type || 'tryck',
      location: body.location || 'sverige',
      priority: body.priority || 'medium',
      full_address: body.full_address?.trim() || '',
      service_category: body.service_category || 'tryck_klader',
      reference_number: generateReferenceNumber(),
      form_type: body.form_type || 'contact',
      page_url: body.page_url || '',
      utm_source: body.utm_source || '',
      utm_medium: body.utm_medium || '',
      utm_campaign: body.utm_campaign || '',
      utm_term: body.utm_term || '',
      utm_content: body.utm_content || ''
    };

    // Send to CRM
    const crmResponse = await fetch(`${CRM_URL}/api/leads/flexible-import`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': CRM_API_TOKEN,
        'X-API-Source': 'tryckeget'
      },
      body: JSON.stringify(crmData)
    });

    if (!crmResponse.ok) {
      const errorText = await crmResponse.text();
      console.error('CRM API Error:', errorText);
      
      // Still return success to user even if CRM fails
      return NextResponse.json({
        success: true,
        message: 'Tack för ditt meddelande! Vi återkommer inom 24 timmar.',
        reference: crmData.reference_number,
        crm_synced: false
      });
    }

    const crmResult = await crmResponse.json();

    return NextResponse.json({
      success: true,
      message: 'Tack för ditt meddelande! Vi återkommer inom 24 timmar.',
      reference: crmData.reference_number,
      crm_synced: true,
      crm_id: crmResult.id || crmResult.lead_id
    });

  } catch (error) {
    console.error('API Error:', error);
    
    // Return success to user even if there's an error
    return NextResponse.json({
      success: true,
      message: 'Tack för ditt meddelande! Vi återkommer inom 24 timmar.',
      reference: generateReferenceNumber(),
      crm_synced: false
    });
  }
}

// Handle CORS preflight
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
