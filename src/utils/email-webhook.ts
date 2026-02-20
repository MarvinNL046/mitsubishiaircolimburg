import emailjs from '@emailjs/browser';
import { emailConfig } from '../config/email';

// LeadFlow CRM configuration
const LEADFLOW_URL = "https://wetryleadflow.com/api/webhooks/leads";
const LEADFLOW_API_KEY = "lf_lRyHo1ENukt9VsG9gYT8EKeDA_nKuoQ1";

// Debug mode (set to false in production)
const DEBUG_MODE = false;

// EmailJS Configuration with fallback to existing config
const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || emailConfig.serviceId,
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || emailConfig.templateId,
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || emailConfig.publicKey
};

export interface EmailData {
  name: string;
  email: string;
  phone?: string;
  city?: string;
  message: string;
  service?: string;
  location?: string;
  source?: string;
}

// Send via EmailJS
const sendViaEmailJS = async (data: EmailData): Promise<boolean> => {
  try {
    if (!EMAILJS_CONFIG.SERVICE_ID || !EMAILJS_CONFIG.TEMPLATE_ID) {
      console.warn('EmailJS not configured');
      return false;
    }

    if (DEBUG_MODE) {
      console.log('Sending via EmailJS:', data);
    }

    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      phone_number: data.phone || '',
      message: data.message,
      to_name: 'StayCool Airco Limburg',
      reply_to: data.email,
      service: data.service || '',
      location: data.location || data.city || '',
      source: data.source || 'website'
    };

    const result = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY
    );

    if (DEBUG_MODE) {
      console.log('EmailJS result:', result.status, result.text);
    }

    if (result.status === 200) {
      if (DEBUG_MODE) console.log('EmailJS submission successful');
      return true;
    } else {
      console.warn('EmailJS submission failed');
      return false;
    }
  } catch (error) {
    console.error('EmailJS error:', error);
    return false;
  }
};

// Send data to LeadFlow CRM
const sendToLeadflow = async (data: EmailData): Promise<boolean> => {
  try {
    const nameParts = (data.name || '').trim().split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    const leadflowData = {
      firstName,
      lastName,
      email: data.email,
      phone: data.phone || '',
      message: data.message,
      source: 'website-contact',
      customFields: {
        city: data.location || data.city || '',
        woonplaats: data.location || data.city || ''
      }
    };

    if (DEBUG_MODE) {
      console.log('Sending data to Leadflow CRM:', leadflowData);
    }

    const response = await fetch(LEADFLOW_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": LEADFLOW_API_KEY
      },
      body: JSON.stringify(leadflowData)
    });

    if (!response.ok) {
      const errorText = await response.text();
      if (DEBUG_MODE) {
        console.error(`Leadflow error (${response.status}):`, errorText);
      }
      return false;
    }

    if (DEBUG_MODE) {
      console.log('Leadflow submission successful');
    }
    return true;
  } catch (error) {
    if (DEBUG_MODE) {
      console.error('Leadflow submission failed:', error);
    }
    return false;
  }
};

// Main submission function with dual system
export const sendEmail = async (data: EmailData): Promise<void> => {
  if (DEBUG_MODE) {
    console.log('Starting dual submission:', data);
  }

  // Execute both submissions in parallel for maximum reliability
  const [emailJSSuccess, leadflowSuccess] = await Promise.all([
    sendViaEmailJS(data),
    sendToLeadflow(data)
  ]);

  if (DEBUG_MODE) {
    console.log('Results - EmailJS:', emailJSSuccess, 'Leadflow:', leadflowSuccess);
  }

  // Success if either method succeeds
  if (emailJSSuccess || leadflowSuccess) {
    const methods = [];
    if (emailJSSuccess) methods.push('EmailJS');
    if (leadflowSuccess) methods.push('Leadflow');

    if (DEBUG_MODE) {
      console.log(`Form submitted successfully via: ${methods.join(' + ')}`);
    }
    return;
  }

  // Both methods failed
  throw new Error('Failed to send contact form data through any available method');
};

// Analytics tracking helpers
export const trackFormSubmission = (formType: string, success: boolean) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'form_submission', {
      form_type: formType,
      success: success,
      send_to: import.meta.env.VITE_GA_MEASUREMENT_ID
    });
  }
};

export const trackPixelFormSubmission = (formType: string, success: boolean) => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'Lead', {
      content_name: formType,
      status: success ? 'completed' : 'failed'
    });
  }
};
