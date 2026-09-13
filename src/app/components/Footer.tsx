import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <p className="footer-logo">DentalMeetup.co.uk</p>
          <p className="footer-tagline">
            UK dental meet-ups for patients considering dental treatment in Turkey.
          </p>
        </div>
        <nav aria-label="Footer navigation">
          <ul className="footer-links">
            <li>
              <Link href="/privacy">Privacy</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
