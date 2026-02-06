import { DashboardLayout } from '@/components/containers';
import { Card, CardHeader, Button } from '@/components/ui';
import { currentUser, navItems } from '@/lib/data';

export default function SettingsPage() {
  return (
    <DashboardLayout user={currentUser} navItems={navItems} title="Settings">
      <div className="space-y-8 max-w-3xl">
        <section>
          <h3 className="text-lg font-semibold text-gray-900">General Settings</h3>
          <p className="text-sm text-gray-500 mt-1">Manage your account preferences</p>
        </section>

        <section>
          <Card>
            <CardHeader
              title="Profile Information"
              subtitle="Update your personal details"
            />
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  defaultValue="John Doe"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  defaultValue="john@example.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="pt-4">
                <Button variant="primary">Save Changes</Button>
              </div>
            </div>
          </Card>
        </section>

        <section>
          <Card>
            <CardHeader
              title="Notifications"
              subtitle="Choose what you want to be notified about"
            />
            <div className="space-y-3">
              <label className="flex items-center">
                <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded" />
                <span className="ml-3 text-sm text-gray-700">Email notifications for new users</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded" />
                <span className="ml-3 text-sm text-gray-700">Weekly summary reports</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" />
                <span className="ml-3 text-sm text-gray-700">Marketing updates</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded" />
                <span className="ml-3 text-sm text-gray-700">Security alerts</span>
              </label>
            </div>
          </Card>
        </section>

        <section>
          <Card>
            <CardHeader
              title="Danger Zone"
              subtitle="Irreversible actions"
            />
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-red-200 rounded-lg bg-red-50">
                <div>
                  <p className="font-medium text-red-900">Delete Account</p>
                  <p className="text-sm text-red-700">This will permanently delete your account and all data</p>
                </div>
                <Button variant="danger">Delete</Button>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </DashboardLayout>
  );
}
