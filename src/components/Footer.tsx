'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#081254] border-t border-white/10 py-16 text-slate-300 text-xs sm:text-sm z-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <div className="flex items-center gap-3.5 mb-6">
              <span className="text-base font-black text-white uppercase tracking-tighter">
                EGDESK AI PLATFORM
              </span>
            </div>
            
            <p className="text-slate-200 font-extrabold uppercase tracking-widest text-[10px] sm:text-xs mb-3">
              WORLD'S FIRST PERSONAL SERVER AI DATA CENTER
            </p>
            <p className="text-white font-extrabold text-sm sm:text-base mb-4 leading-relaxed">
              QUUS CO., LTD 제주사업단 VALISE TECH COMPANY
            </p>
            <p className="leading-loose font-medium text-slate-300 max-w-md">
              주소 : 제주특별자치도 제주시 | 대표번호 : 010-9697-3927<br />
              사업자등록번호 : 준비중 | 서비스명 : EGDesk AI Server 호스팅
            </p>
          </div>
          
          <div className="flex flex-col md:items-end justify-between h-full md:text-right gap-6">
            <div className="text-slate-200 font-medium leading-relaxed max-w-sm">
              <span className="text-white font-bold">EGDesk AI Server 호스팅</span>은 개개인과 소상공인이 소유할 수 있는 세계 최초 개인용 서버 AI 데이터 센터를 실현합니다.
            </div>
            <div className="border-t border-white/10 pt-6 w-full md:text-right">
              <p className="text-slate-400 font-medium">
                Copyright © QUUS CO., LTD / VALISE TECH COMPANY. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
