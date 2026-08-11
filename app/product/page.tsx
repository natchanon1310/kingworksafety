import Image from 'next/image';
import Navbar from '@/component/Navbar';
import Footer from '@/component/Footer';

// ==========================================
// 1. ข้อมูลสินค้ากลุ่ม Fire Protection (14 รายการ)
// ==========================================
const fireProtectionProducts = [
  {
    id: 1,
    title: 'ES3 Solo 365',
    desc: 'Singular Replacement Smoke Cartridge',
    badge: 'ยอดนิยม',
    image: '/images/protaction/product/ES3-Solo-365.jpg',
  },
  {
    id: 2,
    title: 'Solo 200',
    desc: 'Detector Removal Tool',
    badge: 'สินค้าขายดี',
    image: '/images/protaction/product/Solo 200 Detector.jpg',
  },
  {
    id: 3,
    title: 'Solo 823',
    desc: 'Smoke Detector Test & Removal Set 9 m.',
    badge: 'ครบเซต',
    image: '/images/protaction/product/Solo 823.png',
  },
  {
    id: 4,
    title: 'Solo 822',
    desc: 'Smoke Detector Test & Removal Set 6 m.',
    badge: 'ครบเซต',
    image: '/images/protaction/product/Solo 822.jpg',
  },
  {
    id: 5,
    title: 'Solo 814',
    desc: 'Smoke Detector Test & Removal Set 6 m.',
    badge: 'ครบเซต',
    image: '/images/protaction/product/Solo 814.jpg',
  },
  {
    id: 6,
    title: 'Solo 811',
    desc: 'Smoke Detector Test & Removal Set 6 m.',
    badge: 'ครบเซต',
    image: '/images/protaction/product/Solo 811.jpg',
  },
  {
    id: 7,
    title: 'Solo 365',
    desc: 'Smoke Detector Tester',
    badge: 'รุ่นใหม่',
    image: '/images/protaction/product/Solo 365.jpg',
  },
  {
    id: 8,
    title: 'Solo 330',
    desc: 'Aerosol Smoke and CO Dispenser',
    badge: 'แนะนำ',
    image: '/images/protaction/product/Solo 330.jpg',
  },
  {
    id: 9,
    title: 'Solo 461',
    desc: 'Cordless Heat Detector Tester',
    badge: 'แนะนำ',
    image: '/images/protaction/product/Solo 461.png',
  },
  {
    id: 10,
    title: 'Solo 424',
    desc: 'Heat Detector Tester (Mains Powered)',
    badge: 'มาตรฐาน',
    image: '/images/protaction/product/Solo 424.jpeg',
  },
  {
    id: 11,
    title: 'Solo 100 /101/108',
    desc: 'Telescopic Access Poles',
    badge: 'แท้ 100%',
    image: '/images/protaction/product/Solo 100-101-108.jpg',
  },
  {
    id: 12,
    title: 'Solo 770',
    desc: 'High Capacity Cordless Battery Baton',
    badge: 'อุปกรณ์เสริม',
    image: '/images/protaction/product/Solo 770.png',
  },
  {
    id: 13,
    title: 'Solo 727',
    desc: 'Charger (สำหรับ Solo 770 Battery Baton)',
    badge: 'อุปกรณ์เสริม',
    image: '/images/protaction/product/Solo 727.jpeg',
  },
  {
    id: 14,
    title: 'Solo 610',
    desc: 'Protective Storage / Carry Case For Detector Test Equipment',
    badge: 'บำรุงรักษา',
    image: '/images/protaction/product/Solo 610.jpg',
  },
];

// ==========================================
// 2. ข้อมูลสินค้ากลุ่ม Safety Cutter (7 รายการ)
// ==========================================
// const safetyCutterProducts = [
//   {
//     id: 1,
//     title: 'SECUMAX 320 (Code No. 32000110.02)',
//     desc: 'คัตเตอร์นิรภัยใบมีดซ่อน (Concealed Blade) สำหรับตัดฟิล์มสเตรทช์ เทปกาว และกล่องกระดาษ ปลอดภัยสูงสุด',
//     badge: 'เซฟตี้สูงสุด',
//     image: '/images/safetyBrands/product/images.jpeg',
//   },
//   {
//     id: 2,
//     title: 'INDUSTRIAL BLADE NO. 92043 (Code No. 92043.66)',
//     desc: 'ใบมีดอะไหล่อุตสาหกรรมคุณภาพสูง คมนาน เหมาะสำหรับเปลี่ยนใส่ในคัตเตอร์ SECUMAX 320',
//     badge: 'อะไหล่แท้',
//     image: '/images/safetyBrands/product/66bc66f411ddd.jpg',
//   },
//   {
//     id: 3,
//     title: 'SECUMAX 350 (Code No. 350001.02)',
//     desc: 'คัตเตอร์เซฟตี้อเนกประสงค์ ใบมีดซ่อนพร้อมหัวเจาะเทปกาวในตัว เปลี่ยนหัวใบมีดได้ง่ายและปลอดภัย',
//     badge: 'สินค้าแนะนำ',
//     image: '/images/safetyBrands/product/231440-wb1.jpg',
//   },
//   {
//     id: 4,
//     title: 'SECUMAX BLADE NO. 3550 (Code No. 3550.20)',
//     desc: 'ตลับใบมีดสำรองแท้สำหรับ SECUMAX 350 มี 2 คมตัดในหัวเดียว ปลอดภัยขณะเปลี่ยนใบมีด',
//     badge: 'อะไหล่แท้',
//     image: '/images/safetyBrands/product/66b2de021c449.jpg',
//   },
//   {
//     id: 5,
//     title: 'SECUPRO 625 (Code No. 625001.02)',
//     desc: 'มีดคัตเตอร์นิรภัยด้ามอลูมิเนียม Heavy Duty ใบมีดดึงกลับอัตโนมัติเมื่อตัดเสร็จ (Fully Automatic Retraction)',
//     badge: 'Heavy Duty',
//     image: '/images/safetyBrands/product/images (1).jpeg',
//   },
//   {
//     id: 6,
//     title: 'TRAPEZOID BLADE NO. 60099 (Code No. 60099.70)',
//     desc: 'ใบมีดทรงคางหมูคุณภาพสูง ทนทานพิเศษ สำหรับเปลี่ยนใส่คัตเตอร์นิรภัยกลุ่ม SECUPRO และ SECUNORM',
//     badge: 'อะไหล่แท้',
//     image: '/images/safetyBrands/product/sollex_trapezoid-blade-60099-70-for-safety-knives.webp',
//   },
//   {
//     id: 7,
//     title: 'SECUNORM 525 (Code No. 525001.17)',
//     desc: 'มีดคัตเตอร์เซฟตี้ด้ามอลูมิเนียม สไลด์ใบมีดด้านบน ใบมีดดึงกลับอัตโนมัติ (Automatic Retraction) ป้องกันอุบัติเหตุ',
//     badge: 'ความปลอดภัยสูง',
//     image: '/images/safetyBrands/product/598088.jpg',
//   },
//   {
//     id: 8,
//     title: 'CERAMIC BLADE NO. 60099C (Code No. 1760099.25)',
//     desc: 'ใบมีดเซรามิกคุณภาพสูง คมนานกว่าเหล็กทั่วไปถึง 12 เท่า ไม่เป็นสนิม เหมาะสำหรับงานอุตสาหกรรมเฉพาะทาง',
//     badge: 'ใบมีดเซรามิก',
//     image: '/images/safetyBrands/product/51+kbht2EQL.jpg',
//   },
// ];

// ==========================================
// 2. ข้อมูลสินค้ากลุ่ม Safety Cutter (แบ่งตามยี่ห้อ)
// ==========================================

// 2.1 แบรนด์ MARTOR (8 รายการตามข้อมูลก่อนหน้า)
const martorProducts = [
  
   {
    id: 1,
    title: 'SECUMAX 320 (Code No. 32000110.02)',
    desc: 'คัตเตอร์นิรภัยใบมีดซ่อน (Concealed Blade) สำหรับตัดฟิล์มสเตรทช์ เทปกาว และกล่องกระดาษ ปลอดภัยสูงสุด',
    badge: 'เซฟตี้สูงสุด',
    image: '/images/safetyBrands/product/images.jpeg',
  },
  {
    id: 2,
    title: 'INDUSTRIAL BLADE NO. 92043 (Code No. 92043.66)',
    desc: 'ใบมีดอะไหล่อุตสาหกรรมคุณภาพสูง คมนาน เหมาะสำหรับเปลี่ยนใส่ในคัตเตอร์ SECUMAX 320',
    badge: 'อะไหล่แท้',
    image: '/images/safetyBrands/product/66bc66f411ddd.jpg',
  },
  {
    id: 3,
    title: 'SECUMAX 350 (Code No. 350001.02)',
    desc: 'คัตเตอร์เซฟตี้อเนกประสงค์ ใบมีดซ่อนพร้อมหัวเจาะเทปกาวในตัว เปลี่ยนหัวใบมีดได้ง่ายและปลอดภัย',
    badge: 'สินค้าแนะนำ',
    image: '/images/safetyBrands/product/231440-wb1.jpg',
  },
  {
    id: 4,
    title: 'SECUMAX BLADE NO. 3550 (Code No. 3550.20)',
    desc: 'ตลับใบมีดสำรองแท้สำหรับ SECUMAX 350 มี 2 คมตัดในหัวเดียว ปลอดภัยขณะเปลี่ยนใบมีด',
    badge: 'อะไหล่แท้',
    image: '/images/safetyBrands/product/66b2de021c449.jpg',
  },
  {
    id: 5,
    title: 'SECUPRO 625 (Code No. 625001.02)',
    desc: 'มีดคัตเตอร์นิรภัยด้ามอลูมิเนียม Heavy Duty ใบมีดดึงกลับอัตโนมัติเมื่อตัดเสร็จ (Fully Automatic Retraction)',
    badge: 'Heavy Duty',
    image: '/images/safetyBrands/product/images (1).jpeg',
  },
  {
    id: 6,
    title: 'TRAPEZOID BLADE NO. 60099 (Code No. 60099.70)',
    desc: 'ใบมีดทรงคางหมูคุณภาพสูง ทนทานพิเศษ สำหรับเปลี่ยนใส่คัตเตอร์นิรภัยกลุ่ม SECUPRO และ SECUNORM',
    badge: 'อะไหล่แท้',
    image: '/images/safetyBrands/product/sollex_trapezoid-blade-60099-70-for-safety-knives.webp',
  },
  {
    id: 7,
    title: 'SECUNORM 525 (Code No. 525001.17)',
    desc: 'มีดคัตเตอร์เซฟตี้ด้ามอลูมิเนียม สไลด์ใบมีดด้านบน ใบมีดดึงกลับอัตโนมัติ (Automatic Retraction) ป้องกันอุบัติเหตุ',
    badge: 'ความปลอดภัยสูง',
    image: '/images/safetyBrands/product/598088.jpg',
  },
  {
    id: 8,
    title: 'CERAMIC BLADE NO. 60099C (Code No. 1760099.25)',
    desc: 'ใบมีดเซรามิกคุณภาพสูง คมนานกว่าเหล็กทั่วไปถึง 12 เท่า ไม่เป็นสนิม เหมาะสำหรับงานอุตสาหกรรมเฉพาะทาง',
    badge: 'ใบมีดเซรามิก',
    image: '/images/safetyBrands/product/51+kbht2EQL.jpg',
  },
];

// 2.2 แบรนด์ Slice (4 รายการ)
const sliceProducts = [
  {
    id: 's1',
    title: 'Slice Auto-Retractable Utility Knife (10554)',
    desc: 'มีดคัตเตอร์เซรามิคนิรภัยดึงกลับอัตโนมัติ ใบมีดดึงกลับเองเมื่อปล่อยปุ่ม ปลอดภัยสูง ทนทาน ไม่เป็นสนิม',
    badge: 'Slice',
    image: '/images/safetyBrands/product/slice/Utility Knife 10554.jpeg',
  },
  {
    id: 's2',
    title: 'Slice Manual Slim Pen Cutter (10476)',
    desc: 'มีดคัตเตอร์ปากกาเซรามิคนิรภัย ดีไซน์บางเพรียว จับถนัดมือ เหมาะสำหรับงานตัดที่ต้องการความแม่นยำ',
    badge: 'Slice',
    image: '/images/safetyBrands/product/slice/Slim Pen Cutter 10476.jpeg',
  },
  {
    id: 's3',
    title: 'Slice Super-Safe Carton Opener (10477)',
    desc: 'มีดเปิดกล่องนิรภัยเซรามิก ออกแบบมาเพื่อเปิดกล่องพัสดุและกล่องกระดาษได้อย่างรวดเร็ว ปลอดภัยต่อสินค้าภายใน',
    badge: 'Slice',
    image: '/images/safetyBrands/product/slice/Carton Opener 10477.jpeg',
  },
  {
    id: 's4',
    title: 'Slice Auto-Retractable Pen Cutter (10512)',
    desc: 'มีดคัตเตอร์ปากกาเซรามิคนิรภัย ระบบดึงกลับอัตโนมัติ พกพาง่าย ปลอดภัยเมื่อสัมผัสผิวหนัง',
    badge: 'Slice',
    image: '/images/safetyBrands/product/slice/Pen Cutter 10512.png',
  },
];

// 2.3 แบรนด์ OLFA (4 รายการ)
const olfaProducts = [
  {
    id: 'o1',
    title: 'มีดคัตเตอร์เซฟตี้สแตนเลสสำหรับงานอาหาร H535 001 O01',
    desc: 'คัตเตอร์เซฟตี้สแตนเลสเกรดอาหาร (Food Grade) ออกแบบเพื่ออุตสาหกรรมอาหารและยา ล้างทำความสะอาดง่าย ไม่เป็นสนิม',
    badge: 'Food Grade',
    image: '/images/safetyBrands/product/olfa/H535 001 O01.jpg',
  },
  {
    id: 'o2',
    title: 'มีดเซฟตี้ OLFA ใช้งานอเนกประสงค์ รุ่น SK-3',
    desc: 'คัตเตอร์นิรภัยอเนกประสงค์ ด้ามจับกระชับมือ ใบมีดดึงกลับอัตโนมัติเมื่อปล่อยมือจากปุ่มสไลด์ เหมาะสำหรับงานตัดทั่วไป',
    badge: 'OLFA',
    image: '/images/safetyBrands/product/olfa/OLFA SK-3.jpg',
  },
  {
    id: 'o3',
    title: 'มีดเซฟตี้ OLFA รุ่น Auto-Guard SK-6',
    desc: 'มีดเซฟตี้ระบบป้องกันอันตรายระดับสูง ฝาครอบใบมีดจะเด้งปิดอัตโนมัติทันทีที่ตัดชิ้นงานเสร็จ ป้องกันอุบัติเหตุได้ 100%',
    badge: 'Auto-Guard',
    image: '/images/safetyBrands/product/olfa/OLFA SK-6.webp',
  },
  {
    id: 'o4',
    title: 'มีดเซฟตี้ OLFA รุ่น SK-7',
    desc: 'มีดคัตเตอร์นิรภัยขนาดคอมแพกต์ พกพาง่าย น้ำหนักเบา ระบบใบมีดดึงกลับอัตโนมัติ เหมาะสำหรับงานเปิดกล่องและตัดพัสดุ',
    badge: 'OLFA',
    image: '/images/safetyBrands/product/olfa/OLFA SK-7.jpeg',
  },
];


export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Navbar />

      {/* Header Banner */}
      <section className="py-16 bg-gradient-to-b from-[#E6F5F5] via-white to-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#009999]/10 text-[#009999] text-xs font-bold mb-3">
            📦 PRODUCT CATALOG — รายการสินค้าของเรา
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            สินค้าและอุปกรณ์ <span className="text-[#009999]">Fire & Safety</span>
          </h1>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            คัดสรรอุปกรณ์ทดสอบระบบแจ้งเหตุเพลิงไหม้ และอุปกรณ์นิรภัยสำหรับโรงงานมาตรฐานสากล
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        
        {/* ==========================================
            กลุ่มที่ 1: กลุ่ม Fire Protection (14 รายการ)
           ========================================== */}
        <section id="fire-protection">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-slate-200">
            <div>
              <span className="text-[#009999] font-bold text-xs uppercase tracking-wider block mb-1">
                CATEGORY 01
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-2">
                <span>🔥</span> กลุ่ม Fire Protection
              </h2>
              <p className="text-slate-500 text-sm mt-1">
                อุปกรณ์ชุดทดสอบ Smoke Detector & Heat Detector Universal และอุปกรณ์ระบบไฟอาราม
              </p>
            </div>
            <span className="mt-2 sm:mt-0 text-xs font-bold px-3 py-1 bg-[#E6F5F5] text-[#009999] rounded-full w-fit">
              รวม 14 รายการ
            </span>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {fireProtectionProducts.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-xs hover:shadow-xl hover:border-[#009999]/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative w-full h-48 bg-white flex items-center justify-center p-4 border-b border-slate-50">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 25vw"
                        className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <span className="text-4xl">🧯</span>
                    )}
                    <span className="absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 bg-[#E6F5F5] text-[#009999] rounded-full shadow-xs border border-[#009999]/20">
                      {item.badge}
                    </span>
                  </div>

                  <div className="p-5 bg-white">
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-[#009999] transition-colors leading-snug line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-2 leading-relaxed line-clamp-2">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

    
        {/* ==========================================
            กลุ่มที่ 2: กลุ่ม Safety Cutter (แบ่งตามยี่ห้อ)
           ========================================== */}
        <section id="safety-cutter" className="space-y-12">
          {/* Main Category Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-4 border-b border-slate-200">
            <div>
              <span className="text-[#009999] font-bold text-xs uppercase tracking-wider block mb-1">
                CATEGORY 02
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-2">
                <span>✂️</span> กลุ่ม Safety Cutter
              </h2>
              <p className="text-slate-500 text-sm mt-1">
                มีดคัตเตอร์นิรภัยและอุปกรณ์ตัดปลอดภัย มาตรฐานแบรนด์ชั้นนำระดับโลก
              </p>
            </div>
            <span className="mt-2 sm:mt-0 text-xs font-bold px-3 py-1 bg-[#E6F5F5] text-[#009999] rounded-full w-fit">
              รวม 16 รายการ
            </span>
          </div>

          {/* ------------------------------------------
              Sub-brand 1: MARTOR (8 รายการ)
             ------------------------------------------ */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-6 bg-[#009999] rounded-full inline-block"></span>
              <h3 className="text-xl font-bold text-slate-800">MARTOR Safety Knives & Blades</h3>
              <span className="text-xs text-slate-400 font-medium">(8 รายการ)</span>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {martorProducts.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-xs hover:shadow-xl hover:border-[#009999]/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative w-full h-48 bg-white flex items-center justify-center p-4 border-b border-slate-50">
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 25vw"
                          className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <span className="text-4xl">✂️</span>
                      )}
                      <span className="absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 bg-slate-900 text-white rounded-full shadow-xs">
                        {item.badge}
                      </span>
                    </div>

                    <div className="p-5 bg-white">
                      <h4 className="text-base font-bold text-slate-900 group-hover:text-[#009999] transition-colors leading-snug line-clamp-2">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-2 leading-relaxed line-clamp-2">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ------------------------------------------
              Sub-brand 2: Slice (4 รายการ)
             ------------------------------------------ */}
          <div className="space-y-4 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-6 bg-[#009999] rounded-full inline-block"></span>
              <h3 className="text-xl font-bold text-slate-800">Slice Ceramic Safety Cutters</h3>
              <span className="text-xs text-slate-400 font-medium">(4 รายการ)</span>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {sliceProducts.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-xs hover:shadow-xl hover:border-[#009999]/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative w-full h-48 bg-white flex items-center justify-center p-4 border-b border-slate-50">
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 25vw"
                          className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <span className="text-4xl">✂️</span>
                      )}
                      <span className="absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 bg-orange-500 text-white rounded-full shadow-xs">
                        {item.badge}
                      </span>
                    </div>

                    <div className="p-5 bg-white">
                      <h4 className="text-base font-bold text-slate-900 group-hover:text-[#009999] transition-colors leading-snug line-clamp-2">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-2 leading-relaxed line-clamp-2">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ------------------------------------------
              Sub-brand 3: OLFA (4 รายการ)
             ------------------------------------------ */}
          <div className="space-y-4 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-6 bg-[#009999] rounded-full inline-block"></span>
              <h3 className="text-xl font-bold text-slate-800">OLFA Japan Safety Cutters</h3>
              <span className="text-xs text-slate-400 font-medium">(4 รายการ)</span>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {olfaProducts.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-xs hover:shadow-xl hover:border-[#009999]/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative w-full h-48 bg-white flex items-center justify-center p-4 border-b border-slate-50">
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 25vw"
                          className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <span className="text-4xl">✂️</span>
                      )}
                      <span className="absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 bg-yellow-400 text-slate-900 rounded-full shadow-xs">
                        {item.badge}
                      </span>
                    </div>

                    <div className="p-5 bg-white">
                      <h4 className="text-base font-bold text-slate-900 group-hover:text-[#009999] transition-colors leading-snug line-clamp-2">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-2 leading-relaxed line-clamp-2">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>

      <Footer />
    </div>
  );
}