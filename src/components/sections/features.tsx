import { Thermometer, Timer, Wrench, Shield, Wind, ArrowRight } from "lucide-react";
import { productImages } from "@/config/images";
import { ProductCard } from "@/components/product-card";
import { FeaturedProductCard } from "@/components/featured-product-card";
import { CapacityCalculator } from "@/components/capacity-calculator";
import { ProductComparison } from "@/components/product-comparison";
import { EnergySavingsCalculator } from "@/components/energy-savings-calculator";

const features = [
  {
    name: "Jet Air Technology",
    description: "Krachtige luchtstroom voor optimale temperatuurverdeling in grote ruimtes.",
    icon: Wind,
  },
  {
    name: "Snelle installatie",
    description: "Professionele installatie door gecertificeerde monteurs.",
    icon: Timer,
  },
  {
    name: "Expert onderhoud",
    description: "Regelmatig onderhoud voor optimale prestaties en langere levensduur.",
    icon: Wrench,
  },
  {
    name: "Human Sensor",
    description: "Intelligente aanwezigheidsdetectie voor optimaal comfort en energiebesparing.",
    icon: Thermometer,
  },
];

// Haal de ZSX uit de productImages voor featured product
const featuredProduct = productImages[0]; // Mitsubishi SRK-ZSX
const otherProducts = productImages.slice(1); // Alle andere producten

export function Features() {
  return (
    <section id="features" className="bg-gradient-to-br from-primary-light/5 to-primary/5 py-12 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ontdek onze Collectie
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            Japanse technologie voor optimaal comfort
          </p>
        </div>

        {/* Featured Product */}
        <div className="mt-16">
          <FeaturedProductCard product={featuredProduct} />
        </div>

        {/* Other Products Grid */}
        <div className="mt-12">
          <h3 className="text-xl sm:text-2xl font-bold mb-8">Andere modellen</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {otherProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>

        {/* Calculators */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <CapacityCalculator />
          <EnergySavingsCalculator />
        </div>

        {/* Product Comparison */}
        <div className="mt-16">
          <h3 className="text-xl sm:text-2xl font-bold mb-8">Vergelijk modellen</h3>
          <ProductComparison />
        </div>

        {/* Features */}
        <div className="mt-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.name}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.name}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <a
                href="#contact"
                className="inline-flex items-center text-primary hover:text-primary-dark text-sm font-medium"
              >
                Meer info <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 p-4 bg-gradient-to-br from-primary-light/5 to-primary/5 rounded-lg">
            <Shield className="h-5 w-5 text-primary" />
            <p className="text-sm text-gray-700">
              5 jaar garantie op alle systemen
            </p>
          </div>
          <div className="mt-8">
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
            >
              Plan een gratis adviesgesprek
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}