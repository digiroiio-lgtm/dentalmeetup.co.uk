import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="/" className="logo">
          DentalMeetup.co.uk
        </Link>
        <nav aria-label="Main navigation">
          <ul className="nav-list">
            <li>
              <Link href="/uk-dental-meetups/">UK Meet-Ups</Link>
            </li>
            <li>
              <a href="/#how-it-works">How It Works</a>
            </li>
            <li>
              <a href="/#cities">Cities</a>
            </li>
            <li>
              <a href="/#register" className="nav-cta">
                Register Interest
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
