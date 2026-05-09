import type { Activity, ActivityStatus } from '../types/activity';

const RECENT_ACTIVITY_LIMIT = 6;

function normalizeStatus(value?: string): ActivityStatus {
  if (!value) return 'Upcoming';
  const normalized = value.trim().toLowerCase();
  if (normalized === 'upcoming') return 'Upcoming';
  if (normalized === 'ongoing') return 'Ongoing';
  if (normalized === 'completed') return 'Completed';
  return 'Upcoming';
}

function createActivityId(row: Record<string, any>, index: number): string {
  const base = [row.title, row.date, row.location].filter(Boolean).join('-').trim();
  return base ? `${base}-${index}` : `activity-${index}`;
}

function toActivity(row: Record<string, any>, index: number): Activity {
  const rawStatus = row.status || row.statusBadge || row['status badge'];

  return {
    id: createActivityId(row, index),
    title: (row.title || 'Untitled Activity').toString().trim(),
    date: (row.date || 'Date not provided').toString().trim(),
    location: (row.location || 'Location not provided').toString().trim(),
    description: (row.description || 'No description available.').toString().trim(),
    status: normalizeStatus(rawStatus?.toString()),
  };
}

export async function fetchActivitiesFromStein(url: string): Promise<Activity[]> {
  if (!url) {
    throw new Error('Stein URL is missing. Please set VITE_STEIN_ACTIVITIES_URL.');
  }

  const response = await fetch(url, {
    method: 'GET',
    headers: { Accept: 'application/json' },
  });

  if (!response.ok) {
    throw new Error(`Failed to load activities. API returned status ${response.status}.`);
  }

  // Stein returns an array of objects where keys are column headers.
  const rows = (await response.json()) as Record<string, any>[];
  const activities = [...rows].reverse().map((row, index) => toActivity(row, index));

  return activities.slice(0, RECENT_ACTIVITY_LIMIT);
}
