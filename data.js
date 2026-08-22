// قاموس الترجمة لواجهة المستخدم الثابتة
const uiTranslations = {
    ar: {
        langBtn: "English",
        scrollDown: "↓",
        aboutTitle: "في أعالي<br>جبال الطائف",
        aboutDesc: "حيث يلامس الضباب قمم الجبال وتتناثر نسمات الهواء العليل<br>أجمل وأشهر مصايف المملكة العربية السعودية<br>يقع مشروع لوسيل للشقق المخدومة",
        learnMore: "تعرف على المزيد!",
        feature1: "ضيافة<br>فاخرة",
        feature2: "طبيعة ساحرة &<br>تنوع في الخدمات",
        feature3: "التركيز على<br>راحة ضيوفنا",
        contactUs: "تواصل معنا",
        reachUs: "للوصول الى",
        back: "رجوع",
        bookModal: "طلب حجز هذه الوحدة ↗",
        totalArea: "المساحة الإجمالية",
        capacity: "سعة النزلاء",
        bedType: "توزيع الأسرة",
        viewType: "نوع الإطلالة والمميزات",
        aboutRoomTitle: "عن الوحدة والتصميم",
        featuresTitle: "المميزات والتجهيزات المشمولة",
        availableRooms: "وحدات متوفرة",
        roomText: "وحدة",
        viewMore: "عرض التفاصيل والصور"
    },
    en: {
        langBtn: "العربية",
        scrollDown: "↓",
        aboutTitle: "High in the<br>Taif Mountains",
        aboutDesc: "Where the fog touches the mountain peaks and the fresh breeze scatters.<br>The most beautiful and famous summer resorts of Saudi Arabia.<br>Here lies the Lucille Serviced Apartments.",
        learnMore: "Learn More!",
        feature1: "Luxury<br>Hospitality",
        feature2: "Charming Nature &<br>Service Diversity",
        feature3: "Focus on<br>Guest Comfort",
        contactUs: "Contact Us",
        reachUs: "Directions",
        back: "Back",
        bookModal: "Book this unit ↗",
        totalArea: "Total Area",
        capacity: "Capacity",
        bedType: "Beds Distribution",
        viewType: "View & Features",
        aboutRoomTitle: "About the Unit & Design",
        featuresTitle: "Included Features & Amenities",
        availableRooms: "Available Units",
        roomText: "Unit",
        viewMore: "View Details & Photos"
    }
};

// إعدادات الموقع العامة
const siteSettings = {
    logo: "assets/logo.png", 
    logoHeight: "120px", 
    heroTitle: { ar: "مرحبا بكم في لوسيل", en: "Welcome to Lucille" }, 
    heroSubtitle: { ar: "وجهتك المثلى في أجمل مصايف المملكة", en: "Your ultimate destination in the Kingdom's finest resorts" },
    bookingLink: "https://booking.zaaer.co/lusailholidayhomesandchaletsresort", 
    
    // ==========================================
    // إعدادات الخلفية الرئيسية (بإمكانك التغيير بسهولة)
    // الأنواع المتاحة: "youtube" أو "localVideo" أو "image"
    // ==========================================
    heroMedia: {
        type: "image", // جرب تغييرها إلى "image" أو "localVideo"
        src: "assets/2.jpg", // ضع ID اليوتيوب، أو رابط الصورة/الفيديو حسب النوع المختار
        fallbackImage: "https://lusailresortsa.com/assets/img/hero/home3/bg.jpg" // الصورة التي تظهر قبل التحميل
    },
    
    phoneNumber: "0509187294",
    whatsappLink: "https://wa.me/966509187294",
    instagramLink: "https://instagram.com/lucilleresortsa",
    tiktokLink: "https://tiktok.com/@lucilleresort.sa",
    locationText: { ar: "الطائف - الهدا - طريق الهدا مكه", en: "Taif - Al Hada - Makkah Road" },
    mapLink: "https://maps.google.com/?q=21.366893768310547,40.27826690673828",
    copyrightText: { ar: "© 2026 لوسيل للشقق المخدومة. جميع الحقوق محفوظة.", en: "© 2026 Lucille Serviced Apartments. All rights reserved." },

    aboutMedia: [
        { type: "image", src: "assets/3.jpeg" },
        { type: "image", src: "assets/4.jpeg" },
        { type: "image", src: "assets/5.jpeg" },
        { type: "image", src: "assets/6.jpeg" },
        { type: "image", src: "assets/7.jpeg" },
        { type: "image", src: "assets/8.jpeg" },
        { type: "image", src: "assets/9.jpeg" },
        { type: "image", src: "assets/10.jpeg" },
        { type: "image", src: "assets/11.jpeg" },
        { type: "image", src: "assets/12.jpeg" },
        { type: "image", src: "assets/13.jpeg" },
        { type: "image", src: "assets/14.jpeg" },
        { type: "image", src: "assets/15.jpeg" },
        { type: "image", src: "assets/16.jpeg" } 
    ]
};

// قاعدة بيانات الأدوار
const floorsData = [
    { id: "floor2", number: "02", name: { ar: "الدور الثاني", en: "Second Floor" } },
    { id: "floor3", number: "03", name: { ar: "الدور الثالث", en: "Third Floor" } },
    { id: "floor4", number: "04", name: { ar: "الدور الرابع", en: "Fourth Floor" } },
    { id: "floor5", number: "05", name: { ar: "الدور الخامس", en: "Fifth Floor" } },
    { id: "floor6", number: "06", name: { ar: "الدور السادس", en: "Sixth Floor" } },
    { id: "floor7", number: "07", name: { ar: "الدور السابع", en: "Seventh Floor" } }
];

// قاعدة بيانات الغرف والوحدات
const roomsData = [
    // === الدور الثاني ===
    {
        floorId: "floor2",
        roomId: "201",
        title: { ar: "غرفتين وصالة كبيرة وحمامين وتراس خاص", en: "Two-Bedroom Suite with Large Lounge & Terrace" },
        capacity: { ar: "4 نزلاء", en: "4 Guests" },
        bed: { ar: "1 سرير مزدوج + 2 سرير فردي", en: "1 Double Bed + 2 Single Beds" },
        area: "105 m²",
        view: { ar: "تراس خاص وإطلالة جبلية", en: "Private Terrace & Mountain View" },
        desc: { 
            ar: "شقة مخدومة واسعة تتكون من غرفتي نوم وصالة معيشة كبيرة ومطبخ كبير متكامل وحمامين بالإضافة إلى تراس خاص للاستمتاع بأجواء الطائف.", 
            en: "Spacious serviced apartment featuring 2 bedrooms, a large living room, large kitchen, 2 bathrooms, and a private terrace." 
        },
        features: {
            ar: ["تراس خاص", "صالة جلوس كبيرة", "مطبخ كبير مجهز", "2 دورات مياه", "مايكرويف وثلاجة", "طاولة طعام", "تحديد القبلة ودليل هاتف"],
            en: ["Private terrace", "Large living room", "Fully equipped large kitchen", "2 Bathrooms", "Microwave & Refrigerator", "Dining table", "Qibla direction"]
        },
        media: [
            // مثال لإضافة فيديو يوتيوب للغرفة!
            { type: "youtube", src: "QjWOcP6sWWM" },
            { type: "image", src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop" },
            { type: "localVideo", src: "https://res.cloudinary.com/hpgg1hvh/video/upload/v1787252639/pop.mp4" }
        ]
    },
    {
        floorId: "floor2",
        roomId: "202",
        title: { ar: "غرفتين وصالة وحمام وتراس خاص", en: "Two-Bedroom Suite with Terrace" },
        capacity: { ar: "4 نزلاء", en: "4 Guests" },
        bed: { ar: "1 سرير مزدوج + 2 سرير فردي", en: "1 Double Bed + 2 Single Beds" },
        area: "105 m²",
        view: { ar: "تراس خاص وإطلالة على الطبيعة", en: "Private Terrace & Scenic View" },
        desc: { 
            ar: "شقة مخدومة أنيقة تضم غرفتي نوم وصالة معيشة متوسطة ومطبخاً مجهزاً مع تراس خاص واسع.", 
            en: "Elegant serviced apartment with 2 bedrooms, medium living room, equipped kitchen, and a private terrace." 
        },
        features: {
            ar: ["تراس خاص", "صالة جلوس متوسطة", "مطبخ متوسط مجهز", "دورة مياه", "مايكرويف وثلاجة", "طاولة طعام"],
            en: ["Private terrace", "Medium living room", "Equipped medium kitchen", "1 Bathroom", "Microwave & Refrigerator", "Dining table"]
        },
        media: [
            { type: "image", src: "assets/202.1.jpeg" },
            { type: "image", src: "assets/202.2.jpeg" },
            { type: "image", src: "assets/202.3.jpeg" },
            { type: "image", src: "assets/202.4.jpeg" },
            { type: "image", src: "assets/202.5.jpeg" }
        ]
    },
    {
        floorId: "floor2",
        roomId: "203",
        title: { ar: "غرفتين وصالة وحمام وتراس خاص", en: "Two-Bedroom Suite with Terrace" },
        capacity: { ar: "4 نزلاء", en: "4 Guests" },
        bed: { ar: "1 سرير مزدوج + 2 سرير فردي", en: "1 Double Bed + 2 Single Beds" },
        area: "105 m²",
        view: { ar: "تراس خاص وإطلالة على الطبيعة", en: "Private Terrace & Scenic View" },
        desc: { 
            ar: "شقة متكاملة ومريحة تحتوي على غرفتي نوم وصالة جلوس وتراس خاص بإطلالة هادئة ومطبخ مجهز بالكامل.", 
            en: "Comfortable apartment featuring 2 bedrooms, living lounge, private terrace with peaceful views, and a fully equipped kitchen." 
        },
        features: {
            ar: ["تراس خاص", "صالة جلوس متوسطة", "مطبخ متوسط مجهز", "دورة مياه", "مايكرويف وثلاجة", "طاولة طعام"],
            en: ["Private terrace", "Medium living room", "Equipped medium kitchen", "1 Bathroom", "Microwave & Refrigerator", "Dining table"]
        },
        media: [
            { type: "image", src: "assets/202.1.jpeg" },
            { type: "image", src: "assets/202.2.jpeg" },
            { type: "image", src: "assets/202.3.jpeg" },
            { type: "image", src: "assets/202.4.jpeg" },
            { type: "image", src: "assets/202.5.jpeg" }
        ]
    },

    // === الدور الثالث ===
    {
        floorId: "floor3",
        roomId: "301",
        title: { ar: "ثلاث غرف وصالة وحمامين وبلكونة وتراس خاص", en: "Three-Bedroom Suite with Balcony & Terrace" },
        capacity: { ar: "6 نزلاء", en: "6 Guests" },
        bed: { ar: "1 سرير مزدوج + 4 أسرة فردية", en: "1 Double Bed + 4 Single Beds" },
        area: "159 m²",
        view: { ar: "بلكونة وتراس خاص بإطلالة بانورامية", en: "Balcony & Private Terrace" },
        desc: { 
            ar: "شقة عائلية فاخرة وفسيحة جداً بمساحة 159 متراً، تحتوي على 3 غرف نوم وصالة وبلكونة وتراس خاص وحمامين وغسالة ملابس.", 
            en: "Luxurious 159m² family suite featuring 3 bedrooms, living lounge, balcony, private terrace, 2 bathrooms, and washing machine." 
        },
        features: {
            ar: ["بلكونة وتراس خاص", "صالة جلوس متوسطة", "2 دورات مياه", "غسالة ملابس", "مطبخ مجهز", "مايكرويف وثلاجة"],
            en: ["Balcony & Private Terrace", "Medium living room", "2 Bathrooms", "Washing machine", "Equipped kitchen", "Microwave & Fridge"]
        },
        media: [
            { type: "image", src: "assets/301.1.jpeg" },
            { type: "image", src: "assets/301.2.jpeg" },
            { type: "image", src: "assets/301.3.jpeg" },
            { type: "image", src: "assets/301.4.jpeg" },
            { type: "image", src: "assets/301.5.jpeg" },
            { type: "image", src: "assets/301.6.jpeg" },
        ]
    },
    {
        floorId: "floor3",
        roomId: "302",
        title: { ar: "غرفتين وصالة وحمام وبلكونة", en: "Two-Bedroom Suite with Balcony" },
        capacity: { ar: "4 نزلاء", en: "4 Guests" },
        bed: { ar: "1 سرير مزدوج + 2 سرير فردي", en: "1 Double Bed + 2 Single Beds" },
        area: "65 m²",
        view: { ar: "بلكونة بإطلالة جبلية", en: "Balcony with Mountain View" },
        desc: { 
            ar: "شقة مميزة تحتوي على غرفتي نوم وصالة معيشة وبلكونة للاستمتاع بأجواء الجبال والهواء العليل.", 
            en: "Charming apartment with 2 bedrooms, living room, and a private balcony overlooking the mountains." 
        },
        features: {
            ar: ["بلكونة", "صالة جلوس متوسطة", "مطبخ متوسط مجهز", "دورة مياه", "مايكرويف وثلاجة", "طاولة طعام"],
            en: ["Balcony", "Medium living room", "Equipped kitchen", "1 Bathroom", "Microwave & Fridge", "Dining table"]
        },
        media: [
            { type: "image", src: "assets/302.1.jpeg" },
            { type: "image", src: "assets/302.2.jpeg" },
            { type: "image", src: "assets/302.3.jpeg" },
            { type: "image", src: "assets/302.4.jpeg" },
            { type: "image", src: "assets/302.5.jpeg" }
        ]
    },
    {
        floorId: "floor3",
        roomId: "303",
        title: { ar: "ثلاث غرف وحمامين وبلكونة", en: "Three-Bedroom Suite with Balcony" },
        capacity: { ar: "6 نزلاء", en: "6 Guests" },
        bed: { ar: "1 سرير مزدوج + 4 أسرة فردية", en: "1 Double Bed + 4 Single Beds" },
        area: "75 m²",
        view: { ar: "بلكونة بإطلالة جميلة", en: "Balcony with Scenic View" },
        desc: { 
            ar: "شقة تتسع لـ 6 أشخاص مكونة من 3 غرف نوم وحمامين وبلكونة ومطبخ متكامل.", 
            en: "6-guest apartment with 3 bedrooms, 2 bathrooms, balcony, and an equipped kitchen." 
        },
        features: {
            ar: ["بلكونة", "2 دورات مياه", "مطبخ متوسط مجهز", "مايكرويف وثلاجة", "طاولة طعام", "تحديد القبلة"],
            en: ["Balcony", "2 Bathrooms", "Equipped kitchen", "Microwave & Fridge", "Dining table", "Qibla direction"]
        },
        media: [
            { type: "image", src: "assets/303.1.jpeg" },
            { type: "image", src: "assets/303.2.jpeg" },
            { type: "image", src: "assets/303.3.jpeg" },
            { type: "image", src: "assets/303.4.jpeg" },
            { type: "image", src: "assets/303.5.jpeg" },
            { type: "image", src: "assets/303.6.jpeg" },
            { type: "image", src: "assets/303.7.jpeg" }
        ]
    },
    {
        floorId: "floor3",
        roomId: "304",
        title: { ar: "غرفتين ومطبخ وحمام مع غسالة", en: "Two-Bedroom Unit with Washing Machine" },
        capacity: { ar: "4 نزلاء", en: "4 Guests" },
        bed: { ar: "1 سرير مزدوج + 2 سرير فردي", en: "1 Double Bed + 2 Single Beds" },
        area: "65 m²",
        view: { ar: "إطلالة على المنتجع", en: "Resort View" },
        desc: { 
            ar: "شقة عملية ومريحة تتكون من غرفتي نوم ومطبخ مجهز بالإضافة إلى غسالة ملابس وحمام.", 
            en: "Comfortable apartment featuring 2 bedrooms, fully equipped kitchen with washing machine, and 1 bathroom." 
        },
        features: {
            ar: ["غسالة ملابس", "مطبخ متوسط مجهز", "دورة مياه", "مايكرويف وثلاجة", "طاولة طعام"],
            en: ["Washing machine", "Equipped kitchen", "1 Bathroom", "Microwave & Refrigerator", "Dining table"]
        },
        media: [
            { type: "image", src: "assets/304.1.jpeg" },
            { type: "image", src: "assets/304.2.jpeg" },
            { type: "image", src: "assets/304.3.jpeg" },
            { type: "image", src: "assets/304.4.jpeg" }
        ]
    },

    // === الدور الرابع ===
    {
        floorId: "floor4",
        roomId: "401",
        title: { ar: "ثلاث غرف وصالة وحمامين وبلكونة وتراس خاص", en: "Three-Bedroom Suite with Balcony & Terrace" },
        capacity: { ar: "4 نزلاء", en: "4 Guests" },
        bed: { ar: "1 سرير مزدوج + 2 سرير فردي", en: "1 Double Bed + 2 Single Beds" },
        area: "165 m²",
        view: { ar: "بلكونة وتراس خاص واسع", en: "Balcony & Spacious Private Terrace" },
        desc: { 
            ar: "جناح فخم وفسيح جداً بمساحة 165 متراً يضم صالة كبيرة ومطبخاً كبيراً مع بلكونة وتراس خاص بإطلالات ساحرة.", 
            en: "Ultra-spacious 165m² luxury suite with a large living room, large kitchen, balcony, and private terrace." 
        },
        features: {
            ar: ["بلكونة وتراس خاص", "صالة جلوس كبيرة", "مطبخ كبير مجهز", "2 دورات مياه", "مايكرويف وثلاجة", "طاولة طعام"],
            en: ["Balcony & Private Terrace", "Extra Large Living Room", "Large Equipped Kitchen", "2 Bathrooms", "Microwave & Refrigerator", "Dining table"]
        },
        media: [
            { type: "image", src: "assets/401.1.jpeg" },
            { type: "image", src: "assets/401.2.jpeg" },
            { type: "image", src: "assets/401.3.jpeg" },
            { type: "image", src: "assets/401.4.jpeg" },
            { type: "image", src: "assets/401.5.jpeg" },
            { type: "image", src: "assets/401.6.jpeg" },
            { type: "image", src: "assets/401.7.jpeg" }
        ]
    },
    {
        floorId: "floor4",
        roomId: "402",
        title: { ar: "غرفتين وصالة وحمام وبلكونة مع غسالة", en: "Two-Bedroom Suite with Balcony & Washing Machine" },
        capacity: { ar: "4 نزلاء", en: "4 Guests" },
        bed: { ar: "1 سرير مزدوج + 2 سرير فردي", en: "1 Double Bed + 2 Single Beds" },
        area: "75 m²",
        view: { ar: "بلكونة بإطلالة جبلية", en: "Balcony with Mountain View" },
        desc: { 
            ar: "شقة مجهزة بغرفتي نوم وصالة معيشة وبلكونة بالإضافة لغسالة ملابس ومطبخ متكامل.", 
            en: "Equipped apartment with 2 bedrooms, living room, balcony, washing machine, and kitchen." 
        },
        features: {
            ar: ["بلكونة", "صالة جلوس متوسطة", "غسالة ملابس", "مطبخ متوسط مجهز", "دورة مياه", "مايكرويف وثلاجة"],
            en: ["Balcony", "Medium living room", "Washing machine", "Equipped kitchen", "1 Bathroom", "Microwave & Fridge"]
        },
        media: [
            { type: "image", src: "assets/402.1.jpeg" },
            { type: "image", src: "assets/402.2.jpeg" },
            { type: "image", src: "assets/402.3.jpeg" },
            { type: "image", src: "assets/402.4.jpeg" },
            { type: "image", src: "assets/402.5.jpeg" },
            { type: "image", src: "assets/402.6.jpeg" }
        ]
    },
    {
        floorId: "floor4",
        roomId: "403",
        title: { ar: "غرفتين وصالة وحمامين وبلكونة", en: "Two-Bedroom Suite with Balcony" },
        capacity: { ar: "4 نزلاء", en: "4 Guests" },
        bed: { ar: "1 سرير مزدوج + 2 سرير فردي", en: "1 Double Bed + 2 Single Beds" },
        area: "135 m²",
        view: { ar: "بلكونة واسعة", en: "Spacious Balcony" },
        desc: { 
            ar: "شقة واسعة بمساحة 135 متراً تتكون من غرفتين وصالة متوسطة ومطبخ متوسط بالإضافة إلى بلكونة للاستمتاع بالهواء الطلق.", 
            en: "Spacious 135m² apartment featuring 2 bedrooms, medium lounge, medium kitchen, and a balcony." 
        },
        features: {
            ar: ["بلكونة", "صالة جلوس متوسطة", "مطبخ متوسط مجهز", "2 دورات مياه", "مايكرويف وثلاجة", "طاولة طعام"],
            en: ["Balcony", "Medium living room", "Equipped medium kitchen", "2 Bathrooms", "Microwave & Fridge", "Dining table"]
        },
        media: [
            { type: "image", src: "assets/403.1.jpeg" },
            { type: "image", src: "assets/403.2.jpeg" },
            { type: "image", src: "assets/403.3.jpeg" },
            { type: "image", src: "assets/403.4.jpeg" },
            { type: "image", src: "assets/403.5.jpeg" }
        ]
    },
    {
        floorId: "floor4",
        roomId: "404",
        title: { ar: "غرفتين وصالة كبيرة وحمامين وبلكونة", en: "Two-Bedroom Suite with Large Lounge & Balcony" },
        capacity: { ar: "6 نزلاء", en: "6 Guests" },
        bed: { ar: "1 سرير مزدوج + 4 أسرة فردية", en: "1 Double Bed + 4 Single Beds" },
        area: "145 m²",
        view: { ar: "بلكونة بإطلالة مرتفعة", en: "Balcony with High Panoramic View" },
        desc: { 
            ar: "شقة رحبة بمساحة 145 متراً تتسع لـ 6 نزلاء وتتميز بصالة جلوس كبيرة وبلكونة وحمامين.", 
            en: "Generous 145m² apartment accommodating 6 guests, featuring a large living hall, balcony, and 2 bathrooms." 
        },
        features: {
            ar: ["بلكونة", "صالة جلوس كبيرة", "2 دورات مياه", "مطبخ متوسط مجهز", "مايكرويف وثلاجة", "طاولة طعام"],
            en: ["Balcony", "Large living room", "2 Bathrooms", "Equipped kitchen", "Microwave & Fridge", "Dining table"]
        },
        media: [
            { type: "image", src: "assets/404.1.jpeg" },
            { type: "image", src: "assets/404.2.jpeg" },
            { type: "image", src: "assets/404.3.jpeg" },
            { type: "image", src: "assets/404.4.jpeg" },
            { type: "image", src: "assets/404.5.jpeg" }
        ]
    },

    // === الدور الخامس ===
    {
        floorId: "floor5",
        roomId: "501",
        title: { ar: "غرفتين وصالة وحمامين وبلكونة وتراس خاص", en: "Two-Bedroom Suite with Balcony & Private Terrace" },
        capacity: { ar: "6 نزلاء", en: "6 Guests" },
        bed: { ar: "1 سرير مزدوج + 4 أسرة فردية", en: "1 Double Bed + 4 Single Beds" },
        area: "215 m²",
        view: { ar: "تراس بجلسات ومنطقة شواء", en: "Terrace with Seating & BBQ Area" },
        desc: { 
            ar: "جناح فاخر بمساحة 215 متراً يحتوي على تراس مجهز بجلسات ومنطقة شواء ومظلات، بالإضافة إلى صالة ومطبخ كبير وغسالة ملابس.", 
            en: "Luxury 215m² suite featuring a terrace with seating, BBQ area, and umbrellas, plus a large lounge, large kitchen, and washing machine." 
        },
        features: {
            ar: ["تراس خاص للشواء", "بلكونة", "صالة جلوس كبيرة", "مطبخ كبير مجهز", "2 دورات مياه", "غسالة ملابس", "مايكرويف وثلاجة"],
            en: ["Private BBQ Terrace", "Balcony", "Large living room", "Large equipped kitchen", "2 Bathrooms", "Washing machine", "Microwave & Fridge"]
        },
        media: [
            { type: "image", src: "assets/501.1.jpeg" },
            { type: "image", src: "assets/501.2.jpeg" },
            { type: "image", src: "assets/501.3.jpeg" },
            { type: "image", src: "assets/501.4.jpeg" },
            { type: "image", src: "assets/501.5.jpeg" }
        ]
    },
    {
        floorId: "floor5",
        roomId: "502",
        title: { ar: "غرفتين وصالة وحمامين وبلكونة", en: "Two-Bedroom Suite with Balcony" },
        capacity: { ar: "4 نزلاء", en: "4 Guests" },
        bed: { ar: "1 سرير مزدوج + 2 سرير فردي", en: "1 Double Bed + 2 Single Beds" },
        area: "125 m²",
        view: { ar: "بلكونة", en: "Balcony" },
        desc: { 
            ar: "شقة بمساحة 125 متراً تتكون من غرفتين وصالة كبيرة ومطبخ كبير مع بلكونة وحمامين.", 
            en: "125m² apartment featuring 2 bedrooms, large lounge, large kitchen, balcony, and 2 bathrooms." 
        },
        features: {
            ar: ["بلكونة", "صالة جلوس كبيرة", "مطبخ كبير مجهز", "2 دورات مياه", "مايكرويف وثلاجة", "طاولة طعام"],
            en: ["Balcony", "Large living room", "Large equipped kitchen", "2 Bathrooms", "Microwave & Fridge", "Dining table"]
        },
        media: [
            { type: "image", src: "assets/502.1.jpeg" },
            { type: "image", src: "assets/502.2.jpeg" },
            { type: "image", src: "assets/502.3.jpeg" },
            { type: "image", src: "assets/502.4.jpeg" }
        ]
    },
    {
        floorId: "floor5",
        roomId: "503",
        title: { ar: "غرفة وصالة وحمام", en: "One-Bedroom Suite" },
        capacity: { ar: "2 نزلاء", en: "2 Guests" },
        bed: { ar: "1 سرير مزدوج", en: "1 Double Bed" },
        area: "55 m²",
        view: { ar: "إطلالة داخلية", en: "Standard View" },
        desc: { 
            ar: "شقة مريحة تتكون من غرفة نوم واحدة وصالة متوسطة ومطبخ كبير مع توفر غسالة ملابس.", 
            en: "Cozy apartment with 1 bedroom, medium lounge, large kitchen, and a washing machine." 
        },
        features: {
            ar: ["صالة جلوس متوسطة", "مطبخ كبير مجهز", "دورة مياه", "غسالة ملابس", "مايكرويف وثلاجة", "طاولة طعام"],
            en: ["Medium living room", "Large equipped kitchen", "1 Bathroom", "Washing machine", "Microwave & Fridge", "Dining table"]
        },
        media: [
            { type: "image", src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop" }
        ]
    },
    {
        floorId: "floor5",
        roomId: "504",
        title: { ar: "غرفة وصالة وحمام وبلكونة", en: "One-Bedroom Suite with Balcony" },
        capacity: { ar: "2 نزلاء", en: "2 Guests" },
        bed: { ar: "1 سرير مزدوج", en: "1 Double Bed" },
        area: "55 m²",
        view: { ar: "بلكونة", en: "Balcony" },
        desc: { 
            ar: "شقة تتكون من غرفة نوم واحدة وصالة متوسطة ومطبخ كبير بالإضافة إلى بلكونة.", 
            en: "Apartment with 1 bedroom, medium lounge, large kitchen, and a balcony." 
        },
        features: {
            ar: ["بلكونة", "صالة جلوس متوسطة", "مطبخ كبير مجهز", "دورة مياه", "مايكرويف وثلاجة", "طاولة طعام"],
            en: ["Balcony", "Medium living room", "Large equipped kitchen", "1 Bathroom", "Microwave & Fridge", "Dining table"]
        },
        media: [
            { type: "image", src: "assets/504.1.jpeg" },
            { type: "image", src: "assets/504.2.jpeg" },
            { type: "image", src: "assets/504.3.jpeg" },
            { type: "image", src: "assets/504.4.jpeg" }
        ]
    },
    {
        floorId: "floor5",
        roomId: "505",
        title: { ar: "غرفة وصالة وحمام وبلكونة", en: "One-Bedroom Suite with Balcony" },
        capacity: { ar: "2 نزلاء", en: "2 Guests" },
        bed: { ar: "1 سرير مزدوج", en: "1 Double Bed" },
        area: "55 m²",
        view: { ar: "بلكونة", en: "Balcony" },
        desc: { 
            ar: "شقة تتكون من غرفة نوم واحدة وصالة متوسطة ومطبخ كبير بالإضافة إلى بلكونة.", 
            en: "Apartment with 1 bedroom, medium lounge, large kitchen, and a balcony." 
        },
        features: {
            ar: ["بلكونة", "صالة جلوس متوسطة", "مطبخ كبير مجهز", "دورة مياه", "مايكرويف وثلاجة", "طاولة طعام"],
            en: ["Balcony", "Medium living room", "Large equipped kitchen", "1 Bathroom", "Microwave & Fridge", "Dining table"]
        },
        media: [
            { type: "image", src: "assets/505.1.jpeg" },
            { type: "image", src: "assets/505.2.jpeg" },
            { type: "image", src: "assets/505.3.jpeg" },
            { type: "image", src: "assets/505.4.jpeg" },
            { type: "image", src: "assets/505.5.jpeg" }
        ]
    },
    {
        floorId: "floor5",
        roomId: "506",
        title: { ar: "غرفة وصالة وحمام", en: "One-Bedroom Suite" },
        capacity: { ar: "2 نزلاء", en: "2 Guests" },
        bed: { ar: "1 سرير مزدوج", en: "1 Double Bed" },
        area: "55 m²",
        view: { ar: "إطلالة داخلية", en: "Standard View" },
        desc: { 
            ar: "شقة مريحة تتكون من غرفة نوم واحدة وصالة متوسطة ومطبخ كبير مع توفر غسالة ملابس.", 
            en: "Cozy apartment with 1 bedroom, medium lounge, large kitchen, and a washing machine." 
        },
        features: {
            ar: ["صالة جلوس متوسطة", "مطبخ كبير مجهز", "دورة مياه", "غسالة ملابس", "مايكرويف وثلاجة", "طاولة طعام"],
            en: ["Medium living room", "Large equipped kitchen", "1 Bathroom", "Washing machine", "Microwave & Fridge", "Dining table"]
        },
        media: [
            { type: "image", src: "assets/506.1.jpeg" },
            { type: "image", src: "assets/506.2.jpeg" },
            { type: "image", src: "assets/506.3.jpeg" }
        ]
    },

    // === الدور السادس ===
    {
        floorId: "floor6",
        roomId: "601",
        title: { ar: "غرفة وصالة وحمام", en: "One-Bedroom Suite" },
        capacity: { ar: "2 نزلاء", en: "2 Guests" },
        bed: { ar: "1 سرير مزدوج", en: "1 Double Bed" },
        area: "55 m²",
        view: { ar: "إطلالة داخلية", en: "Standard View" },
        desc: { 
            ar: "شقة تتكون من غرفة نوم واحدة وصالة جلوس متوسطة ومطبخ كبير ومجهز بالكامل.", 
            en: "Apartment with 1 bedroom, medium lounge, and a large fully equipped kitchen." 
        },
        features: {
            ar: ["صالة جلوس متوسطة", "مطبخ كبير مجهز", "دورة مياه", "مايكرويف وثلاجة", "طاولة طعام", "دليل هاتف"],
            en: ["Medium living room", "Large equipped kitchen", "1 Bathroom", "Microwave & Fridge", "Dining table", "Phone directory"]
        },
        media: [
            { type: "image", src: "assets/601.1.jpeg" },
            { type: "image", src: "assets/601.2.jpeg" },
            { type: "image", src: "assets/601.3.jpeg" },
            { type: "image", src: "assets/601.4.jpeg" },
            { type: "image", src: "assets/601.5.jpeg" }
        ]
    },
    {
        floorId: "floor6",
        roomId: "602",
        title: { ar: "غرفة وصالة وحمام وبلكونة", en: "One-Bedroom Suite with Balcony" },
        capacity: { ar: "2 نزلاء", en: "2 Guests" },
        bed: { ar: "1 سرير مزدوج", en: "1 Double Bed" },
        area: "60 m²",
        view: { ar: "بلكونة", en: "Balcony" },
        desc: { 
            ar: "شقة بمساحة 60 متراً تتكون من غرفة نوم واحدة وصالة متوسطة ومطبخ كبير بالإضافة إلى بلكونة.", 
            en: "60m² apartment with 1 bedroom, medium lounge, large kitchen, and a balcony." 
        },
        features: {
            ar: ["بلكونة", "صالة جلوس متوسطة", "مطبخ كبير مجهز", "دورة مياه", "مايكرويف وثلاجة", "طاولة طعام"],
            en: ["Balcony", "Medium living room", "Large equipped kitchen", "1 Bathroom", "Microwave & Fridge", "Dining table"]
        },
        media: [
            { type: "image", src: "assets/602.1.jpeg" },
            { type: "image", src: "assets/602.2.jpeg" },
            { type: "image", src: "assets/602.3.jpeg" },
            { type: "image", src: "assets/602.4.jpeg" }
        ]
    },
    {
        floorId: "floor6",
        roomId: "603",
        title: { ar: "غرفة وصالة وحمام وبلكونة", en: "One-Bedroom Suite with Balcony" },
        capacity: { ar: "2 نزلاء", en: "2 Guests" },
        bed: { ar: "1 سرير مزدوج", en: "1 Double Bed" },
        area: "65 m²",
        view: { ar: "بلكونة", en: "Balcony" },
        desc: { 
            ar: "شقة بمساحة 65 متراً تتكون من غرفة نوم واحدة وصالة متوسطة ومطبخ كبير بالإضافة إلى بلكونة.", 
            en: "65m² apartment with 1 bedroom, medium lounge, large kitchen, and a balcony." 
        },
        features: {
            ar: ["بلكونة", "صالة جلوس متوسطة", "مطبخ كبير مجهز", "دورة مياه", "مايكرويف وثلاجة", "طاولة طعام"],
            en: ["Balcony", "Medium living room", "Large equipped kitchen", "1 Bathroom", "Microwave & Fridge", "Dining table"]
        },
        media: [
            { type: "image", src: "assets/603.1.jpeg" },
            { type: "image", src: "assets/603.2.jpeg" },
            { type: "image", src: "assets/603.3.jpeg" },
            { type: "image", src: "assets/603.4.jpeg" }
        ]
    },
    {
        floorId: "floor6",
        roomId: "604",
        title: { ar: "غرفة وصالة وحمام", en: "One-Bedroom Suite" },
        capacity: { ar: "2 نزلاء", en: "2 Guests" },
        bed: { ar: "1 سرير مزدوج", en: "1 Double Bed" },
        area: "55 m²",
        view: { ar: "إطلالة داخلية", en: "Standard View" },
        desc: { 
            ar: "شقة تتكون من غرفة نوم واحدة وصالة متوسطة ومطبخ كبير مجهز.", 
            en: "Apartment with 1 bedroom, medium lounge, and a large equipped kitchen." 
        },
        features: {
            ar: ["صالة جلوس متوسطة", "مطبخ كبير مجهز", "دورة مياه", "مايكرويف وثلاجة", "طاولة طعام", "دليل هاتف"],
            en: ["Medium living room", "Large equipped kitchen", "1 Bathroom", "Microwave & Fridge", "Dining table", "Phone directory"]
        },
        media: [
            { type: "image", src: "assets/604.1.jpeg" },
            { type: "image", src: "assets/604.2.jpeg" },
            { type: "image", src: "assets/604.3.jpeg" },
            { type: "image", src: "assets/604.4.jpeg" },
            { type: "image", src: "assets/604.5.jpeg" }
        ]
    },
    {
        floorId: "floor6",
        roomId: "605",
        title: { ar: "غرفتين وصالة وحمام وبلكونة", en: "Two-Bedroom Suite with Balcony" },
        capacity: { ar: "4 نزلاء", en: "4 Guests" },
        bed: { ar: "1 سرير مزدوج + 2 سرير فردي", en: "1 Double Bed + 2 Single Beds" },
        area: "60 m²",
        view: { ar: "بلكونة", en: "Balcony" },
        desc: { 
            ar: "شقة بمساحة 60 متراً تتكون من غرفتين وصالة متوسطة ومطبخ كبير بالإضافة إلى بلكونة.", 
            en: "60m² apartment featuring 2 rooms, medium lounge, large kitchen, and a balcony." 
        },
        features: {
            ar: ["بلكونة", "صالة جلوس متوسطة", "مطبخ كبير مجهز", "دورة مياه", "مايكرويف وثلاجة", "طاولة طعام"],
            en: ["Balcony", "Medium living room", "Large equipped kitchen", "1 Bathroom", "Microwave & Fridge", "Dining table"]
        },
        media: [
            { type: "image", src: "assets/605.1.jpeg" },
            { type: "image", src: "assets/605.2.jpeg" },
            { type: "image", src: "assets/606.5.jpeg" },
            { type: "image", src: "assets/605.3.jpeg" },
            { type: "image", src: "assets/605.4.jpeg" }
        ]
    },
    {
        floorId: "floor6",
        roomId: "606",
        title: { ar: "غرفة وصالة وحمام وبلكونة", en: "One-Bedroom Suite with Balcony" },
        capacity: { ar: "2 نزلاء", en: "2 Guests" },
        bed: { ar: "1 سرير مزدوج", en: "1 Double Bed" },
        area: "65 m²",
        view: { ar: "بلكونة", en: "Balcony" },
        desc: { 
            ar: "شقة بمساحة 65 متراً تتكون من غرفة نوم واحدة وصالة متوسطة ومطبخ متوسط بالإضافة إلى بلكونة.", 
            en: "65m² apartment with 1 bedroom, medium lounge, medium kitchen, and a balcony." 
        },
        features: {
            ar: ["بلكونة", "صالة جلوس متوسطة", "مطبخ متوسط مجهز", "دورة مياه", "مايكرويف وثلاجة", "طاولة طعام"],
            en: ["Balcony", "Medium living room", "Equipped kitchen", "1 Bathroom", "Microwave & Fridge", "Dining table"]
        },
        media: [
            { type: "image", src: "assets/606.1.jpeg" },
            { type: "image", src: "assets/606.2.jpeg" },
            { type: "image", src: "assets/606.3.jpeg" },
            { type: "image", src: "assets/606.4.jpeg" },
            { type: "image", src: "assets/606.6.jpeg" },
            { type: "image", src: "assets/606.7.jpeg" },
            { type: "image", src: "assets/606.8.jpeg" }
        ]
    },

    // === الدور السابع ===
    {
        floorId: "floor7",
        roomId: "701",
        title: { ar: "غرفتين وصالة وحمام وبلكونة", en: "Two-Bedroom Suite with Balcony" },
        capacity: { ar: "4 نزلاء", en: "4 Guests" },
        bed: { ar: "1 سرير مزدوج + 2 سرير فردي", en: "1 Double Bed + 2 Single Beds" },
        area: "65 m²",
        view: { ar: "بلكونة", en: "Balcony" },
        desc: { 
            ar: "شقة عملية بمساحة 65 متراً تتكون من غرفتي نوم ومطبخ متوسط وحمام بالإضافة إلى بلكونة.", 
            en: "Practical 65m² apartment featuring 2 bedrooms, medium kitchen, bathroom, and a balcony." 
        },
        features: {
            ar: ["بلكونة", "صالة جلوس", "مطبخ متوسط مجهز", "دورة مياه", "مايكرويف وثلاجة", "طاولة طعام"],
            en: ["Balcony", "Living room", "Equipped kitchen", "1 Bathroom", "Microwave & Fridge", "Dining table"]
        },
        media: [
            { type: "image", src: "assets/701.1.jpeg" },
            { type: "image", src: "assets/701.2.jpeg" },
            { type: "image", src: "assets/701.3.jpeg" },
            { type: "image", src: "assets/701.4.jpeg" }
        ]
    },
    {
        floorId: "floor7",
        roomId: "702",
        title: { ar: "غرفة وصالة وحمام وبلكونة", en: "One-Bedroom Suite with Balcony" },
        capacity: { ar: "2 نزلاء", en: "2 Guests" },
        bed: { ar: "1 سرير مزدوج", en: "1 Double Bed" },
        area: "65 m²",
        view: { ar: "بلكونة ذات خصوصية عالية", en: "High Privacy Balcony" },
        desc: { 
            ar: "شقة أنيقة تتكون من غرفة نوم واحدة وصالة متوسطة ومطبخ وتتميز ببلكونة ذات خصوصية عالية.", 
            en: "Elegant apartment with 1 bedroom, medium lounge, kitchen, featuring a highly private balcony." 
        },
        features: {
            ar: ["بلكونة بخصوصية عالية", "صالة جلوس متوسطة", "مطبخ متوسط مجهز", "دورة مياه", "مايكرويف وثلاجة", "طاولة طعام"],
            en: ["High privacy balcony", "Medium living room", "Equipped kitchen", "1 Bathroom", "Microwave & Fridge", "Dining table"]
        },
        media: [
            { type: "image", src: "assets/702.1.jpeg" },
            { type: "image", src: "assets/702.2.jpeg" },
            { type: "image", src: "assets/702.3.jpeg" },
            { type: "image", src: "assets/702.4.jpeg" }
        ]
    }
];
