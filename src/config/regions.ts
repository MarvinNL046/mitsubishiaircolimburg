interface City {
  name: string;
  description: string;
}

interface Region {
  name: string;
  description: string;
  cities: City[];
}

export const regions: Region[] = [
  {
    name: "Zuid-Limburg",
    description: "Het zuidelijke deel van Limburg met historische steden en een rijk cultureel erfgoed",
    cities: [
      {
        name: "Maastricht",
        description: "De hoofdstad van Limburg, bekend om haar historische binnenstad en culturele leven"
      },
      {
        name: "Heerlen",
        description: "Moderne stad met een rijk mijnbouwverleden"
      },
      {
        name: "Sittard-Geleen",
        description: "Industriële stad met een gezellig historisch centrum"
      },
      {
        name: "Valkenburg",
        description: "Toeristische stad bekend om haar grotten en kastelen"
      },
      {
        name: "Kerkrade",
        description: "Grensgemeente met een rijk cultureel aanbod"
      }
    ]
  },
  {
    name: "Midden-Limburg",
    description: "Het centrale deel van Limburg met een mix van stedelijk gebied en natuurschoon",
    cities: [
      {
        name: "Roermond",
        description: "Historische stad bekend om haar winkelmogelijkheden"
      },
      {
        name: "Weert",
        description: "Gezellige stad met een rijk cultureel leven"
      },
      {
        name: "Echt-Susteren",
        description: "Gemeente met een landelijk karakter"
      },
      {
        name: "Leudal",
        description: "Groene gemeente met veel natuurgebieden"
      },
      {
        name: "Maasgouw",
        description: "Gemeente langs de Maas met pittoreske dorpen"
      }
    ]
  },
  {
    name: "Noord-Limburg",
    description: "Het noordelijke deel van Limburg met een sterke agrarische en logistieke sector",
    cities: [
      {
        name: "Venlo",
        description: "Logistieke hub en handelscentrum"
      },
      {
        name: "Venray",
        description: "Moderne gemeente met een rijk historisch verleden"
      },
      {
        name: "Peel en Maas",
        description: "Groene gemeente met diverse dorpskernen"
      },
      {
        name: "Horst aan de Maas",
        description: "Agrarische gemeente met innovatieve tuinbouw"
      },
      {
        name: "Gennep",
        description: "Historische stad aan de Maas"
      }
    ]
  }
];