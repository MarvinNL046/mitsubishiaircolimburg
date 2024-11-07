import { Mail, MapPin, Phone } from "lucide-react";
import { contactConfig } from "@/config/contact";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center justify-center sm:justify-start">
                <Phone className="w-5 h-5 mr-2" />
                <a href={`tel:+31${contactConfig.phoneClean}`} className="hover:text-[rgb(68,200,245)] active:text-[rgb(51,180,225)]">
                  {contactConfig.phone}
                </a>
              </li>
              <li className="flex items-center justify-center sm:justify-start">
                <Mail className="w-5 h-5 mr-2" />
                <a href={`mailto:${contactConfig.email}`} className="hover:text-[rgb(68,200,245)] active:text-[rgb(51,180,225)]">
                  {contactConfig.email}
                </a>
              </li>
              <li className="flex items-center justify-center sm:justify-start">
                <MapPin className="w-5 h-5 mr-2" />
                <span>Limburg, Nederland</span>
              </li>
            </ul>
          </div>
          
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Diensten</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-[rgb(68,200,245)] active:text-[rgb(51,180,225)]">
                  Airco Installatie
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[rgb(68,200,245)] active:text-[rgb(51,180,225)]">
                  Onderhoud
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[rgb(68,200,245)] active:text-[rgb(51,180,225)]">
                  Reparatie
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[rgb(68,200,245)] active:text-[rgb(51,180,225)]">
                  Advies
                </a>
              </li>
            </ul>
          </div>
          
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Werkgebied</h3>
            <ul className="space-y-2">
              <li>
                <a href="/werkgebied/maastricht" className="hover:text-[rgb(68,200,245)] active:text-[rgb(51,180,225)]">
                  Maastricht
                </a>
              </li>
              <li>
                <a href="/werkgebied/heerlen" className="hover:text-[rgb(68,200,245)] active:text-[rgb(51,180,225)]">
                  Heerlen
                </a>
              </li>
              <li>
                <a href="/werkgebied/roermond" className="hover:text-[rgb(68,200,245)] active:text-[rgb(51,180,225)]">
                  Roermond
                </a>
              </li>
              <li>
                <a href="/werkgebied/venlo" className="hover:text-[rgb(68,200,245)] active:text-[rgb(51,180,225)]">
                  Venlo
                </a>
              </li>
              <li>
                <a href="/werkgebied" className="hover:text-[rgb(68,200,245)] active:text-[rgb(51,180,225)]">
                  Heel Limburg
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm sm:text-base">
          <p className="text-gray-400">
            © {new Date().getFullYear()} {contactConfig.companyName}. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
}