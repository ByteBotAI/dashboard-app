import { NavItem } from '@/types';

interface SidebarProps {
  items: NavItem[];
  activeHref?: string;
  onNavigate?: (href: string) => void;
}

const iconMap: Record<string, string> = {
  home: '🏠',
  dashboard: '📊',
  analytics: '📈',
  users: '👥',
  settings: '⚙️',
};

export function Sidebar({ items, activeHref = '/', onNavigate }: SidebarProps) {
  return (
    <aside className="w-64 min-h-screen bg-gray-900 text-white">
      <div className="p-6">
        <h1 className="text-xl font-bold">Dashboard</h1>
      </div>
      <nav className="px-4 pb-6">
        <ul className="space-y-1">
          {items.map((item) => {
            const isActive = item.href === activeHref;
            return (
              <li key={item.href}>
                <button
                  onClick={() => onNavigate?.(item.href)}
                  className={`
                    w-full flex items-center gap-3 px-4 py-3 rounded-lg
                    text-left transition-colors duration-200
                    ${
                      isActive
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                    }
                  `}
                >
                  <span className="text-lg">{item.icon ? iconMap[item.icon] : '📄'}</span>
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
