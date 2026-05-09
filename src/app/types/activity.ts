export type ActivityStatus = 'Upcoming' | 'Ongoing' | 'Completed';

export interface Activity {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  status: ActivityStatus;
}

// Generic row shape from spreadsheet-backed APIs (Stein, Sheets, etc.)
export interface DataRow {
  title?: string;
  date?: string;
  location?: string;
  description?: string;
  status?: string;
  statusBadge?: string;
  'status badge'?: string;
}
