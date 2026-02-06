'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Sidebar, Header } from '@/components/ui';
import { NavItem, User } from '@/types';

const defaultNavItems: NavItem[] = [
  { label: 'Dashboard', href: '/', icon: 'dashboard' },
  { label: 'Analytics', href: '/analytics', icon: 'analytics' },
  { label: 'Users', href: '/users', icon: 'users' },
  { label: 'Settings', href: '/settings', icon: 'settings' },
];

interface DashboardLayoutProps {
  children: React.ReactNode;
  user?: User;
  navItems?: NavItem[];
  title?: string;
}

export function DashboardLayout({
  children,
  user,
  navItems = defaultNavItems,
  title = 'Dashboard',
}: DashboardLayoutProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [activeHref, setActiveHref] = useState(pathname || '/');

  const handleNavigate = (href: string) => {
    setActiveHref(href);
    router.push(href);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar
        items={navItems}
        activeHref={activeHref}
        onNavigate={handleNavigate}
      />
      <div className="flex-1 flex flex-col">
        <Header user={user} title={title} />
        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
}
