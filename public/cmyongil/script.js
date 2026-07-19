document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Data Config
    const siteData = {
        cafe: {
            brandName: '하나북카페',
            logoIcon: 'fa-mug-hot',
            hero: {
                subtitle: 'Cafe & Space',
                title: '하나북카페 | 도심 속 힐링 공간',
                desc: '커피와 책, 그리고 쉼이 있는 하나북카페 프리미엄 랜딩 페이지',
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
                desc: '프리미엄 플라워 디자인과 싱그러운 반려 식물이 함께하는 프리미엄 꽃집',
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

    let activeTheme = 'cafe';
    let currentGallery = [];
    let modalIndex = 0;

    // 2. DOM Elements
    const bodyEl = document.body;
    const brandLogoEl = document.getElementById('brand-logo');
    const brandNameEl = document.getElementById('brand-name');
    const heroSubtitleEl = document.getElementById('hero-subtitle');
    const heroTitleEl = document.getElementById('hero-title');
    const heroDescEl = document.getElementById('hero-desc');
    const heroPrimaryBtnEl = document.getElementById('hero-primary-btn');
    const heroBgCafeEl = document.getElementById('hero-bg-cafe');
    const heroBgFlowerEl = document.getElementById('hero-bg-flower');
    const menuGridEl = document.getElementById('menu-grid');
    const menuSectionDescEl = document.getElementById('menu-section-desc');
    const galleryGridEl = document.getElementById('gallery-grid');
    const galleryCountEl = document.getElementById('gallery-count');
    const reviewSectionDescEl = document.getElementById('review-section-desc');
    const reviewsGridEl = document.getElementById('reviews-grid');
    const reservationTextEl = document.getElementById('reservation-text');
    const resCardIconEl = document.getElementById('res-card-icon');
    const resCardTitleEl = document.getElementById('res-card-title');
    const resCardDescEl = document.getElementById('res-card-desc');
    const resCardBtnEl = document.getElementById('res-card-btn');

    // Switch buttons
    const btnSwitchCafe = document.getElementById('switch-cafe');
    const btnSwitchFlower = document.getElementById('switch-flower');

    // Info Blocks
    const infoCafeBlock = document.getElementById('info-cafe');
    const infoFlowerBlock = document.getElementById('info-flower');

    // Review Interactive Elements
    const btnWriteReview = document.getElementById('btn-write-review');
    const reviewModal = document.getElementById('review-modal');
    const reviewModalContent = document.getElementById('review-modal-content');
    const btnReviewModalClose = document.getElementById('review-modal-close');
    const btnReviewModalCancel = document.getElementById('review-modal-cancel');
    const reviewForm = document.getElementById('review-form');
    const editReviewIdEl = document.getElementById('edit-review-id');
    const reviewAuthorEl = document.getElementById('review-author');
    const reviewContentEl = document.getElementById('review-content');
    const starRatingSelect = document.getElementById('star-rating-select');
    const selectedStarsValue = document.getElementById('selected-stars-value');
    const reviewModalTitle = document.getElementById('review-modal-title');
    const reviewModalSubmit = document.getElementById('review-modal-submit');

    // 3. LocalStorage Review Operations
    function getReviews(theme) {
        const key = `cmyongil_reviews_${theme}`;
        const localData = localStorage.getItem(key);
        if (localData) {
            try {
                return JSON.parse(localData);
            } catch (e) {
                return siteData[theme].defaultReviews;
            }
        } else {
            // Seed default reviews
            const defaults = siteData[theme].defaultReviews;
            localStorage.setItem(key, JSON.stringify(defaults));
            return defaults;
        }
    }

    function saveReviews(theme, reviewsList) {
        const key = `cmyongil_reviews_${theme}`;
        localStorage.setItem(key, JSON.stringify(reviewsList));
    }

    function addReview(theme, reviewObj) {
        const list = getReviews(theme);
        list.push(reviewObj);
        saveReviews(theme, list);
    }

    function updateReview(theme, id, updatedObj) {
        let list = getReviews(theme);
        list = list.map(item => item.id === id ? { ...item, ...updatedObj } : item);
        saveReviews(theme, list);
    }

    function removeReview(theme, id) {
        let list = getReviews(theme);
        list = list.filter(item => item.id !== id);
        saveReviews(theme, list);
    }

    // 4. Render Reviews List
    function renderReviewsList() {
        reviewsGridEl.innerHTML = '';
        const list = getReviews(activeTheme);

        // Sort by date descending (latest first)
        list.sort((a, b) => new Date(b.date) - new Date(a.date));

        if (list.length === 0) {
            reviewsGridEl.innerHTML = `
                <div class="col-span-full text-center py-10 text-gray-400">
                    <i class="fa-solid fa-comments text-5xl mb-3 block"></i>
                    작성된 리뷰가 없습니다. 첫 리뷰를 작성해 보세요!
                </div>
            `;
            return;
        }

        list.forEach(review => {
            const reviewCard = document.createElement('div');
            reviewCard.className = 'bg-gray-50 rounded-3xl p-6 sm:p-8 border border-gray-100 hover:shadow-xl transition-all duration-350 relative flex flex-col justify-between group/card';
            
            let starHtml = '';
            for (let i = 0; i < 5; i++) {
                if (i < review.stars) {
                    starHtml += '<i class="fa-solid fa-star text-amber-400"></i>';
                } else {
                    starHtml += '<i class="fa-solid fa-star text-gray-200"></i>';
                }
            }
            
            // Format date for UI (e.g. 2026-07-13 -> 2026.07.13)
            const uiDate = review.date ? review.date.replace(/-/g, '.') : '';
            
            reviewCard.innerHTML = `
                <div>
                    <div class="flex items-start justify-between mb-4">
                        <div class="flex text-xs">
                            ${starHtml}
                        </div>
                        <!-- Actions Container (hidden by default, visible on hover) -->
                        <div class="review-card-actions opacity-0 group-hover/card:opacity-100 transition-opacity duration-200">
                            <button class="review-action-btn edit" data-id="${review.id}" title="리뷰 수정">
                                <i class="fa-solid fa-pen"></i>
                            </button>
                            <button class="review-action-btn delete" data-id="${review.id}" title="리뷰 삭제">
                                <i class="fa-solid fa-trash"></i>
                            </button>
                        </div>
                    </div>
                    <div class="relative z-10">
                        <i class="fa-solid fa-quote-left text-3xl opacity-5 absolute -top-4 -left-3" style="color: var(--primary-color);"></i>
                        <p class="text-gray-700 text-sm leading-relaxed mb-6 font-medium whitespace-pre-line">
                            "${review.content}"
                        </p>
                    </div>
                </div>
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-full text-white flex items-center justify-center font-bold text-sm shadow-md" style="background-color: var(--primary-color);">
                        ${review.author.charAt(0)}
                    </div>
                    <div>
                        <h5 class="font-bold text-gray-900 text-sm">${review.author}</h5>
                        <span class="text-xs text-gray-400 block mt-0.5">${uiDate}</span>
                    </div>
                </div>
            `;

            // Attach event listeners for edit and delete inside card
            const btnEdit = reviewCard.querySelector('.review-action-btn.edit');
            const btnDelete = reviewCard.querySelector('.review-action-btn.delete');

            btnEdit.addEventListener('click', (e) => {
                e.stopPropagation();
                openReviewFormForEdit(review.id);
            });

            btnDelete.addEventListener('click', (e) => {
                e.stopPropagation();
                if(confirm('리뷰를 정말로 삭제하시겠습니까?')) {
                    removeReview(activeTheme, review.id);
                    renderReviewsList();
                }
            });

            reviewsGridEl.appendChild(reviewCard);
        });
    }

    // 5. Main Renderer Functions
    function renderTheme(themeKey) {
        activeTheme = themeKey;
        const data = siteData[themeKey];
        
        // Body theme class
        if (themeKey === 'cafe') {
            bodyEl.classList.remove('theme-flower');
            bodyEl.classList.add('theme-cafe');
            btnSwitchCafe.classList.add('active');
            btnSwitchFlower.classList.remove('active');
            heroBgCafeEl.classList.add('active');
            heroBgFlowerEl.classList.remove('active');
            infoCafeBlock.classList.add('active-info-block');
            infoFlowerBlock.classList.remove('active-info-block');
            btnWriteReview.style.backgroundColor = 'var(--primary-color)';
        } else {
            bodyEl.classList.remove('theme-cafe');
            bodyEl.classList.add('theme-flower');
            btnSwitchCafe.classList.remove('active');
            btnSwitchFlower.classList.add('active');
            heroBgCafeEl.classList.remove('active');
            heroBgFlowerEl.classList.add('active');
            infoCafeBlock.classList.remove('active-info-block');
            infoFlowerBlock.classList.add('active-info-block');
            btnWriteReview.style.backgroundColor = 'var(--primary-color)';
        }

        // Header Brand Update
        brandNameEl.textContent = data.brandName;
        brandLogoEl.innerHTML = `<i class="fa-solid ${data.logoIcon} text-lg logo-icon"></i>`;

        // Hero Update
        heroSubtitleEl.textContent = data.hero.subtitle;
        heroTitleEl.textContent = data.hero.title;
        heroDescEl.textContent = data.hero.desc;
        heroPrimaryBtnEl.textContent = data.hero.btnText;

        // Render Menu Cards
        menuSectionDescEl.textContent = themeKey === 'cafe' ? '가성비 넘치는 음료부터 든든한 간식까지 즐겨보세요.' : '우아한 플로랄 디자인과 향기로운 선물 세트를 만나보세요.';
        menuGridEl.innerHTML = '';
        data.menu.forEach(item => {
            const card = document.createElement('div');
            card.className = 'bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100/50 hover:shadow-2xl transition-all duration-300 card-hover-effect flex flex-col h-full';
            card.innerHTML = `
                <div class="h-72 sm:h-80 overflow-hidden relative">
                    <img src="${item.img}" alt="${item.title}" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110">
                    <span class="absolute top-4 right-4 text-sm font-bold text-white px-4 py-1.5 rounded-full shadow-md select-none" style="background-color: var(--primary-color);">
                        ${item.tag}
                    </span>
                </div>
                <div class="p-8 flex flex-col justify-between flex-grow">
                    <div>
                        <h3 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">${item.title}</h3>
                        <p class="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">${item.desc}</p>
                    </div>
                    <div class="font-extrabold text-xl sm:text-2xl flex items-center justify-between" style="color: var(--primary-color);">
                        <span>${item.price}</span>
                        <i class="fa-solid fa-arrow-right text-sm"></i>
                    </div>
                </div>
            `;
            menuGridEl.appendChild(card);
        });

        // Render Photo Gallery
        currentGallery = data.photos;
        galleryCountEl.textContent = `총 ${currentGallery.length}개 포토`;
        galleryGridEl.innerHTML = '';
        currentGallery.forEach((photo, idx) => {
            const div = document.createElement('div');
            div.className = 'gallery-item';
            div.addEventListener('click', () => openModal(idx));
            
            if (photo.isVideo) {
                div.innerHTML = `
                    <video src="${photo.src}" class="w-full h-full object-cover" muted loop autoplay></video>
                    <div class="absolute top-3 right-3 text-white text-xs bg-black/50 px-2 py-0.5 rounded-md flex items-center gap-1">
                        <i class="fa-solid fa-video"></i> 동영상
                    </div>
                    <div class="gallery-overlay">
                        <div>
                            <span class="text-xs text-white/80 font-bold block mb-1">Flower 스케치</span>
                            <h4 class="text-white font-bold text-sm sm:text-base">${photo.caption}</h4>
                        </div>
                    </div>
                `;
            } else {
                div.innerHTML = `
                    <img src="${photo.src}" alt="${photo.caption}" class="w-full h-full object-cover">
                    <div class="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-center pb-3 pointer-events-none">
                        <span class="text-white text-[11px] sm:text-xs font-semibold tracking-wide drop-shadow-md">${photo.caption}</span>
                    </div>
                `;
            }
            galleryGridEl.appendChild(div);
        });

        // Render Reviews
        renderReviewsList();

        // Reservation Section Update
        reservationTextEl.textContent = data.reservation.text;
        resCardIconEl.innerHTML = `<i class="fa-solid ${data.reservation.card.icon}"></i>`;
        resCardIconEl.style.backgroundColor = 'var(--primary-color)';
        resCardTitleEl.textContent = data.reservation.card.title;
        resCardDescEl.textContent = data.reservation.card.desc;
        resCardBtnEl.textContent = data.reservation.card.btnText;
        resCardBtnEl.href = data.reservation.card.url;
        resCardBtnEl.style.backgroundColor = 'var(--primary-color)';
        
        // Modal Submit Button Background Apply
        reviewModalSubmit.style.backgroundColor = 'var(--primary-color)';
    }

    // 6. Switcher Handlers
    btnSwitchCafe.addEventListener('click', () => {
        if (activeTheme !== 'cafe') {
            renderTheme('cafe');
        }
    });

    btnSwitchFlower.addEventListener('click', () => {
        if (activeTheme !== 'flower') {
            renderTheme('flower');
        }
    });

    // 7. Interactive Review Form Handlers
    
    // Open review modal for adding
    btnWriteReview.addEventListener('click', () => {
        // Reset form
        editReviewIdEl.value = '';
        reviewForm.reset();
        selectedStarsValue.value = '5';
        updateStarsUI(5);
        
        // Modal Header Styling
        reviewModalTitle.textContent = '리뷰 작성하기';
        reviewModalSubmit.textContent = '등록하기';
        reviewModalSubmit.style.backgroundColor = 'var(--primary-color)';
        
        // Open
        reviewModal.classList.remove('opacity-0', 'pointer-events-none');
        reviewModalContent.classList.remove('scale-95');
        reviewModalContent.classList.add('scale-100');
        bodyEl.style.overflow = 'hidden';
    });

    // Open review modal for editing
    function openReviewFormForEdit(id) {
        const list = getReviews(activeTheme);
        const review = list.find(item => item.id === id);
        if(!review) return;

        // Populate fields
        editReviewIdEl.value = review.id;
        reviewAuthorEl.value = review.author;
        reviewContentEl.value = review.content;
        selectedStarsValue.value = review.stars;
        updateStarsUI(review.stars);

        // Modal Header Styling
        reviewModalTitle.textContent = '리뷰 수정하기';
        reviewModalSubmit.textContent = '수정 완료';
        reviewModalSubmit.style.backgroundColor = 'var(--primary-color)';

        // Open
        reviewModal.classList.remove('opacity-0', 'pointer-events-none');
        reviewModalContent.classList.remove('scale-95');
        reviewModalContent.classList.add('scale-100');
        bodyEl.style.overflow = 'hidden';
    }

    function closeReviewModal() {
        reviewModal.classList.add('opacity-0', 'pointer-events-none');
        reviewModalContent.classList.remove('scale-100');
        reviewModalContent.classList.add('scale-95');
        bodyEl.style.overflow = '';
    }

    btnReviewModalClose.addEventListener('click', closeReviewModal);
    btnReviewModalCancel.addEventListener('click', closeReviewModal);
    reviewModal.addEventListener('click', (e) => {
        if(e.target === reviewModal) closeReviewModal();
    });

    // Star Selection Logic
    const starIcons = starRatingSelect.querySelectorAll('.star-select-btn');
    
    function updateStarsUI(rating) {
        starIcons.forEach(star => {
            const value = parseInt(star.getAttribute('data-value'));
            if (value <= rating) {
                star.classList.add('active', 'text-amber-400');
                star.classList.remove('text-gray-300');
            } else {
                star.classList.remove('active', 'text-amber-400');
                star.classList.add('text-gray-300');
            }
        });
    }

    starIcons.forEach(star => {
        star.addEventListener('click', () => {
            const value = star.getAttribute('data-value');
            selectedStarsValue.value = value;
            updateStarsUI(parseInt(value));
        });

        star.addEventListener('mouseover', () => {
            const value = parseInt(star.getAttribute('data-value'));
            starIcons.forEach(s => {
                const val = parseInt(s.getAttribute('data-value'));
                if (val <= value) {
                    s.classList.add('text-amber-400');
                    s.classList.remove('text-gray-300');
                } else {
                    s.classList.remove('text-amber-400');
                    s.classList.add('text-gray-300');
                }
            });
        });
    });

    starRatingSelect.addEventListener('mouseleave', () => {
        const currentRating = parseInt(selectedStarsValue.value);
        updateStarsUI(currentRating);
    });

    // Submit Review (Add or Edit)
    reviewForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const reviewId = editReviewIdEl.value;
        const author = reviewAuthorEl.value.trim();
        const content = reviewContentEl.value.trim();
        const stars = parseInt(selectedStarsValue.value);
        const todayStr = new Date().toISOString().substring(0, 10); // Format YYYY-MM-DD

        if (reviewId) {
            // Edit mode
            updateReview(activeTheme, reviewId, {
                author,
                content,
                stars
            });
        } else {
            // Add mode
            const newId = `user_${activeTheme}_${Date.now()}`;
            addReview(activeTheme, {
                id: newId,
                author,
                content,
                stars,
                date: todayStr
            });
        }

        closeReviewModal();
        renderReviewsList();
    });

    // 8. Image Modal Viewer Handlers
    const imageModal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const modalCaption = document.getElementById('modal-caption');
    const btnModalClose = document.getElementById('modal-close-btn');
    const btnModalPrev = document.getElementById('modal-prev-btn');
    const btnModalNext = document.getElementById('modal-next-btn');

    function openModal(target, caption = '') {
        const videoEl = document.getElementById('modal-video-playing');

        if (typeof target === 'number') {
            modalIndex = target;
            const item = currentGallery[modalIndex];
            
            // Show navigation buttons
            btnModalPrev.style.display = 'block';
            btnModalNext.style.display = 'block';

            // Set content
            if (item.isVideo) {
                modalImage.style.display = 'none';
                if(!videoEl) {
                    const newVideoEl = document.createElement('video');
                    newVideoEl.id = 'modal-video-playing';
                    newVideoEl.className = 'max-w-full max-h-[72vh] object-contain rounded-lg shadow-2xl';
                    newVideoEl.controls = true;
                    newVideoEl.autoplay = true;
                    modalImage.parentNode.insertBefore(newVideoEl, modalCaption);
                } else {
                    const freshVideo = document.getElementById('modal-video-playing');
                    freshVideo.style.display = 'block';
                    freshVideo.src = item.src;
                }
            } else {
                const freshVideo = document.getElementById('modal-video-playing');
                if (freshVideo) freshVideo.style.display = 'none';
                modalImage.style.display = 'block';
                modalImage.src = item.src;
            }
            modalCaption.textContent = item.caption;
        } else {
            // Single image mode (from any clicked IMG tag)
            modalIndex = -1;
            
            // Hide navigation buttons
            btnModalPrev.style.display = 'none';
            btnModalNext.style.display = 'none';
            
            // Hide video
            const freshVideo = document.getElementById('modal-video-playing');
            if (freshVideo) freshVideo.style.display = 'none';
            
            // Set image
            modalImage.style.display = 'block';
            modalImage.src = target;
            modalCaption.textContent = caption;
        }
        
        // Show modal
        imageModal.classList.remove('opacity-0', 'pointer-events-none');
        bodyEl.style.overflow = 'hidden';
    }

    function closeModal() {
        imageModal.classList.add('opacity-0', 'pointer-events-none');
        bodyEl.style.overflow = '';
        const videoEl = document.getElementById('modal-video-playing');
        if (videoEl) {
            videoEl.pause();
            videoEl.src = '';
        }
    }

    function nextModal() {
        if (modalIndex === -1) return;
        modalIndex = (modalIndex + 1) % currentGallery.length;
        openModal(modalIndex);
    }

    function prevModal() {
        if (modalIndex === -1) return;
        modalIndex = (modalIndex - 1 + currentGallery.length) % currentGallery.length;
        openModal(modalIndex);
    }

    btnModalClose.addEventListener('click', closeModal);
    btnModalNext.addEventListener('click', nextModal);
    btnModalPrev.addEventListener('click', prevModal);
    imageModal.addEventListener('click', (e) => {
        if (e.target === imageModal) closeModal();
    });

    // Delegated click handler for any image tags outside gallery
    document.addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG' && !e.target.closest('.gallery-item') && e.target.id !== 'modal-image') {
            const src = e.target.src;
            const caption = e.target.alt || e.target.title || '이미지 확대';
            openModal(src, caption);
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!imageModal.classList.contains('opacity-0')) {
            if (e.key === 'Escape') closeModal();
            if (e.key === 'ArrowRight') nextModal();
            if (e.key === 'ArrowLeft') prevModal();
        }
    });

    // 9. Navigation Link Highlighting on Scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    const headerEl = document.getElementById('header');

    window.addEventListener('scroll', () => {
        let currentSectionId = 'home';
        
        // Header styling on scroll
        if (window.scrollY > 50) {
            headerEl.classList.add('shadow-md', 'bg-white/95');
            headerEl.classList.remove('bg-white/80');
        } else {
            headerEl.classList.remove('shadow-md', 'bg-white/95');
            headerEl.classList.add('bg-white/80');
        }

        sections.forEach(sec => {
            const secTop = sec.offsetTop - 120;
            const secHeight = sec.offsetHeight;
            if (window.scrollY >= secTop && window.scrollY < secTop + secHeight) {
                currentSectionId = sec.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });

        mobileNavLinks.forEach(link => {
            link.classList.remove('text-gray-900', 'font-bold');
            link.classList.add('text-gray-600');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.remove('text-gray-600');
                link.classList.add('text-gray-900', 'font-bold');
            }
        });
    });

    // Smooth Scroll Offset
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetEl = document.getElementById(targetId);
            if (targetEl) {
                window.scrollTo({
                    top: targetEl.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 10. Mobile Drawer Trigger
    const btnMobileMenu = document.getElementById('mobile-menu-btn');
    const btnMobileClose = document.getElementById('mobile-menu-close');
    const drawerEl = document.getElementById('mobile-menu');
    const drawerContentEl = drawerEl.querySelector('div');

    function openMobileMenu() {
        drawerEl.classList.remove('opacity-0', 'pointer-events-none');
        drawerContentEl.classList.remove('translate-x-full');
    }

    function closeMobileMenu() {
        drawerEl.classList.add('opacity-0', 'pointer-events-none');
        drawerContentEl.classList.add('translate-x-full');
    }

    btnMobileMenu.addEventListener('click', openMobileMenu);
    btnMobileClose.addEventListener('click', closeMobileMenu);
    drawerEl.addEventListener('click', (e) => {
        if (e.target === drawerEl) closeMobileMenu();
    });

    mobileNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            closeMobileMenu();
            const targetId = link.getAttribute('href').substring(1);
            const targetEl = document.getElementById(targetId);
            if (targetEl) {
                setTimeout(() => {
                    window.scrollTo({
                        top: targetEl.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }, 300);
            }
        });
    });

    // 11. Initial Theme Render
    renderTheme('cafe');
});
