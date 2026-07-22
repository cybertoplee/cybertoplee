'use client';

import React, { useState } from 'react';

export default function BenefitsPage() {
  const [paymentMethod, setPaymentMethod] = useState<'sangjo' | 'insurance'>('sangjo');
  const [showPrepModal, setShowPrepModal] = useState(false);

  return (
    <div className="relative pt-12 pb-24 z-10">
      {/* Background Glow */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center pb-6 border-b border-slate-800 mb-10 gap-6 text-center w-full">
          <div className="flex flex-col items-center justify-center gap-3 w-full">
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              月 약 12만원의 <span className="text-blue-400">압도적 종합 혜택</span>
            </h2>
            <span className="bg-blue-500/15 text-blue-300 border border-blue-400/30 text-xs font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md">
              지출이 아닌 자산형성
            </span>
          </div>

          {/* Interactive Payment Switcher */}
          <div className="bg-slate-950 p-2 rounded-2xl border border-slate-800 flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setPaymentMethod('sangjo');
              }}
              className={`w-full sm:w-auto px-6 py-3.5 rounded-xl text-sm sm:text-base font-black transition-all ${
                paymentMethod === 'sangjo'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-slate-350 hover:text-white'
              }`}
            >
              상조로 결제하는 방법
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setShowPrepModal(true);
              }}
              className={`w-full sm:w-auto px-6 py-3.5 rounded-xl text-sm sm:text-base font-black transition-all ${
                paymentMethod === 'insurance'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-slate-350 hover:text-white'
              }`}
            >
              기타 결제방법
            </button>
          </div>
        </div>

        {/* Split Content Layout - Centered single card */}
        <div className="max-w-3xl mx-auto w-full">
          
          {/* Left Card: 개별 마케팅 솔루션 제안 */}
          <div className="bg-slate-950/70 p-6 sm:p-10 rounded-[2.5rem] border border-slate-800 shadow-2xl flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2.5 text-blue-400 font-black text-xl mb-8 uppercase tracking-wide">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                개별 마케팅 솔루션 제안
              </div>

              <div className="space-y-8">
                {/* Item 1 */}
                <div className="flex flex-col justify-between items-stretch gap-4 text-left border-b border-slate-900 pb-6">
                  <div className="flex flex-col items-start w-full">
                    <h4 className="text-lg sm:text-xl font-black text-white mb-3">출결 및 CCTV 보안 관제</h4>
                    <ul className="space-y-2.5 text-sm sm:text-base text-slate-200 font-medium text-left">
                      <li className="flex items-start gap-2.5">
                        <span className="text-blue-400 font-bold">•</span>
                        24시간 원격 실시간 모니터링 및 클라우드 영상 저장
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-blue-400 font-bold">•</span>
                        스마트 출결 알림 및 모바일 실시간 관리 시스템
                      </li>
                    </ul>
                  </div>
                  <span className="shrink-0 bg-slate-900 border border-slate-800 text-blue-300 text-sm font-black px-4 py-3 rounded-xl text-center shadow-sm w-full">
                    {paymentMethod === 'sangjo' ? '상조 1구좌 (현금 또는 카드 30만원)' : '보험가입'}
                  </span>
                </div>

                {/* Item 2 */}
                <div className="flex flex-col justify-between items-stretch gap-4 text-left border-b border-slate-900 pb-6">
                  <div className="flex flex-col items-start w-full">
                    <h4 className="text-lg sm:text-xl font-black text-white mb-3">프리미엄 반응형 홈페이지</h4>
                    <ul className="space-y-2.5 text-sm sm:text-base text-slate-200 font-medium text-left">
                      <li className="flex items-start gap-2.5">
                        <span className="text-blue-400 font-bold">•</span>
                        SEO 최적화 및 모바일 기기 완벽 대응 UI/UX 설계
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-blue-400 font-bold">•</span>
                        랜딩페이지형, 브로슈어 사이트 맞춤형 제작
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-blue-400 font-bold">•</span>
                        네이버 블로그 포스팅 2회, 유튜브 숏츠 제작 2회 서비스
                      </li>
                    </ul>
                  </div>
                  <span className="shrink-0 bg-slate-900 border border-slate-800 text-blue-300 text-sm font-black px-4 py-3 rounded-xl text-center shadow-sm w-full">
                    {paymentMethod === 'sangjo' ? '상조 2구좌 (현금 또는 카드 50만원)' : '보험가입'}
                  </span>
                </div>

                {/* Item 3 */}
                <div className="flex flex-col justify-between items-stretch gap-4 text-left pb-2">
                  <div className="flex flex-col items-start w-full">
                    <h4 className="text-lg sm:text-xl font-black text-white mb-3">SNS 홍보 및 매출 성장</h4>
                    <ul className="space-y-2.5 text-sm sm:text-base text-slate-200 font-medium text-left">
                      <li className="flex items-start gap-2.5">
                        <span className="text-blue-400 font-bold">•</span>
                        네이버 블로그 월 4회 포스팅 및 유튜브 숏츠 월 2회 제작
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-blue-400 font-bold">•</span>
                        매출 성장을 위한 플랫폼 활용 전문 코칭 지원
                      </li>
                    </ul>
                  </div>
                  <span className="shrink-0 bg-slate-900 border border-slate-800 text-blue-300 text-sm font-black px-4 py-3 rounded-xl text-center shadow-sm w-full">
                    {paymentMethod === 'sangjo' ? '상조 2구좌 (현금 또는 카드 50만원)' : '보험가입'}
                  </span>
                </div>
              </div>
            </div>

            {/* Gradient Banner Box */}
            <div className="mt-10 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-6 sm:p-8 rounded-[2rem] text-white text-center shadow-xl shadow-blue-500/10">
              <div className="text-xl sm:text-2xl font-black tracking-tight mb-2 flex items-center justify-center gap-2">
                <span>👑</span> 통합 ALL-IN-ONE 패키지
              </div>
              <div className="text-base sm:text-lg font-extrabold opacity-95 leading-relaxed">
                {paymentMethod === 'sangjo' ? (
                  <>
                    월 12만원 상당의 상조 상품 가입 시 (24개월 유지조건)<br />
                    * 월 22,500원(1구좌) × 5구좌 = 112,500원
                  </>
                ) : (
                  <>
                    월 12만원 이상 종신 / 건강 보험 가입 시 (24개월 의무 유지조건)
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
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
    </div>
  );
}
