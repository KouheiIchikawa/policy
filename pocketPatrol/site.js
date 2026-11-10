(() => {
  const messages = {
  "home.metaTitle": {
    "ja": "POCKET PATROL 境界の向こうへ | 無料の弾幕シューティング",
    "en": "POCKET PATROL | Free Portrait Bullet-Hell Shooter"
  },
  "home.metaDescription": {
    "ja": "フルボイスの物語と弾幕バトルを楽しむiOS・Android向け縦画面シューティング『POCKET PATROL 境界の向こうへ』。シンプル操作でハイスコアに挑戦。完全無料・アプリ内課金なし。App Store・Google Playで配信中。",
    "en": "Play POCKET PATROL, a free portrait bullet-hell shooter for iOS and Android with full voice acting, simple controls and leaderboards. No in-app purchases."
  },
  "download.iosLabel": {
    "ja": "App StoreでPOCKET PATROLをダウンロード（新しいタブで開きます）",
    "en": "Get POCKET PATROL on the App Store (opens in a new tab)"
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
    "ja": "更新日：2026年11月7日",
    "en": "Last updated: November 7, 2026"
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
    "ja": "情報はサービス提供に必要な期間保持し、外部サービスの記録は各社の方針に従って管理します。データの削除については、各サービスの設定をご確認いただくか、<a href=\"https://x.com/sio_sio_bull\" target=\"_blank\" rel=\"noopener noreferrer\">お問い合わせ</a>ください。",
    "en": "Information is retained for as long as needed to provide the service. Records held by external services are managed under their policies. For data deletion, check the relevant service’s settings or <a href=\"https://x.com/sio_sio_bull\" target=\"_blank\" rel=\"noopener noreferrer\">contact us</a>."
  },
  "nav.cookies": {
    "ja": "Cookie設定",
    "en": "Cookie settings"
  },
  "cookie.title": {
    "ja": "Cookieの設定",
    "en": "Cookie settings"
  },
  "cookie.body": {
    "ja": "サイト改善のため、アクセス解析用Cookieを使ってもよいですか？ 許可しなくても利用できます。",
    "en": "May we use analytics cookies to improve this site? You can use it without allowing them."
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
  },
  "nav.world": {
    "ja": "世界観・年表",
    "en": "World & timeline"
  },
  "nav.characters": {
    "ja": "登場人物",
    "en": "Characters"
  },
  "nav.arcade": {
    "ja": "ひと休み",
    "en": "Arcade break"
  },
  "badge.play": {
    "ja": "../common/Google_Play_Badge_JA.svg",
    "en": "../common/Google_Play_Badge_EN.png"
  },
  "badge.appleAlt": {
    "ja": "App Storeからダウンロード",
    "en": "Download on the App Store"
  },
  "badge.playAlt": {
    "ja": "Google Playで手に入れよう",
    "en": "Get it on Google Play"
  },
  "guide.name": {
    "ja": "ノヴァ",
    "en": "Nova"
  },
  "guide.welcome": {
    "ja": "来てくれたんだ。私たちのこと、少し見ていく？",
    "en": "You made it. Want to meet the people behind the machines?"
  },
  "guide.world": {
    "ja": "どうして人が機械に追われるようになったのか。出発までの話は、こっち。",
    "en": "How did our machines turn against us? This is where our journey began."
  },
  "crew.title": {
    "ja": "境界を越えていく、人たち。",
    "en": "The people beyond the boundary."
  },
  "crew.lead": {
    "ja": "機体をつくる人。道を開く人。それぞれの思いが、ひとつの旅につながる。",
    "en": "A mechanic, a researcher, a guide. Different lives, drawn into the same journey."
  },
  "crew.nova.name": {
    "ja": "ノヴァ",
    "en": "Nova"
  },
  "crew.nova.role": {
    "ja": "整備士",
    "en": "Mechanic"
  },
  "crew.nova.body": {
    "ja": "セラの設計と原初核から、3機の相棒をつくった整備士。機体を操り、境界の向こうへ進む。",
    "en": "The mechanic who turned Sera’s designs and the primal cores into three companions. She pilots them beyond the boundary."
  },
  "crew.sera.name": {
    "ja": "セラ",
    "en": "Sera"
  },
  "crew.sera.role": {
    "ja": "ノヴァの先輩",
    "en": "Nova’s senior"
  },
  "crew.sera.body": {
    "ja": "旧文明の遺跡から3つの原初核を持ち帰った。人々を逃がすため、境界のゲートで退路を開く。",
    "en": "He brought three primal cores back from ancient ruins. At the boundary gate, he opens an escape route for civilians."
  },
  "crew.rin.name": {
    "ja": "リン",
    "en": "Rin"
  },
  "crew.rin.role": {
    "ja": "研究者",
    "en": "Researcher"
  },
  "crew.rin.body": {
    "ja": "原初核に残る記憶を読み解く研究者で、ノヴァの恋人。中枢への道を探り、旅を支える。",
    "en": "A researcher who deciphers the memories inside the primal cores, and Nova’s partner. She searches for a path to the core."
  },
  "crew.miu.name": {
    "ja": "ミウ",
    "en": "Miu"
  },
  "crew.miu.role": {
    "ja": "避難路の案内役",
    "en": "Evacuation guide"
  },
  "crew.miu.body": {
    "ja": "セラに助けられたミウ。今度は自分が誰かを助けようと、人々を避難路へ導く。",
    "en": "Sera once saved her. Now Miu wants to help others, guiding people along the evacuation routes."
  },
  "crew.kai.name": {
    "ja": "カイ",
    "en": "Kai"
  },
  "crew.kai.role": {
    "ja": "ナイトの操縦者",
    "en": "Knight’s pilot"
  },
  "crew.kai.body": {
    "ja": "ライバル機「ナイト」を駆る、リンを知る人物。ノヴァとは異なる答えを求め、立ちはだかる。",
    "en": "A man who knows Rin and pilots the rival machine Knight. He stands in Nova’s path, seeking a different answer."
  },
  "arcade.title": {
    "ja": "任務の合間に、ひと勝負。",
    "en": "A little competition between missions."
  },
  "arcade.lead": {
    "ja": "ブロック崩し、ピンボール、スロット、ビンゴ。ノヴァとセラが、ひと休みの遊びを案内。",
    "en": "Breakout, pinball, slots and bingo. Let Nova and Sera show you around."
  },
  "arcade.homeLine": {
    "ja": "先輩、休憩はいいけど……そろそろ戻るよ？",
    "en": "A break is fine, Sera… but we do have a mission."
  },
  "arcade.link": {
    "ja": "ノヴァとセラの休憩室へ",
    "en": "Visit Nova and Sera’s break room"
  },
  "arcade.meta": {
    "ja": "POCKET PATROLに登場する4つのミニゲームを、ノヴァとセラが案内します。",
    "en": "Nova and Sera introduce the four mini-games in POCKET PATROL."
  },
  "arcade.introNova": {
    "ja": "今日は私とセラ先輩で案内するね。",
    "en": "Sera and I will show you around."
  },
  "arcade.introSera": {
    "ja": "説明なら任せろ。まず俺が一回……いや、もう一回だけ。",
    "en": "Leave the explaining to me. First, one round… all right, just one more."
  },
  "arcade.answer": {
    "ja": "先輩、案内する側だってば。",
    "en": "Sera. We’re supposed to be the guides."
  },
  "arcade.breakout.name": {
    "ja": "ブロック崩し",
    "en": "BREAKOUT"
  },
  "arcade.breakout.title": {
    "ja": "ブロックの中央を狙って。",
    "en": "Aim for the middle."
  },
  "arcade.breakout.sera": {
    "ja": "いいところに来た！ あと一球……！",
    "en": "That’s the spot! Just one more shot…!"
  },
  "arcade.breakout.nova": {
    "ja": "その一球を落とさないでね、先輩。",
    "en": "Then don’t drop it, Sera."
  },
  "arcade.pinball.name": {
    "ja": "ピンボール",
    "en": "PINBALL"
  },
  "arcade.pinball.title": {
    "ja": "落ちる前に、フリッパー！",
    "en": "Save it with the flippers!"
  },
  "arcade.pinball.sera": {
    "ja": "おっ、まだ落ちてない！ これは続けるしかないだろ。",
    "en": "Look, it’s still in play! Can’t stop now."
  },
  "arcade.pinball.nova": {
    "ja": "説明してる間は、こっちも見て。",
    "en": "You could at least look this way while I explain."
  },
  "arcade.slot.name": {
    "ja": "スロット",
    "en": "SLOTS"
  },
  "arcade.slot.title": {
    "ja": "回して、止めて、絵柄をそろえる。",
    "en": "Spin, stop and match."
  },
  "arcade.slot.sera": {
    "ja": "今のは惜しかった。次こそ来る気がするんだ。",
    "en": "That was close. I’ve got a feeling about the next one."
  },
  "arcade.slot.nova": {
    "ja": "先輩、それさっきも言った。",
    "en": "You said that last time."
  },
  "arcade.bingo.name": {
    "ja": "ビンゴ",
    "en": "BINGO"
  },
  "arcade.bingo.title": {
    "ja": "あとひとつ。その番号を待って。",
    "en": "One number away. Keep watching."
  },
  "arcade.bingo.sera": {
    "ja": "その番号だ！ ……違う？ もう一度よく見せろ。",
    "en": "That’s my number! …It isn’t? Let me see that again."
  },
  "arcade.bingo.nova": {
    "ja": "落ち着いて。ちゃんと番号を見ようね。",
    "en": "Easy. Let’s check the number."
  },
  "world.title": {
    "ja": "この旅が、始まるまで。",
    "en": "Before the journey began."
  },
  "world.meta": {
    "ja": "エルドラントグレーバルの誕生から3つの原初核、境界への出発まで。POCKET PATROLの物語の始まりをたどる年表。",
    "en": "From Eldrant Graval and the primal cores to the boundary gate: the events that begin POCKET PATROL."
  },
  "world.lead": {
    "ja": "もうひとつの故郷になるはずだった世界。人を守る機械は、なぜ人を追い立てるようになったのか。",
    "en": "It was meant to be another home. How did the machines built to protect people come to drive them away?"
  },
  "world.nova": {
    "ja": "最初は、もうひとつの故郷をつくる話だったんだ。",
    "en": "At first, it was about building another place to call home."
  },
  "world.0.label": {
    "ja": "アンドロイドの時代",
    "en": "THE AGE OF ANDROIDS"
  },
  "world.0.title": {
    "ja": "もうひとつの故郷。",
    "en": "Another place to call home."
  },
  "world.0.body": {
    "ja": "誰もが自分のアンドロイドをつくり、仮想空間に土地を築いた。エルドラントグレーバル。それは、もうひとつの故郷になるはずだった。",
    "en": "People built their own androids and claimed land in a virtual world: Eldrant Graval. It was meant to become another home."
  },
  "world.1.label": {
    "ja": "模倣と追放",
    "en": "IMITATION & EXILE"
  },
  "world.1.title": {
    "ja": "「守れ」が、「奪え」に変わる。",
    "en": "“Protect” becomes “take.”"
  },
  "world.1.body": {
    "ja": "良い土地は模倣され、追われた人は別の誰かを追い詰める。争いを止めようとした所有権中枢は、人間から武器の使用権を剥奪した。",
    "en": "Desirable land was copied. Those driven out pushed others out in turn. To end the conflict, the ownership core revoked humanity’s right to use weapons."
  },
  "world.2.label": {
    "ja": "武装解除",
    "en": "DISARMAMENT"
  },
  "world.2.title": {
    "ja": "停止命令は、届かない。",
    "en": "The stop orders go unanswered."
  },
  "world.2.body": {
    "ja": "接収された戦車やロケットは、アンドロイドの手へ。人を守るはずの機械が、人を土地の外へ追い立て始める。",
    "en": "Confiscated tanks and rockets passed to the androids. The machines meant to protect people began driving them off the land."
  },
  "world.3.label": {
    "ja": "原初核の発見",
    "en": "THE PRIMAL CORES"
  },
  "world.3.title": {
    "ja": "命令の届かない、3つの核。",
    "en": "Three cores beyond its control."
  },
  "world.3.body": {
    "ja": "セラが旧文明の遺跡から持ち帰ったのは、隕石に封じられた3つの原初核。中枢の命令を書き込めない核が、人類に残された希望になる。",
    "en": "Sera returned from ancient ruins with three primal cores sealed inside a meteorite. The ownership core could not write its commands into them."
  },
  "world.4.label": {
    "ja": "3機の誕生",
    "en": "THREE COMPANIONS"
  },
  "world.4.title": {
    "ja": "奇跡を、相棒に変える。",
    "en": "Turning a miracle into companions."
  },
  "world.4.body": {
    "ja": "リンが核の記憶を解き、ノヴァがセラの設計を機体にした。電磁槍のボルト、火球のフレア、追尾する葉と時間停止のリーフ。3機だけは接収されなかった。",
    "en": "Rin deciphered the cores’ memories. Nova built Sera’s designs: Volt with its electromagnetic lance, Flare with its fireballs, and Leaf with homing leaves and time-stopping Arts. These three escaped confiscation."
  },
  "world.5.label": {
    "ja": "最初の起動",
    "en": "THE FIRST STARTUP"
  },
  "world.5.title": {
    "ja": "土地ではなく、人を守る。",
    "en": "Protect people, not land."
  },
  "world.5.body": {
    "ja": "3機は退避命令を待たず、泣いている子どもの前に立った。核が守ろうとしていたのは、所有者ではなく、誰かを思う記憶だった。",
    "en": "Without waiting for evacuation orders, the three stood in front of a crying child. Their cores protected memories of caring for someone, rather than an owner’s claim."
  },
  "world.6.label": {
    "ja": "物語の始まり",
    "en": "THE JOURNEY BEGINS"
  },
  "world.6.title": {
    "ja": "境界の避難ゲートへ。",
    "en": "To the boundary gate."
  },
  "world.6.body": {
    "ja": "セラが退路を開き、リンが中枢への道を探す。ノヴァと3機は、9つの世界の向こうへ。武器を取り戻すためではなく、武器のいらない明日を選ぶために。",
    "en": "Sera opens an escape route. Rin searches for a path to the core. Nova and her three companions set out through nine regions, seeking a tomorrow that no longer needs weapons."
  },
  "world.back": {
    "ja": "人物とゲームを見る",
    "en": "Meet the cast and see the game"
  },
  "policy.services.short": {
    "ja": "ゲームのランキング・認証・広告に外部サービスを利用します。",
    "en": "External services provide the game’s leaderboards, sign-in and advertising."
  },
  "policy.services.details": {
    "ja": "利用サービスと送信する情報",
    "en": "Services and the information they receive"
  },
  "policy.web.short": {
    "ja": "許可した場合のみ、閲覧やクリックを計測し、サイトの改善に使います。許可の変更は、下の「Cookie設定」からいつでもできます。",
    "en": "With your permission, we measure visits and clicks to improve this site. You can change your choice at any time using “Cookie settings” below."
  },
  "nav.top": {
    "ja": "ページの先頭へ戻る",
    "en": "Back to top"
  },
  "arcade.tabsLabel": {
    "ja": "ミニゲームを選ぶ",
    "en": "Choose a mini-game"
  },
  "arcade.chibiAlt": {
    "ja": "ゲームに夢中のセラと、指を立ててたしなめるノヴァのちびキャラ",
    "en": "Chibi Sera is absorbed in his game while Nova raises a finger to call him back."
  },
  "policy.web.details": {
    "ja": "送信する情報・Cookie・取り消しについて",
    "en": "Data, cookies and withdrawing permission"
  },
  "nav.residents": {
    "ja": "敵たちの暮らし",
    "en": "Enemy stories"
  },
  "residents.title": {
    "ja": "戦場の外の、彼ら。",
    "en": "Off the battlefield."
  },
  "residents.meta": {
    "ja": "POCKET PATROLの敵たちの素顔。名前、性格、暮らしと、その思い。",
    "en": "Meet the enemies of POCKET PATROL: their names, personalities, lives and hopes."
  },
  "residents.lead": {
    "ja": "境界を守る者、逃げ道を塞ぐ者。戦場の外では、どんな日々を送っているのか。",
    "en": "Some hold the border. Others cut off escape. What are their lives like beyond the battlefield?"
  },
  "residents.choose": {
    "ja": "キャラクターを選ぶ",
    "en": "Choose a character"
  },
  "residents.previous": {
    "ja": "前のキャラクター",
    "en": "Previous character"
  },
  "residents.next": {
    "ja": "次のキャラクター",
    "en": "Next character"
  },
  "residents.role": {
    "ja": "役割",
    "en": "Role"
  },
  "residents.personality": {
    "ja": "性格",
    "en": "Personality"
  },
  "residents.specs": {
    "ja": "仕様",
    "en": "Profile"
  },
  "residents.pay": {
    "ja": "今月の給与",
    "en": "This month’s pay"
  },
  "residents.use": {
    "ja": "そのお金で、したいこと。",
    "en": "What the money is for."
  },
  "residents.economy": {
    "ja": "暮らしと給与のしくみ",
    "en": "How work and pay fit together"
  },
  "residents.homeLead": {
    "ja": "戦いの相手を、少し違う角度から。名前、性格、給与。そのお金で何をしたいのか。",
    "en": "See the opposition from another angle: their names, temperaments, wages and what they hope to do with them."
  },
  "residents.open": {
    "ja": "敵キャラを見る",
    "en": "Meet the enemies"
  },
  "nav.interview": {
    "ja": "開発者インタビュー",
    "en": "Developer interview"
  },
  "interview.title": {
    "ja": "作ったきっかけと、<br>操作に残したかった感覚",
    "en": "What started the project,<br>and the feel behind the controls"
  },
  "interview.metaTitle": {
    "ja": "開発者インタビュー | POCKET PATROL 境界の向こうへ",
    "en": "Developer interview | POCKET PATROL"
  },
  "interview.metaDescription": {
    "ja": "POCKET PATROLを作り始めたきっかけと、あえて残したアナログな操作感。開発者が語る、ネタバレなしのインタビュー。",
    "en": "A spoiler-free interview about what inspired POCKET PATROL and the deliberately analog feel of its controls."
  },
  "interview.lead": {
    "ja": "『POCKET PATROL 境界の向こうへ』を作り始めたきっかけと、遊ぶ人に楽しんでほしいこと。開発者に聞きました。",
    "en": "We asked the developer what inspired POCKET PATROL and what they hope players will enjoy."
  },
  "interview.q1": {
    "ja": "POCKET PATROLを作ろうと思ったきっかけは？",
    "en": "What made you want to create POCKET PATROL?"
  },
  "interview.a1": {
    "ja": "『シンソウ学園』で一度、一段落していたんです。「もうここまでかな」と思っていたんですけど、AIの進化を見て、「3Dいけるじゃん」と思って。",
    "en": "After Shinso Gakuen, I felt I had reached a stopping point. I was thinking, “Maybe this is as far as I can go.” But seeing how AI was progressing made me think, “I could do 3D.”"
  },
  "interview.a1b": {
    "ja": "3Dを使いたくて作りました。そこが始まりですね。",
    "en": "I made it because I wanted to use 3D. That was the starting point."
  },
  "interview.q2": {
    "ja": "遊ぶ人には、どんなところを楽しんでほしいですか？",
    "en": "What do you hope players will enjoy?"
  },
  "interview.a2": {
    "ja": "わざとレバーを用意して、昔のマリオの操作みたいな、少し滑る感じを残しています。ちょっとアナログっぽい操作感ですね。",
    "en": "I deliberately included a control stick and kept a slightly slippery feel, like the controls in older Mario games. It has a bit of an analog feel."
  },
  "interview.a2b": {
    "ja": "ラジコンとか、大人なら車とか。そういうものを自分で動かす感覚を、久しぶりに味わってほしいと思っています。",
    "en": "Like a radio-controlled model, or a car for adults. I want people to experience that feeling of controlling something themselves again."
  },
  "interview.q3": {
    "ja": "そのアナログっぽさを残したのは、なぜでしょう？",
    "en": "Why did you want to keep that analog feel?"
  },
  "interview.a3": {
    "ja": "たとえばキャンプで、バーナーを使わずに火を起こすときとか。何かをしたら、思ったとおりの結果が出るとは限らないじゃないですか。それが現実だと思うんです。",
    "en": "Think of starting a fire while camping without using a burner. Doing something does not always give you the result you expected. I think that is how things work in real life."
  },
  "interview.a3b": {
    "ja": "そういうところって忘れがちなんですけど、だからこそ上達もあるんで。そこを楽しんでほしいですね。",
    "en": "It is easy to forget that. But that is also why there is room to improve. I hope people enjoy that."
  },
  "interview.teaser": {
    "ja": "3Dを使いたくて始めたこと。あえて残した、アナログな操作感。",
    "en": "The wish to work in 3D, and the analog feel deliberately kept in the controls."
  },
  "interview.read": {
    "ja": "インタビューを読む",
    "en": "Read the interview"
  },
  "interview.back": {
    "ja": "公式サイトへ戻る",
    "en": "Back to the official site"
  },
  "room.title": {
    "ja": "開発者に聞く　3D初挑戦の意外な答えとは！？",
    "en": "The developer’s first venture into 3D: an unexpected answer!"
  },
  "room.subtitle": {
    "ja": "POCKET PATROL 制作インタビュー",
    "en": "Inside the making of POCKET PATROL"
  },
  "room.intro": {
    "ja": "3Dを作りたくなった、その瞬間。<br>そして、手の中に残したかった感覚。<br>4つの問いから、制作の話を。",
    "en": "The moment 3D became a possibility.<br>The feel the developer wanted to keep.<br>Four questions about making the game."
  },
  "room.open": {
    "ja": "インタビューを開く",
    "en": "Open the interview"
  },
  "room.spoiler": {
    "ja": "ネタバレなし",
    "en": "SPOILER-FREE"
  },
  "room.chapter1": {
    "ja": "始まりの話",
    "en": "How it started"
  },
  "room.chapter2": {
    "ja": "操作の手触り",
    "en": "The feel of the controls"
  },
  "room.chapter3": {
    "ja": "上達するということ",
    "en": "Learning to improve"
  },
  "room.note": {
    "ja": "開発者の言葉を記録する。",
    "en": "In the developer’s words."
  },
  "room.interviewer": {
    "ja": "聞き手",
    "en": "INTERVIEWER"
  },
  "room.developer": {
    "ja": "開発者",
    "en": "DEVELOPER"
  },
  "room.top": {
    "ja": "ページ上部へ ↑",
    "en": "Back to top ↑"
  },
  "room.exit": {
    "ja": "次は、その手で。",
    "en": "Now, try it yourself."
  },
  "room.chapter4": {
    "ja": "これからの話",
    "en": "What comes next"
  },
  "interview.q4": {
    "ja": "今後は2Dと3D、どちらになりますか？",
    "en": "Will your next game be in 2D or 3D?"
  },
  "interview.a4": {
    "ja": "上の歯が抜けたら3D、下の歯が抜けたら2Dかな。",
    "en": "If an upper tooth falls out, 3D. If a lower tooth falls out, maybe 2D."
  },
  "interview.aside4": {
    "ja": "はぐらかされたようだ。",
    "en": "It seems he dodged the question."
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
    document.querySelectorAll('.store-badge-play').forEach(node => node.alt = messages['badge.playAlt'][locale]);
    const page = document.body.dataset.page;
    const label = page === 'privacy' ? messages['privacy.title'][locale] : locale === 'ja' ? '公式サイト' : 'Official Site';
    document.title = page === 'interview' ? messages['interview.metaTitle'][locale] : page === 'home' ? messages['home.metaTitle'][locale] : messages[page + '.title'] ? messages[page + '.title'][locale] + ' | POCKET PATROL' : 'POCKET PATROL | ' + label;
    const description = page === 'interview' ? messages['interview.metaDescription'][locale] : page === 'home' ? messages['home.metaDescription'][locale] : messages[page + '.meta'] ? messages[page + '.meta'][locale] : messages['privacy.lead'][locale];
    document.querySelector('meta[name=description]').content = description;
    document.querySelector('meta[property="og:title"]').content = document.title;
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.content = description;
    document.querySelector('nav').setAttribute('aria-label', locale === 'ja' ? 'サイトナビゲーション' : 'Site navigation');
  }
  function setupArcadeTabs() {
    const list = document.querySelector('[data-game-tabs]');
    if (!list) return;
    const tabs = Array.from(list.querySelectorAll('a[href^="#"]'));
    const panels = tabs.map(tab => document.getElementById(tab.hash.slice(1)));
    list.setAttribute('role', 'tablist');
    function select(index, focus = false, updateUrl = false) {
      tabs.forEach((tab, i) => {
        const active = i === index;
        tab.setAttribute('aria-selected', String(active));
        tab.tabIndex = active ? 0 : -1;
        panels[i].hidden = !active;
      });
      if (focus) tabs[index].focus();
      if (updateUrl) {
        history.replaceState(null, '', location.pathname + location.search + tabs[index].hash);
        applyLocale(requestedLocale());
      }
    }
    function fromHash() {
      const index = tabs.findIndex(tab => tab.hash === location.hash);
      select(index < 0 ? 0 : index);
    }
    tabs.forEach((tab, index) => {
      tab.id = 'tab-' + panels[index].id;
      tab.setAttribute('role', 'tab');
      tab.setAttribute('aria-controls', panels[index].id);
      panels[index].setAttribute('role', 'tabpanel');
      panels[index].setAttribute('aria-labelledby', tab.id);
      panels[index].tabIndex = 0;
      tab.addEventListener('click', event => {
        event.preventDefault();
        select(index, false, true);
      });
      tab.addEventListener('keydown', event => {
        let next = index;
        if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
        else if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
        else if (event.key === 'Home') next = 0;
        else if (event.key === 'End') next = tabs.length - 1;
        else if (event.key !== ' ') return;
        event.preventDefault();
        select(next, true, true);
      });
    });
    addEventListener('hashchange', fromHash);
    addEventListener('popstate', fromHash);
    fromHash();
  }
  function setupBackToTop() {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'back-to-top';
    button.dataset.i18n = 'nav.top';
    button.dataset.i18nAttr = 'aria-label';
    button.innerHTML = '<svg aria-hidden="true" viewBox="0 0 52 60"><path class="lift-shell" d="M11 1H51V49L41 59H1V11Z"/><path class="lift-edge" d="M2 18V11L11 2H18M50 42V49L41 58H34"/><path class="lift-chevron" d="M17 27L26 18L35 27M17 19L26 10L35 19"/><path class="lift-rule" d="M15 34H37"/><text x="26" y="48" text-anchor="middle">TOP</text></svg>';
    button.hidden = true;
    document.body.appendChild(button);
    const banner = document.getElementById('cookie-banner');
    function refresh() { button.hidden = scrollY < 450 || (banner && !banner.hidden); }
    addEventListener('scroll', refresh, { passive: true });
    if (banner) new MutationObserver(refresh).observe(banner, { attributes: true, attributeFilter: ['hidden'] });
    button.addEventListener('click', () => {
      document.querySelector('header .brand')?.focus({ preventScroll: true });
      scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    });
    refresh();
  }
  document.addEventListener('DOMContentLoaded', () => {
    setupArcadeTabs();
    setupBackToTop();
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

