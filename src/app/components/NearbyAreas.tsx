interface Props {
  cityName: string;
  areas: string[];
}

export default function NearbyAreas({ cityName, areas }: Props) {
  if (areas.length === 0) return null;

  return (
    <section className="nearby-areas" aria-labelledby="nearby-heading">
      <div className="container">
        <h2 id="nearby-heading">Serving Patients Across {cityName}</h2>
        <p className="nearby-intro">
          Our {cityName} dental meet-up is accessible to patients from across{' '}
          {cityName} and the surrounding areas.
        </p>
        <ul className="nearby-list">
          {areas.map((area) => (
            <li key={area} className="nearby-item">
              {area}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
