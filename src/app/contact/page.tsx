'use client';

import React, { useState, useTransition } from 'react';
import { submitInquiry } from '../actions';

export default function ContactPage() {
  const [isPending, startTransition] = useTransition();
  const [formState, setFormState] = useState<{ success?: boolean; error?: string; note?: string }>({});

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.currentTarget;
    const formData = new FormData(target);
    
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    startTransition(async () => {
      const res = await submitInquiry(null, formData);
      setFormState(res);
      if (res.success) {
        target.reset();

        // Construct SMS message body
        const smsText = `[EGDesk AI 호스팅 문의]\n성함: ${name}\n연락처: ${phone}\n이메일: ${email || '없음'}\n문의내용: ${message || '없음'}`;
        
        // Detect iOS for URL parameter delimiter compatibility
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
                      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
        
        const smsUrl = `sms:010-9697-3927${isIOS ? '&' : '?'}body=${encodeURIComponent(smsText)}`;
        
        // Trigger device SMS application
        window.location.href = smsUrl;
      }
    });
  };

  return (
    <div className="relative pt-12 pb-24 z-10">
      {/* Background Glow */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-gradient-to-br from-slate-900 to-indigo-950 rounded-[3rem] border border-slate-800 shadow-2xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Left Info Panel */}
          <div className="md:w-5/12 bg-blue-600 p-10 sm:p-12 text-white flex flex-col justify-between relative overflow-hidden text-center md:text-left items-center md:items-start">
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none" />
            <div className="relative z-10 flex flex-col justify-between h-full items-center md:items-start text-center md:text-left w-full">
              <div>
                <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/10 border border-white/20 text-blue-100 text-xs font-black uppercase tracking-wider backdrop-blur-sm mx-auto md:mx-0">
                  Inquiry
                </div>
                <h3 className="text-[24px] sm:text-3xl font-black mb-4 leading-tight">홈페이지 제작 및 <br />업무 자동화 서비스 문의</h3>
                <p className="text-blue-100 text-sm leading-relaxed mb-8 font-medium">
                  소상공인/중소기업/단체/공공기관<br />
                  대표님 및 임직원 여러분<br />
                  <br />
                  세계 최초 <br />
                  EGDesk AI Server Platform을<br />
                  귀 사에 도입하셔서 업무 자동화<br />
                  AI Agent 50인을 만나보세요.<br />
                  <br />
                  언제든지 요청만 하시면<br />
                  귀 사를 방문해서 컴퓨터에<br />
                  EGDesk AI Server 플랫폼을<br />
                  설치하여 15일간 체험할 수 <br />
                  있도록 설치하고, 업무자동화 <br />
                  교육을 제공하겠습니다.
                </p>
              </div>
              <div className="mt-8 border-t border-white/20 pt-8 w-full">
                <p className="text-[10px] text-blue-200 uppercase font-black tracking-widest mb-1">Direct Call</p>
                <a href="tel:010-9697-3927" className="text-2xl sm:text-3xl font-black text-white hover:text-cyan-300 transition-colors">
                  010-9697-3927
                </a>
              </div>
            </div>
          </div>

          {/* Right Input Form */}
          <div className="md:w-7/12 p-10 sm:p-12">
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div>
                <label className="block text-xs sm:text-sm font-extrabold text-slate-300 mb-2">성함 <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-blue-500 transition text-white placeholder-slate-500 font-semibold"
                  placeholder="성함을 입력하세요"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-extrabold text-slate-300 mb-2">연락처 <span className="text-red-500">*</span></label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-blue-500 transition text-white placeholder-slate-500 font-semibold"
                    placeholder="010-0000-0000"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-extrabold text-slate-300 mb-2">이메일</label>
                  <input
                    type="email"
                    name="email"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-blue-500 transition text-white placeholder-slate-500 font-semibold"
                    placeholder="example@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-extrabold text-slate-300 mb-2">문의내용</label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-blue-500 transition text-white resize-none placeholder-slate-500 font-semibold"
                  placeholder="문의하시고자 하는 내용을 적어주세요."
                />
              </div>

              {/* Form feedback message */}
              {formState.success && (
                <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs p-4 rounded-xl font-bold flex items-center gap-2">
                  <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>문의 접수가 완료되었습니다. 신속하게 연락 드리겠습니다! {formState.note && `(${formState.note})`}</span>
                </div>
              )}
              {formState.error && (
                <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-xs p-4 rounded-xl font-bold flex items-center gap-2">
                  <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{formState.error}</span>
                </div>
              )}

              {/* Mobile integration guide text */}
              <div className="text-[12px] sm:text-xs text-blue-100 flex items-start gap-2.5 bg-blue-600/10 p-4 rounded-xl border border-blue-500/30 mb-4 leading-relaxed font-semibold">
                <svg className="w-4.5 h-4.5 text-blue-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <span>접수 완료 시 기기연동을 통해 휴대폰 문자(SMS) 앱이 열리며, 작성하신 문의 내용이 자동으로 전송됩니다.</span>
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-4.5 rounded-xl active:scale-95 transition shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 text-base"
              >
                {isPending ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    제출 중...
                  </>
                ) : '문의 및 신청하기'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
