import { Badge } from '../ui/badge';
import type { ActivityStatus } from '../../types/activity';

const STATUS_STYLES: Record<ActivityStatus, string> = {
  Upcoming: 'bg-green-100 text-green-800 border-green-200',
  Ongoing: 'bg-orange-100 text-orange-800 border-orange-200',
  Completed: 'bg-gray-100 text-gray-700 border-gray-200',
};

interface ActivityStatusBadgeProps {
  status: ActivityStatus;
}

export function ActivityStatusBadge({ status }: ActivityStatusBadgeProps) {
  return (
    <Badge variant="outline" className={STATUS_STYLES[status]}>
      {status}
    </Badge>
  );
}
