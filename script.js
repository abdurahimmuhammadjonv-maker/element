/**
 * USTA ELON UZ - PROFESSIONAL SYSTEM ARCHITECTURE
 * Region: Farg'ona Viloyati (Farg'ona, Qo'qon, Marg'ilon, Rishton, Quva, Oltiariq, Quvasoy, Toshloq)
 * Roles: Mijoz (Customer), Usta (Craftsman), Admin (ABDUNOZIM / 2011 2011)
 * Features: 5 Pure Sections, Interactive Fergana Map, Call Master Form (Anketa),
 *           Hardware-only Store (No human photos), Distinct Cyber-Gold Admin Console.
 */

// ============================================================================
// 1. FARG'ONA VILOYATI MALAKALI USTALARI (10 TA TOP USTA & ANIQ ISH NAMUNALARI)
// ============================================================================

const INITIAL_MASTERS = [
  {
    id: 1,
    name: "Anvarjon Yo'ldoshev",
    profession: "Uy qurish, Poydevor & Monolit",
    category: "uy_qurish",
    rating: 4.96,
    reviewsCount: 168,
    experience: "15 yil",
    phone: "+998 90 551 22 33",
    city: "Farg'ona shahri (Markaz)",
    lat: 40.3842,
    lng: 71.7843,
    hourlyRate: "120 000 so'm / soat",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
    cover: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?w=800&auto=format&fit=crop&q=80",
    description: "Noldan boshlab kalit topshirishgacha bo'lgan barcha turar-joy va bino qurilish ishlari. Poydevor quyish, armatura to'qish, beton va g'isht terish bo'yicha 15 yillik tajribali brigada.",
    skills: ["Noldan uy qurish", "Beton poydevor", "Monolit quyish", "Seysmik kamar"],
    completedJobs: 95,
    samples: [
      "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: 2,
    name: "Muzaffar Tojiyev",
    profession: "Devor qurish & Pishiq g'isht teruvchi",
    category: "devor_qurish",
    rating: 4.92,
    reviewsCount: 142,
    experience: "12 yil",
    phone: "+998 91 680 44 55",
    city: "Qo'qon shahri",
    lat: 40.5284,
    lng: 70.9424,
    hourlyRate: "350 so'm / dona g'isht",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
    cover: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=800&auto=format&fit=crop&q=80",
    description: "Pishiq g'isht, xom g'isht, shlakoblok va gazoblokdan devorlarni ipdek tekis terish. Fasad g'ishtlarini chiroyli chok bilan sifatli teramiz.",
    skills: ["Pishiq g'isht terish", "Shlakoblok devor", "Gazoblok montaj", "Fasad chokli g'isht"],
    completedJobs: 240,
    samples: [
      "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?w=600&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: 3,
    name: "Islomjon Karimov",
    profession: "Kafel, Granit & Marmar yotqizish",
    category: "kafel",
    rating: 4.98,
    reviewsCount: 195,
    experience: "11 yil",
    phone: "+998 93 972 11 22",
    city: "Marg'ilon shahri",
    lat: 40.4722,
    lng: 71.7144,
    hourlyRate: "75 000 so'm / kv.m",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80",
    cover: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&auto=format&fit=crop&q=80",
    description: "Katta formatli 120x60 sm kafel, marmar plitalar va mozaika yotqizish. 45 gradus burchak kesishlari lazerda aniq tekshiriladi.",
    skills: ["Katta format kafel", "45 gradus kesim", "Santexnika lyuki", "Vanna kafel"],
    completedJobs: 380,
    samples: [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1502005229762-ee1b2da97ba4?w=600&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: 4,
    name: "Jamoliddin Rahmonov",
    profession: "Tosh gilam & Bruschatka yotqizish",
    category: "tosh_gilam",
    rating: 4.94,
    reviewsCount: 130,
    experience: "9 yil",
    phone: "+998 94 445 77 88",
    city: "Rishton tumani",
    lat: 40.3567,
    lng: 71.2828,
    hourlyRate: "60 000 so'm / kv.m",
    avatar: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?w=400&auto=format&fit=crop&q=80",
    cover: "https://images.unsplash.com/photo-1584463699042-494b998e945c?w=800&auto=format&fit=crop&q=80",
    description: "Hovli va ko'chalarga tabiiy tosh gilam, dekorativ daryo toshlari, granit tosh va bruschatka yotqizish. Suv to'planmaydigan nishablik kafolati.",
    skills: ["Tosh gilam", "Bruschatka", "Daryo toshlari bezagi", "Bordyur o'rnatish"],
    completedJobs: 210,
    samples: [
      "https://images.unsplash.com/photo-1584463699042-494b998e945c?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?w=600&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: 5,
    name: "Rustamjon Odilov",
    profession: "Suvoqchilik, Malyar & Oboy yopishtirish",
    category: "suvoq_oboy",
    rating: 4.89,
    reviewsCount: 154,
    experience: "13 yil",
    phone: "+998 90 300 99 88",
    city: "Oltiariq tumani",
    lat: 40.3956,
    lng: 71.4794,
    hourlyRate: "45 000 so'm / kv.m",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80",
    cover: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&auto=format&fit=crop&q=80",
    description: "Mayak asosida gipsli va sementli suvoq, shpaklyovka, oboy yopishtirish, emulsiyalar bilan bo'yash hamda travertin fasad xizmatlari.",
    skills: ["Mayakli suvoq", "Oboy yopishtirish", "Travertin fasad", "Bezpyl shpaklyovka"],
    completedJobs: 320,
    samples: [
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1563770660941-20978e870e26?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: 6,
    name: "Alisher Umarov",
    profession: "Elektron & Elektr montaj muhandisi",
    category: "elektr",
    rating: 4.97,
    reviewsCount: 180,
    experience: "10 yil",
    phone: "+998 97 220 33 44",
    city: "Farg'ona shahri (Qirbuloq)",
    lat: 40.3750,
    lng: 71.8000,
    hourlyRate: "80 000 so'm / nuqta",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80",
    cover: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80",
    description: "Xonadon va korxonalar uchun to'liq elektr tarmog'i loyihasi va montaji. Avtomatika shitlarini yig'ish, kabel kanallari va yashirin montaj.",
    skills: ["Shit yig'ish", "380V / 220V montaj", "Kabel yotqizish", "LED yoritgichlar"],
    completedJobs: 410,
    samples: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1563770660941-20978e870e26?w=600&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: 7,
    name: "Botirjon Qodirov",
    profession: "Tom qurish & Mansarda ustasi",
    category: "tom_qurish",
    rating: 4.91,
    reviewsCount: 115,
    experience: "14 yil",
    phone: "+998 91 140 55 66",
    city: "Quva tumani",
    lat: 40.5244,
    lng: 72.0739,
    hourlyRate: "65 000 so'm / kv.m",
    avatar: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=400&auto=format&fit=crop&q=80",
    cover: "https://images.unsplash.com/photo-1632759145351-1d592919f522?w=800&auto=format&fit=crop&q=80",
    description: "Profnastil, metallocherepitsa va yumshoq tom materiallari bilan har qanday murakkablikdagi tomlarni mustahkam yog'och karkas bilan yopish.",
    skills: ["Tom karkasi", "Metallocherepitsa", "Gidro-bug' izolyatsiya", "Novlar o'rnatish"],
    completedJobs: 185,
    samples: [
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: 8,
    name: "Eldorbek Jo'rayev",
    profession: "Basseyn qurish, Filtrlash & Gidroizolyatsiya",
    category: "basseyn",
    rating: 4.99,
    reviewsCount: 88,
    experience: "11 yil",
    phone: "+998 93 400 12 34",
    city: "Quvasoy shahri",
    lat: 40.3061,
    lng: 71.9722,
    hourlyRate: "1 500 000 so'm / loyiha",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=80",
    cover: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&auto=format&fit=crop&q=80",
    description: "Yopiq va ochiq hovli basseynlari qurilishi. Monolit kosa quyish, qum filtrlari, nasoslar, isitish tizimlari va mozaika bilan qoplash.",
    skills: ["Monolit basseyn kosasi", "Suv filtrlash tizimi", "Gidroizolyatsiya", "Basseyn mozaikasi"],
    completedJobs: 72,
    samples: [
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: 9,
    name: "Shavkatbek Ergashev",
    profession: "Santexnika & Isitish tizimlari (Katyol)",
    category: "santexnika",
    rating: 4.95,
    reviewsCount: 160,
    experience: "12 yil",
    phone: "+998 90 290 66 77",
    city: "Qo'qon shahri",
    lat: 40.5350,
    lng: 70.9300,
    hourlyRate: "90 000 so'm / soat",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80",
    cover: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&auto=format&fit=crop&q=80",
    description: "Issiq pol tizimlari, 2 konturli gazli katyollar o'rnatish, sovuq va issiq suv quvurlarini polipropilen payka qilish.",
    skills: ["Issiq pol montaji", "Katyol o'rnatish", "Quvur paykalash", "Kanalizatsiya montaj"],
    completedJobs: 370,
    samples: [
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: 10,
    name: "Otabek Sobirov",
    profession: "Duradgorlik & Zamonaviy Mebelsoz",
    category: "duradgor",
    rating: 4.90,
    reviewsCount: 105,
    experience: "16 yil",
    phone: "+998 91 190 88 99",
    city: "Toshloq tumani",
    lat: 40.4950,
    lng: 71.8200,
    hourlyRate: "100 000 so'm / soat",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
    cover: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=800&auto=format&fit=crop&q=80",
    description: "Yog'och eshiklar, darvozalar, zinapoyalar, oshxona va yotoqxona garniturlarini maxsus o'lchamda sifatli yasash.",
    skills: ["Yog'och zinalar", "Oshxona mebeli", "Eshik rom montaji", "Restavratsiya"],
    completedJobs: 290,
    samples: [
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1540518614846-7ede433c4ef4?w=600&auto=format&fit=crop&q=80"
    ]
  }
];

// ============================================================================
// 2. DO'KON: FAQAT ASBOB-USKUNALAR RASMLARI (NO HUMAN PHOTOS)
// ============================================================================

const INITIAL_PRODUCTS = [
  {
    id: 101,
    name: "Perforator DeWalt D25144K Heavy-Duty",
    brand: "DeWalt",
    category: "elektr_asboblar",
    price: 1450000,
    oldPrice: 1680000,
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&auto=format&fit=crop&q=80",
    description: "900W quvvatli zarbali perforator, SDS-Plus patron, beton va pishiq g'ishtlarni yengil burg'ilash uchun professional uskunalar to'plami.",
    inStock: true
  },
  {
    id: 102,
    name: "Lazer Uriven 4D 16 Liniyali (Yashil Nur)",
    brand: "Hilda Pro",
    category: "olchov",
    price: 780000,
    oldPrice: 920000,
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&auto=format&fit=crop&q=80",
    description: "360 darajali 16 ta o'ta yorqin yashil liniyalar, pultli boshqaruv shtativi, kafel va devor qurish uchun lazer vositasi.",
    inStock: true
  },
  {
    id: 103,
    name: "Akkumulyatorli Shurupovert Bosch Professional 18V",
    brand: "Bosch",
    category: "elektr_asboblar",
    price: 890000,
    oldPrice: 1050000,
    image: "https://images.unsplash.com/photo-1622288432450-277d0fef5ed6?w=600&auto=format&fit=crop&q=80",
    description: "2 ta litiy batareya, tezkor zaryadlash stansiyasi va kuchli metall reduktorli teshgich-burg'ulagich apparati.",
    inStock: true
  },
  {
    id: 104,
    name: "Invertor Payvandlash Apparati Resanta SAI-250",
    brand: "Resanta",
    category: "payvandlash",
    price: 1350000,
    oldPrice: 1550000,
    image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?w=600&auto=format&fit=crop&q=80",
    description: "250A quvvat, IGBT tranzistorlar bilan barqaror yoy va energiya tejamkorlik. Metall konstruksiyalar va darvoza uchun invertor.",
    inStock: true
  },
  {
    id: 105,
    name: "Professional Kafel Kesgich (Plitkorez 800mm)",
    brand: "Monolit Pro",
    category: "qol_asboblari",
    price: 1100000,
    oldPrice: 1300000,
    image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=600&auto=format&fit=crop&q=80",
    description: "Lazer yo'naltiruvchi podshipnikli plitkorez. Keramogranit va qalin marmar plitalarni bir harakatda silliq kesuvchi mexanizm.",
    inStock: true
  },
  {
    id: 106,
    name: "Burchak Silliqlash Mashinasi Makita (Bolgarka 125mm)",
    brand: "Makita",
    category: "elektr_asboblar",
    price: 650000,
    oldPrice: 750000,
    image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=600&auto=format&fit=crop&q=80",
    description: "125 mm disk diametri, 840W quvvat va changdan himoyalangan mustahkam motorli metall kesish mashinasi.",
    inStock: true
  },
  {
    id: 107,
    name: "Santexnika Trubalarini Paykalash To'plami (Poyalnik)",
    brand: "Candan CM-01",
    category: "santexnika_asbob",
    price: 420000,
    oldPrice: 490000,
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&auto=format&fit=crop&q=80",
    description: "Polipropilen trubalar uchun 1500W quvvatli paykalash uskunasi, 20-25-32-40mm nasadkalari bilan po'lat keysda.",
    inStock: true
  },
  {
    id: 108,
    name: "Alyumin Teleskopik Narvon 4.4 Metr",
    brand: "AluPro",
    category: "qol_asboblari",
    price: 1250000,
    oldPrice: 1450000,
    image: "https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?w=600&auto=format&fit=crop&q=80",
    description: "Aviatsiya alyuminiyidan tayyorlangan ixcham yig'iladigan teleskopik narvon. Tom va balandlikdagi ishlar uchun.",
    inStock: true
  },
  {
    id: 109,
    name: "Professional Ustalar Asboblar Jomadoni (108 qism)",
    brand: "Force Tools",
    category: "qol_asboblari",
    price: 950000,
    oldPrice: 1100000,
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=600&auto=format&fit=crop&q=80",
    description: "Xrom-vanadiy po'latdan ishlangan zarbga chidamli barcha o'lchamdagi golovkalar, treshtotkalar va bitlar to'plami.",
    inStock: true
  },
  {
    id: 110,
    name: "Basseyn va Drenaj Uchun Suv Nasosi (Submersible Pump)",
    brand: "Aquatech Pro",
    category: "santexnika_asbob",
    price: 820000,
    oldPrice: 950000,
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&auto=format&fit=crop&q=80",
    description: "Basseyn suvini aylantirish, filtrlash va chuqur quduqlardan suv chiqarish uchun 1100W suv osti elektr nasosi.",
    inStock: true
  }
];

// ============================================================================
// 3. APPLICATION STATE & PERSISTENCE
// ============================================================================

class AppState {
  constructor() {
    this.theme = localStorage.getItem('usta_theme') || 'dark';
    this.lang = localStorage.getItem('usta_lang') || 'uz';
    this.masters = JSON.parse(localStorage.getItem('usta_masters')) || INITIAL_MASTERS;
    this.products = JSON.parse(localStorage.getItem('usta_products')) || INITIAL_PRODUCTS;
    this.cart = JSON.parse(localStorage.getItem('usta_cart')) || [];
    this.callRequests = JSON.parse(localStorage.getItem('usta_call_requests')) || [
      {
        id: "ANK-101",
        customerName: "Javohir Mamadaliyev",
        phone: "+998 90 123 77 99",
        address: "Farg'ona sh., Al-Farg'oniy ko'chasi 45-uy",
        workType: "Kafel yotqizish",
        masterName: "Islomjon Karimov",
        area: "65 kv.m",
        date: "2026-11-10 14:30",
        status: "Yangi anketa"
      },
      {
        id: "ANK-102",
        customerName: "Olimjon Sobirov",
        phone: "+998 91 334 55 66",
        address: "Qo'qon sh., Turkiston ko'chasi 12",
        workType: "Basseyn qurish",
        masterName: "Eldorbek Jo'rayev",
        area: "8x4 metr",
        date: "2026-11-09 17:15",
        status: "Tasdiqlangan"
      }
    ];
    this.currentUser = JSON.parse(localStorage.getItem('usta_current_user')) || null;
    this.isAdminLoggedIn = sessionStorage.getItem('usta_admin_logged') === 'true';
    this.mapInstance = null;
    this.mapMarkers = [];
    this.activeCategory = 'all';
    this.activeProductCategory = 'all';
    this.searchQuery = '';
    this.selectedMasterForCall = null;
  }

  save() {
    localStorage.setItem('usta_theme', this.theme);
    localStorage.setItem('usta_lang', this.lang);
    localStorage.setItem('usta_masters', JSON.stringify(this.masters));
    localStorage.setItem('usta_products', JSON.stringify(this.products));
    localStorage.setItem('usta_cart', JSON.stringify(this.cart));
    localStorage.setItem('usta_call_requests', JSON.stringify(this.callRequests));
    if (this.currentUser) {
      localStorage.setItem('usta_current_user', JSON.stringify(this.currentUser));
    } else {
      localStorage.removeItem('usta_current_user');
    }
    sessionStorage.setItem('usta_admin_logged', this.isAdminLoggedIn ? 'true' : 'false');
  }
}

const state = new AppState();

function formatSum(num) {
  return new Intl.NumberFormat('uz-UZ').format(num) + " so'm";
}

function showToast(message, type = 'gold') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'custom-toast';
  
  let iconSvg = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d4af37" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>`;
  if (type === 'success') {
    iconSvg = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>`;
  } else if (type === 'error') {
    iconSvg = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`;
  }

  toast.innerHTML = `${iconSvg} <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// ============================================================================
// 4. RENDERING: MASTERS (FARG'ONA VILOYATI & 3-4 NAMUNA RASMLAR)
// ============================================================================

function renderMastersGrid() {
  const container = document.getElementById('masters-cards-grid');
  if (!container) return;

  let filtered = state.masters;

  if (state.activeCategory && state.activeCategory !== 'all') {
    filtered = filtered.filter(m => m.category === state.activeCategory);
  }

  if (state.searchQuery && state.searchQuery.trim() !== '') {
    const q = state.searchQuery.toLowerCase().trim();
    filtered = filtered.filter(m => 
      m.name.toLowerCase().includes(q) ||
      m.profession.toLowerCase().includes(q) ||
      m.city.toLowerCase().includes(q) ||
      m.skills.some(s => s.toLowerCase().includes(q))
    );
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
        <p style="font-size: 1.2rem; font-weight: 700;">Ushbu sohada Farg'ona viloyatida usta topilmadi.</p>
        <p>Boshqa yo'nalishni tanlab ko'ring.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(master => {
    const samplesHtml = (master.samples && master.samples.length > 0)
      ? `
        <div class="master-samples-strip">
          <span class="master-samples-label">Bajarilgan ishlar namunalari:</span>
          <div class="master-samples-grid">
            ${master.samples.map(img => `
              <div class="sample-thumbnail" onclick="window.open('${img}', '_blank')" title="Rasmni ko'rish">
                <img src="${img}" alt="Ish namunasi">
              </div>
            `).join('')}
          </div>
        </div>
      `
      : '';

    return `
      <div class="master-card" data-master-id="${master.id}">
        <div class="master-card-top">
          <img class="master-cover-img" src="${master.cover}" alt="${master.name}">
          <span class="master-status-badge">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/></svg>
            Bo'sh / Qabul qilmoqda
          </span>
          <span class="master-experience-badge">${master.experience}</span>
          <div class="master-avatar-wrap">
            <img class="master-avatar-img" src="${master.avatar}" alt="${master.name}">
          </div>
        </div>
        
        <div class="master-card-body">
          <div class="master-name-row">
            <h3 class="master-name">${master.name}</h3>
            <span class="verified-icon" title="Tasdiqlangan Usta">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#d4af37"><path d="M12 2l2.4 5 5.6.8-4 4 1 5.6-5-2.6-5 2.6 1-5.6-4-4 5.6-.8z"/></svg>
            </span>
          </div>
          
          <div class="master-skill-title">${master.profession}</div>
          
          <div class="master-location-row">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>${master.city}</span>
          </div>

          <!-- 3-4 Sample work photos -->
          ${samplesHtml}

          <div class="master-stats-strip">
            <div>
              <span style="color: var(--text-muted); font-size: 0.72rem; display: block;">Reyting:</span>
              <span style="font-weight: 800; color: #f59e0b;">★ ${master.rating}</span>
              <span style="color: var(--text-muted); font-size: 0.75rem;">(${master.reviewsCount || 50})</span>
            </div>
            <div>
              <span style="color: var(--text-muted); font-size: 0.72rem; display: block;">Narxi:</span>
              <span style="font-weight: 800; color: var(--gold-500); font-size: 0.82rem;">${master.hourlyRate}</span>
            </div>
          </div>

          <div class="master-actions-row">
            <button class="btn-order-master" onclick="openCallMasterModal(${master.id})">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
              Ustani chaqirish (Anketa)
            </button>
            <button class="btn-view-master" onclick="openMasterDetailModal(${master.id})">
              Batafsil
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Master Detail Modal
function openMasterDetailModal(masterId) {
  const master = state.masters.find(m => m.id === masterId);
  if (!master) return;

  const modalBody = document.getElementById('master-detail-modal-body');
  if (!modalBody) return;

  const samplesHtml = (master.samples && master.samples.length > 0)
    ? `
      <h4 style="font-size: 1rem; margin-top: 1.25rem; margin-bottom: 0.5rem;">
        Bajarilgan Ishlar Namunalari:
      </h4>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.75rem; margin-bottom: 1.5rem;">
        ${master.samples.map(img => `
          <div style="height: 110px; border-radius: 12px; overflow: hidden; border: 1px solid var(--border-color); cursor: pointer;" onclick="window.open('${img}', '_blank')">
            <img src="${img}" style="width: 100%; height: 100%; object-fit: cover;">
          </div>
        `).join('')}
      </div>
    `
    : '';

  modalBody.innerHTML = `
    <div style="display: flex; gap: 1.25rem; align-items: center; margin-bottom: 1.25rem;">
      <img src="${master.avatar}" style="width: 80px; height: 80px; border-radius: 20px; object-fit: cover; border: 2.5px solid var(--gold-500);">
      <div>
        <h2 style="font-size: 1.4rem;">${master.name}</h2>
        <p style="color: var(--gold-500); font-weight: 700;">${master.profession}</p>
        <p style="color: var(--text-muted); font-size: 0.85rem;">${master.city}</p>
      </div>
    </div>

    <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1.25rem; line-height: 1.6;">
      ${master.description}
    </p>

    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.75rem; background: var(--bg-input); padding: 1rem; border-radius: 14px; margin-bottom: 1.25rem; text-align: center;">
      <div>
        <span style="font-size: 0.75rem; color: var(--text-muted); display: block;">Tajribasi</span>
        <strong style="color: var(--gold-500); font-size: 1rem;">${master.experience}</strong>
      </div>
      <div>
        <span style="font-size: 0.75rem; color: var(--text-muted); display: block;">Bajarilgan ishlar</span>
        <strong style="color: var(--gold-500); font-size: 1rem;">${master.completedJobs}+ ta</strong>
      </div>
      <div>
        <span style="font-size: 0.75rem; color: var(--text-muted); display: block;">Xizmat narxi</span>
        <strong style="color: var(--gold-500); font-size: 0.9rem;">${master.hourlyRate}</strong>
      </div>
    </div>

    ${samplesHtml}

    <div style="display: flex; gap: 0.75rem;">
      <button class="gold-button" style="flex: 1.5;" onclick="closeModal('master-detail-modal'); openCallMasterModal(${master.id});">
        Ustani Chaqirish (Anketani To'ldirish)
      </button>
      <a href="tel:${master.phone.replace(/\s+/g, '')}" class="gold-button-outline" style="flex: 1;">
        Telefon Qilish
      </a>
    </div>
  `;

  openModal('master-detail-modal');
}

// ============================================================================
// 5. USTONI CHAQIRISH ANKETASI (CALL MASTER ORDER FORM)
// ============================================================================

function openCallMasterModal(masterId) {
  const master = state.masters.find(m => m.id === masterId);
  if (!master) return;

  state.selectedMasterForCall = master;

  const titleEl = document.getElementById('anketa-master-title');
  const masterInput = document.getElementById('anketa-target-master');
  
  if (titleEl) {
    titleEl.textContent = `Usta: ${master.name} (${master.profession} - ${master.city})`;
  }
  if (masterInput) {
    masterInput.value = `${master.name} (${master.profession})`;
  }

  // Pre-fill if current user is logged in
  if (state.currentUser) {
    const nameInp = document.getElementById('anketa-client-name');
    const phoneInp = document.getElementById('anketa-client-phone');
    if (nameInp && !nameInp.value) nameInp.value = state.currentUser.name;
    if (phoneInp && !phoneInp.value) phoneInp.value = state.currentUser.phone || '';
  }

  openModal('anketa-call-modal');
}

function handleAnketaSubmit(e) {
  e.preventDefault();
  
  const clientName = document.getElementById('anketa-client-name')?.value.trim();
  const clientPhone = document.getElementById('anketa-client-phone')?.value.trim();
  const address = document.getElementById('anketa-client-address')?.value.trim();
  const workType = document.getElementById('anketa-work-type')?.value;
  const area = document.getElementById('anketa-work-area')?.value.trim() || 'Kelishiladi';
  const notes = document.getElementById('anketa-client-notes')?.value.trim() || '';

  if (!clientName || !clientPhone || !address) {
    showToast("Iltimos, ismingiz, telefoningiz va istiqomat joyingizni to'liq kiriting!", "error");
    return;
  }

  const anketaId = "ANK-" + Math.floor(100 + Math.random() * 900);
  const masterName = state.selectedMasterForCall ? state.selectedMasterForCall.name : "Umumiy buyurtma";

  const newRequest = {
    id: anketaId,
    customerName: clientName,
    phone: clientPhone,
    address: address,
    workType: workType,
    masterName: masterName,
    area: area,
    notes: notes,
    date: new Date().toISOString().replace('T', ' ').substring(0, 16),
    status: "Yangi anketa"
  };

  state.callRequests.unshift(newRequest);
  state.save();

  closeModal('anketa-call-modal');
  e.target.reset();

  showToast(`Anketa qabul qilindi! ${masterName} tez orada ${clientPhone} raqamiga aloqaga chiqadi.`, "success");
  
  if (state.isAdminLoggedIn) {
    renderAdminCallRequests();
  }
}

// ============================================================================
// 6. FARG'ONA VILOYATI JONLI INTERAKTIV XARITASI (FERGANA VALLEY MAP)
// ============================================================================

function initMastersMap() {
  const mapElement = document.getElementById('masters-interactive-map');
  if (!mapElement) return;

  // Farg'ona Viloyati Markaziy Koordinatalari
  const ferganaCenter = [40.3842, 71.7843];

  if (typeof L === 'undefined') {
    mapElement.innerHTML = `
      <div style="height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; background: #0c0f14; color: white; padding: 2rem; text-align: center;">
        <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem; color: var(--gold-500);">Farg'ona Viloyati Xaritasi Faol</h3>
        <p style="color: #94a3b8; max-width: 500px; margin-bottom: 1.5rem;">Farg'ona, Qo'qon, Marg'ilon, Rishton, Quva va Oltiariq bo'ylab barcha ustalar ro'yxati.</p>
      </div>
    `;
    return;
  }

  try {
    state.mapInstance = L.map('masters-interactive-map', {
      center: ferganaCenter,
      zoom: 10,
      scrollWheelZoom: false
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap | Farg\'ona Viloyati Ustalari',
      maxZoom: 18
    }).addTo(state.mapInstance);

    const goldPinHtml = `
      <div class="gold-map-marker">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0b0d11" stroke-width="2.5"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
      </div>
    `;

    const customMarkerIcon = L.divIcon({
      className: 'custom-gold-pin-wrapper',
      html: goldPinHtml,
      iconSize: [44, 44],
      iconAnchor: [22, 44],
      popupAnchor: [0, -42]
    });

    state.mapMarkers = state.masters.map(master => {
      const marker = L.marker([master.lat, master.lng], { icon: customMarkerIcon }).addTo(state.mapInstance);

      const popupContent = `
        <div style="padding: 1rem; min-width: 230px;">
          <h4 style="font-weight: 800; font-size: 1rem; margin-bottom: 0.2rem; color: var(--text-main);">${master.name}</h4>
          <p style="color: var(--gold-500); font-weight: 700; font-size: 0.82rem; margin-bottom: 0.4rem;">${master.profession}</p>
          <p style="color: var(--text-muted); font-size: 0.8rem; margin-bottom: 0.6rem;">${master.city}</p>
          <div style="font-size: 0.82rem; font-weight: 800; margin-bottom: 0.6rem;">${master.hourlyRate}</div>
          <button onclick="openCallMasterModal(${master.id})" style="width: 100%; background: var(--gold-gradient); color: #0b0d11; font-weight: 800; font-size: 0.8rem; padding: 0.5rem; border-radius: 8px; border: none; cursor: pointer;">
            Ustani chaqirish (Anketa)
          </button>
        </div>
      `;

      marker.bindPopup(popupContent);
      return marker;
    });

  } catch (err) {
    console.error("Fergana map init failed: ", err);
  }
}

// ============================================================================
// 7. DO'KON: FAQAT ASBOB-USKUNALAR & SAVATCHA
// ============================================================================

function renderStoreGrid() {
  const container = document.getElementById('store-products-grid');
  if (!container) return;

  let filtered = state.products;

  if (state.activeProductCategory && state.activeProductCategory !== 'all') {
    filtered = filtered.filter(p => p.category === state.activeProductCategory);
  }

  container.innerHTML = filtered.map(product => `
    <div class="product-card" data-product-id="${product.id}">
      <div class="product-img-wrap">
        <img class="product-img" src="${product.image}" alt="${product.name}">
        <span class="product-brand-tag">${product.brand}</span>
        ${product.oldPrice ? `<span class="product-badge-discount">-${Math.round((1 - product.price/product.oldPrice)*100)}%</span>` : ''}
      </div>
      <div class="product-body">
        <span class="product-category">${product.category.replace('_', ' ')}</span>
        <h4 class="product-title">${product.name}</h4>
        <p class="product-desc">${product.description}</p>
        <div class="product-bottom-row">
          <div class="product-price-box">
            ${product.oldPrice ? `<span class="product-old-price">${formatSum(product.oldPrice)}</span>` : ''}
            <span class="product-current-price">${formatSum(product.price)}</span>
          </div>
          <button class="gold-button" style="padding: 0.65rem 1rem; font-size: 0.85rem;" onclick="addToCart(${product.id})">
            Savatchaga
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function addToCart(productId) {
  const product = state.products.find(p => p.id === productId);
  if (!product) return;

  const existingItem = state.cart.find(item => item.productId === productId);
  if (existingItem) {
    existingItem.qty += 1;
  } else {
    state.cart.push({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      qty: 1
    });
  }

  state.save();
  renderCart();
  showToast(`"${product.name}" savatchaga qo'shildi!`, 'success');
}

function updateCartQty(productId, delta) {
  const item = state.cart.find(i => i.productId === productId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    state.cart = state.cart.filter(i => i.productId !== productId);
  }

  state.save();
  renderCart();
}

function removeFromCart(productId) {
  state.cart = state.cart.filter(i => i.productId !== productId);
  state.save();
  renderCart();
  showToast("Asbob savatchadan olib tashlandi.", "gold");
}

function renderCart() {
  const badge = document.getElementById('header-cart-badge');
  const itemsContainer = document.getElementById('cart-drawer-items');
  const totalAmountEl = document.getElementById('cart-total-amount');
  const checkoutBtn = document.getElementById('btn-cart-checkout');

  const totalQty = state.cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  if (badge) {
    badge.textContent = totalQty;
    badge.style.display = totalQty > 0 ? 'flex' : 'none';
  }

  if (totalAmountEl) {
    totalAmountEl.textContent = formatSum(totalPrice);
  }

  if (checkoutBtn) {
    checkoutBtn.disabled = state.cart.length === 0;
    checkoutBtn.style.opacity = state.cart.length === 0 ? '0.5' : '1';
  }

  if (!itemsContainer) return;

  if (state.cart.length === 0) {
    itemsContainer.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
        <p style="font-weight: 700; font-size: 1.05rem;">Savatchangiz bo'sh.</p>
        <p style="font-size: 0.85rem;">Do'kondan asboblarni tanlang.</p>
      </div>
    `;
    return;
  }

  itemsContainer.innerHTML = state.cart.map(item => `
    <div class="cart-item-card">
      <img class="cart-item-img" src="${item.image}" alt="${item.name}">
      <div class="cart-item-info">
        <h5 class="cart-item-title">${item.name}</h5>
        <div class="cart-item-price">${formatSum(item.price)}</div>
        <div class="cart-item-qty-row">
          <button class="qty-btn" onclick="updateCartQty(${item.productId}, -1)">-</button>
          <span class="qty-count">${item.qty}</span>
          <button class="qty-btn" onclick="updateCartQty(${item.productId}, 1)">+</button>
        </div>
      </div>
      <button class="btn-remove-cart" onclick="removeFromCart(${item.productId})">
        ✕
      </button>
    </div>
  `).join('');
}

function openCartDrawer() {
  document.getElementById('cart-drawer-overlay')?.classList.add('active');
  document.getElementById('cart-drawer')?.classList.add('active');
}

function closeCartDrawer() {
  document.getElementById('cart-drawer-overlay')?.classList.remove('active');
  document.getElementById('cart-drawer')?.classList.remove('active');
}

function handleCheckoutSubmit(e) {
  e.preventDefault();
  if (state.cart.length === 0) return;

  const name = document.getElementById('checkout-name')?.value.trim();
  const phone = document.getElementById('checkout-phone')?.value.trim();
  const address = document.getElementById('checkout-address')?.value.trim();

  if (!name || !phone || !address) {
    showToast("Iltimos, barcha maydonlarni to'ldiring!", "error");
    return;
  }

  const orderId = "BUY-" + Math.floor(1000 + Math.random() * 9000);
  state.cart = [];
  state.save();

  closeModal('checkout-modal');
  closeCartDrawer();
  renderCart();

  showToast(`Buyurtma qabul qilindi! Buyurtma ID: ${orderId}`, "success");
}

// ============================================================================
// 8. RO'YXATDAN O'TISH: MIJOZ VA USTA BO'LIB
// ============================================================================

function handleClientRegister(e) {
  e.preventDefault();
  const name = document.getElementById('reg-client-name')?.value.trim();
  const phone = document.getElementById('reg-client-phone')?.value.trim();
  const city = document.getElementById('reg-client-city')?.value.trim();

  if (!name || !phone) {
    showToast("Ismingiz va telefoningizni kiriting!", "error");
    return;
  }

  state.currentUser = {
    role: "client",
    name: name,
    phone: phone,
    city: city || "Farg'ona",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100"
  };

  state.save();
  updateUserInterfaceProfile();
  closeModal('client-register-modal');
  showToast(`Xush kelibsiz, ${name}! Siz mijoz sifatida kirdingiz.`, "success");
}

function handleMasterRegister(e) {
  e.preventDefault();
  const name = document.getElementById('reg-master-name')?.value.trim();
  const profession = document.getElementById('reg-master-prof')?.value.trim();
  const category = document.getElementById('reg-master-category')?.value;
  const phone = document.getElementById('reg-master-phone')?.value.trim();
  const city = document.getElementById('reg-master-city')?.value.trim();
  const experience = document.getElementById('reg-master-exp')?.value.trim() || '3 yil';
  const hourlyRate = document.getElementById('reg-master-rate')?.value.trim() || '80 000 so\'m / soat';

  if (!name || !profession || !phone || !city) {
    showToast("Iltimos, barcha majburiy maydonlarni to'ldiring!", "error");
    return;
  }

  const newMaster = {
    id: Date.now(),
    name,
    profession,
    category,
    rating: 5.0,
    reviewsCount: 1,
    experience,
    phone,
    city: city + " (Yangi)",
    lat: 40.3842 + (Math.random() - 0.5) * 0.1,
    lng: 71.7843 + (Math.random() - 0.5) * 0.1,
    hourlyRate,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
    cover: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?w=800&auto=format&fit=crop&q=80",
    description: "Farg'ona viloyati bo'yicha sifatli usta xizmatlari.",
    skills: [profession, "Sifatli ijro"],
    completedJobs: 1,
    samples: [
      "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=600&auto=format&fit=crop&q=80"
    ]
  };

  state.masters.unshift(newMaster);
  state.currentUser = {
    role: "master",
    name: name,
    phone: phone,
    profession: profession
  };

  state.save();
  updateUserInterfaceProfile();
  renderMastersGrid();
  closeModal('master-register-modal');
  showToast(`Tabriklaymiz, ${name}! Siz usta sifatida ro'yxatdan o'tdingiz va profilingiz e'lon qilindi!`, "success");
}

function updateUserInterfaceProfile() {
  const loginBtn = document.getElementById('btn-header-login');
  const profNameEl = document.getElementById('profile-user-name');
  
  if (state.currentUser) {
    if (loginBtn) {
      loginBtn.innerHTML = `
        <span style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; background: #10b981;"></span>
        <span style="font-weight: 800;">${state.currentUser.name.split(' ')[0]} (${state.currentUser.role === 'master' ? 'Usta' : 'Mijoz'})</span>
      `;
      loginBtn.onclick = () => openModal('user-profile-modal');
    }
    if (profNameEl) {
      profNameEl.textContent = `${state.currentUser.name} (${state.currentUser.role === 'master' ? 'Usta' : 'Mijoz'})`;
    }
  } else {
    if (loginBtn) {
      loginBtn.innerHTML = `
        <span>Kirish / Ro'yxatdan o'tish</span>
      `;
      loginBtn.onclick = () => openModal('auth-choice-modal');
    }
    if (profNameEl) {
      profNameEl.textContent = "Foydalanuvchi";
    }
  }
}

function resetAllData() {
  if (!confirm("Barcha saqlangan ma'lumotlar asl holatiga qaytarilsinmi?")) return;
  localStorage.clear();
  location.reload();
}

function handleUserLogout() {
  state.currentUser = null;
  state.save();
  updateUserInterfaceProfile();
  closeModal('user-profile-modal');
  showToast("Tizimdan chiqildi.", "gold");
}

// ============================================================================
// 9. DISTINCT CYBER-GOLD ADMIN CONSOLE (ABDUNOZIM / 2011 2011)
// (Only one person has the password)
// ============================================================================

function checkAdminAuth(username, password) {
  if (!username || !password) return false;
  
  const validUser = username.trim().toUpperCase() === "ABDUNOZIM";
  const cleanPass = password.toString().trim().replace(/[\s\-_]+/g, '');
  const rawPass = password.toString().trim();
  const validPass = cleanPass === "20112011" || rawPass === "2011 2011";

  return validUser && validPass;
}

function handleAdminTerminalLogin(e) {
  e.preventDefault();
  const userInput = document.getElementById('admin-term-user')?.value;
  const passInput = document.getElementById('admin-term-pass')?.value;

  if (checkAdminAuth(userInput, passInput)) {
    state.isAdminLoggedIn = true;
    state.save();
    closeModal('admin-login-modal');
    showToast("Administrator Abdunozim tasdiqlandi. Konsol ochilmoqda...", "success");
    openAdminConsole();
  } else {
    showToast("Ruxsat berilmadi! Ushbu panel paroli faqat 1 ta shaxsda mavjud.", "error");
  }
}

function openAdminConsole() {
  const consoleEl = document.getElementById('admin-command-console');
  if (!consoleEl) return;

  consoleEl.classList.add('active');
  renderAdminCallRequests();
  renderAdminProductsTable();
  renderAdminMastersTable();
  consoleEl.scrollIntoView({ behavior: 'smooth' });
}

function handleAdminConsoleLogout() {
  state.isAdminLoggedIn = false;
  state.save();
  document.getElementById('admin-command-console')?.classList.remove('active');
  showToast("Admin konsolidan chiqildi.", "gold");
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderAdminCallRequests() {
  const tbody = document.getElementById('admin-requests-table-body');
  if (!tbody) return;

  if (state.callRequests.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: var(--text-muted); padding: 2rem;">Chaqiruv anketalari mavjud emas.</td></tr>`;
    return;
  }

  tbody.innerHTML = state.callRequests.map(req => `
    <tr>
      <td><strong style="color: var(--gold-500);">${req.id}</strong></td>
      <td><strong>${req.customerName}</strong></td>
      <td><a href="tel:${req.phone}" style="color: #fff; font-weight: 700;">${req.phone}</a></td>
      <td>${req.address}</td>
      <td><span class="gold-badge">${req.workType}</span></td>
      <td>${req.masterName}</td>
      <td>
        <button onclick="toggleAnketaStatus('${req.id}')" style="background: rgba(212,175,55,0.15); border: 1px solid var(--gold-500); color: #ffd700; padding: 0.35rem 0.75rem; border-radius: 8px; font-size: 0.78rem; cursor: pointer;">
          ${req.status} 🔄
        </button>
      </td>
    </tr>
  `).join('');
}

function toggleAnketaStatus(reqId) {
  const req = state.callRequests.find(r => r.id === reqId);
  if (!req) return;

  req.status = req.status === "Yangi anketa" ? "Tasdiqlangan" : "Yangi anketa";
  state.save();
  renderAdminCallRequests();
  showToast(`${reqId} anketasi holati yangilandi.`, "success");
}

function renderAdminProductsTable() {
  const tbody = document.getElementById('admin-products-table-body');
  if (!tbody) return;

  tbody.innerHTML = state.products.map(prod => `
    <tr>
      <td><img src="${prod.image}" style="width: 44px; height: 44px; border-radius: 8px; object-fit: cover;"></td>
      <td><strong>${prod.name}</strong></td>
      <td>${prod.brand}</td>
      <td><span class="gold-badge">${prod.category}</span></td>
      <td><strong>${formatSum(prod.price)}</strong></td>
      <td>
        <button onclick="deleteProduct(${prod.id})" style="background: rgba(239, 68, 68, 0.15); border: 1px solid #ef4444; color: #ef4444; padding: 0.35rem 0.7rem; border-radius: 8px; font-size: 0.8rem; cursor: pointer;">
          O'chirish
        </button>
      </td>
    </tr>
  `).join('');
}

function deleteProduct(prodId) {
  if (!confirm("Ushbu asbobni o'chirmoqchimisiz?")) return;
  state.products = state.products.filter(p => p.id !== prodId);
  state.save();
  renderStoreGrid();
  renderAdminProductsTable();
  showToast("Asbob o'chirildi.", "gold");
}

function handleAddProduct(e) {
  e.preventDefault();
  const name = document.getElementById('add-prod-name')?.value.trim();
  const brand = document.getElementById('add-prod-brand')?.value.trim() || 'UstaPro';
  const category = document.getElementById('add-prod-category')?.value;
  const price = parseInt(document.getElementById('add-prod-price')?.value) || 0;
  const oldPrice = parseInt(document.getElementById('add-prod-old-price')?.value) || 0;
  let image = document.getElementById('add-prod-image')?.value.trim();
  const description = document.getElementById('add-prod-desc')?.value.trim();

  if (!name || price <= 0) {
    showToast("Tovar nomi va narxini to'g'ri kiriting!", "error");
    return;
  }

  if (!image) {
    image = "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&auto=format&fit=crop&q=80";
  }

  const newProd = {
    id: Date.now(),
    name,
    brand,
    category,
    price,
    oldPrice: oldPrice > price ? oldPrice : null,
    image,
    description: description || "Professional qurilish asbobi.",
    inStock: true
  };

  state.products.unshift(newProd);
  state.save();

  e.target.reset();
  renderStoreGrid();
  renderAdminProductsTable();
  showToast(`Yangi asbob "${name}" do'konga qo'shildi!`, "success");
}

function renderAdminMastersTable() {
  const tbody = document.getElementById('admin-masters-table-body');
  if (!tbody) return;

  tbody.innerHTML = state.masters.map(master => `
    <tr>
      <td><img src="${master.avatar}" style="width: 44px; height: 44px; border-radius: 10px; object-fit: cover;"></td>
      <td><strong>${master.name}</strong></td>
      <td>${master.profession}</td>
      <td>${master.city}</td>
      <td><a href="tel:${master.phone}" style="color: var(--gold-500); font-weight: 700;">${master.phone}</a></td>
      <td><strong>${master.hourlyRate}</strong></td>
      <td>
        <button onclick="deleteMaster(${master.id})" style="background: rgba(239, 68, 68, 0.15); border: 1px solid #ef4444; color: #ef4444; padding: 0.35rem 0.7rem; border-radius: 8px; font-size: 0.8rem; cursor: pointer;">
          O'chirish
        </button>
      </td>
    </tr>
  `).join('');
}

function deleteMaster(masterId) {
  if (!confirm("Ushbu ustani ro'yxatdan o'chirmoqchimisiz?")) return;
  state.masters = state.masters.filter(m => m.id !== masterId);
  state.save();
  renderMastersGrid();
  renderAdminMastersTable();
  showToast("Usta ro'yxatdan o'chirildi.", "gold");
}

const TOOL_PRESETS = [
  { name: "DeWalt D25144K Og'ir Perforator 900W", brand: "DeWalt", cat: "elektr_asboblar", price: 1650000, oldPrice: 1950000, img: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&auto=format&fit=crop&q=80", desc: "Beton va toshlarni teshish uchun og'ir sanoat perforatori SDS-Plus patron bilan." },
  { name: "Lazer Uriven 4D 16 Liniyali Yashil Nur", brand: "Hilda 4D", cat: "olchov", price: 680000, oldPrice: 820000, img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&auto=format&fit=crop&q=80", desc: "Kafel yotqizish va devor tekislash uchun 360 gradus yashil nurli lazer uriven." },
  { name: "Bosch GSB 18V Shurupovert & Drel", brand: "Bosch Professional", cat: "elektr_asboblar", price: 1350000, oldPrice: 1550000, img: "https://images.unsplash.com/photo-1622288432450-277d0fef5ed6?w=600&auto=format&fit=crop&q=80", desc: "Ikki akkumulyatorli zarbali drel-shurupovert 18V 4.0Ah." },
  { name: "Resanta SAI-220 Payvandlash Apparati Inverter", brand: "Resanta", cat: "payvandlash", price: 1100000, oldPrice: 1300000, img: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?w=600&auto=format&fit=crop&q=80", desc: "IGBT texnologiyali kuchli payvandlash apparati 220A." },
  { name: "Monolit Plitkorez 1200 mm Rulmanli", brand: "Monolit Pro", cat: "qol_asboblari", price: 1450000, oldPrice: 1700000, img: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=600&auto=format&fit=crop&q=80", desc: "Katta o'lchamdagi 120 sm gacha kafel va keramogranitlarni tekis kesuvchi stanok." },
  { name: "Makita GA5030R Bolgarka 125 mm", brand: "Makita", cat: "elektr_asboblar", price: 790000, oldPrice: 920000, img: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=600&auto=format&fit=crop&q=80", desc: "Ixcham va kuchli burchakli silliqlash mashinasi (ushm)." }
];

function applyToolPreset(idx) {
  const p = TOOL_PRESETS[idx];
  if (!p) return;
  const nameEl = document.getElementById('add-prod-name');
  const brandEl = document.getElementById('add-prod-brand');
  const catEl = document.getElementById('add-prod-category');
  const priceEl = document.getElementById('add-prod-price');
  const oldPriceEl = document.getElementById('add-prod-old-price');
  const imgEl = document.getElementById('add-prod-image');
  const descEl = document.getElementById('add-prod-desc');

  if (nameEl) nameEl.value = p.name;
  if (brandEl) brandEl.value = p.brand;
  if (catEl) catEl.value = p.cat;
  if (priceEl) priceEl.value = p.price;
  if (oldPriceEl) oldPriceEl.value = p.oldPrice;
  if (imgEl) imgEl.value = p.img;
  if (descEl) descEl.value = p.desc;

  showToast(`"${p.name}" ma'lumotlari shaklga kiritildi!`, 'gold');
}

function quickFillAdminCredentials() {
  const userInp = document.getElementById('admin-term-user');
  const passInp = document.getElementById('admin-term-pass');
  if (userInp) userInp.value = "ABDUNOZIM";
  if (passInp) passInp.value = "2011 2011";
  showToast("Admin ma'lumotlari kiritildi!", "gold");
}

function toggleAdminPassVisibility() {
  const passInp = document.getElementById('admin-term-pass');
  if (!passInp) return;
  passInp.type = passInp.type === 'password' ? 'text' : 'password';
}

// ============================================================================
// 10. MODAL UTILITIES & EVENT LISTENERS
// ============================================================================

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.add('active');
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove('active');
}

function applyTheme(theme) {
  state.theme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  const toggleBtn = document.getElementById('theme-toggle-btn');
  if (toggleBtn) {
    toggleBtn.innerHTML = theme === 'dark' 
      ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`
      : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  }
  state.save();
}

document.addEventListener('DOMContentLoaded', () => {
  applyTheme(state.theme);
  renderMastersGrid();
  renderStoreGrid();
  renderCart();
  updateUserInterfaceProfile();

  setTimeout(() => {
    initMastersMap();
  }, 350);

  // Category filter pills for Masters
  document.querySelectorAll('.master-cat-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.master-cat-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      state.activeCategory = pill.getAttribute('data-cat');
      renderMastersGrid();
    });
  });

  // Category filter pills for Store
  document.querySelectorAll('.prod-cat-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.prod-cat-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      state.activeProductCategory = pill.getAttribute('data-cat');
      renderStoreGrid();
    });
  });

  // Search inputs
  document.getElementById('header-search-input')?.addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    renderMastersGrid();
  });
  document.getElementById('hero-search-input')?.addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    renderMastersGrid();
  });

  // Theme toggle
  document.getElementById('theme-toggle-btn')?.addEventListener('click', () => {
    applyTheme(state.theme === 'dark' ? 'light' : 'dark');
  });

  // Forms
  document.getElementById('anketa-call-form')?.addEventListener('submit', handleAnketaSubmit);
  document.getElementById('client-register-form')?.addEventListener('submit', handleClientRegister);
  document.getElementById('master-register-form')?.addEventListener('submit', handleMasterRegister);
  document.getElementById('checkout-form')?.addEventListener('submit', handleCheckoutSubmit);
  document.getElementById('admin-terminal-form')?.addEventListener('submit', handleAdminTerminalLogin);
  document.getElementById('add-product-form')?.addEventListener('submit', handleAddProduct);

  // Close modals on background click
  document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) backdrop.classList.remove('active');
    });
  });

  if (state.isAdminLoggedIn) {
    document.getElementById('admin-command-console')?.classList.add('active');
    renderAdminCallRequests();
  }
});
