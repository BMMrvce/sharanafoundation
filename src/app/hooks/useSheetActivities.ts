import { useCallback, useEffect, useMemo, useState } from 'react';
import { fetchActivitiesFromSheetDb } from '../services/sheetdb';
import type { Activity } from '../types/activity';

const REFRESH_INTERVAL_MS = 60_000;

interface UseSheetActivitiesResult {
  activities: Activity[];
  isLoading: boolean;
  error: string | null;
  refresh: () => Promise<void>;
}

export function useSheetActivities(): UseSheetActivitiesResult {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const sheetDbUrl = useMemo(() => import.meta.env.VITE_SHEETDB_ACTIVITIES_URL || '', []);

  const loadActivities = useCallback(async () => {
    try {
      const data = await fetchActivitiesFromSheetDb(sheetDbUrl);
      setActivities(data);
      setError(null);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unable to load camps and activities right now.';
      setError(message);
    } finally {
      setIsLoading(false);
    }
  }, [sheetDbUrl]);

  useEffect(() => {
    void loadActivities();

    const interval = window.setInterval(() => {
      void loadActivities();
    }, REFRESH_INTERVAL_MS);

    return () => {
      window.clearInterval(interval);
    };
  }, [loadActivities]);

  return {
    activities,
    isLoading,
    error,
    refresh: loadActivities,
  };
}
