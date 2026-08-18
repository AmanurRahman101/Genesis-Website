/*
========================================================================
   GENESIS TRADING CO. - PRODUCTS DATA & HANDLER (js/products.js)
   Renders Interactive Catalog, dynamic SVGs, and Enquiry Modals
========================================================================
*/

// 1. Comprehensive Product Database
const productsData = [
  // IN VITRO DIAGNOSTIC (IVD) - Unimed
  {
    id: 'u200',
    model: 'U200',
    brand: 'Unimed',
    origin: 'Turkiye',
    category: 'ivd',
    subCategory: 'CLIA (Chemiluminescence)',
    description: 'Fully automated high-throughput Chemiluminescence Immunoassay (CLIA) analyzer for small-to-medium laboratories, providing high efficiency and analytical accuracy.',
    features: ['Up to 120 tests/hour', 'Random access, batch, STAT', '20 sample positions', 'Clog detection & liquid level sensing']
  },
  {
    id: 'u180',
    model: 'U180',
    brand: 'Unimed',
    origin: 'Turkiye',
    category: 'ivd',
    subCategory: 'CLIA (Chemiluminescence)',
    description: 'Compact Chemiluminescence Immunoassay analyzer optimized for speed, reliability, and ease of use in clinical diagnostics.',
    features: ['Up to 80 tests/hour', 'Continuous loading', 'Reagent refrigeration', 'Intuitive touch interface']
  },
  {
    id: 'labas-m',
    model: 'Labas M',
    brand: 'Unimed',
    origin: 'Turkiye',
    category: 'ivd',
    subCategory: 'TLA (Total Lab Automation)',
    description: 'Elite Total Laboratory Automation (TLA) solution integrating pre-analytical, analytical, and post-analytical modules for maximum diagnostic efficiency.',
    features: ['Modular expansion', 'Tracks sample routing', 'Cross-contamination prevention', 'Intelligent sample sorting']
  },
  {
    id: 'uh580',
    model: 'UH580',
    brand: 'Unimed',
    origin: 'Turkiye',
    category: 'ivd',
    subCategory: 'Hematology Cell Counter',
    description: 'Advanced 5-part differential cell counter providing rapid, precise blood analysis with detailed scattergrams.',
    features: ['5-part WBC differentiation', '60 samples/hour', 'Autoloader module support', 'Laser scatter + flow cytometry technology']
  },
  {
    id: 'uh1180',
    model: 'UH1180',
    brand: 'Unimed',
    origin: 'Turkiye',
    category: 'ivd',
    subCategory: 'Hematology Cell Counter',
    description: 'Premium 6-part cell counter featuring advanced hematology parameters, designed for high-workload hospital settings.',
    features: ['6-part WBC differentiation', 'Up to 110 samples/hour', 'Reticulocyte parameters included', 'Barcoding and LIS integration']
  },
  {
    id: 'uri-300',
    model: 'URI-300',
    brand: 'Unimed',
    origin: 'Turkiye',
    category: 'ivd',
    subCategory: 'Urinalysis',
    description: 'Fully automated urine chemistry and sediment analyzer, combining digital imaging with test strip readings.',
    features: ['High-resolution digital microscope', 'Urine chemistry + sediment integration', 'Up to 240 strips/hour', 'Precise classification of cells & casts']
  },
  {
    id: 'fa-60',
    model: 'FA-60',
    brand: 'Unimed',
    origin: 'Turkiye',
    category: 'ivd',
    subCategory: 'Feces Analysis',
    description: 'Specialized stool analyzer for automated microscopic and chemical analysis, reducing manual slide preparation.',
    features: ['High precision digital camera', 'Sealed workflow for safety', 'Detects parasites, WBCs, RBCs', 'Consistent, standardized reports']
  },
  {
    id: 'vsa-60',
    model: 'VSA-60',
    brand: 'Unimed',
    origin: 'Turkiye',
    category: 'ivd',
    subCategory: 'Vaginal Secretion',
    description: 'Innovative diagnostic machine for rapid, standardized screening of vaginal secretions and infection panels.',
    features: ['Multi-channel test cassette', 'Automated microscopy + pH reading', 'Results in under 10 minutes', 'High diagnostic specificity']
  },
  {
    id: 'u8',
    model: 'U-8',
    brand: 'Unimed',
    origin: 'Turkiye',
    category: 'ivd',
    subCategory: 'Hemoglobin Analyzer',
    description: 'Highly accurate, microfluidic hemoglobin testing system for point-of-care and general practitioner laboratories.',
    features: ['Direct photometric measurement', 'Results in 5 seconds', 'Requires only 10µL capillary blood', 'Reagent stability at room temperature']
  },
  {
    id: 'u8-pro',
    model: 'U-8 PRO',
    brand: 'Unimed',
    origin: 'Turkiye',
    category: 'ivd',
    subCategory: 'Hemoglobin Analyzer',
    description: 'Professional HbA1c and Hemoglobin testing platform featuring advanced connectivity and auto-calibration.',
    features: ['Dual testing mode (Hb & HbA1c)', 'High-resolution touchscreen', 'Large storage up to 10,000 results', 'Built-in thermal printer']
  },
  {
    id: 'ubg-60',
    model: 'UBG-60',
    brand: 'Unimed',
    origin: 'Turkiye',
    category: 'ivd',
    subCategory: 'Blood Gas',
    description: 'State-of-the-art critical care blood gas and electrolyte analyzer, utilizing maintenance-free cartridges.',
    features: ['pH, pCO2, pO2, Na+, K+, Cl-, Ca++, Glu, Lac', 'Ready-to-use cartridge system', 'Results in 60 seconds', 'Ideal for ICUs and Emergency Rooms']
  },
  {
    id: 'cee-5',
    model: 'CEE-5',
    brand: 'Unimed',
    origin: 'Turkiye',
    category: 'ivd',
    subCategory: 'Electrolytes',
    description: 'User-friendly, maintenance-free ISE electrolyte analyzer with high-precision electrodes.',
    features: ['Na+, K+, Cl-, Ca++, pH measurement', 'Electrodes auto-sleep feature', 'Low reagent consumption', 'Direct touch sampling tube']
  },

  // POINT OF CARE (POCT) - Boditech
  {
    id: 'afias-1',
    model: 'AFIAS 1',
    brand: 'Boditech',
    origin: 'Korea',
    category: 'ivd',
    subCategory: 'POCT',
    description: 'Compact, single-channel desktop fluorescence immunoassay analyzer for rapid point-of-care diagnostics.',
    features: ['All-in-one cartridge mechanism', 'Finger-prick blood sampling', 'Results in 3 to 15 minutes', 'Wide menu (Cardiac, Hormones, Infectious)']
  },
  {
    id: 'afias-6',
    model: 'AFIAS 6',
    brand: 'Boditech',
    origin: 'Korea',
    category: 'ivd',
    subCategory: 'POCT',
    description: 'Automated 6-channel POCT analyzer allowing 6 parallel testing channels for different analytes simultaneously.',
    features: ['6 parallel test slots', 'High throughput for clinics', 'Emergency STAT testing', 'Barcode auto-recognition']
  },
  {
    id: 'afias-10',
    model: 'AFIAS 10',
    brand: 'Boditech',
    origin: 'Korea',
    category: 'ivd',
    subCategory: 'POCT',
    description: 'Flagship POCT analyzer with 10 testing channels, delivering high-throughput rapid assays for larger clinics and ER departments.',
    features: ['10 independent channels', 'Auto-calibration', 'Direct tube sampling', 'Comprehensive LIS integration']
  },

  // ESR ANALYZERS - ALCOR Scientific
  {
    id: 'miniised',
    model: 'MiniiSED',
    brand: 'ALCOR Scientific',
    origin: 'USA',
    category: 'ivd',
    subCategory: 'ESR Analyzers',
    description: 'Sleek, single-sample Erythrocyte Sedimentation Rate (ESR) analyzer providing rapid results directly from primary tubes.',
    features: ['Results in 15 seconds', 'Only requires 100µL sample', 'Eliminates westergren tube cleaning', 'Excellent correlation with standard westergren']
  },
  {
    id: 'ised',
    model: 'iSED',
    brand: 'ALCOR Scientific',
    origin: 'USA',
    category: 'ivd',
    subCategory: 'ESR Analyzers',
    description: 'Advanced ESR analyzer utilizing photometric rheology to determine sedimentation rate instantly and safely.',
    features: ['20-position batch analyzer', 'Closed tube sampling for safety', 'Integrated barcode reader', 'No reagents required']
  },
  {
    id: 'ised-pro',
    model: 'iSED PRO',
    brand: 'ALCOR Scientific',
    origin: 'USA',
    category: 'ivd',
    subCategory: 'ESR Analyzers',
    description: 'High-throughput premium ESR analyzer featuring continuous loading capacity for busy hospital core laboratories.',
    features: ['Up to 180 tests/hour', 'Continuous sample loading', 'Dynamic capping system', 'Dual-laser optical scanning']
  },

  // BIOCHEMISTRY - Erba & Snibe
  {
    id: 'xl-200',
    model: 'XL-200',
    brand: 'Erba Mannheim',
    origin: 'Czech Republic',
    category: 'ivd',
    subCategory: 'Biochemistry Analyzer',
    description: 'Fully automated clinical chemistry analyzer with on-board cooling, reagent management, and stat testing capability.',
    features: ['200 tests/hour constant', '40 sample/reagent positions', 'Reusable glass cuvettes', 'Low water consumption (2.5L/hr)']
  },
  {
    id: 'xl-640',
    model: 'XL-640',
    brand: 'Erba Mannheim',
    origin: 'Czech Republic',
    category: 'ivd',
    subCategory: 'Biochemistry Analyzer',
    description: 'Medium-to-large automated chemistry analyzer with built-in clot detector and optional ISE module.',
    features: ['400 tests/hour photometry', '640 tests/hour with ISE', 'Grating photometer with 12 wavelengths', '8-step laundry on-board']
  },
  {
    id: 'xl-1000',
    model: 'XL-1000',
    brand: 'Erba Mannheim',
    origin: 'Czech Republic',
    category: 'ivd',
    subCategory: 'Biochemistry Analyzer',
    description: 'High-performance chemistry workhorse for core laboratories, offering high throughput, extensive menus, and automated workflows.',
    features: ['800 tests/hour photometry', '1040 tests/hour with ISE', '150 sample positions (rack loading)', 'Extremely low test cost']
  },
  {
    id: 'bioassay-240p',
    model: 'Bioassay 240P',
    brand: 'Snibe',
    origin: 'China',
    category: 'ivd',
    subCategory: 'Biochemistry Analyzer',
    description: 'Reliable, user-friendly benchtop biochemistry analyzer with high-end features designed for private diagnostic labs.',
    features: ['240 tests/hour', '24-hour non-stop cooling', 'Auto dilution & re-run', 'Real-time calibration curve tracking']
  },

  // RADIOLOGY & IMAGING - Mindray & ECORAY
  {
    id: 'dc-26',
    model: 'DC-26',
    brand: 'Mindray',
    origin: 'China',
    category: 'imaging',
    subCategory: 'Ultrasound Scanner',
    description: 'Versatile color Doppler ultrasound system providing high-quality images and workflow automation tools at an affordable cost.',
    features: ['Phase Shift Harmonic Imaging', 'iClear speckle suppression', 'Wide angle 15-inch LED monitor', 'Smart 3D/4D volume rendering']
  },
  {
    id: 'consona-n5t',
    model: 'Consona N5T',
    brand: 'Mindray',
    origin: 'China',
    category: 'imaging',
    subCategory: 'Ultrasound Scanner',
    description: 'Core-tier diagnostic ultrasound scanner built on the advanced ZST+ platform, delivering exceptional spatial and temporal resolution.',
    features: ['ZST+ Zone Sonography Platform', 'Sound Speed Compensation (SSC)', 'HD Scope focal detail enhancement', 'Ergonomic floating control panel']
  },
  {
    id: 'consona-n8',
    model: 'Consona N8',
    brand: 'Mindray',
    origin: 'China',
    category: 'imaging',
    subCategory: 'Ultrasound Scanner',
    description: 'Premium color Doppler system featuring high-density single-crystal transducers for deeper tissue penetration and clarity.',
    features: ['Single-crystal transducer support', 'Smart Scene 3D cardiac detection', 'iCompare side-by-side modal assessment', '21.5-inch high-resolution screen']
  },
  {
    id: 'resona-r9',
    model: 'Resona R9',
    brand: 'Mindray',
    origin: 'China',
    category: 'imaging',
    subCategory: 'Ultrasound Scanner',
    description: 'Flagship medical ultrasound system providing deep clinical insights through advanced quantitative assessment technologies.',
    features: ['V-Flow microvascular hemodynamics', 'STE/STD shear-wave elastography', 'HiFR CEUS high-frame-rate contrast imaging', 'Dual-screen touch interface console']
  },
  {
    id: 'hepatus-6',
    model: 'Hepatus 6',
    brand: 'Mindray',
    origin: 'China',
    category: 'imaging',
    subCategory: 'Ultrasound Scanner',
    description: 'Specialized liver ultrasound system offering non-invasive transient elastography (FibroScan alternative) and color Doppler.',
    features: ['LiaQ Shearwave Liver stiffness quantification', 'ViAQ Viscosity mapping', 'Focused liver fat grading parameter', 'Extremely lightweight console']
  },
  {
    id: 'dp-30',
    model: 'DP-30',
    brand: 'Mindray',
    origin: 'China',
    category: 'imaging',
    subCategory: 'Portable Ultrasound',
    description: 'High-performance black and white portable ultrasound system with quick startup and excellent general scanning capabilities.',
    features: ['Weight under 5.5 kg', 'PW Doppler support', 'Rechargeable battery (2h run)', 'One-key image optimization']
  },
  {
    id: 'hf-525-plus',
    model: 'HF-525 Plus',
    brand: 'ECORAY',
    origin: 'Korea',
    category: 'imaging',
    subCategory: 'X-Ray System',
    description: 'High-frequency digital radiography system with floor-mounted tube stand and four-way floating tabletop.',
    features: ['40kW to 50kW generator power', 'Extremely low patient dose technology', 'Anatomical programming (APR)', 'Optional digital flat panel integration']
  },
  {
    id: 'ecoview-9-plus',
    model: 'Ecoview 9 Plus',
    brand: 'ECORAY',
    origin: 'Korea',
    category: 'imaging',
    subCategory: 'X-Ray System',
    description: 'Premium ceiling-suspension digital X-Ray system for high-volume imaging centers, offering automated positioning.',
    features: ['Ceiling tracking tube stand', 'Dual flat-panel detectors (wireless)', 'Motorized vertical grid wall stand', 'Rapid image preview in 2 seconds']
  },
  {
    id: 'xdry-laser-imager',
    model: 'X-Dry Laser Imager',
    brand: 'GEMSS Healthcare',
    origin: 'Korea',
    category: 'imaging',
    subCategory: 'X-Ray Film Printer',
    description: 'Dry laser thermal printing system for high-quality diagnostic radiography, CT, and MRI image outputs.',
    features: ['Multi-tray loading (2 or 3 trays)', '508 dpi high-resolution laser engine', '180 films/hour throughput', 'Daylight film loading mechanism']
  },

  // HEMODIALYSIS - Unimed
  {
    id: 'udia-hdf2',
    model: 'UDIA-HDF2',
    brand: 'Unimed',
    origin: 'Turkiye',
    category: 'hemodialysis',
    subCategory: 'Dialysis Machines',
    description: 'Highly advanced on-line hemodiafiltration (HDF) system offering patient-tailored clearance profiles and real-time KT/V tracking.',
    features: ['On-line HDF, Hemofiltration, Hemodialysis', 'Volume control ultrafiltration accuracy', 'Blood volume monitor (BVM)', 'Integrated endotoxin filter']
  },
  {
    id: 'udia-hd2',
    model: 'UDIA-HD2',
    brand: 'Unimed',
    origin: 'Turkiye',
    category: 'hemodialysis',
    subCategory: 'Dialysis Machines',
    description: 'Standard hemodialysis machine built for safety, reliability, and low consumption profile during treatment sessions.',
    features: ['Bicarbonate/Acetate dialysis', 'Automatic blood pressure monitor', 'Ultrafiltration profile programming', 'Self-cleaning heat disinfection']
  },
  {
    id: 'udia-hd1',
    model: 'UDIA-HD1',
    brand: 'Unimed',
    origin: 'Turkiye',
    category: 'hemodialysis',
    subCategory: 'Dialysis Machines',
    description: 'Compact single-pump hemodialysis machine suitable for community clinics, home care, and isolation wards.',
    features: ['Lightweight compact footprint', 'Highly intuitive UI', 'Battery backup for 30 min safety run', 'Robust hydraulic circuit design']
  },

  // PATIENT MONITORING & LIFE SUPPORT - Unimed & Mago
  {
    id: 'mago-4',
    model: 'Mago 4',
    brand: 'Eurospital',
    origin: 'Italy',
    category: 'lifesupport',
    subCategory: 'ELISA Processors',
    description: 'Fully automated ELISA processor capable of reading, washing, and executing complete microplate immunoassay panels.',
    features: ['4-plate parallel processing', 'Independent liquid handling probes', 'Continuous slide loading', 'High-precision microplate photometer']
  },
  {
    id: 'eu-turbo',
    model: 'Eu-Turbo',
    brand: 'Unimed',
    origin: 'Turkiye',
    category: 'lifesupport',
    subCategory: 'Stool Analyzer',
    description: 'Automated stool analyzer integrating sample dilution, stirring, filtration, and chromatography testing.',
    features: ['Closed testing loop, zero odor', '120 tests/hour', 'Multiplex strip reading', 'High correlation with clinical gold standards']
  }
];

// 2. Custom Medical SVG Illustrations Generator
function getCategorySVG(category) {
  if (category === 'ivd') {
    return `
      <svg viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="20" width="70" height="50" rx="4" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
        <rect x="22" y="27" width="32" height="22" rx="2" fill="#0f172a" />
        <line x1="26" y1="34" x2="42" y2="34" stroke="#008cd6" stroke-width="1.5"/>
        <line x1="26" y1="38" x2="48" y2="38" stroke="#008cd6" stroke-width="1.5"/>
        <circle cx="46" cy="31" r="1.5" fill="#10b981" />
        <rect x="62" y="32" width="6" height="22" rx="2" fill="#e92330" opacity="0.6"/>
        <rect x="71" y="36" width="6" height="18" rx="2" fill="#008cd6" opacity="0.6"/>
        <rect x="22" y="55" width="12" height="6" rx="1" fill="#cbd5e1" />
        <rect x="38" y="55" width="12" height="6" rx="1" fill="#cbd5e1" />
      </svg>
    `;
  }
  if (category === 'imaging') {
    return `
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="55" width="30" height="12" rx="2" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1.5"/>
        <circle cx="32" cy="71" r="2.5" fill="#475569"/>
        <circle cx="48" cy="71" r="2.5" fill="#475569"/>
        <rect x="37" y="36" width="6" height="20" fill="#94a3b8" />
        <path d="M 20 36 L 60 36 L 55 42 L 25 42 Z" fill="#cbd5e1" stroke="#475569" stroke-width="1.5" stroke-linejoin="round"/>
        <rect x="22" y="10" width="36" height="23" rx="2" fill="#ffffff" stroke="#94a3b8" stroke-width="1.5"/>
        <rect x="25" y="13" width="30" height="17" fill="#0f172a" />
        <path d="M 28 24 Q 35 15 40 25 T 50 18" stroke="#008cd6" stroke-width="1" fill="none"/>
        <circle cx="43" cy="22" r="2" fill="#e92330" />
      </svg>
    `;
  }
  if (category === 'hemodialysis') {
    return `
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="28" y="12" width="24" height="60" rx="3" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
        <rect x="32" y="18" width="16" height="12" rx="1" fill="#0f172a" />
        <path d="M 34 26 L 38 23 L 42 27 L 46 21" stroke="#10b981" stroke-width="1.2" fill="none"/>
        <rect x="54" y="24" width="6" height="30" rx="2" fill="#ffffff" stroke="#e92330" stroke-width="1.2"/>
        <line x1="57" y1="24" x2="57" y2="54" stroke="#008cd6" stroke-width="0.8" stroke-dasharray="2 2"/>
        <path d="M 44 36 C 48 40 54 30 54 26" stroke="#e92330" stroke-width="1.2" fill="none"/>
        <path d="M 44 42 C 48 46 54 46 54 48" stroke="#008cd6" stroke-width="1.2" fill="none"/>
        <circle cx="34" cy="38" r="4" fill="#f1f5f9" stroke="#475569" stroke-width="1"/>
        <circle cx="46" cy="38" r="4" fill="#f1f5f9" stroke="#475569" stroke-width="1"/>
      </svg>
    `;
  }
  // lifesupport
  return `
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="22" y="25" width="36" height="42" rx="3" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
      <rect x="26" y="30" width="28" height="18" rx="1.5" fill="#0f172a" />
      <path d="M 29 39 L 33 39 L 35 33 L 38 45 L 41 36 L 43 41 L 45 39 L 51 39" stroke="#e92330" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" />
      <circle cx="30" cy="56" r="2" fill="#008cd6" />
      <circle cx="36" cy="56" r="2" fill="#10b981" />
      <rect x="42" y="54" width="10" height="4" rx="1" fill="#cbd5e1" />
    </svg>
  `;
}

// 3. Render Catalog Items
function renderCatalog(filteredProducts) {
  const container = document.getElementById('products-grid-container');
  const countElement = document.getElementById('catalog-results-count');
  
  if (!container) return;
  
  container.innerHTML = '';
  
  if (countElement) {
    countElement.textContent = filteredProducts.length;
  }
  
  if (filteredProducts.length === 0) {
    container.innerHTML = `
      <div class="text-center" style="grid-column: 1 / -1; padding: 60px 0;">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--gray-400)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom: 16px;">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <h4 class="text-gray" style="font-size: 1.2rem; margin-bottom: 8px;">No Products Found</h4>
        <p class="text-gray" style="font-size: 0.9rem;">Try adjusting your filters or search query.</p>
      </div>
    `;
    return;
  }

  filteredProducts.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('data-id', product.id);
    
    const catLabels = {
      ivd: 'In Vitro Diagnostic',
      imaging: 'Radiology & Imaging',
      hemodialysis: 'Hemodialysis',
      lifesupport: 'Patient Care & Life Support'
    };

    card.innerHTML = `
      <div class="product-img-box">
        ${getCategorySVG(product.category)}
        <div class="product-origin-badge">${product.origin}</div>
      </div>
      <div class="product-info-box">
        <div class="product-category-name">${product.subCategory || catLabels[product.category]}</div>
        <h3 class="product-model-name">${product.model}</h3>
        <div class="product-brand-line">Brand: <strong>${product.brand}</strong></div>
        <p class="text-gray" style="font-size: 0.82rem; margin-bottom: 16px; line-height: 1.5; flex-grow: 1;">
          ${product.description.substring(0, 80)}...
        </p>
        <div class="product-card-footer">
          <button class="product-spec-btn" onclick="openSpecModal('${product.id}')">Specs</button>
          <button class="product-card-cta" onclick="openEnquiryModal('${product.model}', '${product.brand}')">Quote</button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

// 4. Filtering & Search Controller
let activeCategory = 'all';
let activeBrand = 'all';
let searchQuery = '';

function applyFilters() {
  const filtered = productsData.filter(product => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesBrand = activeBrand === 'all' || product.brand.toLowerCase() === activeBrand.toLowerCase();
    
    const term = searchQuery.toLowerCase();
    const matchesSearch = 
      product.model.toLowerCase().includes(term) ||
      product.brand.toLowerCase().includes(term) ||
      product.subCategory.toLowerCase().includes(term) ||
      product.description.toLowerCase().includes(term) ||
      product.features.some(f => f.toLowerCase().includes(term));
      
    return matchesCategory && matchesBrand && matchesSearch;
  });
  
  renderCatalog(filtered);
}

// Global filter buttons click handlers
function setupFilterListeners() {
  const catButtons = document.querySelectorAll('[data-filter-cat]');
  catButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      catButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-filter-cat');
      applyFilters();
    });
  });

  const brandButtons = document.querySelectorAll('[data-filter-brand]');
  brandButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      brandButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeBrand = btn.getAttribute('data-filter-brand');
      applyFilters();
    });
  });

  const searchInput = document.getElementById('product-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      applyFilters();
    });
  }
}

// 5. Specs & Enquiry Modal Handlers
function openSpecModal(productId) {
  const product = productsData.find(p => p.id === productId);
  if (!product) return;

  const overlay = document.getElementById('modal-overlay-specs');
  if (!overlay) return;

  const title = document.getElementById('spec-modal-title');
  const details = document.getElementById('spec-modal-details');

  title.innerHTML = `${product.model} Specifications`;
  
  let featuresHTML = '';
  product.features.forEach(f => {
    featuresHTML += `<li><strong>✓</strong> ${f}</li>`;
  });

  details.innerHTML = `
    <div style="margin-bottom: 16px; font-size: 0.9rem;">
      <div style="margin-bottom: 6px;"><strong>Brand:</strong> ${product.brand}</div>
      <div style="margin-bottom: 6px;"><strong>Country of Origin:</strong> ${product.origin}</div>
      <div style="margin-bottom: 6px;"><strong>Classification:</strong> ${product.subCategory}</div>
      <div style="margin-top: 12px; line-height: 1.5; color: var(--gray-300);">${product.description}</div>
    </div>
    <div style="margin-top: 20px;">
      <h4 style="font-family:'Plus Jakarta Sans',sans-serif; margin-bottom: 8px; font-size: 1rem; color: #fff;">Key Technical Highlights</h4>
      <ul style="list-style:none; padding:0; display:flex; flex-direction:column; gap:6px; font-size:0.85rem; color:var(--gray-300);">
        ${featuresHTML}
      </ul>
    </div>
    <div style="margin-top: 28px; display:flex; gap:10px;">
      <button class="btn btn-primary" style="padding:8px 20px; font-size:0.85rem; flex-grow:1;" onclick="closeModal('modal-overlay-specs'); openEnquiryModal('${product.model}', '${product.brand}');">Request Quote</button>
      <button class="btn btn-secondary" style="padding:8px 16px; font-size:0.85rem; background:transparent; border-color:rgba(255,255,255,0.2); color:#fff;" onclick="closeModal('modal-overlay-specs')">Close</button>
    </div>
  `;

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function openEnquiryModal(modelName, brandName) {
  const overlay = document.getElementById('modal-overlay-enquiry');
  if (!overlay) return;

  const subjectInput = document.getElementById('modal-subject');
  if (subjectInput) {
    subjectInput.value = `Quotation: ${brandName} Model ${modelName}`;
  }

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
  const overlay = document.getElementById(modalId);
  if (overlay) {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

window.openSpecModal = openSpecModal;
window.openEnquiryModal = openEnquiryModal;
window.closeModal = closeModal;

// Initialize Catalog
document.addEventListener('DOMContentLoaded', () => {
  const catalogGrid = document.getElementById('products-grid-container');
  if (catalogGrid) {
    const requestedCategory = new URLSearchParams(window.location.search).get('cat');
    const validCategories = ['ivd', 'imaging', 'hemodialysis', 'lifesupport'];
    if (validCategories.includes(requestedCategory)) {
      activeCategory = requestedCategory;
      const categoryButton = document.querySelector(`[data-filter-cat="${requestedCategory}"]`);
      document.querySelectorAll('[data-filter-cat]').forEach((button) => button.classList.remove('active'));
      if (categoryButton) categoryButton.classList.add('active');
    }
    renderCatalog(productsData);
    setupFilterListeners();
    applyFilters();
    updateFilterCounts();
  }
});

function updateFilterCounts() {
  const totals = productsData.reduce((acc, product) => {
    acc.all += 1;
    acc[product.category] = (acc[product.category] || 0) + 1;
    return acc;
  }, { all: 0 });

  const map = {
    all: 'count-all',
    ivd: 'count-ivd',
    imaging: 'count-imaging',
    hemodialysis: 'count-hemo',
    lifesupport: 'count-lifesupport',
  };

  Object.entries(map).forEach(([key, id]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = totals[key] || 0;
  });
}
