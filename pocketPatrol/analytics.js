(() => {
  'use strict';
  const measurementId = 'G-01XQP2LLWX';
  const consentKey = 'pocketpatrol.analytics-consent.v1';
  const lifetime = 180 * 24 * 60 * 60 * 1000;
  const cookiePath = '/policy/pocketPatrol/';
  const cookiePrefix = 'pocketpatrol';
  const disabledKey = 'ga-disable-' + measurementId;
  let consent = null;
  let started = false;
  let expiryTimer;
  let returnFocus;
  window[disabledKey] = true;

  function readConsent() {
    const choices = [];
    for (const storage of ['localStorage', 'sessionStorage']) {
      try {
        const raw = window[storage].getItem(consentKey);
        const saved = JSON.parse(raw);
        if (saved && ['granted', 'denied'].includes(saved.value) &&
            Number.isFinite(saved.expires) && saved.expires > Date.now() &&
            saved.expires <= Date.now() + lifetime) {
          // Do not trust a saved grant that this browser can no longer revoke.
          if (saved.value === 'granted') {
            const probeKey = consentKey + '.writable';
            window[storage].setItem(probeKey, Date.now() + ':' + Math.random());
            window[storage].removeItem(probeKey);
          }
          choices.push(saved);
        }
      } catch { /* Storage may be unavailable. Default to no analytics. */ }
    }
    // A session-only refusal must win over an older durable grant.
    choices.sort((a, b) => b.expires - a.expires || (a.value === 'denied' ? -1 : 1));
    return choices[0] || null;
  }

  function saveConsent(value) {
    const saved = { value, expires: Date.now() + lifetime };
    for (const storage of ['localStorage', 'sessionStorage']) {
      try { window[storage].setItem(consentKey, JSON.stringify(saved)); } catch {
        try { window[storage].removeItem(consentKey); } catch {}
      }
    }
    consent = saved;
    scheduleExpiry();
  }

  function clearAnalyticsCookies() {
    // This site's prefix and path avoid deleting other sites' analytics cookies.
    const names = new Set([cookiePrefix + '_ga', cookiePrefix + '_ga_01XQP2LLWX']);
    document.cookie.split(';').forEach(cookie => {
      const name = cookie.trim().split('=')[0];
      if (name === cookiePrefix + '_ga' || name.startsWith(cookiePrefix + '_ga_')) names.add(name);
    });
    names.forEach(name => {
      document.cookie = name + '=; Max-Age=0; Path=' + cookiePath + '; SameSite=Lax';
    });
  }

  function startAnalytics() {
    if (started || consent?.value !== 'granted' || consent.expires <= Date.now()) return;
    started = true;
    window[disabledKey] = false;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    // Basic consent mode: the Google tag itself is absent until opt-in.
    window.gtag('consent', 'default', {
      analytics_storage: 'granted',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied'
    });
    window.gtag('js', new Date());
    window.gtag('config', measurementId, {
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
      cookie_domain: 'none',
      cookie_path: cookiePath,
      cookie_prefix: cookiePrefix,
      cookie_expires: 180 * 24 * 60 * 60,
      cookie_update: false,
      // Do not include arbitrary query parameters or fragments in page URLs.
      page_location: location.origin + location.pathname,
      page_referrer: document.referrer ? new URL(document.referrer).origin + new URL(document.referrer).pathname : ''
    });
    const script = document.createElement('script');
    script.id = 'pocketpatrol-google-tag';
    script.async = true;
    script.dataset.loadState = 'loading';
    script.addEventListener('load', () => { script.dataset.loadState = 'loaded'; });
    script.addEventListener('error', () => { script.dataset.loadState = 'failed'; });
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + measurementId;
    document.head.appendChild(script);
  }

  function stopAnalytics() {
    window[disabledKey] = true;
    clearAnalyticsCookies();
    if (started) {
      // A reload removes Google's installed listeners and queued events too.
      window.gtag = function () {};
      document.getElementById('pocketpatrol-google-tag')?.remove();
      location.reload();
    }
  }

  function scheduleExpiry() {
    clearTimeout(expiryTimer);
    if (!consent) return;
    // Browser timers have a signed 32-bit limit. Recheck at least daily.
    expiryTimer = setTimeout(() => {
      if (consent.expires <= Date.now()) {
        consent = null;
        stopAnalytics();
        showBanner(false);
      } else scheduleExpiry();
    }, Math.min(consent.expires - Date.now(), 24 * 60 * 60 * 1000));
  }

  function showBanner(focus) {
    const banner = document.getElementById('cookie-banner');
    if (!banner) return;
    banner.hidden = false;
    document.getElementById('cookie-close').hidden = !consent;
    document.querySelectorAll('[data-cookie-settings]').forEach(button => button.setAttribute('aria-expanded', 'true'));
    if (focus) {
      const title = document.getElementById('cookie-title');
      title.tabIndex = -1;
      title.focus();
    }
  }

  function hideBanner() {
    document.getElementById('cookie-banner').hidden = true;
    document.querySelectorAll('[data-cookie-settings]').forEach(button => button.setAttribute('aria-expanded', 'false'));
    (returnFocus || document.querySelector('[data-cookie-settings]'))?.focus({ preventScroll: true });
  }

  document.addEventListener('DOMContentLoaded', () => {
    consent = readConsent();
    document.querySelectorAll('[data-cookie-settings]').forEach(button => {
      button.setAttribute('aria-expanded', 'false');
      button.addEventListener('click', () => { returnFocus = button; showBanner(true); });
    });
    document.querySelectorAll('[data-cookie-choice]').forEach(button => button.addEventListener('click', () => {
      saveConsent(button.dataset.cookieChoice);
      hideBanner();
      if (consent.value === 'granted') startAnalytics();
      else stopAnalytics();
    }));
    document.getElementById('cookie-close').addEventListener('click', hideBanner);
    document.getElementById('cookie-banner').addEventListener('keydown', event => {
      if (event.key === 'Escape' && consent) { event.preventDefault(); hideBanner(); }
    });
    if (!consent) { clearAnalyticsCookies(); showBanner(false); }
    else if (consent.value === 'granted') startAnalytics();
    else clearAnalyticsCookies();
    scheduleExpiry();
  });

  addEventListener('storage', event => {
    if (event.key !== consentKey && event.key !== null) return;
    // A newer choice in another tab must also replace the session fallback.
    try { sessionStorage.removeItem(consentKey); } catch {}
    consent = readConsent();
    if (consent?.value === 'granted') startAnalytics();
    else { stopAnalytics(); if (!consent) showBanner(false); }
    scheduleExpiry();
  });
})();
