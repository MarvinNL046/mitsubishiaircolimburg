import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { contactConfig } from '../config/contact';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#services', label: 'Diensten' },
    { href: '#products', label: 'Producten' },
    { href: '#contact', label: 'Contact' },
    { href: '/werkgebied', label: 'Werkgebied' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/" className={`text-2xl font-bold transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              StayCool<span className="text-orange-500">Airco</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`font-medium transition-colors hover:text-orange-500 ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              
              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/${contactConfig.whatsappClean}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                  isScrolled 
                    ? 'bg-green-500 hover:bg-green-600 text-white' 
                    : 'bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm'
                }`}
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
              
              {/* Phone CTA */}
              <a
                href={`tel:${contactConfig.phoneClean}`}
                className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                <Phone className="h-5 w-5" />
                {contactConfig.phone}
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96' : 'max-h-0'
        }`}>
          <div className="bg-white shadow-lg">
            <div className="container mx-auto px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block py-3 text-gray-700 hover:text-orange-500 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              
              <div className="pt-3 space-y-3 border-t">
                <a
                  href={`https://wa.me/${contactConfig.whatsappClean}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-medium"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </a>
                <a
                  href={`tel:${contactConfig.phoneClean}`}
                  className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold"
                >
                  <Phone className="h-5 w-5" />
                  Bel {contactConfig.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-20" />
    </>
  );
}