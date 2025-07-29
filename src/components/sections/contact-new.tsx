import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { contactConfig } from '../../config/contact';
import { sendEmail, trackFormSubmission } from '../../utils/email-webhook';
import toast, { Toaster } from 'react-hot-toast';

export function ContactNew() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    location: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Basic validation
    if (!formData.name || !formData.email || !formData.service) {
      toast.error('Vul alle verplichte velden in.');
      setIsSubmitting(false);
      return;
    }

    try {
      await sendEmail({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        city: formData.location,
        message: formData.message || 'Geen aanvullende informatie',
        source: 'Contact New Form'
      });

      setSubmitStatus('success');
      toast.success('Bedankt! We nemen binnen 24 uur contact met u op.');
      trackFormSubmission('contact_new', true);
      
      setTimeout(() => {
        setFormData({ name: '', email: '', phone: '', service: '', location: '', message: '' });
        setSubmitStatus('idle');
      }, 3000);
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      toast.error('Er is iets misgegaan. Probeer het opnieuw of bel ons direct.');
      trackFormSubmission('contact_new', false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Toaster position="top-right" />
      <section id="contact" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Vraag Een Gratis Offerte Aan
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Vul het formulier in of neem direct contact op. 
            Wij reageren binnen 24 uur op uw aanvraag.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Direct Contact
              </h3>
              
              <div className="space-y-6">
                <a 
                  href={`tel:${contactConfig.phoneClean}`}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                    <Phone className="h-6 w-6 text-orange-600 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Telefoon</p>
                    <p className="text-gray-600 group-hover:text-orange-500">{contactConfig.phone}</p>
                  </div>
                </a>

                <a 
                  href={`https://wa.me/${contactConfig.whatsappClean}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-500 transition-colors">
                    <MessageCircle className="h-6 w-6 text-green-600 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">WhatsApp</p>
                    <p className="text-gray-600 group-hover:text-green-500">Chat met ons</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">E-mail</p>
                    <p className="text-gray-600">{contactConfig.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Werkgebied</p>
                    <p className="text-gray-600">Heel Limburg</p>
                    <p className="text-sm text-gray-500">Maastricht, Sittard, Heerlen, Roermond</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Openingstijden</p>
                    <p className="text-gray-600">Ma-Do: 09:00 - 17:00</p>
                    <p className="text-gray-600">Vr: 09:00 - 16:00</p>
                    <p className="text-gray-600">Za-Zo: Gesloten</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-orange-50 rounded-lg">
                <p className="text-sm font-semibold text-orange-900">
                  💡 Tip: Voor snelste reactie, bel direct!
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Naam *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefoonnummer *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-mailadres *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Type *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      required
                    >
                      <option value="">Selecteer service</option>
                      <option value="installatie">Nieuwe airco installatie</option>
                      <option value="onderhoud">Onderhoud bestaande airco</option>
                      <option value="reparatie">Reparatie / Storing</option>
                      <option value="advies">Vrijblijvend advies</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Locatie
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      placeholder="Bijv. Maastricht"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Aanvullende informatie
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    placeholder="Vertel ons meer over uw project..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting || submitStatus === 'success'}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-lg font-semibold text-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Versturen...' : submitStatus === 'success' ? '✓ Verstuurd!' : 'Verstuur Aanvraag'}
                  </button>
                  
                  {submitStatus === 'success' && (
                    <p className="text-green-600 text-center mt-4">
                      Bedankt voor uw aanvraag! We nemen binnen 24 uur contact met u op.
                    </p>
                  )}
                  
                  {submitStatus === 'error' && (
                    <p className="text-red-600 text-center mt-4">
                      Er ging iets mis. Probeer het opnieuw of bel ons direct.
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}