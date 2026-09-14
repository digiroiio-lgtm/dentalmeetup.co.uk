// Analytics event names for dentalmeetup.co.uk
// TODO: Replace console.log stub with GA4 or analytics provider when configured.
// e.g. gtag('event', name, data) or analytics.track(name, data)

export const AnalyticsEvents = {
  GEO_CITY_VIEW: 'geo_city_view',
  GEO_CITY_CTA_CLICK: 'geo_city_cta_click',
  GEO_CITY_INTEREST: 'geo_city_interest',
  TREATMENT_INTEREST_SELECT: 'treatment_interest_select',
  LEAD_FORM_START: 'lead_form_start',
  LEAD_FORM_STEP: 'lead_form_step',
  LEAD_FORM_SUBMIT: 'lead_form_submit',
  WHATSAPP_CLICK: 'whatsapp_click',
  PRIORITY_LIST_JOIN: 'priority_list_join',
  CITY_REQUEST: 'city_request',
} as const;

export type AnalyticsEventName =
  (typeof AnalyticsEvents)[keyof typeof AnalyticsEvents];

export function trackEvent(
  name: AnalyticsEventName,
  data?: Record<string, unknown>
): void {
  // TODO: replace with GA4 / analytics provider
  // gtag('event', name, data);
  if (process.env.NODE_ENV === 'development') {
    console.log('[analytics]', name, data ?? {});
  }
}
