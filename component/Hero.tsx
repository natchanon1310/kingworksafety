import Image from 'next/image'; // 👈 เพิ่มการ import Next.js Image Component

export default function Hero() {
  return (
    <section className="relative pt-16 pb-20 bg-gradient-to-b from-[#E6F5F5] via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#009999]/10 text-[#009999] text-xs font-bold">
            🛡️ King Work Safety — มาตรฐานความปลอดภัยสากล
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight">
            ศูนย์รวมอุปกรณ์และระบบ <br />
            <span className="text-[#009999]">Fire & Safety แบบครบวงจร</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            บริการออกแบบ ติดตั้ง ตรวจสอบ และปรับปรุงระบบ Fire Detection & Fire Protection ครบวงจร โดยทีมงานผู้เชี่ยวชาญ พร้อมจัดจำหน่ายอุปกรณ์เซฟตี้มาตรฐานสากล เพื่อความปลอดภัยสูงสุดในสถานที่ทำงาน
          </p>

          <div className="grid sm:grid-cols-2 gap-3 pt-2">
            <div className="p-3 bg-white rounded-xl border border-slate-100 shadow-sm">
              <p className="font-bold text-sm text-[#009999]">📦 Industrial Sourcing & Import</p>
              <p className="text-xs text-slate-500 mt-1">จัดหาและนำเข้าสินค้าอุตสาหกรรมคุณภาพสูง</p>
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-100 shadow-sm">
              <p className="font-bold text-sm text-[#009999]">🧯 Fire & Safety Solutions</p>
              <p className="text-xs text-slate-500 mt-1">ออกแบบ ติดตั้ง บำรุงรักษาระบบดับเพลิงครบวงจร</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#contact"
              className="px-7 py-3.5 rounded-xl text-white font-bold bg-[#009999] hover:bg-[#007373] transition-all shadow-lg shadow-[#009999]/25"
            >
              ขอใบเสนอราคา / ติดต่อเรา
            </a>
            <a
              href="https://line.me"
              target="_blank"
              rel="noreferrer"
              className="px-7 py-3.5 rounded-xl text-slate-700 font-bold bg-white border border-slate-200 hover:bg-slate-100 transition-all shadow-sm"
            >
              LINE: kingworksafety
            </a>
          </div>
        </div>

        {/* Contact Card */}
      <div className="bg-white p-6 rounded-3xl shadow-xl border border-slate-100">
  <div className="p-8 rounded-2xl bg-gradient-to-br from-[#009999] to-teal-800 text-white text-center flex flex-col items-center">
    
    {/* โลโก้บริษัท - ปรับเป็นวงกลมสีขาว และขยายขนาดใหญ่ขึ้น */}
    <div className="relative w-36 h-36 mb-4 bg-white p-2 rounded-full shadow-lg flex items-center justify-center overflow-hidden">
      <Image
        src="/images/Kingworklogoss.png"
        alt="KING WORK SAFETY Logo"
        width={140}
        height={140}
        className="object-contain rounded-full"
      />
    </div>

    <h3 className="text-2xl font-bold">KING WORK SAFETY</h3>
    <p className="text-teal-100 text-sm mt-1">ดูแลโดยทีมงานและวิศวกรผู้เชี่ยวชาญ</p>
  </div>

  <div className="mt-6 space-y-3 text-sm text-slate-600 font-medium">
    <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
      <span>📱</span>
      <span>มือถือ: <strong className="text-slate-900">086-619-4952</strong></span>
    </div>
    <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
      <span>💬</span>
      <span>LINE: <strong className="text-slate-900">kingworksafety</strong></span>
    </div>
    <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
      <span>✉️</span>
      <span>Email: <strong className="text-slate-900">kingworksafety@gmail.com</strong></span>
    </div>
  </div>
</div>
      </div>
    </section>
  );
}