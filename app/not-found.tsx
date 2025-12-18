import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='w-full h-screen flex justify-center items-center flex-col gap-12 '>
      <h2 className='text-7xl font-bold text-blue-950  '>صفحه مورد نظر پیدا نشد</h2>
      <span className='fixed text-[600px] -z-30 -translate-y-15 borderText font-medium text-blue-50'>404</span>
      <Link href="/dashboard/users" className='text-2xl text-center font-bold pb-2  text-blue-800  transition border-b border-blue-800'>بازگشت به داشبورد</Link>
    </div>
  )
}