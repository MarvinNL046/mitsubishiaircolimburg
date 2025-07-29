import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { sendEmail, trackFormSubmission, trackPixelFormSubmission, EmailData } from '../utils/email-webhook';

interface WebhookContactFormProps {
  title?: string;
  subtitle?: string;
  showCityField?: boolean;
  showServiceField?: boolean;
  redirectUrl?: string;
  formType?: string;
  className?: string;
}

export default function WebhookContactForm({ 
  title = "Contact opnemen",
  subtitle = "Vul het formulier in en wij nemen binnen 24 uur contact met u op.",
  showCityField = true,
  showServiceField = false,
  redirectUrl = "/bedankt",
  formType = "contact_form",
  className = ""
}: WebhookContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isSubmitting) return;
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Vul alle verplichte velden in.');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Vul een geldig e-mailadres in.');
      return;
    }

    setIsSubmitting(true);

    try {
      const emailData: EmailData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        city: showCityField ? formData.city : '',
        service: showServiceField ? formData.service : '',
        message: formData.message,
        source: `website_${formType}`
      };

      await sendEmail(emailData);
      
      // Success
      toast.success('Bedankt! We nemen binnen 24 uur contact met u op.');
      
      // Track success
      trackFormSubmission(formType, true);
      trackPixelFormSubmission(formType, true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        city: '',
        service: '',
        message: ''
      });

      // Redirect after delay
      setTimeout(() => {
        if (redirectUrl && redirectUrl !== "#") {
          window.location.href = redirectUrl;
        }
      }, 2000);

    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Er is iets misgegaan. Probeer het later opnieuw of neem telefonisch contact op.');
      
      // Track failure
      trackFormSubmission(formType, false);
      trackPixelFormSubmission(formType, false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Toaster position="top-right" />
      <div className={`bg-white p-6 rounded-lg shadow-lg ${className}`}>
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
          <p className="text-gray-600">{subtitle}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Naam *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              E-mailadres *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>

          {/* Phone Field */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Telefoonnummer
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>

          {/* City Field (Conditional) */}
          {showCityField && (
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                Woonplaats
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
          )}

          {/* Service Field (Conditional) */}
          {showServiceField && (
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                Service Type
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              >
                <option value="">Selecteer service</option>
                <option value="installatie">Nieuwe airco installatie</option>
                <option value="onderhoud">Onderhoud bestaande airco</option>
                <option value="reparatie">Reparatie / Storing</option>
                <option value="advies">Vrijblijvend advies</option>
              </select>
            </div>
          )}

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Bericht *
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="Vertel ons meer over uw project..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-4 rounded-md font-medium transition-colors ${
              isSubmitting
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-orange-500 hover:bg-orange-600 text-white'
            }`}
          >
            {isSubmitting ? 'Verzenden...' : 'Versturen'}
          </button>

          {/* Privacy Notice */}
          <p className="text-xs text-gray-500 mt-4">
            Door dit formulier te versturen gaat u akkoord met ons privacybeleid. 
            Uw gegevens worden vertrouwelijk behandeld.
          </p>
        </form>
      </div>
    </>
  );
}