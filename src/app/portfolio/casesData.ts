import { getEgdeskBasePath } from '../../../egdesk-helpers';

export interface CaseItem {
  id: string;
  title: string;
  category: 'education' | 'fb_retail' | 'wellness_health' | 'service_const' | 'finance_tech';
  categoryLabel: string;
  desc: string;
  link: string;
  bgGradient: string;
  tagColor: string;
}

export function getPortfolioCases(): CaseItem[] {
  const basePath = getEgdeskBasePath();
  return [
    {
      id: 'starhouse',
      title: '제주 아크.스타하우스 (Ark.StarHouse)',
      category: 'service_const',
      categoryLabel: 'HOTEL & VENUE',
      desc: '제주 애월 20개 객실, 게스트하우스, 50인 세미나실, 60평 수제공방 및 300평 야외 바베큐 파티장 복합 공간',
      link: `${basePath}/starhouse/index.html`,
      bgGradient: 'from-amber-900 via-slate-900 to-amber-950',
      tagColor: 'bg-amber-400/20 text-amber-300 border-amber-400/30'
    },
    {
      id: 'flower',
      title: '하나북카페 | 도심 속 힐링 공간',
      category: 'fb_retail',
      categoryLabel: 'Cafe & Space',
      desc: '커피와 책, 그리고 쉼이 있는 하나북카페 프리미엄 랜딩 페이지',
      link: `${basePath}/cmyongil/index.html`,
      bgGradient: 'from-amber-955 via-slate-900 to-amber-950',
      tagColor: 'bg-amber-400/20 text-amber-300 border-amber-400/30'
    },
    {
      id: 'hanaflower',
      title: '하나꽃집 | 답례품 & 플라워 코너',
      category: 'fb_retail',
      categoryLabel: 'Flower & Gardening',
      desc: '프리미엄 감성 꽃다발과 답례품/선물 전용 코너가 연동된 공식 웹사이트',
      link: `${basePath}/cmyongil/flower.html`,
      bgGradient: 'from-emerald-955 via-slate-900 to-emerald-900',
      tagColor: 'bg-emerald-400/20 text-emerald-300 border-emerald-400/30'
    },
    {
      id: 'byeolbam',
      title: '별밤지기노래타운 중문점',
      category: 'fb_retail',
      categoryLabel: 'ENTERTAINMENT & PUB',
      desc: '제주 롯데호텔 바로 옆 위치! 제주 중문단지 유일한 프리미엄 노래주점 및 단체/가족 예약 전문',
      link: `${basePath}/byeolbam/index.html`,
      bgGradient: 'from-purple-900 via-slate-900 to-pink-900',
      tagColor: 'bg-purple-400/20 text-purple-300 border-purple-400/30'
    },
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
      title: '웅진프리드라이프 제주오라(의전)',
      category: 'finance_tech',
      categoryLabel: 'FINANCE & LIFE CARE',
      desc: '업계 1위 웅진프리드라이프 제주지점 공식 리뉴얼 홈페이지 및 정밀 수당 계산기 시뮬레이터 연동',
      link: `${basePath}/preed/index.html`,
      bgGradient: 'from-indigo-955 via-slate-900 to-indigo-900',
      tagColor: 'bg-indigo-400/20 text-indigo-300 border-indigo-400/30'
    },
    {
      id: 'marijoa',
      title: '마리조아 본점 | 명품 말고기 전문점',
      category: 'fb_retail',
      categoryLabel: 'Premium F&B',
      desc: '제주 말고기 코스요리 명가 마리조아 본점의 고급 정통 말고기 전문점 랜딩 페이지',
      link: `${basePath}/marijoa/index.html`,
      bgGradient: 'from-amber-955 via-slate-900 to-red-955',
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
      bgGradient: 'from-blue-955 via-slate-900 to-blue-900',
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
}
