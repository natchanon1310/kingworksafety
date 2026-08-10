export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div>
          <h4 className="text-white font-extrabold text-xl mb-4">KING WORK SAFETY</h4>
          <p className="text-sm text-slate-400 leading-relaxed">
            บริการออกแบบ ติดตั้ง ตรวจสอบ และปรับปรุงระบบ Fire Detection & Fire Protection ครบวงจร พร้อมจัดจำหน่ายอุปกรณ์ Safety มาตรฐานสากล
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">ช่องทางติดต่อ</h4>
          <ul className="space-y-3 text-sm text-slate-400">
            <li>📞 มือถือ: <strong>086-619-4952</strong></li>
            <li>💬 LINE ID: <strong>kingworksafety</strong></li>
            <li>✉️ Email: <strong>kingworksafety@gmail.com</strong></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">บริการของเรา</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>• Industrial Sourcing & Import</li>
            <li>• Fire & Safety Solutions</li>
            <li>• Safety Cutters (มีดคัตเตอร์เซฟตี้)</li>
            <li>• Safety Equipment & PPE</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} King Work Safety. All Rights Reserved.
      </div>
    </footer>
  );
}