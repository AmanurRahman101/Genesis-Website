/*
========================================================================
   GENESIS TRADING CO. - EXPERIENCE & CONTRACTS (js/experience.js)
   Stats counter animations and interactive work orders search engine
========================================================================
*/

// 1. Comprehensive Work Orders & Contracts Database
const workOrdersData = [
  {
    institution: 'Shaheed M Monsur Ali Medical College & 500 Bedded Hospital',
    location: 'Sirajganj, Bangladesh',
    totalValue: 'BDT 102,06,55,994.32',
    rawCrore: 102.06,
    year: 'FY 2023-24',
    scope: 'Massive contract executed under Bangladesh Air Force Welfare Trust. Supplied complete clinical diagnostic machinery, operation theater fixtures, and imaging equipment.',
    additionalDetails: [
      'FY 2018-19 initial phase delivery of medical instruments worth BDT 9,99,40,688.25.',
      'FY 2022-23 chemical reagents and clinical consumables totaling BDT 62,07,521.00.'
    ]
  },
  {
    institution: 'Central Medical Stores Depot (CMSD)',
    location: 'Tejgaon, Dhaka',
    totalValue: 'Over BDT 33,00,00,000.00',
    rawCrore: 33.00,
    year: 'Multiple Fiscal Years',
    scope: 'Long-standing partnership delivering critical national procurement packages, supplying endoscopy consoles, patient monitors, and automated laboratory chemistry systems.',
    additionalDetails: [
      'Supply of advanced endoscopes, colonoscopes, and bronchoscopes valued at BDT 15,04,39,554.00.',
      '130 units of advanced patient monitoring systems for BDT 5,14,57,989.62.',
      '120 units of biochemistry and automated electrolyte analyzer equipment worth BDT 3,90,73,157.60.',
      'Endoscopic equipment package valued at BDT 7,89,27,760.00.',
      'Supply of essential machines including ultrasonogram & anesthesia stations for BDT 1,33,34,000.00.'
    ]
  },
  {
    institution: 'National Institute of Neuro Sciences & Hospital',
    location: 'Shere Bangla Nagar, Dhaka',
    totalValue: 'BDT 5,79,00,000.00',
    rawCrore: 5.79,
    year: 'FY 2022-23',
    scope: 'Major capacity-building expansion of the Central Sterile Services Department (CSSD), supplying high-pressure steam sterilizers, plasma sterilizers, and automated washer-disinfectors.',
    additionalDetails: [
      'Executed under direct inspection and quality supervision of NEMEMEW & TC (National Electro-Medical Equipment Maintenance Workshop & Training Center).',
      'Included installation, safety validation, and long-term engineer training.'
    ]
  },
  {
    institution: 'Bangabandhu Medical College & Hospital Project',
    location: 'Sunamganj, Bangladesh',
    totalValue: 'BDT 4,14,08,800.00',
    rawCrore: 4.14,
    year: 'FY 2023-24',
    scope: 'Turnkey medical equipment supply, installation, and commissioning for the establishment of the new clinical departments, diagnostic laboratories, and education blocks.',
    additionalDetails: [
      'Supplied automated blood culture systems and biological safety cabinets.',
      'Equipped labs with high-end Olympus microscopes, thermal cyclers, centrifuges, and incubators.',
      'Provided comprehensive laboratory glassware and precision pipetting setups.'
    ]
  },
  {
    institution: 'Shaheed Ziaur Rahman Medical College Hospital (SZRMC)',
    location: 'Bogra, Bangladesh',
    totalValue: 'BDT 4,12,11,789.16',
    rawCrore: 4.12,
    year: 'FY 2024-25',
    scope: 'Primary contractor for chemical reagents and high-grade consumables to support the hospital\'s laboratory networks and central screening labs.',
    additionalDetails: [
      'Supplied reagents for biochemistry, hematology panels, and clinical assay kits.',
      'Continuous diagnostic supply chain integration to maintain 100% test availability.'
    ]
  },
  {
    institution: 'Central Police Hospital',
    location: 'Dhaka, Sylhet, Rajshahi, Barisal',
    totalValue: 'BDT 7,37,85,000.00',
    rawCrore: 7.37,
    year: 'FY 2023-24',
    scope: 'Supplied diagnostic imaging and operation theater systems to multiple regional police hospital wings.',
    additionalDetails: [
      'Three 1000mA Digital X-Ray suites valued at BDT 4,02,00,000.00.',
      'Digital C-Arm image-intensifier system worth BDT 1,75,00,000.00.',
      'Duodenovideoscope clinical tower worth BDT 1,35,00,000.00.',
      'Hydraulic surgical operating tables worth BDT 17,50,000.00.',
      'Laboratory instruments package (centrifuges, rotators) worth BDT 7,35,000.00.'
    ]
  },
  {
    institution: 'Sarkari Kormochari Hospital',
    location: 'Fulbaria, Dhaka',
    totalValue: 'BDT 6,89,28,550.06',
    rawCrore: 6.89,
    year: 'June - September 2025',
    scope: 'Critical technology supply for the expansion of the hospital to a 500-bed facility, equipping dialysis bays and molecular diagnostic departments.',
    additionalDetails: [
      'Contract signed in June 2025 worth BDT 3,89,36,000.062 for supply and testing of dialysis machines.',
      'Contract signed in Sept 2025 worth BDT 2,99,92,550.001 for PCR lines, dope testing, and biochemistry analyzers.'
    ]
  },
  {
    institution: 'National Gastroliver Institute & Hospital',
    location: 'Dhaka, Bangladesh',
    totalValue: 'BDT 5,61,37,230.00',
    rawCrore: 5.61,
    year: 'FY 2022-24',
    scope: 'Major partner for advanced diagnostic imaging, endoscopes, and surgical laparoscope lines.',
    additionalDetails: [
      'Supplied diagnostic reagents: BDT 2.73 Crore (FY 22-23), BDT 1.13 Crore and BDT 56.6 Lakh (FY 23-24).',
      'Advanced video colonoscopes and clinical endoscopes worth BDT 2,01,50,000.00.',
      'Adult surgical laparoscope towers valued at BDT 1,19,75,000.00.'
    ]
  },
  {
    institution: 'Rajshahi Medical College Hospital',
    location: 'Rajshahi, Bangladesh',
    totalValue: 'BDT 1,62,10,056.00',
    rawCrore: 1.62,
    year: 'FY 2024-25',
    scope: 'Authorized supplier of biochemistry and hematology analyzer reagents and clinical chemicals for this regional teaching hospital.',
    additionalDetails: [
      'Delivered reagents worth BDT 1,23,44,456.00 with certified experience credentials.',
      'Prior chemicals package worth BDT 38,65,600.00.'
    ]
  }
];

// 2. Render Work Orders List
function renderWorkOrders(orders) {
  const container = document.getElementById('work-orders-grid-container');
  const countVal = document.getElementById('work-orders-count');
  
  if (!container) return;
  container.innerHTML = '';

  if (countVal) {
    countVal.textContent = orders.length;
  }

  if (orders.length === 0) {
    container.innerHTML = `
      <div class="text-center" style="grid-column: 1 / -1; padding: 60px 0;">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--gray-400)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom: 16px;">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
        <h4 class="text-gray" style="font-size: 1.2rem; margin-bottom: 8px;">No Work Orders Found</h4>
        <p class="text-gray" style="font-size: 0.9rem;">Try typing another query or city.</p>
      </div>
    `;
    return;
  }

  orders.forEach(order => {
    const card = document.createElement('div');
    card.className = 'work-order-card glass-panel glow-card';
    
    // Generate detail bullet list
    let detailsHTML = '';
    order.additionalDetails.forEach(detail => {
      detailsHTML += `<li style="font-size:0.82rem; margin-bottom:8px; line-height:1.4;">• ${detail}</li>`;
    });

    // Custom CSS background representation using inline linear-gradient based on project value
    const blueGradient = 'linear-gradient(135deg, #008cd6 0%, #004d7a 100%)';
    const crimsonGradient = 'linear-gradient(135deg, #e92330 0%, #8b0000 100%)';
    const bgGrad = order.rawCrore > 10 ? crimsonGradient : blueGradient;

    card.innerHTML = `
      <div class="work-order-visual-box" style="background: ${bgGrad}; display:flex; flex-direction:column; justify-content:center; align-items:center; padding: 20px;">
        <div class="work-order-value-tag">${order.totalValue.includes('Over') ? 'Over BDT ' + order.rawCrore + ' Cr' : 'BDT ' + order.rawCrore + ' Cr'}</div>
        <div style="font-family:'Plus Jakarta Sans',sans-serif; font-size:0.85rem; color:rgba(255,255,255,0.7); text-transform:uppercase; letter-spacing:1px; z-index:1; margin-top:20px;">
          ${order.year}
        </div>
      </div>
      <div class="work-order-info">
        <h3 class="text-dark">${order.institution}</h3>
        <div class="work-order-location">${order.location}</div>
        <p class="work-order-desc">${order.scope}</p>
        
        <div style="border-top:1.5px solid var(--gray-200); padding-top:16px; margin-top:auto;">
          <h4 style="font-size:0.82rem; font-weight:700; margin-bottom:8px; text-transform:uppercase; color:var(--dark);">Sub-Contracts & Details</h4>
          <ul style="list-style:none; padding:0; color:var(--gray-600);">
            ${detailsHTML}
          </ul>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

// 3. Setup Work Order Search Filter
function setupWorkOrderSearch() {
  const searchInput = document.getElementById('work-order-search');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = workOrdersData.filter(order => {
      return (
        order.institution.toLowerCase().includes(term) ||
        order.location.toLowerCase().includes(term) ||
        order.scope.toLowerCase().includes(term) ||
        order.totalValue.toLowerCase().includes(term) ||
        order.year.toLowerCase().includes(term) ||
        order.additionalDetails.some(d => d.toLowerCase().includes(term))
      );
    });
    renderWorkOrders(filtered);
  });
}

// 4. Smooth Counter Animation on Scroll
function initStatsCounters() {
  const counters = document.querySelectorAll('.animate-number');
  if (counters.length === 0) return;

  const countUp = (counter) => {
    const target = parseFloat(counter.getAttribute('data-target'));
    const speed = parseInt(counter.getAttribute('data-speed')) || 2000; // default 2000ms
    const isCurrency = counter.getAttribute('data-type') === 'currency';
    const isFloat = counter.getAttribute('data-float') === 'true';
    
    let startTimestamp = null;
    
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / speed, 1);
      
      let currentValue = progress * target;
      
      // Formatting output
      let formatted = '';
      if (isFloat) {
        formatted = currentValue.toFixed(2);
      } else {
        formatted = Math.floor(currentValue).toString();
      }
      
      // Prefix/Suffix addition
      if (isCurrency) {
        counter.textContent = formatted;
      } else {
        counter.textContent = formatted;
      }
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        // Guarantee final value matches target exactly
        counter.textContent = isFloat ? target.toFixed(2) : target.toString();
      }
    };
    
    window.requestAnimationFrame(step);
  };

  // IntersectionObserver to start counting only when visible
  const observerOptions = {
    root: null, // viewport
    threshold: 0.1, // trigger when 10% visible
    rootMargin: '0px'
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        countUp(entry.target);
        observer.unobserve(entry.target); // run once
      }
    });
  }, observerOptions);

  counters.forEach(counter => {
    observer.observe(counter);
  });
}

// Initialize Page
document.addEventListener('DOMContentLoaded', () => {
  // Renders default list on experience page load
  const workOrdersGrid = document.getElementById('work-orders-grid-container');
  if (workOrdersGrid) {
    renderWorkOrders(workOrdersData);
    setupWorkOrderSearch();
  }
  
  // Triggers counters on any page containing stat values
  initStatsCounters();
});
