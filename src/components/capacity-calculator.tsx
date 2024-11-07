import { useState } from "react";
import { Calculator, ArrowRight } from "lucide-react";

interface CapacityResult {
  minCapacity: number;
  maxCapacity: number;
  recommendation: string;
}

export function CapacityCalculator() {
  const [area, setArea] = useState<number>(0);
  const [roomType, setRoomType] = useState<string>("living");
  const [result, setResult] = useState<CapacityResult | null>(null);

  const calculateCapacity = () => {
    // Basis berekening: ~100W per m² voor verwarming
    let baseCapacity = area * 100;
    
    // Aanpassingen op basis van kamertype
    const multipliers = {
      living: 1.2,    // Woonkamer heeft extra capaciteit nodig
      bedroom: 0.9,   // Slaapkamer heeft minder nodig
      office: 1,      // Kantoor is standaard
      kitchen: 1.3    // Keuken heeft meer nodig vanwege apparatuur
    };
    
    baseCapacity *= multipliers[roomType as keyof typeof multipliers];
    
    // Converteer naar kW en rond af
    const minKw = Math.round((baseCapacity * 0.8) / 100) / 10;
    const maxKw = Math.round((baseCapacity * 1.2) / 100) / 10;
    
    // Bepaal aanbeveling (hogere capaciteit voor adequate verwarming)
    let recommendation = "";
    if (area <= 25) {
      recommendation = "Daikin Stylish 2.5kW";
    } else if (area <= 35) {
      recommendation = "Daikin Stylish 3.5kW";
    } else if (area <= 50) {
      recommendation = "Daikin Stylish 5.0kW";
    } else {
      recommendation = "Daikin Stylish Multi-split systeem";
    }

    setResult({
      minCapacity: minKw,
      maxCapacity: maxKw,
      recommendation
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-6">
        <Calculator className="h-6 w-6 text-primary" />
        <h3 className="text-xl font-semibold">Capaciteit Calculator</h3>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Oppervlakte van de ruimte (m²)
          </label>
          <input
            type="number"
            min="0"
            value={area || ""}
            onChange={(e) => setArea(Number(e.target.value))}
            className="w-full rounded-lg border-gray-300 border px-4 py-2 focus:border-primary focus:ring-primary"
            placeholder="Bijv. 25"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Type ruimte
          </label>
          <select
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
            className="w-full rounded-lg border-gray-300 border px-4 py-2 focus:border-primary focus:ring-primary"
          >
            <option value="living">Woonkamer</option>
            <option value="bedroom">Slaapkamer</option>
            <option value="office">Kantoor</option>
            <option value="kitchen">Keuken</option>
          </select>
        </div>

        <button
          onClick={calculateCapacity}
          disabled={!area}
          className="w-full bg-primary text-white rounded-lg px-4 py-2 font-medium hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Bereken capaciteit
        </button>

        {result && (
          <div className="mt-6 p-4 bg-sky-50 rounded-lg">
            <h4 className="font-medium mb-2">Aanbevolen capaciteit:</h4>
            <p className="text-gray-600 mb-3">
              {result.minCapacity} - {result.maxCapacity} kW
            </p>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="font-medium text-primary mb-2">Onze aanbeveling:</p>
              <p className="text-gray-700 mb-4">{result.recommendation}</p>
              <p className="text-sm text-gray-500 mb-4">
                * Deze berekening houdt rekening met zowel koeling als verwarming. Voor optimale verwarming adviseren we een iets hogere capaciteit.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center text-primary hover:text-primary-dark font-medium"
              >
                Vraag een offerte aan
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}