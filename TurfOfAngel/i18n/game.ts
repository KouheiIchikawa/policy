import type { PolicyLocaleContent } from '../src/types'
import { ja } from './ja'
import { en } from './en'

export const gameLocales: Record<'ja' | 'en', PolicyLocaleContent> = {
  ja: {
    ...ja,
    meta: { title: 'ターフオブエンジェル｜Turf of Angel', description: '調教、投資、出走計画で競走馬を育てる、買い切り型の牧場経営ゲーム。日本語・英語とOS別ランキングに対応。' },
    ui: { privacyPolicy: '公式サイト', policySections: 'ゲーム紹介' },
    hero: { badge: 'HORSE RACING · RANCH MANAGEMENT', title: 'Turf of Angel', subtitle: '一頭の出会いから、牧場の歴史が始まる。', description: '調教、投資、装備、出走計画。自分のペースで競走馬を育て、勝利と賞金を積み重ねる買い切り型の育成ゲームです。', ctaPrimary: 'ゲームを知る', ctaSecondary: 'ストアを見る' },
    introHtml: '広告・アプリ内課金なし。日本語・英語の表示に対応し、進行状況は端末内へ保存します。',
    sections: [
      { title: '1. 牧場と、お手馬の物語', html: '馬への投資額を決め、名前を付けてキャリアを開始。調子や体力を見ながら、調教と出走のタイミングを考えます。' },
      { title: '2. 育成とレースを、自分のペースで', html: '調教、ショップ、施設増強、レース登録を使い分けて牧場を経営。記録室では積み重ねた成績を振り返れます。' },
      { title: '3. 牧場にも、レースにも、音の彩りを', html: 'タイトル・牧場・レースにそれぞれ専用BGM。蹄、スタート、ゴール、買い物や回復の効果音がプレイを彩ります。音楽と効果音は設定で個別に切り替えられます。既存のエンディング映像と音楽も楽しめます。' },
      { title: '4. 自分の記録から、その先へ', html: '累計獲得賞金、最高レース賞金、勝利数、牧場経営年数を競うOS別ランキングに対応。AndroidはGoogle Play Games、iPhoneはGame Centerを使用します。通常のゲーム進行は端末内で保存し、ランキング利用には各サービスへの接続が必要です。' },
      { title: '5. サポートとプライバシー', html: 'お問い合わせは開発者のXへ。保存データやランキング情報の取り扱いは、<a href="privacy-policy.html#ja">プライバシーポリシー</a>をご確認ください。' },
    ],
  },
  en: {
    ...en,
    meta: { title: 'Turf of Angel | Official Game', description: 'Raise racehorses and manage your ranch through training, investment and race entries. Japanese and English text, with platform leaderboards.' },
    ui: { privacyPolicy: 'Official Game', policySections: 'About the game' },
    hero: { badge: 'HORSE RACING · RANCH MANAGEMENT', title: 'Turf of Angel', subtitle: 'One horse. A new chapter for your ranch.', description: 'Plan investments, training, equipment and race entries in a premium horse-racing management game. Build each horse’s career at your own pace.', ctaPrimary: 'Explore the game', ctaSecondary: 'View stores' },
    introHtml: 'No in-game advertisements or in-app purchases. Japanese and English text. Game progress is stored on your device.',
    sections: [
      { title: '1. Your ranch, your horses', html: 'Choose an investment, name your new horse and begin its career. Watch condition and stamina as you plan training and race entries.' },
      { title: '2. Build a career at your own pace', html: 'Balance training, equipment, facility upgrades and race entries. Revisit your growing history in the record room.' },
      { title: '3. A soundtrack for every occasion', html: 'Dedicated title, ranch and race music accompanies hoofbeats, starts, finishes, purchases and recovery. Music and sound effects have separate settings. Enjoy the existing ending film and its soundtrack.' },
      { title: '4. Take your records further', html: 'Platform leaderboards track total prize money, best race prize, victories and ranch years: Google Play Games on Android and Game Center on iPhone. Normal progress stays on your device; rankings require connection to the platform service.' },
      { title: '5. Support and privacy', html: 'Contact the developer on X. Read our <a href="privacy-policy.html#en">Privacy Policy</a> for information about local saves and platform leaderboard data.' },
    ],
  },
}
