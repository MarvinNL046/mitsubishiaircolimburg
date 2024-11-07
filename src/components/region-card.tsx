import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

interface City {
  name: string;
  description: string;
}

interface Region {
  name: string;
  description: string;
  cities: City[];
}

interface RegionCardProps {
  region: Region;
}

export function RegionCard({ region }: RegionCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{region.name}</h2>
        <p className="text-gray-600 mb-6">{region.description}</p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {region.cities.map((city) => (
            <div 
              key={city.name}
              className="bg-gray-50 rounded-lg p-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="h-4 w-4 text-primary" />
                <h3 className="font-semibold">{city.name}</h3>
              </div>
              <p className="text-sm text-gray-600">{city.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <Link
            to="/#contact"
            className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
          >
            Vraag een offerte aan in {region.name}
            <MapPin className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}