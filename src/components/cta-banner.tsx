import { Phone, ArrowRight, Clock, Shield } from 'lucide-react';
import { contactConfig } from '../config/contact';

interface CTABannerProps {
  variant?: 'primary' | 'secondary';
  title?: string;
  subtitle?: string;
}

export function CTABanner({ 
  variant = 'primary',
  title = "Klaar voor een Koel Zomer?",
  subtitle = "Profiteer nu van onze lente-aanbieding!"
}: CTABannerProps) {
  if (variant === 'primary') {
    return (
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-white text-center lg:text-left">
              <h2 className="text-3xl lg:text-4xl font-bold mb-2">{title}</h2>
              <p className="text-xl opacity-90">{subtitle}</p>
              <div className="flex flex-wrap gap-4 mt-4 justify-center lg:justify-start">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>Binnen 24u reactie</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  <span>5 jaar garantie</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${contactConfig.phoneClean}`}
                className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                <Phone className="h-5 w-5" />
                Bel Direct
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-orange-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-800 transition-all"
              >
                Gratis Offerte
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Secondary variant
  return (
    <section className="bg-gray-900 py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            {title || "Vraag Nu Uw Gratis Offerte Aan"}
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {subtitle || "Onze experts staan klaar om u te helpen met de perfecte airco oplossing voor uw situatie."}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105"
            >
              Start Uw Aanvraag
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href={`tel:${contactConfig.phoneClean}`}
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-gray-900 transition-all"
            >
              <Phone className="h-5 w-5" />
              {contactConfig.phone}
            </a>
          </div>

          <p className="text-gray-400 mt-6">
            ⭐ {contactConfig.reviews.rating}/5 op basis van {contactConfig.reviews.count} reviews
          </p>
        </div>
      </div>
    </section>
  );
}