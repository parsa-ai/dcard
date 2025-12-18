import Sidebar from '../components/Sidebar';

export const metadata = {
    title: 'Admin Panel',
    description: 'Next.js Admin Panel with Tailwind',
};

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex">
            <Sidebar />

            <main className="flex-1 mr-64 min-h-screen p-8">
                <section className="bg-white rounded-xl  border border-gray-200 p-6">
                    {children}
                </section>
            </main>
        </div>
    );
}