'use client';

import { StatCard } from '@/components/ui';
import { dashboardStats } from '@/lib/data';

export function StatsContainer() {
  // Render stats instantly - no loading state for mock data
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {dashboardStats.map((stat, index) => (
        <StatCard key={index} data={stat} />
      ))}
    </div>
  );
}
