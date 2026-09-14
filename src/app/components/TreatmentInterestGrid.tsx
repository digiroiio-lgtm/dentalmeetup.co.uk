import type { TreatmentConfig } from '@/types';

interface Props {
  treatments: TreatmentConfig[];
  heading?: string;
}

export default function TreatmentInterestGrid({
  treatments,
  heading = 'Treatments We Can Discuss',
}: Props) {
  return (
    <section className="treatment-grid-section" aria-labelledby="treatment-grid-heading">
      <div className="container">
        <h2 id="treatment-grid-heading">{heading}</h2>
        <div className="treatment-grid">
          {treatments.map((t) => (
            <div key={t.slug} className="treatment-card">
              <h3>{t.name}</h3>
              <p>{t.description}</p>
              <a href="#register" className="treatment-card-link">
                Ask about {t.name} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
