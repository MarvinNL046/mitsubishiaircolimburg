
const brands = [
  {
    name: "Daikin",
    description: "Comfora, Emura, Stylish, Perfera, Ururu Sarara",
    className: "text-4xl font-bold text-gray-400"
  },
  {
    name: "LG",
    description: "ArtCool, DualCool Premium",
    className: "text-4xl font-bold text-gray-400"
  },
  {
    name: "Samsung",
    description: "WindFree series, Luzon",
    className: "text-4xl font-bold text-gray-400"
  },
  {
    name: "Mitsubishi",
    description: "Heavy Industries",
    className: "text-3xl font-bold text-gray-400"
  },
  {
    name: "Toshiba",
    description: "Haori, Daiseikai, Kazumi, Seiya",
    className: "text-4xl font-bold text-gray-400"
  },
  {
    name: "Tosot",
    description: "Pular, Clivia, Cosmo",
    className: "text-4xl font-bold text-gray-400"
  }
];

export function BrandLogos() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Specialist in Alle Topmerken
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Wij installeren en onderhouden alle grote merken airconditioners. 
            Altijd het beste advies voor uw situatie.
          </p>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className={`${brand.className} group-hover:text-blue-600 transition-colors duration-300 mb-2 grayscale group-hover:grayscale-0`}>
                {brand.name}
              </div>
              <p className="text-xs text-gray-500 group-hover:text-gray-700 transition-colors">
                {brand.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Ook specialist in mobiele airco's van LG en Tosot • Airco covers in wit en antraciet
          </p>
          <a
            href="#contact"
            className="inline-flex items-center text-orange-500 hover:text-orange-600 font-semibold"
          >
            Bekijk alle modellen en prijzen
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}