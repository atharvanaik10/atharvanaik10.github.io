const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

let analyticsReady = false;
let initialized = false;
let sectionObserver;

function hasWindow() {
  return typeof window !== 'undefined' && typeof document !== 'undefined';
}

function loadGoogleAnalytics() {
  if (!hasWindow() || !measurementId) return;
  if (document.querySelector(`script[data-ga-loader="${measurementId}"]`)) {
    analyticsReady = true;
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
  };

  window.gtag('js', new Date());
  window.gtag('config', measurementId, { send_page_view: false });

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  script.dataset.gaLoader = measurementId;
  document.head.appendChild(script);

  analyticsReady = true;
}

function trackEvent(name, params = {}) {
  if (!analyticsReady || !window.gtag) return;
  window.gtag('event', name, params);
}

export function trackPageView(path = window.location.hash || '#/') {
  if (!measurementId) return;
  trackEvent('page_view', {
    page_title: document.title,
    page_location: window.location.href,
    page_path: path
  });
}

function handleTrackedClick(event) {
  const target = event.target.closest('[data-analytics-id]');
  if (!target) return;

  trackEvent('select_content', {
    content_type: 'button_or_link',
    item_id: target.dataset.analyticsId,
    link_url: target.getAttribute('href') || '',
    link_text: target.textContent?.trim().slice(0, 100) || ''
  });
}

function initializeSectionTracking() {
  if (!('IntersectionObserver' in window)) return;

  sectionObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        const sectionId = entry.target.dataset.trackSection;
        if (!sectionId || entry.target.dataset.sectionTracked === 'true') return;

        trackEvent('view_item', {
          item_id: sectionId,
          item_category: 'section',
          item_name: sectionId
        });

        entry.target.dataset.sectionTracked = 'true';
      });
    },
    { threshold: 0.4 }
  );

  document.querySelectorAll('[data-track-section]').forEach(el => sectionObserver.observe(el));
}

export function initAnalytics() {
  if (!hasWindow() || initialized) return;
  initialized = true;

  if (!measurementId) {
    console.info('Analytics disabled: define VITE_GA_MEASUREMENT_ID to enable tracking.');
    return;
  }

  loadGoogleAnalytics();
  document.addEventListener('click', handleTrackedClick);
  initializeSectionTracking();
}

export function refreshSectionTracking() {
  if (!measurementId || !hasWindow() || !sectionObserver) return;
  document.querySelectorAll('[data-track-section]').forEach(el => sectionObserver.observe(el));
}
