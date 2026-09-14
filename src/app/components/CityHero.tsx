import type { CityConfig } from '@/types';
import MeetupStatus from './MeetupStatus';

interface Props {
  city: CityConfig;
}

export default function CityHero({ city }: Props) {
  return (
    <section className="hero city-hero" aria-labelledby="city-hero-heading">
      <div className="container">
        <MeetupStatus status={city.status} />
        <h1 id="city-hero-heading" style={{ marginTop: '0.75rem' }}>
          {city.heroTitle}
        </h1>
        <p className="hero-copy">{city.heroDescription}</p>
        {city.nextEventDate ? (
          <p className="city-hero-date">
            Next {city.name} date: <strong>{city.nextEventDate}</strong>
          </p>
        ) : (
          <p className="city-hero-date city-hero-date--pending">
            {city.name} dates for 2026 and 2027 are being scheduled.
          </p>
        )}
        <div className="hero-actions" style={{ marginTop: '1.5rem' }}>
          <a href="#register" className="btn btn-primary">
            {city.ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
