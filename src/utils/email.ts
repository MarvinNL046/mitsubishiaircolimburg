import emailjs from '@emailjs/browser';
import { emailConfig } from '../config/email';

// LeadFlow CRM configuration
const LEADFLOW_URL = "https://wetryleadflow.com/api/webhooks/leads";
const LEADFLOW_API_KEY = "lf_lRyHo1ENukt9VsG9gYT8EKeDA_nKuoQ1";

// Debug mode (set to false in production)
const DEBUG_MODE = false;

// EmailJS Configuration references available in emailConfig

export interface EmailData {
  name?: string;
  email?: string;
  phone?: string;
  city?: string;
  message?: string;
  from_name?: string;
  from_email?: string;
  service?: string;
  location?: string;
  to_name?: string;
  source?: string;
}

const sendViaEmailJS = async (data: EmailData): Promise<boolean> => {
  try {
    if (DEBUG_MODE) {
      console.log('Sending via EmailJS:', data);
    }

    const templateParams = {
      from_name: data.from_name || data.name || '',
      from_email: data.from_email || data.email || '',
      phone_number: data.phone || '',
      message: data.message || '',
      to_name: data.to_name || 'StayCool Airco Limburg',
      reply_to: data.from_email || data.email || '',
      service: data.service || '',
      location: data.location || data.city || '',
      source: data.source || ''
    };

    const response = await emailjs.send(
      emailConfig.serviceId,
      emailConfig.templateId,
      templateParams,
      emailConfig.publicKey
    );

    if (DEBUG_MODE) {
      console.log('EmailJS response:', response);
    }

    return response.status === 200;
  } catch (error) {
    if (DEBUG_MODE) {
      console.error('EmailJS error:', error);
    }
    return false;
  }
};

// Send data to LeadFlow CRM
const sendToLeadflow = async (data: EmailData): Promise<boolean> => {
  try {
    const nameParts = (data.from_name || data.name || '').trim().split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    const leadflowData = {
      firstName,
      lastName,
      email: data.from_email || data.email || '',
      phone: data.phone || '',
      message: data.message || '',
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

export const sendEmail = async (data: EmailData): Promise<void> => {
  const emailJSSuccess = await sendViaEmailJS(data);
  const leadflowSuccess = await sendToLeadflow(data);

  if (DEBUG_MODE) {
    console.log('EmailJS success:', emailJSSuccess);
    console.log('Leadflow success:', leadflowSuccess);
  }

  if (!emailJSSuccess && !leadflowSuccess) {
    throw new Error('Failed to send contact form data');
  }
};