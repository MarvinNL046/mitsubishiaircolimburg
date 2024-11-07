import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init("JOVuOJTC7ReYFRkQ_");

export const emailConfig = {
  serviceId: "service_1rruujp",
  templateId: "template_rkcpzhg",
  publicKey: "JOVuOJTC7ReYFRkQ_"
} as const;