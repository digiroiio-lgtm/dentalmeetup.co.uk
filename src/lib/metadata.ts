import type { Metadata } from 'next';
import type { CityConfig } from '@/types';

const BASE_URL = 'https://dentalmeetup.co.uk';

export function generateCityMetadata(city: CityConfig): Metadata {
  const title = `Dental Consultation in ${city.name} for Treatment in Turkey | DentalMeetup.co.uk`;
  const description = `Meet our team in ${city.name} before travelling to Turkey for dental treatment. Discuss implants, veneers, treatment costs and payment options face-to-face.`;
  const url = `${BASE_URL}/uk-dental-meetups/${city.slug}/`;

  return {
    title,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: `/uk-dental-meetups/${city.slug}/`,
    },
    robots: city.indexable
      ? { index: true, follow: true }
      : { index: false, follow: false },
    openGraph: {
      title,
      description,
      url,
      type: 'website',
    },
  };
}
