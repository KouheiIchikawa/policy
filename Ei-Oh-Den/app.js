import React, { useEffect, useState } from "https://esm.sh/react@18.3.1";
import { createRoot } from "https://esm.sh/react-dom@18.3.1/client";

const h = React.createElement;
const storageKey = "ei-oh-den-language";
const defaultLanguage = "en";
const imagePath = "./images/nankatukaitai001.png";
const heroImagePath = "./images/shuugou.png";
const logoPath = "./images/icon_original.png";
const duckPath = "./images/ahiru_ninja.png";
const butterflyPath = "./images/choucho_ninja.png";
const equippedPath = "./images/Equipped.png";
const appStoreBadgePath = "../common/appstore_badge.svg";
const googlePlayBadgePath = "../common/Google_Play_Badge_JA.svg";
const petals = Array.from({ length: 28 }, (_, index) => index + 1);
const lights = Array.from({ length: 8 }, (_, index) => index + 1);

const sectionOrder = [
  { id: "intro", wide: false },
  { id: "dataCollection", wide: false },
  { id: "permissions", wide: false },
  { id: "thirdParty", wide: false },
  { id: "contact", wide: false, contact: true },
  { id: "lastUpdated", wide: true }
];

function iconBase(paths, viewBox = "0 0 24 24") {
  return function Icon() {
    return h(
      "svg",
      {
        viewBox,
        width: "1em",
        height: "1em",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.8",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true"
      },
      ...paths
    );
  };
}

const ShrineIcon = iconBase([
  h("path", { d: "M4.5 9.5h15", key: "a" }),
  h("path", { d: "M6.2 9.5 8 18", key: "b" }),
  h("path", { d: "M17.8 9.5 16 18", key: "c" }),
  h("path", { d: "M8.8 9.5v8.5", key: "d" }),
  h("path", { d: "M15.2 9.5v8.5", key: "e" }),
  h("path", { d: "M3.5 7.2 12 4l8.5 3.2", key: "f" })
]);

const SparkleIcon = iconBase([
  h("path", { d: "M12 3.5 13.6 9 19 10.5l-5.4 1.5L12 17.5 10.4 12 5 10.5 10.4 9 12 3.5Z", key: "a" }),
  h("path", { d: "M18.5 5.5 19 7l1.5.5-1.5.5-.5 1.5-.5-1.5L16 7.5l1.5-.5.5-1.5Z", key: "b" })
]);

const FlowerIcon = iconBase([
  h("circle", { cx: "12", cy: "12", r: "1.4", key: "a" }),
  h("path", { d: "M12 4.8c1.4.9 2.1 1.9 2.1 3S13.4 9.8 12 9.8s-2.1-.9-2.1-2S10.6 5.7 12 4.8Z", key: "b" }),
  h("path", { d: "M19.2 12c-.9 1.4-1.9 2.1-3 2.1S14.2 13.4 14.2 12s.9-2.1 2-2.1 2.1.7 3 2.1Z", key: "c" }),
  h("path", { d: "M12 19.2c-1.4-.9-2.1-1.9-2.1-3s.9-2 2.1-2 2.1.9 2.1 2-.7 2.1-2.1 3Z", key: "d" }),
  h("path", { d: "M4.8 12c.9-1.4 1.9-2.1 3-2.1s2 .7 2 2.1-.9 2.1-2 2.1-2.1-.7-3-2.1Z", key: "e" })
]);

const ShieldIcon = iconBase([
  h("path", { d: "M12 3.6 18.2 6v5.2c0 4-2.1 6.6-6.2 8.8-4.1-2.2-6.2-4.8-6.2-8.8V6L12 3.6Z", key: "a" }),
  h("path", { d: "m9.4 11.8 1.7 1.8 3.6-3.8", key: "b" })
]);

const FanIcon = iconBase([
  h("path", { d: "M12 13.5c-2.9 0-5.3 1.3-7.1 3.8 2.8.7 5.2 1 7.1 1s4.3-.3 7.1-1c-1.8-2.5-4.2-3.8-7.1-3.8Z", key: "a" }),
  h("path", { d: "M12 13.5V6.2", key: "b" }),
  h("path", { d: "M8.2 14.2 6.6 8.8", key: "c" }),
  h("path", { d: "M15.8 14.2 17.4 8.8", key: "d" })
]);

const LanternIcon = iconBase([
  h("path", { d: "M12 3.5v2", key: "a" }),
  h("path", { d: "M8 6.8h8l-1 9H9l-1-9Z", key: "b" }),
  h("path", { d: "M9 10h6", key: "c" }),
  h("path", { d: "M9.6 13h4.8", key: "d" }),
  h("path", { d: "M10.5 15.8v3h3v-3", key: "e" })
]);

const ScrollIcon = iconBase([
  h("path", { d: "M8.4 4.8h7A2.6 2.6 0 0 1 18 7.4v10.1H9.5A2.5 2.5 0 0 1 7 15V6.2a1.4 1.4 0 0 1 1.4-1.4Z", key: "a" }),
  h("path", { d: "M9.4 8.4h5.4", key: "b" }),
  h("path", { d: "M9.4 11.2h5.4", key: "c" }),
  h("path", { d: "M9.4 14h3.8", key: "d" })
]);

const ClockIcon = iconBase([
  h("circle", { cx: "12", cy: "12", r: "8", key: "a" }),
  h("path", { d: "M12 7.8v4.7l3.1 1.9", key: "b" })
]);

const LinkIcon = iconBase([
  h("path", { d: "M10 14 14 10", key: "a" }),
  h("path", { d: "M8.5 16.5H7a3 3 0 0 1 0-6h1.5", key: "b" }),
  h("path", { d: "M15.5 7.5H17a3 3 0 0 1 0 6h-1.5", key: "c" })
]);

const sectionIcons = {
  intro: ShrineIcon,
  dataCollection: ShieldIcon,
  permissions: FanIcon,
  thirdParty: LanternIcon,
  contact: ScrollIcon,
  lastUpdated: ClockIcon
};

function detectLanguage() {
  const saved = window.localStorage.getItem(storageKey);
  if (saved === "ja" || saved === "en") {
    return saved;
  }
  const browserLanguage = (navigator.language || defaultLanguage).toLowerCase();
  return browserLanguage.startsWith("ja") ? "ja" : defaultLanguage;
}

async function loadMessages(language) {
  const normalized = language === "ja" ? "ja" : "en";
  const response = await fetch(`./i18n/${normalized}.json`, { cache: "no-cache" });
  if (!response.ok) {
    throw new Error(`Failed to load ${normalized}`);
  }
  return response.json();
}

function EffectLayer() {
  return h(
    React.Fragment,
    null,
    h("img", { className: "page-watermark", src: imagePath, alt: "", "aria-hidden": "true" }),
    h(
      "div",
      { className: "petals", "aria-hidden": "true" },
      ...petals.map((n) => h("span", { key: `petal-${n}`, className: `petal petal-${n}` }))
    ),
    h(
      "div",
      { className: "lights", "aria-hidden": "true" },
      ...lights.map((n) => h("span", { key: `light-${n}`, className: `light light-${n}` }))
    ),
    h("img", { className: "duck-orbit", src: duckPath, alt: "", "aria-hidden": "true" }),
    h("img", { className: "butterfly-orbit", src: butterflyPath, alt: "", "aria-hidden": "true" })
  );
}

function LanguageToggle({ language, labels, onChange }) {
  return h(
    "div",
    { className: "lang-switcher", role: "group", "aria-label": "Language toggle" },
    h(
      "button",
      {
        type: "button",
        className: language === "en" ? "lang-pill is-active" : "lang-pill",
        onClick: () => onChange("en")
      },
      labels.en
    ),
    h(
      "button",
      {
        type: "button",
        className: language === "ja" ? "lang-pill is-active" : "lang-pill",
        onClick: () => onChange("ja")
      },
      labels.ja
    )
  );
}

function Divider() {
  return h(
    "div",
    { className: "divider", "aria-hidden": "true" },
    h("span", { className: "divider-mark side" }, h(FlowerIcon, null)),
    h("span", { className: "divider-line" }),
    h("span", { className: "divider-mark center" }, h(FlowerIcon, null)),
    h("span", { className: "divider-line" }),
    h("span", { className: "divider-mark side" }, h(FlowerIcon, null))
  );
}

function Hero({ copy, language, onLanguageChange }) {
  return h(
    "section",
    { className: "hero" },
    h("div", { className: "hero-paper" }),
    h("img", { className: "hero-watermark", src: imagePath, alt: "", "aria-hidden": "true" }),
    h(LanguageToggle, { language, labels: { en: "English", ja: "日本語" }, onChange: onLanguageChange }),
    h(
      "div",
      { className: "hero-brand" },
      h("img", { className: "brand-emblem", src: logoPath, alt: "Kagezakura Den icon" })
    ),
    h(
      "div",
      { className: "hero-grid" },
      h(
        "div",
        { className: "hero-copy" },
        h("h1", null, copy.title),
        h("p", { className: "app-name" }, copy.appName),
        h("p", { className: "lead" }, copy.lead),
        h("div", { className: "statement-pill" }, h(SparkleIcon, null), copy.highlight)
      ),
      h(
        "div",
        { className: "hero-visual" },
        h("div", { className: "hero-visual-glow" }),
        h("img", { className: "hero-image", src: heroImagePath, alt: "Ei-Oh-Den character group illustration" })
      )
    )
  );
}

function ContactActions(copy) {
  return h(
    "div",
    { className: "contact-actions" },
    h(
      "a",
      { className: "contact-link", href: copy.contactUrl, target: "_blank", rel: "noreferrer" },
      h(LinkIcon, null),
      copy.contactLabel
    ),
    h("div", { className: "store-link appstore-link" }, h("img", { className: "store-badge appstore-badge", src: appStoreBadgePath, alt: "Download on the App Store" })),
    h("div", { className: "store-link playstore-link" }, h("img", { className: "store-badge playstore-badge", src: googlePlayBadgePath, alt: "Get it on Google Play" }))
  );
}

function MascotPanel({ copy }) {
  return h(
    "aside",
    { className: "contact-mascot-panel", "aria-hidden": "true" },
    h("img", { className: "mascot-frame mascot-duck", src: duckPath, alt: "" }),
    h("span", { className: "speech-bubble duck-bubble" }, copy.duckBubble),
    h(
      "div",
      { className: "mascot-butterfly-wrap" },
      h("img", { className: "mascot-frame mascot-butterfly", src: butterflyPath, alt: "" }),
      h("span", { className: "speech-bubble fight-bubble" }, copy.fightBubble)
    )
  );
}

function SectionCard({ sectionId, copy, contact }) {
  const section = copy.sections[sectionId];
  const Icon = sectionIcons[sectionId];
  const isLastUpdated = sectionId === "lastUpdated";
  const children = [
    h(
      "h2",
      { key: `${sectionId}-heading`, className: "card-heading" },
      h("span", { className: "icon-badge" }, h(Icon, null)),
      section.title
    ),
    ...section.body.map((paragraph, bodyIndex) => h("p", { key: `${sectionId}-${bodyIndex}` }, paragraph))
  ];

  if (section.pills) {
    children.push(
      h(
        "div",
        { key: `${sectionId}-pills`, className: "pill-row" },
        ...section.pills.map((pill) => h("span", { key: pill, className: "mini-pill" }, h(FlowerIcon, null), pill))
      )
    );
  }

  if (contact) {
    children.push(
      h(
        "div",
        { key: `${sectionId}-contact`, className: "contact-box" },
        h(ContactActions, copy),
        h("span", { className: "contact-note" }, copy.contactNote)
      )
    );
  }

  if (!contact && !isLastUpdated) {
    children.push(h("img", { key: `${sectionId}-seal`, className: "corner-seal", src: equippedPath, alt: "", "aria-hidden": "true" }));
  }

  return h("article", { className: contact ? "policy-card contact-card" : "policy-card" }, ...children);
}

function ContentGrid({ copy }) {
  return h(
    "section",
    { className: "cards-grid", "aria-label": copy.detailsLabel },
    ...sectionOrder.flatMap((item) => {
      if (item.contact) {
        return [
          h(
            "div",
            { key: item.id, className: item.wide ? "card-slot is-wide" : "card-slot" },
            h(SectionCard, { sectionId: item.id, copy, contact: true })
          ),
          h(
            "div",
            { key: "contact-mascot", className: "card-slot mascot-slot" },
            h(MascotPanel, { copy })
          )
        ];
      }

      return [
        h(
          "div",
          { key: item.id, className: item.wide ? "card-slot is-wide" : "card-slot" },
          h(SectionCard, { sectionId: item.id, copy, contact: false })
        )
      ];
    })
  );
}

function LoadingState(message) {
  return h(
    React.Fragment,
    null,
    h(EffectLayer, null),
    h(
      "main",
      { className: "page-shell" },
      h("section", { className: "hero loading-card" }, h("p", { className: "lead" }, message))
    )
  );
}

function App() {
  const [language, setLanguage] = useState(detectLanguage);
  const [copy, setCopy] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    loadMessages(language)
      .then((messages) => {
        if (cancelled) {
          return;
        }
        setCopy(messages);
        setError(false);
        document.title = messages.pageTitle;
        document.documentElement.lang = messages.htmlLang;
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

  if (!copy && !error) {
    return LoadingState("Loading privacy policy...");
  }

  if (error) {
    return LoadingState("Failed to load privacy policy content.");
  }

  return h(
    React.Fragment,
    null,
    h(EffectLayer, null),
    h(
      "main",
      { className: "page-shell" },
      h(Hero, { copy, language, onLanguageChange: setLanguage }),
      h(Divider, null),
      h(ContentGrid, { copy }),
      h("p", { className: "footer" }, copy.footer)
    )
  );
}

createRoot(document.getElementById("root")).render(h(App, null));


