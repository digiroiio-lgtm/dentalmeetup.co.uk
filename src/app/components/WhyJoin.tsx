const points = [
  'Discuss your treatment goals face-to-face',
  'Understand treatment costs and timelines',
  'Ask about Turkey treatment and payment options before you travel',
];

export default function WhyJoin() {
  return (
    <section id="how-it-works" className="why-join" aria-labelledby="why-join-heading">
      <div className="container">
        <h2 id="why-join-heading">Why Join a Dental Meet-Up?</h2>
        <ul className="points-list">
          {points.map((point) => (
            <li key={point} className="point-item">
              <span className="point-icon" aria-hidden="true">
                ✓
              </span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
