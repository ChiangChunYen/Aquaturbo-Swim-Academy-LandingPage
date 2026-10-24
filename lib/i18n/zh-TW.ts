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
    title1: "WINTER",
    title2: "SWIM LESSONS",
    title3: "NOW OPEN",
    tagline1: "有效地學",
    tagline2: "進步得更快",
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
    title: "教學特色",
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
    privacyPolicy: "隱私政策",
    contact: "聯絡",
    platforms: "平台",
    help: "協助",
    socials: "社群",
    contactUs: "聯絡我們",
    faq: "常見問題",
    feedback: "意見回饋",
    copyright: "設計與開發：",
  },
  privacy: {
    title: "隱私政策",
    backHome: "返回首頁",
    updatedLabel: "最後更新",
    updatedDate: "2026 年 10 月 24 日",
    introduction:
      "Aquaturbo Swim Academy 重視學員、家長及網站訪客的隱私。本政策說明我們如何處理與目前網站，以及加拿大卑詩省游泳課程諮詢相關的個人資料。",
    sections: [
      {
        id: "scope",
        title: "1. 目前網站的服務範圍",
        paragraphs: [
          "本網站目前提供泳校、課程、校區及聯絡方式等資訊，尚未提供線上帳號註冊、登入、學生資料管理、課程報名、訂單管理或付款功能。",
          "若您透過電子郵件、電話、WhatsApp 或 WeChat 安排課程或提供資料，我們對該等資料的處理亦適用本政策。個別服務如有需要，我們會另外提供相關告知或徵求同意。",
        ],
      },
      {
        id: "information",
        title: "2. 我們處理的資料",
        paragraphs: [
          "當您聯絡我們時，我們可能收到您的姓名、電子郵件地址、電話號碼、通訊帳號，以及您在諮詢中主動提供的內容。與您的需求相關時，內容亦可能包含學員年齡、游泳經驗或課程偏好。請僅提供協助處理諮詢所需的資料。",
          "為提供及保護網站服務，網站託管基礎設施可能處理 IP 位址、瀏覽器與裝置資訊、請求瀏覽的頁面及存取時間等技術資料。技術日誌是否產生及其保存方式，取決於託管服務及其設定。",
        ],
      },
      {
        id: "purposes",
        title: "3. 資料的使用目的",
        paragraphs: [
          "我們使用資料以回覆諮詢、討論合適課程、聯絡您所要求的服務、維護網站運作與安全，以及履行適用法律義務。我們將資料的收集、使用及披露限制於與上述活動相關且合理的目的。",
          "如需取得同意，我們會說明相關用途並取得適當同意。向我們諮詢課程本身不代表訂閱推廣訊息。若新用途需要另行取得同意，我們會在將資料用於該用途前作出說明。",
        ],
      },
      {
        id: "browser-storage",
        title: "4. 瀏覽器儲存與追蹤工具",
        paragraphs: [
          "我們使用瀏覽器本機儲存記住您選擇的語言。此偏好會保留在您的裝置上，直到您變更選擇或清除本網站的儲存資料。清除資料後，已儲存的語言偏好將重設。",
          "目前網站未使用廣告追蹤或訪客分析工具，也不會利用您的語言偏好建立廣告個人檔案。日後如加入分析或其他追蹤工具，我們會更新政策，並在使用前提供法律要求的告知及選擇。",
        ],
      },
      {
        id: "sharing",
        title: "5. 服務供應商與第三方平台",
        paragraphs: [
          "網站託管、電子郵件及通訊服務供應商可能為提供相關服務而處理所需資料。我們亦可能在取得適當同意，或法律要求或允許的情況下披露資料。我們不出售個人資料。",
          "若您選擇透過 WhatsApp、WeChat 或其他第三方服務聯絡我們，該服務亦會依其自身隱私條款處理資料。視供應商而定，資料可能在加拿大境外處理，並受當地法律管轄。您亦可選擇透過電子郵件或電話聯絡我們，無須使用通訊平台。",
        ],
      },
      {
        id: "children",
        title: "6. 兒童資料",
        paragraphs: [
          "本網站主要供家長、監護人及其他課程諮詢者使用，目前未提供兒童帳號，也不要求兒童直接透過網站提交資料。",
          "如您提供兒童資料，請確保您是該兒童的家長或監護人，或已獲適當授權。我們僅要求與諮詢或服務合理相關的兒童資料；如兒童無法自行提供有效同意，我們會向家長、監護人或其他有權人士取得適當同意。",
        ],
      },
      {
        id: "retention-security",
        title: "7. 資料保存與保護",
        paragraphs: [
          "我們會依收集目的所合理需要的期間保存個人資料，包括必要的後續聯絡及適用法律要求的保存期間。當資料不再需要，且無須繼續保存時，我們會採取措施安全刪除或匿名化處理。",
          "我們採取與資料敏感程度相稱的合理保護措施，並將存取限制於工作上有需要的人員。任何網路傳輸或儲存系統均無法保證絕對安全。",
        ],
      },
      {
        id: "your-choices",
        title: "8. 您的選擇與資料申請",
        paragraphs: [
          "您可聯絡我們，申請查閱或更正個人資料、詢問刪除事宜、在適用情況下撤回同意，或提出隱私疑慮。我們可能需要核實您的身分；如申請涉及兒童資料，亦可能需要確認您有權代表該兒童提出申請。",
          "申請須依適用法律處理。如資料必須保留、不能披露，或存在其他相關限制，我們會作出說明。若撤回提供服務所需資料的同意，可能影響我們繼續提供該服務的能力。",
        ],
      },
      {
        id: "updates",
        title: "9. 政策更新",
        paragraphs: [
          "當服務或資料處理方式改變時，我們會更新本頁，並於上方標示修訂日期。在推出帳號註冊、學生資料、線上報名、訂單或付款功能前，我們會說明相關資料處理方式，並提供必要的告知及同意選項。本政策不代表您已預先同意上述未來功能的資料處理。",
        ],
      },
    ],
    contactTitle: "10. 隱私聯絡方式",
    contactDescription:
      "如有隱私問題、資料申請或投訴，請透過下列方式聯絡 Aquaturbo Swim Academy，並要求由負責隱私事宜的人員處理。",
    regulatorBefore: "您亦可聯絡",
    regulatorName: "卑詩省資訊與隱私專員辦公室（OIPC BC）",
    regulatorAfter: "，了解隱私權利或提出投訴。",
  },
} satisfies Dictionary;
