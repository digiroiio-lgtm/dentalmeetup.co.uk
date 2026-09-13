'use client';

import { useState, FormEvent } from 'react';

const CITIES = [
  'London',
  'Manchester',
  'Birmingham',
  'Leeds',
  'Glasgow',
  'Liverpool',
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

interface FormFields {
  firstName: string;
  email: string;
  mobile: string;
  city: string;
  treatment: string;
  contactMethod: string;
  consent: boolean;
}

type FieldErrors = Partial<Record<keyof FormFields, string>>;

const EMPTY_FORM: FormFields = {
  firstName: '',
  email: '',
  mobile: '',
  city: '',
  treatment: '',
  contactMethod: '',
  consent: false,
};

function validate(fields: FormFields): FieldErrors {
  const errors: FieldErrors = {};
  if (!fields.firstName.trim()) errors.firstName = 'First name is required.';
  if (
    !fields.email.trim() ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)
  ) {
    errors.email = 'A valid email address is required.';
  }
  if (!fields.mobile.trim()) errors.mobile = 'Mobile number is required.';
  if (!fields.city) errors.city = 'Please select a city.';
  if (!fields.treatment) errors.treatment = 'Please select a treatment interest.';
  if (!fields.consent) errors.consent = 'You must agree to be contacted.';
  return errors;
}

export default function RegisterForm() {
  const [fields, setFields] = useState<FormFields>(EMPTY_FORM);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const set = (patch: Partial<FormFields>) =>
    setFields((prev) => ({ ...prev, ...patch }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const next = validate(fields);
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setSubmitting(true);

    // TODO: POST to CRM/API endpoint when available
    // Example:
    // await fetch('/api/register', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(fields),
    // });

    await new Promise<void>((resolve) => setTimeout(resolve, 400));
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="register" className="register">
        <div className="container">
          <div className="form-success">
            <h2>You&apos;re on the list!</h2>
            <p>
              Thank you, {fields.firstName}. We&apos;ll be in touch when we confirm
              meet-up dates near you.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="register" className="register" aria-labelledby="register-heading">
      <div className="container">
        <h2 id="register-heading">Register Your Interest</h2>
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
            <label htmlFor="city">Your City *</label>
            <select
              id="city"
              value={fields.city}
              onChange={(e) => set({ city: e.target.value })}
              aria-describedby={errors.city ? 'city-error' : undefined}
              aria-invalid={!!errors.city}
            >
              <option value="">Select a city</option>
              {CITIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            {errors.city && (
              <span id="city-error" className="field-error" role="alert">
                {errors.city}
              </span>
            )}
          </div>

          {/* Treatment */}
          <div className="form-group">
            <label htmlFor="treatment">Treatment Interest *</label>
            <select
              id="treatment"
              value={fields.treatment}
              onChange={(e) => set({ treatment: e.target.value })}
              aria-describedby={errors.treatment ? 'treatment-error' : undefined}
              aria-invalid={!!errors.treatment}
            >
              <option value="">Select treatment</option>
              {TREATMENTS.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            {errors.treatment && (
              <span id="treatment-error" className="field-error" role="alert">
                {errors.treatment}
              </span>
            )}
          </div>

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
                    checked={fields.contactMethod === method}
                    onChange={(e) => set({ contactMethod: e.target.value })}
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
                checked={fields.consent}
                onChange={(e) => set({ consent: e.target.checked })}
                aria-describedby={errors.consent ? 'consent-error' : undefined}
                aria-invalid={!!errors.consent}
              />
              <span>
                I agree to be contacted about UK dental meet-ups and my treatment
                enquiry. *
              </span>
            </label>
            {errors.consent && (
              <span id="consent-error" className="field-error" role="alert">
                {errors.consent}
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
