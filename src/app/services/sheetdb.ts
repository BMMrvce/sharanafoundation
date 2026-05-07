import type { Activity, ActivityStatus, SheetDbActivityRow } from '../types/activity';

const RECENT_ACTIVITY_LIMIT = 6;

function normalizeStatus(value?: string): ActivityStatus {
  if (!value) {
    return 'Upcoming';
  }

  const normalized = value.trim().toLowerCase();

  if (normalized === 'upcoming') {
    return 'Upcoming';
  }

  if (normalized === 'ongoing') {
    return 'Ongoing';
  }

  if (normalized === 'completed') {
    return 'Completed';
  }

  return 'Upcoming';
}

function createActivityId(row: SheetDbActivityRow, index: number): string {
  const base = [row.title, row.date, row.location].filter(Boolean).join('-').trim();
  return base ? `${base}-${index}` : `activity-${index}`;
}

function toActivity(row: SheetDbActivityRow, index: number): Activity {
  const rawStatus = row.status || row.statusBadge || row['status badge'];

  return {
    id: createActivityId(row, index),
    title: row.title?.trim() || 'Untitled Activity',
    date: row.date?.trim() || 'Date not provided',
    location: row.location?.trim() || 'Location not provided',
    description: row.description?.trim() || 'No description available.',
    status: normalizeStatus(rawStatus),
  };
}

export async function fetchActivitiesFromSheetDb(url: string): Promise<Activity[]> {
  if (!url) {
    throw new Error('SheetDB URL is missing. Please set VITE_SHEETDB_ACTIVITIES_URL.');
  }

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to load activities. API returned status ${response.status}.`);
  }

  const rows = (await response.json()) as SheetDbActivityRow[];
  const activities = [...rows].reverse().map((row, index) => toActivity(row, index));

  return activities.slice(0, RECENT_ACTIVITY_LIMIT);
}
