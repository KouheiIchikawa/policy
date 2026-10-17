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
    "ja": "撃破して埋まる図鑑、物語の分岐、全国上位1000件の得点ランキング。合間のミニゲームで、ちょっと息抜き。",
    "en": "Build your collection through battle, discover branching endings and chase a place in the top-1,000 national leaderboard. Take a breather with short arcade intermissions."
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
    "ja": "更新日：2026年10月17日",
    "en": "Last updated: October 17, 2026"
  },
  "policy.local.body": {
    "ja": "進行状況、設定、図鑑、端末内の成績は端末内に保存します。これらの情報は、ランキングへの送信を除き、通常のゲーム進行のためにサーバーへ送信しません。",
    "en": "Progress, settings, collection records and local scores are stored on your device. Apart from leaderboard submissions, these records are not sent to a server for ordinary gameplay."
  },
  "policy.ranking.body": {
    "ja": "全国ランキングへの登録を希望する場合、Firebaseの匿名認証識別子、得点、任意の表示名（8文字まで）、任意に選択した都道府県、到達面、難易度、機体、クリア／ゲームオーバー、登録日時、プレイ識別子を送信します。安全な書き込みのため、ゲスト認証情報を作成して端末に保存します。メールアドレスやパスワードによる会員登録はありません。",
    "en": "If you choose to submit a national leaderboard score, we send an anonymous Firebase user ID, score, optional display name (up to eight characters), optional manually selected Japanese region, stage, difficulty, craft, clear/game-over result, submission time and run ID. Guest credentials are created and stored on your device for secure writes. There is no email/password account registration."
  },
  "policy.ranking.public": {
    "ja": "表示名、選択地域、得点、面、難易度、機体、結果、登録日時は公開されます。匿名識別子とプレイ識別子も配信データに含まれます。表示名に本名や正確な住所を入力しないでください。GPSで地域は取得しません。ランキングへの登録は任意で、登録せずに遊べます。",
    "en": "Display names, selected regions, scores, stages, difficulties, crafts, results and submission times are public. Anonymous IDs and run IDs are also included in downloadable records. Do not use your real name or precise address as a display name. We do not obtain regions from GPS. Leaderboard submission is optional; you can play without submitting."
  },
  "policy.services.body": {
    "ja": "ランキングの提供、不正な重複登録の抑止、認証およびサービス保護に使用します。GoogleのFirebase AuthenticationとRealtime DatabaseへHTTPSで送信します。GoogleはIPアドレス等をセキュリティ目的で処理する場合があります。",
    "en": "We use this data to provide the leaderboard, prevent duplicate abuse, authenticate submissions and protect the service. Data is sent over HTTPS to Google Firebase Authentication and Realtime Database. Google may process IP addresses and related information for security."
  },
  "policy.services.sdk": {
    "ja": "本バージョンに広告SDK、広告IDの取得、アプリ内購入、行動分析SDKは含まれません。情報の販売は行いません。",
    "en": "This release includes no advertising SDK, advertising ID access, in-app purchases or behavioral analytics SDK. We do not sell your data."
  },
  "policy.retention.body": {
    "ja": "公開ランキングは上位1000件を保持し、入れ替えや定期整理で記録が削除される場合があります。ランキングから外れる時期は保証されません。認証情報は削除のお問い合わせまたは運用上不要になるまで保持する場合があります。端末内データはOSのアプリデータ消去やアンインストールで削除できますが、サーバー側の記録は自動では削除されません。",
    "en": "The public leaderboard retains the top 1,000 scores. Records may be replaced or removed during periodic maintenance; we cannot guarantee when an individual record will leave the board. Guest identities may be retained until deletion is requested or they are no longer needed. Clearing app data or uninstalling removes local records but does not automatically delete server data."
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
    "ja": "ランキングの記録も、<br>ゲスト情報も。",
    "en": "Manage your leaderboard records<br>and guest identity."
  },
  "delete.summary": {
    "ja": "ランキング記録のみの削除、またはゲスト認証情報を含む削除について、Xからお問い合わせいただけます。ゲームを削除しただけでは、サーバー側の記録は消えません。",
    "en": "Contact us on X to remove leaderboard records only, or both your records and guest authentication identity. Uninstalling the game does not delete server records."
  },
  "delete.step0.title": {
    "ja": "削除したい範囲を確認",
    "en": "Choose what to remove"
  },
  "delete.step0.body": {
    "ja": "ランキング記録のみ、またはゲスト認証情報を含む削除のどちらを希望するか確認してください。端末内の進行データを消す必要はありません。",
    "en": "Choose whether to remove leaderboard records only or also your guest identity. You do not need to erase your local campaign progress."
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
    "ja": "本人の記録であることを確認後、希望する範囲のランキング記録・ゲスト認証データを原則30日以内に削除します。追加の確認や時間が必要な場合はご連絡します。",
    "en": "After verifying that the records belong to you, we normally delete the requested leaderboard records and/or guest identity within 30 days. We will contact you if further verification or more time is needed."
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
    "ja": "ランキングIDはアプリの「設定 → プライバシー」で確認できます。表示名・得点・登録日時も手がかりになります。IDだけを本人確認の証明とはしません。公開ポストにはランキングIDや個人情報を書かず、パスワードや認証トークンはどの方法でも送らないでください。",
    "en": "Find your leaderboard ID in Settings → Privacy. Your display name, score and submission date may also help. An ID alone is not proof of ownership. Do not post IDs or personal information publicly, and never send passwords or authentication tokens."
  },
  "delete.retention": {
    "ja": "お問い合わせ内容は、対応と不正防止に必要な期間保持します。X上のメッセージはXの取り扱い方針にも従います。バックアップやGoogle側の安全対策用ログは各サービスの保持方針に従います。",
    "en": "Support correspondence is retained as needed to resolve requests and prevent abuse. Messages on X are also subject to X’s policies. Service backups and Google security logs follow the providers’ retention policies."
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
