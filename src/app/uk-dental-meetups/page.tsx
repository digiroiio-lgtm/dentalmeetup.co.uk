import type { Metadata } from 'next';
import { cities } from '@/data/cities';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CityGrid from '../components/CityGrid';
import FAQBlock from '../components/FAQBlock';
import RegisterForm from '../components/RegisterForm';
import GeoCTA from '../components/GeoCTA';
import type { FAQItem } from '@/types';

export const metadata: Metadata = {
  title: 'UK Dental Meet-Ups 2026 & 2027 | DentalMeetup.co.uk',
  description:
    'Face-to-face dental meet-ups across the UK for patients considering treatment in Turkey. Find your nearest city and register for priority access.',
  metadataBase: new URL('https://dentalmeetup.co.uk'),
  alternates: { canonical: '/uk-dental-meetups/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'UK Dental Meet-Ups 2026 & 2027 | DentalMeetup.co.uk',
    description:
      'Face-to-face dental meet-ups across the UK for patients considering treatment in Turkey. Find your nearest city and register for priority access.',
    url: 'https://dentalmeetup.co.uk/uk-dental-meetups/',
    type: 'website',
  },
};

const hubFaqs: FAQItem[] = [
  {
    question: 'What is a dental meet-up?',
    answer:
      'A dental meet-up is a face-to-face consultation in your city where you can discuss your treatment goals, understand costs and ask questions about dental treatment in Turkey — before committing to travel.',
  },
  {
    question: 'Which cities are you visiting?',
    answer:
      'We are planning meet-ups in London, Manchester, Birmingham, Leeds, Glasgow, Liverpool, Bristol, Cardiff and Edinburgh throughout 2026 and 2027. London is our priority city. Register your city to receive updates.',
  },
  {
    question: 'Is there a cost to attend?',
    answer: 'No. Attending a dental meet-up is completely free.',
  },
  {
    question: 'What treatments can you discuss?',
    answer:
      'We can discuss dental implants, All-on-4, All-on-6, veneers, crowns and smile makeovers. If you are unsure what you need, we can help you explore your options.',
  },
  {
    question: 'How do I register?',
    answer:
      'Use the registration form below. Select your city and treatment interest and we will contact you directly when meet-up dates are confirmed near you.',
  },
];

const howItWorks = [
  {
    step: '1',
    heading: 'Register Your City',
    body: 'Tell us where you are and what treatment you are considering.',
  },
  {
    step: '2',
    heading: 'We Confirm Dates',
    body: 'We contact you directly when meet-up dates are scheduled near you.',
  },
  {
    step: '3',
    heading: 'Meet Face-to-Face',
    body: 'Attend a free consultation in your city to discuss your goals and get every question answered.',
  },
  {
    step: '4',
    heading: 'Travel With Confidence',
    body: 'When you are ready, travel to Turkey for treatment with full knowledge of what to expect.',
  },
];

export default function HubPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="hero" aria-labelledby="hub-heading">
          <div className="container">
            <h1 id="hub-heading">UK Dental Meet-Ups: Meet Before You Travel</h1>
            <p className="hero-copy">
              We&apos;re organising face-to-face dental meet-ups across the UK
              throughout 2026 and 2027 for patients considering dental treatment
              in Turkey. Register your city and treatment interest to receive
              priority access when we&apos;re near you.
            </p>
            <div className="hero-actions">
              <a href="#register" className="btn btn-primary">
                Register Interest
              </a>
              <a href="/uk-dental-meetups/london/" className="btn btn-secondary">
                London Priority List
              </a>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="why-join" aria-labelledby="how-heading">
          <div className="container">
            <h2 id="how-heading">How It Works</h2>
            <ol className="how-steps">
              {howItWorks.map((item) => (
                <li key={item.step} className="how-step">
                  <span className="how-step-num" aria-hidden="true">
                    {item.step}
                  </span>
                  <div>
                    <h3>{item.heading}</h3>
                    <p>{item.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* City grid */}
        <section id="cities" className="cities" aria-labelledby="cities-hub-heading">
          <div className="container">
            <h2 id="cities-hub-heading">UK Meet-Up Cities 2026 &amp; 2027</h2>
            <p className="section-intro">
              London is our priority city. Other cities are in planning — register
              your interest and we will contact you when dates are confirmed.
            </p>
            <CityGrid cities={cities} featuredSlug="london" />
          </div>
        </section>

        {/* Treatments section */}
        <section className="why-join" aria-labelledby="treatments-hub-heading">
          <div className="container">
            <h2 id="treatments-hub-heading">Treatments We Can Discuss</h2>
            <ul className="points-list">
              {[
                'Dental Implants',
                'All-on-4 Full Arch',
                'All-on-6 Full Arch',
                'Porcelain Veneers',
                'Dental Crowns',
                'Smile Makeover',
              ].map((t) => (
                <li key={t} className="point-item">
                  <span className="point-icon" aria-hidden="true">✓</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* GeoCTA */}
        <GeoCTA
          heading="Not Sure Which City?"
          body="Register your interest and tell us your nearest city. We will prioritise meet-up locations based on where demand is highest."
          ctaLabel="Register Your City"
          ctaHref="#register"
          secondary={{ label: 'View London Page', href: '/uk-dental-meetups/london/' }}
        />

        {/* FAQ */}
        <FAQBlock items={hubFaqs} />

        {/* Form */}
        <RegisterForm heading="Register Your Interest" />
      </main>
      <Footer />
    </>
  );
}
