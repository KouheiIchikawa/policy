(() => {
  'use strict';
  const root = document.querySelector('.keyvisual');
  if (!root) return;
  const slides = [...root.querySelectorAll('.kv-slide')];
  const controls = root.querySelector('.kv-controls');
  const dots = [...root.querySelectorAll('[data-kv]')];
  const prev = root.querySelector('.kv-prev');
  const next = root.querySelector('.kv-next');
  const pause = root.querySelector('.kv-pause');
  const status = root.querySelector('.kv-status');
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let index = 0;
  let timer;
  let request = 0;
  let paused = motion.matches;
  let hovering = false;
  const ja = () => document.documentElement.lang === 'ja';
  const label = (n) => ja() ? `キービジュアル ${n + 1}` : `Key visual ${n + 1}`;
  const descriptions = [
    ['POCKET PATROL - ボルト、フレア、リーフ', 'POCKET PATROL - Volt, Flare, Leaf'],
    ['ノヴァ、セラ、リン', 'Nova, Sera and Rin'],
    ['ノヴァ、セラ、ボルト、フレア、リーフ', 'Nova, Sera, Volt, Flare and Leaf'],
    ['ボルト、フレア、リーフと、ヒビキ、セヴラン、ハウンド、ヴェイルの対峙', 'Volt, Flare and Leaf face Hibiki, Sevran, Hound and Veil']
  ];
  function labels() {
    root.setAttribute('aria-roledescription', ja() ? 'スライドショー' : 'carousel');
    prev.setAttribute('aria-label', ja() ? '前のキービジュアル' : 'Previous key visual');
    next.setAttribute('aria-label', ja() ? '次のキービジュアル' : 'Next key visual');
    pause.setAttribute('aria-label', paused ? (ja() ? '自動切替を再生' : 'Play slideshow') : (ja() ? '自動切替を停止' : 'Pause slideshow'));
    pause.textContent = paused ? '\u25b6' : '\u275a\u275a';
    slides.forEach((slide,n) => {
      slide.setAttribute('aria-roledescription', ja() ? 'スライド' : 'slide');
      slide.setAttribute('aria-label', `${label(n)} / ${slides.length}`);
      dots[n].setAttribute('aria-label', label(n));
      slide.querySelector('img').alt = descriptions[n][ja() ? 0 : 1];
    });
  }
  function schedule() {
    clearTimeout(timer);
    if (!paused && !hovering && !document.hidden) timer = setTimeout(() => show(index + 1), 6500);
  }
  function show(n, manual = false) {
    const target = (n + slides.length) % slides.length;
    const image = slides[target].querySelector('img');
    const currentRequest = ++request;
    if (manual) { paused = true; labels(); clearTimeout(timer); }
    if (!image.complete || !image.naturalWidth) {
      if (!image.complete) image.addEventListener('load', () => {
        if (request === currentRequest) show(target, manual);
      }, { once: true });
      if (manual) status.textContent = ja() ? '画像を読み込んでいます。' : 'Loading image.';
      schedule();
      return;
    }
    index = target;
    slides.forEach((slide, i) => {
      const active = i === index;
      slide.classList.toggle('is-active', active);
      slide.setAttribute('aria-hidden', String(!active));
      slide.inert = !active;
      if (active) dots[i].setAttribute('aria-current', 'true');
      else dots[i].removeAttribute('aria-current');
    });
    if (manual) { paused = true; status.textContent = `${label(index)} / ${slides.length}`; labels(); }
    schedule();
  }
  dots.forEach((dot, i) => dot.addEventListener('click', () => show(i, true)));
  prev.addEventListener('click', () => show(index - 1, true));
  next.addEventListener('click', () => show(index + 1, true));
  pause.addEventListener('click', () => { paused = !paused; labels(); schedule(); });
  controls.addEventListener('keydown', event => {
    if (event.ctrlKey || event.metaKey || event.altKey) return;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault(); show(index + (event.key === 'ArrowRight' ? 1 : -1), true);
    } else if (event.key === 'Home' || event.key === 'End') {
      event.preventDefault(); show(event.key === 'Home' ? 0 : slides.length - 1, true);
    }
  });
  root.addEventListener('mouseenter', () => { hovering = true; schedule(); });
  root.addEventListener('mouseleave', () => { hovering = false; schedule(); });
  root.addEventListener('focusin', () => { paused = true; labels(); schedule(); });
  root.addEventListener('focusout', event => { if (!root.contains(event.relatedTarget)) { schedule(); } });
  document.addEventListener('visibilitychange', schedule);
  motion.addEventListener('change', () => { if (motion.matches) { paused = true; labels(); schedule(); } });
  new MutationObserver(labels).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  controls.hidden = false;
  labels();
  schedule();
})();
