import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { cities, getCityBySlug, getEnabledCities } from '@/data/cities';
import { treatments } from '@/data/treatments';
import { generateCityMetadata } from '@/lib/metadata';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumbs from '../../components/Breadcrumbs';
import CityHero from '../../components/CityHero';
import TreatmentInterestGrid from '../../components/TreatmentInterestGrid';
import FAQBlock from '../../components/FAQBlock';
import NearbyAreas from '../../components/NearbyAreas';
import InternalLinks from '../../components/InternalLinks';
import RegisterForm from '../../components/RegisterForm';

interface Props {
  params: { city: string };
}

export async function generateStaticParams() {
  return getEnabledCities().map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const city = getCityBySlug(params.city);
  if (!city || !city.pageEnabled) return {};
  return generateCityMetadata(city);
}

export default function CityPage({ params }: Props) {
  const city = getCityBySlug(params.city);
  if (!city || !city.pageEnabled) notFound();

  const cityTreatments = treatments.filter((t) =>
    city.treatmentFocus.includes(t.name)
  );

  const citySchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `Dental Consultation in ${city.name} for Treatment in Turkey | DentalMeetup.co.uk`,
    url: `https://dentalmeetup.co.uk/uk-dental-meetups/${city.slug}/`,
    description: `Meet our team in ${city.name} before travelling to Turkey for dental treatment.`,
    isPartOf: {
      '@type': 'WebSite',
      name: 'DentalMeetup.co.uk',
      url: 'https://dentalmeetup.co.uk/',
    },
  };

  const otherCities = cities
    .filter((c) => c.pageEnabled && c.slug !== city.slug)
    .map((c) => ({
      label: `Meet-Up in ${c.name}`,
      href: `/uk-dental-meetups/${c.slug}/`,
    }));

  const internalLinks = [
    { label: 'View All UK Meet-Up Cities', href: '/uk-dental-meetups/' },
    ...otherCities,
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }}
      />
      <Header />
      <main>
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'UK Dental Meet-Ups', href: '/uk-dental-meetups/' },
            { label: city.name, href: `/uk-dental-meetups/${city.slug}/` },
          ]}
        />

        <CityHero city={city} />

        {/* What We Can Discuss */}
        <section className="why-join" aria-labelledby="discuss-heading">
          <div className="container">
            <h2 id="discuss-heading">What We Can Discuss in {city.name}</h2>
            <ul className="points-list">
              <li className="point-item">
                <span className="point-icon" aria-hidden="true">✓</span>
                Your treatment goals and which options are most suitable for you
              </li>
              <li className="point-item">
                <span className="point-icon" aria-hidden="true">✓</span>
                The cost difference between UK and Turkey treatment
              </li>
              <li className="point-item">
                <span className="point-icon" aria-hidden="true">✓</span>
                What the treatment process involves and how long it takes
              </li>
              <li className="point-item">
                <span className="point-icon" aria-hidden="true">✓</span>
                Monthly payment options where available
              </li>
              <li className="point-item">
                <span className="point-icon" aria-hidden="true">✓</span>
                What to expect before, during and after travelling to Turkey
              </li>
            </ul>
          </div>
        </section>

        {/* Treatments grid */}
        <TreatmentInterestGrid
          treatments={cityTreatments}
          heading={`Treatments We Can Review in ${city.name}`}
        />

        {/* UK vs Turkey costs */}
        <section className="cities" aria-labelledby="costs-heading">
          <div className="container">
            <h2 id="costs-heading">UK vs Turkey Treatment Costs</h2>
            <p style={{ maxWidth: '640px', marginTop: '0' }}>
              Dental treatment in Turkey can cost significantly less than the same
              treatment in the UK. At the {city.name} meet-up we can walk you
              through an honest comparison so you understand what you are paying
              for, what is included in a treatment package and what you should
              look for when evaluating clinics.
            </p>
          </div>
        </section>

        {/* Payment options */}
        <section className="why-join" aria-labelledby="payment-heading">
          <div className="container">
            <h2 id="payment-heading">Monthly Payment Options</h2>
            <p style={{ maxWidth: '640px' }}>
              We can discuss monthly payment plans for dental treatment where
              they are available. At the {city.name} meet-up, ask us about
              comfortable monthly payment options and what different payment
              structures look like for your treatment of interest.
            </p>
          </div>
        </section>

        {/* What to bring */}
        <section className="cities" aria-labelledby="bring-heading">
          <div className="container">
            <h2 id="bring-heading">What to Bring</h2>
            <ul className="points-list" style={{ marginTop: '0' }}>
              <li className="point-item">
                <span className="point-icon" aria-hidden="true">✓</span>
                Any recent dental X-rays or scans if you have them
              </li>
              <li className="point-item">
                <span className="point-icon" aria-hidden="true">✓</span>
                Notes on previous dental work or current issues
              </li>
              <li className="point-item">
                <span className="point-icon" aria-hidden="true">✓</span>
                Any UK quotes you have already received
              </li>
              <li className="point-item">
                <span className="point-icon" aria-hidden="true">✓</span>
                Your questions — no question is too basic
              </li>
            </ul>
          </div>
        </section>

        {/* How the meet-up works */}
        <section className="why-join" aria-labelledby="process-heading">
          <div className="container">
            <h2 id="process-heading">How the Meet-Up Works</h2>
            <ol className="how-steps">
              <li className="how-step">
                <span className="how-step-num" aria-hidden="true">1</span>
                <div>
                  <h3>Register Your Interest</h3>
                  <p>
                    Use the form below to register. Tell us your city and the
                    treatment you are considering.
                  </p>
                </div>
              </li>
              <li className="how-step">
                <span className="how-step-num" aria-hidden="true">2</span>
                <div>
                  <h3>We Confirm {city.name} Dates</h3>
                  <p>
                    When {city.name} dates are scheduled we contact everyone on
                    the priority list directly.
                  </p>
                </div>
              </li>
              <li className="how-step">
                <span className="how-step-num" aria-hidden="true">3</span>
                <div>
                  <h3>Attend the Meet-Up</h3>
                  <p>
                    Come along to a free face-to-face session in {city.name} to
                    discuss your goals and ask every question.
                  </p>
                </div>
              </li>
              <li className="how-step">
                <span className="how-step-num" aria-hidden="true">4</span>
                <div>
                  <h3>Travel When You Are Ready</h3>
                  <p>
                    When you are confident and ready, travel to Turkey for
                    treatment knowing exactly what to expect.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* Registration form */}
        <RegisterForm
          defaultCity={city.formDefaultCity}
          heading={`${city.name} Priority Registration`}
        />

        <NearbyAreas cityName={city.name} areas={city.nearbyAreas} />

        <FAQBlock items={city.faqs} />

        <InternalLinks
          heading="Explore More"
          links={internalLinks}
        />
      </main>
      <Footer />
    </>
  );
}
