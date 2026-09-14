import type { CityStatus } from '@/types';

const labels: Record<CityStatus, string> = {
  priority: 'Priority City',
  planning: 'Planning',
  confirmed: 'Date Confirmed',
  past: 'Past Event',
};

const modifiers: Record<CityStatus, string> = {
  priority: 'meetup-status--priority',
  planning: 'meetup-status--planning',
  confirmed: 'meetup-status--confirmed',
  past: 'meetup-status--past',
};

interface Props {
  status: CityStatus;
}

export default function MeetupStatus({ status }: Props) {
  return (
    <span className={`meetup-status ${modifiers[status]}`}>
      {labels[status]}
    </span>
  );
}
