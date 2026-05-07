export type ActivityStatus = 'Upcoming' | 'Ongoing' | 'Completed';

export interface Activity {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  status: ActivityStatus;
}

export interface SheetDbActivityRow {
  title?: string;
  date?: string;
  location?: string;
  description?: string;
  status?: string;
  statusBadge?: string;
  'status badge'?: string;
}
