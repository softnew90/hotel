// إدارة اللغة وحالة النوافذ المنبثقة (لزر الرجوع)
let currentLang = localStorage.getItem('siteLang') || 'ar';
let activeFloorId = ""; 
let currentRoomMedia = [];
let currentGalleryIndex = 0;
let aboutSlideInterval;
let currentAboutIndex = 0;

// متغيرات حالة النوافذ (لمنع التعارض مع زر الرجوع)
let isModalOpen = false;
let currentOpenRoomId = null;
let isLightboxOpen = false;
let lightboxMedia = [];
let lightboxIndex = 0;
let touchStartX = 0;
let touchEndX = 0;

// تطبيق اللغة على الواجهة
function applyLanguage() {
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    
    const t = uiTranslations[currentLang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.innerHTML = t[key];
    });

    const backIcon = document.getElementById('back-icon');
    if (backIcon) {
        backIcon.className = currentLang === 'ar' ? 'fa-solid fa-arrow-right' : 'fa-solid fa-arrow-left';
    }

    renderHeaderAndFooter();
    
    if(floorsData && floorsData.length > 0) {
        if(!activeFloorId) activeFloorId = floorsData[0].id;
        renderFloors();
        renderRooms();
    }
}

// تبديل اللغة
document.getElementById('lang-toggle').addEventListener('click', () => {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    localStorage.setItem('siteLang', currentLang);
    applyLanguage();
});

// زر العودة للأعلى
const scrollTopBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.style.display = 'flex';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

function renderHeaderAndFooter() {
    if (typeof siteSettings === 'undefined') return;

    const logoElement = document.getElementById('brand-logo');
    if (logoElement) {
        logoElement.src = siteSettings.logo;
        logoElement.style.height = siteSettings.logoHeight; 
    }

    const titleElement = document.getElementById('hero-title-text');
    if (titleElement) titleElement.textContent = siteSettings.heroTitle[currentLang];

    const subtitleElement = document.getElementById('hero-subtitle-text');
    if (subtitleElement) subtitleElement.textContent = siteSettings.heroSubtitle[currentLang];

    const mainVideo = document.getElementById('main-bg-video');
    if(mainVideo && siteSettings.heroVideo) {
        mainVideo.innerHTML = `<source src="${siteSettings.heroVideo}" type="video/mp4">`;
        if (siteSettings.heroPoster) mainVideo.setAttribute('poster', siteSettings.heroPoster);
        mainVideo.load();
    }

    const bookingBtn = document.getElementById('btn-book-direct');
    if (bookingBtn) bookingBtn.onclick = () => window.open(siteSettings.bookingLink, '_blank');

    document.getElementById('phone-text').textContent = siteSettings.phoneNumber;
    document.getElementById('phone-link').href = `tel:${siteSettings.phoneNumber}`;
    document.getElementById('whatsapp-link').href = siteSettings.whatsappLink;
    document.getElementById('instagram-link').href = siteSettings.instagramLink;
    document.getElementById('tiktok-link').href = siteSettings.tiktokLink;
    document.getElementById('location-text').textContent = siteSettings.locationText[currentLang];
    document.getElementById('map-link').href = siteSettings.mapLink;
    document.getElementById('copyright-text').textContent = siteSettings.copyrightText[currentLang];
}

function renderFloors() {
    const grid = document.getElementById('floors-grid');
    if(!grid) return;
    grid.innerHTML = '';
    floorsData.forEach(floor => {
        const isActive = floor.id === activeFloorId ? 'active' : '';
        grid.innerHTML += `
            <div class="floor-circle ${isActive}" onclick="selectFloor('${floor.id}')">
                <span class="f-name">${floor.name[currentLang]}</span>
            </div>
        `;
    });
}

function renderRooms() {
    const grid = document.getElementById('rooms-grid');
    if(!grid) return;
    grid.innerHTML = '';
    
    const floorRooms = roomsData.filter(room => room.floorId === activeFloorId);
    const currentFloor = floorsData.find(f => f.id === activeFloorId);
    const t = uiTranslations[currentLang];
    
    document.getElementById('current-floor-title').textContent = currentFloor.name[currentLang];
    document.getElementById('current-floor-count').textContent = `${floorRooms.length} ${t.availableRooms}`;

    floorRooms.forEach(room => {
        const viewText = room.view[currentLang].length > 25 ? room.view[currentLang].substring(0, 25) + '...' : room.view[currentLang];
        grid.innerHTML += `
            <div class="room-card" onclick="openRoomModal('${room.roomId}')">
                <div class="card-head">
                    <span class="r-id">${t.roomText} ${room.roomId}</span>
                </div>
                <h3>${room.title[currentLang]}</h3>
                <div class="r-info-grid">
                    <div class="info-item"><span>👥</span> ${room.capacity[currentLang]}</div>
                    <div class="info-item"><span>🛏️</span> ${room.bed[currentLang]}</div>
                    <div class="info-item"><span>🌅</span> ${viewText}</div>
                    <div class="info-item"><span>📐</span> ${room.area}</div>
                </div>
                <div class="card-footer">
                    <span class="view-more">${t.viewMore} ${currentLang === 'ar' ? '←' : '→'}</span>
                </div>
            </div>
        `;
    });
}

function selectFloor(floorId) {
    activeFloorId = floorId;
    renderFloors();
    renderRooms();
}

// ================= دوال الـ Lightbox (ملء الشاشة) =================
function openLightbox(mediaArray, startIndex) {
    lightboxMedia = mediaArray;
    lightboxIndex = startIndex;
    renderLightbox();
    
    document.getElementById('lightbox').classList.add('active');
    document.body.style.overflow = 'hidden'; 
    isLightboxOpen = true;
    
    // إضافة خطوة في سجل المتصفح لدعم زر الرجوع
    window.history.pushState({ lightbox: true }, "");
}

function renderLightbox() {
    const content = document.getElementById('lightbox-content');
    const m = lightboxMedia[lightboxIndex];
    if (m.type === 'video') {
        content.innerHTML = `<video src="${m.src}" controls autoplay playsinline></video>`;
    } else {
        content.innerHTML = `<img src="${m.src}">`;
    }
}

function nextLightbox() {
    lightboxIndex = (lightboxIndex === lightboxMedia.length - 1) ? 0 : lightboxIndex + 1;
    renderLightbox();
}

function prevLightbox() {
    lightboxIndex = (lightboxIndex === 0) ? lightboxMedia.length - 1 : lightboxIndex - 1;
    renderLightbox();
}

function closeLightboxUI() {
    document.getElementById('lightbox').classList.remove('active');
    document.getElementById('lightbox-content').innerHTML = '';
    // إرجاع السكرول فقط لو نافذة الغرفة مش مفتوحة
    if (!isModalOpen) document.body.style.overflow = 'auto';
    isLightboxOpen = false;
}

function closeLightbox() {
    closeLightboxUI();
    window.history.back(); // يحذف خطوة السجل الخاصة بالـ Lightbox
}

function handleLightboxSwipe() {
    const threshold = 50;
    if (touchEndX < touchStartX - threshold) {
        currentLang === 'ar' ? prevLightbox() : nextLightbox();
    }
    if (touchEndX > touchStartX + threshold) {
        currentLang === 'ar' ? nextLightbox() : prevLightbox();
    }
}

// ================= نافذة الغرف المنبثقة والسلايدر =================
function openRoomModal(roomId, pushToHistory = true) {
    const room = roomsData.find(r => r.roomId === roomId);
    if(!room) return;
    const floor = floorsData.find(f => f.id === room.floorId);
    const t = uiTranslations[currentLang];
    
    document.getElementById('modal-room-id').textContent = `${t.roomText} ${room.roomId}`;
    document.getElementById('modal-floor-name').textContent = floor.name[currentLang];
    document.getElementById('modal-title').textContent = room.title[currentLang];
    document.getElementById('modal-area').textContent = room.area;
    document.getElementById('modal-capacity').textContent = room.capacity[currentLang];
    document.getElementById('modal-bed').textContent = room.bed[currentLang];
    document.getElementById('modal-view').textContent = room.view[currentLang];
    document.getElementById('modal-desc').textContent = room.desc[currentLang];
    
    const featuresList = document.getElementById('modal-features');
    featuresList.innerHTML = room.features[currentLang].map(f => `<li>${f}</li>`).join('');
    
    currentRoomMedia = room.media || [];
    currentGalleryIndex = 0;
    renderModalGallery(room.title[currentLang]);
    
    document.body.style.overflow = 'hidden';
    const mainVideo = document.getElementById('main-bg-video');
    if(mainVideo) mainVideo.pause();

    document.getElementById('room-modal').classList.add('active');
    
    isModalOpen = true;
    currentOpenRoomId = roomId;

    // إضافة خطوة للسجل إذا لم تكن موجودة بالفعل (لدعم زر الرجوع)
    if (pushToHistory) {
        window.history.pushState({ modal: true, roomId: roomId }, "", '#room-' + roomId);
    }
}

function renderModalGallery(roomTitleAlt) {
    const track = document.getElementById('gallery-track');
    const thumbs = document.getElementById('modal-thumbnails');

    track.innerHTML = currentRoomMedia.map((m, idx) => {
        let tag = m.type === 'video' 
            ? `<video src="${m.src}" autoplay muted loop playsinline style="pointer-events:none;"></video>` 
            : `<img src="${m.src}" alt="${roomTitleAlt}">`;
        return `<div class="slide-item ${idx === 0 ? 'active' : ''}" onclick="openLightbox(currentRoomMedia, ${idx})">${tag}</div>`;
    }).join('');

    thumbs.innerHTML = currentRoomMedia.map((m, idx) => {
        let inner = m.type === 'video' 
            ? `<i class="fa-solid fa-play video-icon-overlay"></i><video src="${m.src}"></video>` 
            : `<img src="${m.src}" alt="Thumbnail">`;
        return `<div class="thumbnail-item ${idx === 0 ? 'active' : ''}" onclick="goToImage(${idx})">${inner}</div>`;
    }).join('');

    updateGalleryPosition();
}

function updateGalleryPosition() {
    const slides = document.querySelectorAll('#gallery-track .slide-item');
    slides.forEach((slide, idx) => {
        slide.classList.toggle('active', idx === currentGalleryIndex);
    });

    const thumbs = document.querySelectorAll('.thumbnail-item');
    thumbs.forEach((t, idx) => t.classList.toggle('active', idx === currentGalleryIndex));
    document.getElementById('gallery-counter').textContent = `${currentGalleryIndex + 1} / ${currentRoomMedia.length}`;
}

function nextImage() {
    currentGalleryIndex = (currentGalleryIndex === currentRoomMedia.length - 1) ? 0 : currentGalleryIndex + 1;
    updateGalleryPosition();
}

function prevImage() {
    currentGalleryIndex = (currentGalleryIndex === 0) ? currentRoomMedia.length - 1 : currentGalleryIndex - 1;
    updateGalleryPosition();
}

function goToImage(index) {
    currentGalleryIndex = index;
    updateGalleryPosition();
}

function closeRoomModalUI() {
    document.getElementById('room-modal').classList.remove('active');
    document.body.style.overflow = 'auto';
    
    const mainVideo = document.getElementById('main-bg-video');
    if(mainVideo) mainVideo.play();

    const track = document.getElementById('gallery-track');
    if(track) {
        track.querySelectorAll('video').forEach(vid => vid.pause());
    }
    
    isModalOpen = false;
    currentOpenRoomId = null;
}

function closeRoomModal() {
    closeRoomModalUI();
    // إذا فتحنا الغرفة من داخل الموقع، نرجع للخلف خطوة لمسح الرابط
    // أما إذا كان الزائر قد دخل على رابط الغرفة مباشرة، نستبدل الرابط للرئيسية بدون إخراجه من الموقع
    if (window.history.state && window.history.state.modal && !window.history.state.firstLoad) {
        window.history.back();
    } else {
        window.history.pushState(null, "", window.location.pathname + window.location.search);
    }
}

// ================= سلايدر "من نحن" =================
function initAboutSlider() {
    const track = document.getElementById('about-track');
    if (!track || typeof siteSettings === 'undefined' || !siteSettings.aboutMedia) return;

    track.innerHTML = siteSettings.aboutMedia.map((media, idx) => {
        let tag = media.type === 'video'
            ? `<video src="${media.src}" autoplay muted loop playsinline style="pointer-events:none;"></video>`
            : `<img src="${media.src}" alt="About Resort">`;
        return `<div class="slide-item ${idx === 0 ? 'active' : ''}" onclick="openLightbox(siteSettings.aboutMedia, ${idx})">${tag}</div>`;
    }).join('');

    updateAboutPosition();
    resetAboutInterval();
}

function updateAboutPosition() {
    const slides = document.querySelectorAll('#about-track .slide-item');
    slides.forEach((slide, idx) => {
        slide.classList.toggle('active', idx === currentAboutIndex);
    });
}

function nextAboutSlide() {
    if(!siteSettings || !siteSettings.aboutMedia) return;
    currentAboutIndex = (currentAboutIndex === siteSettings.aboutMedia.length - 1) ? 0 : currentAboutIndex + 1;
    updateAboutPosition();
    resetAboutInterval(); 
}

function prevAboutSlide() {
    if(!siteSettings || !siteSettings.aboutMedia) return;
    currentAboutIndex = (currentAboutIndex === 0) ? siteSettings.aboutMedia.length - 1 : currentAboutIndex - 1;
    updateAboutPosition();
    resetAboutInterval();
}

function resetAboutInterval() {
    clearInterval(aboutSlideInterval);
    aboutSlideInterval = setInterval(() => { nextAboutSlide(); }, 4000); 
}

// ================= مراقبة زر الرجوع (Hardware Back Button) =================
window.addEventListener('popstate', (event) => {
    // 1. لو الـ Lightbox مفتوح، اقفله الأول وما تعملش حاجة تانية
    if (isLightboxOpen) {
        closeLightboxUI();
        return; 
    }

    // 2. لو مفيش Lightbox، نتحقق من الغرفة
    const hash = window.location.hash;
    if (hash.startsWith('#room-')) {
        const roomId = hash.replace('#room-', '');
        if (!isModalOpen || currentOpenRoomId !== roomId) {
            openRoomModal(roomId, false);
        }
    } else {
        if (isModalOpen) {
            closeRoomModalUI();
        }
    }
});

// ================= تهيئة الصفحة =================
document.addEventListener('DOMContentLoaded', () => {
    
    // استخراج رقم الغرفة لو المستخدم داخل على رابط مباشر للغرفة
    const hash = window.location.hash;
    if (hash.startsWith('#room-')) {
        const roomId = hash.replace('#room-', '');
        if(roomsData) {
            const targetRoom = roomsData.find(r => r.roomId === roomId);
            if (targetRoom) activeFloorId = targetRoom.floorId;
        }
    }

    applyLanguage();
    initAboutSlider();

    // لو رابط مباشر، نفتح الغرفة فوراً
    if (hash.startsWith('#room-')) {
        const roomId = hash.replace('#room-', '');
        // نعلم هذه الخطوة في السجل كأول زيارة (First Load)
        window.history.replaceState({ firstLoad: true, modal: true, roomId: roomId }, "", hash);
        openRoomModal(roomId, false);
    }
    
    // تفعيل السحب (Swipe) لملء الشاشة
    const lightbox = document.getElementById('lightbox');
    lightbox.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    });
    lightbox.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleLightboxSwipe();
    });
});