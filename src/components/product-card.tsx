import { ArrowRight } from "lucide-react";
import { ProductImage } from "@/config/images";

interface ProductCardProps {
  product: ProductImage;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
      {product.highlight && (
        <div className="absolute top-4 right-4 z-10 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
          {product.highlight}
        </div>
      )}
      <div className="aspect-[4/3] relative">
        <img
          src={product.src}
          alt={product.alt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
        <p className="text-gray-600 mb-2">{product.description}</p>
        {product.price && (
          <p className="text-primary font-semibold mb-4">{product.price}</p>
        )}
        <a
          href="#contact"
          className="inline-flex items-center text-primary hover:text-primary-dark"
        >
          Offerte aanvragen
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </div>
  );
}