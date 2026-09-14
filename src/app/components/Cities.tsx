import { cities } from '@/data/cities';
import CityGrid from './CityGrid';

export default function Cities() {
  return (
    <section id="cities" className="cities" aria-labelledby="cities-heading">
      <div className="container">
        <h2 id="cities-heading">UK Meet-Ups 2026 &amp; 2027</h2>
        <CityGrid cities={cities} featuredSlug="london" />
      </div>
    </section>
  );
}
