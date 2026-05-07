import { Calendar, MapPin } from 'lucide-react';
import type { Activity } from '../../types/activity';
import { ActivityStatusBadge } from './ActivityStatusBadge';

interface ActivityCardProps {
  activity: Activity;
}

export function ActivityCard({ activity }: ActivityCardProps) {
  return (
    <article className="h-full bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-lg transition-all">
      <div className="flex items-start justify-between gap-3 mb-4">
        <h3 className="text-xl font-bold text-gray-900 leading-tight">{activity.title}</h3>
        <ActivityStatusBadge status={activity.status} />
      </div>

      <div className="space-y-3 mb-4">
        <div className="flex items-center gap-3 text-gray-700">
          <Calendar className="w-4 h-4 text-blue-700 flex-shrink-0" />
          <span className="text-sm font-medium">{activity.date}</span>
        </div>
        <div className="flex items-center gap-3 text-gray-700">
          <MapPin className="w-4 h-4 text-blue-700 flex-shrink-0" />
          <span className="text-sm">{activity.location}</span>
        </div>
      </div>

      <p className="text-gray-700 text-sm leading-relaxed">{activity.description}</p>
    </article>
  );
}
