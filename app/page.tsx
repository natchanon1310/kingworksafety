import Image from 'next/image';
import Navbar from '@/component/Navbar';
import Hero from '@/component/Hero';
import ProductGrid from '@/component/ProductGrid';
import Footer from '@/component/Footer';

// บริการหลักของ King Work Safety
const services = [
  {
    title: 'งานออกแบบ ติดตั้ง และตรวจสอบระบบ Fire Alarm & Fire Protection',
    desc: 'ครอบคลุมระบบแจ้งเหตุเพลิงไหม้และระบบดับเพลิง มาตรฐานวิศวกรรม',
    icon: '🧯',
  },
  {
    title: 'จัดจำหน่ายมีดคัตเตอร์เซฟตี้ (Safety Cutters)',
    desc: 'อุปกรณ์ตัดนิรภัยสำหรับงานคลังสินค้าและโรงงาน ช่วยลดอุบัติเหตุจากการทำงาน',
    icon: '✂️',
  },
  {
    title: 'อุปกรณ์ความปลอดภัย (Safety Equipment & PPE)',
    desc: 'คัดสรรอุปกรณ์เซฟตี้คุณภาพสูง เพื่อการปกป้องที่ครอบคลุมทุกความเสี่ยง',
    icon: '🤿',
  },
  {
    title: 'บริหารโครงการโดยทีมวิศวกรผู้เชี่ยวชาญ',
    desc: 'ดูแลตั้งแต่การออกแบบ ติดตั้ง ทดสอบระบบ ไปจนถึงบริการหลังการขายและการดูแลลูกค้า',
    icon: '👷‍♂️',
  },
];

// โลโก้แบรนด์ Fire Protection
const fireProtectionBrands = [
  { id: 1, name: 'Brand 1', logo: '/images/S__20848652.jpg' },
  { id: 2, name: 'Brand 2', logo: '/images/S__20848658.jpg' },
  { id: 3, name: 'Brand 3', logo: '/images/S__20848656.jpg' },
  { id: 4, name: 'Brand 4', logo: '/images/S__20848655_0.jpg' },
  { id: 5, name: 'Brand 5', logo: '/images/S__20848657.jpg' },
];

// โลโก้แบรนด์ Safety
const safetyBrands = [
  { id: 1, name: 'Safety Brand 1', logo: '/images/safetyBrands/S__20848644_0.jpg' },
  { id: 2, name: 'Safety Brand 2', logo: '/images/safetyBrands/S__20848645_0.jpg' },
  { id: 3, name: 'Safety Brand 3', logo: '/images/safetyBrands/S__20848646.jpg' },
  { id: 4, name: 'Safety Brand 4', logo: '/images/safetyBrands/S__20848647.jpg' },
  { id: 5, name: 'Safety Brand 5', logo: '/images/safetyBrands/S__20848648.jpg' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. Services Section - บริการของเรา */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-extrabold text-slate-900">บริการของเรา</h2>
            <p className="text-slate-500 mt-2">
              บริการดูแลระบบแจ้งเหตุเพลิงไหม้และระบบป้องกันไฟไหม้โดยทีมงานผู้เชี่ยวชาญ
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#009999]/30 hover:bg-[#E6F5F5]/40 transition-all group"
              >
                <span className="text-4xl block mb-4">{service.icon}</span>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#009999] transition-colors leading-snug">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Product Grid Section */}
      <ProductGrid />

      {/* 5. Brands Section - แบรนด์สินค้าของเรา */}
      <section id="brands" className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-extrabold text-slate-900">ตัวอย่างแบรนด์สินค้าของเรา</h2>
            <p className="text-slate-500 mt-2">คัดสรรแบรนด์ชั้นนำระดับสากลเพื่อความปลอดภัยสูงสุด</p>
          </div>

          {/* กลุ่ม Fire Protection */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-[#009999] mb-6 flex items-center gap-2">
              <span>🔥</span> กลุ่ม Fire Protection
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {fireProtectionBrands.map((brand) => (
                <div
                  key={brand.id}
                  className="h-36 bg-white rounded-2xl border border-slate-200 flex items-center justify-center p-2 hover:border-[#009999] transition-all shadow-sm hover:shadow-md relative overflow-hidden group"
                >
                  {brand.logo ? (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={brand.logo}
                        alt={brand.name}
                        fill
                        sizes="(max-width: 768px) 50vw, 20vw"
                        className="object-contain p-0 transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  ) : (
                    <span className="text-slate-400 font-bold text-sm group-hover:text-[#009999] transition-colors">
                      {brand.name}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* กลุ่ม Safety */}
          <div>
            <h3 className="text-xl font-bold text-[#009999] mb-6 flex items-center gap-2">
              <span>🤿</span> กลุ่ม Safety
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {safetyBrands.map((brand) => (
                <div
                  key={brand.id}
                  className="h-36 bg-white rounded-2xl border border-slate-200 flex items-center justify-center p-2 hover:border-[#009999] transition-all shadow-sm hover:shadow-md relative overflow-hidden group"
                >
                  {brand.logo ? (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={brand.logo}
                        alt={brand.name}
                        fill
                        sizes="(max-width: 768px) 50vw, 20vw"
                        className="object-contain p-0 transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  ) : (
                    <span className="text-slate-400 font-bold text-sm group-hover:text-[#009999] transition-colors">
                      {brand.name}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Footer */}
      <Footer />
    </div>
  );
}