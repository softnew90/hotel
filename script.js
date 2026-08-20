// 1. تحديد الطابق الافتراضي ليكون الأول (بدلاً من الثالث)
let activeFloorId = floorsData[0].id; 
let currentRoomMedia = [];
let currentGalleryIndex = 0;
let aboutSlideInterval;
let currentAboutIndex = 0;

function renderFloors() {
    const grid = document.getElementById('floors-grid');
    grid.innerHTML = '';
    floorsData.forEach(floor => {
        const isActive = floor.id === activeFloorId ? 'active' : '';
        grid.innerHTML += `
            <div class="floor-circle ${isActive}" onclick="selectFloor('${floor.id}')">
                <span class="f-num">${floor.number}</span>
                <span class="f-name">${floor.name}</span>
            </div>
        `;
    });
}

function renderRooms() {
    const grid = document.getElementById('rooms-grid');
    grid.innerHTML = '';
    const floorRooms = roomsData.filter(room => room.floorId === activeFloorId);
    const currentFloor = floorsData.find(f => f.id === activeFloorId);
    
    document.getElementById('current-floor-title').textContent = currentFloor.name;
    document.getElementById('current-floor-count').textContent = `${floorRooms.length} غرف متوفرة`;

    floorRooms.forEach(room => {
        grid.innerHTML += `
            <div class="room-card" onclick="openRoomModal('${room.roomId}')">
                <div class="card-head">
                    <span class="r-id">غرفة ${room.roomId}</span>
                    <span class="r-price">${room.price}</span>
                </div>
                <h3>${room.title}</h3>
                <div class="r-info-grid">
                    <div class="info-item"><span>👥</span> ${room.capacity}</div>
                    <div class="info-item"><span>🛏️</span> ${room.bed}</div>
                    <div class="info-item"><span>🌅</span> ${room.view.substring(0, 15)}...</div>
                    <div class="info-item"><span>📐</span> ${room.area}</div>
                </div>
                <div class="card-footer">
                    <span class="view-more">عرض التفاصيل والصور ←</span>
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

function openRoomModal(roomId) {
    const room = roomsData.find(r => r.roomId === roomId);
    const floor = floorsData.find(f => f.id === room.floorId);
    if(!room) return;
    
    document.getElementById('modal-room-id').textContent = `غرفة ${room.roomId}`;
    document.getElementById('modal-floor-name').textContent = floor.name;
    document.getElementById('modal-title').textContent = room.title;
    document.getElementById('modal-price').textContent = room.price;
    document.getElementById('modal-area').textContent = room.area;
    document.getElementById('modal-capacity').textContent = room.capacity;
    document.getElementById('modal-bed').textContent = room.bed;
    document.getElementById('modal-view').textContent = room.view;
    document.getElementById('modal-desc').textContent = room.desc;
    
    const featuresList = document.getElementById('modal-features');
    featuresList.innerHTML = room.features.map(f => `<li>${f}</li>`).join('');
    
    currentRoomMedia = room.media || [];
    currentGalleryIndex = 0;
    renderModalGallery();
    
    document.getElementById('room-modal').classList.add('active');

    // تحديث رابط الصفحة (URL) ليحتوي على رقم الغرفة
    window.location.hash = 'room-' + roomId;
}

function renderModalGallery() {
    const track = document.getElementById('gallery-track');
    const thumbs = document.getElementById('modal-thumbnails');

    track.innerHTML = currentRoomMedia.map(m => {
        let tag = m.type === 'video' 
            ? `<video src="${m.src}" controls playsinline></video>` 
            : `<img src="${m.src}">`;
        return `<div class="slide-item">${tag}</div>`;
    }).join('');

    thumbs.innerHTML = currentRoomMedia.map((m, idx) => {
        let inner = m.type === 'video' 
            ? `<i class="fa-solid fa-play video-icon-overlay"></i><video src="${m.src}"></video>` 
            : `<img src="${m.src}">`;
        return `<div class="thumbnail-item ${idx === 0 ? 'active' : ''}" onclick="goToImage(${idx})">${inner}</div>`;
    }).join('');

    updateGalleryPosition();
}

function updateGalleryPosition() {
    const track = document.getElementById('gallery-track');
    if(!track) return;
    track.style.transform = `translateX(-${currentGalleryIndex * 100}%)`;

    const slides = track.querySelectorAll('.slide-item');
    slides.forEach((slide, idx) => {
        const vid = slide.querySelector('video');
        if(vid) {
            if(idx === currentGalleryIndex) vid.play();
            else vid.pause();
        }
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

function closeRoomModal() {
    document.getElementById('room-modal').classList.remove('active');
    const track = document.getElementById('gallery-track');
    if(track) {
        track.querySelectorAll('video').forEach(vid => vid.pause());
    }
    
    // إزالة رقم الغرفة من الرابط عند إغلاق النافذة المنبثقة ليرجع للرابط الأصلي
    history.pushState("", document.title, window.location.pathname + window.location.search);
}

function initAboutSlider() {
    const track = document.getElementById('about-track');
    if (!track || !siteSettings.aboutMedia || siteSettings.aboutMedia.length === 0) return;

    track.innerHTML = siteSettings.aboutMedia.map((media) => {
        let tag = media.type === 'video'
            ? `<video src="${media.src}" autoplay muted loop playsinline></video>`
            : `<img src="${media.src}" alt="من نحن">`;
        return `<div class="slide-item">${tag}</div>`;
    }).join('');

    updateAboutPosition();
    resetAboutInterval();
}

function updateAboutPosition() {
    const track = document.getElementById('about-track');
    if(!track) return;
    track.style.transform = `translateX(-${currentAboutIndex * 100}%)`;
}

function nextAboutSlide() {
    currentAboutIndex = (currentAboutIndex === siteSettings.aboutMedia.length - 1) ? 0 : currentAboutIndex + 1;
    updateAboutPosition();
    resetAboutInterval(); 
}

function prevAboutSlide() {
    currentAboutIndex = (currentAboutIndex === 0) ? siteSettings.aboutMedia.length - 1 : currentAboutIndex - 1;
    updateAboutPosition();
    resetAboutInterval();
}

function resetAboutInterval() {
    clearInterval(aboutSlideInterval);
    aboutSlideInterval = setInterval(() => { nextAboutSlide(); }, 4000); 
}

document.addEventListener('DOMContentLoaded', () => {
    
    // 2. قراءة الرابط (URL) للتحقق مما إذا كان المستخدم داخل غرفة قبل التحميل
    const hash = window.location.hash;
    if (hash.startsWith('#room-')) {
        const roomId = hash.replace('#room-', '');
        // البحث عن الغرفة لمعرفة الطابق الخاص بها وتفعيله أولاً
        const targetRoom = roomsData.find(r => r.roomId === roomId);
        if (targetRoom) {
            activeFloorId = targetRoom.floorId;
        }
    }

    if (typeof siteSettings !== 'undefined') {
        const logoElement = document.getElementById('brand-logo');
        if (logoElement) {
            logoElement.src = siteSettings.logo;
            logoElement.style.height = siteSettings.logoHeight; 
        }

        const titleElement = document.getElementById('hero-title-text');
        if (titleElement) titleElement.textContent = siteSettings.heroTitle;

        const subtitleElement = document.getElementById('hero-subtitle-text');
        if (subtitleElement) subtitleElement.textContent = siteSettings.heroSubtitle;

        const mainVideo = document.getElementById('main-bg-video');
        if(mainVideo && siteSettings.heroVideo) {
            mainVideo.innerHTML = `<source src="${siteSettings.heroVideo}" type="video/mp4">`;
            mainVideo.load();
        }

        const bookingButtons = document.querySelectorAll('.btn-book, .btn-book-direct');
        bookingButtons.forEach(btn => {
            btn.onclick = () => window.open(siteSettings.bookingLink, '_blank');
        });

        // تفعيل بيانات الفوتر
        document.getElementById('phone-text').textContent = siteSettings.phoneNumber;
        document.getElementById('phone-link').href = `tel:${siteSettings.phoneNumber}`;
        document.getElementById('whatsapp-link').href = siteSettings.whatsappLink;
        document.getElementById('instagram-link').href = siteSettings.instagramLink;
        document.getElementById('tiktok-link').href = siteSettings.tiktokLink;
        document.getElementById('location-text').textContent = siteSettings.locationText;
        document.getElementById('map-link').href = siteSettings.mapLink;
        document.getElementById('copyright-text').textContent = siteSettings.copyrightText;

        initAboutSlider();
    }

    renderFloors();
    renderRooms();

    // 3. فتح الغرفة تلقائياً إذا كان الرابط يحتوي على رقم الغرفة (عند عمل Refresh)
    if (hash.startsWith('#room-')) {
        const roomId = hash.replace('#room-', '');
        openRoomModal(roomId);
    }
});