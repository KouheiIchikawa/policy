(() => {
  'use strict';
  const root = document.querySelector('.keyvisual');
  if (!root) return;
  const slides = [...root.querySelectorAll('.kv-slide')];
  const pause = root.querySelector('.kv-pause');
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let index = 0;
  let timer;
  let paused = motion.matches;
  const ja = () => document.documentElement.lang === 'ja';
  const descriptions = [
    ['POCKET PATROL - ボルト、フレア、リーフ', 'POCKET PATROL - Volt, Flare, Leaf'],
    ['ノヴァ、セラ、リン', 'Nova, Sera and Rin'],
    ['ノヴァ、セラ、ボルト、フレア、リーフ', 'Nova, Sera, Volt, Flare and Leaf'],
    ['ボルト、フレア、リーフと、ヒビキ、セヴラン、ハウンド、ヴェイルの対峙', 'Volt, Flare and Leaf face Hibiki, Sevran, Hound and Veil']
  ];
  function labels() {
    pause.setAttribute('aria-label', paused ? (ja() ? '\u81ea\u52d5\u5207\u66ff\u3092\u518d\u751f' : 'Play slideshow') : (ja() ? '\u81ea\u52d5\u5207\u66ff\u3092\u505c\u6b62' : 'Pause slideshow'));
    pause.textContent = pause.getAttribute('aria-label');
    slides.forEach((slide,n) => {
      slide.setAttribute('aria-label', `${n + 1} / ${slides.length}`);
      slide.querySelector('img').alt = descriptions[n][ja() ? 0 : 1];
    });
  }
  function schedule() {
    clearTimeout(timer);
    if (!paused && !document.hidden) timer = setTimeout(advance, 6500);
  }
  function advance() {
    if (paused || document.hidden) return;
    const target = (index + 1) % slides.length;
    const image = slides[target].querySelector('img');
    if (!image.complete || !image.naturalWidth) { schedule(); return; }
    index = target;
    slides.forEach((slide,i) => {
      const active = i === index;
      slide.classList.toggle('is-active', active);
      slide.setAttribute('aria-hidden', String(!active));
      slide.inert = !active;
    });
    schedule();
  }
  pause.addEventListener('click', () => { paused = !paused; labels(); schedule(); });
  document.addEventListener('visibilitychange', schedule);
  motion.addEventListener('change', () => { if (motion.matches) { paused = true; labels(); schedule(); } });
  new MutationObserver(labels).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  pause.hidden = false;
  labels();
  schedule();
})();
