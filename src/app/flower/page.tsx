'use client';

import React, { useState, useEffect } from 'react';
import Script from 'next/script';
import { getEgdeskBasePath } from '../../../egdesk-helpers';

export default function FlowerPage() {
    const basePath = getEgdeskBasePath();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isExitModalOpen, setIsExitModalOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if(element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
        setIsMenuOpen(false);
    };

    const handleExit = () => {
        document.body.innerHTML = `
            <div style="display:flex; height:100vh; width:100vw; align-items:center; justify-content:center; background-color:#fdfbf7; flex-direction:column; font-family:sans-serif;">
                <div style="font-size:3rem; color:#8b5a2b; margin-bottom:1rem;">☕</div>
                <h1 style="color:#333; margin-bottom:10px;">이용해주셔서 감사합니다.</h1>
                <p style="color:#666;">안전하게 종료되었습니다.</p>
            </div>
        `;
        setTimeout(() => {
            window.location.href = "/portfolio";
        }, 1500);
    };

    const photos = [
        {id: "REVIEW_10", type: "리뷰"}, {id: "REVIEW_11", type: "리뷰"},
        {id: "업체_12", type: "업체"}, {id: "업체_13", type: "업체"}, {id: "업체_14", type: "업체"},
        {id: "REVIEW_15", type: "리뷰"}, {id: "REVIEW_16", type: "리뷰"}, {id: "REVIEW_17", type: "리뷰"},
        {id: "업체_18", type: "업체"}, {id: "업체_19", type: "업체"},
        {id: "REVIEW_20", type: "리뷰"}, {id: "REVIEW_21", type: "리뷰"}, {id: "REVIEW_22", type: "리뷰"}
    ];
    
    const colors = ['#8b5a2b', '#4a7c59', '#d4a373', '#ccd5ae', '#e9edc9'];

    return (
        <div className="antialiased font-sans" style={{ backgroundColor: '#fdfbf7', color: '#333' }}>
            <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
            <Script id="tailwind-config" strategy="beforeInteractive">
                {`
                    tailwind.config = {
                        theme: {
                            extend: {
                                fontFamily: {
                                    sans: ['Pretendard', 'sans-serif'],
                                },
                                colors: {
                                    brand: {
                                        light: '#fdfbf7',
                                        DEFAULT: '#8b5a2b',
                                        dark: '#5c3a18',
                                        accent: '#4a7c59'
                                    }
                                }
                            }
                        }
                    }
                `}
            </Script>

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
            <link rel="stylesheet" as="style" crossOrigin="anonymous" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/static/pretendard.css" />

            <style dangerouslySetInnerHTML={{__html: `
                html { scroll-behavior: smooth; }
                ::-webkit-scrollbar { width: 8px; }
                ::-webkit-scrollbar-track { background: #f1f1f1; }
                ::-webkit-scrollbar-thumb { background: #8b5a2b; border-radius: 4px; }
                ::-webkit-scrollbar-thumb:hover { background: #5c3a18; }
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                    100% { transform: translateY(0px); }
                }
                .floating { animation: float 3s ease-in-out infinite; }
            `}} />

            {/* Navigation */}
            <nav className={`fixed w-full z-50 backdrop-blur transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-md' : 'bg-brand-light/95'}`} id="navbar">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('home')}>
                            <div className="w-10 h-10 bg-brand rounded-full flex items-center justify-center text-white text-xl shadow-lg">
                                <i className="fa-solid fa-book-open"></i>
                            </div>
                            <span className="font-bold text-2xl tracking-tight text-brand-dark">하나북카페</span>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-brand font-medium transition-colors">홈</button>
                            <button onClick={() => scrollToSection('menu')} className="text-gray-700 hover:text-brand font-medium transition-colors">메뉴</button>
                            <button onClick={() => scrollToSection('photo')} className="text-gray-700 hover:text-brand font-medium transition-colors">사진</button>
                            <button onClick={() => scrollToSection('info')} className="text-gray-700 hover:text-brand font-medium transition-colors">정보</button>
                            <button onClick={() => scrollToSection('review')} className="text-gray-700 hover:text-brand font-medium transition-colors">리뷰</button>
                            <button onClick={() => scrollToSection('reservation')} className="bg-brand text-white px-6 py-2 rounded-full font-medium hover:bg-brand-dark transition-colors shadow-md">예약하기</button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-brand focus:outline-none">
                                <i className="fa-solid fa-bars text-2xl"></i>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-brand-light border-t border-gray-200">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <button onClick={() => scrollToSection('home')} className="w-full text-left block px-3 py-2 text-gray-700 hover:text-brand font-medium">홈</button>
                            <button onClick={() => scrollToSection('menu')} className="w-full text-left block px-3 py-2 text-gray-700 hover:text-brand font-medium">메뉴</button>
                            <button onClick={() => scrollToSection('photo')} className="w-full text-left block px-3 py-2 text-gray-700 hover:text-brand font-medium">사진</button>
                            <button onClick={() => scrollToSection('info')} className="w-full text-left block px-3 py-2 text-gray-700 hover:text-brand font-medium">정보</button>
                            <button onClick={() => scrollToSection('review')} className="w-full text-left block px-3 py-2 text-gray-700 hover:text-brand font-medium">리뷰</button>
                            <button onClick={() => scrollToSection('reservation')} className="w-full text-left block px-3 py-2 text-brand font-bold">예약하기</button>
                        </div>
                    </div>
                )}
            </nav>

            {/* Home Section */}
            <section id="home" className="pt-20">
                {/* Hero Banner */}
                <div className="relative h-[75vh] min-h-[550px] flex items-center justify-center overflow-hidden group">
                    {/* Background Images with smooth scale effect */}
                    <div className="absolute inset-0 flex w-full h-full z-0">
                        <div 
                            className="w-1/2 h-full bg-cover bg-center border-r-[2px] border-white/20 transition-transform duration-[20000ms] ease-out group-hover:scale-110" 
                            style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url('${basePath}/flower/hero_left.jpg')` }}
                        ></div>
                        <div 
                            className="w-1/2 h-full bg-cover bg-center transition-transform duration-[20000ms] ease-out group-hover:scale-110" 
                            style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url('${basePath}/flower/hero_right.jpg')` }}
                        ></div>
                    </div>
                    
                    {/* Hero Content */}
                    <div className="text-center px-4 relative z-10 drop-shadow-lg">
                        <span className="inline-block py-1 px-3 rounded-full bg-brand/80 text-white text-sm mb-4 backdrop-blur">도심 속 작은 여유</span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            커피와 책, 그리고 쉼<br />
                            <span className="text-amber-300">하나북카페</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                            하나카페, 북카페, 가성비 커피, 한강라면, 생과일쥬스까지.<br />당신의 하루를 채워줄 모든 것이 준비되어 있습니다.
                        </p>
                        <button onClick={() => scrollToSection('info')} className="inline-flex items-center gap-2 bg-white text-brand px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition duration-300 shadow-lg">
                            자세히 보기 <i className="fa-solid fa-arrow-down"></i>
                        </button>
                    </div>
                    
                    {/* Wave Divider */}
                    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                        <svg className="block w-full h-[50px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,115.11,189.22,92.83,235.86,74.92,279.16,66.87,321.39,56.44Z" fill="#fdfbf7"></path>
                        </svg>
                    </div>
                </div>

                {/* Notice Banner */}
                <div className="max-w-4xl mx-auto px-4 -mt-10 relative z-20">
                    <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-blue-500 flex flex-col md:flex-row items-center gap-6">
                        <div className="bg-blue-50 p-4 rounded-full text-blue-500 text-3xl shrink-0">
                            <i className="fa-solid fa-bullhorn"></i>
                        </div>
                        <div>
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                                <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2.5 py-0.5 rounded">행정안전부</span>
                                <span className="bg-green-100 text-green-800 text-xs font-bold px-2.5 py-0.5 rounded">민생플러스+</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-1">고유가 피해지원금 사용 가능 매장</h3>
                            <p className="text-sm text-gray-600">
                                본 매장은 신용·체크카드를 통한 고유가 피해지원금 결제가 가능합니다. <br className="hidden md:block" />
                                <span className="text-xs text-gray-400">* 가맹점 정보는 사업주 및 카드사 제공 정보이며, 방문 전 매장에 확인 부탁드립니다.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Menu Section */}
            <section id="menu" className="py-20 bg-brand-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">대표 메뉴</h2>
                        <div className="w-20 h-1 bg-brand mx-auto rounded"></div>
                        <p className="mt-4 text-gray-600">가성비 넘치는 음료부터 든든한 간식까지</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                            <div className="h-48 overflow-hidden relative">
                                <img src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=500" alt="핸드드립 커피" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute top-3 right-3 bg-brand text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">Best</div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">프리미엄 핸드드립</h3>
                                <p className="text-gray-600 text-sm mb-4">전문 바리스타가 직접 내리는 향긋한 스페셜티 커피</p>
                                <div className="font-bold text-brand text-lg">변동</div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                            <div className="h-48 overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1595981267035-7b04d84b4e1e?auto=format&fit=crop&q=80&w=500" alt="가성비 업 커피" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">가성비 업 커피</h3>
                                <p className="text-gray-600 text-sm mb-4">착한 가격에 즐기는 대용량 아메리카노</p>
                                <div className="font-bold text-brand text-lg">착한가격</div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                            <div className="h-48 overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&q=80&w=500" alt="한강라면" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">즉석 한강라면</h3>
                                <p className="text-gray-600 text-sm mb-4">책 읽다 출출할 때 즐기는 즉석 조리 기계 라면</p>
                                <div className="font-bold text-brand text-lg">인기</div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                            <div className="h-48 overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1622597467836-f38240662f25?auto=format&fit=crop&q=80&w=500" alt="생과일 주스" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">100% 생과일 쥬스</h3>
                                <p className="text-gray-600 text-sm mb-4">신선한 제철 과일만을 갈아 만든 건강 음료</p>
                                <div className="font-bold text-brand text-lg">건강추천</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Photo Section */}
            <section id="photo" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-end mb-10">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">갤러리 & 포토</h2>
                            <div className="w-20 h-1 bg-brand rounded"></div>
                        </div>
                        <span className="text-sm text-gray-500 hidden sm:block">스크롤하여 더 보기 <i className="fa-solid fa-arrow-right-long ml-2"></i></span>
                    </div>

                    <div className="flex gap-4 overflow-x-auto pb-8 no-scrollbar snap-x">
                        {photos.map((photo, index) => {
                            const bgColor = colors[index % colors.length].substring(1);
                            return (
                                <div key={index} className="flex-none w-64 md:w-80 snap-center group relative overflow-hidden rounded-2xl shadow-md cursor-pointer">
                                    <img src={`https://placehold.co/600x800/${bgColor}/ffffff?text=${photo.id}`} alt={photo.id} className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                        <div>
                                            <span className="inline-block px-2 py-1 bg-white/20 backdrop-blur rounded text-white text-xs mb-2">{photo.type} 포토</span>
                                            <h4 className="text-white font-bold text-lg">{photo.id}</h4>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Info Section */}
            <section id="info" className="py-20 bg-brand-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">매장 정보</h2>
                        <div className="w-20 h-1 bg-brand mx-auto rounded"></div>
                        <p className="mt-4 text-gray-600">고객님의 편안한 이용을 위한 상세 안내입니다.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-8">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><i className="fa-solid fa-concierge-bell text-brand"></i> 편의시설 및 서비스</h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-6 gap-x-4">
                                    <div className="flex items-center gap-3 text-gray-700"><i className="fa-solid fa-gift w-6 text-center text-amber-500"></i> 생일/기념일 혜택</div>
                                    <div className="flex items-center gap-3 text-gray-700"><i className="fa-solid fa-mug-hot w-6 text-center text-amber-900"></i> 핸드드립</div>
                                    <div className="flex items-center gap-3 text-gray-700"><i className="fa-solid fa-users w-6 text-center text-blue-500"></i> 단체 이용 가능</div>
                                    <div className="flex items-center gap-3 text-gray-700"><i className="fa-solid fa-box w-6 text-center text-orange-500"></i> 포장 가능</div>
                                    <div className="flex items-center gap-3 text-gray-700"><i className="fa-solid fa-motorcycle w-6 text-center text-red-500"></i> 배달 가능</div>
                                    <div className="flex items-center gap-3 text-gray-700"><i className="fa-regular fa-calendar-check w-6 text-center text-green-600"></i> 예약 가능</div>
                                    <div className="flex items-center gap-3 text-gray-700"><i className="fa-solid fa-wifi w-6 text-center text-blue-400"></i> 무선 인터넷</div>
                                    <div className="flex items-center gap-3 text-gray-700"><i className="fa-solid fa-restroom w-6 text-center text-gray-500"></i> 남/녀 화장실 구분</div>
                                    <div className="flex items-center gap-3 text-gray-700"><i className="fa-solid fa-chair w-6 text-center text-amber-700"></i> 유아의자</div>
                                    <div className="flex items-center gap-3 text-gray-700"><i className="fa-solid fa-couch w-6 text-center text-purple-500"></i> 대기공간</div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-gray-100">
                                    <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2"><i className="fa-brands fa-accessible-icon text-brand"></i> 장애인 편의시설</h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="flex items-center gap-2 text-gray-600"><i className="fa-solid fa-check text-green-500"></i> 화장실 휠체어 이용가능</div>
                                        <div className="flex items-center gap-2 text-gray-600"><i className="fa-solid fa-check text-green-500"></i> 출입구 휠체어 이용가능</div>
                                        <div className="flex items-center gap-2 text-gray-600"><i className="fa-solid fa-check text-green-500"></i> 좌석 휠체어 이용가능</div>
                                        <div className="flex items-center gap-2 text-gray-600"><i className="fa-solid fa-check text-green-500"></i> 장애인 주차구역</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><i className="fa-solid fa-building text-brand"></i> 좌석·공간 및 대관</h3>
                                <div className="flex flex-col sm:flex-row gap-6">
                                    <div className="flex-1 space-y-3">
                                        <p className="text-gray-700 flex items-center gap-2"><i className="fa-solid fa-people-roof w-5 text-gray-400"></i> <strong>대관 가능:</strong> 갤러리, 소규모 모임 가능</p>
                                        <p className="text-gray-700 flex items-center gap-2"><i className="fa-solid fa-users-line w-5 text-gray-400"></i> <strong>수용 인원:</strong> 최소 40명 ~ 최대 50명</p>
                                        <div className="flex gap-2 mt-2">
                                            <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">좌식</span>
                                            <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">카운터석</span>
                                            <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">단체석</span>
                                        </div>
                                    </div>
                                    <div className="bg-brand-light p-4 rounded-xl flex-shrink-0 text-center flex flex-col justify-center">
                                        <span className="text-sm text-gray-500 block mb-1">대관 문의</span>
                                        <a href="tel:064-757-5611" className="text-xl font-bold text-brand hover:underline">064-757-5611</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500 text-white rounded-bl-full flex items-start justify-end p-3"><i className="fa-solid fa-parking text-xl"></i></div>
                                <h3 className="text-lg font-bold mb-4">주차 안내 (무료)</h3>
                                <p className="text-gray-700 mb-2">주변 무료주차가 가능합니다.</p>
                                <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 mt-4">
                                    <span className="block text-sm font-bold text-gray-800 mb-1"><i className="fa-solid fa-map-pin text-red-500"></i> 인근 대체 주차장 (960m)</span>
                                    <span className="text-sm text-gray-600">제주 제주시 용담1동 2-1</span>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><i className="fa-solid fa-wine-bottle text-red-800"></i> 주류 및 콜키지</h3>
                                <div className="flex items-center gap-3 text-red-600 font-medium bg-red-50 p-3 rounded-lg">
                                    <i className="fa-solid fa-ban"></i> 콜키지 불가
                                </div>
                                <p className="text-sm text-gray-500 mt-2 ml-1">외부 주류 반입은 허용되지 않습니다.</p>
                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><i className="fa-solid fa-credit-card text-gray-700"></i> 결제수단</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2 text-gray-700"><i className="fa-solid fa-coins text-yellow-500 w-5"></i> 지역화폐 (카드형)</li>
                                    <li className="flex items-center gap-2 text-gray-700"><i className="fa-brands fa-alipay text-blue-500 w-5"></i> 간편결제</li>
                                    <li className="flex items-center gap-2 text-gray-700 font-medium"><i className="fa-solid fa-hand-holding-dollar text-green-600 w-5"></i> 고유가 피해지원금 (신용·체크)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Review Section */}
            <section id="review" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">방문객 리뷰</h2>
                        <div className="w-20 h-1 bg-brand mx-auto rounded"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-gray-50 p-6 rounded-2xl relative">
                            <i className="fa-solid fa-quote-left text-4xl text-gray-200 absolute top-4 left-4"></i>
                            <div className="relative z-10 pt-4">
                                <div className="flex text-yellow-400 mb-3 text-sm">
                                    <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                                </div>
                                <p className="text-gray-700 mb-4">"분위기가 너무 좋고, 한강라면 먹으면서 책 읽으니 천국이 따로 없네요! 주차도 편해서 자주 올 것 같아요."</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-brand rounded-full text-white flex items-center justify-center font-bold">김</div>
                                    <div>
                                        <h5 className="font-bold text-sm">김*수 방문객</h5>
                                        <span className="text-xs text-gray-500">2026.07 방문</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-2xl relative">
                            <i className="fa-solid fa-quote-left text-4xl text-gray-200 absolute top-4 left-4"></i>
                            <div className="relative z-10 pt-4">
                                <div className="flex text-yellow-400 mb-3 text-sm">
                                    <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                                </div>
                                <p className="text-gray-700 mb-4">"갤러리 공간 대관해서 소규모 모임 했는데 정말 완벽했습니다. 생과일 주스도 진짜 신선해요. 강추합니다!"</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-brand-accent rounded-full text-white flex items-center justify-center font-bold">이</div>
                                    <div>
                                        <h5 className="font-bold text-sm">이*진 방문객</h5>
                                        <span className="text-xs text-gray-500">2026.06 방문</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-2xl relative">
                            <i className="fa-solid fa-quote-left text-4xl text-gray-200 absolute top-4 left-4"></i>
                            <div className="relative z-10 pt-4">
                                <div className="flex text-yellow-400 mb-3 text-sm">
                                    <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star-half-stroke"></i>
                                </div>
                                <p className="text-gray-700 mb-4">"핸드드립 커피 향이 예술이에요. 정부 지원금 결제도 되니까 부담 없이 맛있는 커피 즐겼습니다."</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gray-400 rounded-full text-white flex items-center justify-center font-bold">박</div>
                                    <div>
                                        <h5 className="font-bold text-sm">박*현 방문객</h5>
                                        <span className="text-xs text-gray-500">2026.06 방문</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reservation & Flower Shop Section */}
            <section id="reservation" className="py-20 bg-brand text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="text-center md:text-left">
                            <h2 className="text-4xl font-bold mb-6">예약 및 문의</h2>
                            <p className="text-brand-light/80 mb-8 text-lg">단체 예약, 갤러리 대관, 기타 문의사항은<br />아래 번호로 언제든 편하게 연락 주세요.</p>
                            
                            <div className="bg-white/10 p-8 rounded-3xl backdrop-blur-sm border border-white/20 inline-block w-full md:w-auto">
                                <div className="text-sm text-brand-light/70 mb-2 font-medium">전화 예약 / 상담</div>
                                <a href="tel:0507-1321-5611" className="text-4xl md:text-5xl font-bold text-white tracking-wider flex items-center justify-center md:justify-start gap-4 floating">
                                    <i className="fa-solid fa-phone-volume opacity-80"></i>
                                    0507-1321-5611
                                </a>
                                <div className="mt-6 flex flex-wrap gap-2 justify-center md:justify-start">
                                    <span className="bg-white text-brand px-4 py-2 rounded-full text-sm font-bold shadow"><i className="fa-solid fa-users"></i> 단체 예약</span>
                                    <span className="bg-white text-brand px-4 py-2 rounded-full text-sm font-bold shadow"><i className="fa-solid fa-store"></i> 대관 문의</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-3xl p-2 shadow-2xl transform md:rotate-2 hover:rotate-0 transition-transform duration-300">
                            <div className="bg-green-50 rounded-2xl p-8 h-full border border-green-100 flex flex-col justify-center text-center">
                                <div className="w-16 h-16 bg-brand-accent mx-auto rounded-full flex items-center justify-center text-white text-2xl mb-4 shadow-lg">
                                    <i className="fa-solid fa-leaf"></i>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">하나꽃집</h3>
                                <p className="text-gray-600 mb-6 text-sm">카페와 함께하는 아름다운 꽃, 싱그러움을 선물하세요.</p>
                                
                                <a href="https://pcmap.place.naver.com/place/2005144997/home?fromPanelNum=1&additionalHeight=76&timestamp=202607130915&locale=ko&svcName=map_pcv5" target="_blank" rel="noreferrer" className="block w-full bg-[#03C75A] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#02b351] transition shadow-md flex items-center justify-center gap-2">
                                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M16.273 12.845 7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z"/></svg>
                                    네이버 플레이스 보기
                                </a>
                                <p className="text-xs text-gray-400 mt-4">* 하나꽃집의 다양한 사진과 정보, 예약을 확인해보세요.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Banners & Links */}
            <footer className="bg-gray-900 text-white pt-16 pb-8 border-t-[10px] border-brand-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <h4 className="text-xl font-bold mb-6 text-gray-300">바로가기 및 공식 채널</h4>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="http://place.map.kakao.com/772505588?referrer=daumsearch_local" target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-[#FFE812] text-[#3A1D1D] px-6 py-3 rounded-xl font-bold hover:bg-[#f4dd0e] transition shadow hover:-translate-y-1">
                                <i className="fa-solid fa-map-location-dot"></i> 다음 카카오맵
                            </a>
                            <a href="https://map.naver.com/" target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-[#03C75A] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#02b351] transition shadow hover:-translate-y-1">
                                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M16.273 12.845 7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z"/></svg>
                                네이버 플레이스
                            </a>
                            <a href="#" className="flex items-center gap-3 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition shadow hover:-translate-y-1">
                                <i className="fa-brands fa-instagram text-xl"></i> 인스타그램
                            </a>
                            <a href="#" className="flex items-center gap-3 bg-[#1877F2] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#166fe5] transition shadow hover:-translate-y-1">
                                <i className="fa-brands fa-facebook-f text-xl"></i> 페이스북
                            </a>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
                        <div>
                            <p className="mb-1"><strong>하나북카페</strong> | 예약/문의: 0507-1321-5611 | 대관문의: 064-757-5611</p>
                            <p>본 사이트는 포트폴리오/시연 용도로 제작되었습니다.</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <span>&copy; 2026 하나북카페. All rights reserved.</span>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Custom Exit Message Modal */}
            <div id="exitModal" className={`fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 ${isExitModalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className={`bg-white rounded-3xl p-8 max-w-sm w-full mx-4 shadow-2xl transform transition-transform duration-300 ${isExitModalOpen ? 'scale-100' : 'scale-95'}`}>
                    <div className="text-center">
                        <div className="w-20 h-20 bg-brand/10 rounded-full mx-auto flex items-center justify-center mb-6">
                            <i className="fa-solid fa-door-open text-4xl text-brand"></i>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">나가시겠습니까?</h3>
                        <p className="text-gray-600 mb-8">하나북카페를 찾아주셔서 감사합니다.<br />오늘도 좋은 하루 보내세요!</p>
                        <div className="flex gap-3">
                            <button onClick={() => setIsExitModalOpen(false)} className="flex-1 py-3 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition">취소</button>
                            <button onClick={handleExit} className="flex-1 py-3 bg-brand text-white font-bold rounded-xl hover:bg-brand-dark transition shadow-md">나가기</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Exit Button */}
            <button onClick={() => setIsExitModalOpen(true)} className="fixed bottom-6 right-6 w-16 h-16 bg-gray-800 text-white rounded-full shadow-2xl flex flex-col items-center justify-center hover:bg-black transition-transform hover:scale-110 z-40 border-2 border-gray-600 group">
                <i className="fa-solid fa-right-from-bracket text-xl mb-0.5 group-hover:-translate-x-1 transition-transform"></i>
                <span className="text-[10px] font-bold">나가기</span>
            </button>
        </div>
    );
}
