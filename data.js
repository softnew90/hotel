// إعدادات الموقع العامة (لوحة التحكم السريعة)
const siteSettings = {
    logo: "assets/logo.png", 
    logoHeight: "120px", 
    heroTitle: "مرحبا بكم في لوسيل", 
    heroSubtitle: "وجهتك المثلى في أجمل مصايف المملكة",
    bookingLink: "https://www.booking.com", 
    heroVideo: "https://res.cloudinary.com/hpgg1hvh/video/upload/v1787252639/pop.mp4", 
    
    // إعدادات الفوتر (تواصل معنا)
    phoneNumber: "0509187294",
    whatsappLink: "https://wa.me/966509187294",
    instagramLink: "https://instagram.com/lucilleresortsa",
    tiktokLink: "https://tiktok.com/@lucilleresort.sa",
    locationText: "الطائف - الهدا - طريق الهدا مكه",
    mapLink: "https://maps.google.com/?q=21.366893768310547,40.27826690673828",
    copyrightText: "© 2026 لوسيل للشقق المخدومة. جميع الحقوق محفوظة.",

    aboutMedia: [
        { type: "image", src: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=600&auto=format&fit=crop" },
        { type: "video", src: "https://res.cloudinary.com/hpgg1hvh/video/upload/v1787252639/pop.mp4" } 
    ]
};

// قاعدة بيانات الأدوار (الطوابق)
const floorsData = [
    { id: "floor1", number: "01", name: "الطابق الأرضي والبهو الملكي" },
    { id: "floor2", number: "02", name: "الطابق الأول - مستوى الأزُور" },
    { id: "floor3", number: "03", name: "الطابق الثاني - المدرجات المتوسطية" },
    { id: "floor4", number: "04", name: "الطابق الثالث - ملاذ البانوراما" },
    { id: "floor5", number: "05", name: "الروفتوب والجناح الرئاسي المعلق" }
];

// قاعدة بيانات الغرف
const roomsData = [
    {
        floorId: "floor1",
        roomId: "302",
        title: "غرفة كوستال التنفيذية",
        price: "night / $360",
        capacity: "2 نزلاء",
        bed: "سرير ملكي كينغ",
        area: "45 m²",
        view: "إطلالة على البحر وخليج الساحل",
        desc: "صُممت لرواد الأعمال والمسافرين الباحثين عن بيئة عمل راقية ومريحة ممزوجة بجماليات البحر المهدئة للأعصاب.",
        features: ["مكتب عمل جلدي مريح ومريح للظهر", "إنترنت ألياف ضوئية فائق السرعة", "ركن إسبريسو مع مطحنة طازجة", "محطة شحن لاسلكي ذكية", "دخول مجاني للصالون التنفيذي", "جدران عازلة للصوت بالكامل"],
        media: [
            { type: "video", src: "https://res.cloudinary.com/hpgg1hvh/video/upload/v1787252639/pop.mp4" }, 
            { type: "image", src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=800&auto=format&fit=crop" },
            { type: "image", src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop" }
        ]
    },
    {
        floorId: "floor1",
        roomId: "301",
        title: "جناح الغروب الذهبي",
        price: "night / $480",
        capacity: "2 نزلاء",
        bed: "سرير إمبراطوري",
        area: "60 m²",
        view: "إطلالة مباشرة على الغروب",
        desc: "جناح فاخر يجمع بين الأصالة والحداثة.",
        features: ["إنترنت سريع", "إفطار مجاني", "شرفة خاصة", "تجهيزات حمام فاخرة"],
        media: [
            { type: "image", src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop" },
            { type: "image", src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=800&auto=format&fit=crop" },
            { type: "video", src: "https://res.cloudinary.com/hpgg1hvh/video/upload/v1787252639/pop.mp4" }
        ]
    }
];