import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'UK Dental Meet-Ups 2026 & 2027 | DentalMeetup.co.uk',
  description:
    'Meet our team face-to-face at UK dental meet-ups before travelling to Turkey for treatment. Register your city and join the 2026-2027 priority list.',
  metadataBase: new URL('https://dentalmeetup.co.uk'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'UK Dental Meet-Ups 2026 & 2027 | DentalMeetup.co.uk',
    description:
      'Meet our team face-to-face at UK dental meet-ups before travelling to Turkey for treatment. Register your city and join the 2026-2027 priority list.',
    url: 'https://dentalmeetup.co.uk/',
    type: 'website',
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'DentalMeetup.co.uk',
  url: 'https://dentalmeetup.co.uk/',
};

const webpageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'UK Dental Meet-Ups 2026 & 2027 | DentalMeetup.co.uk',
  url: 'https://dentalmeetup.co.uk/',
  description:
    'Meet our team face-to-face at UK dental meet-ups before travelling to Turkey for treatment. Register your city and join the 2026-2027 priority list.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
