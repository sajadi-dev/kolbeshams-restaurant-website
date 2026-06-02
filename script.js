/* =======================================================
   Neyash Turkish Restaurant — Bilingual Support (EN/FA)
   ======================================================= */
(function () {
  'use strict';

  // ========== TRANSLATIONS ==========
  const translations = {
    en: {
      metaTitle: "Neyash Turkish Restaurant | Turkish Cuisine in Herat",
      metaDesc: "Neyash Turkish Restaurant — authentic Turkish kebabs, meze, baklava and tea in the heart of Herat, Afghanistan. Halal. Dine-in, takeaway, and group reservations. Call 0790691919.",
      skipLink: "Skip to main content",
      navTagline: "Turkish Cuisine",
      navAbout: "About",
      navFeatures: "Features",
      navMenu: "Menu",
      navAtmosphere: "Atmosphere",
      navLocation: "Location",
      heroLocation: "Herat · Afghanistan",
      heroTurkish: "Turkish",
      heroSubtitle: "Authentic Turkish Taste in the Heart of Herat",
      heroDesc: "From sizzling kebabs to sweet baklava — experience the warmth of Turkish hospitality, one plate at a time.",
      btnViewMenu: "View Menu",
      btnTakeaway: "Order Takeaway",
      btnReserve: "Reserve a Table",
      scrollText: "Scroll",
      aboutLabel: "Our Story",
      aboutTitle1: "A Taste of",
      aboutTitle2: "Anatolia",
      aboutTitle3: "in Herat",
      aboutP1: "Born from a passion for Turkish culinary heritage, <strong class=\"text-crimson\">Neyash</strong> brings the soul of Istanbul's kitchens to the streets of Herat. Every dish — from our charcoal-grilled kebabs to our flaky baklava — is prepared with the same care found in the finest Turkish homes.",
      aboutP2: "We welcome you into a <em class=\"text-crimson-dark not-italic font-medium\">casual and comfortable</em> space, where <em class=\"text-crimson-dark not-italic font-medium\">quiet, relaxing atmosphere</em> meets warm hospitality. Come as a guest, leave as family.",
      aboutBadge: "Halal & Authentic",
      aboutFeat1: "Authentic Turkish Recipes",
      aboutFeat2: "100% Halal Ingredients",
      aboutFeat3: "Family & Tourist Friendly",
      aboutFeat4: "Fresh, Daily Preparation",
      aboutCTA: "Reserve your table",
      featuresLabel: "Our Services",
      featuresTitle1: "Everything You Need,",
      featuresTitle2: "Beautifully Provided",
      featuresDesc: "From dine-in comfort to fast takeaway — we make every visit memorable.",
      feat1Title: "Takeaway Food",
      feat1Desc: "Enjoy fresh Turkish flavors at home — packed hot and ready to go.",
      feat2Title: "Dine-In Experience",
      feat2Desc: "Relax in our warm, inviting dining hall with traditional ambiance.",
      feat3Title: "Attentive Table Service",
      feat3Desc: "Friendly, professional staff dedicated to your comfort.",
      feat4Title: "Turkish Desserts",
      feat4Desc: "Indulge in baklava, künefe, and more house-made sweets.",
      feat5Title: "Cash Payment Only",
      feat5Desc: "Simple, transparent — cash only, please.",
      feat6Title: "Family-Friendly",
      feat6Desc: "A warm, welcoming space for all ages and gatherings.",
      feat7Title: "Tourists Welcome",
      feat7Desc: "Discover authentic Turkish taste while exploring Herat.",
      feat8Title: "Group-Friendly Seating",
      feat8Desc: "Spacious tables ready for families, friends, and celebrations.",
      popularLabel: "Popular For",
      popularTitle1: "Perfect for",
      popularTitle2: "Every Occasion",
      pop1: "Lunch",
      pop1Desc: "Quick · Satisfying",
      pop2: "Dinner",
      pop2Desc: "Warm · Elegant",
      pop3: "Solo Dining",
      pop3Desc: "Relaxed · Comfortable",
      pop4: "Group Dining",
      pop4Desc: "Family · Friends",
      menuLabel: "Our Menu",
      menuTitle1: "From Istanbul",
      menuTitle2: "to Herat",
      menuDesc: "Authentic Turkish dishes, crafted with traditional recipes and the finest ingredients.",
      tabMezze: "Mezze",
      tabKebabs: "Kebabs",
      tabGrills: "Grills",
      tabDesserts: "Desserts",
      tabDrinks: "Tea & Drinks",
      dish1Name: "Sini Mezze",
      dish1Desc: "A grand sharing platter of hummus, babaganoush, acılı ezme, fresh herbs, and warm pide.",
      dish2Desc: "Shepherd's salad — diced tomatoes, cucumbers, peppers, onions, with sumac and lemon.",
      dish3Desc: "Thin, crispy flatbread topped with spiced minced lamb, herbs, and fresh lemon.",
      dish4Desc: "Hand-minced lamb seasoned with red pepper, charcoal-grilled on a wide iron skewer. Bold & smoky.",
      dish5Desc: "Tender döner slices over pide bread, topped with tomato sauce, yogurt, and sizzling butter.",
      dish6Desc: "Cubed lamb marinated in yogurt and spices, skewered and grilled over open flame.",
      dish7Desc: "Chef's mixed grill — Adana, şiş, chicken tikka, and köfte, with rice and grilled vegetables.",
      dish8Desc: "Tender chicken cubes marinated in yogurt, paprika, and herbs, grilled to juicy perfection.",
      dish9Desc: "Hand-formed lamb meatballs, spiced with cumin and parsley, pan-grilled and served with pide.",
      dish10Desc: "Delicate layers of phyllo, pistachios, and butter, drenched in aromatic rosewater syrup.",
      dish11Desc: "Crispy shredded pastry filled with melted cheese, soaked in sweet syrup, topped with pistachios.",
      dish12Desc: "Traditional Turkish delight — soft cubes of rose, lemon, or pistachio, dusted with sugar.",
      dish13Desc: "Traditional Turkish black tea, brewed double in a çaydanlık — served in the iconic tulip glass.",
      dish14Desc: "Finely ground coffee, slow-brewed in a cezve with cardamom — thick, rich, unforgettable.",
      dish15Desc: "Chilled salted yogurt drink — the perfect companion to any kebab or grill dish.",
      tagSharing: "For Sharing",
      tagVeg: "Vegetarian",
      tagFavorite: "House Favorite",
      tagSpicy: "Spicy",
      tagSignature: "Signature",
      tagClassic: "Classic",
      tagForTwo: "For Two",
      tagMild: "Mild",
      tagPopular: "Popular",
      tagMustTry: "Must Try",
      tagTraditional: "Traditional",
      tagRefreshing: "Refreshing",
      btnReserveFullMenu: "Reserve to See Full Menu",
      atmosphereLabel: "The Atmosphere",
      atmosphereTitle1: "Step Into",
      atmosphereTitle2: "Turkish Warmth",
      atmosphereDesc: "Comfortable, casual, and quietly elegant — where hospitality is an art and every guest is family.",
      atmFeat1Title: "Comfortable & Casual",
      atmFeat1Desc: "Relaxed seating for families, couples, and solo guests.",
      atmFeat2Title: "Quiet & Relaxing",
      atmFeat2Desc: "Calm, unhurried atmosphere — perfect for conversation.",
      atmFeat3Title: "Family & Group Ready",
      atmFeat3Desc: "Spacious tables for large gatherings and celebrations.",
      reserveLabel: "Reservations",
      reserveTitle1: "Reserve Your",
      reserveTitle2: "Table",
      reserveDesc: "Secure your spot for an unforgettable Turkish dining experience. For quick reservations, simply give us a call.",
      reserveCallTitle: "Prefer to call?",
      cashOnlyTitle: "Cash Payment Only",
      cashOnlyDesc: "Please note: we accept cash payments only at the restaurant.",
      formName: "Full Name",
      formPhone: "Phone Number",
      formDate: "Date",
      formTime: "Time",
      formGuests: "Number of Guests",
      formSelectGuests: "Select guests",
      guest1: "1 guest",
      guest2: "2 guests",
      guest3: "3 guests",
      guest4: "4 guests",
      guest5: "5 guests",
      guest6: "6 guests",
      guest7Plus: "7+ guests (please call)",
      btnConfirmReserve: "Confirm Reservation",
      formFooter: "💵 Cash only · Your details are private · Confirmation by phone",
      locationLabel: "Find Us",
      locationTitle1: "Visit",
      locationTitle2: "Neyash",
      locationDesc: "Located on Qahraman Milli Street — easy to reach from anywhere in Herat.",
      locAddressTitle: "Address",
      locHoursTitle: "Opening Hours",
      locHours: "Every day · 10:00 AM – 11:00 PM",
      locPhoneTitle: "Phone",
      btnGetDirections: "Get Directions",
      paymentTitle: "Cash Payment Only",
      paymentDesc: "To keep our service simple and swift, <strong class=\"text-gold-light\">Neyash accepts cash payments only</strong>. Digital payments are not currently supported.",
      paymentNote: "Please come prepared with cash for a smooth dining experience",
      accessibilityLabel: "Accessibility & Comfort",
      accessibilityTitle1: "Everyone",
      accessibilityTitle2: "Welcome",
      access1Title: "Family-Friendly",
      access1Desc: "Welcoming for all ages and gatherings",
      access2Title: "Easy Navigation",
      access2Desc: "Clear, intuitive layout on any device",
      access3Title: "Readable Typography",
      access3Desc: "Clean fonts, generous spacing",
      access4Title: "High Contrast",
      access4Desc: "Designed for clarity and comfort",
      footerDesc: "Authentic Turkish taste in the heart of Herat — kebabs, baklava, and hospitality rooted in tradition.",
      footerQuickLinks: "Quick Links",
      footerVisit: "Visit Us",
      footerHours: "Opening Hours",
      hoursMonThu: "Monday – Thursday",
      hoursFri: "Friday",
      hoursSatSun: "Saturday – Sunday",
      footerTagline: "Best Turkish restaurant in Herat · Authentic halal kebabs · Cash only",
      toastSuccess: "Reservation received! We will call you to confirm."
    },
    fa: {
      metaTitle: "رستوران ترکی نیایش | غذای ترکی در هرات",
      metaDesc: "رستوران ترکی نیایش — کباب‌های اصیل ترکی، مزه، باقلوا و چای در قلب هرات، افغانستان. حلال. dine-in، takeaway و رزرو گروهی. تماس: 0790691919",
      skipLink: "پرش به محتوای اصلی",
      navTagline: "غذای ترکی",
      navAbout: "درباره ما",
      navFeatures: "خدمات",
      navMenu: "منو",
      navAtmosphere: "فضا",
      navLocation: "موقعیت",
      heroLocation: "هرات · افغانستان",
      heroTurkish: "ترکی",
      heroSubtitle: "طعم اصیل ترکی در قلب هرات",
      heroDesc: "از کباب‌های بریان گرفته تا باقلوای شیرین — گرمای مهمان‌نوازی ترکی را تجربه کنید.",
      btnViewMenu: "مشاهده منو",
      btnTakeaway: "سفارش بیرون‌بر",
      btnReserve: "رزرو میز",
      scrollText: "اسکرول",
      aboutLabel: "داستان ما",
      aboutTitle1: "طعمی از",
      aboutTitle2: "آناتولی",
      aboutTitle3: "در هرات",
      aboutP1: "از عشق به میراث غذایی ترکی متولد شد، <strong class=\"text-crimson\">نیایش</strong> روح آشپزخانه‌های استانبول را به خیابان‌های هرات می‌آورد. هر غذا — از کباب‌های ذغالی تا باقلوای لایه‌ای — با همان مراقبتی که در بهترین خانه‌های ترکی پیدا می‌شود، آماده می‌شود.",
      aboutP2: "شما را به یک فضای <em class=\"text-crimson-dark not-italic font-medium\">راحت و خودمانی</em> دعوت می‌کنیم، جایی که <em class=\"text-crimson-dark not-italic font-medium\">آرامش و سکوت</em> با مهمان‌نوازی گرم ترکیب می‌شود. به عنوان مهمان بیایید، به عنوان خانواده بروید.",
      aboutBadge: "حلال و اصیل",
      aboutFeat1: "دستورهای اصیل ترکی",
      aboutFeat2: "مواد اولیه ۱۰٪ حلال",
      aboutFeat3: "مناسب خانواده و توریست‌ها",
      aboutFeat4: "آماده‌سازی روزانه و تازه",
      aboutCTA: "میز خود را رزرو کنید",
      featuresLabel: "خدمات ما",
      featuresTitle1: "همه چیز که نیاز دارید،",
      featuresTitle2: "به زیبایی ارائه شده",
      featuresDesc: "از راحتی dine-in تا takeaway سریع — هر بازدید را به یادماندنی می‌کنیم.",
      feat1Title: "غذای بیرون‌بر",
      feat1Desc: "طعم‌های تازه ترکی را در خانه لذت ببرید — داغ و آماده.",
      feat2Title: "تجربه dine-in",
      feat2Desc: "در تالار غذای گرم و دعوت‌کننده ما با فضای سنتی آرامش داشته باشید.",
      feat3Title: "سرویس میز attentive",
      feat3Desc: "کارکنان دوستانه و حرفه‌ای متعهد به راحتی شما.",
      feat4Title: "دسرهای ترکی",
      feat4Desc: "باقلوا، کونفه و شیرینی‌های خانگی بیشتر را تجربه کنید.",
      feat5Title: "فقط پرداخت نقدی",
      feat5Desc: "ساده، شفاف — لطفاً فقط نقدی.",
      feat6Title: "مناسب خانواده",
      feat6Desc: "فضای گرم و خوش‌آمدگو برای همه سنین و گردهمایی‌ها.",
      feat7Title: "خوش‌آمد به توریست‌ها",
      feat7Desc: "طعم اصیل ترکی را هنگام کشف هرات کشف کنید.",
      feat8Title: "صندلی‌های مناسب گروه",
      feat8Desc: "میزهای بزرگ آماده برای خانواده‌ها، دوستان و جشن‌ها.",
      popularLabel: "محبوب برای",
      popularTitle1: "کامل برای",
      popularTitle2: "هر مناسبت",
      pop1: "ناهار",
      pop1Desc: "سریع · سیرکننده",
      pop2: "شام",
      pop2Desc: "گرم · شیک",
      pop3: "تنهایی",
      pop3Desc: "آرام · راحت",
      pop4: "گروهی",
      pop4Desc: "خانواده · دوستان",
      menuLabel: "منوی ما",
      menuTitle1: "از استانبول",
      menuTitle2: "به هرات",
      menuDesc: "غذاهای اصیل ترکی، ساخته شده با دستورهای سنتی و بهترین مواد اولیه.",
      tabMezze: "مزه",
      tabKebabs: "کباب‌ها",
      tabGrills: "گریل‌ها",
      tabDesserts: "دسرها",
      tabDrinks: "چای و نوشیدنی‌ها",
      dish1Name: "سینی مزه",
      dish1Desc: "یک سینی بزرگ اشتراکی از هوموس، باباغنوش، ezme، سبزیجات تازه و pide گرم.",
      dish2Desc: "سالاد چوپان — گوجه‌فرنگی، خیار، فلفل، پیاز خرد شده، با سماق و لیمو.",
      dish3Desc: "نان تخت نازک و ترد با گوشت بره چرخ‌کرده ادویه‌دار، سبزیجات و لیموی تازه.",
      dish4Desc: "گوشت بره دست‌کوب با فلفل قرمز ادویه‌دار، گریل ذغالی روی سیخ آهنی پهن. جسورانه و دودی.",
      dish5Desc: "برش‌های نازک دونر روی نان pide، با سس گوجه‌فرنگی، ماست و کره داغ.",
      dish6Desc: "گوشت بره مکعبی marinade شده در ماست و ادویه، سیخ شده و گریل روی شعله باز.",
      dish7Desc: "گریل مخلوط سرآشپز — Adana، şiş، chicken tikka و köfte، با برنج و سبزیجات گریل.",
      dish8Desc: "تکه‌های مرغ tender marinade شده در ماست، پاپریکا و سبزیجات، گریل تا کمال آبدار.",
      dish9Desc: "کوفته‌های بره دست‌ساز، ادویه‌دار با زیره و جعفری، گریل تابه‌ای و سرو با pide.",
      dish10Desc: "لایه‌های نازک phyllo، پسته و کره، خیس شده در شربت معطر گلاب.",
      dish11Desc: "خمیر رشته‌ای ترد پر شده با پنیر ذوب شده، خیس شده در شربت شیرین، با پسته.",
      dish12Desc: "لذت ترکی سنتی — مکعب‌های نرم گل، لیمو یا پسته، پودر شده با شکر.",
      dish13Desc: "چای سیاه سنتی ترکی، دم‌دو در çaydanlık — سرو در لیوان tulip نمادین.",
      dish14Desc: "قهوه آسیاب‌شده ریز، دم‌آهسته در cezve با هل — غلیظ، غنی، فراموش‌نشدنی.",
      dish15Desc: "نوشیدنی ماست شور خنک — همراه کامل برای هر کباب یا غذای گریل.",
      tagSharing: "برای اشتراک",
      tagVeg: "گیاهی",
      tagFavorite: "محبوب خانه",
      tagSpicy: "تند",
      tagSignature: "امضایی",
      tagClassic: "کلاسیک",
      tagForTwo: "برای دو نفر",
      tagMild: "ملایم",
      tagPopular: "محبوب",
      tagMustTry: "حتماً امتحان کنید",
      tagTraditional: "سنتی",
      tagRefreshing: "تازه‌کننده",
      btnReserveFullMenu: "برای دیدن منوی کامل رزرو کنید",
      atmosphereLabel: "فضا",
      atmosphereTitle1: "وارد شوید به",
      atmosphereTitle2: "گرمای ترکی",
      atmosphereDesc: "راحت، خودمانی و به آرامی شیک — جایی که مهمان‌نوازی یک هنر است و هر مهمان خانواده است.",
      atmFeat1Title: "راحت و خودمانی",
      atmFeat1Desc: "صندلی‌های آرام برای خانواده‌ها، زوج‌ها و مهمان‌های تنها.",
      atmFeat2Title: "آرام و relaxing",
      atmFeat2Desc: "فضای آرام و بدون عجله — کامل برای گفتگو.",
      atmFeat3Title: "آماده برای خانواده و گروه",
      atmFeat3Desc: "میزهای بزرگ برای گردهمایی‌ها و جشن‌های بزرگ.",
      reserveLabel: "رزرواسیون",
      reserveTitle1: "میز خود را",
      reserveTitle2: "رزرو کنید",
      reserveDesc: "مکان خود را برای یک تجربه غذایی ترکی فراموش‌نشدنی تضمین کنید. برای رزرو سریع، فقط به ما زنگ بزنید.",
      reserveCallTitle: "ترجیح می‌دهید زنگ بزنید؟",
      cashOnlyTitle: "فقط پرداخت نقدی",
      cashOnlyDesc: "لطفاً توجه کنید: ما فقط پرداخت نقدی را در رستوران می‌پذیریم.",
      formName: "نام کامل",
      formPhone: "شماره تماس",
      formDate: "تاریخ",
      formTime: "زمان",
      formGuests: "تعداد مهمان‌ها",
      formSelectGuests: "انتخاب مهمان‌ها",
      guest1: "۱ مهمان",
      guest2: "۲ مهمان",
      guest3: "۳ مهمان",
      guest4: "۴ مهمان",
      guest5: "۵ مهمان",
      guest6: "۶ مهمان",
      guest7Plus: "۷+ مهمان (لطفاً تماس بگیرید)",
      btnConfirmReserve: "تأیید رزرو",
      formFooter: "💵 فقط نقدی · اطلاعات شما خصوصی است · تأیید توسط تلفن",
      locationLabel: "ما را پیدا کنید",
      locationTitle1: "بازدید از",
      locationTitle2: "نیایش",
      locationDesc: "واقع در خیابان قهرمان ملی — از هر جای هرات به راحتی قابل دسترسی.",
      locAddressTitle: "آدرس",
      locHoursTitle: "ساعات کار",
      locHours: "هر روز · ۱۰:۰۰ صبح – ۱۱:۰۰ شب",
      locPhoneTitle: "تلفن",
      btnGetDirections: "دریافت مسیر",
      paymentTitle: "فقط پرداخت نقدی",
      paymentDesc: "برای ساده و سریع نگه داشتن خدماتمان، <strong class=\"text-gold-light\">نیایش فقط پرداخت نقدی را می‌پذیرد</strong>. پرداخت‌های دیجیتال در حال حاضر پشتیبانی نمی‌شوند.",
      paymentNote: "لطفاً با پول نقد آماده بیایید برای یک تجربه غذایی روان",
      accessibilityLabel: "دسترسی‌پذیری و راحتی",
      accessibilityTitle1: "همه",
      accessibilityTitle2: "خوش‌آمدید",
      access1Title: "مناسب خانواده",
      access1Desc: "خوش‌آمدگو برای همه سنین و گردهمایی‌ها",
      access2Title: "ناوبری آسان",
      access2Desc: "چیدمان واضح و intuitive در هر دستگاه",
      access3Title: "تایپوگرافی خوانا",
      access3Desc: "فونت‌های تمیز، فاصله‌گذاری سخاوتمندانه",
      access4Title: "کنتراست بالا",
      access4Desc: "طراحی شده برای وضوح و راحتی",
      footerDesc: "طعم اصیل ترکی در قلب هرات — کباب، باقلوا و مهمان‌نوازی ریشه‌دار در سنت.",
      footerQuickLinks: "لینک‌های سریع",
      footerVisit: "بازدید از ما",
      footerHours: "ساعات کار",
      hoursMonThu: "دوشنبه – پنجشنبه",
      hoursFri: "جمعه",
      hoursSatSun: "شنبه – یکشنبه",
      footerTagline: "بهترین رستوران ترکی در هرات · کباب‌های حلال اصیل · فقط نقدی",
      toastSuccess: "رزرو دریافت شد! با شما تماس خواهیم گرفت برای تأیید."
    }
  };

  // ========== STATE ==========
  let currentLang = localStorage.getItem('neyash-lang') || 'en';

  // ========== DOM ELEMENTS ==========
  const langButtons = document.querySelectorAll('[data-lang]');
  const html = document.documentElement;

  // ========== FUNCTIONS ==========
  function updateContent(lang) {
    const t = translations[lang];
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key]) {
        // Handle HTML content
        if (key.includes('P1') || key.includes('P2') || key.includes('Desc')) {
          el.innerHTML = t[key];
        } else {
          el.textContent = t[key];
        }
      }
    });

    // Update meta tags
    document.querySelector('meta[name="description"]').setAttribute('content', t.metaDesc);
    document.querySelector('title').textContent = t.metaTitle;
    document.querySelector('meta[property="og:title"]').setAttribute('content', t.metaTitle);
    document.querySelector('meta[property="og:description"]').setAttribute('content', t.metaDesc);
    document.querySelector('meta[name="twitter:title"]').setAttribute('content', t.metaTitle);
    document.querySelector('meta[name="twitter:description"]').setAttribute('content', t.metaDesc);

    // Update lang attribute
    html.setAttribute('lang', lang === 'fa' ? 'fa' : 'en');
    html.setAttribute('dir', lang === 'fa' ? 'rtl' : 'ltr');
    html.setAttribute('data-lang', lang);

    // Update active states on buttons
    langButtons.forEach(btn => {
      const isActive = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive);
    });

    // Save preference
    localStorage.setItem('neyash-lang', lang);
  }

  function switchLanguage(lang) {
    if (lang !== currentLang) {
      currentLang = lang;
      updateContent(lang);
      
      // Re-trigger scroll reveal for new content
      setTimeout(() => {
        window.dispatchEvent(new Event('scroll'));
      }, 100);
    }
  }

  // ========== EVENT LISTENERS ==========
  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      switchLanguage(lang);
    });
  });

  // ========== INITIALIZATION ==========
  // Initialize on load
  document.addEventListener('DOMContentLoaded', () => {
    updateContent(currentLang);
  });

  // ========== REST OF THE ORIGINAL SCRIPT ==========
  
  // Dynamic year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Set min date on reservation
  const dateInput = document.getElementById('res-date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
    dateInput.value = today;
  }

  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const bar1 = document.getElementById('bar1');
  const bar2 = document.getElementById('bar2');
  const bar3 = document.getElementById('bar3');
  let menuOpen = false;

  function toggleMenu(force) {
    menuOpen = typeof force === 'boolean' ? force : !menuOpen;
    mobileMenu.classList.toggle('open', menuOpen);
    menuToggle.setAttribute('aria-expanded', String(menuOpen));

    if (menuOpen) {
      bar1.style.transform = 'translateY(8px) rotate(45deg)';
      bar2.style.opacity = '0';
      bar3.style.transform = 'translateY(-8px) rotate(-45deg)';
    } else {
      bar1.style.transform = '';
      bar2.style.opacity = '1';
      bar3.style.transform = '';
    }
  }

  if (menuToggle) {
    menuToggle.addEventListener('click', () => toggleMenu());
  }

  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
  });

  // Navbar scroll
  const navbar = document.getElementById('navbar');

  function updateNavbar() {
    const scrolled = window.scrollY > 60;
    navbar.classList.toggle('nav-scrolled', scrolled);
  }

  window.addEventListener('scroll', updateNavbar, { passive: true });
  updateNavbar();

  // Scroll reveal
  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    revealElements.forEach(el => observer.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('visible'));
  }

  // Menu tabs
  const tabs = document.querySelectorAll('.menu-tab');
  const dishes = document.querySelectorAll('[data-category]');

  function switchTab(category) {
    tabs.forEach(t => {
      const active = t.dataset.tab === category;
      t.classList.toggle('active', active);
      t.setAttribute('aria-selected', String(active));
      if (active) {
        t.classList.remove('bg-beige', 'text-charcoal', 'border', 'border-crimson/20');
        t.classList.add('bg-crimson', 'text-white');
      } else {
        t.classList.add('bg-beige', 'text-charcoal', 'border', 'border-crimson/20');
        t.classList.remove('bg-crimson', 'text-white');
      }
    });

    dishes.forEach(dish => {
      const match = dish.dataset.category === category;
      dish.classList.toggle('hidden', !match);
      if (match) {
        dish.classList.remove('visible');
        requestAnimationFrame(() => dish.classList.add('visible'));
      }
    });
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => switchTab(tab.dataset.tab));
  });

  // Reservation form
  const form = document.getElementById('reservation-form');
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-msg');

  function showToast(msg) {
    if (!toast || !toastMsg) return;
    toastMsg.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 4500);
  }

  function showFieldError(field, msg) {
    field.classList.add('border-red-600');
    field.setAttribute('aria-invalid', 'true');
    let error = field.parentElement.querySelector('.field-error');
    if (!error) {
      error = document.createElement('p');
      error.className = 'field-error text-xs text-red-700 mt-1 font-medium';
      field.parentElement.appendChild(error);
    }
    error.textContent = msg;
  }

  function clearFieldError(field) {
    field.classList.remove('border-red-600');
    field.removeAttribute('aria-invalid');
    const error = field.parentElement.querySelector('.field-error');
    if (error) error.remove();
  }

  if (form) {
    form.querySelectorAll('input, select').forEach(field => {
      field.addEventListener('input', () => clearFieldError(field));
      field.addEventListener('change', () => clearFieldError(field));
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = form.elements.name;
      const phone = form.elements.phone;
      const date = form.elements.date;
      const time = form.elements.time;
      const guests = form.elements.guests;

      [name, phone, date, time, guests].forEach(clearFieldError);

      let valid = true;

      if (!name.value.trim()) { showFieldError(name, currentLang === 'en' ? 'Please enter your name' : 'لطفاً نام خود را وارد کنید'); valid = false; }
      if (!phone.value.trim() || phone.value.replace(/\D/g, '').length < 6) {
        showFieldError(phone, currentLang === 'en' ? 'Please enter a valid phone number' : 'لطفاً شماره تماس معتبر وارد کنید');
        valid = false;
      }
      if (!date.value) { showFieldError(date, currentLang === 'en' ? 'Please pick a date' : 'لطفاً تاریخ را انتخاب کنید'); valid = false; }
      if (!time.value) { showFieldError(time, currentLang === 'en' ? 'Please pick a time' : 'لطفاً زمان را انتخاب کنید'); valid = false; }
      if (!guests.value) { showFieldError(guests, currentLang === 'en' ? 'Please select number of guests' : 'لطفاً تعداد مهمان‌ها را انتخاب کنید'); valid = false; }

      if (!valid) {
        const firstInvalid = form.querySelector('[aria-invalid="true"]');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span class="animate-pulse">' + (currentLang === 'en' ? 'Confirming...' : 'در حال تأیید...') + '</span>';

      setTimeout(() => {
        submitBtn.innerHTML = '✓ ' + (currentLang === 'en' ? 'Reservation Confirmed' : 'رزرو تأیید شد');
        submitBtn.classList.remove('btn-gold');
        submitBtn.style.background = 'var(--crimson-dark)';
        submitBtn.style.color = 'white';

        showToast(translations[currentLang].toastSuccess);

        setTimeout(() => {
          form.reset();
          if (dateInput) {
            const today = new Date().toISOString().split('T')[0];
            dateInput.value = today;
          }
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
          submitBtn.classList.add('btn-gold');
          submitBtn.style.background = '';
          submitBtn.style.color = '';
        }, 3500);
      }, 1200);
    });
  }

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#' || href.length < 2) return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Close on ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuOpen) toggleMenu(false);
  });

  // Reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.style.scrollBehavior = 'auto';
    revealElements.forEach(el => el.classList.add('visible'));
  }

  console.log('%c🌶️ Neyash Turkish Restaurant', 'font-family: Georgia; font-size: 20px; color: #8B1E1E; font-weight: bold;');
  console.log('%cرستوران ترکی نیایش', 'font-family: "Noto Naskh Arabic"; font-size: 18px; color: #C8A24A; font-weight: 600;');
})();