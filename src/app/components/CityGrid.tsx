import type { CityConfig } from '@/types';
import CityCard from './CityCard';

interface Props {
  cities: CityConfig[];
  featuredSlug?: string;
}

export default function CityGrid({ cities, featuredSlug }: Props) {
  return (
    <div className="cities-grid">
      {cities.map((city) => (
        <CityCard
          key={city.slug}
          city={city}
          featured={city.slug === featuredSlug}
        />
      ))}
    </div>
  );
}
