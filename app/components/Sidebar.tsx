import Link from 'next/link';
import { Users, CreditCard, LayoutDashboard } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { name: 'مدیریت کاربران', icon: <Users size={20} />, href: '/dashboard/users' },
    { name: 'کارت‌های بلاک شده', icon: <CreditCard size={20} />, href: '/dashboard/blocked-cards' },
  ];

  return (
    <aside className="w-64 bg-white h-screen border-l border-gray-200 fixed right-0 top-0 flex flex-col">
      <div className="p-6 ">
        <h1 className="text-2xl font-bold text-blue-600 text-center">پنل مدیریت</h1>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
          >
            {item.icon}
            <span className="font-medium">{item.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;