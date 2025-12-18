import Link from 'next/link';
import { Users, CreditCard, LayoutDashboard, LogOutIcon } from 'lucide-react';

const Sidebar = () => {
    const menuItems = [
        { name: 'مدیریت کاربران', icon: <Users size={20} />, href: '/dashboard/users' },
        { name: 'کارت‌های بلاک شده', icon: <CreditCard size={20} />, href: '/dashboard/blocked-cards' },
    ];

    return (
        <aside className="w-64 bg-blue-700 h-screen border-l rounded-l-4xl border-gray-200 fixed right-0 top-0 flex flex-col">
            <div className="">
                <h1 className="text-2xl font-bold bb-half p-6 pb-5 text-white text-center">پنل مدیریت</h1>
            </div>
            <nav className="flex-1 p-4 space-y-2">
                {menuItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center gap-3 px-4 py-3 text-white hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                    >
                        {item.icon}
                        <span className="font-medium">{item.name}</span>
                    </Link>
                ))}
            </nav>
            <div>
                <p className="text-white text-right p-8 pt-5 bt-half flex gap-3 items-center ">
                    <LogOutIcon size={20} />
                    <span className='-mt-2'> خروج از حساب</span>
                </p>
            </div>
        </aside>
    );
};

export default Sidebar;