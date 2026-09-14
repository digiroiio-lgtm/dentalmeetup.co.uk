import Link from 'next/link';

interface InternalLink {
  label: string;
  href: string;
  description?: string;
}

interface Props {
  heading?: string;
  links: InternalLink[];
}

export default function InternalLinks({
  heading = 'Explore More',
  links,
}: Props) {
  if (links.length === 0) return null;

  return (
    <nav className="internal-links" aria-labelledby="internal-links-heading">
      <div className="container">
        <h2 id="internal-links-heading">{heading}</h2>
        <ul className="internal-links-list">
          {links.map((link) => (
            <li key={link.href} className="internal-links-item">
              <Link href={link.href} className="internal-link">
                {link.label}
                {link.description && (
                  <span className="internal-link-desc">{link.description}</span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
