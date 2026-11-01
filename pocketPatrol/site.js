(() => {
  const messages = {
  "nav.home": {
    "ja": "公式サイト",
    "en": "Official site"
  },
  "nav.privacy": {
    "ja": "プライバシー",
    "en": "Privacy"
  },
  "nav.privacyFull": {
    "ja": "プライバシーポリシー",
    "en": "Privacy policy"
  },
  "nav.contact": {
    "ja": "お問い合わせ",
    "en": "Contact"
  },
  "contact.button": {
    "ja": "お問い合わせはこちら",
    "en": "Contact us"
  },
  "hero.alt": {
    "ja": "ボルト、フレア、リーフ。青・橙・緑の3機とPOCKET PATROLのロゴ",
    "en": "Volt, Flare and Leaf: three small machines and the POCKET PATROL logo"
  },
  "home.title": {
    "ja": "迫る弾幕をかわし、<br>アーツで切り抜けろ！",
    "en": "Dodge the barrage.<br>Strike back with Arts!"
  },
  "home.lead": {
    "ja": "フルボイスの物語 × 迫力の弾幕。",
    "en": "Full voice acting. Intense bullet-hell action."
  },
  "home.about": {
    "ja": "完全無料・アプリ内課金なしで楽しめる、縦画面シューティング。",
    "en": "A portrait shooter you can enjoy for free, with no in-app purchases."
  },
  "pill.0": {
    "ja": "フルボイス",
    "en": "Full voice acting"
  },
  "pill.1": {
    "ja": "シンプル操作",
    "en": "Simple controls"
  },
  "pill.2": {
    "ja": "ランキング",
    "en": "Leaderboards"
  },
  "pill.3": {
    "ja": "完全無料",
    "en": "Free to play"
  },
  "feature.0.title": {
    "ja": "画面いっぱいの弾幕バトル",
    "en": "Brave the bullet hell"
  },
  "feature.0.body": {
    "ja": "押し寄せる敵、立ちはだかるボス。弾幕の隙間をすり抜け、ここぞのアーツで一気に反撃！",
    "en": "Face waves of enemies and powerful bosses. Slip through the barrage, then turn the tide with a well-timed Art!"
  },
  "feature.1.title": {
    "ja": "シンプル操作で気軽に挑戦",
    "en": "Simple controls, instant action"
  },
  "feature.1.body": {
    "ja": "射撃はオート。レバー移動とアーツの操作で、弾幕をかわす楽しさに集中できる。",
    "en": "Automatic shooting lets you focus on movement and Arts. Get straight to the thrill of dodging enemy fire."
  },
  "feature.2.title": {
    "ja": "目指せ、ランキング上位！",
    "en": "Climb the leaderboards"
  },
  "feature.2.body": {
    "ja": "腕を磨いてハイスコアを更新。ランキングで、さらなる高みを目指そう！",
    "en": "Sharpen your skills, beat your best score and aim for the top!"
  },
  "screens.title": {
    "ja": "その手で、境界を越えろ。",
    "en": "Cross the boundary yourself."
  },
  "screens.note": {
    "ja": "ゲームプレイ画面",
    "en": "Gameplay screens"
  },
  "screens.0": {
    "ja": "境界地帯の戦い",
    "en": "Battle at the boundary"
  },
  "caption.0": {
    "ja": "01 — 境界地帯の戦い",
    "en": "01 — Battle at the boundary"
  },
  "screens.1": {
    "ja": "ボスとの対峙",
    "en": "Face the boss"
  },
  "caption.1": {
    "ja": "02 — ボスとの対峙",
    "en": "02 — Face the boss"
  },
  "screens.2": {
    "ja": "相棒を選ぶ",
    "en": "Choose your partner"
  },
  "caption.2": {
    "ja": "03 — 相棒を選ぶ",
    "en": "03 — Choose your partner"
  },
  "privacy.title": {
    "ja": "プライバシーポリシー",
    "en": "Privacy policy"
  },
  "privacy.lead": {
    "ja": "POCKET PATROLにおける情報の取り扱いについて。",
    "en": "How POCKET PATROL handles information."
  },
  "contents": {
    "ja": "このページの内容",
    "en": "On this page"
  },
  "policy.local.title": {
    "ja": "端末に保存する情報",
    "en": "On your device"
  },
  "policy.ranking.title": {
    "ja": "ランキングで扱う情報",
    "en": "Leaderboard data"
  },
  "policy.services.title": {
    "ja": "利用目的と外部サービス",
    "en": "Purpose and external services"
  },
  "policy.retention.title": {
    "ja": "保持期間と削除",
    "en": "Retention and deletion"
  },
  "updated": {
    "ja": "更新日：2026年11月1日",
    "en": "Last updated: November 1, 2026"
  },
  "policy.local.body": {
    "ja": "ゲームの進行状況や設定は端末内に保存します。",
    "en": "Game progress and settings are stored on your device."
  },
  "policy.ranking.body": {
    "ja": "ランキングにはGoogle Play Games／Game Centerを利用し、プレイヤー識別子、プロフィール、得点、プレイ記録を処理します。プレイヤー名や得点は、各サービスの公開設定に従って表示されます。Google Play Gamesは、品質改善のため利用状況や診断情報も処理します。",
    "en": "Leaderboards use Google Play Games or Game Center to process player identifiers, profiles, scores and gameplay records. Player names and scores are displayed according to each service’s visibility settings. Google Play Games also processes usage and diagnostic information to improve service quality."
  },
  "policy.services.body": {
    "ja": "ランキング・認証にGoogle Play Games／Game Centerを、旧版ではFirebaseを利用します。これらのサービスは機能の提供と安全性の確保のために情報を処理します。",
    "en": "Google Play Games and Game Center provide leaderboards and authentication. Older versions use Firebase. These services process information to provide their features and maintain security."
  },
  "policy.services.sdk": {
    "ja": "広告配信にGoogle AdMobを利用します。広告SDKは、IPアドレス（概算位置を含む）、端末等の識別子、広告への操作、利用状況・診断情報を、広告配信・分析・不正防止のため収集・共有します。必要な地域では同意を確認し、該当する場合はアプリ内で選択を変更できます。",
    "en": "Advertising uses Google AdMob. Its SDK collects and shares IP addresses (including approximate location), device and related identifiers, ad interactions, usage and diagnostics for advertising, analytics and fraud prevention. Consent is requested where required, and applicable choices can be changed in the app."
  },
  "policy.retention.body": {
    "ja": "情報はサービス提供に必要な期間保持し、外部サービスの記録は各社の方針に従って管理します。データの削除は各サービスの設定、またはフッターのXからお問い合わせください。",
    "en": "Information is retained for as long as needed to provide the service. Records held by external services are managed under their policies. For deletion, use the relevant service’s settings or contact us through the X link in the footer."
  }
};
  const storageKey = 'pocketpatrol.locale';
  function storedLocale() { try { return localStorage.getItem(storageKey); } catch { return null; } }
  function requestedLocale() {
    const hash = location.hash.slice(1);
    if (['en','english'].includes(hash)) return 'en';
    if (hash === 'ja') return 'ja';
    const query = new URLSearchParams(location.search).get('lang');
    if (['ja','en'].includes(query)) return query;
    const saved = storedLocale();
    return ['ja','en'].includes(saved) ? saved : (navigator.language.startsWith('ja') ? 'ja' : 'en');
  }
  document.documentElement.lang = requestedLocale();
  function applyLocale(locale) {
    document.documentElement.lang = locale;
    try { localStorage.setItem(storageKey, locale); } catch {}
    document.querySelectorAll('[data-i18n]').forEach(node => {
      const value = messages[node.dataset.i18n]?.[locale];
      if (value === undefined) return;
      if (node.dataset.i18nAttr) node.setAttribute(node.dataset.i18nAttr, value);
      else node.innerHTML = value;
    });
    document.querySelectorAll('[data-locale]').forEach(node => {
      const active = node.dataset.locale === locale;
      node.setAttribute('aria-current', active ? 'true' : 'false');
      const url = new URL(location.href);
      url.searchParams.set('lang', node.dataset.locale);
      if (['#en','#ja','#english'].includes(url.hash)) url.hash = node.dataset.locale;
      node.href = url.pathname + url.search + url.hash;
    });
    document.querySelectorAll('[data-local-link]').forEach(node => {
      const url = new URL(node.getAttribute('href'), location.href);
      url.searchParams.set('lang', locale);
      node.href = url.pathname + url.search + url.hash;
    });
    const page = document.body.dataset.page;
    const label = page === 'privacy' ? messages['privacy.title'][locale] : locale === 'ja' ? '公式サイト' : 'Official Site';
    document.title = 'POCKET PATROL | ' + label;
    const description = page === 'home' ? messages['home.about'][locale] : messages['privacy.lead'][locale];
    document.querySelector('meta[name=description]').content = description;
    document.querySelector('meta[property="og:title"]').content = document.title;
    document.querySelector('nav').setAttribute('aria-label', locale === 'ja' ? 'サイトナビゲーション' : 'Site navigation');
  }
  document.addEventListener('DOMContentLoaded', () => {
    applyLocale(requestedLocale());
    document.querySelectorAll('[data-locale]').forEach(node => node.addEventListener('click', event => {
      event.preventDefault();
      history.replaceState(null, '', node.href);
      applyLocale(node.dataset.locale);
    }));
  });
  addEventListener('hashchange', () => {
    if (['#en','#ja','#english'].includes(location.hash)) applyLocale(requestedLocale());
  });
  addEventListener('popstate', () => applyLocale(requestedLocale()));
})();
