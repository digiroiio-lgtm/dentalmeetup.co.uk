// Meet-up events will be added here when dates and venues are confirmed.
// Do NOT add fake events, dates, or venues.
// Each entry should reference a city slug and a confirmed date/venue only.

export interface MeetupEvent {
  id: string;
  citySlug: string;
  date: string;      // ISO date string — only set when confirmed
  venue: string;     // Only set when confirmed
  notes: string;
}

export const meetups: MeetupEvent[] = [
  // No confirmed events yet — add entries here as they are confirmed.
];
