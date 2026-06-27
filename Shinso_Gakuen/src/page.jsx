import { Fragment, StrictMode, useEffect, useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import cubeFragmentsUrl from '../assets/cube-fragments.png'
import mysteryCubeUrl from '../assets/mystery-cube.png'
import storyVeilUrl from '../assets/story-veil.png'
import xLogoUrl from '../assets/x-logo.svg'
import { CookieConsent } from './CookieConsent'
import { navItems, officialXUrl, withLanguage } from './navigation'
import './page.css'

const storageKey = 'shinso-gakuen-lang'
const keyVisualOtherUrl = './assets/keyvisual/ShisoGakuenKeyVisual_other.png'
const characterAssetBaseUrl = './assets/characterScreen/'
const akimotoUrl = `${characterAssetBaseUrl}akimoto.png`
const akiraUrl = `${characterAssetBaseUrl}akira.png`
const kurumiUrl = `${characterAssetBaseUrl}kurumi.png`
const meguUrl = `${characterAssetBaseUrl}megu.png`
const miuUrl = `${characterAssetBaseUrl}miu.png`
const guideAssetBaseUrl = './assets/guide-cube/'
const guideChibiMiuUrl = `${guideAssetBaseUrl}guide-chibi-miu.png`
const guideOrangeGoalUrl = `${guideAssetBaseUrl}orange-goal.png`
const guideOrangeFlowerCrossUrl = `${guideAssetBaseUrl}orange-flower-cross.png`
const guideOrangeFaceMiddleUrl = `${guideAssetBaseUrl}orange-face-middle.png`
const guideOrangeOppositeFinishUrl = `${guideAssetBaseUrl}orange-opposite-finish.png`
const guideAppTurnVsViewUrl = `${guideAssetBaseUrl}app-turn-vs-view.png`
const guideMiddleLayerUrl = `${guideAssetBaseUrl}guide-middle-layer.png`
const guideWhiteCrossUrl = `${guideAssetBaseUrl}guide-white-cross.png`
const guideYellowFinishUrl = `${guideAssetBaseUrl}guide-yellow-finish.png`
const guideMiuCubeUrl = `${guideAssetBaseUrl}miu-cube.png`
const guideMiuSolvedUrl = `${guideAssetBaseUrl}miu-solved.png`
const guideMiuTeacherUrl = `${guideAssetBaseUrl}miu-teacher.png`
const guideVisuals = [
  guideAppTurnVsViewUrl,
  guideOrangeFlowerCrossUrl,
  guideOrangeFaceMiddleUrl,
  guideOrangeOppositeFinishUrl,
]
const appStoreUrl = 'https://apps.apple.com/jp/app/シンソウ学園/id6778015795'
const googlePlayUrl = 'https://play.google.com/store/apps/details?id=com.koheiilimilab.shinsogakuen&pcampaignid=web_share'
const firstNovelUrl = 'https://amzn.asia/d/0gjywItQ'
const secondNovelUrl = 'https://amzn.asia/d/0iCDvGo0'
const thirdNovelUrl = 'https://www.amazon.co.jp/dp/B0H6S6B5CG'
const firstNovelCoverUrl = './assets/book/shinso-gakuen-1.jpg'
const secondNovelCoverUrl = './assets/book/shinso-gakuen-2.jpg'
const thirdNovelCoverUrl = './assets/book/shinso-gakuen-3.jpg'
const bookHeroUrl = './assets/book/book-hero.png'
const appHeroUrl = './assets/app/app-hero.png'
const appStoreBadgeUrl = '../common/appstore_badge.svg'
const googlePlayBadgeUrl = '../common/Google_Play_Badge_JA.svg'
const releasePlatforms = [
  {
    id: 'ios',
    label: 'iOS',
    device: 'App Store',
    url: appStoreUrl,
    badge: appStoreBadgeUrl,
    badgeAlt: {
      ja: 'App Storeからダウンロード',
      en: 'Download on the App Store',
    },
    note: {
      ja: 'iPhone / iPad でプレイできます。',
      en: 'Available for iPhone and iPad.',
    },
  },
  {
    id: 'android',
    label: 'Android',
    device: 'Google Play',
    url: googlePlayUrl,
    badge: googlePlayBadgeUrl,
    badgeAlt: {
      ja: 'Google Playで手に入れよう',
      en: 'Get it on Google Play',
    },
    note: {
      ja: 'Android 端末でプレイできます。',
      en: 'Available for Android devices.',
    },
  },
]
const bookVolumes = [
  {
    id: 'volume-1',
    number: 'I',
    title: { ja: 'シンソウ学園(Ⅰ)', en: 'Shinso Gakuen (I)' },
    subtitle: { ja: '入学編', en: 'Entrance Arc' },
    status: { ja: '発売中', en: 'Available now' },
    body: {
      ja: '道喜玖永学園への入学から始まる第I巻。',
      en: 'Volume I begins with entrance into Dokikuei Academy.',
    },
    url: firstNovelUrl,
    image: firstNovelCoverUrl,
  },
  {
    id: 'volume-2',
    number: 'II',
    title: { ja: 'シンソウ学園(Ⅱ)', en: 'Shinso Gakuen (II)' },
    subtitle: { ja: '熱中編', en: 'Immersion Arc' },
    status: { ja: '発売中', en: 'Available now' },
    body: {
      ja: '熱中編へ進む第II巻。Amazonで販売中です。',
      en: 'Volume II continues into the Immersion Arc. Available now on Amazon.',
    },
    url: secondNovelUrl,
    image: secondNovelCoverUrl,
  },
  {
    id: 'volume-3',
    number: 'III',
    title: { ja: 'シンソウ学園(Ⅲ)', en: 'Shinso Gakuen (III)' },
    subtitle: { ja: '回答編', en: 'Answer Arc' },
    status: { ja: '発売中', en: 'Available now' },
    body: {
      ja: '回答編となる第III巻。Amazonで販売中です。',
      en: 'Volume III is the Answer Arc. Available now on Amazon.',
    },
    url: thirdNovelUrl,
    image: thirdNovelCoverUrl,
  },
]

const comicPages = [
  {
    id: '009',
    ja: './assets/comic/comic009_ja.webp',
    en: './assets/comic/comic009_en.webp',
  },
  {
    id: '008',
    ja: './assets/comic/comic008_ja.webp',
    en: './assets/comic/comic008_en.webp',
  },
  {
    id: '007',
    ja: './assets/comic/comic007_ja.webp',
    en: './assets/comic/comic007_en.webp',
  },
  {
    id: '006',
    ja: './assets/comic/comic006_ja.webp',
    en: './assets/comic/comic006_en.webp',
  },
  {
    id: '005',
    ja: './assets/comic/comic005_ja.webp',
    en: './assets/comic/comic005_en.webp',
  },
  {
    id: '004',
    ja: './assets/comic/comic004_ja.webp',
    en: './assets/comic/comic004_en.webp',
  },
  {
    id: '003',
    ja: './assets/comic/comic003_ja.webp',
    en: './assets/comic/comic003_en.webp',
  },
  {
    id: '002',
    ja: './assets/comic/comic002_ja.webp',
    en: './assets/comic/comic002_en.webp',
  },
  {
    id: '001',
    ja: './assets/comic/comic001_ja.webp',
    en: './assets/comic/comic001_en.webp',
  },
]

const characterProfiles = [
  {
    id: 'akira',
    name: { ja: '天導アキラ', en: 'Akira Tendo' },
    shortName: { ja: 'アキラ', en: 'Akira' },
    roman: 'TENDO AKIRA',
    grade: { ja: '道喜玖永学園 1年', en: 'Dokikuei Academy / Year 1' },
    description: {
      ja: '公立高校の受験に失敗し、この学園へ入学した少年。本人は自分を凡人の根性なしだと思っている。',
      en: 'A boy who entered this academy after failing the public high school entrance exam. He believes he is ordinary and lacks resolve.',
    },
    image: akiraUrl,
  },
  {
    id: 'megu',
    name: { ja: '中路メグ', en: 'Megu Nakaji' },
    shortName: { ja: 'メグ', en: 'Megu' },
    roman: 'NAKAJI MEGU',
    grade: { ja: '道喜玖永学園 1年', en: 'Dokikuei Academy / Year 1' },
    description: {
      ja: '誰とでも仲良くなれる少女。本人は無意識で、人の懐へ入ることができる。素直ではあるが、思ったことは口に出してしまう。',
      en: 'A girl who can get along with anyone. Without realizing it, she can step straight into people’s inner circles. Honest by nature, she tends to say exactly what she thinks.',
    },
    image: meguUrl,
  },
  {
    id: 'akimoto',
    name: { ja: '秋本信夫', en: 'Nobuo Akimoto' },
    shortName: { ja: '秋本', en: 'Akimoto' },
    roman: 'AKIMOTO NOBUO',
    grade: { ja: '道喜玖永学園 1年', en: 'Dokikuei Academy / Year 1' },
    description: {
      ja: '勉強しているところを誰も見たことがないが、ときおりとてつもない才能を発揮する。',
      en: 'No one has ever seen him studying, yet he occasionally displays an extraordinary level of talent.',
    },
    image: akimotoUrl,
  },
  {
    id: 'kurumi',
    name: { ja: '白井来海', en: 'Kurumi Shirai' },
    shortName: { ja: '来海', en: 'Kurumi' },
    roman: 'SHIRAI KURUMI',
    grade: { ja: '道喜玖永学園 1年', en: 'Dokikuei Academy / Year 1' },
    description: {
      ja: '学年屈指の美少女。しかし、本人はそれを武器だと思っていない。ひょんなことからアキラと接触することになる。',
      en: 'One of the most beautiful girls in her year. She does not see it as a weapon. A chance event brings her into contact with Akira.',
    },
    image: kurumiUrl,
  },
  {
    id: 'miu',
    name: { ja: '美生', en: 'Miu' },
    shortName: { ja: '美生', en: 'Miu' },
    roman: 'MIU',
    grade: { ja: '道喜玖永学園 3年', en: 'Dokikuei Academy / Year 3' },
    description: {
      ja: '道喜玖永学園で活動的に成果を出してる美少女。学園内では知らない者はいない。彼女が何を目指しているのかわからない。',
      en: 'A beautiful senior who actively produces results at Dokikuei Academy. Everyone in the school knows her, though no one knows what she is truly aiming for.',
    },
    image: miuUrl,
  },
]

const guideContent = {
  ja: {
    rulesLabel: 'アプリで見ること',
    flowLabel: 'オレンジ面クリアの流れ',
    boardLabel: '覚える手順',
    boardEyebrow: 'おぼえるのはここだけ',
    boardTitle: '短い手順表',
    tipsLabel: 'つまずき対策',
    exampleLabel: '例題',
    exampleEyebrow: 'さわって確認',
    exampleTitle: 'オレンジ面で進めると？',
    prev: '戻る',
    next: '次へ',
    reset: '最初へ',
    rules: [
      ['1', '視点と操作を分ける', '見回すだけでは盤面は変わらない'],
      ['2', 'ゴールはオレンジ', '毎回、オレンジ面をそろえる'],
      ['3', '灰色は無視', '今の段階に関係ないマスは見ない'],
    ],
    steps: [
      ['操作チェック', '回す / 見る は別', '式の途中では同じ手前を保ちます。', guideAppTurnVsViewUrl, guideMiuTeacherUrl],
      ['オレンジの花', '上に4本集める', '反対面の中心のまわりへ、オレンジの辺を集めます。', guideOrangeFlowerCrossUrl, guideMiuCubeUrl],
      ['オレンジ十字', '横色を合わせて落とす', '横色が中心と合ったら、その辺をオレンジ面へ送ります。', guideOrangeFlowerCrossUrl, guideMiuTeacherUrl],
      ['オレンジ一面', '角を4つ合わせる', '角は3つの中心にはさまる場所へ入れます。', guideOrangeFaceMiddleUrl, guideMiuCubeUrl],
      ['真ん中の段', '反対色なしを選ぶ', '反対面の色を持たない辺だけを処理します。', guideOrangeFaceMiddleUrl, guideMiuTeacherUrl],
      ['反対面の形', '点・かぎ・せん', '上面の辺だけ見て、十字へ進めます。', guideOrangeOppositeFinishUrl, guideMiuCubeUrl],
      ['仕上げ', '角、辺の順', '最後は場所、向きの順で盤面クリアです。', guideOrangeGoalUrl, guideMiuSolvedUrl],
    ],
    algorithms: [
      ['花から十字', 'U / F2', '横色を合わせて送る'],
      ['角の取り出し', "R' D' R", '詰まった角を下へ'],
      ['左へ入れる', "D L D' L'", '左の場所へ'],
      ['右へ入れる', "D' R' D R", '右の場所へ'],
      ['反対面十字', "F R U R' U' F'", '点、かぎ、せん'],
      ['最後の角向き', "R' D' R D", '同じ角でやり切る'],
    ],
    tips: [
      ['視点変更', '確認だけ。状態は変わらない。'],
      ['面回転', 'ログに残る。本当の操作。'],
      ['止まったら', '今の段階だけ見る。灰色は無視。'],
      ['こわい所', "R' D' R D は途中で崩れて見えてOK。"],
    ],
    example: [
      ['スタート', 'オレンジ面を決める', 'まずゴール色を固定します。', 'scramble', guideMiuCubeUrl],
      ['花', '上に4本', 'オレンジの辺だけ集めます。', 'flower', guideMiuTeacherUrl],
      ['十字', '横色チェック', '横色が合ったら送ります。', 'cross', guideMiuCubeUrl],
      ['一面と中段', '下側を固める', 'オレンジ面と真ん中を守ります。', 'middle', guideMiuTeacherUrl],
      ['反対面', '形だけ見る', '点・かぎ・せんから十字へ。', 'opposite', guideMiuCubeUrl],
      ['クリア', 'オレンジ面ゴール', '最後に場所と向きを整えます。', 'solved', guideMiuSolvedUrl],
    ],
  },
  en: {
    rulesLabel: 'App reading rules',
    flowLabel: 'Orange-face clear flow',
    boardLabel: 'Moves to remember',
    boardEyebrow: 'Only these moves',
    boardTitle: 'Short Move List',
    tipsLabel: 'Stuck points',
    exampleLabel: 'Example',
    exampleEyebrow: 'Try the flow',
    exampleTitle: 'Orange-goal example',
    prev: 'Back',
    next: 'Next',
    reset: 'Reset',
    rules: [
      ['1', 'View is separate', 'Looking around does not change the board'],
      ['2', 'Goal is orange', 'Clear the orange face every time'],
      ['3', 'Ignore gray', 'Only read tiles for the current step'],
    ],
    steps: [
      ['Operation Check', 'Turn / view are different', 'Keep the same front while a formula runs.', guideAppTurnVsViewUrl, guideMiuTeacherUrl],
      ['Orange Flower', 'Collect four edges', 'Gather orange edges around the opposite center.', guideOrangeFlowerCrossUrl, guideMiuCubeUrl],
      ['Orange Cross', 'Match side color', 'When the side color matches, send that edge to orange.', guideOrangeFlowerCrossUrl, guideMiuTeacherUrl],
      ['Orange Face', 'Four corners', 'Each corner goes between its three center colors.', guideOrangeFaceMiddleUrl, guideMiuCubeUrl],
      ['Middle Layer', 'No opposite color', 'Only process edges without the opposite-face color.', guideOrangeFaceMiddleUrl, guideMiuTeacherUrl],
      ['Opposite Shape', 'Dot, hook, line', 'Read only top edges and move toward a cross.', guideOrangeOppositeFinishUrl, guideMiuCubeUrl],
      ['Finish', 'Corners, then edges', 'Place and orient the last pieces to clear the board.', guideOrangeGoalUrl, guideMiuSolvedUrl],
    ],
    algorithms: [
      ['Flower to cross', 'U / F2', 'match side, send down'],
      ['Corner out', "R' D' R", 'drop stuck corner'],
      ['Insert left', "D L D' L'", 'send to left slot'],
      ['Insert right', "D' R' D R", 'send to right slot'],
      ['Opposite cross', "F R U R' U' F'", 'dot, hook, line'],
      ['Final corner turn', "R' D' R D", 'finish same corner'],
    ],
    tips: [
      ['View change', 'For checking only. Board state stays.'],
      ['Face turn', 'This is the real logged operation.'],
      ['Stuck', 'Read only the current step. Ignore gray.'],
      ['Scary part', "R' D' R D may look broken mid-way."],
    ],
    example: [
      ['Start', 'Pick orange goal', 'Fix the goal color first.', 'scramble', guideMiuCubeUrl],
      ['Flower', 'Four edges on top', 'Collect only orange edges.', 'flower', guideMiuTeacherUrl],
      ['Cross', 'Check side colors', 'Send an edge when its side matches.', 'cross', guideMiuCubeUrl],
      ['Face and middle', 'Protect lower area', 'Keep orange face and middle layer stable.', 'middle', guideMiuTeacherUrl],
      ['Opposite', 'Read shape only', 'Dot, hook, line, then cross.', 'opposite', guideMiuCubeUrl],
      ['Clear', 'Orange goal reached', 'Place and orient the last pieces.', 'solved', guideMiuSolvedUrl],
    ],
  },
}

const exampleStickers = {
  scramble: ['red', 'orange', 'blue', 'green', 'white', 'orange', 'blue', 'red', 'yellow'],
  flower: ['gray', 'orange', 'gray', 'orange', 'yellow', 'orange', 'gray', 'orange', 'gray'],
  cross: ['gray', 'orange', 'gray', 'orange', 'orange', 'orange', 'gray', 'orange', 'gray'],
  middle: ['orange', 'orange', 'orange', 'orange', 'orange', 'orange', 'green', 'red', 'blue'],
  opposite: ['gray', 'yellow', 'gray', 'yellow', 'yellow', 'yellow', 'gray', 'yellow', 'gray'],
  solved: ['orange', 'orange', 'orange', 'orange', 'orange', 'orange', 'orange', 'orange', 'orange'],
}

const pageCopy = {
  story: {
    ja: {
      title: 'シンソウ学園 | ストーリー',
      heading: 'ストーリー',
      lead: 'あなたは、自分をどこまで理解しているだろうか。',
      paragraphs: [
        '何が得意で、何が苦手なのか。',
        'どこまで出来て、どこから出来ないのか。',
        'そして、その評価は本当に正しいのだろうか。',
        '道喜玖永学園。',
        'そこは、普通の学校ではない。',
        '学力でもない。\n運動能力でもない。',
        '生徒達は、独自の試験によって選ばれる。',
        'そこでは、人の考え方、物事の捉え方、そして“知覚”が問われる。',
        '公立高校の受験に失敗した少年、天導アキラ。',
        '自分を凡人だと思い込み、自分には特別な才能などないと信じていた。',
        'しかし、道喜玖永学園で出会う仲間達は、誰もがどこか普通ではなかった。',
        '努力を続ける者。',
        '天才と呼ばれる者。',
        '何も考えていないように見える者。',
        'そして、誰にも理解されないまま、自分の道を進み続ける者。',
        '彼らと出会い、競い、悩み、迷いながら。',
        'アキラは少しずつ、自分自身と向き合うことになる。',
        '才能とは何か。',
        '努力とは何か。',
        '天才と凡人の違いとは何か。',
        'そして。',
        '本当に乗り越えなければならない相手は、誰なのか。',
        '答えは、まだ誰も知らない。',
        '自分の人生を、自分の意思で選び取るための物語。',
        'シンソウ学園ストーリー。',
      ],
    },
    en: {
      title: 'Shinso Gakuen | Story',
      heading: 'Story',
      lead:
        'A special academy where gifted students gather. Knowledge alone is never enough.',
      body:
        'Subtle contradictions, intersecting testimony, and futures left unchosen lead you toward the truth hidden inside the academy.',
    },
  },
  character: {
    ja: {
      title: 'シンソウ学園 | キャラクター',
      heading: 'キャラクター',
      lead: 'それぞれの才能と秘密を抱えた生徒たち。',
      body:
        '観察する者、問いを立てる者、沈黙を選ぶ者。彼らの言葉と行動が、物語の答えを形作る。',
    },
    en: {
      title: 'Shinso Gakuen | Character',
      heading: 'Character',
      lead: 'Students carrying their own talents and secrets.',
      body:
        'Those who observe, those who question, and those who choose silence shape the answers hidden in the story.',
    },
  },
  app: {
    ja: {
      title: 'シンソウ学園 | アプリ',
      heading: 'アプリ',
      status: 'NOW LIVE',
      lead: 'シンソウ学園、開幕。',
      body: '会話を読み、パズルギミックを解き、勇気への真相へ近づく。\n学園思考パズルアドベンチャー。\n\niOS / Android 向けにリリース。\nシンソウ学園の物語を、あなたの手の中へ。',
    },
    en: {
      title: 'Shinso Gakuen | App',
      heading: 'App',
      status: 'NOW LIVE',
      lead: 'Shinso Gakuen begins.',
      body:
        'Read the conversations, solve the puzzle gimmicks, and move closer to the truth behind courage.\nA school-thinking puzzle adventure.\n\nNow available for iOS and Android.\nCarry the story of Shinso Gakuen in your hands.',
    },
  },
  book: {
    ja: {
      title: 'シンソウ学園 | 書籍',
      heading: '書籍',
      status: 'SHINSO GAKUEN EXTRA STORIES',
      lead: 'もっとシンソウを\n知りたいあなたへ',
      body: 'アプリでは描かれなかった、\nもうひとつの\nシンソウ学園。',
      note: '選ばれなかった言葉、隠された感情、\nキャラクターたちの本音まで。\n物語の奥へ、もう一歩。',
      footer: 'SHINSO GAKUEN NOVELIZATION',
    },
    en: {
      title: 'Shinso Gakuen | Books',
      heading: 'Books',
      status: 'SHINSO GAKUEN EXTRA STORIES',
      lead: 'For those who want to know\nShinso more deeply',
      body: 'Another Shinso Gakuen,\nbeyond what the app reveals.',
      note:
        'The words left unchosen, the emotions kept hidden,\nand the honest thoughts behind each character.\nTake one more step into the depths of the story.',
      footer: 'SHINSO GAKUEN NOVELIZATION',
    },
  },
  comic: {
    ja: {
      title: 'シンソウ学園 | コミック',
      heading: 'コミック',
      lead: '',
      body: 'シンソウ学園のちびキャラたちによる、ちょっと不思議で、ちょっとゆるい日常漫画。',
    },
    en: {
      title: 'Shinso Gakuen | Comic',
      heading: 'Comic',
      lead: '',
      body: 'A comic page for the atmosphere and story of Shinso Gakuen.',
    },
  },
  guide: {
    ja: {
      title: 'シンソウ学園 | 攻略',
      heading: '攻略',
      lead: 'スマホアプリ内の3x3ギミックは、毎回オレンジ面がゴール。',
      body: '面を回す操作と、見回すだけの視点変更を分けて考えます。',
    },
    en: {
      title: 'Shinso Gakuen | Guide',
      heading: 'Guide',
      lead: 'In-app 3x3 logic: the orange face is the goal every time.',
      body: 'Separate face turns from camera/view changes.',
    },
  },
}

function getInitialLanguage() {
  const params = new URLSearchParams(window.location.search)
  const queryLanguage = params.get('lang')
  const savedLanguage = window.localStorage.getItem(storageKey)

  if (queryLanguage === 'ja' || queryLanguage === 'en') return queryLanguage
  if (savedLanguage === 'ja' || savedLanguage === 'en') return savedLanguage
  return 'ja'
}

function getPageId() {
  const name = window.location.pathname.split('/').pop()?.replace('.html', '')
  return pageCopy[name] ? name : 'story'
}

function ContentPage() {
  const [language, setLanguage] = useState(getInitialLanguage)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [comicPageIndex, setComicPageIndex] = useState(0)
  const [guideExampleIndex, setGuideExampleIndex] = useState(0)
  const pageId = getPageId()
  const copy = useMemo(() => pageCopy[pageId][language], [language, pageId])
  const guideCopy = guideContent[language]
  const currentExample = guideCopy.example[guideExampleIndex]
  const isStory = pageId === 'story'
  const isGuide = pageId === 'guide'
  const isBook = pageId === 'book'
  const isApp = pageId === 'app'
  const currentComicPage = comicPages[comicPageIndex]

  useEffect(() => {
    document.documentElement.lang = language
    document.title = copy.title
    window.localStorage.setItem(storageKey, language)
  }, [copy.title, language])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [language, pageId])

  return (
    <main className={`content-shell content-shell-${pageId}`}>
      <header className="content-header">
        <div className="content-actions">
          <button
            className="menu-toggle"
            type="button"
            aria-controls="site-navigation"
            aria-expanded={isMenuOpen}
            aria-label={language === 'ja' ? 'メニュー' : 'Menu'}
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <a className="content-logo" href={withLanguage('./', language)}>
          SHINSO GAKUEN
        </a>
        <div className="site-lang" aria-label="Language">
          {['ja', 'en'].map((lang) => (
            <button
              key={lang}
              type="button"
              aria-pressed={language === lang}
              onClick={() => setLanguage(lang)}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>
      </header>

      <nav
        className={`site-nav${isMenuOpen ? ' is-open' : ''}`}
        id="site-navigation"
        aria-label="Site navigation"
      >
        {navItems.map((item) => (
          <a
            aria-current={item.id === pageId ? 'page' : undefined}
            data-tooltip={item.tooltip?.[language]}
            href={withLanguage(item.href, language)}
            key={item.id}
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="nav-label">{item.label[language]}</span>
            {item.badge ? <span className="nav-badge">{item.badge[language]}</span> : null}
          </a>
        ))}
      </nav>

      {isGuide ? (
        <section className="guide-hero" aria-label={language === 'ja' ? 'アプリ内キューブギミック攻略の案内' : 'In-app cube logic guide intro'}>
          <img src={guideOrangeGoalUrl} alt="" />
          <div>
            <p>{language === 'ja' ? 'APP 3x3 LOGIC' : 'APP 3x3 LOGIC'}</p>
            <h1>{copy.heading}</h1>
            <strong>{copy.lead}</strong>
            <span>{copy.body}</span>
          </div>
        </section>
      ) : (
        <section className="content-visual" aria-hidden="true">
          <img src={keyVisualOtherUrl} alt="" />
        </section>
      )}

      {isBook ? (
        <section className="book-hero" aria-label={language === 'ja' ? 'シンソウ学園 書籍' : 'Shinso Gakuen books'}>
          <img className="book-hero-bg" src={bookHeroUrl} alt="" aria-hidden="true" />
          <div className="book-hero-copy">
            <div className="book-hero-kicker">
              <strong>{copy.heading}</strong>
              <span>{copy.status}</span>
            </div>
            <h1>
              {copy.lead.split('\n').map((line, index) => (
                <Fragment key={line}>
                  {index > 0 ? <br /> : null}
                  {line}
                </Fragment>
              ))}
            </h1>
            <div className="book-hero-summary">
              {copy.body.split('\n').map((line, index) => (
                <Fragment key={line}>
                  {index > 0 ? <br /> : null}
                  {line}
                </Fragment>
              ))}
            </div>
            <p className="book-hero-note">
              {copy.note.split('\n').map((line, index) => (
                <Fragment key={`${line}-${index}`}>
                  {index > 0 ? <br /> : null}
                  {line}
                </Fragment>
              ))}
            </p>
            <small>{copy.footer}</small>
          </div>
        </section>
      ) : null}

      {isApp ? (
        <section className="app-hero" aria-label={language === 'ja' ? 'シンソウ学園 アプリ' : 'Shinso Gakuen app'}>
          <img className="app-hero-bg" src={appHeroUrl} alt="" aria-hidden="true" />
          <div className="app-hero-copy">
            <p>{copy.status}</p>
            <h1>{copy.lead}</h1>
            <span>
              {copy.body.split('\n').map((line, index) => (
                <Fragment key={`${line}-${index}`}>
                  {index > 0 ? <br /> : null}
                  {line}
                </Fragment>
              ))}
            </span>
            <div className="app-hero-actions" aria-label={language === 'ja' ? 'アプリストア' : 'App stores'}>
              {releasePlatforms.map((platform) => (
                <a href={platform.url} key={platform.id} rel="noreferrer" target="_blank">
                  <small>{platform.device}</small>
                  <strong>{platform.label}</strong>
                  <img src={platform.badge} alt={platform.badgeAlt[language]} />
                </a>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {!isBook && !isApp ? (
        <article className={`content-panel${isStory ? ' story-panel' : ''}${isGuide ? ' guide-intro-panel' : ''}`}>
        {isStory ? (
          <>
            <img
              className="story-image-deco story-image-deco-veil"
              src={storyVeilUrl}
              alt=""
              aria-hidden="true"
            />
            <img
              className="story-image-deco story-image-deco-cube"
              src={mysteryCubeUrl}
              alt=""
              aria-hidden="true"
            />
            <img
              className="story-image-deco story-image-deco-fragments"
              src={cubeFragmentsUrl}
              alt=""
              aria-hidden="true"
            />
          </>
        ) : null}
        {isGuide ? null : <h1>{copy.heading}</h1>}
        {copy.status ? (
          <p className="content-status">{copy.status}</p>
        ) : null}
        {copy.lead && !isGuide ? <p className="content-lead">{copy.lead}</p> : null}
        {isGuide ? (
          <div className="guide-rules" aria-label={guideCopy.rulesLabel}>
            {guideCopy.rules.map(([number, title, body]) => (
              <section key={number}>
                <span>{number}</span>
                <h2>{title}</h2>
                <p>{body}</p>
              </section>
            ))}
          </div>
        ) : copy.paragraphs ? (
          <div className="story-prose">
            {copy.paragraphs.map((paragraph) => (
              <p key={paragraph}>
                {paragraph.split('\n').map((line, index) => (
                  <Fragment key={line}>
                    {index > 0 ? <br /> : null}
                    {line}
                  </Fragment>
                ))}
              </p>
            ))}
          </div>
        ) : (
          <p>
            {copy.body.split('\n').map((line, index) => (
              <Fragment key={line}>
                {index > 0 ? <br /> : null}
                {line}
              </Fragment>
            ))}
          </p>
        )}
        </article>
      ) : null}

      {pageId === 'guide' ? (
        <>
          <section className="guide-visual-strip" aria-label={language === 'ja' ? '攻略イメージ' : 'Guide visuals'}>
            {guideVisuals.map((image) => (
              <img src={image} alt="" key={image} />
            ))}
          </section>

          <section className="guide-flow" aria-label={guideCopy.flowLabel}>
            {guideCopy.steps.map(([title, cue, body, image, miu], index) => (
              <article className="guide-step" key={title}>
                <img src={image} alt="" />
                <div>
                  <img className="guide-step-miu" src={miu} alt="" />
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h2>{title}</h2>
                  <strong>{cue}</strong>
                  <p>{body}</p>
                </div>
              </article>
            ))}
          </section>

          <section className="guide-example" aria-label={guideCopy.exampleLabel}>
            <div className="guide-example-copy">
              <p>{guideCopy.exampleEyebrow}</p>
              <h2>{guideCopy.exampleTitle}</h2>
              <strong>{currentExample[0]}</strong>
              <span>{currentExample[1]}</span>
              <small>{currentExample[2]}</small>
              <div className="guide-example-actions">
                <button
                  type="button"
                  disabled={guideExampleIndex === 0}
                  onClick={() => setGuideExampleIndex((index) => Math.max(0, index - 1))}
                >
                  {guideCopy.prev}
                </button>
                <button
                  type="button"
                  onClick={() => setGuideExampleIndex(0)}
                >
                  {guideCopy.reset}
                </button>
                <button
                  type="button"
                  disabled={guideExampleIndex === guideCopy.example.length - 1}
                  onClick={() =>
                    setGuideExampleIndex((index) => Math.min(guideCopy.example.length - 1, index + 1))
                  }
                >
                  {guideCopy.next}
                </button>
              </div>
            </div>
            <div className="guide-example-stage">
              <div className={`guide-mini-cube guide-mini-cube-${currentExample[3]}`}>
                {exampleStickers[currentExample[3]].map((color, index) => (
                  <span className={`cube-sticker cube-sticker-${color}`} key={`${color}-${index}`} />
                ))}
              </div>
              <img src={currentExample[4]} alt="" />
              <div className="guide-example-dots" aria-hidden="true">
                {guideCopy.example.map((step, index) => (
                  <button
                    type="button"
                    aria-label={step[0]}
                    aria-current={guideExampleIndex === index ? 'step' : undefined}
                    key={step[0]}
                    onClick={() => setGuideExampleIndex(index)}
                  />
                ))}
              </div>
            </div>
          </section>

          <section className="guide-board" aria-label={guideCopy.boardLabel}>
            <div className="guide-board-heading">
              <p>{guideCopy.boardEyebrow}</p>
              <h2>{guideCopy.boardTitle}</h2>
            </div>
            <div className="guide-algorithms">
              {guideCopy.algorithms.map(([name, notation, phrase]) => (
                <article key={name}>
                  <h3>{name}</h3>
                  <code>{notation}</code>
                  <p>{phrase}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="guide-tips" aria-label={guideCopy.tipsLabel}>
            {guideCopy.tips.map(([title, body]) => (
              <article key={title}>
                <h2>{title}</h2>
                <p>{body}</p>
              </article>
            ))}
          </section>
        </>
      ) : null}

      {pageId === 'character' ? (
        <section className="character-section" aria-label="Character profiles">
          {characterProfiles.map((character) => (
            <article className="character-card" key={character.id}>
              <div className="character-portrait">
                <img src={character.image} alt="" />
              </div>
              <div className="character-copy">
                <p>{character.roman}</p>
                <h2>{character.name[language]}</h2>
                <strong>{character.grade[language]}</strong>
                <span>{character.description[language]}</span>
              </div>
            </article>
          ))}
        </section>
      ) : null}

      {pageId === 'book' ? (
        <section className="book-section" aria-label={language === 'ja' ? 'シンソウ学園 書籍一覧' : 'Shinso Gakuen books'}>
          {bookVolumes.map((book) => {
            const content = (
              <>
                <div className={`book-cover${book.isComingSoon ? ' book-cover-coming-soon' : ''}`} aria-hidden="true">
                  <img src={book.image} alt="" />
                  {book.isComingSoon ? (
                    <div className="book-cover-label">
                      <span>COMING</span>
                      <strong>SOON</strong>
                    </div>
                  ) : null}
                </div>
                <div className="book-copy">
                  <p>{book.status[language]}</p>
                  <h2>{book.title[language]}</h2>
                  <small>{book.subtitle[language]}</small>
                  <span>{book.body[language]}</span>
                  {book.url ? (
                    <strong>{language === 'ja' ? 'Amazonで見る' : 'View on Amazon'}</strong>
                  ) : (
                    <em>{language === 'ja' ? '続報をお待ちください' : 'More details to come'}</em>
                  )}
                </div>
              </>
            )

            return book.url ? (
              <a
                className="book-card book-card-live"
                href={book.url}
                key={book.id}
                rel="noreferrer"
                target="_blank"
              >
                {content}
              </a>
            ) : (
              <article className="book-card" key={book.id}>
                {content}
              </article>
            )
          })}
        </section>
      ) : null}

      {pageId === 'comic' ? (
        <section className="comic-section" aria-label={language === 'ja' ? 'シンソウ学園の漫画' : 'Shinso Gakuen comic'}>
          <div className="comic-pager" aria-label={language === 'ja' ? 'コミックページ切り替え' : 'Comic page navigation'}>
            <button
              type="button"
              disabled={comicPageIndex === 0}
              onClick={() => setComicPageIndex((index) => Math.max(index - 1, 0))}
            >
              {language === 'ja' ? '前へ' : 'Prev'}
            </button>
            <span>
              {comicPages.length - comicPageIndex}/{comicPages.length}
            </span>
            <button
              type="button"
              disabled={comicPageIndex === comicPages.length - 1}
              onClick={() => setComicPageIndex((index) => Math.min(index + 1, comicPages.length - 1))}
            >
              {language === 'ja' ? '次へ' : 'Next'}
            </button>
          </div>
          <img
            src={currentComicPage[language]}
            alt={
              language === 'ja'
                ? `シンソウ学園 コミック ${currentComicPage.id}`
                : `Shinso Gakuen Comic ${currentComicPage.id}`
            }
          />
        </section>
      ) : null}

      <footer className="content-footer">
        <span>© 2026 Kohei Elimi Lab</span>
        <a href={officialXUrl} target="_blank" rel="noreferrer">
          <img src={xLogoUrl} alt="" />
          <span>@sio_sio_bull</span>
        </a>
      </footer>
      <CookieConsent language={language} />
    </main>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContentPage />
  </StrictMode>,
)
