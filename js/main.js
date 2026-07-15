/*
========================================================================
   GENESIS TRADING CO. - MAIN JAVASCRIPT (js/main.js)
   Global Layout interactions, Mobile Menu, Carousel loops, & Toasts
========================================================================
*/

document.addEventListener('DOMContentLoaded', () => {
  setupHeader();
  setupMobileMenu();
  setupPartnerSlider();
  setupContactFormHandler();
});

// 1. Header scroll behavior and active link state
function setupHeader() {
  const header = document.querySelector('header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Highlight active link based on current filename
  const path = window.location.pathname;
  const page = path.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === page || (page === 'index.html' && href === './') || (page === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// 2. Mobile Menu toggle actions
function setupMobileMenu() {
  const toggleBtn = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Close menu if user clicks outside
  document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
      toggleBtn.classList.remove('active');
      navMenu.classList.remove('active');
    }
  });

  // Close menu on link clicks
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggleBtn.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
}

// 3. Partner Slider - Infinite loop cloning
function setupPartnerSlider() {
  const sliderTrack = document.querySelector('.slider-track');
  if (!sliderTrack) return;

  // The partner list data (19 brands matching the company profile)
  const partners = [
    { name: 'ALCOR Scientific', origin: 'USA' },
    { name: 'Boditech', origin: 'Korea' },
    { name: 'Unimed', origin: 'Turkiye' },
    { name: 'Maccura', origin: 'China' },
    { name: 'Snibe', origin: 'China' },
    { name: 'Erba Mannheim', origin: 'Czech Republic' },
    { name: 'Randox', origin: 'UK' },
    { name: 'Eurospital', origin: 'Italy' },
    { name: 'ECORAY', origin: 'Korea' },
    { name: 'DRTECH', origin: 'Korea' },
    { name: 'GEMSS Healthcare', origin: 'Korea' },
    { name: 'KW Apparecchi', origin: 'Italy' },
    { name: 'Renosem', origin: 'Korea' },
    { name: 'APEL', origin: 'Japan' },
    { name: 'LABOMED', origin: 'USA' },
    { name: 'Dialife', origin: 'Switzerland' },
    { name: 'Mindray', origin: 'China' },
    { name: 'ORICH', origin: 'China' },
    { name: 'Bermedi', origin: 'Germany' }
  ];

  // Render cards
  const renderCards = (container) => {
    partners.forEach(partner => {
      const card = document.createElement('div');
      card.className = 'partner-logo-card';
      card.innerHTML = `
        <div class="partner-name">${partner.name}</div>
        <div class="partner-origin">Origin: ${partner.origin}</div>
      `;
      card.addEventListener('click', () => {
        showToast(`Authorized distributor of ${partner.name} (${partner.origin})`);
      });
      container.appendChild(card);
    });
  };

  // Populate first list
  sliderTrack.innerHTML = '';
  renderCards(sliderTrack);

  // Duplicate items for loop continuity (cloning ensures gapless transition)
  const totalWidth = sliderTrack.scrollWidth;
  renderCards(sliderTrack);
}

// 4. Contact/RFP Enquiry Form Handler
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
      date: new Date().toISOString()
    };
    
    // Save to local storage for demo
    const enquiries = JSON.parse(localStorage.getItem('enquiries') || '[]');
    enquiries.push(enquiry);
    localStorage.setItem('enquiries', JSON.stringify(enquiries));

    form.reset();
    showToast('Your Request for Quote (RFQ) was submitted successfully!');
  });
}

// 5. Global Toast Notification System
function showToast(message) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  
  const checkIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  `;
  
  toast.innerHTML = `
    <span>${checkIcon}</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  
  setTimeout(() => {
    toast.classList.add('active');
  }, 10);

  setTimeout(() => {
    toast.classList.remove('active');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3500);
}

window.showToast = showToast;
