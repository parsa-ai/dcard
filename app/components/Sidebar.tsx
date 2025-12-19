"use client"
import Link from 'next/link';
import { Users, CreditCard, LogOutIcon, ChevronsRightIcon } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const Sidebar = () => {
    const menuItems = [
        { name: 'مدیریت کاربران', Icon: <Users size={20} />, href: '/dashboard/users' },
        { name: 'کارت‌های بلاک شده', Icon: <CreditCard size={20} />, href: '/dashboard/blocked-cards' },
    ];

    const [isOpen, setIsopen] = useState(true)
    return (
        <>
            <aside className={`bg-blue-700 h-screen border-l rounded-l-4xl border-gray-200 hidden lg:flex flex-col transition-all relative ${isOpen ? "w-64" : "w-22"}`}>
                <div onClick={() => setIsopen(!isOpen)} className={`cursor-pointer ${isOpen ? "rotate-x-0" : "rotate-180"} absolute -left-5 bg-white rounded-full p-2 text-blue-700 top-17 border  border-blue`}><ChevronsRightIcon size={20} /></div>
                <div className="flex gap-5 pb-5 p-6 bb-half ">
                    <Image src="/images/logo/logo.png" width={44} height={44} alt='logo' className='min-w-11 min-h-11 max-w-11 max-h-11 w-11 h-11 imgF'></Image>
                    {isOpen && <h1 className="text-2xl font-bold text-white text-center ">پنل مدیریت</h1>}
                </div>
                <nav className="flex-1 p-4 space-y-2">
                    {menuItems.map((item) => {
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="flex items-center gap-3 px-4 py-3 text-white hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                            >
                                {item.Icon}
                                {isOpen && <span className="font-medium">{item.name}</span>}
                            </Link>
                        )
                    })}
                </nav>
                <div>
                    <p className="text-white text-right p-8 pt-5 bt-half flex gap-3 items-center cursor-pointer ">
                        <LogOutIcon size={20} />
                        {isOpen && <span className='-mt-1'> خروج از حساب</span>}
                    </p>
                </div>
            </aside>
            <aside className='fixed lg:hidden w-full bottom-0 right-0 p-5 '>
                <nav className='bg-blue-700 rounded-2xl h-13 md:h-20 flex justify-center items-center gap-15 text-white'>
                    {menuItems.map((item) => {
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="flex items-center gap-3 px-4 py-3 text-white hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                            >
                                {item.Icon}
                                <span className="font-medium hidden md:block">{item.name}</span>
                            </Link>
                        )
                    })}
                    <p className="flex items-center gap-3 px-4 py-3 text-white hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                        <LogOutIcon size={20} />
                        <span className="font-medium hidden md:block">خروج از حساب</span>
                    </p>

                </nav>
            </aside>
        </>
    );
};

export default Sidebar;