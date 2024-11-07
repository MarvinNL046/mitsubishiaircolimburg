import { Footer } from "@/components/sections/footer";
import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { contactConfig } from "@/config/contact";

export default function CityPage() {
  const { city } = useParams();
  const cityName = city
    ?.split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <>
      <main className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-12">
          <Link 
            to="/werkgebied" 
            className="inline-flex items-center text-primary hover:text-primary-dark mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Terug naar werkgebied overzicht
          </Link>

          <h1 className="text-4xl font-bold mb-8">
            Airconditioning Service in {cityName}
          </h1>
          
          <div className="prose max-w-none">
            <p className="text-lg text-gray-600">
              {contactConfig.companyName} is uw betrouwbare partner voor airconditioning 
              installatie en onderhoud in {cityName}. Als officiële partner 
              zorgen wij voor een perfect binnenklimaat in uw woning of bedrijfspand.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Onze diensten in {cityName}
            </h2>
            
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Professionele installatie van airconditioners</li>
              <li>Regelmatig onderhoud en service</li>
              <li>24/7 storingsdienst</li>
              <li>Gratis advies en offerte</li>
              <li>5 jaar garantie op installatie</li>
            </ul>

            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold mb-4">
                Direct contact opnemen?
              </h3>
              <p className="mb-4">
                Bel ons op{" "}
                <a 
                  href={`tel:+31${contactConfig.phoneClean}`}
                  className="text-primary hover:text-primary-dark"
                >
                  {contactConfig.phone}
                </a>{" "}
                of stuur een e-mail naar{" "}
                <a 
                  href={`mailto:${contactConfig.email}`}
                  className="text-primary hover:text-primary-dark"
                >
                  {contactConfig.email}
                </a>
              </p>
              <Link
                to="/#contact"
                className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors"
              >
                Vraag een offerte aan
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}