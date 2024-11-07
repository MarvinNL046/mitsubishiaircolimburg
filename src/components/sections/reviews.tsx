import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Mark de Vries",
    location: "Maastricht",
    rating: 5,
    text: "Zeer professionele installatie van onze Mitsubishi SRK-ZSX. Het team werkte netjes en efficiënt. De airco werkt perfect en is inderdaad zo stil als beloofd.",
    product: "Mitsubishi SRK-ZSX"
  },
  {
    name: "Lisa Janssen",
    location: "Heerlen",
    rating: 5,
    text: "Uitstekend advies gekregen over de juiste capaciteit voor onze woonkamer. De installatie was binnen een dag geregeld en de airco bevalt uitstekend.",
    product: "Mitsubishi SRK-ZS"
  },
  {
    name: "Peter Bakker",
    location: "Roermond",
    rating: 5,
    text: "Al jaren een tevreden klant. Het onderhoud wordt altijd perfect uitgevoerd en bij vragen staat het team direct klaar. Echte vakmensen!",
    product: "Mitsubishi SRK-ZR"
  }
];

export function Reviews() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary-light/5 to-primary/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Wat onze klanten zeggen
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 relative"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/10" />
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-primary fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{review.text}</p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="font-semibold">{review.name}</p>
                <p className="text-sm text-gray-500">
                  {review.location} · {review.product}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
          >
            Ook een review achterlaten
          </a>
        </div>
      </div>
    </section>
  );
}