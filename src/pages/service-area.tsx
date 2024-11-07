import { Footer } from "@/components/sections/footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { regions } from "@/config/regions";
import { RegionCard } from "@/components/region-card";

export default function ServiceAreaPage() {
  return (
    <>
      <main className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-12">
          <Link 
            to="/" 
            className="inline-flex items-center text-primary hover:text-primary-dark mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Terug naar home
          </Link>

          <h1 className="text-4xl font-bold mb-8">Ons Werkgebied in Limburg</h1>
          
          <p className="text-lg text-gray-600 mb-12">
            Stay Cool Airco is actief in heel Limburg. We installeren en onderhouden airconditioners 
            in alle onderstaande regio's en omliggende gebieden.
          </p>

          <div className="grid gap-8">
            {regions.map((region) => (
              <RegionCard key={region.name} region={region} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}