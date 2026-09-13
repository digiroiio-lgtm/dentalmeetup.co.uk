const cities = [
  { name: 'London', priority: true },
  { name: 'Manchester', priority: false },
  { name: 'Birmingham', priority: false },
  { name: 'Leeds', priority: false },
  { name: 'Glasgow', priority: false },
  { name: 'Liverpool', priority: false },
];

export default function Cities() {
  return (
    <section id="cities" className="cities" aria-labelledby="cities-heading">
      <div className="container">
        <h2 id="cities-heading">UK Meet-Ups 2026 &amp; 2027</h2>
        <div className="cities-grid">
          {cities.map((city) => (
            <div
              key={city.name}
              className={`city-card${city.priority ? ' city-card--priority' : ''}`}
            >
              <div className="city-card-header">
                <h3>{city.name}</h3>
                {city.priority && (
                  <span className="priority-badge">Priority City</span>
                )}
              </div>
              <a href="#register" className="btn btn-primary">
                Register Interest
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
