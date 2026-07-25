import Link from "next/link";
import { servicesBySlug } from "@constants/services";

interface RelatedServicesProps {
  slugs: string[];
  title?: string;
}

export const RelatedServices = ({
  slugs,
  title = "Nos Autres Services Complémentaires",
}: RelatedServicesProps) => {
  const related = slugs
    .map((slug) => servicesBySlug[slug])
    .filter((service): service is NonNullable<typeof service> => Boolean(service));

  if (related.length === 0) return null;

  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">{title}</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {related.map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="bg-white rounded-lg shadow-lg p-6 border hover:shadow-xl transition-shadow block"
          >
            <div className="text-3xl mb-3">{service.icon}</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm mb-3">{service.description}</p>
            <span className="text-primary font-semibold text-sm">En savoir plus →</span>
          </Link>
        ))}
      </div>
    </div>
  );
};
