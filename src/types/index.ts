export type CityStatus = 'priority' | 'planning' | 'confirmed' | 'past';

export interface CityConfig {
  slug: string;
  name: string;
  region: string;
  country: string;
  priority: number;
  status: CityStatus;
  pageEnabled: boolean;
  indexable: boolean;
  heroTitle: string;
  heroDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  nearbyAreas: string[];
  treatmentFocus: string[];
  ctaLabel: string;
  formDefaultCity: string;
  nextEventDate: string | null;
  venue: string | null;
  faqs: FAQItem[];
}

export interface TreatmentConfig {
  slug: string;
  name: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface LeadData {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  postcode: string;
  meetupCity: string;
  treatmentInterest: string[];
  dentalSituation: string[];
  ukQuoteReceived: boolean | null;
  ukQuoteRange: string;
  paymentPreference: string;
  comfortableMonthlyPayment: string;
  treatmentTimeline: string;
  travelReadiness: string;
  preferredContactMethod: string;
  marketingConsent: boolean;
  landingPage: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmContent: string;
  gclid: string;
  submissionTimestamp: string;
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}
