'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo with Image */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center shrink-0">
            <Image
              src="/images/S__20946946.jpg"
              alt="King Work Safety Logo"
              fill
              sizes="(max-width: 640px) 48px, 56px"
              className="object-contain transition-transform group-hover:scale-105"
              priority
            />
          </div>
          <div>
            <span className="text-base sm:text-xl font-extrabold tracking-tight text-slate-900 block leading-tight">
              KING WORK <span className="text-[#009999]">SAFETY</span>
            </span>
            <span className="text-[9px] sm:text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
              By king work solution co.,Ltd
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Menu */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-slate-600">
          <Link href="/" className="text-[#009999] font-semibold hover:text-[#007373] transition-colors">
            หน้าแรก
          </Link>
          <Link href="/aboutus" className="hover:text-[#009999] transition-colors">
            เกี่ยวกับเรา
          </Link>
          <Link href="/product" className="hover:text-[#009999] transition-colors">
            สินค้า / PRODUCTs
          </Link>
          <Link href="/howtobuy" className="hover:text-[#009999] transition-colors">
            วิธีการสั่งซื้อ
          </Link>
          <Link href="/contactus" className="hover:text-[#009999] transition-colors">
            ติดต่อเรา
          </Link>
        </nav>

        {/* Desktop Contact CTA */}
        <div className="hidden sm:flex items-center">
          <a
            href="https://line.me/ti/p/~kingworksafety"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-full text-sm font-bold text-white bg-[#009999] hover:bg-[#007373] transition-all shadow-md shadow-[#009999]/20 flex items-center gap-2"
          >
            <span>💬</span> ติดต่อสอบถาม (LINE)
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          type="button"
          className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none transition-colors"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-6 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-3 text-base font-medium text-slate-700">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-50 text-[#009999] font-semibold"
            >
              หน้าแรก
            </Link>
            <Link
              href="/aboutus"
              onClick={() => setIsMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-50 hover:text-[#009999]"
            >
              เกี่ยวกับเรา
            </Link>
            <Link
              href="/product"
              onClick={() => setIsMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-50 hover:text-[#009999]"
            >
              สินค้า / PRODUCTs
            </Link>
            <Link
              href="/howtobuy"
              onClick={() => setIsMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-50 hover:text-[#009999]"
            >
              วิธีการสั่งซื้อ
            </Link>
            <Link
              href="/contactus"
              onClick={() => setIsMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-50 hover:text-[#009999]"
            >
              ติดต่อเรา
            </Link>
          </nav>

          <div className="pt-2">
            <a
              href="https://line.me/ti/p/~kingworksafety"
              target="_blank"
              rel="noreferrer"
              className="w-full px-5 py-3 rounded-xl text-center font-bold text-white bg-[#009999] hover:bg-[#007373] transition-all shadow-md shadow-[#009999]/20 flex items-center justify-center gap-2"
            >
              <span>💬</span> ติดต่อสอบถาม (LINE)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}