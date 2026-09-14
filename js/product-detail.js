/*
========================================================================
   GENESIS TRADING CO. - DEDICATED PRODUCT DETAIL HANDLER (js/product-detail.js)
   Renders full clinical specifications, turnkey guarantee, & related models
========================================================================
*/

document.addEventListener('DOMContentLoaded', () => {
  renderProductDetailPage();
});

function getCategoryDisplayName(catKey) {
  const catNames = {
    'ct-scan': 'Computed Tomography (CT) Systems',
    'mri-scan': 'Magnetic Resonance Imaging (MRI) Systems',
    'x-ray': 'Digital Radiography (X-Ray) Systems',
    'ultrasound': 'Diagnostic Ultrasound Systems',
    'endoscopy': 'Surgical Endoscopy & Diathermy',
    'clia': 'Chemiluminescence (CLIA) Immunoassay',
    'hematology': 'Automated Hematology Analyzers',
    'modular-automation': 'Modular Laboratory Automation Systems',
    'urinalysis-feces': 'Urinalysis & Feces Analysis Systems',
    'glycohemoglobin': 'Glycohemoglobin (HbA1c) HPLC Analyzers',
    'blood-gas': 'Critical Care Blood Gas Analyzers',
    'electrolyte': 'Clinical Electrolyte Analyzers',
    'poct': 'Point of Care Testing (POCT) Analyzers',
    'hemodialysis': 'Hemodialysis Systems',
    'lifesupport': 'Anesthesia & Critical Life Support'
  };
  return catNames[catKey] || 'Medical Equipment';
}

function renderProductDetailPage() {
  const container = document.getElementById('product-detail-container');
  if (!container) return;

  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');

  if (!productId || typeof productsData === 'undefined') {
    renderNotFound(container, 'No equipment model was specified.');
    return;
  }

  const product = productsData.find(p => p.id === productId);
  if (!product) {
    renderNotFound(container, `The requested clinical model "${productId}" could not be found.`);
    return;
  }

  // Update Page Title and SEO Meta
  document.title = `${product.model} - ${product.brand} (${product.origin}) | Genesis Trading Co.`;
  
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute('content', `${product.model} by ${product.brand}: ${product.description}`);
  }

  const ogTitle = document.getElementById('og-title');
  if (ogTitle) ogTitle.setAttribute('content', `${product.model} | Genesis Trading Co.`);

  const ogDesc = document.getElementById('og-description');
  if (ogDesc) ogDesc.setAttribute('content', product.description);

  const canonicalUrl = document.getElementById('canonical-url');
  if (canonicalUrl) {
    canonicalUrl.setAttribute('href', `https://genesistradingco.com/product-detail.html?id=${encodeURIComponent(product.id)}`);
  }

  // Set modal subject for quotation
  const modalSubject = document.getElementById('modal-subject');
  if (modalSubject) {
    modalSubject.value = `Quotation Request: ${product.brand} Model ${product.model}`;
  }

  const catName = getCategoryDisplayName(product.category);
  const formalClass = product.formalName || product.subCategory || catName;

  // Badges
  let badgeHTML = '';
  if (product.badge === 'NEW') {
    badgeHTML += `<span class="detail-badge-pill detail-badge-new">New Release</span>`;
  } else if (product.badge === 'BEST SELLER') {
    badgeHTML += `<span class="detail-badge-pill detail-badge-bestseller">Best Seller</span>`;
  } else {
    badgeHTML += `<span></span>`;
  }
  badgeHTML += `<span class="detail-badge-pill detail-badge-ce">CE CERTIFIED</span>`;

  // Features list
  let featuresHTML = '';
  if (product.features && product.features.length > 0) {
    product.features.forEach(feat => {
      featuresHTML += `
        <li class="feature-item-row">
          <span class="feature-check-icon">&#x2713;</span>
          <span class="feature-text">${feat}</span>
        </li>
      `;
    });
  }

  // Related products (up to 3, prioritizing same brand or same category)
  const relatedProducts = productsData
    .filter(p => p.id !== product.id && (p.brand === product.brand || p.category === product.category))
    .slice(0, 3);

  let relatedHTML = '';
  if (relatedProducts.length > 0) {
    let relatedCards = '';
    relatedProducts.forEach(rel => {
      let relBadge = '';
      if (rel.badge === 'NEW') {
        relBadge = `<span class="product-badge badge-new">New</span>`;
      } else if (rel.badge === 'BEST SELLER') {
        relBadge = `<span class="product-badge badge-bestseller">Best Seller</span>`;
      }

      const relSub = rel.formalName || rel.subCategory || rel.category;

      relatedCards += `
        <div class="product-card" data-id="${rel.id}" onclick="window.location.href='product-detail.html?id=${encodeURIComponent(rel.id)}'">
          <div class="product-img-box" title="View ${rel.model} details">
            ${rel.image ? `<img src="${rel.image}" alt="${rel.model}" class="product-real-img" loading="lazy">` : getProductSVG(rel)}
            ${relBadge}
            <div class="product-floating-view">
              <span>View Details</span>
              <svg class="view-arrow" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </div>

          <div class="product-info-box">
            <div class="product-brand-meta">
              <span class="product-brand-name">${rel.brand}</span>
              <span class="meta-dot">·</span>
              <span class="product-origin-name">${rel.origin}</span>
            </div>

            <h3 class="product-model-name" title="View ${rel.model} details">${rel.model}</h3>
            <div class="product-sub-title" title="${relSub}">${relSub}</div>
          </div>
        </div>
      `;
    });

    relatedHTML = `
      <section class="related-products-section">
        <div class="container">
          <div class="related-section-header">
            <div>
              <span style="color:#008cd6; font-size:0.75rem; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; display:block; margin-bottom:0.35rem;">Related Equipment</span>
              <h2>Companion Systems &amp; Modalities</h2>
            </div>
            <a href="products.html?cat=${product.category}" class="related-catalog-link">
              <span>View Category Catalog</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </a>
          </div>
          <div class="unimed-products-grid">
            ${relatedCards}
          </div>
        </div>
      </section>
    `;
  }

  container.innerHTML = `
    <!-- Product Detail Hero -->
    <section class="product-detail-hero">
      <div class="container">
        <!-- Breadcrumb Nav -->
        <nav class="breadcrumb-nav" aria-label="Breadcrumb">
          <a href="index.html">Home</a>
          <span class="breadcrumb-separator">/</span>
          <a href="products.html">Products</a>
          <span class="breadcrumb-separator">/</span>
          <a href="products.html?cat=${product.category}">${catName}</a>
          <span class="breadcrumb-separator">/</span>
          <span class="breadcrumb-current">${product.model}</span>
        </nav>

        <div class="product-detail-grid">
          <!-- Left: Equipment Visual Showcase -->
          <div class="product-showcase-box">
            <div class="product-detail-badges">
              ${badgeHTML}
            </div>
            ${product.image ? `
              <img src="${product.image}" alt="${product.model} ${product.brand}" class="product-showcase-img">
            ` : getProductSVG(product)}
            <div style="margin-top: 1.5rem; display:flex; align-items:center; gap:8px; font-size:0.78rem; color:#64748b; font-weight:600;">
              <span style="display:inline-block; width:8px; height:8px; border-radius:50%; background:#10b981;"></span>
              <span>Authentic Clinical Grade &middot; Official Genesis Importation</span>
            </div>
          </div>

          <!-- Right: Technical & Clinical Overview -->
          <div class="product-detail-info">
            <div class="detail-brand-tag">
              <span>${product.brand}</span>
              <span class="origin-pill">${product.origin}</span>
            </div>

            <h1 class="product-detail-title">${product.model}</h1>
            <div class="product-detail-classification">${formalClass}</div>

            <p class="product-detail-desc">${product.description}</p>

            <!-- Fast Facts Grid -->
            <div class="quick-facts-grid">
              <div class="fact-item">
                <span class="fact-label">Manufacturer</span>
                <span class="fact-val">${product.brand}</span>
              </div>
              <div class="fact-item">
                <span class="fact-label">Country of Origin</span>
                <span class="fact-val">${product.origin}</span>
              </div>
              <div class="fact-item">
                <span class="fact-label">Clinical Category</span>
                <span class="fact-val">${catName}</span>
              </div>
              <div class="fact-item">
                <span class="fact-label">Regulatory Compliance</span>
                <span class="fact-val" style="color:#0284c7; font-weight:700;">CE Certified &middot; DGDA Registered</span>
              </div>
              <div class="fact-item">
                <span class="fact-label">Installation &amp; Warranty</span>
                <span class="fact-val">Full Turnkey with OEM Warranty</span>
              </div>
              <div class="fact-item">
                <span class="fact-label">Dhaka Engineering SLA</span>
                <span class="fact-val">24/7 Rapid Response Desk</span>
              </div>
            </div>

            <!-- Action CTAs -->
            <div class="product-actions-band">
              <button class="btn-detail-quote" onclick="openDetailEnquiryModal()" type="button">
                <span>Request Hospital Quotation</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </button>
              <a href="products.html" class="btn-detail-back">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                <span>Back to Catalog</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Clinical Specifications Section -->
    <section class="product-specs-section">
      <div class="container">
        <div class="specs-section-header">
          <span class="section-tag">Detailed Architecture</span>
          <h2>Clinical &amp; Engineering Specifications</h2>
        </div>

        <div class="specs-layout-grid">
          <!-- Left: Features Checklist -->
          <div>
            <h3 style="font-size:1.15rem; font-weight:700; color:#0f172a; margin-bottom:1.25rem;">Core Clinical Capabilities &amp; Diagnostic Highlights</h3>
            <ul class="features-list">
              ${featuresHTML}
            </ul>
          </div>

          <!-- Right: Turnkey Engineering Card -->
          <div class="turnkey-support-card">
            <div class="turnkey-header">
              <span class="turnkey-badge">Genesis Turnkey</span>
            </div>
            <h3>Hospital Installation &amp; Service Guarantee</h3>
            <p>Every system supplied by Genesis Trading Co. is backed by our full lifecycle biomedical engineering commitment across Bangladesh.</p>
            <ul class="turnkey-points">
              <li><strong>Factory-Trained Engineers:</strong> Certified by ${product.brand} for mechanical, electrical, and optical calibration.</li>
              <li><strong>Site Preparation:</strong> Architectural radiation shielding, power conditioning, and environmental inspection.</li>
              <li><strong>Operator Training:</strong> Hands-on clinical application training for radiologists, pathologists, and technicians.</li>
              <li><strong>Genuine Spare Parts:</strong> Local buffer warehouse in Dhaka for rapid replacement and zero downtime.</li>
            </ul>
            <button class="btn-turnkey-contact" onclick="openDetailEnquiryModal()" type="button">
              <span>Contact Biomedical Support Desk</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Equipment Section -->
    ${relatedHTML}
  `;

  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
}

function renderNotFound(container, message) {
  container.innerHTML = `
    <div style="min-height: 70vh; display:flex; align-items:center; justify-content:center; padding: 4rem 1.5rem; text-align:center;">
      <div style="max-width: 520px; background:#fff; border:1px solid #e2e8f0; border-radius:1.5rem; padding: 3rem 2rem; box-shadow:0 10px 30px rgba(15,23,42,0.06);">
        <div style="width:64px; height:64px; border-radius:50%; background:#fee2e2; color:#ef4444; display:inline-flex; align-items:center; justify-content:center; margin-bottom:1.5rem;">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
        </div>
        <h2 style="font-size:1.6rem; font-weight:800; color:#0f172a; margin-bottom:0.75rem;">Model Not Found</h2>
        <p style="color:#64748b; font-size:0.95rem; line-height:1.6; margin-bottom:2rem;">${message}</p>
        <a href="products.html" style="display:inline-flex; align-items:center; gap:8px; padding:0.85rem 2rem; background:#008cd6; color:#fff; border-radius:9999px; font-weight:700; text-decoration:none; box-shadow:0 4px 16px rgba(0,140,214,0.35);">
          <span>Browse All Medical Equipment</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </a>
      </div>
    </div>
  `;
}

// Modal Handlers
function openDetailEnquiryModal() {
  const overlay = document.getElementById('modal-overlay-enquiry');
  if (overlay) {
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeDetailEnquiryModal() {
  const overlay = document.getElementById('modal-overlay-enquiry');
  if (overlay) {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function showToast(message) {
  const toast = document.getElementById('toast-notification');
  if (toast) {
    toast.textContent = message;
    toast.style.display = 'block';
    setTimeout(() => {
      toast.style.display = 'none';
    }, 3500);
  }
}

window.openDetailEnquiryModal = openDetailEnquiryModal;
window.closeDetailEnquiryModal = closeDetailEnquiryModal;
window.showToast = showToast;
