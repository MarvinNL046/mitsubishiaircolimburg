import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init("sjJ8kK6U9wFjY0zX9");

export const emailConfig = {
  serviceId: "service_1rruujp",
  templateId: "template_rkcpzhg",
  publicKey: "sjJ8kK6U9wFjY0zX9"
} as const;
