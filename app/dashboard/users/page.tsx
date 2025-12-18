
"use client";
import { useState } from 'react';
import { Search, Eye, ChevronLeft, ChevronRight, UserCheck, UserX, PencilIcon, Trash2Icon } from 'lucide-react';

interface Card {
    id: number;
    year: string;
    month: string;
    number: string;
    cvv2: string;
    isBlocked: 0 | 1;
}

interface User {
    id: number;
    name: string;
    lastName: string;
    phone: string;
    cards: Card[];
    isActive: 0 | 1;
}

const usersData: User[] = [
    {
        id: 101,
        name: "علی",
        lastName: "محمدی",
        phone: "09123456789",
        isActive: 1,
        cards: [
            { id: 1, number: "6037....1234", year: "05", month: "12", cvv2: "123", isBlocked: 0 },
            { id: 2, number: "5892....5678", year: "06", month: "01", cvv2: "456", isBlocked: 0 },
        ]
    },
    {
        id: 101,
        name: "علی",
        lastName: "محمدی",
        phone: "09123456789",
        isActive: 1,
        cards: [
            { id: 1, number: "6037....1234", year: "05", month: "12", cvv2: "123", isBlocked: 0 },
            { id: 2, number: "5892....5678", year: "06", month: "01", cvv2: "456", isBlocked: 0 },
        ]
    },

    {
        id: 101,
        name: "علی",
        lastName: "محمدی",
        phone: "09123456789",
        isActive: 0,
        cards: [
            { id: 1, number: "6037....1234", year: "05", month: "12", cvv2: "123", isBlocked: 0 },
            { id: 2, number: "5892....5678", year: "06", month: "01", cvv2: "456", isBlocked: 0 },
        ]
    },

];
export default function UsersPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState<"all" | "active" | "inactive">("all");
    const [selectedUserCards, setSelectedUserCards] = useState<Card[] | null>(null);

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <h1 className="text-2xl font-bold text-gray-800">مدیریت کاربران</h1>

                <div className="flex flex-wrap gap-3 w-full md:w-auto">
                    <div className="relative flex-1 md:w-64">
                        <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="جستجوی نام یا شماره تلفن..."
                            className="w-full pr-10 pl-4 py-2 border border-gray-100 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <select
                        className="border border-gray-100  rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none bg-white"
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value as any)}
                    >
                        <option value="all">همه وضعیت‌ها</option>
                        <option value="active">فقط فعال‌ها</option>
                        <option value="inactive">فقط غیرفعال‌ها</option>
                    </select>
                </div>
            </div>

            {/* جدول کاربران */}
            <div className="overflow-x-auto border border-gray-100  rounded-xl">
                <table className="w-full text-center border-collapse">
                    <thead className="bg-gray-50 border-b border-gray-300">
                        <tr>
                            <th className="p-4 font-semibold text-gray-600">نام و خانوادگی</th>
                            <th className="p-4 font-semibold text-gray-600">شماره تماس</th>
                            <th className="p-4 font-semibold text-gray-600">کارت ها</th>
                            <th className="p-4 font-semibold text-gray-600">کارت‌ها</th>
                            <th className="p-4 font-semibold text-gray-600">ویرایش</th>
                            <th className="p-4 font-semibold text-gray-600">حدف</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {usersData.map((user) => (
                            <tr key={user.id} className="border-b  border-gray-100 hover:bg-gray-50 transition-colors">
                                <td className="p-4">{user.name} {user.lastName}</td>
                                <td className="p-4 font-mono">{user.phone}</td>
                                <td className="p-4">
                                    <button
                                        onClick={() => setSelectedUserCards(user.cards)}
                                        className="text-primary justify-center  hover:underline flex items-center gap-1"
                                    >
                                        <Eye size={20} />
                                    </button>
                                </td>
                                <td className="p-4">
                                    {user.isActive === 1 ? (
                                        <span className="flex items-center gap-1 text-green-600 bg-green-50 w-fit px-2 py-1 rounded-full text-sm">
                                            <UserCheck size={14} /> فعال
                                        </span>
                                    ) : (
                                        <span className="flex items-center gap-1 text-red-600 bg-red-50 w-fit px-2 py-1 rounded-full text-sm">
                                            <UserX size={14} /> غیرفعال
                                        </span>
                                    )}
                                </td>
                                <td className="p-4">
                                    <button><PencilIcon size={20}/></button>
                                </td>
                                <td className="p-4">
                                    <button className='text-red-700'><Trash2Icon size={20}/></button>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="flex justify-between items-center mt-6">
                <span className="text-sm text-gray-500">نمایش ۵۰ کاربر در هر صفحه</span>
                <div className="flex gap-2">
                    <button className="flex items-center gap-1 px-4 py-2 border transition border-gray-100 rounded-lg hover:bg-gray-100 disabled:opacity-50">
                        <ChevronRight size={18} /> قبلی
                    </button>
                    <button className="flex items-center gap-1 px-4 py-2 bg-primary transition text-white rounded-lg bg-blue-700 hover:bg-blue-800">
                        بعدی <ChevronLeft size={18} />
                    </button>
                </div>
            </div>

            {selectedUserCards && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-xl">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-bold">لیست کارت‌های کاربر</h3>
                            <button onClick={() => setSelectedUserCards(null)} className="text-gray-500 hover:text-black text-2xl">&times;</button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {selectedUserCards.map(card => (
                                <div key={card.id} className={`p-4 border border-gray-100 rounded-xl ${card.isBlocked ? 'bg-red-50 border-red-100' : 'bg-blue-50 border-blue-100'}`}>
                                    <p className="font-mono text-lg mb-2 text-center tracking-widest">{card.number}</p>
                                    <div className="flex justify-between text-sm text-gray-600">
                                        <span>CVV2: {card.cvv2}</span>
                                        <span>تاریخ: {card.year}/{card.month}</span>
                                    </div>
                                    {card.isBlocked === 1 && <p className="text-red-600 text-xs mt-2 font-bold">بلاک شده</p>}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}