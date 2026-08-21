// إدارة اللغة وحالة النوافذ المنبثقة
let currentLang = localStorage.getItem('siteLang') || 'ar';
let activeFloorId = ""; 
let currentRoomMedia = [];
let currentGalleryIndex = 0;
let currentAboutIndex = 0;

// متغيرات حالة النوافذ
let isModalOpen = false;
let currentOpenRoomId = null;
let isLightboxOpen = false;
let lightboxMedia = [];
let lightboxIndex = 0;
let touchStartX = 0;
let touchEndX = 0;

// تطبيق اللغة
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

// العودة للأعلى
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

    // =====================================
    // النظام الموحد للوسائط في الهيدر
    // =====================================
    const heroContainer = document.getElementById('hero-media-container');
    if (heroContainer && siteSettings.heroMedia) {
        const media = siteSettings.heroMedia;
        let htmlContent = '';
        
        // تطبيق الصورة البديلة فورا لتجنب الشاشة السوداء
        if (media.fallbackImage) {
            heroContainer.style.backgroundImage = `url('${media.fallbackImage}')`;
        }

        if (media.type === 'youtube') {
            const origin = window.location.origin !== "null" ? window.location.origin : "https://lusailresortsa.com";
            htmlContent = `<div class="youtube-bg-wrapper">
                               <iframe class="youtube-bg" src="https://www.youtube.com/embed/${media.src}?autoplay=1&mute=1&loop=1&playlist=${media.src}&controls=0&showinfo=0&rel=0&playsinline=1&disablekb=1&fs=0&modestbranding=1&iv_load_policy=3&origin=${origin}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                           </div>`;
        } else if (media.type === 'localVideo') {
            htmlContent = `<video autoplay muted loop playsinline class="bg-video"><source src="${media.src}" type="video/mp4"></video>`;
        } else if (media.type === 'image') {
            htmlContent = `<img src="${media.src}" class="bg-image-cover" alt="Hero Background">`;
        }
        
        heroContainer.innerHTML = htmlContent;
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

// ================= دوال الـ Lightbox =================
function openLightbox(mediaArray, startIndex) {
    lightboxMedia = mediaArray;
    lightboxIndex = startIndex;
    renderLightbox();
    
    document.getElementById('lightbox').classList.add('active');
    document.body.style.overflow = 'hidden'; 
    isLightboxOpen = true;
    
    window.history.pushState({ lightbox: true }, "");
}

function renderLightbox() {
    const content = document.getElementById('lightbox-content');
    const m = lightboxMedia[lightboxIndex];
    if (m.type === 'youtube') {
        // تشغيل اليوتيوب بصوت وبتحكم كامل للزائر
        content.innerHTML = `<iframe src="https://www.youtube.com/embed/${m.src}?autoplay=1" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
    } else if (m.type === 'localVideo') {
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
    if (!isModalOpen) document.body.style.overflow = 'auto';
    isLightboxOpen = false;
}

function closeLightbox() {
    closeLightboxUI();
    window.history.back(); 
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

    document.getElementById('room-modal').classList.add('active');
    
    isModalOpen = true;
    currentOpenRoomId = roomId;

    if (pushToHistory) {
        window.history.pushState({ modal: true, roomId: roomId }, "", '#room-' + roomId);
    }
}

function renderModalGallery(roomTitleAlt) {
    const track = document.getElementById('gallery-track');
    const thumbs = document.getElementById('modal-thumbnails');

    track.innerHTML = currentRoomMedia.map((m, idx) => {
        let tag = '';
        if (m.type === 'youtube') {
            tag = `<iframe src="https://www.youtube.com/embed/${m.src}?controls=0&mute=1&autoplay=1&loop=1&playlist=${m.src}" frameborder="0" allowfullscreen></iframe>`;
        } else if (m.type === 'localVideo') {
            tag = `<video src="${m.src}" autoplay muted loop playsinline></video>`;
        } else {
            tag = `<img src="${m.src}" alt="${roomTitleAlt}">`;
        }
        return `<div class="slide-item ${idx === 0 ? 'active' : ''}" onclick="openLightbox(currentRoomMedia, ${idx})">${tag}</div>`;
    }).join('');

    thumbs.innerHTML = currentRoomMedia.map((m, idx) => {
        let inner = '';
        if (m.type === 'youtube') {
            // سحب صورة مصغرة أوتوماتيكية من اليوتيوب
            let thumbUrl = `https://img.youtube.com/vi/${m.src}/mqdefault.jpg`;
            inner = `<i class="fa-brands fa-youtube video-icon-overlay" style="color:#ff0000;"></i><img src="${thumbUrl}">`;
        } else if (m.type === 'localVideo') {
            inner = `<i class="fa-solid fa-play video-icon-overlay"></i><video src="${m.src}"></video>`;
        } else {
            inner = `<img src="${m.src}" alt="Thumbnail">`;
        }
        return `<div class="thumbnail-item ${idx === 0 ? 'active' : ''}" onclick="goToImage(${idx})">${inner}</div>`;
    }).join('');

    updateGalleryPosition();
}

function updateGalleryPosition() {
    const slides = document.querySelectorAll('#gallery-track .slide-item');
    slides.forEach((slide, idx) => {
        slide.classList.toggle('active', idx === currentGalleryIndex);
    });

    const thumbs = document.querySelectorAll('#modal-thumbnails .thumbnail-item');
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

    const track = document.getElementById('gallery-track');
    if(track) {
        // إيقاف الفيديوهات العادية
        track.querySelectorAll('video').forEach(vid => vid.pause());
        // إعادة تعيين رابط اليوتيوب لإيقافه
        track.querySelectorAll('iframe').forEach(iframe => {
            const src = iframe.src;
            iframe.src = src; 
        });
    }
    
    isModalOpen = false;
    currentOpenRoomId = null;
}

function closeRoomModal() {
    closeRoomModalUI();
    if (window.history.state && window.history.state.modal && !window.history.state.firstLoad) {
        window.history.back();
    } else {
        window.history.pushState(null, "", window.location.pathname + window.location.search);
    }
}

// ================= سلايدر "من نحن" =================
function initAboutSlider() {
    const track = document.getElementById('about-track');
    const thumbs = document.getElementById('about-thumbnails');
    if (!track || typeof siteSettings === 'undefined' || !siteSettings.aboutMedia) return;

    track.innerHTML = siteSettings.aboutMedia.map((m, idx) => {
        let tag = '';
        if (m.type === 'youtube') {
            tag = `<iframe src="https://www.youtube.com/embed/${m.src}?controls=0&mute=1&autoplay=1&loop=1&playlist=${m.src}" frameborder="0" allowfullscreen></iframe>`;
        } else if (m.type === 'localVideo') {
            tag = `<video src="${m.src}" autoplay muted loop playsinline></video>`;
        } else {
            tag = `<img src="${m.src}" alt="About Resort">`;
        }
        return `<div class="slide-item ${idx === 0 ? 'active' : ''}" onclick="openLightbox(siteSettings.aboutMedia, ${idx})">${tag}</div>`;
    }).join('');

    if (thumbs) {
        thumbs.innerHTML = siteSettings.aboutMedia.map((m, idx) => {
            let inner = '';
            if (m.type === 'youtube') {
                let thumbUrl = `https://img.youtube.com/vi/${m.src}/mqdefault.jpg`;
                inner = `<i class="fa-brands fa-youtube video-icon-overlay" style="color:#ff0000;"></i><img src="${thumbUrl}">`;
            } else if (m.type === 'localVideo') {
                inner = `<i class="fa-solid fa-play video-icon-overlay"></i><video src="${m.src}"></video>`;
            } else {
                inner = `<img src="${m.src}" alt="Thumbnail">`;
            }
            return `<div class="thumbnail-item ${idx === 0 ? 'active' : ''}" onclick="goToAboutImage(${idx})">${inner}</div>`;
        }).join('');
    }

    updateAboutPosition();
}

function updateAboutPosition() {
    const slides = document.querySelectorAll('#about-track .slide-item');
    slides.forEach((slide, idx) => {
        slide.classList.toggle('active', idx === currentAboutIndex);
    });

    const thumbs = document.querySelectorAll('#about-thumbnails .thumbnail-item');
    thumbs.forEach((t, idx) => t.classList.toggle('active', idx === currentAboutIndex));

    const counter = document.getElementById('about-counter');
    if(counter) {
        counter.textContent = `${currentAboutIndex + 1} / ${siteSettings.aboutMedia.length}`;
    }
}

function nextAboutSlide() {
    if(!siteSettings || !siteSettings.aboutMedia) return;
    currentAboutIndex = (currentAboutIndex === siteSettings.aboutMedia.length - 1) ? 0 : currentAboutIndex + 1;
    updateAboutPosition();
}

function prevAboutSlide() {
    if(!siteSettings || !siteSettings.aboutMedia) return;
    currentAboutIndex = (currentAboutIndex === 0) ? siteSettings.aboutMedia.length - 1 : currentAboutIndex - 1;
    updateAboutPosition();
}

function goToAboutImage(index) {
    currentAboutIndex = index;
    updateAboutPosition();
}

// ================= مراقبة زر الرجوع =================
window.addEventListener('popstate', (event) => {
    if (isLightboxOpen) {
        closeLightboxUI();
        return; 
    }

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

    if (hash.startsWith('#room-')) {
        const roomId = hash.replace('#room-', '');
        window.history.replaceState({ firstLoad: true, modal: true, roomId: roomId }, "", hash);
        openRoomModal(roomId, false);
    }
    
    const lightbox = document.getElementById('lightbox');
    lightbox.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    });
    lightbox.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleLightboxSwipe();
    });
});