import { useState } from 'react';
import { Filter, Info, ArrowRight } from 'lucide-react';

const products = {
  daikin: [
    {
      name: 'Daikin Comfora',
      image: '/images/ZS-wandunit_11zon.webp',
      description: 'Fluisterstille werking met uitstekende energie-efficiëntie',
      features: ['19dB fluisterstil', 'A+++ energielabel', 'WiFi besturing'],
      price: 'Vanaf €1.899,-'
    },
    {
      name: 'Daikin Emura',
      image: '/images/ZS-wandunit-metallic-zwart_11zon.webp',
      description: 'Design wandunit met premium afwerking',
      features: ['Stijlvol design', 'Flash Streamer', '3D luchtstroom'],
      price: 'Vanaf €2.499,-'
    },
    {
      name: 'Daikin Stylish',
      image: '/images/ZS-wandunit-wit-zwart_11zon.webp',
      description: 'Compact en krachtig met moderne uitstraling',
      features: ['Compact design', 'Coanda effect', 'Intelligente sensor'],
      price: 'Vanaf €2.299,-'
    },
    {
      name: 'Daikin Perfera',
      description: 'Topmodel met hoogste comfort en efficiency',
      features: ['Hoogste efficiency', 'Luchtzuivering', 'Vloerverwarming'],
      price: 'Vanaf €2.799,-'
    },
    {
      name: 'Daikin Ururu Sarara',
      description: 'Unieke bevochtiging en ontvochtiging',
      features: ['Be-/ontvochtiging', 'Luchtzuivering', 'Premium comfort'],
      price: 'Vanaf €3.299,-'
    }
  ],
  lg: [
    {
      name: 'LG ArtCool',
      description: 'Kunstzinnig design met picture frame',
      features: ['Picture frame', 'WiFi control', 'Dual inverter'],
      price: 'Vanaf €2.199,-'
    },
    {
      name: 'LG DualCool Premium',
      description: 'Krachtige koeling met energiebesparing',
      features: ['10 jaar garantie', 'Plasmaster ionizer', 'Low noise'],
      price: 'Vanaf €1.799,-'
    }
  ],
  samsung: [
    {
      name: 'Samsung WindFree',
      description: 'Koeling zonder directe luchtstroom',
      features: ['WindFree technologie', 'AI Auto Cooling', 'SmartThings'],
      price: 'Vanaf €2.399,-'
    },
    {
      name: 'Samsung Luzon',
      description: 'Betaalbare kwaliteit voor elk budget',
      features: ['Fast cooling', 'Good Sleep mode', 'Auto clean'],
      price: 'Vanaf €1.599,-'
    }
  ],
  mitsubishi: [
    {
      name: 'Mitsubishi Heavy Industries',
      description: 'Japanse kwaliteit en betrouwbaarheid',
      features: ['Silent mode', 'Weekly timer', 'Allergen filter'],
      price: 'Vanaf €1.999,-'
    }
  ],
  toshiba: [
    {
      name: 'Toshiba Haori',
      description: 'Textiel afwerking voor elk interieur',
      features: ['Textiel design', 'HEPA filter', 'Quiet mode'],
      price: 'Vanaf €2.699,-'
    },
    {
      name: 'Toshiba Daiseikai',
      description: 'Hoogste energie-efficiëntie',
      features: ['A+++ label', 'Plasma filter', 'WiFi ready'],
      price: 'Vanaf €2.099,-'
    },
    {
      name: 'Toshiba Kazumi',
      description: 'Modern design met krachtige prestaties',
      features: ['Sleek design', 'Eco mode', 'Timer functie'],
      price: 'Vanaf €1.899,-'
    },
    {
      name: 'Toshiba Seiya',
      description: 'Instapmodel met goede prijs-kwaliteit',
      features: ['Betrouwbaar', 'Eenvoudige bediening', 'Energiezuinig'],
      price: 'Vanaf €1.499,-'
    }
  ],
  tosot: [
    {
      name: 'Tosot Pular',
      description: 'Uitstekende prijs-kwaliteitverhouding',
      features: ['WiFi control', 'Sleep mode', 'Turbo functie'],
      price: 'Vanaf €1.299,-'
    },
    {
      name: 'Tosot Clivia',
      description: 'Stijlvol en betaalbaar',
      features: ['Modern design', 'Quiet operation', 'Energy saving'],
      price: 'Vanaf €1.399,-'
    },
    {
      name: 'Tosot Cosmo',
      description: 'Premium model met extra functies',
      features: ['I-Feel functie', 'Self-cleaning', 'Golden fin'],
      price: 'Vanaf €1.599,-'
    }
  ],
  mobiel: [
    {
      name: 'LG Mobiele Airco',
      description: 'Verplaatsbare koeling waar u het nodig heeft',
      features: ['Geen installatie', 'Plug & play', 'Dual inverter'],
      price: 'Vanaf €699,-'
    },
    {
      name: 'Tosot Mobiele Airco',
      description: 'Betaalbare mobiele klimaatoplossing',
      features: ['Compact design', 'Timer functie', 'Afstandsbediening'],
      price: 'Vanaf €499,-'
    }
  ]
};

export function Products() {
  const [selectedBrand, setSelectedBrand] = useState<string>('all');

  const getAllProducts = () => {
    if (selectedBrand === 'all') {
      return Object.entries(products).flatMap(([brand, items]) => 
        items.map(item => ({ ...item, brand }))
      );
    }
    return products[selectedBrand as keyof typeof products]?.map(item => ({ ...item, brand: selectedBrand })) || [];
  };

  const displayProducts = getAllProducts();

  return (
    <section id="products" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Ons Complete Airco Assortiment
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ontdek ons uitgebreide aanbod van topmerken. 
            Voor elke ruimte en elk budget de perfecte oplossing.
          </p>
        </div>

        {/* Brand Filter */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center gap-2 p-1 bg-gray-100 rounded-lg">
            <Filter className="h-5 w-5 text-gray-600 ml-2" />
            <button
              onClick={() => setSelectedBrand('all')}
              className={`px-4 py-2 rounded-md font-medium transition-all ${
                selectedBrand === 'all' 
                  ? 'bg-white text-orange-600 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Alle merken
            </button>
            {Object.keys(products).map((brand) => (
              <button
                key={brand}
                onClick={() => setSelectedBrand(brand)}
                className={`px-4 py-2 rounded-md font-medium transition-all capitalize ${
                  selectedBrand === brand 
                    ? 'bg-white text-orange-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {brand === 'mobiel' ? 'Mobiel' : brand.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProducts.map((product, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
              {'image' in product && product.image && (
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img 
                    src={product.image!} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                  <span className="text-xs font-medium text-gray-500 uppercase">
                    {product.brand === 'mobiel' ? 'Mobiel' : product.brand}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{product.description}</p>
                
                <ul className="space-y-1 mb-4">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-green-500">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold text-orange-600">
                    {product.price}
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-orange-500 hover:text-orange-600 font-medium"
                  >
                    Info aanvragen
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 bg-blue-50 rounded-2xl p-8">
          <div className="flex items-start gap-4">
            <Info className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Ook leverbaar: Airco Covers
              </h3>
              <p className="text-gray-600 mb-4">
                Bescherm uw buitenunit met onze hoogwaardige airco covers. 
                Verkrijgbaar in wit en antraciet, perfect passend voor alle modellen.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                Vraag naar de mogelijkheden
                <ArrowRight className="h-4 w-4 ml-1" />
              </a>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Niet zeker welk model het beste bij u past? 
            Onze experts helpen u graag met een persoonlijk advies.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
          >
            Vraag Gratis Advies Aan
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}