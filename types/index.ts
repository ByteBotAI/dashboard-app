export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'admin' | 'user' | 'editor';
}

export interface NavItem {
  label: string;
  href: string;
  icon?: string;
  active?: boolean;
}

export interface StatCardData {
  title: string;
  value: string | number;
  change?: number;
  changeLabel?: string;
  icon: string;
  trend?: 'up' | 'down' | 'neutral';
}

export interface DashboardData {
  stats: StatCardData[];
  recentActivity: ActivityItem[];
}

export interface ActivityItem {
  id: string;
  title: string;
  description: string;
  timestamp: Date;
  type: 'success' | 'info' | 'warning' | 'error';
}

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

export type CardVariant = 'default' | 'bordered' | 'elevated';
