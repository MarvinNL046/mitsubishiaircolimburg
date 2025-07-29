import React, { useState, useEffect } from 'react';
import { Phone, Star, CheckCircle, Clock, Shield } from 'lucide-react';
import { contactConfig } from '../../config/contact';
import { sendEmail, trackFormSubmission } from '../../utils/email-webhook';
import toast, { Toaster } from 'react-hot-toast';

const rotatingHeadlines = [
  "Professionele Airco Installatie in Limburg",
  "Uw Specialist in Klimaatbeheersing",
  "Airco Service voor Heel Zuid-Limburg",
  "Betrouwbare Airco Onderhoud & Reparatie"
];

export function HeroNew() {
  const [currentHeadlineIndex, setCurrentHeadlineIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const headline = rotatingHeadlines[currentHeadlineIndex];
    
    if (isTyping) {
      let charIndex = 0;
      const typingInterval = setInterval(() => {
        if (charIndex <= headline.length) {
          setDisplayText(headline.slice(0, charIndex));
          charIndex++;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
          setTimeout(() => {
            setIsTyping(true);
            setCurrentHeadlineIndex((prev) => (prev + 1) % rotatingHeadlines.length);
          }, 3000);
        }
      }, 50);

      return () => clearInterval(typingInterval);
    }
  }, [currentHeadlineIndex, isTyping]);

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
        message: formData.message || 'Geen aanvullende informatie',
        source: 'Hero Form'
      });

      setSubmitStatus('success');
      toast.success('Bedankt! We nemen binnen 24 uur contact met u op.');
      trackFormSubmission('hero_form', true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({ name: '', phone: '', email: '', service: '', message: '' });
        setSubmitStatus('idle');
      }, 3000);
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      toast.error('Er is iets misgegaan. Probeer het opnieuw of bel ons direct.');
      trackFormSubmission('hero_form', false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Toaster position="top-right" />
      <section className="relative min-h-[90vh] flex items-center overflow-hidden -mt-20">
        {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900" />
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-white">
            {/* AANBIEDING Ribbon */}
            <div className="inline-block mb-6">
              <div className="bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold animate-pulse">
                🏷️ AANBIEDING - Gratis installatie check t.w.v. €149,-
              </div>
            </div>

            {/* Typewriter Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 min-h-[3em] lg:min-h-[2em]">
              {displayText}
              <span className="animate-pulse">|</span>
            </h1>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="text-sm font-medium">
                  {contactConfig.reviews.rating}/5 ({contactConfig.reviews.count} reviews)
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Clock className="h-5 w-5" />
                <span className="text-sm font-medium">Binnen 24u reactie</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Shield className="h-5 w-5" />
                <span className="text-sm font-medium">5 jaar garantie</span>
              </div>
            </div>

            {/* USPs */}
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Gecertificeerde monteurs voor alle merken airco's</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Vanaf €11/maand voor compleet onderhoud</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Werkzaam in heel Limburg - van Maastricht tot Roermond</span>
              </li>
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${contactConfig.phoneClean}`}
                className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-xl"
              >
                <Phone className="h-5 w-5" />
                Bel {contactConfig.phone}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-xl"
              >
                Gratis Offerte Aanvragen
              </a>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-2">Direct een offerte?</h2>
              <p className="text-white/80 mb-6">Vul het formulier in voor een vrijblijvende offerte</p>
              
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Uw naam"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-white/90 backdrop-blur-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Telefoonnummer"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-white/90 backdrop-blur-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>
                <input
                  type="email"
                  placeholder="E-mailadres"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-white/90 backdrop-blur-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-white/90 backdrop-blur-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                >
                  <option value="">Selecteer service</option>
                  <option value="installatie">Nieuwe airco installatie</option>
                  <option value="onderhoud">Onderhoud bestaande airco</option>
                  <option value="reparatie">Reparatie / Storing</option>
                  <option value="advies">Vrijblijvend advies</option>
                </select>
                <textarea
                  placeholder="Aanvullende informatie (optioneel)"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-white/90 backdrop-blur-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button
                  type="submit"
                  disabled={isSubmitting || submitStatus === 'success'}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Versturen...' : submitStatus === 'success' ? '✓ Verstuurd!' : 'Verstuur Aanvraag →'}
                </button>
              </form>

              <p className="text-white/60 text-sm mt-4 text-center">
                ✓ Binnen 24 uur reactie • ✓ Geen verplichtingen • ✓ Gratis advies
              </p>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}