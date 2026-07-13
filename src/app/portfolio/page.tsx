'use client';

import React, { useState } from 'react';
import { getEgdeskBasePath } from '../../../egdesk-helpers';

interface CaseItem {
  id: string;
  title: string;
  category: 'education' | 'fb_retail' | 'wellness_health' | 'service_const' | 'finance_tech';
  categoryLabel: string;
  desc: string;
  link: string;
  bgGradient: string;
  tagColor: string;
}

const CATEGORIES = [
  { id: 'all', label: '전체 보기' },
  { id: 'education', label: '교육·학원' },
  { id: 'fb_retail', label: '식음료·소매' },
  { id: 'wellness_health', label: '건강·웰니스' },
  { id: 'service_const', label: '생활·서비스·인테리어' },
  { id: 'finance_tech', label: '금융·기술·플랫폼' }
] as const;

export default function PortfolioPage() {
  const basePath = getEgdeskBasePath();
  const [activeTab, setActiveTab] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showPrepModal, setShowPrepModal] = useState(false);

  const cases: CaseItem[] = [
    {
      id: 'suyong',
      title: '차귀도 수용배낚시',
      category: 'service_const',
      categoryLabel: 'LEISURE & SERVICE',
      desc: '제주 고산 차귀도 대표 배낚시 체험 공식 안내 및 실시간 네이버 예약 랜딩 페이지',
      link: `${basePath}/suyong/index.html`,
      bgGradient: 'from-sky-955 via-slate-900 to-sky-900',
      tagColor: 'bg-sky-400/20 text-sky-300 border-sky-400/30'
    },
    {
      id: 'preed',
      title: '웅진프리드라이프 제주오라사업점',
      category: 'finance_tech',
      categoryLabel: 'FINANCE & LIFE CARE',
      desc: '업계 1위 웅진프리드라이프 제주지점 공식 리뉴얼 홈페이지 및 정밀 수당 계산기 시뮬레이터 연동',
      link: `${basePath}/preed/index.html`,
      bgGradient: 'from-indigo-955 via-slate-900 to-indigo-900',
      tagColor: 'bg-indigo-400/20 text-indigo-300 border-indigo-400/30'
    },
    {
      id: 'flower',
      title: '하나북카페 | 도심 속 힐링 공간',
      category: 'fb_retail',
      categoryLabel: 'Cafe & Space',
      desc: '커피와 책, 그리고 쉼이 있는 하나북카페 프리미엄 랜딩 페이지',
      link: `${basePath}/flower`,
      bgGradient: 'from-amber-950 via-slate-900 to-amber-900',
      tagColor: 'bg-amber-400/20 text-amber-300 border-amber-400/30'
    },
    {
      id: 'jejuowner',
      title: '(주)오너 / 제주오너센터',
      category: 'wellness_health',
      categoryLabel: 'Wellness & Health',
      desc: '프리미엄 웰니스 케어 및 4종 토탈 체험 프로모션 웹사이트',
      link: `${basePath}/jejuowner/index.html`,
      bgGradient: 'from-emerald-950 via-slate-900 to-emerald-900',
      tagColor: 'bg-emerald-400/20 text-emerald-300 border-emerald-400/30'
    },
    {
      id: 'mijoo',
      title: '미주보석 (제주팔찌 제주금은방)',
      category: 'fb_retail',
      categoryLabel: 'Jewelry & Gold',
      desc: '고급스러운 감성의 럭셔리 주얼리 프로모션 웹사이트',
      link: `${basePath}/mijoo/index.html`,
      bgGradient: 'from-amber-950 via-slate-900 to-amber-900',
      tagColor: 'bg-amber-400/20 text-amber-300 border-amber-400/30'
    },
    {
      id: 'lchayim',
      title: '르하임스터디카페 제주아라점',
      category: 'education',
      categoryLabel: 'Cafe & Space',
      desc: '프랜차이즈 감각과 매장 정보를 담은 홍보 홈페이지',
      link: `${basePath}/lchayim/index.html`,
      bgGradient: 'from-pink-950 via-slate-900 to-pink-900',
      tagColor: 'bg-pink-400/20 text-pink-300 border-pink-400/30'
    },
    {
      id: 'koryo',
      title: '고려신용정보 제주지점',
      category: 'service_const',
      categoryLabel: 'Service',
      desc: '신뢰도 높은 전문 비즈니스 서비스 시안',
      link: `${basePath}/koryo/index.html`,
      bgGradient: 'from-blue-950 via-slate-900 to-blue-900',
      tagColor: 'bg-blue-400/20 text-blue-300 border-blue-400/30'
    },
    {
      id: 'sunbaek',
      title: '순백순두부 식당',
      category: 'fb_retail',
      categoryLabel: 'F&B',
      desc: '식당의 맛과 메뉴를 직관적으로 보여주는 랜딩 페이지',
      link: `${basePath}/sunbaek/index.html`,
      bgGradient: 'from-orange-955 via-slate-900 to-orange-900',
      tagColor: 'bg-orange-400/20 text-orange-300 border-orange-400/30'
    },
    {
      id: 'charlie',
      title: '찰리아저씨 맛집',
      category: 'fb_retail',
      categoryLabel: 'Local Food',
      desc: '제주 바다와 차귀도의 감성을 담은 로컬 식당',
      link: `${basePath}/charlie/index.html`,
      bgGradient: 'from-teal-955 via-slate-900 to-teal-900',
      tagColor: 'bg-teal-400/20 text-teal-300 border-teal-400/30'
    },
    {
      id: 'ildokickboxing',
      title: 'TEAM일도킥복싱멀티짐',
      category: 'wellness_health',
      categoryLabel: 'Kickboxing & MMA',
      desc: '강렬하고 역동적인 입식 타격 전문 체육관 프로모션 웹페이지',
      link: `${basePath}/ildokickboxing/index.html`,
      bgGradient: 'from-red-955 via-slate-900 to-red-900',
      tagColor: 'bg-red-400/20 text-red-300 border-red-400/30'
    },
    {
      id: 'wellbeing',
      title: '제주웰빙황토지압원',
      category: 'wellness_health',
      categoryLabel: 'Health',
      desc: '건강과 힐링의 가치를 전달하는 전문 사이트',
      link: `${basePath}/wellbeing/index.html`,
      bgGradient: 'from-yellow-955 via-slate-900 to-yellow-900',
      tagColor: 'bg-yellow-400/20 text-yellow-300 border-yellow-400/30'
    },
    {
      id: 'waterproof',
      title: '제주 리치하우스',
      category: 'service_const',
      categoryLabel: 'Waterproofing',
      desc: '서비스 예약과 고객 중심의 완벽한 방수 시공',
      link: `${basePath}/waterproof/index.html`,
      bgGradient: 'from-cyan-955 via-slate-900 to-cyan-900',
      tagColor: 'bg-cyan-400/20 text-cyan-300 border-cyan-400/30'
    },
    {
      id: 'hyeseong',
      title: '혜성인테리어',
      category: 'service_const',
      categoryLabel: 'Interior Design',
      desc: '바닥재·벽지·블라인드 전문 인테리어 시공 사례',
      link: `${basePath}/hyeseong/index.html`,
      bgGradient: 'from-purple-955 via-slate-900 to-purple-900',
      tagColor: 'bg-purple-400/20 text-purple-300 border-purple-400/30'
    },
    {
      id: 'koreapestcontrol',
      title: '(주)한국방역공사 제주지사',
      category: 'service_const',
      categoryLabel: 'Pest Control',
      desc: '쾌적한 환경을 위한 완벽 방역 가이드 및 전문 서비스',
      link: `${basePath}/koreapestcontrol/index.html`,
      bgGradient: 'from-emerald-955 via-slate-900 to-slate-900',
      tagColor: 'bg-emerald-400/20 text-emerald-300 border-emerald-400/30'
    },
    {
      id: 'carwash',
      title: '영평OK셀프세차타운',
      category: 'service_const',
      categoryLabel: 'Auto Care',
      desc: '최고급 시설을 갖춘 프리미엄 셀프 세차장 소개',
      link: `${basePath}/carwash/index.html`,
      bgGradient: 'from-cyan-955 via-slate-900 to-slate-900',
      tagColor: 'bg-cyan-400/20 text-cyan-300 border-cyan-400/30'
    },
    {
      id: 'ghost',
      title: '제주고스트타운',
      category: 'wellness_health',
      categoryLabel: 'Theme Park',
      desc: '애월 야간 명소, 짜릿한 공포와 VR 체험 테마파크',
      link: `${basePath}/ghost/index.html`,
      bgGradient: 'from-red-955 via-slate-900 to-black',
      tagColor: 'bg-red-400/20 text-red-300 border-red-400/30'
    },
    {
      id: 'academy',
      title: '우리동네학원 홈페이지',
      category: 'education',
      categoryLabel: 'Education Portal',
      desc: '지역별, 과목별 학원 정보 매칭 및 홍보 플랫폼',
      link: `${basePath}/academy/index.html`,
      bgGradient: 'from-emerald-955 via-slate-900 to-emerald-900',
      tagColor: 'bg-emerald-400/20 text-emerald-300 border-emerald-400/30'
    },
    {
      id: 'exam',
      title: '우리동네학원 문제은행',
      category: 'education',
      categoryLabel: 'Education',
      desc: '학습 콘텐츠와 데이터 관리에 특화된 교육용 플랫폼',
      link: `${basePath}/exam/index.html`,
      bgGradient: 'from-purple-955 via-slate-900 to-indigo-950',
      tagColor: 'bg-purple-400/20 text-purple-300 border-purple-400/30'
    },
    {
      id: 'korean',
      title: '언어영역(국어) 플랫폼',
      category: 'education',
      categoryLabel: 'Education Content',
      desc: '학습 자료 아카이브 및 문제 제공용 인터페이스',
      link: `${basePath}/korean/index.html`,
      bgGradient: 'from-indigo-900 via-slate-900 to-slate-900',
      tagColor: 'bg-indigo-400/20 text-indigo-300 border-indigo-400/30'
    },
    {
      id: 'insurancemock',
      title: '설계사 모의고사 문제은행',
      category: 'education',
      categoryLabel: 'AI Smart Learning',
      desc: '생명·손해보험 설계사 자격을 위한 실전 모의고사 시뮬레이터',
      link: `${basePath}/insurancemock/index.html`,
      bgGradient: 'from-indigo-955 via-slate-900 to-blue-900',
      tagColor: 'bg-indigo-400/20 text-indigo-300 border-indigo-400/30'
    },
    {
      id: 'jokbo',
      title: '족보닷컴 문제은행',
      category: 'education',
      categoryLabel: 'Test Data',
      desc: '대규모 기출 데이터 관리를 위한 깔끔한 UI',
      link: `${basePath}/jokbo/index.html`,
      bgGradient: 'from-blue-955 via-slate-900 to-indigo-900',
      tagColor: 'bg-blue-400/20 text-blue-300 border-blue-400/30'
    },
    {
      id: 'aitax',
      title: 'AITAX (AI 세무대리인)',
      category: 'finance_tech',
      categoryLabel: 'Tax & Finance',
      desc: '최적화된 AI 절세 분석 및 원클릭 세무 신고',
      link: `${basePath}/aitax/index.html`,
      bgGradient: 'from-indigo-900 via-slate-900 to-purple-900',
      tagColor: 'bg-indigo-400/20 text-indigo-300 border-indigo-400/30'
    },
    {
      id: 'unione',
      title: 'UNIONE 유니원 금융 플랫폼 (WEB3)',
      category: 'finance_tech',
      categoryLabel: 'WEB3 FINTECH',
      desc: '글로벌 Web3 금융 플랫폼. 획기적인 일 0.5% 복복리 수익 시뮬레이터 연동',
      link: `${basePath}/unione/index.html`,
      bgGradient: 'from-indigo-955 via-slate-900 to-indigo-900',
      tagColor: 'bg-indigo-400/20 text-indigo-300 border-indigo-400/30'
    }
  ];

  const filteredCases = cases.filter(c => {
    const matchesCategory = activeTab === 'all' || c.category === activeTab;
    const matchesSearch = c.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          c.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="relative pt-12 pb-24 z-10">
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

      {/* Background Glow */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-6 text-center md:text-left w-full">
          <div className="flex flex-col items-center md:items-start w-full md:w-auto">
            <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-blue-500/15 text-blue-300 font-extrabold tracking-widest text-xs border border-blue-400/30 mx-auto md:mx-0">
              PORTFOLIO
            </span>
            <h2 className="text-[24px] sm:text-4xl font-black text-white tracking-tight">
              제작사례 포트폴리오
            </h2>
            <p className="text-slate-300 text-sm mt-2 font-medium">
              보상 플랫폼이 구축한 업종별 프리미엄 비즈니스 시안 채널입니다.
            </p>
          </div>
          {/* Search Input */}
          <div className="w-full md:w-80 relative">
            <input
              type="text"
              placeholder="업종 또는 프로젝트 검색..."
              className="w-full bg-slate-900 border border-slate-700 rounded-2xl px-5 py-3.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-all text-white placeholder-slate-400 font-semibold"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
            <span className="absolute right-4 top-4 text-slate-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-12 pb-4 border-b border-slate-900">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-3 rounded-full text-xs sm:text-sm font-extrabold transition-all border ${
                activeTab === cat.id
                  ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-600/20'
                  : 'bg-slate-900 border-slate-800 text-slate-200 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Cases Grid */}
        {filteredCases.length === 0 ? (
          <div className="text-center py-24 bg-slate-900/40 border border-slate-800 rounded-[2rem] p-10">
            <p className="text-slate-400 text-lg font-semibold">검색 조건에 맞는 포트폴리오 항목이 존재하지 않습니다.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredCases.map(item => (
              <a
                key={item.id}
                href={item.link === '#' ? undefined : item.link}
                onClick={item.link === '#' ? () => setShowPrepModal(true) : undefined}
                className={`group relative overflow-hidden bg-gradient-to-br ${item.bgGradient} p-8 rounded-[2rem] border border-slate-850 hover:border-slate-600 transition-all duration-300 shadow-xl flex flex-col justify-between min-h-[280px] hover:-translate-y-1.5 cursor-pointer`}
              >
                <div>
                  <span className={`inline-block px-3 py-1.5 rounded-full text-[10px] font-bold border ${item.tagColor} mb-5`}>
                    {item.categoryLabel}
                  </span>
                  <h4 className="text-lg sm:text-xl font-extrabold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-8 flex justify-between items-center text-slate-350 group-hover:text-white transition-colors">
                  <span className="text-[10px] font-black tracking-widest uppercase">SAMPLE VIEW</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
