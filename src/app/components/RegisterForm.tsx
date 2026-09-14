'use client';

import { useState, FormEvent } from 'react';
import type { LeadData } from '@/types';
import { trackEvent, AnalyticsEvents } from '@/lib/analytics';

const CITIES = [
  'London',
  'Manchester',
  'Birmingham',
  'Leeds',
  'Glasgow',
  'Liverpool',
  'Bristol',
  'Cardiff',
  'Edinburgh',
  'Other',
];

const TREATMENTS = [
  'Dental Implants',
  'All-on-4',
  'All-on-6',
  'Veneers',
  'Crowns',
  'Smile Makeover',
  'Not Sure Yet',
];

const CONTACT_METHODS = ['WhatsApp', 'Phone', 'Email'] as const;

// Phase 2 UI uses a subset of LeadData fields.
// The full schema is defined in src/types/index.ts for Phase 3 multi-step upgrade.
type FormFields = Pick<
  LeadData,
  'firstName' | 'email' | 'mobile' | 'meetupCity' | 'treatmentInterest' | 'preferredContactMethod' | 'marketingConsent'
>;

type FieldErrors = Partial<Record<keyof FormFields, string>>;

function makeEmpty(defaultCity: string): FormFields {
  return {
    firstName: '',
    email: '',
    mobile: '',
    meetupCity: defaultCity,
    treatmentInterest: [],
    preferredContactMethod: '',
    marketingConsent: false,
  };
}

function validate(fields: FormFields): FieldErrors {
  const errors: FieldErrors = {};
  if (!fields.firstName.trim()) errors.firstName = 'First name is required.';
  if (!fields.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
    errors.email = 'A valid email address is required.';
  if (!fields.mobile.trim()) errors.mobile = 'Mobile number is required.';
  if (!fields.meetupCity) errors.meetupCity = 'Please select a city.';
  if (fields.treatmentInterest.length === 0)
    errors.treatmentInterest = 'Please select a treatment interest.';
  if (!fields.marketingConsent)
    errors.marketingConsent = 'You must agree to be contacted.';
  return errors;
}

interface Props {
  defaultCity?: string;
  heading?: string;
}

export default function RegisterForm({
  defaultCity = '',
  heading = 'Register Your Interest',
}: Props) {
  const [fields, setFields] = useState<FormFields>(makeEmpty(defaultCity));
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const set = (patch: Partial<FormFields>) =>
    setFields((prev) => ({ ...prev, ...patch }));

  const toggleTreatment = (value: string) => {
    const next = fields.treatmentInterest.includes(value)
      ? fields.treatmentInterest.filter((t) => t !== value)
      : [...fields.treatmentInterest, value];
    set({ treatmentInterest: next });
    trackEvent(AnalyticsEvents.TREATMENT_INTEREST_SELECT, { treatment: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const next = validate(fields);
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    trackEvent(AnalyticsEvents.LEAD_FORM_SUBMIT, {
      city: fields.meetupCity,
      treatment: fields.treatmentInterest,
    });

    setSubmitting(true);

    // TODO: POST to CRM/API endpoint when available
    // await fetch('/api/register', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     ...fields,
    //     landingPage: window.location.pathname,
    //     submissionTimestamp: new Date().toISOString(),
    //   }),
    // });

    await new Promise<void>((resolve) => setTimeout(resolve, 400));
    setSubmitting(false);
    setSubmitted(true);
    trackEvent(AnalyticsEvents.PRIORITY_LIST_JOIN, { city: fields.meetupCity });
  };

  if (submitted) {
    return (
      <section id="register" className="register">
        <div className="container">
          <div className="form-success">
            <h2>You&apos;re on the list!</h2>
            <p>
              Thank you, {fields.firstName}. We&apos;ll be in touch when we
              confirm meet-up dates near you.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="register" className="register" aria-labelledby="register-heading">
      <div className="container">
        <h2 id="register-heading">{heading}</h2>
        <form className="register-form" onSubmit={handleSubmit} noValidate>

          {/* First Name */}
          <div className="form-group">
            <label htmlFor="firstName">First Name *</label>
            <input
              id="firstName"
              type="text"
              value={fields.firstName}
              onChange={(e) => set({ firstName: e.target.value })}
              aria-describedby={errors.firstName ? 'firstName-error' : undefined}
              aria-invalid={!!errors.firstName}
              autoComplete="given-name"
            />
            {errors.firstName && (
              <span id="firstName-error" className="field-error" role="alert">
                {errors.firstName}
              </span>
            )}
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              id="email"
              type="email"
              value={fields.email}
              onChange={(e) => set({ email: e.target.value })}
              aria-describedby={errors.email ? 'email-error' : undefined}
              aria-invalid={!!errors.email}
              autoComplete="email"
            />
            {errors.email && (
              <span id="email-error" className="field-error" role="alert">
                {errors.email}
              </span>
            )}
          </div>

          {/* Mobile */}
          <div className="form-group">
            <label htmlFor="mobile">Mobile Number *</label>
            <input
              id="mobile"
              type="tel"
              value={fields.mobile}
              onChange={(e) => set({ mobile: e.target.value })}
              aria-describedby={errors.mobile ? 'mobile-error' : undefined}
              aria-invalid={!!errors.mobile}
              autoComplete="tel"
            />
            {errors.mobile && (
              <span id="mobile-error" className="field-error" role="alert">
                {errors.mobile}
              </span>
            )}
          </div>

          {/* City */}
          <div className="form-group">
            <label htmlFor="meetupCity">Your City *</label>
            <select
              id="meetupCity"
              value={fields.meetupCity}
              onChange={(e) => set({ meetupCity: e.target.value })}
              aria-describedby={errors.meetupCity ? 'city-error' : undefined}
              aria-invalid={!!errors.meetupCity}
            >
              <option value="">Select a city</option>
              {CITIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            {errors.meetupCity && (
              <span id="city-error" className="field-error" role="alert">
                {errors.meetupCity}
              </span>
            )}
          </div>

          {/* Treatment interest — multi-select checkboxes */}
          <fieldset className="form-group form-fieldset">
            <legend>Treatment Interest *</legend>
            <div className="checkbox-group">
              {TREATMENTS.map((t) => (
                <label key={t} className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={fields.treatmentInterest.includes(t)}
                    onChange={() => toggleTreatment(t)}
                  />
                  <span>{t}</span>
                </label>
              ))}
            </div>
            {errors.treatmentInterest && (
              <span className="field-error" role="alert">
                {errors.treatmentInterest}
              </span>
            )}
          </fieldset>

          {/* Contact method (optional) */}
          <fieldset className="form-group form-fieldset">
            <legend>Preferred Contact Method (optional)</legend>
            <div className="radio-group">
              {CONTACT_METHODS.map((method) => (
                <label key={method} className="radio-label">
                  <input
                    type="radio"
                    name="contactMethod"
                    value={method}
                    checked={fields.preferredContactMethod === method}
                    onChange={(e) =>
                      set({ preferredContactMethod: e.target.value })
                    }
                  />
                  {method}
                </label>
              ))}
            </div>
          </fieldset>

          {/* Consent */}
          <div className="form-group form-consent">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={fields.marketingConsent}
                onChange={(e) => set({ marketingConsent: e.target.checked })}
                aria-describedby={
                  errors.marketingConsent ? 'consent-error' : undefined
                }
                aria-invalid={!!errors.marketingConsent}
              />
              <span>
                I agree to be contacted about UK dental meet-ups and my
                treatment enquiry. *
              </span>
            </label>
            {errors.marketingConsent && (
              <span id="consent-error" className="field-error" role="alert">
                {errors.marketingConsent}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-submit"
            disabled={submitting}
          >
            {submitting ? 'Submitting…' : 'Join the Priority List'}
          </button>
        </form>
      </div>
    </section>
  );
}
