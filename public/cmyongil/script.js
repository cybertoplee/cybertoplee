document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Data Configuration for Hana Book Cafe & Hana Flower Shop
    const siteData = {
        cafe: {
            brandName: '하나북카페',
            logoIcon: 'fa-mug-hot',
            hero: {
                subtitle: 'Cafe & Space',
                title: '하나북카페 | 도심 속 힐링 공간',
                desc: '커피와 책, 그리고 쉼이 있는 하나북카페 프리미엄 공간',
                btnText: '대표 메뉴 보기'
            },
            menu: [
                {
                    title: '어쿠스틱 북 데이트',
                    desc: '아늑한 소파석에서 낭만적인 기타 선율과 책이 어우러지는 감성 데이트 코스',
                    tag: '감성추천',
                    price: '이용권 별도',
                    img: 'image/cafe/menu_1.jpg'
                },
                {
                    title: '북토크 & 디저트 테이블',
                    desc: '넓고 편안한 원목 테이블에서 향긋한 아메리카노와 달콤한 마카롱을 곁들이며 나누는 북토크',
                    tag: '커플인기',
                    price: '디저트 세트',
                    img: 'image/cafe/menu_2.jpg'
                },
                {
                    title: '프라이빗 창가 힐링석',
                    desc: '아기자기한 별빛 조명 아래, 나란히 앉아 책과 커피를 즐길 수 있는 로맨틱한 창가 자리',
                    tag: '분위기최고',
                    price: '창가석 예약',
                    img: 'image/cafe/menu_3.jpg'
                },
                {
                    title: '달콤한 디저트 타임',
                    desc: '풍성한 생딸기 수플레 팬케이크와 시원한 음료로 당 충전하는 달콤한 데이트',
                    tag: '베스트셀러',
                    price: '시그니처 세트',
                    img: 'image/cafe/menu_4.jpg'
                },
                {
                    title: '즉석 한강라면',
                    desc: '출출할 때 즉석 조리기로 직접 끓여 먹는 가장 맛있는 꼬들 라면',
                    tag: '별미추천',
                    price: '가성비 굿',
                    img: 'image/cafe/menu_5.jpg'
                },
                {
                    title: '다함께 독서 모임',
                    desc: '남녀노소 누구나 모여 넓은 테이블에서 맛있는 음료와 함께 책을 나눌 수 있는 단체석',
                    tag: '모임추천',
                    price: '단체 환영',
                    img: 'image/cafe/menu_6.jpg'
                }
            ],
            photos: [
                { src: 'image/cafe/gallery_1.jpg', caption: '싱그러운 화분 좌석' },
                { src: 'image/cafe/gallery_2.jpg', caption: '편안한 우드 데스크' },
                { src: 'image/cafe/gallery_3.jpg', caption: '아늑한 힐링 공간' },
                { src: 'image/cafe/gallery_4.jpg', caption: '창가석 힐링 뷰' },
                { src: 'image/cafe/gallery_5.jpg', caption: '여유로운 독서 공간' },
                { src: 'image/cafe/gallery_6.jpg', caption: '넓은 다목적 홀' },
                { src: 'image/cafe/gallery_7.jpg', caption: '가득한 책과 쉼' },
                { src: 'image/cafe/gallery_8.jpg', caption: '아늑한 몰입석' },
                { src: 'image/cafe/gallery_9.jpg', caption: '디저트 쇼케이스' },
                { src: 'image/cafe/gallery_10.jpg', caption: '탁 트인 창가 바' },
                { src: 'image/cafe/gallery_11.jpg', caption: '풍성한 스낵 코너' },
                { src: 'image/cafe/gallery_12.jpg', caption: '감성 가득 카페 홀' }
            ],
            defaultReviews: [
                // ROW 1
                {
                    id: 'cafe_default_1',
                    content: '분위기가 너무 좋고, 한강라면 먹으면서 책 읽으니 천국이 따로 없네요! 주차도 편해서 자주 올 것 같아요.',
                    author: '김*수 방문객',
                    date: '2026-07-10',
                    stars: 5
                },
                {
                    id: 'cafe_default_2',
                    content: '갤러리 공간 대관해서 소규모 모임 했는데 정말 완벽했습니다. 생과일 주스도 진짜 신선해요. 강추합니다!',
                    author: '이*진 방문객',
                    date: '2026-06-20',
                    stars: 5
                },
                {
                    id: 'cafe_default_3',
                    content: '핸드드립 커피 향이 예술이에요. 정부 지원금 결제도 되니까 부담 없이 맛있는 커피 즐겼습니다.',
                    author: '박*현 방문객',
                    date: '2026-06-15',
                    stars: 5
                },
                // ROW 2 (ADDED ROW 1)
                {
                    id: 'cafe_default_4',
                    content: '창가 석에서 노을 바라보며 수플레 팬케이크랑 라떼 먹는데 너무 힐링됐어요. 데이트 코스로 최고입니다!',
                    author: '최*아 방문객',
                    date: '2026-06-08',
                    stars: 5
                },
                {
                    id: 'cafe_default_5',
                    content: '독서 모임 장소로 10명이 예약하고 방문했는데 테이블이 크고 조용해서 집중하기 아주 좋았습니다. 사장님도 친절하세요!',
                    author: '정*우 방문객',
                    date: '2026-05-28',
                    stars: 5
                },
                {
                    id: 'cafe_default_6',
                    content: '아이들과 주말 나들이로 들렀는데 책 종류도 다양하고 에이드랑 아이스크림도 너무 맛있어서 온 가족이 대만족했습니다.',
                    author: '강*희 방문객',
                    date: '2026-05-19',
                    stars: 5
                },
                // ROW 3 (ADDED ROW 2)
                {
                    id: 'cafe_default_7',
                    content: '연북로 근처에서 제일 분위기 있는 북카페예요. 조용하게 작업하거나 책 읽기에 딱 좋습니다. 재방문 의사 200%!',
                    author: '윤*호 방문객',
                    date: '2026-05-10',
                    stars: 5
                },
                {
                    id: 'cafe_default_8',
                    content: '어쿠스틱 북 데이트 코스로 방문했어요. 잔잔한 음악과 커피, 감성적인 인테리어 덕분에 특별한 추억 만들고 갑니다.',
                    author: '임*영 방문객',
                    date: '2026-05-02',
                    stars: 5
                },
                {
                    id: 'cafe_default_9',
                    content: '즉석 조리기 라면 끓여먹고 원두커피 마시니까 신선한 조합인데 의외로 너무 맛있어서 놀랐어요 ㅋㅋㅋ 자주 올게요!',
                    author: '한*솔 방문객',
                    date: '2026-04-25',
                    stars: 5
                }
            ],
            reservation: {
                text: '소규모 모임, 테이블 대관, 북카페 공간 예약 등 맞춤형 상담을 위해 편하게 연락 주세요. 친절하게 안내해 드립니다.',
                phone: '0507-1321-5611',
                card: {
                    icon: 'fa-calendar-check',
                    title: '실시간 네이버 예약',
                    desc: '하나북카페 예약 및 매장 공식 플레이스 연결을 지원합니다.',
                    btnText: '네이버 플레이스 바로가기',
                    url: 'https://pcmap.place.naver.com/restaurant/2084020084/home?bk_query=%ED%95%98%EB%82%98%EB%B6%81%EC%B9%B4%ED%8E%98'
                }
            }
        },
        flower: {
            brandName: '하나꽃집',
            logoIcon: 'fa-leaf',
            hero: {
                subtitle: 'Flower & Gardening',
                title: '하나꽃집 | 일상에 향기를 더합니다',
                desc: '프리미엄 플라워 디자인과 싱그러운 반려 식물이 함께하는 전용 꽃집',
                btnText: '추천 상품 보기'
            },
            menu: [
                {
                    title: '실내 화분 쇼핑',
                    desc: '다양한 공기정화 식물과 예쁜 화분을 직접 고르고 데이트하며 즐기는 실내 식물 쇼핑',
                    tag: '베스트',
                    price: '다양한 화분',
                    img: 'image/flower/flower_menu_1.jpg'
                },
                {
                    title: '야외 테라스 정원',
                    desc: '햇살 가득한 외부 미니 정원에서 싱그러운 야외 식물들을 둘러볼 수 있는 데이트 코스',
                    tag: '데이트추천',
                    price: '관엽식물',
                    img: 'image/flower/flower_menu_2.jpg'
                },
                {
                    title: '플라워 블록 세트',
                    desc: '시들지 않는 아름다움, 둘이서 함께 직접 조립하며 추억을 만들 수 있는 인기 플라워 블록',
                    tag: '인기선물',
                    price: '블록 패키지',
                    img: 'image/flower/flower_menu_3.jpg'
                },
                {
                    title: '온 가족 실내 식물원',
                    desc: '남녀노소 가족 모두가 함께 방문하여 다채로운 대형 관엽식물과 화분들을 구경하는 대형 실내 식물 공간',
                    tag: '가족추천',
                    price: '대형 화분',
                    img: 'image/flower/flower_menu_4.jpg'
                },
                {
                    title: '다함께 야외 정원 나들이',
                    desc: '따스한 햇살 아래 다양한 계절꽃과 모종들을 아이들과 함께 고르며 즐기는 야외 정원 나들이',
                    tag: '인기코스',
                    price: '야외 모종',
                    img: 'image/flower/flower_menu_5.jpg'
                },
                {
                    title: '스페셜 하트 포토존',
                    desc: '로맨틱한 분위기를 자아내는 하트 모양의 스탠드와 예쁜 다육이, 플라워 베어가 장식된 포토존',
                    tag: '인증샷필수',
                    price: '선물용 소품',
                    img: 'image/flower/flower_menu_6.jpg'
                }
            ],
            photos: [
                { src: 'image/flower/KakaoTalk_20260713_194816093.jpg', caption: '감성 리시안셔스 다발' },
                { src: 'image/flower/KakaoTalk_20260713_194816093_01.jpg', caption: '핑크 수국과 반려식물' },
                { src: 'image/flower/KakaoTalk_20260713_194816093_02.jpg', caption: '로맨틱 하트 포토존' },
                { src: 'image/flower/KakaoTalk_20260713_194816093_03.jpg', caption: '화사한 매장 입구' },
                { src: 'image/flower/KakaoTalk_20260713_194816093_04.jpg', caption: '노란 튤립 테이블 장식' },
                { src: 'image/flower/KakaoTalk_20260713_194816093_05.jpg', caption: '우아한 플로랄 아치' },
                { src: 'image/flower/KakaoTalk_20260713_194816093_06.jpg', caption: '화이트 로즈 센터피스' },
                { src: 'image/flower/KakaoTalk_20260713_194816093_07.jpg', caption: '싱그러운 유칼립투스' },
                { src: 'image/flower/KakaoTalk_20260713_194829033.mp4', caption: '플라워 메이킹 필름', isVideo: true },
                { src: 'image/flower/flower_menu_1.jpg', caption: '다양한 실내 공기정화' },
                { src: 'image/flower/flower_menu_2.jpg', caption: '프리미엄 감동 꽃다발' },
                { src: 'image/flower/flower_menu_3.jpg', caption: '즐거운 플라워 클래스' }
            ],
            defaultReviews: [
                {
                    id: 'flower_default_1',
                    content: '부모님 환갑 선물로 꽃바구니 주문했는데 정말 너무 고급스럽고 예쁘게 제작해 주셨어요! 부모님도 정말 좋아하셨습니다.',
                    author: '최*아 방문객',
                    date: '2026-07-11',
                    stars: 5
                },
                {
                    id: 'flower_default_2',
                    content: '꽃집 분위기 자체가 너무 힐링이에요. 식물 추천도 꼼꼼하게 설명해 주셔서 첫 반려식물 무사히 잘 키우고 있어요.',
                    author: '강*민 방문객',
                    date: '2026-06-25',
                    stars: 5
                },
                {
                    id: 'flower_default_3',
                    content: '프리미엄 퀄리티가 확실히 다릅니다. 꽃 조합이 촌스럽지 않고 아주 감각적이라 앞으로 단골 예약입니다!',
                    author: '정*서 방문객',
                    date: '2026-06-18',
                    stars: 5
                },
                {
                    id: 'flower_default_4',
                    content: '친구 개업식 축하 화분으로 몬스테라 주문했는데 잎이 엄청 무성하고 튼튼해요. 배달도 시간 맞춰 정확히 도착했습니다.',
                    author: '송*우 방문객',
                    date: '2026-06-05',
                    stars: 5
                },
                {
                    id: 'flower_default_5',
                    content: '원데이 플라워 클래스 듣고 왔는데 선생님이 차근차근 잘 가르쳐 주셔서 멋진 작품 만들었어요. 주말 클래스 강추!',
                    author: '임*희 방문객',
                    date: '2026-05-22',
                    stars: 5
                },
                {
                    id: 'flower_default_6',
                    content: '프로포즈용 100송이 장미 꽃다발 문의드렸는데 포장까지 완성도 높게 준비해 주셔서 성공적으로 프로포즈 마쳤습니다!',
                    author: '배*현 방문객',
                    date: '2026-05-14',
                    stars: 5
                },
                {
                    id: 'flower_default_7',
                    content: '집안 분위기 바꾸려고 테이블용 서양란 화분 샀는데 유기농 흙이랑 관리 방법까지 써주셔서 너무 감사해요.',
                    author: '권*미 방문객',
                    date: '2026-05-04',
                    stars: 5
                },
                {
                    id: 'flower_default:8',
                    content: '여자친구 생일날 리시안셔스 다발 선물했는데 색감이 은은하고 진짜 오래 가네요. 신선도가 대박입니다.',
                    author: '조*성 방문객',
                    date: '2026-04-28',
                    stars: 5
                },
                {
                    id: 'flower_default_9',
                    content: '매장 안 구경만 해도 숲속에 온 것 같아요. 공기정화 다육이 세트 몇 개 사왔는데 볼 때마다 기분 좋아집니다.',
                    author: '윤*진 방문객',
                    date: '2026-04-18',
                    stars: 5
                }
            ],
            reservation: {
                text: '프리미엄 꽃선물 제작 예약 및 원데이 플라워 클래스, 대관 문의 등 정성껏 상담해 드립니다. 아래 예약 버튼을 통해 쉽게 신청하세요.',
                phone: '0507-1321-5611',
                card: {
                    icon: 'fa-seedling',
                    title: '네이버 예약 바로가기',
                    desc: '하나꽃집의 실시간 클래스 예약 및 기념일 꽃선물 제작을 연동합니다.',
                    btnText: '네이버 예약 신청',
                    url: 'https://pcmap.place.naver.com/place/2005144997/home?fromPanelNum=1&additionalHeight=76&timestamp=202607130915&locale=ko&svcName=map_pcv5'
                }
            }
        }
    };

    // Determine Theme Based on Current File (flower.html -> flower, else cafe)
    const isFlowerPage = window.location.pathname.endsWith('flower.html');
    const activeTheme = isFlowerPage ? 'flower' : 'cafe';
    const data = siteData[activeTheme];

    // 2. DOM Elements
    const menuGridEl = document.getElementById('menu-grid');
    const galleryGridEl = document.getElementById('gallery-grid');
    const galleryCountEl = document.getElementById('gallery-count');
    const reviewsGridEl = document.getElementById('reviews-grid');
    
    // Mobile Drawer Menu
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
            const drawer = mobileMenu.querySelector('div');
            if (drawer) drawer.classList.remove('translate-x-full');
        });
    }

    const closeDrawer = () => {
        if (mobileMenu) {
            mobileMenu.classList.add('opacity-0', 'pointer-events-none');
            const drawer = mobileMenu.querySelector('div');
            if (drawer) drawer.classList.add('translate-x-full');
        }
    };

    if (mobileMenuClose) mobileMenuClose.addEventListener('click', closeDrawer);
    mobileNavLinks.forEach(link => link.addEventListener('click', closeDrawer));

    // 3. Render Menu Cards
    if (menuGridEl && data.menu) {
        menuGridEl.innerHTML = data.menu.map(item => `
            <div class="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col justify-between">
                <div>
                    <div class="h-60 overflow-hidden relative">
                        <img src="${item.img}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold ${activeTheme === 'cafe' ? 'text-amber-800' : 'text-emerald-800'} shadow-sm">
                            ${item.tag}
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:${activeTheme === 'cafe' ? 'text-amber-700' : 'text-emerald-700'} transition-colors">${item.title}</h3>
                        <p class="text-gray-600 text-sm leading-relaxed">${item.desc}</p>
                    </div>
                </div>
                <div class="px-6 pb-6 pt-2 flex items-center justify-between border-t border-gray-50 mt-4">
                    <span class="text-xs font-bold text-gray-400">구분: ${item.price}</span>
                    <a href="#reservation" class="text-xs font-bold ${activeTheme === 'cafe' ? 'text-amber-700 hover:text-amber-900' : 'text-emerald-700 hover:text-emerald-900'} flex items-center gap-1">
                        예약 문의 <i class="fa-solid fa-arrow-right text-[10px]"></i>
                    </a>
                </div>
            </div>
        `).join('');
    }

    // 4. Render Gallery & Lightbox Modal
    if (galleryGridEl && data.photos) {
        if (galleryCountEl) galleryCountEl.textContent = `총 ${data.photos.length}개의 고화질 갤러리`;

        galleryGridEl.innerHTML = data.photos.map((item, idx) => `
            <div class="gallery-item cursor-pointer rounded-2xl overflow-hidden relative group aspect-square shadow-sm hover:shadow-md transition-all duration-300" data-index="${idx}">
                ${item.isVideo ? `
                    <video src="${item.src}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" muted loop autoplay playsinline></video>
                    <div class="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                        <i class="fa-solid fa-circle-play text-white text-3xl opacity-80 group-hover:scale-125 transition-transform"></i>
                    </div>
                ` : `
                    <img src="${item.src}" alt="${item.caption}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <span class="text-white text-xs font-bold">${item.caption}</span>
                    </div>
                `}
            </div>
        `).join('');

        // Lightbox Popup Modal
        const galleryModal = document.getElementById('gallery-modal');
        const modalMediaContainer = document.getElementById('modal-media-container');
        const modalCaption = document.getElementById('modal-caption');
        const modalClose = document.getElementById('modal-close');
        let currentModalIdx = 0;

        function openGalleryModal(idx) {
            currentModalIdx = idx;
            const photo = data.photos[idx];
            if (!photo || !galleryModal) return;

            if (photo.isVideo) {
                modalMediaContainer.innerHTML = `<video src="${photo.src}" controls autoplay class="max-h-[75vh] max-w-full rounded-2xl shadow-2xl"></video>`;
            } else {
                modalMediaContainer.innerHTML = `<img src="${photo.src}" alt="${photo.caption}" class="max-h-[75vh] max-w-full rounded-2xl shadow-2xl object-contain">`;
            }
            if (modalCaption) modalCaption.textContent = photo.caption;
            galleryModal.classList.remove('hidden');
            galleryModal.classList.add('flex');
            document.body.style.overflow = 'hidden';
        }

        function closeGalleryModal() {
            if (!galleryModal) return;
            galleryModal.classList.add('hidden');
            galleryModal.classList.remove('flex');
            modalMediaContainer.innerHTML = '';
            document.body.style.overflow = '';
        }

        document.querySelectorAll('.gallery-item').forEach(el => {
            el.addEventListener('click', () => {
                const idx = parseInt(el.getAttribute('data-index') || '0', 10);
                openGalleryModal(idx);
            });
        });

        if (modalClose) modalClose.addEventListener('click', closeGalleryModal);
        if (galleryModal) {
            galleryModal.addEventListener('click', (e) => {
                if (e.target === galleryModal) closeGalleryModal();
            });
        }
    }

    // 5. Render Reviews (9 reviews: 3 columns x 3 rows)
    if (reviewsGridEl && data.defaultReviews) {
        reviewsGridEl.innerHTML = data.defaultReviews.map(r => `
            <div class="bg-white p-6 sm:p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col justify-between">
                <div>
                    <div class="flex items-center justify-between mb-4">
                        <div class="flex text-amber-400 gap-1 text-sm">
                            ${'<i class="fa-solid fa-star"></i>'.repeat(r.stars)}
                        </div>
                        <span class="text-xs text-gray-400 font-medium">${r.date}</span>
                    </div>
                    <p class="text-gray-700 text-sm leading-relaxed mb-6 font-medium">"${r.content}"</p>
                </div>
                <div class="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 font-bold">
                    <span>${r.author}</span>
                    <span class="${activeTheme === 'cafe' ? 'text-amber-700 bg-amber-50 px-2 py-1 rounded-md' : 'text-emerald-700 bg-emerald-50 px-2 py-1 rounded-md'}">인증 방문자</span>
                </div>
            </div>
        `).join('');
    }

});
