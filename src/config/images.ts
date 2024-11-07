export const images = {
  hero: {
    main: "/images/ZS-wandunit_11zon.webp",
    alt: "Mitsubishi Heavy Industries SRK-ZS airconditioner in modern interieur"
  },
  products: {
    premium: {
      zsx: "/images/ZS-wandunit_11zon.webp",
      alt: "Mitsubishi SRK-ZS airconditioner"
    },
    advanced: {
      zs: "/images/ZS-wandunit-metallic-zwart_11zon.webp",
      alt: "Mitsubishi SRK-ZS Metallic Black airconditioner"
    },
    power: {
      zr: "/images/ZS-wandunit-wit-zwart_11zon.webp",
      alt: "Mitsubishi SRK-ZS White/Black airconditioner"
    }
  }
} as const;

export type ProductImage = {
  src: string;
  alt: string;
  title: string;
  description: string;
  price?: string;
  highlight?: string;
  features?: string[];
};

export const productImages: ProductImage[] = [
  {
    src: "/images/ZS-wandunit_11zon.webp",
    alt: "Mitsubishi SRK-ZS",
    title: "SRK-ZS Series",
    description: "Fluisterstille airco met geavanceerde sensortechnologie",
    price: "Vanaf €2.299,-",
    highlight: "Meest geavanceerde model",
    features: [
      "Detectie van menselijke aanwezigheid en activiteit",
      "Energie besparende roterende compressor",
      "Unieke, afgeronde hoeken",
      "Fluisterstil systeem (19dB)",
      "Intelligente klimaatregeling"
    ]
  },
  {
    src: "/images/ZS-wandunit-metallic-zwart_11zon.webp",
    alt: "Mitsubishi SRK-ZS Metallic Black",
    title: "SRK-ZS Metallic Black",
    description: "Voldoet aan de hoogste technische kwaliteitsnormen",
    price: "Vanaf €1.999,-",
    features: [
      "Hoog seizoensrendement",
      "Fluisterstil",
      "Op afstand bedienbaar",
      "Superieure luchtverdeling",
      "Energielabel A+++"
    ]
  },
  {
    src: "/images/ZS-wandunit-wit-zwart_11zon.webp",
    alt: "Mitsubishi SRK-ZS White/Black",
    title: "SRK-ZS White/Black",
    description: "Speciaal ontwikkeld voor grotere ruimten",
    price: "Vanaf €1.799,-",
    highlight: "Beste voor grote ruimtes",
    features: [
      "Krachtige luchtstroom dankzij de Jet Air technologie",
      "Fluisterstil",
      "Op afstand te bedienen",
      "Optimale temperatuurverdeling",
      "Perfect voor grote ruimtes"
    ]
  }
];