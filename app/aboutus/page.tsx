import Image from 'next/image';
import Navbar from '@/component/Navbar';
import Footer from '@/component/Footer';

// สินค้าและผลิตภัณฑ์ที่เชี่ยวชาญ
const highlights = [
  {
    title: 'อุปกรณ์ชุดทดสอบ Smoke & Heat Detector Universal',
    desc: 'อุปกรณ์สำหรับตรวจเช็กและทดสอบระบบแจ้งเหตุเพลิงไหม้ มาตรฐานสากล',
    icon: '⚡',
  },
  {
    title: 'อุปกรณ์ไฟฟ้าและอิเล็กทรอนิกส์ / ระบบสื่อสาร',
    desc: 'จัดหาอุปกรณ์ระบบไฟฟ้าและระบบสื่อสารสำหรับงานอุตสาหกรรมครบวงจร',
    icon: '🔌',
  },
  {
    title: 'อุปกรณ์ดับเพลิง และอุปกรณ์ความปลอดภัยในโรงงาน',
    desc: 'อุปกรณ์ความปลอดภัย อุปกรณ์เซฟตี้ (PPE) สำหรับสถานประกอบการ',
    icon: '🧯',
  },
  {
    title: 'มีดคัตเตอร์นิรภัย (Safety Cutter)',
    desc: 'ช่วยยกระดับความปลอดภัยในการทำงานของพนักงาน และลดอุบัติเหตุในสถานประกอบการ',
    icon: '✂️',
  },
  {
    title: 'สินค้าอุตสาหกรรมอื่นๆ ทุกชนิด',
    desc: 'บริการจัดหาและนำเข้าสินค้าอุตสาหกรรมตามความต้องการพิเศษของลูกค้า (Sourcing)',
    icon: '📦',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Navbar />

      {/* Hero / Header Section */}
      <section className="relative py-20 bg-gradient-to-b from-[#E6F5F5] via-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#009999]/10 text-[#009999] text-xs font-bold mb-4">
            🏢 ABOUT US — เกี่ยวกับเรา
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            บริษัท คิง เวิร์ค โซลูชั่น จำกัด <br />
            <span className="text-[#009999]">KING WORK SOLUTION CO., LTD.</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            ผู้นำเข้าและจัดจำหน่ายระบบป้องกันและดับเพลิง (Fire Protection System) รวมถึงระบบไฟฟ้าและระบบสื่อสาร (Electrical Communication System) แบบครบวงจร
          </p>
        </div>
      </section>

      {/* Main Vision & Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* ฝั่งข้อความอธิบาย */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-[#009999] font-bold text-sm">
                <span>🛡️</span> บริการระดับมืออาชีพ โดยทีมวิศวกรผู้เชี่ยวชาญ
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 leading-snug">
                มุ่งมั่นให้บริการเพื่อความปลอดภัยและประสิทธิภาพสูงสุดในสถานประกอบการ
              </h2>
              <p className="text-slate-600 leading-relaxed">
                เราให้บริการครอบคลุมตั้งแต่การ **ออกแบบ ติดตั้ง และวางแผนบำรุงรักษาระบบป้องกันเพลิงไหม้** ทั้งแบบรายเดือนและรายปี พร้อมให้คำปรึกษาอย่างใกล้ชิดโดยทีมงานวิศวกรผู้เชี่ยวชาญที่มีประสบการณ์สูง เพื่อให้มั่นใจในความปลอดภัยและประสิทธิภาพสูงสุดของระบบในสถานประกอบการของคุณ
              </p>
              <p className="text-slate-600 leading-relaxed">
                นอกจากนี้ เรายังเป็นผู้เชี่ยวชาญด้านการ **จัดหาและนำเข้าสินค้าอุตสาหกรรมทุกชนิดจากต่างประเทศ** เพื่อตอบสนองความต้องการที่หลากหลายของกลุ่มลูกค้าอุตสาหกรรม
              </p>

              {/* การ์ดเน้นย้ำจุดเด่น */}
              <div className="p-5 rounded-2xl bg-[#E6F5F5] border border-[#009999]/20">
                <p className="font-bold text-[#009999] text-base mb-1">
                  🤝 พันธมิตรที่ได้รับความไว้วางใจ
                </p>
                <p className="text-sm text-slate-600">
                  บริษัท คิง เวิร์ค โซลูชั่น จำกัด พร้อมเป็นพันธมิตรในการดูแลระบบความปลอดภัยและจัดหาสินค้าอุตสาหกรรมเพื่อขับเคลื่อนธุรกิจของคุณอย่างมั่นคงและปลอดภัย
                </p>
              </div>
            </div>

            {/* ฝั่งการ์ดแสดงช่องทางและจุดแข็ง */}
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-4">
                ขอบเขตบริการหลักของเรา
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-100 shadow-xs">
                  <span className="text-3xl">🧯</span>
                  <div>
                    <h4 className="font-bold text-slate-900">Fire Protection System</h4>
                    <p className="text-xs text-slate-500 mt-1">ออกแบบ ติดตั้ง และบำรุงรักษาระบบป้องกันและดับเพลิง</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-100 shadow-xs">
                  <span className="text-3xl">⚡</span>
                  <div>
                    <h4 className="font-bold text-slate-900">Electrical & Communication</h4>
                    <p className="text-xs text-slate-500 mt-1">จำหน่ายและติดตั้งระบบไฟฟ้าและอุปกรณ์สื่อสารครบวงจร</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-100 shadow-xs">
                  <span className="text-3xl">📦</span>
                  <div>
                    <h4 className="font-bold text-slate-900">Industrial Import & Sourcing</h4>
                    <p className="text-xs text-slate-500 mt-1">จัดหาและนำเข้าสินค้าอุตสาหกรรมคุณภาพสูงจากต่างประเทศ</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Highlights / Product Category Focus */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl font-extrabold text-slate-900">ผลิตภัณฑ์และสินค้าอุตสาหกรรม</h2>
          <p className="text-slate-500 mt-2">
            ครอบคลุมผลิตภัณฑ์คุณภาพสูงเพื่อยกระดับความปลอดภัยในสถานประกอบการ
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col justify-between"
            >
              <div>
                <span className="text-4xl block mb-4 p-3 bg-[#E6F5F5] w-fit rounded-2xl">
                  {item.icon}
                </span>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#009999] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#009999] to-teal-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            พร้อมให้คำปรึกษาและดูแลระบบความปลอดภัยของคุณ
          </h2>
          <p className="text-teal-100 max-w-2xl mx-auto text-sm sm:text-base">
            ติดต่อทีมงานวิศวกรผู้เชี่ยวชาญจาก บริษัท คิง เวิร์ค โซลูชั่น จำกัด เพื่อขอคำปรึกษา ออกแบบ หรือขอใบเสนอราคาได้ทันที
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a
              href="tel:0866194952"
              className="px-8 py-3.5 bg-white text-[#009999] font-bold rounded-xl hover:bg-slate-100 transition-all shadow-md"
            >
              📞 086-619-4952
            </a>
            <a
              href="https://line.me/ti/p/~kingworksafety"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3.5 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all shadow-md"
            >
              💬 LINE: kingworksafety
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}