import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo with Image */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-18 h-18 flex items-center justify-center">
            <Image
              src="/images/S__20946946.jpg" // เปลี่ยนเส้นทาง/ชื่อไฟล์โลโก้ของคุณตรงนี้ได้เลยครับ (เช่น /images/S__20848652.jpg หรือ /images/logo.png)
              alt="King Work Safety Logo"
              fill
              sizes="48px"
              className="object-contain transition-transform group-hover:scale-105"
              priority
            />
          </div>
          <div>
            <span className="text-xl font-extrabold tracking-tight text-slate-900 block leading-tight">
              KING WORK <span className="text-[#009999]">SAFETY</span>
            </span>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
              By king work solution co.,Ltd
            </span>
          </div>
        </Link>

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <Link href="/" className="text-[#009999] font-semibold">หน้าแรก</Link>
          <a href="/aboutus" className="hover:text-[#009999] transition-colors">เกี่ยวกับเรา</a>
          <a href="/product" className="hover:text-[#009999] transition-colors">สินค้า / PRODUCTs</a>
          <a href="/howtobuy" className="hover:text-[#009999] transition-colors">วิธีการสั่งซื้อ</a>
          <a href="contactus" className="hover:text-[#009999] transition-colors">ติดต่อเรา</a>
        </nav>

        {/* Contact CTA */}
        <a
          href="https://line.me/ti/p/~kingworksafety"
          target="_blank"
          rel="noreferrer"
          className="px-5 py-2.5 rounded-full text-sm font-bold text-white bg-[#009999] hover:bg-[#007373] transition-all shadow-md shadow-[#009999]/20 flex items-center gap-2"
        >
          <span>💬</span> ติดต่อสอบถาม (LINE)
        </a>
      </div>
    </header>
  );
}