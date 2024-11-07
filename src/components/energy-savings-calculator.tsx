import { useState } from "react";
import { LineChart, Leaf, ArrowRight, Info } from "lucide-react";

interface SavingsResult {
  yearlySavings: number;
  co2Reduction: number;
  paybackPeriod: number;
}

export function EnergySavingsCalculator() {
  const [currentSystem, setCurrentSystem] = useState<string>("gas");
  const [yearlyUsage, setYearlyUsage] = useState<number>(0);
  const [result, setResult] = useState<SavingsResult | null>(null);

  const calculateSavings = () => {
    // Actuele energieprijzen 2024
    const prices = {
      gas: 1.50,      // per m³
      electric: 0.40, // per kWh
    };
    
    // Realistische efficiëntie-waarden
    const efficiencies = {
      gas: 0.95,          // 95% efficiëntie voor moderne HR-ketel
      electric: 1.00,     // 100% voor elektrische verwarming
      heatpump: 4.5,      // COP van 4.5 voor Mitsubishi warmtepomp
    };

    let currentCosts = 0;
    let newCosts = 0;
    let co2Reduction = 0;

    if (currentSystem === "gas") {
      // Gas naar kWh conversie (1 m³ gas ≈ 9.77 kWh)
      const kwhEquivalent = yearlyUsage * 9.77;
      
      // Huidige kosten met gas
      currentCosts = yearlyUsage * prices.gas;
      
      // Nieuwe kosten met warmtepomp
      const heatpumpUsage = (kwhEquivalent / efficiencies.gas) / efficiencies.heatpump;
      newCosts = heatpumpUsage * prices.electric;
      
      // CO2 reductie (1.8 kg CO2 per m³ gas)
      co2Reduction = yearlyUsage * 1.8;
    } else {
      // Huidige kosten met elektrische verwarming
      currentCosts = yearlyUsage * prices.electric;
      
      // Nieuwe kosten met warmtepomp
      newCosts = (yearlyUsage / efficiencies.heatpump) * prices.electric;
      
      // CO2 reductie (0.4 kg CO2 per kWh besparing)
      co2Reduction = (yearlyUsage - (yearlyUsage / efficiencies.heatpump)) * 0.4;
    }

    const yearlySavings = Math.max(0, currentCosts - newCosts);
    // Gemiddelde installatiekosten voor een Mitsubishi warmtepomp
    const paybackPeriod = yearlySavings > 0 ? 2399 / yearlySavings : 0;

    setResult({
      yearlySavings: Math.round(yearlySavings),
      co2Reduction: Math.round(co2Reduction),
      paybackPeriod: Math.round(paybackPeriod * 10) / 10
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-6">
        <LineChart className="h-6 w-6 text-primary" />
        <h3 className="text-xl font-semibold">Bereken uw Besparing</h3>
      </div>

      <div className="bg-sky-50 p-4 rounded-lg mb-6">
        <div className="flex gap-2">
          <Info className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
          <p className="text-sm text-gray-600">
            Deze calculator geeft een indicatie van uw mogelijke besparing bij overstap naar een Mitsubishi Electric warmtepomp. 
            Voor een exacte berekening kunt u contact met ons opnemen.
          </p>
        </div>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Huidige verwarmingssysteem
          </label>
          <select
            value={currentSystem}
            onChange={(e) => setCurrentSystem(e.target.value)}
            className="w-full rounded-lg border-gray-300 border px-4 py-2 focus:border-primary focus:ring-primary"
          >
            <option value="gas">HR CV-ketel (gas)</option>
            <option value="electric">Elektrische verwarming</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {currentSystem === "gas" ? (
              <>Jaarlijks gasverbruik (m³) <span className="text-gray-500">- Zie uw jaarafrekening</span></>
            ) : (
              <>Jaarlijks stroomverbruik voor verwarming (kWh) <span className="text-gray-500">- Zie uw jaarafrekening</span></>
            )}
          </label>
          <input
            type="number"
            min="0"
            value={yearlyUsage || ""}
            onChange={(e) => setYearlyUsage(Number(e.target.value))}
            className="w-full rounded-lg border-gray-300 border px-4 py-2 focus:border-primary focus:ring-primary"
            placeholder={currentSystem === "gas" ? "Bijv. 1500" : "Bijv. 4000"}
          />
        </div>

        <button
          onClick={calculateSavings}
          disabled={!yearlyUsage}
          className="w-full bg-primary text-white rounded-lg px-4 py-2 font-medium hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Bereken uw besparing
        </button>

        {result && (
          <div className="mt-6 p-4 bg-green-50 rounded-lg">
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-1">Geschatte jaarlijkse besparing:</h4>
                <p className="text-2xl font-bold text-primary">€{result.yearlySavings},-</p>
                <p className="text-sm text-gray-600 mt-1">
                  Gebaseerd op huidige energieprijzen en gemiddeld gebruik
                </p>
              </div>
              
              <div className="flex items-center gap-2">
                <Leaf className="h-5 w-5 text-green-600" />
                <p className="text-gray-600">
                  CO₂-reductie: {result.co2Reduction} kg per jaar
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="font-medium text-gray-900 mb-2">
                  Geschatte terugverdientijd: {result.paybackPeriod} jaar
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  * Deze berekening is een indicatie. De werkelijke besparing is afhankelijk van verschillende factoren zoals uw stookgedrag en de isolatie van uw woning.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center text-primary hover:text-primary-dark font-medium"
                >
                  Ontvang een persoonlijk advies
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}