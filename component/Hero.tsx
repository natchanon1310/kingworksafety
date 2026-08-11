import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative pt-10 sm:pt-16 pb-16 sm:pb-20 bg-gradient-to-b from-[#E6F5F5] via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Column: Content */}
        <div className="space-y-6 text-left">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#009999]/10 text-[#009999] text-xs sm:text-sm font-bold">
            🛡️ King Work Safety — มาตรฐานความปลอดภัยสากล
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
            ศูนย์รวมอุปกรณ์และระบบ <br className="hidden sm:block" />
            <span className="text-[#009999]">Fire & Safety แบบครบวงจร</span>
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">
            บริการออกแบบ ติดตั้ง ตรวจสอบ และปรับปรุงระบบ Fire Detection & Fire Protection ครบวงจร โดยทีมงานผู้เชี่ยวชาญ พร้อมจัดจำหน่ายอุปกรณ์เซฟตี้มาตรฐานสากล เพื่อความปลอดภัยสูงสุดในสถานที่ทำงาน
          </p>

          <div className="grid sm:grid-cols-2 gap-3 pt-2">
            <div className="p-3.5 bg-white rounded-xl border border-slate-100 shadow-sm">
              <p className="font-bold text-sm text-[#009999]">📦 Industrial Sourcing & Import</p>
              <p className="text-xs text-slate-500 mt-1">จัดหาและนำเข้าสินค้าอุตสาหกรรมคุณภาพสูง</p>
            </div>
            <div className="p-3.5 bg-white rounded-xl border border-slate-100 shadow-sm">
              <p className="font-bold text-sm text-[#009999]">🧯 Fire & Safety Solutions</p>
              <p className="text-xs text-slate-500 mt-1">ออกแบบ ติดตั้ง บำรุงรักษาระบบดับเพลิงครบวงจร</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">
            <a
              href="#contact"
              className="w-full sm:w-auto text-center px-7 py-3.5 rounded-xl text-white font-bold bg-[#009999] hover:bg-[#007373] transition-all shadow-lg shadow-[#009999]/25"
            >
              ขอใบเสนอราคา / ติดต่อเรา
            </a>
            <a
              href="https://line.me/ti/p/~kingworksafety"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto text-center px-7 py-3.5 rounded-xl text-slate-700 font-bold bg-white border border-slate-200 hover:bg-slate-100 transition-all shadow-sm"
            >
              LINE: kingworksafety
            </a>
          </div>
        </div>

        {/* Right Column: Contact Card */}
        <div className="bg-white p-4 sm:p-6 rounded-3xl shadow-xl border border-slate-100">
          {/* ปรับเป็นพื้นหลังโทนสว่างไล่เฉด เพื่อให้โลโก้เด่นชัดที่สุด */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#E6F5F5] via-teal-50/50 to-slate-50 border border-[#009999]/15 text-center flex flex-col items-center">
            
            {/* โลโก้ขนาดใหญ่บนพื้นหลังสว่าง */}
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 mb-2 flex items-center justify-center">
              <Image
                src="/images/Kingworklogoss.png"
                alt="KING WORK SAFETY Logo"
                fill
                sizes="(max-width: 640px) 144px, 176px"
                className="object-contain"
                priority
              />
            </div>

            <h3 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
              KING WORK <span className="text-[#009999]">SAFETY</span>
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm mt-1 font-medium">
              ดูแลโดยทีมงานและวิศวกรผู้เชี่ยวชาญ
            </p>
          </div>

          <div className="mt-4 sm:mt-6 space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-slate-600 font-medium">
            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
              <span className="text-base sm:text-lg">📱</span>
              <span>มือถือ: <strong className="text-slate-900">086-619-4952</strong></span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
              <span className="text-base sm:text-lg">💬</span>
              <span>LINE: <strong className="text-slate-900">kingworksafety</strong></span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl overflow-hidden text-ellipsis">
              <span className="text-base sm:text-lg shrink-0">✉️</span>
              <span className="truncate">Email: <strong className="text-slate-900">kingworksafety@gmail.com</strong></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}