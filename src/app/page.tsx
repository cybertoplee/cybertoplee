'use client';

import React, { useState, useTransition } from 'react';
import Link from 'next/link';
import { getEgdeskBasePath } from '../../egdesk-helpers';
import { submitInquiry } from './actions';

interface CaseItem {
  id: string;
  title: string;
  category: 'education' | 'fb_retail' | 'wellness_health' | 'service_const' | 'finance_tech';
  categoryLabel: string;
  desc: string;
  link: string;
  tagColor: string;
  tagBg: string;
}

const CATEGORIES = [
  { id: 'all', label: '전체 보기' },
  { id: 'education', label: '교육·학원' },
  { id: 'fb_retail', label: '식음료·소매' },
  { id: 'wellness_health', label: '건강·웰니스' },
  { id: 'service_const', label: '생활·서비스·인테리어' },
  { id: 'finance_tech', label: '금융·기술·플랫폼' }
] as const;

export default function Home() {
  const basePath = getEgdeskBasePath();
  const [activeTab, setActiveTab] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isPending, startTransition] = useTransition();
  const [formState, setFormState] = useState<{ success?: boolean; error?: string; note?: string }>({});
  const [showVideo, setShowVideo] = useState(false);
  const [showPrepModal, setShowPrepModal] = useState(false);

  const previewImg = `${basePath}/assets/dashboard-lDZ0PVPU.png`;

  const cases: CaseItem[] = [
    {
      id: 'suyong',
      title: '차귀도 수용배낚시',
      category: 'service_const',
      categoryLabel: 'LEISURE & SERVICE',
      desc: '제주 고산 차귀도 대표 배낚시 체험 공식 안내 및 실시간 네이버 예약 랜딩 페이지',
      link: `${basePath}/suyong/index.html`,
      tagColor: 'text-sky-600',
      tagBg: 'bg-sky-50'
    },
    {
      id: 'preed',
      title: '웅진프리드라이프 제주오라사업점',
      category: 'finance_tech',
      categoryLabel: 'FINANCE & LIFE CARE',
      desc: '업계 1위 웅진프리드라이프 제주지점 공식 리뉴얼 홈페이지 및 정밀 수당 계산기 시뮬레이터 연동',
      link: `${basePath}/preed/index.html`,
      tagColor: 'text-indigo-600',
      tagBg: 'bg-indigo-50'
    },
    {
      id: 'flower',
      title: '하나북카페 | 도심 속 힐링 공간',
      category: 'fb_retail',
      categoryLabel: 'CAFE & SPACE',
      desc: '커피와 책, 그리고 쉼이 있는 하나북카페 프리미엄 랜딩 페이지',
      link: `${basePath}/cmyongil/index.html`,
      tagColor: 'text-amber-600',
      tagBg: 'bg-amber-50'
    },
    {
      id: 'jejuowner',
      title: '(주)오너 / 제주오너센터',
      category: 'wellness_health',
      categoryLabel: 'WELLNESS & HEALTH',
      desc: '프리미엄 웰니스 케어 및 4종 토탈 체험 프로모션 웹사이트',
      link: `${basePath}/jejuowner/index.html`,
      tagColor: 'text-emerald-600',
      tagBg: 'bg-emerald-50'
    },
    {
      id: 'mijoo',
      title: '미주보석 (제주팔찌 제주금은방)',
      category: 'fb_retail',
      categoryLabel: 'JEWELRY & GOLD',
      desc: '고급스러운 감성의 럭셔리 주얼리 프로모션 웹사이트',
      link: `${basePath}/mijoo/index.html`,
      tagColor: 'text-amber-600',
      tagBg: 'bg-amber-50'
    },
    {
      id: 'lchayim',
      title: '르하임스터디카페 제주아라점',
      category: 'education',
      categoryLabel: 'CAFE & SPACE',
      desc: '프랜차이즈 감각과 매장 정보를 담은 홍보 홈페이지',
      link: `${basePath}/lchayim/index.html`,
      tagColor: 'text-pink-600',
      tagBg: 'bg-pink-50'
    },
    {
      id: 'koryo',
      title: '고려신용정보 제주지점',
      category: 'service_const',
      categoryLabel: 'SERVICE',
      desc: '신뢰도 높은 전문 비즈니스 서비스 시안',
      link: `${basePath}/koryo/index.html`,
      tagColor: 'text-blue-600',
      tagBg: 'bg-blue-50'
    },
    {
      id: 'sunbaek',
      title: '순백순두부 식당',
      category: 'fb_retail',
      categoryLabel: 'F&B',
      desc: '식당의 맛과 메뉴를 직관적으로 보여주는 랜딩 페이지',
      link: `${basePath}/sunbaek/index.html`,
      tagColor: 'text-orange-600',
      tagBg: 'bg-orange-50'
    },
    {
      id: 'charlie',
      title: '찰리아저씨 맛집',
      category: 'fb_retail',
      categoryLabel: 'LOCAL FOOD',
      desc: '제주 바다와 차귀도의 감성을 담은 로컬 식당',
      link: `${basePath}/charlie/index.html`,
      tagColor: 'text-teal-600',
      tagBg: 'bg-teal-50'
    },
    {
      id: 'ildokickboxing',
      title: 'TEAM일도킥복싱멀티짐',
      category: 'wellness_health',
      categoryLabel: 'SPORTS & GYM',
      desc: '강렬하고 역동적인 입식 타격 전문 체육관 프로모션 웹페이지',
      link: `${basePath}/ildokickboxing/index.html`,
      tagColor: 'text-red-600',
      tagBg: 'bg-red-50'
    },
    {
      id: 'wellbeing',
      title: '제주웰빙황토지압원',
      category: 'wellness_health',
      categoryLabel: 'HEALTH & THERAPY',
      desc: '건강과 힐링의 가치를 전달하는 전문 사이트',
      link: `${basePath}/wellbeing/index.html`,
      tagColor: 'text-yellow-600',
      tagBg: 'bg-yellow-50'
    },
    {
      id: 'waterproof',
      title: '제주 리치하우스',
      category: 'service_const',
      categoryLabel: 'WATERPROOFING & REPAIR',
      desc: '서비스 예약과 고객 중심의 완벽한 방수 시공',
      link: `${basePath}/waterproof/index.html`,
      tagColor: 'text-cyan-600',
      tagBg: 'bg-cyan-50'
    },
    {
      id: 'hyeseong',
      title: '혜성인테리어',
      category: 'service_const',
      categoryLabel: 'INTERIOR DESIGN',
      desc: '바닥재·벽지·블라인드 전문 인테리어 시공 사례',
      link: `${basePath}/hyeseong/index.html`,
      tagColor: 'text-purple-600',
      tagBg: 'bg-purple-50'
    },
    {
      id: 'koreapestcontrol',
      title: '(주)한국방역공사 제주지사',
      category: 'service_const',
      categoryLabel: 'PEST CONTROL',
      desc: '쾌적한 환경을 위한 완벽 방역 가이드 및 전문 서비스',
      link: `${basePath}/koreapestcontrol/index.html`,
      tagColor: 'text-emerald-600',
      tagBg: 'bg-emerald-50'
    },
    {
      id: 'carwash',
      title: '영평OK셀프세차타운',
      category: 'service_const',
      categoryLabel: 'AUTO CARE',
      desc: '최고급 시설을 갖춘 프리미엄 셀프 세차장 소개',
      link: `${basePath}/carwash/index.html`,
      tagColor: 'text-cyan-600',
      tagBg: 'bg-cyan-50'
    },
    {
      id: 'ghost',
      title: '제주고스트타운',
      category: 'wellness_health',
      categoryLabel: 'THEME PARK',
      desc: '애월 야간 명소, 짜릿한 공포와 VR 체험 테마파크',
      link: `${basePath}/ghost/index.html`,
      tagColor: 'text-red-650',
      tagBg: 'bg-red-50'
    },
    {
      id: 'academy',
      title: '우리동네학원 홈페이지',
      category: 'education',
      categoryLabel: 'EDUCATION PORTAL',
      desc: '지역별, 과목별 학원 정보 매칭 및 홍보 플랫폼',
      link: `${basePath}/academy/index.html`,
      tagColor: 'text-emerald-600',
      tagBg: 'bg-emerald-50'
    },
    {
      id: 'exam',
      title: '우리동네학원 문제은행',
      category: 'education',
      categoryLabel: 'EDUCATION',
      desc: '학습 콘텐츠와 데이터 관리에 특화된 교육용 플랫폼',
      link: `${basePath}/exam/index.html`,
      tagColor: 'text-purple-600',
      tagBg: 'bg-purple-50'
    },
    {
      id: 'korean',
      title: '언어영역(국어) 플랫폼',
      category: 'education',
      categoryLabel: 'EDUCATION CONTENT',
      desc: '학습 자료 아카이브 및 문제 제공용 인터페이스',
      link: `${basePath}/korean/index.html`,
      tagColor: 'text-indigo-600',
      tagBg: 'bg-indigo-50'
    },
    {
      id: 'insurancemock',
      title: '설계사 모의고사 문제은행',
      category: 'education',
      categoryLabel: 'AI SMART LEARNING',
      desc: '생명·손해보험 설계사 자격을 위한 실전 모의고사 시뮬레이터',
      link: `${basePath}/insurancemock/index.html`,
      tagColor: 'text-indigo-650',
      tagBg: 'bg-indigo-50'
    },
    {
      id: 'jokbo',
      title: '족보닷컴 문제은행',
      category: 'education',
      categoryLabel: 'TEST DATA',
      desc: '대규모 기출 데이터 관리를 위한 깔끔한 UI',
      link: `${basePath}/jokbo/index.html`,
      tagColor: 'text-blue-650',
      tagBg: 'bg-blue-50'
    },
    {
      id: 'aitax',
      title: 'AITAX (AI 세무대리인)',
      category: 'finance_tech',
      categoryLabel: 'TAX & FINANCE',
      desc: '최적화된 AI 절세 분석 및 원클릭 세무 신고',
      link: `${basePath}/aitax/index.html`,
      tagColor: 'text-indigo-600',
      tagBg: 'bg-indigo-50'
    },
    {
      id: 'unione',
      title: 'UNIONE 유니원 금융 플랫폼 (WEB3)',
      category: 'finance_tech',
      categoryLabel: 'WEB3 FINTECH',
      desc: '글로벌 Web3 금융 플랫폼. 획기적인 일 0.5% 복복리 수익 시뮬레이터 연동',
      link: `${basePath}/unione/index.html`,
      tagColor: 'text-indigo-650',
      tagBg: 'bg-indigo-50'
    }
  ];

  const filteredCases = cases.filter(c => {
    const matchesCategory = activeTab === 'all' || c.category === activeTab;
    const matchesSearch = c.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          c.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
    <div className="relative z-10 bg-[#0f172a] flex-grow flex flex-col">
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

      {/* 1. Hero Section (Dark theme based on screenshot) */}
      <section className="relative pt-6 md:pt-10 pb-6 bg-[#0f172a] text-white">
        <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-blue-900/20 via-slate-900/10 to-transparent pointer-events-none z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left aligned info */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 rounded-full bg-blue-650/15 border border-blue-400/30 text-blue-300 text-xs sm:text-sm font-extrabold tracking-widest uppercase shadow-md">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                THIS WEBSITE WAS CREATED WITH EGDESK AI PLATFORM
              </div>
              <h1 className="text-[19.2px] sm:text-[2.4rem] md:text-[2.88rem] lg:text-[2.944rem] font-black leading-[1.2] mb-8 tracking-tight text-white">
                성공을 위한 AI 업무 자동화<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">EGDesk AI Agent</span> 서비스
              </h1>
              <p className="text-lg sm:text-xl text-slate-200 mb-12 leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0">
                최고의 기술력과 안정적인 인프라를 바탕으로 최적화된 홈페이지 및 모바일 웹 호스팅 서비스를 지원합니다. 또한 이지데스크 AI 업무 자동화를 위한 바이브 코딩 전문교육을 지원합니다.
              </p>
              
              {/* CTAs styled with clean rounded buttons matching screenshot */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link href="/contact" className="w-full sm:w-auto px-10 py-4.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-black text-[21px] shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2 group">
                  상담문의
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                 <Link href="/portfolio" className="w-full sm:w-auto px-10 py-4.5 bg-transparent hover:bg-white/10 text-white rounded-xl font-bold text-[21px] border border-white/20 transition-all flex items-center justify-center">
                   포트폴리오(22종)
                 </Link>
              </div>
            </div>

            {/* Right aligned YouTube Screen Mockup */}
            <div className="relative flex justify-center w-full max-w-lg mx-auto lg:max-w-none">
              <div className="relative w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
                {!showVideo ? (
                  <div className="absolute inset-0 flex items-center justify-center relative group cursor-pointer bg-[#0b0f19]" onClick={() => setShowVideo(true)}>
                    <img 
                      src={`${basePath}/assets/vibe_coding_intro.jpg`} 
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500" 
                      alt="YouTube Intro Cover" 
                    />
                  </div>
                ) : (
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/BAjUyM6wZnY?autoplay=1"
                    title="EGDesk Vibe Coding Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Feature Cards Section (Aligned horizontally below hero as in screenshot) */}
      <section className="pt-2 pb-16 bg-[#0f172a] text-white border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1: EGDESK SMS */}
            <a 
              href="https://tunneling-service.onrender.com/t/mcp-server-cybertoplee/p/egdesk-FreeSMS/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0c1329] border border-slate-800 rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between relative group hover:border-blue-500/50 transition-all duration-300 shadow-lg min-h-[180px] text-center sm:text-left gap-6 block"
            >
              <div className="flex flex-col items-center sm:items-start">
                <span className="inline-block px-3 py-1.5 mb-3 rounded-full bg-blue-500/15 text-blue-300 text-[10px] font-black tracking-widest uppercase mx-auto sm:mx-0">
                  SPECIAL FEATURE
                </span>
                <h3 className="text-2xl font-black mb-2 text-white">EGDesk AI Agent</h3>
                <p className="text-slate-350 text-sm font-semibold mb-6">SMS Platform 50 AI Agent</p>
                <div className="text-blue-400 group-hover:text-blue-300 font-extrabold text-xs flex items-center gap-1.5">
                  자세히 보기
                  <span className="text-sm">→</span>
                </div>
              </div>
              <div className="w-28 h-28 rounded-2xl overflow-hidden border border-slate-800/80 shadow-inner shrink-0 transform group-hover:scale-105 group-hover:border-blue-500/30 transition-all duration-300 relative sm:ml-4">
                <img 
                  src={`${basePath}/assets/egdesk_sms_feature.png`} 
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" 
                  alt="EGDesk SMS Illustration" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent pointer-events-none" />
              </div>
            </a>

            {/* Card 2: 출결관리 시스템 */}
            <div className="bg-[#0c1329] border border-slate-800 rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between relative group hover:border-emerald-500/50 transition-all duration-300 shadow-lg min-h-[180px] text-center sm:text-left gap-6">
              <div className="flex flex-col items-center sm:items-start">
                <span className="inline-block px-3 py-1.5 mb-3 rounded-full bg-emerald-500/15 text-emerald-350 text-[10px] font-black tracking-widest uppercase mx-auto sm:mx-0">
                  CORE SOLUTION
                </span>
                <h3 className="text-2xl font-black mb-2 text-white">전국학원/소상공인을 위한</h3>
                <p className="text-slate-350 text-sm font-semibold mb-6">출결관리/CCTV관제시스템</p>
                <a onClick={() => setShowPrepModal(true)} className="text-emerald-450 hover:text-emerald-350 font-extrabold text-xs flex items-center gap-1.5 cursor-pointer">
                  자세히 보기
                  <span className="text-sm">→</span>
                </a>
              </div>
              <div className="w-28 h-28 rounded-2xl overflow-hidden border border-slate-800/80 shadow-inner shrink-0 transform group-hover:scale-105 group-hover:border-emerald-500/30 transition-all duration-300 relative sm:ml-4">
                <img 
                  src={`${basePath}/assets/attendance_feature.png`} 
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" 
                  alt="Attendance Illustration" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
