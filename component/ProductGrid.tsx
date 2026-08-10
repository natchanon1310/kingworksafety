const products = [
  {
    id: 1,
    title: 'ชุดทดสอบ SOLO (Solo Test Kits)',
    desc: 'อุปกรณ์ทดสอบ Smoke & Heat Detector ครบชุด ปลอดภัยสูง สำหรับช่างมืออาชีพ',
    badge: 'สินค้าขายดี',
  },
  {
    id: 2,
    title: 'ด้ามทดสอบไฟเบอร์กลาส (Solo Telescopic Poles)',
    desc: 'ด้ามต่อความสูงฉนวนไฟเบอร์กลาส ปลอดภัย ไม่นำไฟฟ้า น้ำหนักเบา',
    badge: 'นำเข้าแท้ 100%',
  },
  {
    id: 3,
    title: 'สเปรย์ทดสอบ Smoke Detector',
    desc: 'สเปรย์ควันจำลองคุณภาพสูง ไม่ทิ้งคราบสะสมบนหัวตรวจจับ',
    badge: 'ราคาส่ง',
  },
  {
    id: 4,
    title: 'ตู้ควบคุมและอุปกรณ์ Fire Alarm',
    desc: 'Fire Alarm Control Panel, Strobe Light, Manual Pull Station และอุปกรณ์ประกอบ',
    badge: 'ครบวงจร',
  },
];

export default function ProductGrid() {
  return (
    <section id="products" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h2 className="text-3xl font-extrabold text-slate-900">หมวดหมู่สินค้าแนะนำ</h2>
        <p className="text-slate-500 mt-2">สินค้าอุตสาหกรรมและอุปกรณ์ตรวจสอบสัญญาณแจ้งเหตุเพลิงไหม้</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group"
          >
            <div>
              <span className="text-[11px] font-bold px-2.5 py-1 bg-[#E6F5F5] text-[#009999] rounded-full inline-block mb-4">
                {item.badge}
              </span>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#009999] transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                {item.desc}
              </p>
            </div>
            <button className="mt-6 w-full py-2.5 rounded-lg border border-[#009999] text-[#009999] font-bold text-sm hover:bg-[#009999] hover:text-white transition-colors">
              สอบถามราคา
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}