import Link from 'next/link';
import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy | DentalMeetup.co.uk',
  robots: { index: false, follow: false },
};

export default function Privacy() {
  return (
    <>
      <Header />
      <main>
        <section style={{ paddingBlock: '4rem' }}>
          <div className="container">
            <h1>Privacy Policy</h1>
            <p style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>
              Our full privacy policy will be published here before launch.
            </p>
            <p style={{ marginTop: '1.5rem' }}>
              <Link href="/">← Back to home</Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
