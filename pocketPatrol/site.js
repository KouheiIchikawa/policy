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
    "ja": "あなたの記録を、<br>あなたのために。",
    "en": "Your progress.<br>Your choices."
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
  "policy.contact.title": {
    "ja": "運営とお問い合わせ",
    "en": "Operator and contact"
  },
  "updated": {
    "ja": "更新日：2026年11月1日",
    "en": "Last updated: November 1, 2026"
  },
  "policy.local.body": {
    "ja": "進行状況、設定、図鑑、端末内の成績は端末内に保存します。これらの情報は、ランキングへの送信を除き、通常のゲーム進行のためにサーバーへ送信しません。",
    "en": "Progress, settings, collection records and local scores are stored on your device. Apart from leaderboard submissions, these records are not sent to a server for ordinary gameplay."
  },
  "policy.ranking.body": {
    "ja": "Android版1.0.51以降はGoogle Play Games、今後のiPhone版はGame Centerのランキングを利用します。参加時は各サービスで認証し、クリア／ゲームオーバー時の得点を送信します。SDKはプレイヤー識別子やプロフィール、接続に必要な情報を各社の方針に従って処理します。Google Play Games SDKは、サービスの安定性・品質改善のため利用状況と診断情報も収集します。ランキングはOS別で、進行状況の端末間同期はありません。旧版1.0.50以前はFirebaseの匿名ID、得点、任意名（8文字まで）、選択地域、面、難易度、機体、結果、日時、プレイ識別子を扱っていました。旧サービスは移行に伴い終了予定で、旧記録を新ランキングへ自動移行しません。",
    "en": "Android 1.0.51 and later use Google Play Games; the upcoming iPhone version uses Game Center. Participating authenticates with that provider and sends your settled Clear/Game Over score. The SDK processes player identifiers, profiles and connection information under the provider’s policies. The Google Play Games SDK also collects usage analytics and diagnostic information to improve service stability and quality. Rankings are separate by platform; campaign progress is not synced across devices. Versions up to 1.0.50 used Firebase guest IDs, scores, optional names of up to eight characters, selected regions, stages, difficulty, craft, results, times and run IDs. That legacy service is being retired; its records are not automatically moved to the new boards."
  },
  "policy.ranking.public": {
    "ja": "新ランキングでは各サービスのプレイヤー名・プロフィールと得点が、プロフィールの公開設定に従って表示されます。独自の8文字名や都道府県の入力はありません。旧Firebaseランキングでは名前・地域・得点・面・難易度・機体・結果・日時が公開され、匿名ID等も配信データに含まれます。GPSで地域は取得しません。ランキングを使わずにゲームを遊べます。",
    "en": "New boards show the platform player name/profile and score according to profile visibility settings. There is no separate eight-character name or region form. Legacy Firebase records publicly included name, region, score, stage, difficulty, craft, result and time, with anonymous identifiers in the distributed data. GPS is not used. You can play without using leaderboards."
  },
  "policy.services.body": {
    "ja": "ランキングと認証にはGoogle Play Games／Apple Game Centerを使用します。各社はセキュリティやサービス提供のために情報を処理します。旧版の互換運用ではFirebase AuthenticationとRealtime Databaseを利用します。通信は暗号化されます。詳しくはGoogleおよびAppleのプライバシー方針をご確認ください。",
    "en": "Leaderboards and authentication use Google Play Games or Apple Game Center. These providers process information to deliver and secure their services. Legacy-version compatibility uses Firebase Authentication and Realtime Database. Connections are encrypted. Please also review Google’s and Apple’s privacy policies."
  },
  "policy.services.sdk": {
    "ja": "広告対応版1.0.52以降は、ステージ間・コンティニュー時にGoogle AdMobの全画面広告を表示します。Googleの広告SDKはIPアドレス（概算位置の推定を含む）、端末・アカウント識別子、広告への操作、広告データ、利用状況・診断情報などを広告配信・分析・不正防止のため収集・共有します。必要な地域ではGoogle UMPによる同意画面を表示し、必要な場合はゲーム内のプライバシー画面から選択を変更できます。確認用Android APKにはテスト広告を表示します。1.0.51以前には広告SDKは含まれません。アプリ内購入はありません。",
    "en": "Ad-supported versions 1.0.52 and later show Google AdMob interstitial ads between stages and on Continue. Google’s advertising SDK collects and shares IP addresses (including approximate location inference), device/account identifiers, ad interactions, advertising data, usage and diagnostics for advertising, analytics and fraud prevention. Google UMP requests consent where required; when applicable, choices can be changed from the in-game Privacy screen. Android verification APKs display test ads. Versions through 1.0.51 do not include the advertising SDK. There are no in-app purchases."
  },
  "policy.retention.body": {
    "ja": "ランキングの記録はGoogle Play Games／Game Centerで管理し、保持・削除は各サービスの方針に従います。Google Play Gamesのゲームデータはプロフィール設定から削除できます。Game Centerや旧Firebaseの記録については、下のお問い合わせ先へご連絡ください。旧Firebase記録は移行対応のため保持しています。アンインストールでは端末内のデータが削除されますが、各サービスの記録は自動では削除されません。",
    "en": "Leaderboard records are managed by Google Play Games or Game Center under each service’s retention and deletion policies. Google Play Games data can be deleted through your profile settings. For Game Center or legacy Firebase records, use the contact link below. Legacy Firebase records are retained during migration. Uninstalling removes local data but does not automatically delete records held by these services."
  },
  "policy.contact.body": {
    "ja": "本ポリシーは「POCKET PATROL 境界の向こうへ」（Androidパッケージ：jp.kouheielimilab.pocketpatrol）に適用します。運営：Kouhei Elimi Lab（Google Play上の開発者表記：Kohei Elimi Lab）。ご質問はXの @sio_sio_bull へご連絡ください。",
    "en": "This policy applies to POCKET PATROL (Android package: jp.kouheielimilab.pocketpatrol). Operated by Kouhei Elimi Lab, listed as Kohei Elimi Lab on Google Play. For questions, contact @sio_sio_bull on X."
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
    const description = page === 'home' ? messages['home.about'][locale] : page === 'privacy' ? messages['policy.contact.body'][locale] : messages['policy.contact.body'][locale];
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
