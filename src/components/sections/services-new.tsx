import { Wrench, Shield, Settings, Play } from 'lucide-react';

const services = [
  {
    icon: Settings,
    title: "Airco Installatie",
    description: "Professionele installatie van alle merken airconditioners. Inclusief advies, montage en inbedrijfstelling.",
    features: [
      "Gratis inmeting en advies",
      "Binnen 1 week geïnstalleerd",
      "5 jaar installatiegarantie",
      "Alle topmerken"
    ]
  },
  {
    icon: Shield,
    title: "Airco Onderhoud",
    description: "Regelmatig onderhoud verlengt de levensduur en houdt uw energiekosten laag. Vanaf €11/maand.",
    features: [
      "Jaarlijkse inspectie",
      "Filter reiniging",
      "Koudemiddel controle",
      "24/7 storing hulp"
    ]
  },
  {
    icon: Wrench,
    title: "Airco Reparatie",
    description: "Storing aan uw airco? Onze monteurs staan voor u klaar. Snelle service in heel Limburg.",
    features: [
      "Diagnose binnen 24u",
      "Transparante prijzen",
      "Originele onderdelen",
      "Garantie op reparaties"
    ]
  }
];

export function ServicesNew() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Onze Airco Services in Limburg
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Van installatie tot onderhoud: wij zijn uw specialist voor alle airco diensten.
            Werkzaam in heel Limburg met snelle service en eerlijke prijzen.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-8">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href="#contact"
                  className="inline-flex items-center text-orange-500 hover:text-orange-600 font-semibold group"
                >
                  Meer informatie
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* YouTube Video Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="lg:grid lg:grid-cols-2">
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Zie Hoe Wij Te Werk Gaan
              </h3>
              <p className="text-gray-600 mb-6">
                Bekijk onze video en ontdek waarom klanten in heel Limburg kiezen voor StayCool Airco. 
                Van de eerste inspectie tot de oplevering: professionaliteit staat voorop.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <span className="text-blue-600 font-bold">01</span>
                  <span className="text-gray-700">Gratis inspectie en advies op maat</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-600 font-bold">02</span>
                  <span className="text-gray-700">Professionele installatie door gecertificeerde monteurs</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-600 font-bold">03</span>
                  <span className="text-gray-700">Uitleg en demonstratie van uw nieuwe systeem</span>
                </li>
              </ul>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all w-fit"
              >
                Plan uw gratis inspectie
              </a>
            </div>
            
            <div className="relative bg-gray-900 aspect-video lg:aspect-auto">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/9m-jkGgfLog"
                title="StayCool Airco Services"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Play className="h-8 w-8 text-white ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}