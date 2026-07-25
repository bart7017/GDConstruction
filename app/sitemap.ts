import { MetadataRoute } from 'next';
import { realisationSlugs } from '@constants/realisations';

const BASE_URL = 'https://www.gdconstruction.net';

const serviceSlugs = [
  'maconnerie-generale',
  'renovation-interieure',
  'renovation-exterieure',
  'plomberie',
  'electricite',
  'couverture',
  'carrelage-sols',
  'peinture-finitions',
  'pompe-chaleur-climatisation',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: BASE_URL,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...serviceSlugs.map((slug) => ({
      url: `${BASE_URL}/services/${slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    {
      url: `${BASE_URL}/realisations`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...realisationSlugs.map((slug) => ({
      url: `${BASE_URL}/realisations/${slug}`,
      lastModified,
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    })),
    {
      url: `${BASE_URL}/contact`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/a-propos`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
  ];
}
