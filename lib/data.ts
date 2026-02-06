import { StatCardData, User, NavItem, ActivityItem } from '@/types';

// Mock data - synchronous for instant rendering
// Replace with actual API calls when backend is ready

export const currentUser: User = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  role: 'admin',
};

export const navItems: NavItem[] = [
  { label: 'Dashboard', href: '/', icon: 'dashboard' },
  { label: 'Analytics', href: '/analytics', icon: 'analytics' },
  { label: 'Users', href: '/users', icon: 'users' },
  { label: 'Settings', href: '/settings', icon: 'settings' },
];

export const dashboardStats: StatCardData[] = [
  {
    title: 'Total Users',
    value: '2,543',
    change: 12.5,
    changeLabel: 'vs last month',
    icon: 'Users',
    trend: 'up',
  },
  {
    title: 'Revenue',
    value: '$45,231',
    change: 8.2,
    changeLabel: 'vs last month',
    icon: 'DollarSign',
    trend: 'up',
  },
  {
    title: 'Active Sessions',
    value: '1,234',
    change: -3.1,
    changeLabel: 'vs last month',
    icon: 'Activity',
    trend: 'down',
  },
  {
    title: 'Conversion Rate',
    value: '3.24%',
    change: 0.8,
    changeLabel: 'vs last month',
    icon: 'CreditCard',
    trend: 'up',
  },
];

export const recentActivity: ActivityItem[] = [
  {
    id: '1',
    title: 'New user registered',
    description: 'sarah@example.com joined the platform',
    timestamp: new Date(Date.now() - 1000 * 60 * 30),
    type: 'success',
  },
  {
    id: '2',
    title: 'Revenue milestone',
    description: 'Monthly revenue goal reached',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
    type: 'info',
  },
  {
    id: '3',
    title: 'Server alert',
    description: 'High CPU usage detected',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 4),
    type: 'warning',
  },
];

// For async compatibility if needed later
export async function fetchDashboardStats(): Promise<StatCardData[]> {
  return dashboardStats;
}

export async function fetchCurrentUser(): Promise<User> {
  return currentUser;
}
