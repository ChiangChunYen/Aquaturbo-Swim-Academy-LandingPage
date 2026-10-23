import type { Dictionary } from "./en";

export const zhTW = {
  meta: {
    title: "Aquaturbo Swim Academy",
    description: "Aquaturbo Swim Academy",
  },
  language: {
    switchTo: "切換為英文",
    zh: "中",
    en: "EN",
  },
  theme: {
    dark: "深色",
    light: "淺色",
    toggle: "切換主題",
  },
  nav: {
    brand: "Aquaturbo",
    routes: [
      { href: "#hero", label: "關於我們" },
      { href: "#program", label: "課程" },
      { href: "#services", label: "教學特色" },
      { href: "#campus", label: "校區" },
      { href: "#contact", label: "聯絡" },
    ],
    auth: "登錄 / 註冊",
  },
  hero: {
    badge: "全新",
    badgeText: "新季度課程已推出",
    titleBefore: "關於我們",
    titleAccent: "",
    titleAfter: "",
    subtitle:
      "Aquaturbo Swim Academy 由 Luke Huang 教練於 2023 年在溫哥華創立，秉持專業、高效、安全、有趣的教學理念，幫助學員掌握游泳技能，並成功培養多位學員進入當地競技游泳俱樂部。\n\n憑藉優質教學與良好口碑，於 2026 年拓展第二家Richmond 分校。",
    getStarted: "立即參加",
    contact: "立即報名",
    imageAlt: "儀表板",
  },
  aboutHero: {
    kicker: "",
    title: "WINTER REGISTRATION NOW OPEN",
    tagline: "有效地學，進步得更快",
  },
  sponsors: {
    title: "白金贊助夥伴",
  },
  benefits: {
    eyebrow: "專業培訓",
    title: "ATS 教學體系",
    description:
      "Aquaturbo Teaching System（ATS） 由總教練 Luke Huang 研發，融合多年競技游泳背景與豐富教學經驗，以安全、高效、系統化為核心，幫助學員循序漸進地掌握專業游泳技能。\n\nATS 全面應用於各校區，確保一致且高品質的教學體驗。",
    items: [
      {
        icon: "Blocks",
        title: "安全水感建立",
        description:
          "從呼吸、漂浮與水中平衡開始，建立安心下水與持續學習的基礎。",
      },
      {
        icon: "LineChart",
        title: "分齡分級教學",
        description:
          "依年齡與能力安排合適班級，讓每次練習都符合學員的學習節奏。",
      },
      {
        icon: "Wallet",
        title: "專業教練指導",
        description: "透過清楚示範與即時修正，逐步改善泳姿、效率、速度與耐力。",
      },
      {
        icon: "Sparkle",
        title: "清晰成長路徑",
        description: "以階段目標追蹤學習成果，從入門技能穩定銜接到進階訓練。",
      },
    ],
  },
  program: {
    eyebrow: "游泳課程",
    title: "課程介紹",
    description:
      "四大課程依年齡、能力與目標設計，從興趣啟蒙到專項提升，讓每位學員都能穩定進步。",
    items: [
      {
        icon: "TabletSmartphone",
        image: "/child_class.png",
        title: "兒童游泳課程",
        description:
          "在安全、有趣的環境中建立水中自信，循序漸進地掌握專業游泳技巧。",
      },
      {
        icon: "BadgeCheck",
        image: "/competitive_class.png",
        title: "競技游泳訓練",
        description:
          "針對不同競技程度的選手，提供專項技術指導與系統化訓練，提升競技表現。",
      },
      {
        icon: "Goal",
        image: "/adult_class.png",
        title: "成人游泳課程",
        description:
          "不論年齡與程度，透過系統化教學，輕鬆建立水中自信並掌握游泳技能。",
      },
      {
        icon: "PictureInPicture",
        image: "/old_class.png",
        title: "水中體適能",
        description:
          "無須游泳基礎，跟隨輕快音樂享受低衝擊水中運動，提升體能與身體靈活度。",
      },
    ],
  },
  services: {
    eyebrow: "教學特色",
    title: "更專業、更專注的學習體驗",
    description:
      "結合系統化課程、專業教練、小班指導與多語教學，讓每位學員都能清楚理解、充分練習並穩定進步。",
    items: [
      {
        title: "系統化的教學體系",
        description:
          "依照學員程度與目標規劃清晰的學習路徑，從基礎水感到泳姿進階循序訓練，穩定累積游泳能力。",
      },
      {
        title: "專業競技背景教練團隊",
        description:
          "教練具備專業訓練與競技經驗，能精準示範、觀察並修正動作，協助學員建立正確且有效率的游泳技術。",
      },
      {
        title: "小班制教學",
        description:
          "控制每班人數，提升實際練習密度與個別指導時間，讓教練能充分掌握每位學員的學習進度。",
      },
      {
        title: "多元語言教學",
        description:
          "多數教練支援英語、普通話及粵語教學，讓學員能以熟悉的語言理解動作要領與安全指示。",
      },
    ],
  },
  testimonials: {
    eyebrow: "評價",
    title: "聽聽 1000 多位客戶怎麼說",
    items: [
      {
        name: "John Doe",
        userName: "產品經理",
        comment:
          "Next.js 搭配 Shadcn 真的很好用。顏色、字體和圖片都能改成符合我們品牌。",
        rating: 5.0,
      },
      {
        name: "Sophia Collins",
        userName: "資安分析師",
        comment: "版面乾淨，區塊也好調整。比起從零開始，建置時間少非常多。",
        rating: 4.8,
      },
      {
        name: "Adam Johnson",
        userName: "技術長",
        comment:
          "深色模式、表單和價格方案都已經備好。我們把時間花在內容，而不是骨架。",
        rating: 4.9,
      },
      {
        name: "Ethan Parker",
        userName: "資料科學家",
        comment: "元件結構很好懂。當天就能換成自己的文案，推出第一版。",
        rating: 5.0,
      },
      {
        name: "Ava Mitchell",
        userName: "IT 專案經理",
        comment: "利害關係人一看就懂。我們直接拿它當正式產品網站的工作原型。",
        rating: 5.0,
      },
      {
        name: "Isabella Reed",
        userName: "DevOps 工程師",
        comment: "部署順暢，後續也好維護。很適合當行銷網站的起點。",
        rating: 4.9,
      },
    ],
  },
  team: {
    eyebrow: "團隊",
    title: "專業教練團隊，陪伴每一次進步",
    description:
      "Aquaturbo 由具備專業訓練與競技經驗的教練共同授課。我們重視安全、正確技術與個別學習節奏，透過清楚示範、細緻觀察與即時調整，陪伴每位學員建立水中自信並持續進步。",
  },
  campus: {
    eyebrow: "校區",
    title: "我們的校區",
    items: [
      {
        image: "/campus1.png",
        imageAlt: "Aquaturbo Vancouver Shaughnessy 校區",
        title: "Vancouver Shaughnessy",
        description: "",
      },
      {
        image: "/campus2.jpg",
        imageAlt: "Aquaturbo Richmond Lansdowne 校區",
        title: "Richmond Lansdowne",
        description: "Unit 120, 8280 Lansdowne Rd",
      },
    ],
  },
  community: {
    titleBefore: "準備好加入這個",
    titleAccent: "社群了嗎？",
    description:
      "加入我們的 Discord。認識同樣在這個技術棧上打造產品的人，一起交流與成長。",
    join: "加入 Discord",
  },
  pricing: {
    eyebrow: "價格",
    title: "取得完整使用權限",
    description: "依照團隊規模與支援需求選擇方案。",
    perMonth: "/月",
    plans: [
      {
        title: "免費",
        popular: false,
        price: 0,
        description: "先試用核心功能，確認這套模板適不適合你的上線計畫。",
        buttonText: "開始免費試用",
        benefitList: [
          "1 位團隊成員",
          "1 GB 儲存空間",
          "最多 2 個頁面",
          "社群支援",
          "AI 協助",
        ],
      },
      {
        title: "進階",
        popular: true,
        price: 45,
        description: "更多頁面、更多席次，需要協助時回覆更快。",
        buttonText: "立即開始",
        benefitList: [
          "4 位團隊成員",
          "8 GB 儲存空間",
          "最多 6 個頁面",
          "優先支援",
          "AI 協助",
        ],
      },
      {
        title: "企業",
        popular: false,
        price: 120,
        description: "給需要一起上線的大型團隊，容量與支援都更完整。",
        buttonText: "聯絡我們",
        benefitList: [
          "10 位團隊成員",
          "20 GB 儲存空間",
          "最多 10 個頁面",
          "電話與電子郵件支援",
          "AI 協助",
        ],
      },
    ],
  },
  contact: {
    eyebrow: "聯絡",
    title: "聯絡我們",
    description: "歡迎聯繫我們，我們將給予最高的服務",
    findUs: "來訪地址",
    address: "Unit120-8280 Lansdowne rd, Richmond, BC",
    callUs: "致電",
    phone: "+1 604-278-0779",
    mailUs: "來信",
    email: "atlansdowne@gmail.com",
    visitUs: "營業時間",
    hoursWeekdays: "週一至週五：15:00–20:30",
    hoursWeekend: "週六至週日：09:00–18:30",
    whatsappQrAlt: "WhatsApp 二維碼",
    wechatQrAlt: "WeChat 二維碼",
    firstName: "名字",
    lastName: "姓氏",
    emailLabel: "電子郵件",
    subject: "主旨",
    subjectPlaceholder: "請選擇主旨",
    message: "訊息",
    messagePlaceholder: "請輸入你的訊息…",
    send: "送出訊息",
    firstNamePlaceholder: "Leopoldo",
    lastNamePlaceholder: "Miranda",
    emailPlaceholder: "leomirandadev@gmail.com",
    subjects: [
      { value: "web-development", label: "網站開發" },
      { value: "mobile-development", label: "行動應用開發" },
      { value: "figma-design", label: "Figma 設計" },
      { value: "rest-api", label: "REST API" },
      { value: "fullstack-project", label: "全端專案" },
    ],
    errors: {
      firstName: "請至少輸入 2 個字元。",
      lastName: "請至少輸入 2 個字元。",
      email: "請輸入有效的電子郵件。",
      subject: "請選擇主旨。",
    },
  },
  faq: {
    eyebrow: "常見問題",
    title: "大家常問的事",
    items: [
      {
        question: "這個模板免費嗎？",
        answer: "是的。這是免費的 Next.js Shadcn 模板。",
        value: "item-1",
      },
      {
        question: "可以自訂顏色和字體嗎？",
        answer: "可以。主題代幣、字體與圖片都已預留，方便對齊你的品牌。",
        value: "item-2",
      },
      {
        question: "有支援深色模式嗎？",
        answer: "有。內建淺色與深色主題，也可跟隨系統偏好。",
        value: "item-3",
      },
      {
        question: "可以用在商業專案嗎？",
        answer: "可以。作為客戶專案或自家產品網站的起點都沒問題。",
        value: "item-4",
      },
      {
        question: "要怎麼開始？",
        answer: "複製儲存庫、安裝套件，再把文案與圖片換成你自己的內容即可。",
        value: "item-5",
      },
    ],
  },
  footer: {
    contact: "聯絡",
    platforms: "平台",
    help: "協助",
    socials: "社群",
    contactUs: "聯絡我們",
    faq: "常見問題",
    feedback: "意見回饋",
    copyright: "設計與開發：",
  },
} satisfies Dictionary;
