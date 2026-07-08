'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const [showPrepModal, setShowPrepModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Disable background body scrolling when the popup menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
    } else {
      document.body.style.overflow = '';
      document.body.style.height = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.height = '';
    };
  }, [isOpen]);

  const navItems = [
    { label: '메인 페이지', path: '/' },
    { label: '제작사례 (포트폴리오)', path: '/portfolio' },
    { label: '호스팅 혜택', path: '/benefits' },
    { label: '제작/호스팅 문의', path: '/contact' }
  ];

  return (
    <>
      {/* Preparation Modal */}
      {showPrepModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 backdrop-blur-md transition-opacity duration-300" onClick={() => setShowPrepModal(false)}>
          <div className="bg-white rounded-3xl p-8 max-w-sm w-[90%] text-center border border-slate-200 shadow-2xl transform scale-100 transition-all duration-300" onClick={e => e.stopPropagation()}>
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-5">
              <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-extrabold text-slate-900 mb-2">준비 중인 서비스</h3>
            <p className="text-sm text-slate-500 leading-relaxed mb-6">현재 데모 페이지에서는 제공되지 않는 기능입니다.<br />무료 제작 및 가입 문의는 아래 문의 폼을 이용해 주세요!</p>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl shadow-md transition-all" onClick={() => setShowPrepModal(false)}>확인</button>
          </div>
        </div>
      )}

      {/* Mobile Menu Popup (Full Screen solid background cover with top-left aligned popup card) */}
      <div 
        style={{ backgroundColor: '#0a1128' }}
        className={`fixed inset-0 w-screen h-screen z-[100] flex items-start justify-start p-4 transition-all duration-300 lg:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Glow ambient effects behind popup */}
        <div className="absolute top-0 left-0 w-[200px] h-[200px] bg-blue-500/10 rounded-full blur-[80px] pointer-events-none z-0" />

        {/* Top-Left Popup Card with origin-top-left zoom animation */}
        <div className={`bg-[#0f172a] rounded-[1.5rem] border border-slate-800/80 p-5 w-[85%] max-w-[280px] shadow-2xl relative z-10 mt-4 ml-2 transform transition-all duration-300 origin-top-left ${
          isOpen ? 'scale-100 translate-x-0 translate-y-0 opacity-100' : 'scale-90 -translate-x-4 -translate-y-4 opacity-0'
        }`}>
          {/* Top colored line indicator */}
          <div className="absolute top-0 left-6 right-6 h-[3px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full" />

          {/* Popup Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-800/60 mb-5 mt-1">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-md shadow-blue-500/30">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 13H5v-2h14v2zm-2-7H7V4h10v2zm2 14H5v-2h14v2z" />
                </svg>
              </div>
              <div className="flex flex-col justify-center leading-none">
                <span className="font-black text-xs text-white uppercase tracking-wider">EGDESK</span>
                <span className="text-[7px] font-black text-blue-400 tracking-wider uppercase mt-0.5">AI PLATFORM</span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-900 rounded-xl transition-colors focus:outline-none"
              aria-label="Close menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Popup Navigation Links */}
          <nav className="flex flex-col space-y-1.5 mb-5">
            {navItems.map((item) => {
              const isActive = pathname === item.path || (item.path === '/' && pathname === '/');
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 py-3 px-4 rounded-xl transition-all duration-300 font-extrabold text-sm ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                      : 'text-slate-300 hover:text-white hover:bg-slate-900/40'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    isActive ? 'bg-white shadow-md scale-100' : 'bg-transparent scale-0'
                  }`} />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Popup Footer Contact Box */}
          <div className="pt-4 border-t border-slate-800/80 text-center">
            <div className="bg-slate-950/60 py-2.5 px-4 rounded-xl border border-slate-900 mb-4 inline-block w-full">
              <p className="text-[9px] text-slate-450 font-black tracking-widest uppercase mb-0.5">Direct Call Support</p>
              <a href="tel:010-9697-3927" className="text-base font-black text-white hover:text-blue-400 transition-colors tracking-wide">
                010-9697-3927
              </a>
            </div>
            <a 
              href="tel:010-9697-3927" 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white w-full py-3.5 rounded-xl text-xs font-black shadow-lg shadow-blue-500/15 active:scale-95 transition-all flex items-center justify-center gap-2.5"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              전화상담 연결
            </a>
          </div>
        </div>
      </div>

      {/* Top Notice Bar */}
      <div className="bg-blue-900 text-white text-xs sm:text-sm font-bold py-3 px-4 text-center border-b border-blue-800/40 relative z-50 tracking-wide lg:hidden">
        <span className="hidden sm:inline-block bg-cyan-400 text-slate-950 text-[10px] sm:text-xs font-black px-2.5 py-0.5 rounded-md mr-3 uppercase tracking-wider">NOTICE</span>
        세계 최초 개인용 AI 데이터센터 - EGDesk AI Platform
      </div>

      {/* Navigation Header - White Background based on screenshot */}
      <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200/80 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-22 flex items-center justify-between relative">
          <div className="flex items-center justify-center lg:justify-start w-full lg:w-auto gap-2 sm:gap-4 px-16 lg:px-0">
            {/* Mobile Hamburger Button on the Left */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden absolute left-2 p-2 text-slate-600 hover:text-blue-600 focus:outline-none z-10"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <Link href="/" className="flex items-center gap-3 group">
              {/* Styled Logo matching the screenshot - Hidden on mobile/tablet, shown on desktop */}
              <div className="hidden lg:flex w-10 h-10 bg-blue-600 rounded-xl items-center justify-center text-white shadow-md shadow-blue-500/25 shrink-0">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 13H5v-2h14v2zm-2-7H7V4h10v2zm2 14H5v-2h14v2z" />
                </svg>
              </div>
              <div className="flex flex-col justify-center leading-none text-center lg:text-left items-center lg:items-start">
                <span className="text-sm sm:text-base font-black text-slate-900 tracking-tight">
                  EGDesk AI 웹 호스팅 서비스
                </span>
                <span className="text-[9px] sm:text-[10px] font-black text-blue-600 tracking-widest mt-0.5 uppercase">
                  EGDESK AI PLATFORM
                </span>
              </div>
            </Link>
          </div>
          
          <nav className="hidden lg:flex items-center space-x-10 text-[15px] font-bold">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`transition-colors py-2 px-1 relative ${
                  pathname === item.path || (item.path === '/' && pathname === '/')
                    ? 'text-blue-600 font-extrabold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-blue-600'
                    : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          
          <div className="absolute right-6 lg:static flex items-center z-10">
            <a href="tel:010-9697-3927" className="bg-blue-600 hover:bg-blue-700 text-white w-8 h-8 sm:w-auto sm:h-auto sm:px-6 sm:py-3 rounded-xl text-xs sm:text-sm font-black shadow-md shadow-blue-500/20 active:scale-95 transition-all flex items-center justify-center gap-2">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              <span className="hidden sm:inline">상담 전화</span>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
