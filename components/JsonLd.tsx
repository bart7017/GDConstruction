const BASE_URL = "https://www.gdconstruction.net";

const businessId = `${BASE_URL}/#business`;

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": businessId,
  name: "GD Construction",
  url: BASE_URL,
  telephone: "+33695918103",
  description:
    "Entreprise de maçonnerie générale et rénovation tous corps d'état à Pamfou (77830), Seine-et-Marne.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pamfou",
    postalCode: "77830",
    addressRegion: "Seine-et-Marne",
    addressCountry: "FR",
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      address: "Pamfou, 77830, France",
    },
    geoRadius: 50000,
  },
  priceRange: "€€",
};

/** Entité principale du site — à inclure une seule fois, dans le layout racine. */
export const LocalBusinessJsonLd = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
  />
);

interface ServiceJsonLdProps {
  name: string;
  description: string;
  slug: string;
}

/** Décrit une prestation et la relie au prestataire déclaré dans le layout. */
export const ServiceJsonLd = ({ name, description, slug }: ServiceJsonLdProps) => {
  const url = `${BASE_URL}/services/${slug}`;
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name,
    description,
    serviceType: name,
    url,
    provider: { "@id": businessId },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Seine-et-Marne",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};
