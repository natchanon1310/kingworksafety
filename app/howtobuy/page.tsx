'use client';

import React, { useState } from 'react';
import Navbar from '@/component/Navbar';
import Footer from '@/component/Footer';

export default function HowToBuyPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('ส่งข้อมูลการติดต่อเรียบร้อยแล้ว เจ้าหน้าที่จะติดต่อกลับโดยเร็วที่สุดครับ');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Navbar />

      {/* Header Banner */}
      <section className="py-14 bg-gradient-to-b from-[#E6F5F5] via-white to-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#009999]/10 text-[#009999] text-xs font-bold mb-3">
            🛒 HOW TO BUY — ขั้นตอนการสั่งซื้อสินค้า
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            วิธีการสั่งซื้อสินค้าและขั้นตอนการให้บริการ
          </h1>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            สะดวก รวดเร็ว พร้อมบริการให้คำปรึกษาโดยทีมงานผู้เชี่ยวชาญ
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* ==========================================
            4 ขั้นตอนง่ายๆ ในการสั่งซื้อสินค้า
           ========================================== */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              4 ขั้นตอนการสั่งซื้อสินค้า
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              สั่งซื้อง่าย ได้รับสินค้าคุณภาพ มาตรฐานโรงงาน
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs relative flex flex-col items-center text-center group hover:border-[#009999]/30 hover:shadow-lg transition-all">
              <span className="w-12 h-12 rounded-2xl bg-[#E6F5F5] text-[#009999] font-black text-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                01
              </span>
              <h3 className="font-bold text-slate-900 text-base mb-2">เลือกสินค้าที่ต้องการ</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                เลือกชมสินค้าจากหน้าเว็บไซต์ หรือสอบถามสเปกสินค้าที่ต้องการกับเจ้าหน้าที่
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs relative flex flex-col items-center text-center group hover:border-[#009999]/30 hover:shadow-lg transition-all">
              <span className="w-12 h-12 rounded-2xl bg-[#E6F5F5] text-[#009999] font-black text-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                02
              </span>
              <h3 className="font-bold text-slate-900 text-base mb-2">ติดต่อขอใบเสนอราคา</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                แจ้งรุ่นสินค้า จำนวนที่ต้องการ หรือส่งรายละเอียดผ่านฟอร์มเพื่อขอใบเสนอราคา
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs relative flex flex-col items-center text-center group hover:border-[#009999]/30 hover:shadow-lg transition-all">
              <span className="w-12 h-12 rounded-2xl bg-[#E6F5F5] text-[#009999] font-black text-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                03
              </span>
              <h3 className="font-bold text-slate-900 text-base mb-2">ยืนยันการสั่งซื้อ & ชำระเงิน</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                ตรวจสอบใบเสนอราคา ยืนยันการสั่งซื้อ และชำระเงินตามช่องทางที่บริษัทกำหนด
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs relative flex flex-col items-center text-center group hover:border-[#009999]/30 hover:shadow-lg transition-all">
              <span className="w-12 h-12 rounded-2xl bg-[#E6F5F5] text-[#009999] font-black text-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                04
              </span>
              <h3 className="font-bold text-slate-900 text-base mb-2">จัดส่งสินค้าถึงมือคุณ</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                บริษัททำการจัดส่งสินค้าพร้อมแจ้งเลขพัสดุ หรือจัดส่งโดยทีมงานขนส่งของบริษัท
              </p>
            </div>
          </div>
        </section>

        {/* ==========================================
            รายละเอียดการชำระเงิน & เงื่อนไข
           ========================================== */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-xs space-y-8">
          <div>
            <h3 className="text-xl font-extrabold text-slate-900 mb-4 flex items-center gap-2">
              <span className="text-[#009999]">💳</span> การชำระเงิน (Payment Options)
            </h3>
            <ul className="space-y-3 text-sm text-slate-600 pl-4 list-disc marker:text-[#009999]">
              <li>โอนเงินผ่านบัญชีธนาคารในนามบริษัท โดยสามารถขอข้อมูลและรายละเอียดได้ผ่านทาง email และ line</li>
              <li>Email: kingworksafety@gmail.com | Line: @kingworksafety</li>
              <li>รองรับการสั่งซื้อแบบออกใบกำกับภาษีเต็มรูปแบบ (VAT 7%)</li>
              <li>สำหรับหน่วยงานราชการ สถาบัน และโรงงานอุตสาหกรรม สามารถติดต่อขอเครดิตเทอมได้ตามเงื่อนไขบริษัท</li>
            </ul>
          </div>

          <div className="pt-6 border-t border-slate-100">
            <h3 className="text-xl font-extrabold text-slate-900 mb-4 flex items-center gap-2">
              <span className="text-[#009999]">🚚</span> การจัดส่งสินค้า (Delivery)
            </h3>
            <ul className="space-y-3 text-sm text-slate-600 pl-4 list-disc marker:text-[#009999]">
              <li>จัดส่งฟรีในเขตกรุงเทพฯ และปริมณฑล (เมื่อสั่งซื้อครบตามยอดที่กำหนด)</li>
              <li>ต่างจังหวัดจัดส่งผ่านขนส่งเอกชนด่วน (Kerry, Flash, Nim Express หรือขนส่งที่ลูกค้าสะดวก)</li>
              <li>ระยะเวลาจัดส่ง 1-3 วันทำการ หลังยืนยันชำระเงิน</li>
            </ul>
          </div>
        </section>

      
        
      </div>

      <Footer />
    </div>
  );
}