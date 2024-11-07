import { Leaf, Snowflake, Euro, ThermometerSun } from "lucide-react";

const benefits = [
  {
    title: "Industriële Kwaliteit",
    description: "Profiteer van Mitsubishi Heavy Industries' bewezen betrouwbaarheid",
    icon: Leaf,
  },
  {
    title: "Jet Air Technology",
    description: "Krachtige luchtstroom voor optimale temperatuurverdeling in elke ruimte",
    icon: ThermometerSun,
  },
  {
    title: "Voordelig in Gebruik",
    description: "Bespaar op energiekosten met onze energiezuinige systemen",
    icon: Euro,
  },
  {
    title: "Comfort Garantie",
    description: "Geniet van perfecte klimaatbeheersing in elk seizoen",
    icon: Snowflake,
  },
];

export function Benefits() {
  return (
    <section className="py-24 bg-sky-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Waarom Kiezen voor Onze Mitsubishi Heavy Industries Airconditioners?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <benefit.icon className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}