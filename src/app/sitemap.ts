import type { MetadataRoute } from 'next';
import { getIndexableCities } from '@/data/cities';

const BASE_URL = 'https://dentalmeetup.co.uk';
const TODAY = new Date().toISOString().split('T')[0];

export default function sitemap(): MetadataRoute.Sitemap {
  const indexableCities = getIndexableCities();

  return [
    {
      url: `${BASE_URL}/`,
      lastModified: TODAY,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/uk-dental-meetups/`,
      lastModified: TODAY,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...indexableCities.map((city) => ({
      url: `${BASE_URL}/uk-dental-meetups/${city.slug}/`,
      lastModified: TODAY,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
  ];
}
