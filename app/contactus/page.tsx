'use client';

import React, { useState } from 'react';
import Navbar from '@/component/Navbar';
import Footer from '@/component/Footer';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('ส่งข้อความเรียบร้อยแล้ว เจ้าหน้าที่จะติดต่อกลับโดยเร็วที่สุดครับ');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Navbar />

      {/* Header Banner */}
      <section className="py-14 bg-gradient-to-b from-[#E6F5F5] via-white to-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#009999]/10 text-[#009999] text-xs font-bold mb-3">
            📍 CONTACT US — ติดต่อเรา
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            ช่องทางการติดต่อและที่ตั้งบริษัท
          </h1>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            ยินดีให้คำปรึกษาเกี่ยวกับสินค้าและบริการ สอบถามข้อมูลเพิ่มเติมได้ตามช่องทางด้านล่าง
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        
        {/* ==========================================
            ส่วนติดต่อสั่งซื้อ / สอบถาม (Form + Info)
           ========================================== */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-md">
          <div className="mb-8">
            <span className="text-[#009999] font-bold text-xs uppercase tracking-wider block mb-1">
              CONTACT & INQUIRY
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              ติดต่อสั่งซื้อสินค้า / ขอใบเสนอราคา
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              กรอกข้อมูลเพื่อส่งข้อความถึงเรา หรือติดต่อผ่านเบอร์โทรศัพท์และช่องทางด้านล่างได้ทันที
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            
            {/* ด้านซ้าย: ช่องทางติดต่อ & เบอร์โทรศัพท์ */}
            <div className="space-y-6 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                ช่องทางการติดต่อเจ้าหน้าที่
              </h3>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#009999] text-white flex items-center justify-center shrink-0 shadow-xs">
                  📞
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">เบอร์โทรศัพท์ติดต่อ</h4>
                  <p className="text-lg font-extrabold text-slate-900 mt-0.5">086-6194952</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#E6F5F5] text-[#009999] flex items-center justify-center shrink-0">
                  ⏰
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">เวลาทำการ</h4>
                  <p className="text-sm font-semibold text-slate-800 mt-0.5">จันทร์ - ศุกร์: 08:30 - 17:30 น.</p>
                  <p className="text-xs text-slate-500">เสาร์: 08:30 - 12:00 น. (หยุดวันอาทิตย์)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#E6F5F5] text-[#009999] flex items-center justify-center shrink-0">
                  ✉️
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">อีเมลสำหรับขอใบเสนอราคา</h4>
                  <p className="text-sm font-semibold text-slate-800 mt-0.5">kingworksafety@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#E6F5F5] text-[#009999] flex items-center justify-center shrink-0">
                  💬
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">LINE Official Account</h4>
                  <p className="text-sm font-semibold text-[#009999] mt-0.5">@kingworksafety</p>
                </div>
              </div>
            </div>

            {/* ด้านขวา: ฟอร์มส่งข้อความ */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  ชื่อ-นามสกุล / ชื่อบริษัท <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="กรุณากรอกชื่อของคุณ หรือชื่อบริษัท"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#009999] focus:ring-2 focus:ring-[#009999]/20 transition-all bg-white"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    เบอร์โทรศัพท์ติดต่อ <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="08X-XXX-XXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#009999] focus:ring-2 focus:ring-[#009999]/20 transition-all bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    อีเมล
                  </label>
                  <input
                    type="email"
                    placeholder="example@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#009999] focus:ring-2 focus:ring-[#009999]/20 transition-all bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  ข้อความ / รายการสินค้าที่ต้องการสอบถาม <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="ระบุรุ่นสินค้า จำนวนที่ต้องการ หรือข้อความสอบถามเพิ่มเติม..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-[#009999] focus:ring-2 focus:ring-[#009999]/20 transition-all bg-white resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-[#009999] hover:bg-[#008080] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer active:scale-98"
              >
                ส่งข้อความสอบถาม / ขอใบเสนอราคา
              </button>
            </form>

          </div>
        </section>

        {/* ==========================================
            ส่วน Google Maps แสดงที่ตั้งบริษัท
           ========================================== */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-md space-y-6">
          <div>
            <span className="text-[#009999] font-bold text-xs uppercase tracking-wider block mb-1">
              LOCATION MAP
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900 flex items-center gap-2">
              <span>🗺️</span> แผนที่และที่ตั้งบริษัท
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              สามารถเดินทางมาเยี่ยมชมหรือติดต่อที่ตั้งบริษัทได้ตามพิกัดแผนที่ด้านล่าง
            </p>
          </div>

          {/* กรอบแสดง Google Maps */}
          <div className="w-full h-96 rounded-2xl overflow-hidden border border-slate-200 shadow-inner relative bg-slate-100">
            <iframe
              title="Company Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3873.3768222384777!2d100.4158433!3d13.9180749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e28f09d84e5eb7%3A0x6bd7fa03c5ec744a!2z4Lil4Liy4Lir4Liy4Lij4LiZ4LmA4LiZ4LiZ4LiX4Lia4Li44Lij4Li1!5e0!3m2!1sth!2sth!4v1700000000000!5m2!1sth!2sth"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </section>

      </div>

      <Footer />
    </div>
  );
}