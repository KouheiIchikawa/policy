import React, { useEffect, useState } from "https://esm.sh/react@18.3.1";
import { createRoot } from "https://esm.sh/react-dom@18.3.1/client";

const h = React.createElement;
const storageKey = "ei-oh-den-language";
const consentStorageKey = "ei-oh-den-cookie-consent";
const defaultLanguage = "ja";
const logoPath = "./images/EI-O-DEN_ROGO.png";
const heroImagePath = "./images/Equipped.png";
const iconPath = "./images/icon_original.png";
const groupImagePath = "./images/shuugou.png";
const artworkImagePath = "./images/nankatukaitai001.png";
const duckPath = "./images/ahiru_ninja.png";
const butterflyPath = "./images/choucho_ninja.png";
const appStoreBadgePath = "../common/appstore_badge.svg";
const googlePlayBadgePath = "../common/Google_Play_Badge_JA.svg";
const lineStickerImagePath = "../common/STORE_1_6a05cad241.jpeg";
const lineStickerSamplePath = "./images/LINE.png";
const kindleLogoPath = "../common/kindle-unlimited.svg";
const kindleCoverPath = "https://m.media-amazon.com/images/I/51344xEedoL._SY445_SX342_QL70_ML2_.jpg";
const appStoreUrl = "https://apps.apple.com/jp/app/ei-oh-den/id6760655882";
const googlePlayUrl = "https://play.google.com/store/apps/details?id=com.koheielimi.eiohden";
const novelUrl = "https://amzn.asia/d/0dyYraXp";
const lineStickerUrl = "https://store.line.me/stickershop/product/33347242/ja";
const defaultPageUrl = "https://kouheiichikawa.github.io/policy/Ei-Oh-Den/";
const defaultImageUrl = "https://kouheiichikawa.github.io/policy/Ei-Oh-Den/images/icon_original.png";
const developerName = "Kohei Elimi Lab";
const screenshots = [
  {
    key: "battle",
    url: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/71/44/1c/71441ca6-5ae2-2588-4710-4323640e1a8c/tile.png/460x996bb.webp"
  },
  {
    key: "inn",
    url: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/da/97/a7/da97a787-64da-3f59-2913-3ef4b7aa0b03/yadoya.png/460x996bb.webp"
  },
  {
    key: "world",
    url: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/55/c9/28/55c928a9-0a3f-ea12-d6f1-d6f46ec3395a/ninin.png/460x996bb.webp"
  }
];
const petals = Array.from({ length: 32 }, (_, index) => index + 1);
const secondaryCtaKinds = new Set(["kindle", "line"]);
const heroUiCopy = {
  ja: {
    langLabel: "\u65e5\u672c\u8a9e",
    extensionsKicker: "\u3072\u3089\u304f",
    kindleCopy: "Kindle\u5c0f\u8aac",
    lineCopy: "LINE\u30b9\u30bf\u30f3\u30d7"
  },
  en: {
    langLabel: "JP",
    extensionsKicker: "Explore",
    kindleCopy: "Kindle Novel",
    lineCopy: "LINE Stickers"
  }
};
const artworkUiCopy = {
  ja: {
    kicker: "\u30d3\u30b8\u30e5\u30a2\u30eb",
    title: "\u4f5c\u54c1\u306e\u7a7a\u6c17\u3092\u898b\u308b",
    lead: "\u516c\u5f0f\u7d75\u3001\u7f8e\u8853\u30a4\u30e1\u30fc\u30b8\u3001\u30a2\u30d7\u30ea\u30a2\u30a4\u30b3\u30f3\u3092\u307e\u3068\u3081\u3066\u3001\u5f71\u685c\u4f1d / Ei-Oh-DeN \u306e\u5370\u8c61\u3092\u4e00\u3064\u306e\u30da\u30fc\u30b8\u3067\u4f1d\u3048\u307e\u3059\u3002",
    groupTitle: "\u30db\u30fc\u30e0\u30da\u30fc\u30b8\u516c\u5f0f\u7d75",
    groupBody: "\u4e3b\u5f79\u306e\u7a7a\u6c17\u3092\u307e\u3068\u3081\u3066\u898b\u305b\u308b\u516c\u5f0f\u30d3\u30b8\u30e5\u30a2\u30eb\u3002",
    artTitle: "\u7f8e\u9e97\u7d75",
    artBody: "\u58ee\u5927\u306a\u30b9\u30c8\u30fc\u30ea\u30fc\u306e\u5370\u8c61\u3092\u5f37\u3081\u308b\u7d75\u4f5c\u3092\u88dc\u52a9\u30d3\u30b8\u30e5\u30a2\u30eb\u3068\u3057\u3066\u914d\u7f6e\u3002",
    iconTitle: "\u30a2\u30d7\u30ea\u30a2\u30a4\u30b3\u30f3",
    iconBody: "\u30b9\u30c8\u30a2\u3068\u540c\u3058\u30a2\u30a4\u30b3\u30f3\u3092\u516c\u5f0f\u30cf\u30d6\u3067\u3082\u660e\u78ba\u306b\u898b\u305b\u307e\u3059\u3002"
  },
  en: {
    kicker: "Visuals",
    title: "Artwork and official imagery",
    lead: "Official art, the app icon, and supporting artwork keep the page visually rich while the work itself stays central.",
    groupTitle: "Official homepage art",
    groupBody: "A large official visual that keeps the work itself front and center.",
    artTitle: "Illustration",
    artBody: "A supporting artwork card that reinforces the scale and tone of the story.",
    iconTitle: "App icon",
    iconBody: "The same icon used on stores is visible here on the official hub.",
  }
};
const heroSlides = [
  {
    key: "artwork",
    imagePath: artworkImagePath,
    width: 832,
    height: 1216,
    altJa: "\u5f71\u685c\u4f1d / Ei-Oh-DeN \u30ad\u30fc\u30d3\u30b8\u30e5\u30a2\u30eb",
    altEn: "Ei-Oh-DeN key visual",
    fitMode: "contain",
    scaleDesktop: "1.04",
    scaleMobile: "1.03",
    positionDesktop: "center 18%",
    positionMobile: "center 14%"
  },
  {
    key: "group",
    imagePath: groupImagePath,
    width: 768,
    height: 1344,
    altJa: "\u5f71\u685c\u4f1d / Ei-Oh-DeN \u516c\u5f0f\u7d75",
    altEn: "Ei-Oh-DeN official group visual",
    fitMode: "contain",
    scaleDesktop: "1.1",
    scaleMobile: "1.08",
    positionDesktop: "center 4%",
    positionMobile: "center 6%"
  }
];
const cookieUiCopy = {
  ja: {
    title: "\u30af\u30c3\u30ad\u30fc\u3068\u8a08\u6e2c\u306b\u3064\u3044\u3066",
    body: "\u3053\u306e\u30b5\u30a4\u30c8\u3067\u306f\u3001\u914d\u4fe1\u72b6\u6cc1\u3084\u5c0e\u7dda\u306e\u5229\u7528\u72b6\u6cc1\u3092\u78ba\u8a8d\u3059\u308b\u305f\u3081\u306bCookie\u3068Google Analytics\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002",
    accept: "\u540c\u610f\u3059\u308b",
    decline: "\u540c\u610f\u3057\u306a\u3044"
  },
  en: {
    title: "Cookies and analytics",
    body: "This site uses cookies and Google Analytics to understand which links are used and to keep the official hub useful.",
    accept: "Accept",
    decline: "Decline"
  }
};
const hubUiCopy = {
  ja: {
    storeKicker: "\u914d\u4fe1\u60c5\u5831",
    storeLead:
      "\u5f71\u685c\u4f1d\u0020\u002f\u0020\u0045\u0069\u002d\u004f\u0068\u002d\u0044\u0065\u004e\u306e\u73fe\u5728\u306e\u30a2\u30d7\u30ea\u914d\u4fe1\u60c5\u5831\u3067\u3059\u3002",
    storePrice: "\u4fa1\u683c",
    storeRating: "\u8a55\u4fa1",
    storeReviews: "\u30ec\u30d3\u30e5\u30fc",
    storeUpdated: "\u6700\u7d42\u66f4\u65b0",
    storeAction: "\u30b9\u30c8\u30a2\u3092\u958b\u304f",
    storePending: "\u624b\u52d5\u66f4\u65b0\u5f85\u3061",
    newsKicker: "\u6700\u65b0\u60c5\u5831",
    newsTitle: "\u6700\u65b0\u60c5\u5831",
    newsLead:
      "\u66f4\u65b0\u304c\u591a\u304f\u306a\u3044\u6642\u671f\u3067\u3082\u3001\u4eca\u3082\u914d\u4fe1\u4e2d\u30fb\u4eca\u3082\u898b\u3089\u308c\u3066\u3044\u308b\u4f5c\u54c1\u3068\u4f1d\u308f\u308b\u3088\u3046\u306b\u3001\u516c\u5f0f\u60c5\u5831\u3092\u7d9a\u3051\u3066\u4e26\u3079\u307e\u3059\u3002",
    newsEmpty: "\u304a\u77e5\u3089\u305b\u306f\u6e96\u5099\u4e2d\u3067\u3059\u3002",
    newsAction: "\u8a73\u3057\u304f\u898b\u308b",
    labelUpdate: "\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8",
    labelNovel: "\u5c0f\u8aac",
    labelNotice: "\u304a\u77e5\u3089\u305b",
    nowLive: "\u914d\u4fe1\u4e2d",
    ongoing: "\u516c\u958b\u4e2d"
  },
  en: {
    storeKicker: "Store Snapshot",
    storeTitle: "Current release information",
    storeLead:
      "Ei-Oh-DeN is a historical fantasy work by Kohei Elimi Lab, available as a mobile app and a novel.",
    storePrice: "Price",
    storeRating: "Rating",
    storeReviews: "Reviews",
    storeUpdated: "Last update",
    storeAction: "Open store",
    storePending: "Manual update pending",
    newsKicker: "Latest Info",
    newsTitle: "Latest updates",
    newsLead:
      "Even when update frequency is low, this keeps the page feeling live and shows that the work is still available and being viewed.",
    newsEmpty: "News items will appear here.",
    newsAction: "Learn more",
    labelUpdate: "Update",
    labelNovel: "Novel",
    labelNotice: "Notice",
    nowLive: "Live",
    ongoing: "Ongoing"
  }
};
const defaultStoreSnapshot = {
  items: [
    {
      id: "appstore",
      name: "App Store",
      price: "200 JPY",
      rating: null,
      reviewCount: null,
      updatedAt: null,
      url: appStoreUrl
    },
    {
      id: "googleplay",
      name: "Google Play",
      price: "200 JPY",
      rating: null,
      reviewCount: null,
      updatedAt: null,
      url: googlePlayUrl
    }
  ]
};
const defaultNewsItems = {
  items: [
    {
      id: "app-live",
      category: "notice",
      titleJa: "\u30b9\u30de\u30db\u30a2\u30d7\u30ea\u7248\u3092\u914d\u4fe1\u4e2d",
      titleEn: "The mobile app is live",
      summaryJa:
        "\u5f71\u685c\u4f1d\u0020\u002f\u0020\u0045\u0069\u002d\u004f\u0068\u002d\u0044\u0065\u004e\u306f\u3001\u0041\u0070\u0070\u0020\u0053\u0074\u006f\u0072\u0065\u3068\u0047\u006f\u006f\u0067\u006c\u0065\u0020\u0050\u006c\u0061\u0079\u304b\u3089\u3059\u3050\u306b\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002",
      summaryEn: "Ei-Oh-DeN is available through both the App Store and Google Play.",
      status: "live",
      url: appStoreUrl
    },
    {
      id: "novel-live",
      category: "novel",
      titleJa: "\u004b\u0069\u006e\u0064\u006c\u0065\u5c0f\u8aac\u7248\u3092\u516c\u958b\u4e2d",
      titleEn: "The Kindle novel is available",
      summaryJa:
        "\u30b2\u30fc\u30e0\u306e\u4e16\u754c\u89b3\u3092\u3088\u308a\u6df1\u304f\u8ffd\u3044\u304b\u3051\u305f\u3044\u4eba\u5411\u3051\u306b\u3001\u5c0f\u8aac\u7248\u3078\u306e\u5c0e\u7dda\u3092\u307e\u3068\u3081\u3066\u3044\u307e\u3059\u3002",
      summaryEn: "The official hub also links to the Kindle novel edition.",
      status: "ongoing",
      url: novelUrl
    },
    {
      id: "stickers-live",
      category: "update",
      titleJa: "\u516c\u5f0f\u004c\u0049\u004e\u0045\u30b9\u30bf\u30f3\u30d7\u3092\u516c\u958b\u4e2d",
      titleEn: "Official LINE stickers are available",
      summaryJa:
        "\u4f5c\u54c1\u306e\u7a7a\u6c17\u3092\u65e5\u5e38\u306e\u4f1a\u8a71\u3067\u3082\u697d\u3057\u3081\u308b\u3088\u3046\u306b\u3001\u516c\u5f0f\u30b9\u30bf\u30f3\u30d7\u3078\u306e\u5c0e\u7dda\u3092\u7528\u610f\u3057\u3066\u3044\u307e\u3059\u3002",
      summaryEn: "The official stickers keep the work visible beyond the app itself.",
      status: "ongoing",
      url: lineStickerUrl
    }
  ]
};

function detectLanguage() {
  const saved = window.localStorage.getItem(storageKey);
  if (saved === "ja" || saved === "en") {
    return saved;
  }
  const browserLanguage = (navigator.language || defaultLanguage).toLowerCase();
  return browserLanguage.startsWith("ja") ? "ja" : "en";
}

async function loadMessages(language) {
  const normalized = language === "en" ? "en" : "ja";
  const response = await fetch(`./i18n/${normalized}.json`, { cache: "no-cache" });
  if (!response.ok) {
    throw new Error(`Failed to load ${normalized}`);
  }
  return response.json();
}

async function loadOptionalJson(path, fallback) {
  try {
    const response = await fetch(path, { cache: "no-cache" });
    if (!response.ok) {
      throw new Error(`Failed to load ${path}`);
    }
    return response.json();
  } catch {
    return fallback;
  }
}

function getStoredConsent() {
  try {
    return window.localStorage.getItem(consentStorageKey);
  } catch {
    return null;
  }
}

function updateAnalyticsConsent(status) {
  if (typeof window.gtag !== "function") {
    return;
  }

  window.gtag("consent", "update", {
    analytics_storage: status === "accepted" ? "granted" : "denied"
  });
}

function trackEvent(eventName, params = {}) {
  if (typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", eventName, {
    page_location: window.location.href,
    ...params
  });
}

function getClickEventName(item) {
  if (item.kind === "appstore") {
    return "click_appstore";
  }
  if (item.kind === "playstore" || item.kind === "googleplay") {
    return "click_googleplay";
  }
  if (item.kind === "kindle") {
    return "click_kindle";
  }
  if (item.kind === "line") {
    return "click_linesticker";
  }
  return null;
}

function ensureMeta(selector, attributes) {
  let node = document.head.querySelector(selector);
  if (!node) {
    node = document.createElement("meta");
    document.head.appendChild(node);
  }
  Object.entries(attributes).forEach(([key, value]) => {
    node.setAttribute(key, value);
  });
}

function ensureLink(selector, attributes) {
  let node = document.head.querySelector(selector);
  if (!node) {
    node = document.createElement("link");
    document.head.appendChild(node);
  }
  Object.entries(attributes).forEach(([key, value]) => {
    node.setAttribute(key, value);
  });
}

function getCanonicalUrl() {
  try {
    const url = new URL(window.location.href);
    url.hash = "";
    url.search = "";
    return url.href;
  } catch {
    return defaultPageUrl;
  }
}

function getImageUrl() {
  try {
    return new URL("./images/icon_original.png", window.location.href).href;
  } catch {
    return defaultImageUrl;
  }
}

function updateStructuredData(copy, language) {
  const pageUrl = getCanonicalUrl();
  const imageUrl = getImageUrl();
  const faqEntities = copy.faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer
    }
  }));

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: copy.siteName,
        url: pageUrl,
        inLanguage: language,
        publisher: {
          "@type": "Organization",
          name: developerName
        }
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: copy.siteName,
            item: pageUrl
          },
          {
            "@type": "ListItem",
            position: 2,
            name: copy.breadcrumbCurrent,
            item: pageUrl
          }
        ]
      },
      {
        "@type": "WebPage",
        name: copy.pageTitle,
        url: pageUrl,
        description: copy.seoDescription,
        inLanguage: language,
        primaryImageOfPage: imageUrl,
        keywords: copy.seoKeywords.join(", ")
      },
      {
        "@type": "MobileApplication",
        name: copy.appName,
        alternateName: copy.altNames,
        applicationCategory: "GameApplication",
        operatingSystem: "Android, iOS",
        genre: copy.genres,
        image: imageUrl,
        url: pageUrl,
        offers: {
          "@type": "Offer",
          price: "200",
          priceCurrency: "JPY",
          availability: "https://schema.org/InStock"
        },
        author: {
          "@type": "Organization",
          name: developerName
        },
        publisher: {
          "@type": "Organization",
          name: developerName
        },
        downloadUrl: [appStoreUrl, googlePlayUrl]
      },
      {
        "@type": "Book",
        name: copy.relatedWorks[0].title,
        genre: copy.genres,
        author: {
          "@type": "Organization",
          name: developerName
        },
        url: novelUrl,
        isRelatedTo: {
          "@type": "MobileApplication",
          name: copy.appName
        }
      },
      {
        "@type": "Product",
        name: copy.relatedWorks[1].title,
        category: "Digital Stickers",
        url: lineStickerUrl,
        isRelatedTo: {
          "@type": "MobileApplication",
          name: copy.appName
        }
      },
      {
        "@type": "FAQPage",
        mainEntity: faqEntities
      }
    ]
  };

  const node = document.getElementById("structured-data");
  if (node) {
    node.textContent = JSON.stringify(data);
  }
}

function updateHead(copy, language) {
  const pageUrl = getCanonicalUrl();
  const imageUrl = getImageUrl();

  document.title = copy.pageTitle;
  document.documentElement.lang = copy.htmlLang;

  ensureMeta('meta[name="description"]', { name: "description", content: copy.seoDescription });
  ensureMeta('meta[name="keywords"]', { name: "keywords", content: copy.seoKeywords.join(", ") });
  ensureMeta('meta[name="robots"]', {
    name: "robots",
    content: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
  });
  ensureMeta('meta[property="og:type"]', { property: "og:type", content: "website" });
  ensureMeta('meta[property="og:title"]', { property: "og:title", content: copy.pageTitle });
  ensureMeta('meta[property="og:description"]', { property: "og:description", content: copy.seoDescription });
  ensureMeta('meta[property="og:url"]', { property: "og:url", content: pageUrl });
  ensureMeta('meta[property="og:image"]', { property: "og:image", content: imageUrl });
  ensureMeta('meta[property="og:site_name"]', { property: "og:site_name", content: copy.siteName });
  ensureMeta('meta[property="og:locale"]', { property: "og:locale", content: language === "ja" ? "ja_JP" : "en_US" });
  ensureMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
  ensureMeta('meta[name="twitter:title"]', { name: "twitter:title", content: copy.pageTitle });
  ensureMeta('meta[name="twitter:description"]', { name: "twitter:description", content: copy.seoDescription });
  ensureMeta('meta[name="twitter:image"]', { name: "twitter:image", content: imageUrl });
  ensureLink('link[rel="canonical"]', { rel: "canonical", href: pageUrl });

  updateStructuredData(copy, language);
}

function PetalLayer() {
  return h(
    "div",
    { className: "petals", "aria-hidden": "true" },
    ...petals.map((n) => h("span", { key: `petal-${n}`, className: `petal petal-${n}` }))
  );
}

function LanguageToggle({ language, onChange, uiCopy }) {
  return h(
    "div",
    { className: "lang-switcher", role: "group", "aria-label": "Language toggle" },
    h(
      "button",
      {
        type: "button",
        className: language === "ja" ? "lang-pill is-active" : "lang-pill",
        onClick: () => onChange("ja")
      },
      uiCopy.langLabel
    ),
    h(
      "button",
      {
        type: "button",
        className: language === "en" ? "lang-pill is-active" : "lang-pill",
        onClick: () => onChange("en")
      },
      "English"
    )
  );
}

function HamburgerMenu({ copy, isOpen, onToggle, onNavigate }) {
  const items = [
    { href: "#related", label: copy.relatedKicker || "Related Works" },
    { href: "#screenshots", label: copy.screenshots.kicker || "Game Overview" },
    { href: "#features", label: copy.features.kicker || "Features" },
    { href: "#quick-guide", label: "Quick攻略" },
    { href: "#creator", label: copy.creator.kicker || "Creator" },
    { href: "#faq", label: copy.faqKicker || "FAQ" }
  ];

  return h(
    "div",
    { className: "hamburger-wrap" },
    h(
      "button",
      {
        type: "button",
        className: isOpen ? "hamburger-button is-open" : "hamburger-button",
        "aria-expanded": isOpen,
        "aria-controls": "site-menu",
        "aria-label": "Open navigation menu",
        onClick: onToggle
      },
      h("span", { className: "hamburger-line" }),
      h("span", { className: "hamburger-line" }),
      h("span", { className: "hamburger-line" })
    ),
    h(
      "nav",
      { id: "site-menu", className: isOpen ? "hamburger-menu is-open" : "hamburger-menu", "aria-label": "Section navigation" },
      ...items.map((item) =>
        h(
          "a",
          {
            key: item.href,
            href: item.href,
            className: "hamburger-link",
            onClick: onNavigate
          },
          item.label
        )
      )
    )
  );
}

function HeroCTA({ item, compact }) {
  const toneClass = secondaryCtaKinds.has(item.kind) ? "cta-button-secondary" : "cta-button-primary";
  const storeClass = item.kind === "appstore" || item.kind === "playstore" ? "cta-button-store" : "";
  const artClass = item.kind === "kindle" || item.kind === "line" ? "cta-button-has-art" : "";
  const eventName = getClickEventName(item);
  const className = compact
    ? `cta-button ${toneClass} ${storeClass} ${artClass} cta-button-compact`
    : `cta-button ${toneClass} ${storeClass} ${artClass}`;
  const content =
    item.kind === "appstore"
      ? h("img", { className: "store-badge", src: appStoreBadgePath, alt: item.label })
      : item.kind === "playstore"
        ? h("img", { className: "store-badge", src: googlePlayBadgePath, alt: item.label })
        : item.kind === "kindle"
          ? h(
              React.Fragment,
              null,
              h("img", { className: "cta-art", src: kindleLogoPath, alt: "", "aria-hidden": "true" }),
              h("span", { className: "cta-label-stack" }, h("span", { className: "cta-eyebrow" }, item.eyebrow), h("span", null, item.label))
            )
          : item.kind === "line"
            ? h(
                React.Fragment,
                null,
                h("img", { className: "cta-art cta-art-sticker", src: lineStickerImagePath, alt: "", "aria-hidden": "true" }),
                h("span", { className: "cta-label-stack" }, h("span", { className: "cta-eyebrow" }, item.eyebrow), h("span", null, item.label))
              )
        : h(React.Fragment, null, h("span", { className: "cta-eyebrow" }, item.eyebrow), h("span", null, item.label));

  return h(
    "a",
    {
      className,
      href: item.url,
      onClick: eventName ? () => trackEvent(eventName) : undefined,
      target: item.url.startsWith("#") ? undefined : "_blank",
      rel: item.url.startsWith("#") ? undefined : "noreferrer"
    },
    content
  );
}

function HeroSection({ copy, language, onLanguageChange }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5000);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  function goToSlide(index) {
    setActiveSlide(index);
  }

  function goToNextSlide() {
    setActiveSlide((current) => (current + 1) % heroSlides.length);
  }

  function handleTouchStart(event) {
    setTouchStartX(event.changedTouches[0].clientX);
  }

  function handleTouchEnd(event) {
    if (touchStartX == null) {
      return;
    }

    const deltaX = event.changedTouches[0].clientX - touchStartX;
    if (Math.abs(deltaX) > 36) {
      setActiveSlide((current) => {
        if (deltaX < 0) {
          return (current + 1) % heroSlides.length;
        }
        return (current - 1 + heroSlides.length) % heroSlides.length;
      });
    } else {
      goToNextSlide();
    }
    setTouchStartX(null);
  }

  function handleMenuNavigate() {
    setMenuOpen(false);
  }

  return h(
    "section",
    { className: "hero", id: "top" },
    h(
      "div",
      { className: "hero-topbar" },
      h(HamburgerMenu, { copy, isOpen: menuOpen, onToggle: () => setMenuOpen((current) => !current), onNavigate: handleMenuNavigate }),
      h(LanguageToggle, { language, onChange: onLanguageChange, uiCopy: heroUiCopy[language] || heroUiCopy.ja })
    ),
    h(
      "div",
      { className: "hero-grid" },
      h(
        "div",
        { className: "hero-copy" },
        h("p", { className: "hero-kicker" }, copy.siteName),
        h(
          "div",
          { className: "hero-title-row" },
          h("img", {
            className: "hero-title-icon",
            src: iconPath,
            alt: "",
            "aria-hidden": "true",
            width: "96",
            height: "96",
            fetchpriority: "high"
          }),
          h("h1", { className: "hero-title" }, copy.hero.title)
        ),
        h("p", { className: "hero-subtitle" }, copy.hero.subtitle),
        h("p", { className: "hero-description" }, copy.hero.description),
        h(
          "div",
          { className: "hero-meta" },
          ...copy.hero.meta.map((item) => h("span", { key: item, className: "meta-pill" }, item))
        ),
        h(
          "div",
          { className: "hero-cta-grid", "aria-label": copy.ctaGroupLabel },
          ...copy.ctas.map((item) => h(HeroCTA, { key: item.label, item }))
        )
      ),
      h(
        "div",
        { className: "hero-visual" },
        h(
          "div",
          { className: "hero-brand-card" },
          h("img", {
            className: "hero-logo hero-logo-floating",
            src: logoPath,
            alt: `${copy.appName} logo`,
            width: "768",
            height: "314",
            fetchpriority: "high"
          }),
          h(
            "div",
            {
              className: "hero-kv-stage",
              onClick: goToNextSlide,
              onTouchStart: handleTouchStart,
              onTouchEnd: handleTouchEnd
            },
            ...heroSlides.map((slide, index) =>
              h("img", {
                key: slide.key,
                className: index === activeSlide ? "hero-kv-slide is-active" : "hero-kv-slide",
                src: slide.imagePath,
                alt: language === "ja" ? slide.altJa : slide.altEn,
                width: String(slide.width),
                height: String(slide.height),
                fetchpriority: index === 0 ? "high" : undefined,
                loading: index === 0 ? "eager" : "lazy",
                style: {
                  "--hero-fit": slide.fitMode || "cover",
                  "--hero-scale-desktop": slide.scaleDesktop || "1",
                  "--hero-scale-mobile": slide.scaleMobile || slide.scaleDesktop || "1",
                  "--hero-position-desktop": slide.positionDesktop,
                  "--hero-position-mobile": slide.positionMobile
                }
              })
            ),
            h(
              "div",
              { className: "hero-kv-dots", role: "tablist", "aria-label": "Hero slides" },
              ...heroSlides.map((slide, index) =>
                h("button", {
                  key: `${slide.key}-dot`,
                  type: "button",
                  className: index === activeSlide ? "hero-kv-dot is-active" : "hero-kv-dot",
                  "aria-label": `${index + 1}`,
                  "aria-pressed": index === activeSlide,
                  onClick: () => goToSlide(index)
                })
              )
            )
          )
        )
      )
    )
  );
}

function StoreSnapshotSection({ storeData, language }) {
  const uiCopy = hubUiCopy[language] || hubUiCopy.ja;
  const hasLiveMeta = (item) => Boolean(item.rating || item.reviewCount || item.updatedAt);

  return h(
    "section",
    { className: "section-block", id: "store-snapshot", "aria-labelledby": "store-snapshot-title" },
    h(
      "div",
      { className: "section-head" },
      h("p", { className: "section-kicker" }, uiCopy.storeKicker),
      h("p", { className: "section-lead" }, uiCopy.storeLead)
    ),
    h(
      "div",
      { className: "store-grid" },
      ...(storeData.items || []).map((item) =>
        h(
          "article",
          { key: item.id || item.name, className: "glass-card store-card" },
          h(
            "div",
            { className: "store-card-head" },
            h(
              "div",
              null,
              h("p", { className: "feature-eyebrow" }, item.name),
              h("h3", { className: "store-card-title" }, item.price || "--")
            ),
            hasLiveMeta(item)
              ? h(
                  "span",
                  { className: "store-status is-live" },
                  "\u66f4\u65b0\u4e2d"
                )
              : null
          ),
          h(
            "div",
            { className: "store-metrics" },
            h("div", { className: "store-metric" }, h("span", { className: "store-metric-label" }, uiCopy.storeRating), h("strong", { className: "store-metric-value" }, item.rating || "--")),
            h("div", { className: "store-metric" }, h("span", { className: "store-metric-label" }, uiCopy.storeReviews), h("strong", { className: "store-metric-value" }, item.reviewCount || "--")),
            h("div", { className: "store-metric" }, h("span", { className: "store-metric-label" }, uiCopy.storeUpdated), h("strong", { className: "store-metric-value" }, item.updatedAt || "--"))
          ),
          h(
            "a",
            {
              className: "store-link",
              href: item.url,
              onClick: getClickEventName({ kind: item.id }) ? () => trackEvent(getClickEventName({ kind: item.id })) : undefined,
              target: "_blank",
              rel: "noreferrer"
            },
            uiCopy.storeAction
          )
        )
      )
    )
  );
}

function ScreenshotsSection({ copy }) {
  return h(
    "section",
    { className: "section-block", id: "screenshots", "aria-labelledby": "screenshots-title" },
    h(
      "div",
      { className: "section-head" },
      h("p", { className: "section-kicker" }, copy.screenshots.kicker),
      h("h2", { id: "screenshots-title", className: "section-title" }, copy.screenshots.title),
      h("p", { className: "section-lead" }, copy.screenshots.lead)
    ),
    h(
      "div",
      { className: "shot-grid" },
      ...copy.screenshots.items.map((item, index) =>
        h(
          "figure",
          { key: item.title, className: "glass-card shot-card" },
          h("img", {
            className: "shot-image",
            src: screenshots[index].url,
            alt: item.alt,
            loading: "lazy",
            width: "460",
            height: "996"
          }),
          h(
            "figcaption",
            { className: "shot-caption" },
            h("p", { className: "feature-eyebrow" }, item.eyebrow),
            h("h3", { className: "feature-title" }, item.title),
            h("p", { className: "feature-body" }, item.body)
          )
        )
      )
    )
  );
}

function FeaturesSection({ copy }) {
  return h(
    "section",
    { className: "section-block", id: "features", "aria-labelledby": "features-title" },
    h(
      "div",
      { className: "section-head" },
      h("p", { className: "section-kicker" }, copy.features.kicker),
      h("h2", { id: "features-title", className: "section-title" }, copy.features.title)
    ),
    h(
      "div",
      { className: "feature-grid" },
      ...copy.features.items.map((item) =>
        h(
          "article",
          { key: item.title, className: "glass-card feature-card" },
          h("p", { className: "feature-eyebrow" }, item.eyebrow),
          h("h3", { className: "feature-title" }, item.title),
          h("p", { className: "feature-body" }, item.body)
        )
      )
    )
  );
}

function StrategySection({ copy }) {
  return h(
    "section",
    { className: "section-block", id: "quick-guide", "aria-labelledby": "guide-title" },
    h(
      "div",
      { className: "section-head" },
      h("p", { className: "section-kicker" }, copy.quickGuide.kicker),
      h("h2", { id: "guide-title", className: "section-title" }, copy.quickGuide.title),
      h("p", { className: "section-lead" }, copy.quickGuide.lead)
    ),
    h(
      "div",
      { className: "guide-grid" },
      h(
        "article",
        { className: "glass-card guide-card guide-card-emphasis" },
        h("p", { className: "guide-badge" }, copy.quickGuide.badge),
        h(
          "ol",
          { className: "guide-steps" },
          ...copy.quickGuide.steps.map((item) =>
            h(
              "li",
              { key: item.title, className: "guide-step" },
              h("h3", { className: "guide-step-title" }, item.title),
              h("p", { className: "guide-step-body" }, item.body)
            )
          )
        )
      ),
      h(
        "article",
        { className: "glass-card guide-card" },
        h("p", { className: "guide-side-kicker" }, copy.quickGuide.sideTitle),
        h(
          "ul",
          { className: "guide-points" },
          ...copy.quickGuide.points.map((item) => h("li", { key: item }, item))
        ),
        h(
          "div",
          { className: "guide-art" },
          h("img", { className: "guide-duck", src: duckPath, alt: "", "aria-hidden": "true", loading: "lazy" }),
          h("img", { className: "guide-butterfly", src: butterflyPath, alt: "", "aria-hidden": "true", loading: "lazy" })
        )
      )
    )
  );
}

function RelatedWorksSection({ copy }) {
  return h(
    "section",
    { className: "section-block", id: "related", "aria-labelledby": "related-title" },
    h(
      "div",
      { className: "section-head" },
      h("p", { className: "section-kicker" }, copy.relatedKicker),
      h("h2", { id: "related-title", className: "section-title" }, copy.relatedTitle),
      copy.relatedLead ? h("p", { className: "section-lead" }, copy.relatedLead) : null
    ),
    h(
      "div",
      { className: "related-grid" },
      ...copy.relatedWorks.map((item) =>
        h(
          "article",
          { key: item.title, className: item.kind === "line" ? "glass-card related-card is-line" : "glass-card related-card" },
          h(
            "div",
            { className: "related-card-layout" },
            item.imageUrl
              ? h(
                  "div",
                  {
                    className: item.kind === "line" ? "related-image-frame is-line" : "related-image-frame",
                    "data-watermark": item.kind === "line" ? "\u00a9 2026 Kohei Elimi Lab" : undefined
                  },
                  h("img", {
                    className: item.kind === "line" ? "related-image is-line" : "related-image",
                    src: item.imageUrl,
                    alt: item.imageAlt,
                    loading: "lazy"
                  })
                )
              : null,
            h(
              "div",
              { className: "related-copy" },
              h("p", { className: "feature-eyebrow" }, item.eyebrow),
              h("h3", { className: "feature-title" }, item.title),
              h("p", { className: "feature-body" }, item.body),
              item.highlight ? h("p", { className: "related-highlight" }, item.highlight) : null,
              h("div", { className: "related-cta-wrap" }, h(HeroCTA, { compact: true, item: { ...item, label: item.cta } }))
            )
          )
        )
      )
    )
  );
}

function CreatorSection({ copy }) {
  return h(
    "section",
    { className: "section-block", id: "creator", "aria-labelledby": "creator-title" },
    h(
      "article",
      { className: "glass-card creator-card" },
      h("p", { className: "section-kicker" }, copy.creator.kicker),
      h("h2", { id: "creator-title", className: "section-title" }, copy.creator.title),
      h("p", { className: "creator-body" }, copy.creator.body),
      h(
        "a",
        { className: "text-link creator-link-button", href: copy.creator.contactUrl, target: "_blank", rel: "noopener noreferrer" },
        copy.creator.contactLabel
      )
    )
  );
}

function FAQSection({ copy }) {
  return h(
    "section",
    { className: "section-block", id: "faq", "aria-labelledby": "faq-title" },
    h(
      "div",
      { className: "section-head" },
      h("p", { className: "section-kicker" }, copy.faqKicker),
      h("h2", { id: "faq-title", className: "section-title" }, copy.faqTitle)
    ),
    h(
      "div",
      { className: "faq-grid" },
      ...copy.faqs.map((item) =>
        h(
          "article",
          { key: item.question, className: "glass-card faq-card" },
          h(
            "div",
            { className: "faq-question-row" },
            h("img", {
              className: "faq-question-icon",
              src: heroImagePath,
              alt: "",
              "aria-hidden": "true",
              loading: "lazy",
              width: "975",
              height: "975"
            }),
            h("h3", { className: "faq-question" }, item.question)
          ),
          h("p", { className: "faq-answer" }, item.answer)
        )
      )
    )
  );
}

function FooterSection({ copy }) {
  return h(
    "footer",
    { className: "site-footer" },
    h(
      "div",
      { className: "footer-links" },
      ...copy.footerLinks.map((item) =>
        h(
          "a",
          {
            key: item.label,
            href: item.url,
            className: "footer-link",
            onClick: getClickEventName(item) ? () => trackEvent(getClickEventName(item)) : undefined,
            target: item.external ? "_blank" : undefined,
            rel: item.external ? "noreferrer" : undefined
          },
          item.label
        )
      )
    ),
    h("p", { className: "footer-copy" }, copy.footer)
  );
}

function CookieBanner({ language, consent, onDecision }) {
  const uiCopy = cookieUiCopy[language] || cookieUiCopy.ja;

  if (consent) {
    return null;
  }

  return h(
    "aside",
    { className: "cookie-banner", role: "dialog", "aria-live": "polite", "aria-label": uiCopy.title, "aria-modal": "true" },
    h("strong", { className: "cookie-banner-title" }, uiCopy.title),
    h("p", { className: "cookie-banner-body" }, uiCopy.body),
    h(
      "div",
      { className: "cookie-banner-actions" },
      h(
        "button",
        {
          type: "button",
          className: "cookie-button cookie-button-secondary",
          onClick: () => onDecision("declined")
        },
        uiCopy.decline
      ),
      h(
        "button",
        {
          type: "button",
          className: "cookie-button cookie-button-primary",
          onClick: () => onDecision("accepted")
        },
        uiCopy.accept
      )
    )
  );
}

function StickyCTA({ copy }) {
  return h(
    "div",
    { className: "sticky-cta", "aria-label": copy.ctaGroupLabel },
    ...copy.ctas.map((item) => h(HeroCTA, { key: item.label, item, compact: true }))
  );
}

function LoadingState(message) {
  return h(
    React.Fragment,
    null,
    h(PetalLayer, null),
    h(
      "main",
      { className: "page-shell" },
      h("section", { className: "hero loading-card" }, h("p", { className: "hero-description" }, message))
    )
  );
}

function App() {
  const [language, setLanguage] = useState(detectLanguage);
  const [copy, setCopy] = useState(null);
  const [hubData, setHubData] = useState({ store: defaultStoreSnapshot, news: defaultNewsItems });
  const [consent, setConsent] = useState(getStoredConsent);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    Promise.all([
      loadMessages(language),
      loadOptionalJson("./data/store-info.json", defaultStoreSnapshot),
      loadOptionalJson("./data/news.json", defaultNewsItems)
    ])
      .then(([messages, store, news]) => {
        if (cancelled) {
          return;
        }
        setCopy(messages);
        setHubData({
          store: store && Array.isArray(store.items) ? store : defaultStoreSnapshot,
          news: news && Array.isArray(news.items) ? news : defaultNewsItems
        });
        setError(false);
        updateHead(messages, language);
        window.localStorage.setItem(storageKey, language);
      })
      .catch(() => {
        if (!cancelled) {
          setError(true);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [language]);

  useEffect(() => {
    if (consent === "accepted" || consent === "declined") {
      updateAnalyticsConsent(consent);
    }
  }, [consent]);

  useEffect(() => {
    const shouldReserveCookieSpace = !(consent === "accepted" || consent === "declined");
    document.body.classList.toggle("has-cookie-banner", shouldReserveCookieSpace);

    return () => {
      document.body.classList.remove("has-cookie-banner");
    };
  }, [consent]);

  if (!copy && !error) {
    return LoadingState("Loading official Ei-Oh-DeN site...");
  }

  if (error) {
    return LoadingState("Failed to load the official site content.");
  }

  const relatedWorks = copy.relatedWorks.map((item, index) => {
    if (index === 0) {
      return {
        ...item,
        imageUrl: kindleCoverPath,
        kind: "kindle"
      };
    }

    if (index === 1) {
      return {
        ...item,
        imageUrl: lineStickerSamplePath,
        kind: "line"
      };
    }

    return item;
  });

  const hydratedCopy = {
    ...copy,
    ctas: copy.ctas.map((item, index) => ({
      ...item,
      kind: item.kind || (index === 2 ? "kindle" : index === 3 ? "line" : undefined),
      eyebrow:
        language === "ja" && index === 2
          ? "\u95a2\u9023\u4f5c\u54c1"
          : language === "ja" && index === 3
            ? "\u516c\u5f0f\u30b9\u30bf\u30f3\u30d7"
            : item.eyebrow
    })),
    relatedWorks,
    footerLinks: copy.footerLinks.map((item) => ({
      ...item,
      kind:
        item.url === appStoreUrl
          ? "appstore"
          : item.url === googlePlayUrl
            ? "playstore"
            : item.url === novelUrl
              ? "kindle"
              : item.url === lineStickerUrl
                ? "line"
                : undefined
    }))
  };

  function handleConsentDecision(nextConsent) {
    setConsent(nextConsent);
    try {
      window.localStorage.setItem(consentStorageKey, nextConsent);
    } catch {}
    updateAnalyticsConsent(nextConsent);
  }

  return h(
    React.Fragment,
    null,
    h(PetalLayer, null),
    h(CookieBanner, { language, consent, onDecision: handleConsentDecision }),
    h(StickyCTA, { copy: hydratedCopy }),
    h(
      "main",
      { className: "page-shell" },
      h(HeroSection, { copy: hydratedCopy, language, onLanguageChange: setLanguage }),
      h(RelatedWorksSection, { copy: hydratedCopy }),
      h(ScreenshotsSection, { copy: hydratedCopy }),
      h(FeaturesSection, { copy: hydratedCopy }),
      h(StrategySection, { copy: hydratedCopy }),
      h(CreatorSection, { copy: hydratedCopy }),
      h(FAQSection, { copy: hydratedCopy }),
      h(FooterSection, { copy: hydratedCopy })
    )
  );
}

createRoot(document.getElementById("root")).render(h(App, null));
