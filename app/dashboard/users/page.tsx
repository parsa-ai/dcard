
"use client";
import { useState } from 'react';
import { Search,  ChevronLeft, ChevronRight,   PencilIcon, Trash2Icon } from 'lucide-react';
import { Card } from '@/lib/type';
import { usersData } from '@/lib/data';


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
                            className="w-full pr-10 pl-4 py-2 border border-gray-100 rounded-lg focus:outline-none "
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <select
                        className="border border-gray-100  rounded-lg px-4 py-2 focus:outline-none bg-white "
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
                            <tr key={user.id} className="border-b  border-gray-100  transition-colors">
                                <td className="p-4">{user.name} {user.lastName}</td>
                                <td className="p-4 font-mono">{user.phone}</td>
                                <td className="p-4">
                                    <button
                                        onClick={() => setSelectedUserCards(user.cards)}
                                        className="text-blue-950 hover:text-blue-600 p-2 transition  justify-center  hover:underline flex items-center gap-1">
                                        مشاهده
                                    </button>
                                </td>
                                <td className="p-4">
                                    {user.isActive === 1 ? (
                                        <span className="flex items-center gap-1 text-green-600 bg-green-50 w-fit px-2 py-1 rounded-full text-sm">
                                            فعال
                                        </span>
                                    ) : (
                                        <span className="flex items-center gap-1 text-red-600 bg-red-50 w-fit px-2 py-1 rounded-full text-sm">
                                            غیرفعال
                                        </span>
                                    )}
                                </td>
                                <td className="p-4">
                                    <button className='text-blue-950 hover:bg-blue-50 rounded-full p-1.5 transition'><PencilIcon size={20} /></button>
                                </td>
                                <td className="p-4">
                                    <button className='text-red-600 hover:bg-red-50 rounded-full p-1.5 transition'><Trash2Icon size={20} /></button>
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
                <div className="fixed inset-0 bg-black/50 flex items-center  justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl max-w-6xl  w-full p-6 shadow-xl">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-bold"> کارت‌های کاربر</h3>
                            <button onClick={() => setSelectedUserCards(null)} className="text-gray-500 hover:text-black text-2xl">&times;</button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-h-100 overflow-y-auto  " dir='ltr'>
                            {selectedUserCards.map(card => (
                                <>
                                    
                                </>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}