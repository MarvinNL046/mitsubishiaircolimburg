import { FileCheck, Users, Clock, Shield } from 'lucide-react';

const benefits = [
  {
    icon: FileCheck,
    title: "Gratis Offerte",
    description: "Vrijblijvende offerte binnen 24 uur. Geen verborgen kosten, altijd transparant."
  },
  {
    icon: Users,
    title: "Gecertificeerde Monteurs",
    description: "F-gassen gecertificeerd en volledig verzekerd. Experts in alle merken airco's."
  },
  {
    icon: Clock,
    title: "Snelle Service",
    description: "Installatie binnen 1 week. Bij storing dezelfde dag nog contact."
  },
  {
    icon: Shield,
    title: "5 Jaar Garantie",
    description: "Uitgebreide garantie op installatie en materialen. Uw zekerheid is onze prioriteit."
  }
];

export function WhyUs() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Waarom Kiezen voor StayCool Airco?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Als specialist in airconditioning in Limburg staan wij garant voor kwaliteit, 
            betrouwbaarheid en uitstekende service.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-2xl mb-4 group-hover:bg-blue-600 transition-colors">
                <benefit.icon className="h-10 w-10 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-xl"
          >
            Vraag Nu Uw Gratis Offerte Aan
          </a>
          <p className="mt-4 text-sm text-gray-600">
            ⚡ Gemiddelde reactietijd: 2 uur tijdens kantooruren
          </p>
        </div>
      </div>
    </section>
  );
}