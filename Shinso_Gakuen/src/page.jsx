import { Fragment, StrictMode, useEffect, useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import akimotoUrl from '../app/assets/characters/akimoto.png'
import akiraUrl from '../app/assets/characters/akira.png'
import kurumiUrl from '../app/assets/characters/kurumi.png'
import meguUrl from '../app/assets/characters/megu.png'
import miuUrl from '../app/assets/characters/miu.png'
import keyVisualOtherUrl from '../app/assets/ShisoGakuenKeyVisual_other.png'
import comingSoonIconUrl from '../app/assets/coming-soon-icon.png'
import cubeFragmentsUrl from '../app/assets/story/cube-fragments.png'
import mysteryCubeUrl from '../app/assets/story/mystery-cube.png'
import storyVeilUrl from '../app/assets/story/story-veil.png'
import xLogoUrl from '../app/assets/x-logo.svg'
import { navItems, officialXUrl, withLanguage } from './navigation'
import './page.css'

const storageKey = 'shinso-gakuen-lang'

const comicPages = [
  {
    ja: './assets/comic/comic002_ja.png',
    en: './assets/comic/comic002_en.png',
  },
  {
    ja: './assets/comic/comic001_ja.png',
    en: './assets/comic/comic001_en.png',
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
      status: 'COMING SOON',
      lead: '勇気とストーリーで知覚に迫る、学園思考パズルアドベンチャー。',
      body: 'あなたがこの学園を訪れる日を私たちは待っている。\n2026年6月公開予定',
    },
    en: {
      title: 'Shinso Gakuen | App',
      heading: 'App',
      status: 'COMING SOON',
      lead: 'A school puzzle adventure where courage and story sharpen perception.',
      body:
        'Planned for release on iOS and Android in June 2026. Store information will be available from this page when ready.',
    },
  },
  comic: {
    ja: {
      title: 'シンソウ学園 | コミック',
      heading: 'コミック',
      lead: 'シンソウ学園の漫画を公開中。',
      body: 'シンソウ学園のちびキャラたちによる、\nちょっと不思議で、ちょっとゆるい日常漫画。',
    },
    en: {
      title: 'Shinso Gakuen | Comic',
      heading: 'Comic',
      lead: 'Read the Shinso Gakuen comic.',
      body: 'A comic page for the atmosphere and story of Shinso Gakuen.',
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
  const [comicPageIndex, setComicPageIndex] = useState(0)
  const pageId = getPageId()
  const copy = useMemo(() => pageCopy[pageId][language], [language, pageId])
  const isStory = pageId === 'story'
  const currentComicPage = comicPages[comicPageIndex]

  useEffect(() => {
    document.documentElement.lang = language
    document.title = copy.title
    window.localStorage.setItem(storageKey, language)
  }, [copy.title, language])

  return (
    <main className="content-shell">
      <header className="content-header">
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

      <nav className="site-nav" aria-label="Site navigation">
        {navItems.map((item) => (
          <a
            aria-current={item.id === pageId ? 'page' : undefined}
            href={withLanguage(item.href, language)}
            key={item.id}
          >
            {item.label[language]}
          </a>
        ))}
      </nav>

      <section className="content-visual" aria-hidden="true">
        <img src={keyVisualOtherUrl} alt="" />
      </section>

      <article className={`content-panel${isStory ? ' story-panel' : ''}`}>
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
        <p className="content-kicker">{pageId}</p>
        <h1>{copy.heading}</h1>
        {copy.status ? (
          pageId === 'app' ? (
            <img className="content-status-icon" src={comingSoonIconUrl} alt="" />
          ) : (
            <p className="content-status">{copy.status}</p>
          )
        ) : null}
        <p className="content-lead">{copy.lead}</p>
        {copy.paragraphs ? (
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

      {pageId === 'app' ? (
        <section className="release-platforms" aria-label="Release platforms">
          {[
            { id: 'ios', label: 'iOS', device: 'App Store' },
            { id: 'android', label: 'Android', device: 'Google Play' },
          ].map((platform) => (
            <article className="release-card" key={platform.id}>
              <p>{platform.device}</p>
              <h2>{platform.label}</h2>
              <span>
                  {language === 'ja'
                    ? '2026年6月中リリース予定'
                    : 'Planned for June 2026'}
              </span>
            </article>
          ))}
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
              {comicPageIndex + 1}/{comicPages.length}
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
                ? `シンソウ学園 コミック ${String(comicPageIndex + 1).padStart(3, '0')}`
                : `Shinso Gakuen Comic ${String(comicPageIndex + 1).padStart(3, '0')}`
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
    </main>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContentPage />
  </StrictMode>,
)
