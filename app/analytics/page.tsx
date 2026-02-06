import { DashboardLayout } from '@/components/containers';
import { Card, CardHeader, Button } from '@/components/ui';
import { currentUser, navItems } from '@/lib/data';

export default function AnalyticsPage() {
  return (
    <DashboardLayout user={currentUser} navItems={navItems} title="Analytics">
      <div className="space-y-8">
        <section>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Analytics Overview
          </h3>
          <Card>
            <CardHeader
              title="Performance Metrics"
              subtitle="Track your key performance indicators"
            />
            <div className="p-8 text-center text-gray-500">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center text-2xl">
                📊
              </div>
              <p>Analytics data will appear here</p>
              <p className="text-sm mt-2">Connect your data source to see metrics</p>
            </div>
          </Card>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Traffic Sources
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <div className="p-6">
                <h4 className="font-medium text-gray-900 mb-2">Direct</h4>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                </div>
                <p className="text-sm text-gray-500 mt-2">45% of traffic</p>
              </div>
            </Card>
            <Card>
              <div className="p-6">
                <h4 className="font-medium text-gray-900 mb-2">Organic Search</h4>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '32%' }}></div>
                </div>
                <p className="text-sm text-gray-500 mt-2">32% of traffic</p>
              </div>
            </Card>
            <Card>
              <div className="p-6">
                <h4 className="font-medium text-gray-900 mb-2">Social Media</h4>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: '15%' }}></div>
                </div>
                <p className="text-sm text-gray-500 mt-2">15% of traffic</p>
              </div>
            </Card>
            <Card>
              <div className="p-6">
                <h4 className="font-medium text-gray-900 mb-2">Referral</h4>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-orange-600 h-2 rounded-full" style={{ width: '8%' }}></div>
                </div>
                <p className="text-sm text-gray-500 mt-2">8% of traffic</p>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}
