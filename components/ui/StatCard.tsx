'use client';

import { StatCardData } from '@/types';
import { Card } from './Card';
import {
  TrendingUp,
  TrendingDown,
  Minus,
  DollarSign,
  Users,
  CreditCard,
  Activity,
} from 'lucide-react';

interface StatCardProps {
  data: StatCardData;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  DollarSign,
  Users,
  CreditCard,
  Activity,
};

export function StatCard({ data }: StatCardProps) {
  const { title, value, change, changeLabel, icon } = data;

  const Icon = icon ? iconMap[icon] || Activity : Activity;

  const isPositive = change && change > 0;
  const isNegative = change && change < 0;
  const trend = isPositive ? 'up' : isNegative ? 'down' : 'neutral';

  const TrendIcon = trend === 'up' ? TrendingUp : trend === 'down' ? TrendingDown : Minus;

  const trendColor =
    trend === 'up' ? 'text-green-600' : trend === 'down' ? 'text-red-600' : 'text-gray-600';

  const trendBgColor =
    trend === 'up' ? 'bg-green-50' : trend === 'down' ? 'bg-red-50' : 'bg-gray-50';

  return (
    <Card className="hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="mt-2 text-3xl font-bold text-gray-900">{value}</p>
          {change !== undefined && (
            <div className="mt-2 flex items-center text-sm">
              <span
                className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${trendBgColor} ${trendColor}`}
              >
                <TrendIcon className="mr-1 h-3 w-3" />
                {change > 0 ? '+' : ''}
                {change}%
              </span>
              {changeLabel && <span className="ml-2 text-gray-500">{changeLabel}</span>}
            </div>
          )}
        </div>
        <div className="rounded-xl bg-blue-50 p-3">
          <Icon className="h-6 w-6 text-blue-600" />
        </div>
      </div>
    </Card>
  );
}
