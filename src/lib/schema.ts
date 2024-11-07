import { contactConfig } from "@/config/contact";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": contactConfig.companyName,
  "description": "Specialist in Mitsubishi Electric airconditioningsystemen in Limburg",
  "url": "https://mitsubishiaircolimburg.nl",
  "logo": "https://mitsubishiaircolimburg.nl/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": `+31${contactConfig.phoneClean}`,
    "contactType": "customer service",
    "areaServed": "Limburg",
    "availableLanguage": "Dutch"
  },
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "Limburg",
    "addressCountry": "NL"
  },
  "sameAs": [
    contactConfig.socialMedia.facebook,
    contactConfig.socialMedia.instagram
  ]
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  "name": contactConfig.companyName,
  "image": "https://mitsubishiaircolimburg.nl/images/mitsubishi-msz-ef-white.webp",
  "priceRange": "€€",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "Limburg",
    "addressCountry": "NL"
  },
  "geo": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 51.2093,
      "longitude": 5.9526
    },
    "geoRadius": 50000
  },
  "url": "https://mitsubishiaircolimburg.nl",
  "telephone": `+31${contactConfig.phoneClean}`,
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "17:00"
    }
  ],
  "areaServed": {
    "@type": "State",
    "name": "Limburg"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Airconditioning Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Airconditioning Installatie",
          "description": "Professionele installatie van Mitsubishi Electric airconditioners"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Airconditioning Onderhoud",
          "description": "Regelmatig onderhoud van uw airconditioningsysteem"
        }
      }
    ]
  }
};