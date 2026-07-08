'use client';

import React, { useState } from 'react';

export default function BenefitsPage() {
  const [paymentMethod, setPaymentMethod] = useState<'sangjo' | 'insurance'>('sangjo');

  return (
    <div className="relative pt-6 pb-24 z-10">
      {/* Background Glow */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-center pb-6 border-b border-slate-800 mb-10 gap-6 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-3">
            <h2 className="text-[21px] sm:text-3xl md:text-4xl font-black text-white tracking-tight flex flex-col sm:flex-row items-center gap-2">
              월 12만원의 <span className="text-blue-400">압도적 종합 혜택</span>
            </h2>
            <span className="bg-blue-500/15 text-blue-300 border border-blue-400/30 text-[10px] sm:text-[11px] font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-md">
              지출이 아닌 자산형성
            </span>
          </div>

          {/* Interactive Payment Switcher */}
          <div className="bg-slate-950 p-1.5 rounded-2xl border border-slate-800 flex gap-1.5 w-full max-w-[340px] sm:w-auto">
            <button
              onClick={() => setPaymentMethod('sangjo')}
              className={`flex-1 sm:flex-none px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all ${
                paymentMethod === 'sangjo'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-slate-350 hover:text-white'
              }`}
            >
              상조 결제 방식
            </button>
            <button
              onClick={() => setPaymentMethod('insurance')}
              className={`flex-1 sm:flex-none px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all ${
                paymentMethod === 'insurance'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-slate-350 hover:text-white'
              }`}
            >
              보험 결제 방식
            </button>
          </div>
        </div>

        {/* Split Content Layout */}
        <div className="max-w-3xl mx-auto w-full">
          
          {/* Left Card: 개별 마케팅 솔루션 제안 */}
          <div className="bg-[#0c1329] p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] border border-slate-800 shadow-2xl flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-center md:justify-start gap-3 text-white font-extrabold text-lg sm:text-xl mb-8 tracking-wide">
                <span className="text-blue-500 text-2xl font-black font-mono">≡</span>
                개별 마케팅 솔루션 제안
              </div>

              <div className="space-y-8">
                {/* Item 1 */}
                <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4 text-center sm:text-left">
                  <div className="flex flex-col items-center sm:items-start w-full">
                    <h4 className="text-base sm:text-lg font-extrabold text-white mb-2.5">출결 및 CCTV 보안 관제</h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-200 font-medium text-left">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>24시간 원격 실시간 모니터링 및 클라우드 영상 저장</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>스마트 출결 알림 및 모바일 실시간 관리 시스템</span>
                      </li>
                    </ul>
                  </div>
                  <span className="shrink-0 bg-slate-900 border border-slate-800 text-blue-300 text-xs font-black px-4 py-2 rounded-xl text-center shadow-sm w-full sm:w-auto max-w-[150px] sm:max-w-none">
                    {paymentMethod === 'sangjo' ? '상조 1구좌' : '보험가입'}
                  </span>
                </div>

                {/* Item 2 */}
                <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4 text-center sm:text-left">
                  <div className="flex flex-col items-center sm:items-start w-full">
                    <h4 className="text-base sm:text-lg font-extrabold text-white mb-2.5">프리미엄 반응형 홈페이지</h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-200 font-medium text-left">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>SEO 최적화 및 모바일 기기 완벽 대응 UI/UX 설계</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>랜딩페이지형, 브로슈어 사이트 맞춤형 제작</span>
                      </li>
                    </ul>
                  </div>
                  <span className="shrink-0 bg-slate-900 border border-slate-800 text-blue-300 text-xs font-black px-4 py-2 rounded-xl text-center shadow-sm w-full sm:w-auto max-w-[150px] sm:max-w-none">
                    {paymentMethod === 'sangjo' ? '상조 2구좌' : '보험가입'}
                  </span>
                </div>

                {/* Item 3 */}
                <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4 text-center sm:text-left">
                  <div className="flex flex-col items-center sm:items-start w-full">
                    <h4 className="text-base sm:text-lg font-extrabold text-white mb-2.5">SNS 홍보 및 매출 성장</h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-200 font-medium text-left">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>네이버 블로그 월 4회 포스팅 및 유튜브 숏츠 월 2회 제작</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>매출 성장을 위한 플랫폼 활용 전문 코칭 지원</span>
                      </li>
                    </ul>
                  </div>
                  <span className="shrink-0 bg-slate-900 border border-slate-800 text-blue-300 text-xs font-black px-4 py-2 rounded-xl text-center shadow-sm w-full sm:w-auto max-w-[150px] sm:max-w-none">
                    {paymentMethod === 'sangjo' ? '상조 2구좌' : '보험가입'}
                  </span>
                </div>
              </div>
            </div>

            {/* Gradient Banner Box */}
            <div className="mt-12 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-5 sm:p-6 rounded-[1.5rem] sm:rounded-[2rem] text-white text-center shadow-xl shadow-blue-500/10">
              <div className="text-lg sm:text-xl font-black tracking-tight mb-1.5 flex items-center justify-center gap-2">
                <span>👑</span> 통합 ALL-IN-ONE 패키지
              </div>
              <div className="text-xs sm:text-sm font-extrabold opacity-95 leading-relaxed">
                {paymentMethod === 'sangjo' ? (
                  <>
                    월 12만원 상조 상품 가입 시 (36개월 유지)<br />
                    <span className="font-black text-sm sm:text-base">위 모든 서비스 무료 구축 + 문자 발송 시스템 제공</span>
                  </>
                ) : (
                  <>
                    월 12만원 이상 종신 / 건강 보험 가입 시 (24개월 의무 유지조건)<br />
                    <span className="font-black text-sm sm:text-base">위 모든 서비스를 무료 구축 + 무료 발송 시스템 제공</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Section Footer Banner */}
        <div className="mt-16 pt-8 border-t border-slate-900/80 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left text-xs sm:text-sm">
          <div className="text-slate-350 font-semibold">
            상담문의: 24시간 비즈니스 파트너 지원센터 | 상담 시 견적서 및 사업제안서 무료 제공
          </div>
          <div className="text-white font-black tracking-tight">
            성공의 격을 높이는 선택, 지금 시작하세요!
          </div>
        </div>
        
      </div>
    </div>
  );
}
