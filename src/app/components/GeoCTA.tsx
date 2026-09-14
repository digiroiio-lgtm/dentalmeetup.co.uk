import Link from 'next/link';

interface Props {
  heading?: string;
  body?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondary?: { label: string; href: string };
}

export default function GeoCTA({
  heading = 'Find a UK Dental Meet-Up Near You',
  body = 'Register your city and treatment interest. We’ll contact you directly when meet-up dates are confirmed near you.',
  ctaLabel = 'Register Interest',
  ctaHref = '#register',
  secondary,
}: Props) {
  return (
    <section className="geo-cta" aria-labelledby="geo-cta-heading">
      <div className="container geo-cta-inner">
        <h2 id="geo-cta-heading">{heading}</h2>
        <p>{body}</p>
        <div className="hero-actions">
          <a href={ctaHref} className="btn btn-primary">
            {ctaLabel}
          </a>
          {secondary && (
            <Link href={secondary.href} className="btn btn-secondary">
              {secondary.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
