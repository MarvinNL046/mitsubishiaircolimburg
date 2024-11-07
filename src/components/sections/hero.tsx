import { Wind } from "lucide-react";
import { images } from "@/config/images";
import { contactConfig } from "@/config/contact";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 py-12 sm:py-24 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <Wind className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              <a 
                href={`tel:+31${contactConfig.phoneClean}`} 
                className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-full text-sm font-semibold hover:bg-primary-dark transition-colors"
              >
                Bel {contactConfig.phone}
              </a>
            </div>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900">
              Industriële Kwaliteit voor uw{" "}
              <span className="text-primary">comfort</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600">
              Specialist in Mitsubishi Heavy Industries airconditioningsystemen in Limburg. Ervaar het verschil met onze hoogwaardige klimaatoplossingen.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="w-full sm:w-auto bg-primary rounded-lg px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark transition-colors"
              >
                Vrijblijvende offerte
              </a>
              <a
                href={`tel:+31${contactConfig.phoneClean}`}
                className="w-full sm:w-auto rounded-lg border-2 border-primary px-6 py-3 text-sm font-semibold text-primary hover:bg-primary hover:text-white transition-colors"
              >
                Bel {contactConfig.phone}
              </a>
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-light/20 to-primary/20 rounded-lg" />
            <img
              src={images.hero.main}
              alt={images.hero.alt}
              className="rounded-lg object-cover w-full h-[300px] sm:h-[400px] lg:h-full shadow-xl relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}