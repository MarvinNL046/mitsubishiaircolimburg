import emailjs from '@emailjs/browser';
import { emailConfig } from '../config/email';

export interface EmailData {
  name: string;
  email: string;
  phone: string;
  city?: string;
  message: string;
}

const DEBUG_MODE = false;

const WEBHOOK_URL = "https://services.leadconnectorhq.com/hooks/k90zUH3RgEQLfj7Yc55b/webhook-trigger/54670718-ea44-43a1-a81a-680ab3d5f67f";

const sendViaEmailJS = async (data: EmailData): Promise<boolean> => {
  try {
    if (DEBUG_MODE) {
      console.log('Sending via EmailJS:', data);
    }

    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      phone_number: data.phone,
      message: data.message,
      to_name: 'Mitsubishi Airco Limburg',
      reply_to: data.email,
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

const sendToWebhook = async (data: EmailData): Promise<boolean> => {
  try {
    if (DEBUG_MODE) {
      console.log('Sending to webhook:', data);
    }

    const webhookData = {
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        city: data.city || '',
        message: data.message
      }
    };

    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(webhookData)
    });

    if (DEBUG_MODE) {
      console.log('Webhook response status:', response.status);
      const responseText = await response.text();
      console.log('Webhook response body:', responseText);
    }

    return response.ok;
  } catch (error) {
    if (DEBUG_MODE) {
      console.error('Webhook error:', error);
    }
    return false;
  }
};

export const sendEmail = async (data: EmailData): Promise<void> => {
  const emailJSSuccess = await sendViaEmailJS(data);
  const webhookSuccess = await sendToWebhook(data);
  
  if (DEBUG_MODE) {
    console.log('EmailJS success:', emailJSSuccess);
    console.log('Webhook success:', webhookSuccess);
  }
  
  if (!emailJSSuccess && !webhookSuccess) {
    throw new Error('Failed to send contact form data');
  }
};