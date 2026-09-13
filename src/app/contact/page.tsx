import Link from 'next/link';
import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Contact | DentalMeetup.co.uk',
  robots: { index: false, follow: false },
};

export default function Contact() {
  return (
    <>
      <Header />
      <main>
        <section style={{ paddingBlock: '4rem' }}>
          <div className="container">
            <h1>Contact</h1>
            <p style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>
              To get in touch, please use the registration form on the homepage.
            </p>
            <p style={{ marginTop: '1.5rem' }}>
              <Link href="/#register">← Register your interest</Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
