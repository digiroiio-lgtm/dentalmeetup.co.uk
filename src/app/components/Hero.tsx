export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="container">
        <h1 id="hero-heading">
          Meet Us in the UK Before Travelling to Turkey for Dental Treatment
        </h1>
        <p className="hero-copy">
          We&apos;re planning face-to-face dental meet-ups across the UK throughout
          2026 and 2027. Register your city and treatment interest to receive
          priority access when we&apos;re near you.
        </p>
        <div className="hero-actions">
          <a href="#register" className="btn btn-primary">
            Register Interest
          </a>
          <a href="#register" className="btn btn-secondary">
            London Priority List
          </a>
        </div>
      </div>
    </section>
  );
}
