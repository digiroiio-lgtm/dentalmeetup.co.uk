import Link from 'next/link';
import type { CityConfig } from '@/types';
import MeetupStatus from './MeetupStatus';

interface Props {
  city: CityConfig;
  featured?: boolean;
}

export default function CityCard({ city, featured = false }: Props) {
  const href = city.pageEnabled
    ? `/uk-dental-meetups/${city.slug}/`
    : '#register';

  return (
    <div className={`city-card${city.status === 'priority' ? ' city-card--priority' : ''}${featured ? ' city-card--featured' : ''}`}>
      <div className="city-card-header">
        <h3>{city.name}</h3>
        <MeetupStatus status={city.status} />
      </div>
      <p className="city-card-region">{city.region}</p>
      {city.nextEventDate && (
        <p className="city-card-date">Next date: {city.nextEventDate}</p>
      )}
      {city.pageEnabled ? (
        <Link href={href} className="btn btn-primary">
          {city.ctaLabel}
        </Link>
      ) : (
        <a href={href} className="btn btn-secondary">
          Register Interest
        </a>
      )}
    </div>
  );
}
