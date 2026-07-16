/*
========================================================================
   GENESIS TRADING CO. — Main JS
   Navbar, partners, contact form, Lucide, GSAP reveals
========================================================================
*/

document.addEventListener('DOMContentLoaded', () => {
  setupHeader();
  setupMobileMenu();
  setupPartnerSlider();
  setupContactFormHandler();
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

  const path = window.location.pathname;
  const page = path.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach((link) => {
    const href = link.getAttribute('href');
    const isActive =
      href === page ||
      (page === '' && href === 'index.html') ||
      (page === 'index.html' && href === './');
    link.classList.toggle('active', Boolean(isActive));
  });
}

function setupMobileMenu() {
  const toggleBtn = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  document.addEventListener('click', (e) => {
    if (
      navMenu.classList.contains('active') &&
      !navMenu.contains(e.target) &&
      !toggleBtn.contains(e.target)
    ) {
      toggleBtn.classList.remove('active');
      navMenu.classList.remove('active');
    }
  });

  document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      toggleBtn.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
}

function setupPartnerSlider() {
  const sliderTrack = document.querySelector('.slider-track');
  if (!sliderTrack) return;

  const partners = [
    { name: 'ALCOR Scientific', origin: 'USA', logo: 'images/partners/alcor-scientific.jpg' },
    { name: 'Boditech', origin: 'Korea', logo: 'images/partners/boditech.png' },
    { name: 'Unimed', origin: 'Turkiye', logo: 'images/partners/unimed.svg' },
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
