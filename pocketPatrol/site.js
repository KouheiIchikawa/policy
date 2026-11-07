(() => {
  const messages = {
  "home.metaTitle": {
    "ja": "POCKET PATROL 境界の向こうへ | 無料の弾幕シューティング",
    "en": "POCKET PATROL | Free Portrait Bullet-Hell Shooter"
  },
  "home.metaDescription": {
    "ja": "フルボイスの物語と弾幕バトルを楽しむAndroid向け縦画面シューティング『POCKET PATROL 境界の向こうへ』。シンプル操作でハイスコアに挑戦。完全無料・アプリ内課金なし。Google Playで配信中。",
    "en": "Play POCKET PATROL, a free portrait bullet-hell shooter for Android with full voice acting, simple controls and leaderboards. No in-app purchases."
  },
  "download.androidLabel": {
    "ja": "Google PlayでPOCKET PATROLをダウンロード（新しいタブで開きます）",
    "en": "Get POCKET PATROL on Google Play (opens in a new tab)"
  },
  "download.action": {
    "ja": "無料でダウンロード <span aria-hidden=\"true\">↗</span>",
    "en": "Download for free <span aria-hidden=\"true\">↗</span>"
  },
  "download.title": {
    "ja": "さあ、その手で境界を越えよう。",
    "en": "Ready to cross the boundary?"
  },
  "download.note": {
    "ja": "完全無料・アプリ内課金なし。広告が表示されます。",
    "en": "Free to play. No in-app purchases. Contains ads."
  },
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
    "ja": "更新日：2026年11月5日",
    "en": "Last updated: November 5, 2026"
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
  },
  "nav.cookies": {
    "ja": "Cookie設定",
    "en": "Cookie settings"
  },
  "cookie.title": {
    "ja": "アクセス解析用Cookie",
    "en": "Website analytics cookies"
  },
  "cookie.body": {
    "ja": "このWebサイトでは、許可した場合のみGoogle Analyticsを使い、閲覧ページや操作、端末・ブラウザー情報をGoogleに送信してサイトの改善に役立てます。許可しなくてもサイトを利用できます。選択は後からCookie設定で変更できます。",
    "en": "With your permission, this website uses Google Analytics to send page visits, interactions, and device/browser information to Google to help improve the site. You can use the site without allowing analytics and change your choice in Cookie settings at any time."
  },
  "cookie.deny": {
    "ja": "許可しない",
    "en": "Do not allow"
  },
  "cookie.allow": {
    "ja": "許可する",
    "en": "Allow analytics"
  },
  "cookie.close": {
    "ja": "閉じる",
    "en": "Close"
  },
  "policy.web.title": {
    "ja": "Webサイトのアクセス解析",
    "en": "Website analytics"
  },
  "policy.web.body": {
    "ja": "この公式Webサイトでは、利用者が許可した場合に限りGoogle Analytics 4（Google LLC）を読み込み、アクセス解析用Cookieを使用します。閲覧ページ、リンクの操作、参照元、端末・ブラウザー情報、おおよその地域などを、サイトの利用状況の把握と改善のためGoogleに送信します。IPアドレスは通信時にGoogleに提供されます。このWeb計測ではGoogleシグナルと広告のパーソナライズ用シグナルを無効にし、ゲーム内のアカウント情報は送信しません。",
    "en": "This official website loads Google Analytics 4 (Google LLC) and uses analytics cookies only if you allow it. Page visits, link interactions, referrers, device/browser information and approximate region are sent to Google to understand and improve website use. Your IP address is provided to Google when connecting. Google signals and advertising personalization signals are disabled for this web measurement, and it does not send your in-game account information."
  },
  "policy.web.choice": {
    "ja": "許可する前や「許可しない」を選んだ場合、このサイトのGoogle Analyticsタグは読み込まれず、アクセス解析用Cookieは作成されません。言語とCookieの選択はブラウザー内に保存します。Cookieの選択とアクセス解析用Cookieの有効期間は最長180日です。フッターの「Cookie設定」で許可を取り消すと、このサイトが設定したアクセス解析用Cookieを削除し、その後の計測を停止します。すでに送信された記録はGoogleの方針と本サービスの保持設定に従って管理されます。",
    "en": "Before you allow analytics, or if you choose “Do not allow,” this site does not load its Google Analytics tag or create analytics cookies. Your language and cookie choice are stored in your browser. Cookie choices and analytics cookies last for up to 180 days. Withdrawing permission in the footer’s “Cookie settings” deletes the analytics cookies set by this site and stops subsequent measurement. Previously sent records remain subject to Google’s policies and this service’s retention settings."
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
    document.title = page === 'home' ? messages['home.metaTitle'][locale] : 'POCKET PATROL | ' + label;
    const description = page === 'home' ? messages['home.metaDescription'][locale] : messages['privacy.lead'][locale];
    document.querySelector('meta[name=description]').content = description;
    document.querySelector('meta[property="og:title"]').content = document.title;
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.content = description;
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

