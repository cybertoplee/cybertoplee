'use client';

import React, { useState } from 'react';
import { getEgdeskBasePath } from '../../../egdesk-helpers';
import { getPortfolioCases, CaseItem } from './casesData';

const CATEGORIES = [
  { id: 'all', label: '전체 보기' },
  { id: 'education', label: '교육·학원' },
  { id: 'fb_retail', label: '식음료·소매' },
  { id: 'wellness_health', label: '건강·웰니스' },
  { id: 'service_const', label: '생활·서비스·인테리어' },
  { id: 'finance_tech', label: '금융·기술·플랫폼' }
] as const;

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showPrepModal, setShowPrepModal] = useState(false);

  const cases: CaseItem[] = getPortfolioCases();

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
              제작사례 포트폴리오({cases.length}종)
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
