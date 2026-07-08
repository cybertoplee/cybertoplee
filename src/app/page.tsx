'use client';

import React, { useState, useTransition } from 'react';
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
  const [paymentMethod, setPaymentMethod] = useState<'sangjo' | 'insurance'>('sangjo');
  const [showPrepModal, setShowPrepModal] = useState(false);

  const previewImg = `${basePath}/assets/dashboard-lDZ0PVPU.png`;

  const cases: CaseItem[] = [
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
      id: 'korea_pest_control',
      title: '(주)한국방역공사 제주지사',
      category: 'service_const',
      categoryLabel: 'PEST CONTROL',
      desc: '쾌적한 환경을 위한 완벽 방역 가이드 및 전문 서비스',
      link: `${basePath}/korea_pest_control/index.html`,
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
      id: 'insurance_mock',
      title: '설계사 모의고사 문제은행',
      category: 'education',
      categoryLabel: 'AI SMART LEARNING',
      desc: '생명·손해보험 설계사 자격을 위한 실전 모의고사 시뮬레이터',
      link: `${basePath}/insurance_mock/index.html`,
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
      link: '#',
      tagColor: 'text-cyan-600',
      tagBg: 'bg-cyan-50'
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
    <div className="relative z-10">
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
      <section className="relative pt-16 md:pt-24 pb-20 bg-[#0f172a] text-white">
        <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-blue-900/20 via-slate-900/10 to-transparent pointer-events-none z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left aligned info */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 rounded-full bg-blue-650/15 border border-blue-400/30 text-blue-300 text-xs sm:text-sm font-extrabold tracking-widest uppercase shadow-md">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                THIS WEBSITE WAS CREATED WITH EGDESK AI PLATFORM
              </div>
              <h1 className="text-[24px] sm:text-5xl md:text-[3.6rem] lg:text-[3.68rem] font-black leading-[1.2] mb-8 tracking-tight text-white">
                성공을 위한<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">EGDesk AI 웹 호스팅</span> 서비스
              </h1>
              <p className="text-lg sm:text-xl text-slate-200 mb-12 leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0">
                최고의 기술력과 안정적인 인프라를 바탕으로 최적화된 홈페이지 및 모바일 웹 호스팅 서비스를 지원합니다. 이지데스크 AI 플랫폼의 통합 마케팅 교육까지 제공해 드립니다.
              </p>
              
              {/* CTAs styled with clean rounded buttons matching screenshot */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a href="#contact" className="w-full sm:w-auto px-10 py-4.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-black text-lg shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2 group">
                  무료 호스팅 및 제작 문의
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                <a href="#portfolio" className="w-full sm:w-auto px-10 py-4.5 bg-transparent hover:bg-white/10 text-white rounded-xl font-bold text-lg border border-white/20 transition-all flex items-center justify-center">
                  포트폴리오(20종) 확인
                </a>
              </div>
            </div>

            {/* Right aligned YouTube Screen Mockup */}
            <div className="relative flex justify-center w-full max-w-lg mx-auto lg:max-w-none">
              <div className="relative w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
                {!showVideo ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center relative group cursor-pointer bg-[#0b0f19]" onClick={() => setShowVideo(true)}>
                    {/* Tech Grid Background */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] opacity-60" />
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 via-transparent to-slate-950/80 pointer-events-none" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />

                    {/* Logo Graphic */}
                    <div className="relative z-10 flex flex-col items-center mb-8 transform group-hover:scale-105 transition-transform duration-500">
                      {/* Logo Icon Mark */}
                      <div className="w-24 h-24 bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 rounded-[2rem] flex items-center justify-center text-white shadow-2xl shadow-blue-500/30 border border-blue-400/20 mb-5 relative">
                        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 opacity-80 blur-xl -z-10 group-hover:opacity-100 transition-opacity" />
                        <svg className="w-12 h-12 text-white drop-shadow-[0_2px_8px_rgba(255,255,255,0.3)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                          {/* Modern Hexagonal Tech Node logo */}
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                      </div>
                      {/* Brand Text */}
                      <div className="flex items-center gap-2">
                        <span className="text-3xl font-black text-white tracking-tight uppercase">EGDesk</span>
                        <span className="bg-gradient-to-r from-blue-500 to-cyan-400 text-slate-950 text-[11px] font-black px-2.5 py-1 rounded-md shadow-md">AI</span>
                      </div>
                      <span className="text-[10px] font-black text-slate-400 tracking-widest mt-2 uppercase">Web Hosting &amp; Cloud Platform</span>
                    </div>

                    {/* Styled Play Button (replacing red YouTube button) */}
                    <div className="relative z-10 w-16 h-16 bg-slate-950/80 backdrop-blur-md border border-slate-700/80 rounded-full flex items-center justify-center text-white shadow-xl shadow-blue-500/5 group-hover:scale-110 group-hover:border-blue-500 group-hover:text-blue-400 transition-all duration-300">
                      <svg className="w-6 h-6 fill-current ml-1" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <span className="relative z-10 mt-5 text-white font-extrabold tracking-widest text-[11px] bg-slate-950/90 hover:bg-slate-900 px-6 py-3 rounded-full border border-slate-800 shadow-lg transition-colors">
                      유튜브 소개 영상 시청
                    </span>
                  </div>
                ) : (
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/fv3cDrfW-GI?autoplay=1"
                    title="BOSANG Platform Video"
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
      <section className="py-16 bg-[#0f172a] text-white border-t border-slate-900">
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
                <h3 className="text-2xl font-black mb-2 text-white">EGDESK SMS</h3>
                <p className="text-slate-350 text-sm font-semibold mb-6">평생 무료 문자 발송 시스템(데모용)</p>
                <div className="text-blue-400 group-hover:text-blue-300 font-extrabold text-xs flex items-center gap-1.5">
                  자세히 보기
                  <span className="text-sm">→</span>
                </div>
              </div>
              <div className="w-28 h-28 rounded-2xl overflow-hidden border border-slate-800/80 shadow-inner shrink-0 transform group-hover:scale-105 group-hover:border-blue-500/30 transition-all duration-300 relative sm:ml-4">
                <img 
                  src="/assets/egdesk_sms_feature.png" 
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
                <h3 className="text-2xl font-black mb-2 text-white">전국학원/회사출퇴근</h3>
                <p className="text-slate-350 text-sm font-semibold mb-6">출결관리 시스템</p>
                <a onClick={() => setShowPrepModal(true)} className="text-emerald-450 hover:text-emerald-350 font-extrabold text-xs flex items-center gap-1.5 cursor-pointer">
                  자세히 보기
                  <span className="text-sm">→</span>
                </a>
              </div>
              <div className="w-28 h-28 rounded-2xl overflow-hidden border border-slate-800/80 shadow-inner shrink-0 transform group-hover:scale-105 group-hover:border-emerald-500/30 transition-all duration-300 relative sm:ml-4">
                <img 
                  src="/assets/attendance_feature.png" 
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" 
                  alt="Attendance Illustration" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Benefits Section */}
      <section id="benefits" className="pt-10 pb-20 bg-[#0f172a] text-white border-t border-slate-900 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-center md:items-center pb-6 border-b border-slate-800 mb-10 gap-6 text-center md:text-left w-full">
            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 flex-wrap justify-center md:justify-start w-full md:w-auto">
              <h2 className="text-[19px] sm:text-4xl font-black text-white tracking-tight text-center md:text-left w-full md:w-auto">
                월 12만원의 <span className="text-blue-400">압도적 종합 혜택</span>
              </h2>
              <span className="bg-blue-500/15 text-blue-300 border border-blue-400/30 text-[11px] font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-md mx-auto md:mx-0">
                지출이 아닌 자산형성
              </span>
            </div>

            {/* Interactive Payment Switcher */}
            <div className="bg-slate-950 p-1.5 rounded-2xl border border-slate-800 flex gap-2">
              <button
                onClick={() => setPaymentMethod('sangjo')}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all ${
                  paymentMethod === 'sangjo'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                상조로 결제하는 방법
              </button>
              <button
                onClick={() => setPaymentMethod('insurance')}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all ${
                  paymentMethod === 'insurance'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                보험으로 결제하는 방법
              </button>
            </div>
          </div>

          {/* Split Content Layout - Centered single card */}
          <div className="max-w-3xl mx-auto w-full">
            
            {/* Left Card: 개별 마케팅 솔루션 제안 */}
            <div className="bg-slate-950/70 p-8 sm:p-10 rounded-[2.5rem] border border-slate-800 shadow-2xl flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2 text-blue-400 font-black text-lg mb-8 uppercase tracking-wide">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  개별 마케팅 솔루션 제안
                </div>

                <div className="space-y-8">
                  {/* Item 1 */}
                  <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4 text-center sm:text-left">
                    <div className="flex flex-col items-center sm:items-start w-full">
                      <h4 className="text-base sm:text-lg font-extrabold text-white mb-2.5">출결 및 CCTV 보안 관제</h4>
                      <ul className="space-y-2 text-xs sm:text-sm text-slate-100 font-medium text-left">
                        <li className="flex items-start gap-2">
                          <span className="text-blue-400 mt-1">•</span>
                          24시간 원격 실시간 모니터링 및 클라우드 영상 저장
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-450 mt-1">•</span>
                          스마트 출결 알림 및 모바일 실시간 관리 시스템
                        </li>
                      </ul>
                    </div>
                    <span className="shrink-0 bg-slate-900 border border-slate-800 text-blue-300 text-xs sm:text-sm font-black px-4 py-2 rounded-xl text-center shadow-sm w-full sm:w-auto">
                      {paymentMethod === 'sangjo' ? '상조 1구좌(현금 또는 카드 30만원)' : '보험가입'}
                    </span>
                  </div>

                  {/* Item 2 */}
                  <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4 text-center sm:text-left">
                    <div className="flex flex-col items-center sm:items-start w-full">
                      <h4 className="text-base sm:text-lg font-extrabold text-white mb-2.5">프리미엄 반응형 홈페이지</h4>
                      <ul className="space-y-2 text-xs sm:text-sm text-slate-100 font-medium text-left">
                        <li className="flex items-start gap-2">
                          <span className="text-blue-455 mt-1">•</span>
                          SEO 최적화 및 모바일 기기 완벽 대응 UI/UX 설계
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-455 mt-1">•</span>
                          랜딩페이지형, 브로슈어 사이트 맞춤형 제작
                        </li>
                      </ul>
                    </div>
                    <span className="shrink-0 bg-slate-900 border border-slate-800 text-blue-300 text-xs sm:text-sm font-black px-4 py-2 rounded-xl text-center shadow-sm w-full sm:w-auto">
                      {paymentMethod === 'sangjo' ? '상조 2구좌(현금 또는 카드 50만원)' : '보험가입'}
                    </span>
                  </div>

                  {/* Item 3 */}
                  <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4 text-center sm:text-left">
                    <div className="flex flex-col items-center sm:items-start w-full">
                      <h4 className="text-base sm:text-lg font-extrabold text-white mb-2.5">SNS 홍보 및 매출 성장</h4>
                      <ul className="space-y-2 text-xs sm:text-sm text-slate-100 font-medium text-left">
                        <li className="flex items-start gap-2">
                          <span className="text-blue-450 mt-1">•</span>
                          네이버 블로그 월 4회 포스팅 및 유튜브 숏츠 월 2회 제작
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-455 mt-1">•</span>
                          매출 성장을 위한 플랫폼 활용 전문 코칭 지원
                        </li>
                      </ul>
                    </div>
                    <span className="shrink-0 bg-slate-900 border border-slate-800 text-blue-300 text-xs sm:text-sm font-black px-4 py-2 rounded-xl text-center shadow-sm w-full sm:w-auto">
                      {paymentMethod === 'sangjo' ? '상조 2구좌(현금 또는 카드 50만원)' : '보험가입'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Gradient Banner Box */}
              <div className="mt-12 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-6 rounded-[2rem] text-white text-center shadow-xl shadow-blue-500/10">
                <div className="text-xl font-black tracking-tight mb-1.5 flex items-center justify-center gap-2">
                  <span>👑</span> 통합 ALL-IN-ONE 패키지
                </div>
                <div className="text-sm font-extrabold opacity-95 leading-relaxed">
                  {paymentMethod === 'sangjo' ? (
                    <>
                      월 12만원 상당의 상조 상품 가입 시 (24개월 유지조건)<br />
                      * 월 22,500원(1구좌) * 5구좌 = 112,500원<br />
                      <span className="font-black text-base">위 모든 서비스 무료 구축 + 문자 발송 시스템 제공</span>
                    </>
                  ) : (
                    <>
                      월 12만원 이상 종신 / 건강 보험 가입 시 (24개월 의무 유지조건)<br />
                      <span className="font-black text-base">위 모든 서비스 무료 구축 + 문자 발송 시스템 제공</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Section Footer Banner */}
          <div className="mt-16 pt-8 border-t border-slate-900/80 flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm">
            <div className="text-slate-350 font-semibold">
              상담문의: 24시간 비즈니스 파트너 지원센터 | 상담 시 견적서 및 사업제안서 무료 제공
            </div>
            <div className="text-white font-black tracking-tight">
              성공의 격을 높이는 선택, 지금 시작하세요!
            </div>
          </div>
          
        </div>
      </section>

      {/* 4. Portfolio Section (Solid White Theme based on screenshot) */}
      <section id="portfolio" className="py-24 bg-white text-slate-900 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-6 text-center md:text-left w-full">
            <div className="flex flex-col items-center md:items-start w-full md:w-auto">
              <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-blue-50 text-blue-600 font-extrabold tracking-widest text-xs border border-blue-100 mx-auto md:mx-0">
                PORTFOLIO
              </span>
              <h2 className="text-[24px] sm:text-4xl font-black text-slate-900 tracking-tight text-center md:text-left">
                제작사례 포트폴리오
              </h2>
              <p className="text-slate-500 text-sm mt-2 font-medium text-center md:text-left">
                업종별로 맞춤화 및 최적화되어 제공되는 반응형 전면 홈페이지 목록입니다. 각 카드를 클릭하여 개별 홈페이지를 자세히 확인해보세요.
              </p>
            </div>
            {/* Search Input */}
            <div className="w-full md:w-80 relative">
              <input
                type="text"
                placeholder="업종 또는 프로젝트 검색..."
                className="w-full bg-slate-50 border border-slate-200 rounded-full px-6 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all text-slate-900 placeholder-slate-400 font-semibold shadow-inner"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
              <span className="absolute right-5 top-3.5 text-slate-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2.5 mb-12 pb-4 border-b border-slate-100">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-all border ${
                  activeTab === cat.id
                    ? 'bg-blue-600 border-blue-500 text-white shadow-md'
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-blue-600'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Cases Grid */}
          {filteredCases.length === 0 ? (
            <div className="text-center py-24 bg-slate-50 border border-slate-200/80 rounded-[2rem] p-10">
              <p className="text-slate-400 text-lg font-semibold">검색 조건에 맞는 포트폴리오 항목이 존재하지 않습니다.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredCases.map(item => (
                <a
                  key={item.id}
                  href={item.link === '#' ? undefined : item.link}
                  onClick={item.link === '#' ? () => setShowPrepModal(true) : undefined}
                  className="group bg-white p-8 rounded-2xl border border-slate-200/80 hover:border-blue-500/30 transition-all duration-300 shadow-md hover:shadow-xl flex flex-col justify-between min-h-[250px] hover:-translate-y-1 cursor-pointer"
                >
                  <div>
                    <span className={`inline-block px-3 py-1 mb-4 rounded-md text-[9px] font-black border ${item.tagBg} ${item.tagColor}`}>
                      {item.categoryLabel}
                    </span>
                    <h4 className="text-lg font-black text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-slate-550 text-xs sm:text-sm leading-relaxed font-semibold">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-6 flex justify-between items-center text-slate-400 group-hover:text-blue-600 transition-colors border-t border-slate-100 pt-4">
                    <span className="text-[9px] font-black tracking-widest uppercase">SAMPLE VIEW</span>
                    <svg className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 5. Inquiry Form Section (Light Gray Theme based on screenshot) */}
      <section id="contact" className="py-20 bg-slate-50 text-slate-900 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-[3rem] border border-slate-200 shadow-2xl overflow-hidden flex flex-col md:flex-row">
            
            {/* Left Info Panel */}
            <div className="md:w-5/12 bg-blue-600 p-10 sm:p-12 text-white flex flex-col justify-between relative overflow-hidden text-center md:text-left items-center md:items-start">
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none" />
              <div className="relative z-10 flex flex-col justify-between h-full items-center md:items-start text-center md:text-left w-full">
                <div>
                  <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/10 border border-white/20 text-blue-100 text-xs font-black uppercase tracking-wider backdrop-blur-sm mx-auto md:mx-0">
                    Inquiry
                  </div>
                  <h3 className="text-[24px] sm:text-3xl font-black mb-4 leading-tight">제작 및 호스팅 문의</h3>
                  <p className="text-blue-100 text-sm leading-relaxed mb-8 font-medium">
                    가까운 대표님이나 지인을 소개해 주시면 최적의 솔루션과 더불어 파격적인 적금 및 마케팅 혜택을 설계해 드립니다.
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
                  <label className="block text-xs sm:text-sm font-extrabold text-slate-700 mb-2">성함 <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-blue-500 transition text-slate-900 placeholder-slate-400 font-semibold"
                    placeholder="성함을 입력하세요"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-extrabold text-slate-700 mb-2">연락처 <span className="text-red-500">*</span></label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-blue-500 transition text-slate-900 placeholder-slate-400 font-semibold"
                      placeholder="010-0000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-extrabold text-slate-700 mb-2">이메일</label>
                    <input
                      type="email"
                      name="email"
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-blue-500 transition text-slate-900 placeholder-slate-400 font-semibold"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-extrabold text-slate-700 mb-2">문의내용</label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-blue-500 transition text-slate-900 resize-none placeholder-slate-400 font-semibold"
                    placeholder="문의하시고자 하는 내용을 적어주세요."
                  />
                </div>

                {/* Form feedback message */}
                {formState.success && (
                  <div className="bg-emerald-550/10 border border-emerald-500/30 text-emerald-600 text-xs p-4 rounded-xl font-bold flex items-center gap-2">
                    <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>문의 접수가 완료되었습니다. 신속하게 연락 드리겠습니다! {formState.note && `(${formState.note})`}</span>
                  </div>
                )}
                {formState.error && (
                  <div className="bg-red-500/10 border border-red-500/30 text-red-650 text-xs p-4 rounded-xl font-bold flex items-center gap-2">
                    <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{formState.error}</span>
                  </div>
                )}

                {/* Mobile integration guide text */}
                <div className="text-[12px] sm:text-xs text-blue-700 flex items-start gap-2.5 bg-blue-50 p-4 rounded-xl border border-blue-100 mb-4 leading-relaxed font-semibold">
                  <svg className="w-4.5 h-4.5 text-blue-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      </section>
    </div>
  );
}
