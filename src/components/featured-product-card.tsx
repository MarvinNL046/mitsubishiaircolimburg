import { ArrowRight, Check } from "lucide-react";
import { ProductImage } from "@/config/images";

interface FeaturedProductCardProps {
  product: ProductImage;
}

export function FeaturedProductCard({ product }: FeaturedProductCardProps) {
  const features = [
    "Strak en modern design",
    "Fluisterstil systeem (19dB)",
    "A+++ energielabel",
    "Ingebouwde wifi-module",
    "3D luchtstroomregeling",
    "Flash Streamer luchtzuivering"
  ];

  return (
    <div className="col-span-full lg:col-span-2 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="relative aspect-[4/3] lg:aspect-auto">
          <img
            src={product.src}
            alt={product.alt}
            className="absolute inset-0 w-full h-full object-cover"
          />
          {product.highlight && (
            <div className="absolute top-4 right-4 z-10 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
              {product.highlight}
            </div>
          )}
        </div>
        <div className="p-6 lg:p-8 flex flex-col justify-center">
          <h3 className="text-2xl font-semibold mb-2">{product.title}</h3>
          <p className="text-gray-600 mb-4">{product.description}</p>
          {product.price && (
            <p className="text-primary text-xl font-semibold mb-6">{product.price}</p>
          )}
          
          <div className="space-y-3 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-gray-600">{feature}</span>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors"
          >
            Vraag een offerte aan
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}