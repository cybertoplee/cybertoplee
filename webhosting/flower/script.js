document.addEventListener('DOMContentLoaded', () => {
    // URL Constants
    const baseUrl = "https://pcmap.place.naver.com/restaurant/2084020084";
    const queryParams = "?bk_query=%ED%95%98%EB%82%98%EB%B6%81%EC%B9%B4%ED%8E%98&entry=pll&fromPanelNum=2&timestamp=202607112117&locale=ko&svcName=map_pcv5&searchText=%ED%95%98%EB%82%98%EB%B6%81%EC%B9%B4%ED%8E%98";

    // Tab Data Configuration
    const tabsData = {
        home: {
            title: "홈",
            icon: "fa-home",
            url: baseUrl + "/home" + queryParams,
            items: Array.from({length: 12}, (_, i) => ({
                img: `https://picsum.photos/seed/cafehome${i+1}/600/600`,
                text: `카페 전경 ${i+1}`
            }))
        },
        menu: {
            title: "메뉴",
            icon: "fa-coffee",
            url: baseUrl + "/menu" + queryParams,
            items: Array.from({length: 12}, (_, i) => ({
                img: `https://picsum.photos/seed/cafemenu${i+1}/600/600`,
                text: `시그니처 메뉴 ${i+1}`
            }))
        },
        photo: {
            title: "사진",
            icon: "fa-camera-retro",
            url: baseUrl + "/photo" + queryParams,
            items: Array.from({length: 12}, (_, i) => ({
                img: `https://picsum.photos/seed/cafephoto${i+1}/600/600`,
                text: `고객 스냅사진 ${i+1}`
            }))
        },
        info: {
            title: "정보",
            icon: "fa-info-circle",
            url: baseUrl + "/information" + queryParams,
            items: Array.from({length: 12}, (_, i) => ({
                img: `https://picsum.photos/seed/cafeinfo${i+1}/600/600`,
                text: `매장 이용안내 ${i+1}`
            }))
        },
        review: {
            title: "리뷰",
            icon: "fa-star",
            url: baseUrl + "/review" + queryParams,
            items: Array.from({length: 12}, (_, i) => ({
                img: `https://picsum.photos/seed/cafereview${i+1}/600/600`,
                text: `베스트 리뷰 ${i+1}`
            }))
        }
    };

    const galleryGrid = document.getElementById('dynamic-gallery');
    const linkWrapper = document.getElementById('dynamic-link-wrapper');
    const tabBtns = document.querySelectorAll('.tab-btn');

    // Function to render gallery based on tab key
    function renderGallery(tabKey) {
        const data = tabsData[tabKey];
        if (!data) return;

        // 1. Render Gallery Items
        galleryGrid.style.opacity = 0; // fade out
        
        setTimeout(() => {
            galleryGrid.innerHTML = ''; // clear current
            
            data.items.forEach(item => {
                const div = document.createElement('div');
                div.className = 'gallery-item';
                div.innerHTML = `
                    <img src="${item.img}" alt="${item.text}">
                    <div class="item-info"><h3>${item.text}</h3></div>
                `;
                galleryGrid.appendChild(div);
            });

            // 2. Render Bottom Link Button
            linkWrapper.innerHTML = `
                <a href="${data.url}" target="_blank" class="link-card main-link-card">
                    <i class="fas ${data.icon}"></i>
                    <span style="font-size: 1.3rem;">네이버 플레이스 '${data.title}' 자세히 보기</span>
                </a>
            `;

            galleryGrid.style.opacity = 1; // fade in
        }, 300); // Wait for fade out
    }

    // Event Listeners for Tabs
    tabBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            // Remove active class from all
            tabBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked
            e.currentTarget.classList.add('active');
            
            // Render corresponding data
            const tabKey = e.currentTarget.getAttribute('data-tab');
            renderGallery(tabKey);
        });
    });

    // Initial Render
    if(galleryGrid && linkWrapper) {
        renderGallery('home');
        galleryGrid.style.transition = "opacity 0.3s ease";
    }

    // scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.hero-section h1, .hero-section p, .notice-banner, .gallery-item');
    animatedElements.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s ease-out';
        observer.observe(el);
    });
});
