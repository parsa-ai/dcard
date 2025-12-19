
"use client";
import { useState } from 'react';
import { Search, ChevronLeft, ChevronRight, PencilIcon, Trash2Icon } from 'lucide-react';
import { Card } from '@/lib/type';
import { banks, usersData } from '@/lib/data';
import Image from 'next/image';
import { detectBank } from '@/lib/unit';
import StatusSelect from '@/app/components/Select';


export default function UsersPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedUserCards, setSelectedUserCards] = useState<Card[] | null>(null);
    const [statusFilter, setStatusFilter] = useState("all");



    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <h1 className="text-xl md:text-2xl font-bold text-gray-800">مدیریت کاربران</h1>
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                    <div className="relative flex-1 md:w-64">
                        <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="جستجوی نام یا شماره تلفن..."
                            className="w-full pr-10 pl-4 py-2 border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <StatusSelect
                        value={statusFilter}
                        onChange={setStatusFilter}
                    />
                </div>
            </div>

            <div className="hidden md:block overflow-x-auto border border-gray-100 rounded-xl">
                <table className="w-full text-center border-collapse">
                    <thead className="bg-gray-50 border-b border-gray-300">
                        <tr>
                            <th className="p-4 font-semibold text-gray-600">نام و خانوادگی</th>
                            <th className="p-4 font-semibold text-gray-600">شماره تماس</th>
                            <th className="p-4 font-semibold text-gray-600">کارت‌ها</th>
                            <th className="p-4 font-semibold text-gray-600">وضعیت</th>
                            <th className="p-4 font-semibold text-gray-600">ویرایش</th>
                            <th className="p-4 font-semibold text-gray-600">حذف</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usersData.map((user) => (
                            <tr key={user.id} className="border-b border-gray-100 transition-colors hover:bg-gray-50">
                                <td className="p-4">{user.name} {user.lastName}</td>
                                <td className="p-4 font-mono">{user.phone}</td>
                                <td className="p-4">
                                    <button onClick={() => setSelectedUserCards(user.cards)} className="text-blue-900 hover:underline mx-auto flex items-center gap-1">مشاهده</button>
                                </td>
                                <td className="p-4">
                                    <span className={`inline-flex px-2 py-1 rounded-full text-sm ${user.isActive === 1 ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'}`}>
                                        {user.isActive === 1 ? 'فعال' : 'غیرفعال'}
                                    </span>
                                </td>
                                <td className="p-4"><button className='text-blue-900 hover:bg-blue-50 rounded-full p-1.5'><PencilIcon size={20} /></button></td>
                                <td className="p-4"><button className='text-red-600 hover:bg-red-50 rounded-full p-1.5'><Trash2Icon size={20} /></button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="grid grid-cols-1 gap-4 md:hidden">
                {usersData.map((user) => (
                    <div key={user.id} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
                        <div className="flex justify-between items-start mb-3">
                            <div>
                                <h3 className="font-bold text-gray-800">{user.name} {user.lastName}</h3>
                                <p className="text-gray-500 text-sm font-mono mt-1">{user.phone}</p>
                            </div>
                            <span className={`px-2 py-1 rounded-full text-xs ${user.isActive === 1 ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'}`}>
                                {user.isActive === 1 ? 'فعال' : 'غیرفعال'}
                            </span>
                        </div>
                        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-50">
                            <button
                                onClick={() => setSelectedUserCards(user.cards)}
                                className="text-blue-700 text-sm font-medium"
                            >
                                مشاهده کارت‌ها
                            </button>
                            <div className="flex gap-2">
                                <button className="p-2 text-blue-900 bg-blue-50 rounded-lg"><PencilIcon size={18} /></button>
                                <button className="p-2 text-red-600 bg-red-50 rounded-lg"><Trash2Icon size={18} /></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4">
                <span className="text-sm text-gray-500 order-2 sm:order-1">نمایش ۵۰ کاربر</span>
                <div className="flex gap-2 w-full sm:w-auto order-1 sm:order-2">
                    <button className="flex-1 sm:flex-none flex items-center justify-center gap-1 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                        <ChevronRight size={18} /> قبلی
                    </button>
                    <button className="flex-1 sm:flex-none flex items-center justify-center gap-1 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800">
                        بعدی <ChevronLeft size={18} />
                    </button>
                </div>
            </div>

            {selectedUserCards && (
                <div className="fixed inset-0 bg-white/50 backdrop-blur-xs flex items-center  justify-center z-50 p-4 " onClick={() => setSelectedUserCards(null)}>
                    <div className="bg-white rounded-2xl max-w-6xl  w-full p-6 shadow-[0_0_20px] shadow-blue-500/30 -z-20">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-bold"> کارت‌های کاربر</h3>
                            <button onClick={() => setSelectedUserCards(null)} className="text-gray-500 hover:text-black text-4xl">&times;</button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 max-h-130 overflow-y-auto " dir='ltr'>
                            {selectedUserCards.map(card => {
                                const bankIcon = detectBank(card.number, banks);
                                return (
                                    <div className='flex items-end justify-end relative min-h-70 md:min-h-70 xl:min-h-51 '>
                                        <Image src={`/images/icons/${bankIcon}.png`} className='w-full absolute -z-10 object-cover h-full rounded-2xl ' width={300} height={160} alt={bankIcon} />
                                        <div className='m-4 w-full  text-black/70'>
                                            <p className='w-full text-2xl xl:text-3xl  text-center space-x-3.5 tracking-[0.4rem] mb-8 font-semibold'>{card?.number}</p>
                                            <div className='flex justify-between w-full'>
                                                <p>CVV2: {card?.cvv2 || "نامشخص"}</p>
                                                <p>انقضا: {card?.month}/{card?.year}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}