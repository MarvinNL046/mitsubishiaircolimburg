import emailjs from '@emailjs/browser';
import { emailConfig } from '../config/email';

// GHL Webhook Configuration
const WEBHOOK_URL = "https://services.leadconnectorhq.com/hooks/k90zUH3RgEQLfj7Yc55b/webhook-trigger/54670718-ea44-43a1-a81a-680ab3d5f67f";

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

// Send to GHL Webhook
const sendToWebhook = async (data: EmailData): Promise<boolean> => {
  try {
    if (DEBUG_MODE) {
      console.log('🔗 Sending to GHL Webhook:', data);
    }

    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        data: {
          name: data.name,
          email: data.email,
          phone: data.phone || '',
          city: data.city || data.location || '',
          message: data.message,
          service: data.service || '',
          source: data.source || 'website'
        }
      })
    });

    if (DEBUG_MODE) {
      console.log('Webhook response:', response.status, response.statusText);
    }

    if (response.ok) {
      if (DEBUG_MODE) console.log('✅ Webhook submission successful');
      return true;
    } else {
      console.warn('❌ Webhook submission failed:', response.status);
      return false;
    }
  } catch (error) {
    console.error('❌ Webhook error:', error);
    return false;
  }
};

// Send via EmailJS (fallback)
const sendViaEmailJS = async (data: EmailData): Promise<boolean> => {
  try {
    if (!EMAILJS_CONFIG.SERVICE_ID || !EMAILJS_CONFIG.TEMPLATE_ID) {
      console.warn('EmailJS not configured');
      return false;
    }

    if (DEBUG_MODE) {
      console.log('📧 Sending via EmailJS:', data);
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
      if (DEBUG_MODE) console.log('✅ EmailJS submission successful');
      return true;
    } else {
      console.warn('❌ EmailJS submission failed');
      return false;
    }
  } catch (error) {
    console.error('❌ EmailJS error:', error);
    return false;
  }
};

// Main submission function with dual system
export const sendEmail = async (data: EmailData): Promise<void> => {
  if (DEBUG_MODE) {
    console.log('📧 Starting dual submission:', data);
  }

  // Execute both submissions in parallel for maximum reliability
  const [webhookSuccess, emailJSSuccess] = await Promise.all([
    sendToWebhook(data),
    sendViaEmailJS(data)
  ]);

  if (DEBUG_MODE) {
    console.log('Results - Webhook:', webhookSuccess, 'EmailJS:', emailJSSuccess);
  }

  // Success if either method succeeds
  if (webhookSuccess || emailJSSuccess) {
    const methods = [];
    if (webhookSuccess) methods.push('GHL Webhook');
    if (emailJSSuccess) methods.push('EmailJS');
    
    if (DEBUG_MODE) {
      console.log(`✅ Form submitted successfully via: ${methods.join(' + ')}`);
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

// Performance tracking
export const trackWebhookPerformance = (success: boolean, responseTime: number) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'webhook_performance', {
      success: success,
      response_time: responseTime,
      timestamp: Date.now()
    });
  }
};