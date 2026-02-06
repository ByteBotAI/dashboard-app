import { DashboardLayout } from '@/components/containers';
import { StatsContainer } from '@/components/containers';
import { Card, CardHeader, Button } from '@/components/ui';
import { currentUser, recentActivity } from '@/lib/data';
import { formatRelativeTime } from '@/lib/utils';

export default function Home() {
  return (
    <DashboardLayout user={currentUser} title="Overview">
      <div className="space-y-8">
        {/* Stats Section */}
        <section>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Key Metrics
          </h3>
          <StatsContainer />
        </section>

        {/* Quick Actions */}
        <section>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Quick Actions
          </h3>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Create Report</Button>
            <Button variant="secondary">Export Data</Button>
            <Button variant="ghost">View All</Button>
          </div>
        </section>

        {/* Recent Activity */}
        <section>
          <Card>
            <CardHeader
              title="Recent Activity"
              subtitle="Latest updates from your team"
              action={<Button variant="ghost" size="sm">View All</Button>}
            />
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg
                    ${activity.type === 'success' ? 'bg-green-100 text-green-600' : ''}
                    ${activity.type === 'info' ? 'bg-blue-100 text-blue-600' : ''}
                    ${activity.type === 'warning' ? 'bg-yellow-100 text-yellow-600' : ''}
                    ${activity.type === 'error' ? 'bg-red-100 text-red-600' : ''}
                  `}>
                    {activity.type === 'success' && '✓'}
                    {activity.type === 'info' && 'ℹ'}
                    {activity.type === 'warning' && '⚠'}
                    {activity.type === 'error' && '✕'}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{activity.title}</p>
                    <p className="text-sm text-gray-500">{activity.description}</p>
                  </div>
                  <span className="text-sm text-gray-400">
                    {formatRelativeTime(activity.timestamp)}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </section>
      </div>
    </DashboardLayout>
  );
}
