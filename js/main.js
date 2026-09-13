/*
========================================================================
   GENESIS TRADING CO. — Main JS
   Navbar, partners, contact form, Lucide, GSAP reveals
========================================================================
*/

document.addEventListener('DOMContentLoaded', () => {
  setupHeader();
  setupMobileMenu();
  setupAboutDropdown();
  ensureCatalogFooter();
  setupPartnerSlider();
  setupContactFormHandler();
  setupBrandVideo();
  setupLucideIcons();
  setupGsapAnimations();
});

function setupLucideIcons() {
  if (typeof lucide !== 'undefined' && typeof lucide.createIcons === 'function') {
    lucide.createIcons({
      attrs: {
        'stroke-width': 1.5,
      },
    });
  }
}

function setupHeader() {
  const header = document.querySelector('.site-header') || document.querySelector('header');
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach((link) => {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#')) return;
    const isActive =
      href.split('#')[0] === page ||
      (page === '' && href === 'index.html') ||
      (page === 'index.html' && href === './');
    link.classList.toggle('active', Boolean(isActive));
  });

  if (window.location.hash) {
    requestAnimationFrame(() => {
      const target = document.querySelector(window.location.hash);
      if (target) target.scrollIntoView({ behavior: 'auto', block: 'start' });
    });
  }
}

function setupMobileMenu() {
  const toggleBtn = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  if (!toggleBtn || !navMenu) return;

  const closeMenu = () => {
    toggleBtn.classList.remove('active');
    navMenu.classList.remove('active');
    toggleBtn.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  };

  toggleBtn.setAttribute('aria-expanded', 'false');
  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = !navMenu.classList.contains('active');
    toggleBtn.classList.toggle('active', open);
    navMenu.classList.toggle('active', open);
    toggleBtn.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('menu-open', open);
  });

  document.addEventListener('click', (e) => {
    if (
      navMenu.classList.contains('active') &&
      !navMenu.contains(e.target) &&
      !toggleBtn.contains(e.target)
    ) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  navMenu.querySelectorAll('a').forEach((link) => {
    if (link.matches('.has-dropdown > .nav-link-wrap > .nav-link')) return;
    link.addEventListener('click', closeMenu);
  });
}

function isDesktopNav() {
  return window.matchMedia('(min-width: 1101px)').matches;
}

function setupAboutDropdown() {
  const items = document.querySelectorAll('.has-dropdown');
  if (!items.length) return;

  const closeAll = () => {
    items.forEach((item) => {
      item.classList.remove('is-open');
      const caret = item.querySelector('.nav-caret-btn');
      if (caret) caret.setAttribute('aria-expanded', 'false');
    });
  };

  const scrollToHash = (hash) => {
    const target = hash ? document.querySelector(hash) : null;
    if (!target) return false;
    const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
    target.scrollIntoView({ behavior, block: 'start' });
    return true;
  };

  items.forEach((item) => {
    const caret = item.querySelector('.nav-caret-btn');
    const dropdown = item.querySelector('.nav-dropdown');
    if (!caret || !dropdown) return;

    const setOpen = (open) => {
      item.classList.toggle('is-open', open);
      caret.setAttribute('aria-expanded', String(open));
    };

    caret.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      setOpen(!item.classList.contains('is-open'));
    });

    const aboutLink = item.querySelector('.nav-link-wrap > .nav-link');
    if (aboutLink) {
      aboutLink.addEventListener('click', (event) => {
        if (!isDesktopNav()) {
          event.preventDefault();
          event.stopPropagation();
          setOpen(!item.classList.contains('is-open'));
        }
      });
    }

    item.addEventListener('mouseenter', () => {
      if (isDesktopNav()) setOpen(true);
    });
    item.addEventListener('mouseleave', () => {
      if (isDesktopNav()) setOpen(false);
    });

    dropdown.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', (event) => {
        const hash = link.hash;
        const targetPage = (link.pathname.split('/').pop() || 'about.html');
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const samePage = targetPage === currentPage || (currentPage === '' && targetPage === 'index.html');

        if (hash && samePage && scrollToHash(hash)) {
          event.preventDefault();
          history.pushState(null, '', hash);
        }

        setOpen(false);
      });
    });
  });

  document.addEventListener('click', (event) => {
    if (![...items].some((item) => item.contains(event.target))) closeAll();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeAll();
  });

  if (window.location.hash) {
    requestAnimationFrame(() => scrollToHash(window.location.hash));
  }
}

function ensureCatalogFooter() {
  if (!document.body.classList.contains('catalog-page-body') || document.querySelector('.site-footer')) return;
  document.querySelectorAll('.products-panel > div').forEach((element) => {
    if (element.textContent.includes('Genesis Trading Co. All rights reserved.')) element.remove();
  });
  const footer = document.createElement('footer');
  footer.className = 'site-footer catalog-footer';
  footer.innerHTML = `
    <div class="container footer-grid">
      <div class="footer-col footer-brand"><a href="index.html" class="logo-wrapper footer-logo"><img src="images/logo.png?v=2" alt="Genesis Trading Logo"></a><p>Medical equipment, diagnostics, and lifecycle support across Bangladesh.</p></div>
      <div class="footer-col"><h3>Explore</h3><ul><li><a href="index.html" class="footer-link">Home</a></li><li><a href="about.html" class="footer-link">About</a></li><li><a href="experience.html" class="footer-link">Experience</a></li><li><a href="contact.html" class="footer-link">Contact</a></li></ul></div>
      <div class="footer-col"><h3>Categories</h3><ul><li><a href="products.html?cat=ivd" class="footer-link">Diagnostics</a></li><li><a href="products.html?cat=imaging" class="footer-link">Imaging</a></li><li><a href="products.html?cat=hemodialysis" class="footer-link">Hemodialysis</a></li><li><a href="products.html?cat=lifesupport" class="footer-link">Life support</a></li></ul></div>
      <div class="footer-col"><h3>Headquarters</h3><div class="footer-contact"><div class="contact-item">Dhaka, Bangladesh</div><div class="contact-item"><a href="mailto:admin@genesistrading.biz">admin@genesistrading.biz</a></div><div class="contact-item"><a href="tel:+8802247121519">+88 02 247121519</a></div></div></div>
    </div>
    <div class="container footer-bottom"><div>&copy; 2026 Genesis Trading Co. All rights reserved.</div><div>www.genesistradingco.com</div></div>
  `;
  document.body.appendChild(footer);
}

function setupPartnerSlider() {
  const sliderTrack = document.querySelector('.slider-track');
  if (!sliderTrack) return;

  const partners = [
    { name: 'Canon Medical Systems', origin: 'Japan', logo: 'images/partners/canon.svg' },
    { name: 'Olympus', origin: 'Japan', logo: 'images/partners/olympus.svg' },
    { name: 'ALCOR Scientific', origin: 'USA', logo: 'images/partners/alcor-scientific.jpg' },
    { name: 'Boditech', origin: 'Korea', logo: 'images/partners/boditech.png' },
    { name: 'Unimed', origin: 'Turkiye', logo: 'images/partners/unimed.png' },
    { name: 'Maccura', origin: 'China', logo: 'images/partners/maccura.svg' },
    { name: 'Snibe', origin: 'China', logo: 'images/partners/snibe.png' },
    { name: 'Erba Mannheim', origin: 'Czech Republic', logo: 'images/partners/erba-mannheim.png' },
    { name: 'Randox', origin: 'UK', logo: 'images/partners/randox.png' },
    { name: 'Eurospital', origin: 'Italy', logo: 'images/partners/eurospital.svg' },
    { name: 'ECORAY', origin: 'Korea', logo: 'images/partners/ecoray.png' },
    { name: 'DRTECH', origin: 'Korea', logo: 'images/partners/drtech.png' },
    { name: 'GEMSS Healthcare', origin: 'Korea', logo: 'images/partners/gemss.png' },
    { name: 'KW Apparecchi', origin: 'Italy', logo: 'images/partners/kw-apparecchi.png' },
    { name: 'Renosem', origin: 'Korea', logo: 'images/partners/renosem.png' },
    { name: 'APEL', origin: 'Japan', logo: 'images/partners/apel.png' },
    { name: 'LABOMED', origin: 'USA', logo: 'images/partners/labomed.jpg' },
    { name: 'Dialife', origin: 'Switzerland', logo: 'images/partners/dialife.png' },
    { name: 'Mindray', origin: 'China', logo: 'images/partners/mindray.png' },
    { name: 'ORICH', origin: 'China', logo: 'images/partners/orich.png' },
    { name: 'Bermedi', origin: 'Germany', logo: 'images/partners/bermedi.png' },
  ];

  const renderCards = (container) => {
    partners.forEach((partner) => {
      const card = document.createElement('div');
      card.className = 'partner-logo-card';
      card.setAttribute('role', 'img');
      card.setAttribute('aria-label', `${partner.name} (${partner.origin})`);
      card.innerHTML = `
        <img
          class="partner-logo"
          src="${partner.logo}"
          alt="${partner.name} logo"
          loading="lazy"
          decoding="async"
        />
      `;
      card.addEventListener('click', () => {
        showToast(`Authorized distributor of ${partner.name} (${partner.origin})`);
      });
      container.appendChild(card);
    });
  };

  sliderTrack.innerHTML = '';
  renderCards(sliderTrack);
  renderCards(sliderTrack);
}

function setupContactFormHandler() {
  const form = document.getElementById('enquiry-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('enquiry-name').value;
    const email = document.getElementById('enquiry-email').value;
    const details = document.getElementById('enquiry-details').value;

    if (!name || !email) {
      alert('Please fill out the required name and email fields.');
      return;
    }

    const enquiry = {
      name,
      email,
      phone: document.getElementById('enquiry-phone').value,
      subject: document.getElementById('enquiry-subject').value,
      details,
      date: new Date().toISOString(),
    };

    const enquiries = JSON.parse(localStorage.getItem('enquiries') || '[]');
    enquiries.push(enquiry);
    localStorage.setItem('enquiries', JSON.stringify(enquiries));

    form.reset();
    showToast('Your Request for Quote (RFQ) was submitted successfully!');
  });
}

function setupGsapAnimations() {
  if (typeof gsap === 'undefined') return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) return;

  if (typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  gsap.defaults({ ease: 'power3.out', duration: 0.85 });

  const mm = gsap.matchMedia();

  mm.add('(prefers-reduced-motion: no-preference)', () => {
    const heroReveals = gsap.utils.toArray('.hero-lalilo .reveal, .page-hero .reveal');
    if (heroReveals.length) {
      gsap.from(heroReveals, {
        autoAlpha: 0,
        y: 32,
        duration: 0.9,
        stagger: 0.12,
        delay: 0.1,
        clearProps: 'transform',
      });
    }

    const bubbles = gsap.utils.toArray('.hero-bubbles .bubble');
    if (bubbles.length) {
      gsap.from(bubbles, {
        autoAlpha: 0,
        scale: 0.7,
        duration: 1.2,
        stagger: 0.08,
        delay: 0.35,
        ease: 'power2.out',
      });
    }

    if (typeof ScrollTrigger !== 'undefined') {
      gsap.utils.toArray('.reveal').forEach((el) => {
        if (el.closest('.hero-lalilo') || el.closest('.page-hero')) return;

        gsap.from(el, {
          autoAlpha: 0,
          y: 36,
          duration: 0.8,
          clearProps: 'transform',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        });
      });
    }
  });
}

function showToast(message) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span aria-hidden="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  requestAnimationFrame(() => toast.classList.add('active'));

  setTimeout(() => {
    toast.classList.remove('active');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

window.showToast = showToast;
window.setupLucideIcons = setupLucideIcons;

/* ========================================================================
   HERO BRAND BACKGROUND VIDEO (MINIMAL & SILENT)
   ======================================================================== */
function setupBrandVideo() {
  const heroVideo = document.getElementById('hero-bg-video');
  if (!heroVideo) return;

  heroVideo.muted = true;
  heroVideo.playsInline = true;
  heroVideo.loop = true;

  const playPromise = heroVideo.play();
  if (playPromise !== undefined) {
    playPromise.catch(() => {
      // Auto-play was prevented; play seamlessly on first user engagement
      const startOnInteraction = () => {
        heroVideo.play().catch(() => {});
        window.removeEventListener('scroll', startOnInteraction);
        window.removeEventListener('click', startOnInteraction);
        window.removeEventListener('touchstart', startOnInteraction);
      };
      window.addEventListener('scroll', startOnInteraction, { passive: true, once: true });
      window.addEventListener('click', startOnInteraction, { once: true });
      window.addEventListener('touchstart', startOnInteraction, { passive: true, once: true });
    });
  }

  // Pause when tab is not active to save battery and GPU
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      heroVideo.pause();
    } else {
      heroVideo.play().catch(() => {});
    }
  });
}

