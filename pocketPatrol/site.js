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
  "nav.delete": {
    "ja": "データの削除について",
    "en": "Data deletion"
  },
  "nav.contact": {
    "ja": "お問い合わせ",
    "en": "Contact"
  },
  "contact.button": {
    "ja": "Xで問い合わせる",
    "en": "Contact on X"
  },
  "hero.alt": {
    "ja": "ボルト、フレア、リーフ。青・橙・緑の3機とPOCKET PATROLのロゴ",
    "en": "Volt, Flare and Leaf: three small machines and the POCKET PATROL logo"
  },
  "home.title": {
    "ja": "小さな機体で、<br>大きな運命に挑め。",
    "en": "Small machines.<br>A world worth fighting for."
  },
  "home.lead": {
    "ja": "人類がアンドロイドに武器を奪われた未来。<br>境界を越える旅に、あなたはどの希望を託す？",
    "en": "In a future where androids have seized humanity’s weapons,<br>which small hope will you take beyond the boundary?"
  },
  "home.about": {
    "ja": "ボルト、フレア、リーフ。異なる射撃とアーツを持つ3機から相棒を選び、9つの地域を進む、物語のある縦画面シューティング。敵の予兆を読み、弾幕をくぐり、次の空へ。",
    "en": "Choose Volt, Flare or Leaf, each with distinct weapons and Arts. Read enemy warnings, weave through bullet patterns and travel across nine regions in a story-driven portrait shooter."
  },
  "pill.0": {
    "ja": "縦画面",
    "en": "Portrait play"
  },
  "pill.1": {
    "ja": "自動射撃 × 移動 × ARTS",
    "en": "Auto-fire × movement × Arts"
  },
  "pill.2": {
    "ja": "日本語 / English",
    "en": "Japanese / English"
  },
  "pill.3": {
    "ja": "アプリ価格：無料",
    "en": "Free to play"
  },
  "test.title": {
    "ja": "Android クローズドテスト配信中",
    "en": "Android closed testing is live"
  },
  "test.body": {
    "ja": "招待されたテスター向けに配信しています。iOS版は準備中です。",
    "en": "Available to invited testers. The iOS version is in development."
  },
  "test.link": {
    "ja": "テスト参加ページ ↗",
    "en": "Join the closed test ↗"
  },
  "feature.0.title": {
    "ja": "同じ旅、違う戦い方。",
    "en": "One journey. Three ways to fight."
  },
  "feature.0.body": {
    "ja": "貫通、3方向、ホーミング。ジャンプ、敵弾消去、時間停止。機体ごとの得意を使って切り抜けよう。",
    "en": "Piercing shots, three-way fire or homing rounds. Jump, erase enemy bullets or stop time. Make your partner’s strengths your own."
  },
  "feature.1.title": {
    "ja": "9つの地域を越えて。",
    "en": "Beyond nine boundaries."
  },
  "feature.1.body": {
    "ja": "氷、炎、海、幻想の世界。前半戦から中ボス、後半戦からボスへ。場所と相手が変われば、攻略も変わる。",
    "en": "Ice, fire, ocean and strange worlds. Fight through each region’s opening, mid-boss, second half and boss. New places demand new tactics."
  },
  "feature.2.title": {
    "ja": "戦いの先に、記憶が残る。",
    "en": "Every encounter leaves a memory."
  },
  "feature.2.body": {
    "ja": "撃破して埋まる図鑑、物語の分岐、プラットフォーム別の得点ランキング。合間のミニゲームで、ちょっと息抜き。",
    "en": "Build your collection, discover story branches and chase platform leaderboard scores. Take a break with short bonus games."
  },
  "screens.title": {
    "ja": "その手で、境界を越えろ。",
    "en": "Cross the boundary yourself."
  },
  "screens.note": {
    "ja": "実際のゲーム画面です。開発中のため、製品版と異なる場合があります。",
    "en": "Actual gameplay screens. The game is in development; the final release may differ."
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
  "support.title": {
    "ja": "通信は、ここへ。",
    "en": "Keep in touch."
  },
  "support.body": {
    "ja": "ご質問や不具合のご相談はXへ。端末名・OS・面・起きた状況が分かると、確認がスムーズです。",
    "en": "For questions or bug reports, contact us on X. Your device, OS, stage and what happened help us investigate."
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
    "ja": "更新日：2026年10月18日",
    "en": "Last updated: October 18, 2026"
  },
  "policy.local.body": {
    "ja": "進行状況、設定、図鑑、端末内の成績は端末内に保存します。これらの情報は、ランキングへの送信を除き、通常のゲーム進行のためにサーバーへ送信しません。",
    "en": "Progress, settings, collection records and local scores are stored on your device. Apart from leaderboard submissions, these records are not sent to a server for ordinary gameplay."
  },
  "policy.ranking.body": {
    "ja": "Android版1.0.51以降はGoogle Play Games、今後のiPhone版はGame Centerのランキングを利用します。参加時は各サービスで認証し、クリア／ゲームオーバー時の得点を送信します。SDKはプレイヤー識別子やプロフィール、接続に必要な情報を各社の方針に従って処理します。ランキングはOS別で、進行状況の端末間同期はありません。旧版1.0.50以前はFirebaseの匿名ID、得点、任意名（8文字まで）、選択地域、面、難易度、機体、結果、日時、プレイ識別子を扱っていました。旧サービスは移行に伴い終了予定で、旧記録を新ランキングへ自動移行しません。",
    "en": "Android 1.0.51 and later use Google Play Games; the upcoming iPhone version uses Game Center. Participating authenticates with that provider and sends your settled Clear/Game Over score. The SDK processes player identifiers, profiles and connection information under the provider’s policies. Rankings are separate by platform; campaign progress is not synced across devices. Versions up to 1.0.50 used Firebase guest IDs, scores, optional names of up to eight characters, selected regions, stages, difficulty, craft, results, times and run IDs. That legacy service is being retired; its records are not automatically moved to the new boards."
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
    "ja": "本バージョンに広告SDK、広告IDの取得、アプリ内購入、行動分析SDKは含まれません。情報の販売は行いません。",
    "en": "This release includes no advertising SDK, advertising ID access, in-app purchases or behavioral analytics SDK. We do not sell your data."
  },
  "policy.retention.body": {
    "ja": "新ランキングの保持・公開範囲・削除は各プラットフォームの方針と設定に従います。旧Firebaseランキングの上位1000件という保存制限は新サービスには適用されません。旧記録は互換運用と削除対応のため保持し、終了時に整理します。端末内データはOSのデータ消去やアンインストールで削除できますが、クラウドの記録は自動では消えません。",
    "en": "New leaderboard retention, visibility and deletion follow each platform’s policies and settings. The old Firebase top-1,000 storage cap does not apply to the new services. Legacy records are retained for compatibility and deletion requests and will be retired with that service. Clearing app data or uninstalling removes local data, not automatically cloud records."
  },
  "policy.deleteLink": {
    "ja": "データの削除について →",
    "en": "About deleting your data →"
  },
  "policy.contact.body": {
    "ja": "本ポリシーは「POCKET PATROL 境界の向こうへ」（Androidパッケージ：jp.kouheielimilab.pocketpatrol）に適用します。運営：Kouhei Elimi Lab（Google Play上の開発者表記：Kohei Elimi Lab）。ご質問はXの @sio_sio_bull へご連絡ください。",
    "en": "This policy applies to POCKET PATROL (Android package: jp.kouheielimilab.pocketpatrol). Operated by Kouhei Elimi Lab, listed as Kohei Elimi Lab on Google Play. For questions, contact @sio_sio_bull on X."
  },
  "delete.title": {
    "ja": "データの削除",
    "en": "Your data. Your control."
  },
  "delete.lead": {
    "ja": "プレイの記録を、<br>自分で管理。",
    "en": "Take control of<br>your play records."
  },
  "delete.summary": {
    "ja": "新ランキングはGoogle Play Games／Game Centerで管理します。Googleのゲームデータ削除機能をご利用いただけるほか、Game Centerや旧Firebase記録の削除についてはXからご相談ください。アプリの削除だけではクラウドの記録は消えません。",
    "en": "New records are managed by Google Play Games or Game Center. Google provides game-data deletion controls. Contact us on X for help with Game Center records or legacy Firebase records. Uninstalling alone does not erase cloud records."
  },
  "delete.step0.title": {
    "ja": "削除したい範囲を確認",
    "en": "Choose what to remove"
  },
  "delete.step0.body": {
    "ja": "Google Play Gamesのプロフィール設定から対象ゲームのデータ削除を選べます。Game Centerの記録や旧Firebaseの得点・ゲスト情報については、対象と希望する範囲をお知らせください。端末内の進行を消す必要はありません。",
    "en": "Google Play Games profile settings let you delete data for a specific game. For Game Center or legacy Firebase scores/guest identities, tell us which records you want removed. You do not need to erase local campaign progress."
  },
  "delete.step1.title": {
    "ja": "Xで問い合わせる",
    "en": "Contact us on X"
  },
  "delete.step1.body": {
    "ja": "@sio_sio_bull へ、POCKET PATROLのデータ削除についてとお伝えください。記録の確認に必要な情報は、その後に案内する非公開の方法でお伺いします。",
    "en": "Contact @sio_sio_bull about deleting POCKET PATROL data. We will arrange a private way to exchange the information needed to identify your records."
  },
  "delete.step2.title": {
    "ja": "記録を確認して削除",
    "en": "Verify and remove"
  },
  "delete.step2.body": {
    "ja": "旧Firebase記録は本人確認後、希望する範囲を原則30日以内に削除します。Google／Appleが管理する記録は各社の削除手順・権限に従って対応し、当社がプラットフォームのアカウント全体を削除することはありません。追加確認や時間が必要な場合はご連絡します。",
    "en": "After ownership verification, we normally remove requested legacy Firebase records within 30 days. Google/Apple-managed records follow each provider’s deletion controls and permissions; we cannot delete your entire platform account on your behalf. We will contact you if further verification or time is needed."
  },
  "delete.contactTitle": {
    "ja": "まずは、お問い合わせください。",
    "en": "Let’s get in touch."
  },
  "delete.privateTitle": {
    "ja": "大切な情報は、公開せずに。",
    "en": "Keep private details private."
  },
  "delete.privateBody": {
    "ja": "新ランキングの相談ではプラットフォーム名・プレイヤー名・得点・日時をお知らせください。旧版のランキングIDは旧版の「設定 → プライバシー」で確認できます。これらの情報だけを本人確認の証明とはしません。公開投稿にIDや個人情報を書かず、パスワードや認証トークンは送らないでください。",
    "en": "For new boards, identify the platform, player name, score and date. Legacy ranking IDs are shown in Settings → Privacy in older builds. These details alone do not prove ownership. Do not publish IDs or private information, and never send passwords or authentication tokens."
  },
  "delete.retention": {
    "ja": "お問い合わせは対応と不正防止に必要な期間保持します。X上のメッセージはXの方針、各サービスの記録・バックアップ・セキュリティログはGoogle／Apple等の方針に従います。",
    "en": "Support correspondence is retained as needed to resolve requests and prevent abuse. X messages follow X’s policies; provider records, backups and security logs follow Google’s or Apple’s applicable policies."
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
    const label = page === 'privacy' ? messages['privacy.title'][locale] : page === 'delete' ? messages['nav.delete'][locale] : locale === 'ja' ? '公式サイト' : 'Official Site';
    document.title = 'POCKET PATROL | ' + label;
    const description = page === 'home' ? messages['home.about'][locale] : page === 'privacy' ? messages['policy.contact.body'][locale] : messages['delete.summary'][locale];
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
