import { useState, useEffect } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { contactConfig } from '../config/contact';

export function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA when scrolled past the hero section
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Only render on mobile devices
  if (typeof window !== 'undefined' && window.innerWidth > 768) {
    return null;
  }

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-white border-t shadow-2xl">
        <div className="grid grid-cols-2 divide-x">
          <a
            href={`tel:${contactConfig.phoneClean}`}
            className="flex items-center justify-center gap-2 py-4 bg-orange-500 text-white font-semibold active:bg-orange-600"
          >
            <Phone className="h-5 w-5" />
            <span>Bel Direct</span>
          </a>
          <a
            href={`https://wa.me/${contactConfig.whatsappClean}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-4 bg-green-500 text-white font-semibold active:bg-green-600"
          >
            <MessageCircle className="h-5 w-5" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}