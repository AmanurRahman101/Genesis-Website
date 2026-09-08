/*
========================================================================
   GENESIS TRADING CO. - PRODUCTS DATA & HANDLER (js/products.js)
   Unimed-Style Interactive Catalog with CT, MRI, and Advanced Diagnostics
========================================================================
*/

// 1. Comprehensive Product Database
const productsData = [
  // =========================================================================
  // 1. COMPUTED TOMOGRAPHY (CT) SYSTEMS - Formal Name
  // =========================================================================
  {
    id: 'ct-neuviz-128',
    model: 'NeuViz 128 CT',
    brand: 'Genesis Healthcare',
    origin: 'Global',
    category: 'ct-scan',
    series: '128-slice',
    legacyCategory: 'imaging',
    subCategory: 'Computed Tomography (CT) Systems',
    formalName: 'Computed Tomography (CT) Systems',
    description: '128-Slice Ultra-Fast Dual-Energy CT Scanner featuring sub-millimeter isotropic resolution, 70cm gantry aperture, and ASiR low-dose AI reconstruction for advanced cardiac, neurological, and emergency trauma screening.',
    features: [
      '128 Slices per single gantry rotation',
      '0.35s ultra-fast rotation for motion-free cardiac acquisition',
      '70 cm large patient bore aperture with ambient lighting',
      'ASiR Low-Dose AI iterative reconstruction (up to 70% dose reduction)',
      'Sub-millimeter 0.625mm isotropic spatial resolution',
      'Automatic patient positioning camera with anatomical recognition'
    ],
    tags: ['128-Slice', 'Low Dose AI', '0.35s Fast Rotation'],
    badge: 'NEW',
    quickFilters: ['new', 'ce', 'stat'],
    ceCertified: true
  },
  {
    id: 'ct-scenaria-64',
    model: 'Scenaria 64 CT',
    brand: 'Genesis Healthcare',
    origin: 'Japan',
    category: 'ct-scan',
    series: '64-slice',
    legacyCategory: 'imaging',
    subCategory: 'Computed Tomography (CT) Systems',
    formalName: 'Computed Tomography (CT) Systems',
    description: '64-Slice Whole-Body Helical CT System optimized for high clinical throughput, pediatric dose reduction, and emergency STAT trauma examinations with high-frequency 80kW generator.',
    features: [
      '64 Slices volumetric helical scan coverage',
      'IntelliCenter real-time anatomical dose modulation',
      '80 kW high-frequency x-ray generator power',
      'Sub-second whole-body multi-slice trauma coverage',
      'Dedicated pediatric low-dose protocols and filters',
      'Cardiovascular calcium scoring and vascular subtraction'
    ],
    tags: ['64-Slice', 'Trauma STAT', 'Pediatric Protocol'],
    badge: 'BEST SELLER',
    quickFilters: ['bestseller', 'ce', 'stat'],
    ceCertified: true
  },
  {
    id: 'ct-precision-32',
    model: 'Precision 32 CT',
    brand: 'ECORAY',
    origin: 'Korea',
    category: 'ct-scan',
    series: '32-slice',
    legacyCategory: 'imaging',
    subCategory: 'Computed Tomography (CT) Systems',
    formalName: 'Computed Tomography (CT) Systems',
    description: '32-Slice Multi-Detector Clinical Diagnostic CT Scanner providing reliable 24/7 uptime, exceptional image clarity, and low lifecycle operating costs for regional imaging centers.',
    features: [
      '32 Multi-detector row configuration',
      'Micro-beam low-scatter collimation optics',
      'Instant image reconstruction (up to 30 images/sec)',
      'Energy-efficient green standby sleep cycle',
      'Intuitive clinical workflow touchscreen console',
      'Compact siting footprint suitable for 18 sqm scan rooms'
    ],
    tags: ['32-Slice', 'Energy Efficient', 'Compact Siting'],
    badge: null,
    quickFilters: ['ce'],
    ceCertified: true
  },

  // =========================================================================
  // 2. MAGNETIC RESONANCE IMAGING (MRI) SYSTEMS - Formal Name
  // =========================================================================
  {
    id: 'mri-vantage-15t',
    model: 'Vantage 1.5T MRI',
    brand: 'Genesis Healthcare',
    origin: 'Japan',
    category: 'mri-scan',
    series: '15t',
    legacyCategory: 'imaging',
    subCategory: 'Magnetic Resonance Imaging (MRI) Systems',
    formalName: 'Magnetic Resonance Imaging (MRI) Systems',
    description: '1.5 Tesla Superconducting High-Field MRI System featuring zero-helium boil-off cryogenic engineering, 16-channel phased array RF receiver coils, and Pianissimo ultra-quiet acoustic noise reduction for superior patient comfort.',
    features: [
      '1.5 Tesla superconducting magnet with active shielding',
      'Zero helium boil-off technology eliminates periodic cryogen refills',
      'Pianissimo ultra-quiet acoustic technology (ambient level < 2dB above room)',
      '16-Channel digital RF phased array receiver architecture',
      'High homogeneity 50 cm spherical imaging volume',
      'Full clinical packages: Neuro, Angio, MSK, Cardiac, and Abdominal'
    ],
    tags: ['1.5 Tesla', 'Zero Boil-Off', 'Pianissimo Quiet'],
    badge: 'BEST SELLER',
    quickFilters: ['bestseller', 'ce'],
    ceCertified: true
  },
  {
    id: 'mri-echoscan-30t',
    model: 'EchoScan 3.0T MRI',
    brand: 'Genesis Healthcare',
    origin: 'Germany',
    category: 'mri-scan',
    series: '30t',
    legacyCategory: 'imaging',
    subCategory: 'Magnetic Resonance Imaging (MRI) Systems',
    formalName: 'Magnetic Resonance Imaging (MRI) Systems',
    description: '3.0 Tesla Multi-Transmit Ultra-High-Definition MRI Scanner engineered for functional neuroimaging, high-resolution spectroscopy, and non-contrast whole-body DWIBS diffusion oncology studies.',
    features: [
      '3.0 Tesla ultra-high gradient magnetic field strength (45 mT/m @ 200 T/m/s)',
      'Multi-channel parallel RF transmission for B1 homogeneity',
      '32-Channel high-density neuro and vascular matrix coil',
      'Whole-body DWIBS non-contrast oncology metastasis staging',
      'Sub-millimeter fMRI brain mapping and fiber tractography',
      '71 cm extra-wide bore opening to reduce patient anxiety'
    ],
    tags: ['3.0 Tesla', 'Functional MRI', '32-Channel RF'],
    badge: 'NEW',
    quickFilters: ['new', 'ce'],
    ceCertified: true
  },
  {
    id: 'mri-openscan-04t',
    model: 'OpenScan 0.4T MRI',
    brand: 'Genesis Healthcare',
    origin: 'Italy',
    category: 'mri-scan',
    series: '04t',
    legacyCategory: 'imaging',
    subCategory: 'Magnetic Resonance Imaging (MRI) Systems',
    formalName: 'Magnetic Resonance Imaging (MRI) Systems',
    description: '0.4 Tesla Permanent Magnet Open MRI System featuring a 310° panoramic aperture, completely eliminating claustrophobia for pediatric, bariatric, and elderly patients with zero cryogen consumption.',
    features: [
      '0.4T permanent open C-arm gantry architecture (310° panoramic view)',
      'Zero helium or liquid cryogen consumption (lifetime maintenance free magnet)',
      'Claustrophobia-free patient environment with accompanying family space',
      'Dedicated multichannel orthopedic, spine, and joint imaging coils',
      'Power consumption under 8 kW with standard single-phase compatibility',
      'Compact 25 sqm siting footprint with minimal shielding requirements'
    ],
    tags: ['0.4T Open', 'Claustrophobia Free', 'Zero Cryogen'],
    badge: null,
    quickFilters: ['ce'],
    ceCertified: true
  },

  // =========================================================================
  // 3. CHEMILUMINESCENCE (CLIA) - Unimed
  // =========================================================================
  {
    id: 'u200',
    model: 'U 200',
    brand: 'Unimed',
    origin: 'Turkiye',
    category: 'clia',
    series: 'u200',
    legacyCategory: 'ivd',
    subCategory: 'Chemiluminescence (CLIA)',
    formalName: 'Chemiluminescence Immunoassay (CLIA) Analyzers',
    description: 'Automatic Analyzer (200 T/H) - Advanced chemiluminescence immunoassay system with high throughput and precision for hospital core laboratories.',
    features: [
      'Constant throughput up to 200 tests/hour',
      'Random access, batch testing, and STAT emergency priority',
      '20 refrigerated sample positions with barcode auto-identification',
      'Capacitive liquid level sensing, clot detection, and bubble alarm',
      'Magnetic microparticle enzymatic chemiluminescence (AMPPD)',
      'Comprehensive tumor markers, thyroid, fertility, and cardiac panels'
    ],
    tags: ['200 T/H', 'CLIA', 'STAT Access'],
    badge: 'NEW',
    quickFilters: ['new', 'ce', 'stat'],
    ceCertified: true
  },
  {
    id: 'u180',
    model: 'U 180',
    brand: 'Unimed',
    origin: 'Turkiye',
    category: 'clia',
    series: 'u180',
    legacyCategory: 'ivd',
    subCategory: 'Chemiluminescence (CLIA)',
    formalName: 'Chemiluminescence Immunoassay (CLIA) Analyzers',
    description: 'Automatic Analyzer (180 T/H) - Reliable chemiluminescence immunoassay system for medium-throughput laboratories with continuous workflow loading.',
    features: [
      'Throughput of up to 180 tests/hour',
      'Continuous sample and reagent loading without pause',
      'Integrated reagent refrigeration (2°C - 8°C)',
      'Intuitive touch interface with real-time consumable countdown',
      'Non-contact vortex mixing technology eliminating cross-contamination',
      'Single-use reaction cuvettes with automated discard bin'
    ],
    tags: ['180 T/H', 'CLIA', 'Continuous Loading'],
    badge: null,
    quickFilters: ['ce'],
    ceCertified: true
  },
  {
    id: 'u300',
    model: 'U 300',
    brand: 'Unimed',
    origin: 'Turkiye',
    category: 'clia',
    series: 'u300',
    legacyCategory: 'ivd',
    subCategory: 'Chemiluminescence (CLIA)',
    formalName: 'Chemiluminescence Immunoassay (CLIA) Analyzers',
    description: 'High-Throughput Automatic Chemiluminescence Analyzer (300 T/H) engineered for high-volume central diagnostic laboratories and hospital networks.',
    features: [
      'High-speed throughput of 300 tests/hour constant',
      'Dedicated STAT emergency priority sample lane',
      '60 onboard refrigerated reagent positions with RFID calibration curve',
      'Dual pipetting arms for simultaneous sample and reagent aspiration',
      'Multi-stage magnetic separation wash station',
      'Automated sample dilution and auto-rerun capability'
    ],
    tags: ['300 T/H', 'High Throughput', 'RFID Tracking'],
    badge: 'BEST SELLER',
    quickFilters: ['bestseller', 'ce', 'stat'],
    ceCertified: true
  },

  // =========================================================================
  // 4. HEMATOLOGY ANALYZERS - Unimed
  // =========================================================================
  {
    id: 'uh1100',
    model: 'UH1100',
    brand: 'Unimed',
    origin: 'Turkiye',
    category: 'hematology',
    series: '6-part',
    legacyCategory: 'ivd',
    subCategory: 'Hematology Analyzers',
    formalName: 'Automated Hematology Analyzers',
    description: '6-Part Analyzer - Advanced hematology analyzer with comprehensive blood cell analysis and reticulocyte counting for rigorous clinical evaluations.',
    features: [
      '6-Part WBC differential counting with 34 diagnostic parameters',
      'Up to 90 samples/hour throughput',
      'Semiconductor laser scatter + chemical dye flow cytometry',
      'Dedicated STAT single-tube emergency aspiration slot',
      'High-resolution 3D scattergrams and histograms display',
      'Micro-sampling technology requires only 15 µL capillary blood'
    ],
    tags: ['6-Part', 'High Speed', 'Laser Scatter'],
    badge: null,
    quickFilters: ['ce', 'stat'],
    ceCertified: true
  },
  {
    id: 'uh1120',
    model: 'UH1120',
    brand: 'Unimed',
    origin: 'Turkiye',
    category: 'hematology',
    series: '6-part',
    legacyCategory: 'ivd',
    subCategory: 'Hematology Analyzers',
    formalName: 'Automated Hematology Analyzers',
    description: '6-Part Analyzer with Reticulocytes - Comprehensive hematology analyzer including reticulocyte analysis and optical platelet counts.',
    features: [
      '6-Part differential + Reticulocyte (RET%, RET#, IRF, LFR, MFR, HFR)',
      'Constant speed of 100 tests/hour with autoloader',
      'Tri-angle semiconductor laser scattering optics',
      'Automated autoloader with built-in barcode reader',
      'Optical fluorescent platelet (PLT-O) channel for low counts',
      'Bidirectional LIS auto-verification rule engine'
    ],
    tags: ['6-Part + Ret', 'High Speed', 'Autoloader'],
    badge: null,
    quickFilters: ['ce'],
    ceCertified: true
  },
  {
    id: 'uh1180',
    model: 'UH1180',
    brand: 'Unimed',
    origin: 'Turkiye',
    category: 'hematology',
    series: '6-part',
    legacyCategory: 'ivd',
    subCategory: 'Hematology Analyzers',
    formalName: 'Automated Hematology Analyzers',
    description: '6-Part Analyzer (High Speed) - Ultra-fast hematology analyzer for high volume hospital core laboratories requiring relentless throughput.',
    features: [
      '6-Part WBC differentiation with RET & Nucleated RBC (NRBC)',
      'Ultra-fast throughput up to 110 samples/hour',
      'Continuous 50-tube rack walkaway autoloader',
      'Nucleated Red Blood Cell (NRBC) direct counting in every CBC',
      'Reagent temperature compensation and auto-maintenance',
      'Large 15-inch industrial grade capacitive touchscreen'
    ],
    tags: ['6-Part', 'Ultra Fast', 'NRBC Direct'],
    badge: 'NEW',
    quickFilters: ['new', 'ce', 'stat'],
    ceCertified: true
  },
  {
    id: 'uh580',
    model: 'UH580',
    brand: 'Unimed',
    origin: 'Turkiye',
    category: 'hematology',
    series: '5-part',
    legacyCategory: 'ivd',
    subCategory: 'Hematology Analyzers',
    formalName: 'Automated Hematology Analyzers',
    description: '5-Part Analyzer (80 T/H) - Reliable 5-part differential hematology analyzer for medium-sized clinical laboratories and emergency diagnostic clinics.',
    features: [
      '5-Part WBC differential (Neutrophils, Lymphocytes, Monocytes, Eosinophils, Basophils)',
      '80 tests/hour constant throughput',
      'Laser scatter + chemical flow impedance technology',
      'Dynamic floating discriminators for abnormal cell alarms',
      'Low reagent consumption with 3 routine reagents only',
      'Embedded Linux operating system with comprehensive QC charts'
    ],
    tags: ['5-Part', '80 T/H', 'Compact Benchtop'],
    badge: 'BEST SELLER',
    quickFilters: ['bestseller', 'ce'],
    ceCertified: true
  },

  // =========================================================================
  // 5. MODULAR AUTOMATION - Unimed
  // =========================================================================
  {
    id: 'labas-m',
    model: 'Labas M',
    brand: 'Unimed',
    origin: 'Turkiye',
    category: 'modular-automation',
    series: 'ub-1000',
    legacyCategory: 'ivd',
    subCategory: 'Modular Automation',
    formalName: 'Total Laboratory Automation (TLA) & Modular Systems',
    description: 'Total Laboratory Automation (TLA) modular solution integrating pre-analytical centrifugation, automated decapping, track sorting, analytical docking, and refrigerated archiving.',
    features: [
      'Flexible modular track expands up to 12 analytical instruments',
      'High-speed magnetic sample routing track (up to 3,600 tubes/hour)',
      'Automated sample centrifugation, volume level sensing, and tube decapping',
      'Intelligent sample sortation, re-run routing, and post-analysis archiving',
      'Unified middleware supervisory dashboard with real-time tube tracking'
    ],
    tags: ['Total Lab Automation', 'Modular Track', 'Robotic Sorting'],
    badge: 'NEW',
    quickFilters: ['new', 'ce'],
    ceCertified: true
  },

  // =========================================================================
  // 6. URINALYSIS & FECES ANALYSIS - Unimed
  // =========================================================================
  {
    id: 'uri-300',
    model: 'URI-300',
    brand: 'Unimed',
    origin: 'Turkiye',
    category: 'urinalysis-feces',
    series: 'urine',
    legacyCategory: 'ivd',
    subCategory: 'Urinalysis & Feces Analysis',
    formalName: 'Automated Urinalysis & Feces Diagnostic Systems',
    description: 'Fully automated urine chemistry and sediment analyzer, combining digital high-resolution flow microscopy with multi-wavelength dry test strip reflectance photometry.',
    features: [
      'High-resolution digital CCD microscope with planar flow cell',
      'Integrated dry chemistry strip (14 parameters) + sediment microscopy',
      'Up to 240 strips/hour for chemistry, 120 samples/hour for sediment',
      'AI neural network auto-classification of RBC, WBC, casts, crystals, bacteria',
      'Zero centrifugation required, preserving delicate pathological casts'
    ],
    tags: ['Urine Sediment', '240 T/H', 'Digital Flow Cell'],
    badge: 'BEST SELLER',
    quickFilters: ['bestseller', 'ce'],
    ceCertified: true
  },
  {
    id: 'fa-60',
    model: 'FA-60',
    brand: 'Unimed',
    origin: 'Turkiye',
    category: 'urinalysis-feces',
    series: 'feces',
    legacyCategory: 'ivd',
    subCategory: 'Urinalysis & Feces Analysis',
    formalName: 'Automated Urinalysis & Feces Diagnostic Systems',
    description: 'Specialized automated stool analyzer for microscopic morphology and occult blood chemical analysis with a completely sealed anti-odor containment chamber.',
    features: [
      'Fully enclosed sealed testing chamber eliminates biohazard odor',
      'Automated sample dilution, homogenization, filtering, and slide spreading',
      'Microscopic camera identifies parasite ova, amoebae, cysts, RBC, WBC',
      'Simultaneous dual colloidal gold occult blood testing (FOB + Transferrin)',
      'Standardized photographic reporting connected directly to hospital LIS'
    ],
    tags: ['Stool Analyzer', 'Sealed Anti-Odor', 'Parasite ID'],
    badge: null,
    quickFilters: ['ce'],
    ceCertified: true
  },
  {
    id: 'vsa-60',
    model: 'VSA-60',
    brand: 'Unimed',
    origin: 'Turkiye',
    category: 'urinalysis-feces',
    series: 'urine',
    legacyCategory: 'ivd',
    subCategory: 'Urinalysis & Feces Analysis',
    formalName: 'Automated Urinalysis & Feces Diagnostic Systems',
    description: 'Automated diagnostic system for standardized screening of vaginal secretions, wet mount morphological inspection, and biochemical infection panels.',
    features: [
      'Automated phase-contrast morphology and digital microscopic photography',
      'Five chemical markers: pH, H2O2, Leukocyte Esterase, Sialidase, GNA',
      'High accuracy detection for Bacterial Vaginosis, Trichomoniasis, and Candidiasis',
      'Complete test panel results in under 10 minutes',
      'Standardized objective reporting eliminating inter-operator subjectivity'
    ],
    tags: ['Vaginal Secretion', 'Morphology', '10-Min Fast'],
    badge: null,
    quickFilters: ['ce'],
    ceCertified: true
  },

  // =========================================================================
  // 7. GLYCOHEMOGLOBIN (HbA1c) - Unimed
  // =========================================================================
  {
    id: 'u8-pro',
    model: 'U-8 PRO',
    brand: 'Unimed',
    origin: 'Turkiye',
    category: 'glycohemoglobin',
    series: 'u-8-pro',
    legacyCategory: 'ivd',
    subCategory: 'Glycohemoglobin (HbA1c)',
    formalName: 'Glycohemoglobin (HbA1c) & Hemoglobin Analyzers',
    description: 'Professional HbA1c and Hemoglobin testing platform featuring HPLC-correlated optical technology, auto-calibration, and instant thermal printing.',
    features: [
      'Dual testing mode (Direct HbA1c % & Total Hemoglobin g/dL)',
      'High correlation with reference HPLC methods (r > 0.995)',
      'Results delivered in 60 seconds from only 10 µL whole blood',
      'Built-in high-speed thermal printer and USB export',
      'Internal memory storage up to 10,000 patient test records'
    ],
    tags: ['HbA1c Fast', 'HPLC Correlated', 'Built-in Printer'],
    badge: 'BEST SELLER',
    quickFilters: ['bestseller', 'ce'],
    ceCertified: true
  },
  {
    id: 'u8',
    model: 'U-8',
    brand: 'Unimed',
    origin: 'Turkiye',
    category: 'glycohemoglobin',
    series: 'u-8',
    legacyCategory: 'ivd',
    subCategory: 'Glycohemoglobin (HbA1c)',
    formalName: 'Glycohemoglobin (HbA1c) & Hemoglobin Analyzers',
    description: 'Microfluidic hemoglobin testing system for rapid point-of-care screening and primary healthcare community centers.',
    features: [
      'Direct photometric measurement of total hemoglobin and hematocrit',
      'Results in only 5 seconds',
      'Requires only 10 µL capillary blood drop',
      'Reagent microcuvettes stable at room temperature (up to 2 years)',
      'Rechargeable internal lithium battery supporting 100+ tests per charge'
    ],
    tags: ['Hemoglobin', '5-Second Test', 'Battery Powered'],
    badge: null,
    quickFilters: ['ce'],
    ceCertified: true
  },

  // =========================================================================
  // 8. BLOOD GAS - Unimed
  // =========================================================================
  {
    id: 'ubg-60',
    model: 'UBG-60',
    brand: 'Unimed',
    origin: 'Turkiye',
    category: 'blood-gas',
    series: 'ubg-60',
    legacyCategory: 'ivd',
    subCategory: 'Blood Gas',
    formalName: 'Critical Care Blood Gas Analyzers',
    description: 'State-of-the-art critical care blood gas and electrolyte analyzer utilizing maintenance-free all-in-one reagent cartridges for rapid ICU and ER diagnostics.',
    features: [
      'Comprehensive parameter menu: pH, pCO2, pO2, Na+, K+, Cl-, Ca++, Glu, Lac, Hct',
      'Maintenance-free multi-use cartridge with integrated sensor array',
      'Delivers complete analytical report in 60 seconds from 90 µL blood',
      'Zero gas cylinder required; liquid calibration packs built into cartridge',
      'Auto-clot detection and automatic cleaning cycles'
    ],
    tags: ['Blood Gas', 'Critical Care', '60-Sec STAT'],
    badge: 'NEW',
    quickFilters: ['new', 'ce', 'stat'],
    ceCertified: true
  },

  // =========================================================================
  // 9. ELECTROLYTE - Unimed
  // =========================================================================
  {
    id: 'cee-5',
    model: 'CCE-5',
    brand: 'Unimed',
    origin: 'Turkiye',
    category: 'electrolyte',
    series: 'cce-5',
    legacyCategory: 'ivd',
    subCategory: 'Electrolyte',
    formalName: 'Ion Selective Electrode (ISE) Electrolyte Analyzers',
    description: 'User-friendly, maintenance-free ISE electrolyte analyzer with high-precision long-life electrodes and low consumable consumption.',
    features: [
      'Direct measurement of Na+, K+, Cl-, Ca++, and pH in serum, plasma, urine',
      'Long-life solid-state ion selective electrodes (up to 2 years lifespan)',
      'Automatic standby sleep mode preserves reagent packs when inactive',
      'Direct touch sampling probe for primary tubes, pediatric cups, and syringes',
      'Integrated quality control management with real-time Levey-Jennings charts'
    ],
    tags: ['ISE Electrolyte', 'Low Consumption', 'Direct Touch'],
    badge: null,
    quickFilters: ['ce'],
    ceCertified: true
  },

  // =========================================================================
  // 10. DIGITAL RADIOGRAPHY (X-RAY) SYSTEMS
  // =========================================================================
  {
    id: 'ecoview-9-plus',
    model: 'Ecoview 9 Plus',
    brand: 'ECORAY',
    origin: 'Korea',
    category: 'x-ray',
    series: 'ceiling',
    legacyCategory: 'imaging',
    subCategory: 'Digital Radiography (X-Ray) Systems',
    formalName: 'Digital Radiography (X-Ray) Systems',
    description: 'Premium ceiling-suspension digital X-Ray system for high-volume imaging centers, offering automated positioning and dual flat-panel wireless detectors.',
    features: [
      'Ceiling-suspended tube stand with fully automated motorized auto-tracking',
      'Dual wireless Cesium Iodide (CsI) digital flat-panel detectors (17x17 inch)',
      'Motorized vertical grid wall stand with tilting detector capability',
      'Rapid image preview within 2 seconds of exposure',
      'DAP radiation dose management with DICOM dose structured reporting'
    ],
    tags: ['Ceiling X-Ray', 'Dual CsI FPD', 'Low Dose'],
    badge: 'BEST SELLER',
    quickFilters: ['bestseller', 'ce'],
    ceCertified: true
  },
  {
    id: 'hf-525-plus',
    model: 'HF-525 Plus',
    brand: 'ECORAY',
    origin: 'Korea',
    category: 'x-ray',
    series: 'floor',
    legacyCategory: 'imaging',
    subCategory: 'Digital Radiography (X-Ray) Systems',
    formalName: 'Digital Radiography (X-Ray) Systems',
    description: 'High-frequency digital radiography system with floor-mounted tube stand and four-way floating electromagnetic tabletop.',
    features: [
      '50 kW high-frequency x-ray generator with micro-focus tube',
      'Heavy-duty 4-way floating tabletop with electromagnetic brakes (300kg limit)',
      'Anatomical programming (APR) with 700+ examination presets',
      'Digital flat-panel detector retrofit ready with acquisition console',
      'Durable, rugged build designed for continuous high-patient throughput'
    ],
    tags: ['Floor Radiography', '50kW Generator', '4-Way Floating'],
    badge: null,
    quickFilters: ['ce'],
    ceCertified: true
  },
  {
    id: 'xdry-laser-imager',
    model: 'X-Dry Laser Imager',
    brand: 'GEMSS Healthcare',
    origin: 'Korea',
    category: 'x-ray',
    series: 'laser',
    legacyCategory: 'imaging',
    subCategory: 'Digital Radiography (X-Ray) Systems',
    formalName: 'Dry Laser Thermal Diagnostic Imagers',
    description: 'Dry laser thermal printing system for high-resolution diagnostic radiography, CT, and MRI image outputs with multi-tray configuration.',
    features: [
      'Multi-tray loading (2 or 3 trays online simultaneously)',
      '508 dpi high-resolution laser photodiode engine',
      'High printing speed up to 180 films/hour',
      'Daylight film loading mechanism eliminates need for darkroom',
      'Universal DICOM 3.0 network protocol compatibility'
    ],
    tags: ['Laser Imager', '508 DPI', '180 Films/Hr'],
    badge: null,
    quickFilters: ['ce'],
    ceCertified: true
  },

  // =========================================================================
  // 11. DIAGNOSTIC ULTRASOUND SYSTEMS
  // =========================================================================
  {
    id: 'resona-r9',
    model: 'Resona R9',
    brand: 'Mindray',
    origin: 'China',
    category: 'ultrasound',
    series: 'flagship',
    legacyCategory: 'imaging',
    subCategory: 'Diagnostic Ultrasound Systems',
    formalName: 'Diagnostic Ultrasound Systems',
    description: 'Flagship premium color Doppler ultrasound system powered by ZST+ Zone Sonography, delivering revolutionary image clarity, elastography, and hemodynamic quantification.',
    features: [
      'V-Flow microvascular hemodynamics quantification with vector flow',
      'Sound Touch Elastography (STE) 2D shear-wave stiffness assessment',
      'Single-crystal ultra-wideband transducers for deep penetration',
      'High Frame Rate Contrast-Enhanced Ultrasound (HiFR CEUS)',
      'Dual-screen touch interface console with motorized floating arm'
    ],
    tags: ['Flagship Doppler', 'ZST+ Platform', 'Shear-Wave'],
    badge: 'NEW',
    quickFilters: ['new', 'ce'],
    ceCertified: true
  },
  {
    id: 'consona-n8',
    model: 'Consona N8',
    brand: 'Mindray',
    origin: 'China',
    category: 'ultrasound',
    series: 'color-doppler',
    legacyCategory: 'imaging',
    subCategory: 'Diagnostic Ultrasound Systems',
    formalName: 'Diagnostic Ultrasound Systems',
    description: 'Premium color Doppler system featuring high-density single-crystal transducers and Smart Scene 3D cardiac detection for cardiology, OB/GYN, and radiology.',
    features: [
      'Single-crystal transducer support with Sound Speed Compensation',
      'Smart Scene 3D anatomical volume reconstruction',
      '21.5-inch borderless high-resolution LED medical display',
      'iCompare multi-modal side-by-side ultrasound and CT/MRI comparison',
      'Auto EF automated cardiac ejection fraction measurement'
    ],
    tags: ['Color Doppler', 'Smart 3D', 'Single-Crystal'],
    badge: 'BEST SELLER',
    quickFilters: ['bestseller', 'ce'],
    ceCertified: true
  },
  {
    id: 'consona-n5t',
    model: 'Consona N5T',
    brand: 'Mindray',
    origin: 'China',
    category: 'ultrasound',
    series: 'color-doppler',
    legacyCategory: 'imaging',
    subCategory: 'Diagnostic Ultrasound Systems',
    formalName: 'Diagnostic Ultrasound Systems',
    description: 'Core-tier diagnostic ultrasound scanner built on the advanced ZST+ platform, delivering exceptional spatial resolution across shared clinical services.',
    features: [
      'ZST+ Zone Sonography Technology for instantaneous focal sharpness',
      'HD Scope focal detail enhancement algorithm',
      'Ergonomic floating control panel with height adjustment',
      'Quick auto-presets for general imaging, MSK, and vascular'
    ],
    tags: ['Shared Services', 'HD Scope', 'Zone Sonography'],
    badge: null,
    quickFilters: ['ce'],
    ceCertified: true
  },
  {
    id: 'hepatus-6',
    model: 'Hepatus 6',
    brand: 'Mindray',
    origin: 'China',
    category: 'ultrasound',
    series: 'liver-elastography',
    legacyCategory: 'imaging',
    subCategory: 'Diagnostic Ultrasound Systems',
    formalName: 'Dedicated Liver Ultrasound & Elastography Systems',
    description: 'Specialized liver diagnostic ultrasound system offering non-invasive transient elastography (FibroScan alternative), color Doppler, and liver steatosis grading.',
    features: [
      'LiaQ Shearwave Liver stiffness quantification (kPa measurement)',
      'ViAQ Viscosity mapping for hepatic inflammation progression',
      'Focused liver fat grading attenuation parameter for steatosis',
      'Ultra-lightweight cart with dedicated broadband liver probes'
    ],
    tags: ['Liver Elastography', 'Steatosis Index', 'Non-Invasive'],
    badge: null,
    quickFilters: ['ce'],
    ceCertified: true
  },
  {
    id: 'dp-30',
    model: 'DP-30',
    brand: 'Mindray',
    origin: 'China',
    category: 'ultrasound',
    series: 'portable',
    legacyCategory: 'imaging',
    subCategory: 'Diagnostic Ultrasound Systems',
    formalName: 'Portable Diagnostic Ultrasound Scanners',
    description: 'High-performance portable ultrasound system with quick startup, PW Doppler, and rechargeable battery for field and bedside examinations.',
    features: [
      'Weight under 5.5 kg with durable magnesium-alloy chassis',
      'Pulsed Wave (PW) Doppler functionality and auto-trace calculations',
      'Rechargeable internal battery delivering over 2 hours of continuous scanning',
      'One-key IP image auto-optimization for rapid clinical triage'
    ],
    tags: ['Portable', 'PW Doppler', 'Under 5.5kg'],
    badge: null,
    quickFilters: ['ce'],
    ceCertified: true
  },

  // =========================================================================
  // 12. POINT-OF-CARE TESTING (POCT) & ESR
  // =========================================================================
  {
    id: 'afias-10',
    model: 'AFIAS 10',
    brand: 'Boditech',
    origin: 'Korea',
    category: 'poct',
    series: 'afias',
    legacyCategory: 'ivd',
    subCategory: 'Point-of-Care Testing (POCT)',
    formalName: 'Automated Point-of-Care Immunoassay Analyzers',
    description: 'Flagship 10-channel fluorescent immunoassay POCT analyzer delivering high-throughput rapid assays for hospital emergency rooms and cardiology departments.',
    features: [
      '10 independent parallel testing channels for high emergency throughput',
      'All-in-one cartridge mechanism with automated calibration RFID chip',
      'Direct primary tube blood sampling with no manual pipetting',
      'Rapid assay menu: Troponin-I, NT-proBNP, D-Dimer, PCT, CRP, HbA1c, COVID-19',
      'Full bidirectional hospital LIS/HIS communication'
    ],
    tags: ['10-Channel POCT', 'STAT Cardiac', 'All-in-One Cartridge'],
    badge: 'BEST SELLER',
    quickFilters: ['bestseller', 'ce', 'stat'],
    ceCertified: true
  },
  {
    id: 'afias-6',
    model: 'AFIAS 6',
    brand: 'Boditech',
    origin: 'Korea',
    category: 'poct',
    series: 'afias',
    legacyCategory: 'ivd',
    subCategory: 'Point-of-Care Testing (POCT)',
    formalName: 'Automated Point-of-Care Immunoassay Analyzers',
    description: 'Automated 6-channel POCT analyzer allowing 6 simultaneous parallel tests for diverse analytes with zero reagent waste.',
    features: [
      '6 parallel test slots for flexible multi-analyte testing',
      'Emergency STAT sample prioritization',
      'Capillary finger-prick blood compatibility using C-tips',
      'Automated reagent foil puncture and optical fluorescent detection'
    ],
    tags: ['6-Channel POCT', 'Finger-Prick', 'Rapid STAT'],
    badge: null,
    quickFilters: ['ce', 'stat'],
    ceCertified: true
  },
  {
    id: 'ised-pro',
    model: 'iSED PRO',
    brand: 'ALCOR Scientific',
    origin: 'USA',
    category: 'poct',
    series: 'esr',
    legacyCategory: 'ivd',
    subCategory: 'Point-of-Care Testing (POCT)',
    formalName: 'Continuous-Loading Automated ESR Analyzers',
    description: 'High-throughput automated Erythrocyte Sedimentation Rate (ESR) analyzer featuring continuous loading capacity for busy hospital core laboratories.',
    features: [
      'Throughput up to 180 tests/hour',
      'Continuous sample loading without pausing operation',
      'Dynamic capping system prevents biohazard aerosol exposure',
      'Dual-laser optical rheology eliminates reagents entirely',
      'Aspirates directly from standard 100 µL EDTA blood collection tubes'
    ],
    tags: ['ESR Analyzer', '180 T/H', 'Zero Reagent'],
    badge: 'NEW',
    quickFilters: ['new', 'ce'],
    ceCertified: true
  },
  {
    id: 'miniised',
    model: 'MiniiSED',
    brand: 'ALCOR Scientific',
    origin: 'USA',
    category: 'poct',
    series: 'esr',
    legacyCategory: 'ivd',
    subCategory: 'Point-of-Care Testing (POCT)',
    formalName: 'Rapid Erythrocyte Sedimentation Rate (ESR) Analyzers',
    description: 'Single-sample ESR analyzer providing accurate results in 15 seconds directly from primary EDTA blood tubes with zero reagent waste.',
    features: [
      'Accurate results in 15 seconds',
      'Only requires 100 µL whole blood from primary tube',
      'Eliminates Westergren sedimentation tubes and biohazard cleaning',
      'Outstanding correlation with reference Westergren method (r = 0.99)'
    ],
    tags: ['ESR 15-Sec', 'Primary Tube', 'No Washing'],
    badge: null,
    quickFilters: ['ce'],
    ceCertified: true
  },

  // =========================================================================
  // 13. HEMODIALYSIS SYSTEMS - Unimed
  // =========================================================================
  {
    id: 'udia-hdf2',
    model: 'UDIA-HDF2',
    brand: 'Unimed',
    origin: 'Turkiye',
    category: 'hemodialysis',
    series: 'hdf',
    legacyCategory: 'hemodialysis',
    subCategory: 'Hemodialysis Systems',
    formalName: 'Hemodialysis & On-line Hemodiafiltration (HDF) Systems',
    description: 'Advanced on-line hemodiafiltration (HDF) system offering patient-tailored clearance profiles, volume-controlled ultrafiltration, and real-time KT/V monitoring.',
    features: [
      'On-line HDF, Hemofiltration, and standard Hemodialysis modes',
      'High-precision volumetric ultrafiltration balancing system (±10 g/h)',
      'Blood Volume Monitor (BVM) with real-time hematocrit feedback',
      'Integrated dual-stage pyrogen/endotoxin dialysate filter system',
      '15-inch swiveling medical touchscreen console with treatment graphs'
    ],
    tags: ['On-Line HDF', 'KT/V Real-Time', 'Double Pump'],
    badge: 'NEW',
    quickFilters: ['new', 'ce'],
    ceCertified: true
  },
  {
    id: 'udia-hd2',
    model: 'UDIA-HD2',
    brand: 'Unimed',
    origin: 'Turkiye',
    category: 'hemodialysis',
    series: 'hd',
    legacyCategory: 'hemodialysis',
    subCategory: 'Hemodialysis Systems',
    formalName: 'Hemodialysis & On-line Hemodiafiltration (HDF) Systems',
    description: 'Double-pump hemodialysis machine built for reliability, safety, and economical dialysate consumption in high-volume renal care centers.',
    features: [
      'Bicarbonate and acetate dialysis capabilities with sequential ultrafiltration',
      'Automated non-invasive blood pressure monitoring integrated into workflow',
      'Fully automated thermal disinfection and chemical cleaning cycles',
      'Dual roller blood peristaltic pumps with micro-adjustment',
      'Integrated battery backup ensuring 30 minutes of uninterrupted patient safety'
    ],
    tags: ['Hemodialysis', 'Auto Disinfection', 'Double Pump'],
    badge: 'BEST SELLER',
    quickFilters: ['bestseller', 'ce'],
    ceCertified: true
  },
  {
    id: 'udia-hd1',
    model: 'UDIA-HD1',
    brand: 'Unimed',
    origin: 'Turkiye',
    category: 'hemodialysis',
    series: 'hd',
    legacyCategory: 'hemodialysis',
    subCategory: 'Hemodialysis Systems',
    formalName: 'Hemodialysis & On-line Hemodiafiltration (HDF) Systems',
    description: 'Compact single-pump hemodialysis machine engineered for community nephrology clinics, isolation wards, and flexible hospital placement.',
    features: [
      'Compact footprint with high-stability rolling locking casters',
      'Intuitive single-glance user interface requiring minimal operator training',
      '30-minute emergency battery backup',
      'Efficient hydraulic circuitry minimizing dialysate water and electricity usage'
    ],
    tags: ['Single Pump', 'Compact Renal', 'Battery Backup'],
    badge: null,
    quickFilters: ['ce'],
    ceCertified: true
  },

  // =========================================================================
  // 14. PATIENT CARE & LIFE SUPPORT
  // =========================================================================
  {
    id: 'benevision-n17',
    model: 'BeneVision N17',
    brand: 'Mindray',
    origin: 'China',
    category: 'lifesupport',
    series: 'monitor',
    legacyCategory: 'lifesupport',
    subCategory: 'Patient Care & Life Support',
    formalName: 'Modular Patient Monitoring & Life Support Systems',
    description: 'Modular high-acuity patient monitor featuring a 17-inch multi-touch display, multi-parameter plug-and-play modules, and clinical decision support tools.',
    features: [
      '17-inch anti-glare capacitive multi-touch clinical display',
      'Plug-and-play multi-parameter module rack (ECG, SpO2, NIBP, IBP, Temp, EtCO2)',
      'Advanced hemodynamic parameters: PiCCO, ScvO2, C.O., and neuromuscular transmission',
      'Automated ST segment elevation and 27 types of cardiac arrhythmia analysis',
      'Seamless bi-directional integration with central nursing stations and hospital EMR'
    ],
    tags: ['17" ICU Monitor', 'Modular Slots', 'Multi-Parameter'],
    badge: 'NEW',
    quickFilters: ['new', 'ce', 'stat'],
    ceCertified: true
  },
  {
    id: 'sv300-ventilator',
    model: 'SV300',
    brand: 'Mindray',
    origin: 'China',
    category: 'lifesupport',
    series: 'ventilator',
    legacyCategory: 'lifesupport',
    subCategory: 'Patient Care & Life Support',
    formalName: 'Critical Care ICU Mechanical Ventilators',
    description: 'Comprehensive high-performance mechanical ventilator designed for adult, pediatric, and neonatal ICU and intermediate respiratory care.',
    features: [
      'Invasive and non-invasive ventilation modes (CPAP/PSV, DuoLevel, PRVC, APRV)',
      'High-performance internal turbine eliminates requirement for wall air piping',
      'Integrated volumetric CO2 measurement and SpO2 monitoring',
      'Comprehensive lung mechanics recruitment tools (Inflection point calculation)',
      'Detachable 12.1-inch color touchscreen display for flexible bed-side mounting'
    ],
    tags: ['ICU Ventilator', 'Turbine Driven', 'Pediatric to Adult'],
    badge: 'BEST SELLER',
    quickFilters: ['bestseller', 'ce', 'stat'],
    ceCertified: true
  },
  {
    id: 'mago-4',
    model: 'Mago 4',
    brand: 'Eurospital',
    origin: 'Italy',
    category: 'lifesupport',
    series: 'elisa',
    legacyCategory: 'lifesupport',
    subCategory: 'Patient Care & Life Support',
    formalName: 'Automated ELISA Microplate Processing Systems',
    description: 'Fully automated ELISA processor capable of reading, washing, dispensing, and incubating complete 4-plate immunoassay panels simultaneously.',
    features: [
      '4-plate parallel processing capacity with individual thermal incubators',
      'Independent liquid handling and aspiration probes with liquid level sensing',
      'Continuous slide and plate loading mechanism without protocol delay',
      'High-precision onboard microplate photometer with 8 optical channels'
    ],
    tags: ['4-Plate ELISA', 'Automated Washer', 'Liquid Handling'],
    badge: null,
    quickFilters: ['ce'],
    ceCertified: true
  }
];

// 2. High-Tech Custom Medical Equipment SVG Generators
function getProductSVG(product) {
  const cat = product.category;

  // Computed Tomography (CT) Systems
  if (cat === 'ct-scan') {
    return `
      <svg viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg" class="equip-svg" aria-hidden="true">
        <!-- CT Scanner Gantry -->
        <rect x="25" y="15" width="60" height="90" rx="14" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.8"/>
        <rect x="30" y="20" width="50" height="80" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
        
        <!-- Large Gantry Bore (Circular Ring) -->
        <circle cx="55" cy="60" r="26" fill="#0f172a" stroke="#008cd6" stroke-width="2.5"/>
        <circle cx="55" cy="60" r="21" fill="#1e293b" stroke="#38bdf8" stroke-width="1" stroke-dasharray="3 2"/>
        <circle cx="55" cy="60" r="16" fill="#0f172a"/>
        
        <!-- Laser alignment crosshair -->
        <line x1="55" y1="36" x2="55" y2="84" stroke="#ef4444" stroke-width="0.8" stroke-dasharray="2 2" opacity="0.8"/>
        <line x1="31" y1="60" x2="79" y2="60" stroke="#ef4444" stroke-width="0.8" stroke-dasharray="2 2" opacity="0.8"/>
        
        <!-- Gantry Status Console / Indicator -->
        <rect x="38" y="24" width="34" height="6" rx="2" fill="#0284c7"/>
        <circle cx="43" cy="27" r="1.5" fill="#10b981"/>
        <circle cx="48" cy="27" r="1.5" fill="#ffffff"/>
        
        <!-- Motorized Patient Couch Table -->
        <path d="M 52 68 L 138 68 L 140 76 L 50 76 Z" fill="#e2e8f0" stroke="#64748b" stroke-width="1.2"/>
        <rect x="56" y="66" width="78" height="4" rx="1" fill="#0284c7" opacity="0.85"/>
        
        <!-- Table Pedestal Base -->
        <path d="M 85 76 L 125 76 L 122 105 L 88 105 Z" fill="#cbd5e1" stroke="#94a3b8" stroke-width="1.2"/>
        <rect x="80" y="104" width="50" height="6" rx="2" fill="#475569"/>
        <line x1="90" y1="88" x2="120" y2="88" stroke="#94a3b8" stroke-width="1"/>
        
        <!-- Subtle Brand Accent -->
        <rect x="25" y="98" width="60" height="4" fill="#008cd6"/>
      </svg>
    `;
  }

  // Magnetic Resonance Imaging (MRI) Systems
  if (cat === 'mri-scan') {
    return `
      <svg viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg" class="equip-svg" aria-hidden="true">
        <!-- Superconducting Magnet Casing -->
        <rect x="22" y="12" width="70" height="96" rx="18" fill="#f8fafc" stroke="#64748b" stroke-width="1.8"/>
        <rect x="27" y="17" width="60" height="86" rx="14" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
        
        <!-- Deep Cylindrical Bore -->
        <circle cx="57" cy="60" r="30" fill="#090d16" stroke="#008cd6" stroke-width="3"/>
        <circle cx="57" cy="60" r="24" fill="#1e293b" stroke="#06b6d4" stroke-width="1.5"/>
        <circle cx="57" cy="60" r="18" fill="#020617" stroke="#38bdf8" stroke-width="1" stroke-dasharray="4 2"/>
        
        <!-- Magnetic Resonance Glow / Field Effect -->
        <path d="M 40 60 Q 57 45 74 60 T 40 60" stroke="#38bdf8" stroke-width="1" fill="none" opacity="0.7"/>
        
        <!-- MRI Patient Floating Bridge Couch -->
        <path d="M 52 66 L 142 66 L 144 74 L 50 74 Z" fill="#e2e8f0" stroke="#475569" stroke-width="1.2"/>
        <rect x="58" y="64" width="80" height="3.5" rx="1" fill="#0284c7"/>
        
        <!-- Couch Pedestal & Lift Column -->
        <path d="M 90 74 L 130 74 L 126 105 L 94 105 Z" fill="#cbd5e1" stroke="#94a3b8" stroke-width="1.2"/>
        <rect x="85" y="104" width="50" height="6" rx="2" fill="#334155"/>
        
        <!-- Ambient Bore Ring Illumination & Display -->
        <rect x="42" y="20" width="30" height="5" rx="2" fill="#008cd6"/>
        <circle cx="46" cy="22.5" r="1.5" fill="#38bdf8"/>
        <circle cx="52" cy="22.5" r="1.5" fill="#ffffff"/>
        <rect x="22" y="102" width="70" height="4" fill="#0f172a"/>
      </svg>
    `;
  }

  // Chemiluminescence (CLIA)
  if (cat === 'clia') {
    return `
      <svg viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg" class="equip-svg" aria-hidden="true">
        <!-- Main Benchtop Cabinet -->
        <rect x="20" y="30" width="120" height="72" rx="8" fill="#ffffff" stroke="#94a3b8" stroke-width="1.5"/>
        <rect x="20" y="94" width="120" height="8" rx="2" fill="#0f172a"/>
        
        <!-- Smoked Acrylic Cover Window -->
        <rect x="28" y="38" width="62" height="38" rx="4" fill="#0f172a" stroke="#cbd5e1" stroke-width="1"/>
        <line x1="34" y1="48" x2="74" y2="48" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="4 2"/>
        <circle cx="45" cy="62" r="8" fill="#1e293b" stroke="#008cd6" stroke-width="1.5"/>
        <circle cx="45" cy="62" r="3" fill="#10b981"/>
        
        <!-- Pipetting Arm & Mechanical Guide -->
        <rect x="68" y="44" width="4" height="24" rx="1" fill="#94a3b8"/>
        <circle cx="70" cy="44" r="2" fill="#ef4444"/>
        
        <!-- Touchscreen Display Console -->
        <rect x="98" y="38" width="36" height="32" rx="3" fill="#1e293b" stroke="#64748b" stroke-width="1"/>
        <rect x="102" y="42" width="28" height="18" fill="#0284c7" opacity="0.85"/>
        <line x1="104" y1="54" x2="124" y2="54" stroke="#ffffff" stroke-width="1"/>
        
        <!-- Reagent Drawer Compartment -->
        <rect x="28" y="80" width="62" height="10" rx="2" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1"/>
        <circle cx="36" cy="85" r="2" fill="#ef4444"/>
        <circle cx="44" cy="85" r="2" fill="#3b82f6"/>
        <circle cx="52" cy="85" r="2" fill="#10b981"/>
        <circle cx="60" cy="85" r="2" fill="#f59e0b"/>
        
        <!-- Brand Accent -->
        <rect x="98" y="78" width="36" height="4" rx="1" fill="#008cd6"/>
      </svg>
    `;
  }

  // Hematology Analyzers
  if (cat === 'hematology') {
    return `
      <svg viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg" class="equip-svg" aria-hidden="true">
        <!-- Vertical Tower Chassis -->
        <rect x="42" y="16" width="76" height="90" rx="8" fill="#ffffff" stroke="#94a3b8" stroke-width="1.6"/>
        
        <!-- Color Scattergram Touchscreen -->
        <rect x="52" y="24" width="56" height="34" rx="4" fill="#0f172a" stroke="#cbd5e1" stroke-width="1"/>
        <path d="M 58 48 Q 66 32 74 44 T 92 36" stroke="#10b981" stroke-width="1.5" fill="none"/>
        <circle cx="82" cy="38" r="2.5" fill="#ef4444"/>
        <circle cx="70" cy="40" r="2" fill="#38bdf8"/>
        
        <!-- Aspiration Area & Sample Well -->
        <rect x="52" y="64" width="30" height="26" rx="3" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1"/>
        <line x1="67" y1="66" x2="67" y2="82" stroke="#64748b" stroke-width="2"/>
        <circle cx="67" cy="86" r="3" fill="#ef4444"/>
        
        <!-- Autoloader Tube Rack -->
        <rect x="86" y="64" width="22" height="26" rx="2" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1"/>
        <line x1="90" y1="68" x2="90" y2="84" stroke="#a855f7" stroke-width="2.5"/>
        <line x1="97" y1="68" x2="97" y2="84" stroke="#ef4444" stroke-width="2.5"/>
        <line x1="104" y1="68" x2="104" y2="84" stroke="#3b82f6" stroke-width="2.5"/>
        
        <!-- Base Platform -->
        <rect x="36" y="104" width="88" height="6" rx="2" fill="#0f172a"/>
        <rect x="42" y="98" width="76" height="3" fill="#008cd6"/>
      </svg>
    `;
  }

  // Modular Automation
  if (cat === 'modular-automation') {
    return `
      <svg viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg" class="equip-svg" aria-hidden="true">
        <!-- Automation Track Rail -->
        <rect x="15" y="65" width="130" height="14" rx="3" fill="#334155" stroke="#64748b" stroke-width="1.2"/>
        <line x1="20" y1="72" x2="140" y2="72" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="5 3"/>
        
        <!-- Analytical Module Station Left -->
        <rect x="22" y="24" width="40" height="42" rx="4" fill="#ffffff" stroke="#94a3b8" stroke-width="1.4"/>
        <rect x="26" y="28" width="32" height="16" fill="#0f172a"/>
        <circle cx="42" cy="54" r="5" fill="#f1f5f9" stroke="#008cd6" stroke-width="1.5"/>
        
        <!-- Robotic Sample Transfer Gantry -->
        <path d="M 68 18 L 92 18 L 92 64 L 68 64 Z" fill="#ffffff" stroke="#94a3b8" stroke-width="1.4"/>
        <rect x="76" y="26" width="8" height="28" rx="1" fill="#475569"/>
        <circle cx="80" cy="56" r="3" fill="#ef4444"/>
        
        <!-- Analytical Module Station Right -->
        <rect x="98" y="24" width="40" height="42" rx="4" fill="#ffffff" stroke="#94a3b8" stroke-width="1.4"/>
        <rect x="102" y="28" width="32" height="16" fill="#0f172a"/>
        <circle cx="118" cy="54" r="5" fill="#f1f5f9" stroke="#10b981" stroke-width="1.5"/>
        
        <!-- Base Support Legs -->
        <rect x="25" y="79" width="10" height="26" fill="#cbd5e1"/>
        <rect x="75" y="79" width="10" height="26" fill="#cbd5e1"/>
        <rect x="125" y="79" width="10" height="26" fill="#cbd5e1"/>
        <rect x="15" y="103" width="130" height="5" rx="2" fill="#0f172a"/>
      </svg>
    `;
  }

  // Diagnostic Ultrasound Systems
  if (cat === 'ultrasound') {
    return `
      <svg viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg" class="equip-svg" aria-hidden="true">
        <!-- Articulated High-Res Monitor -->
        <rect x="52" y="12" width="56" height="38" rx="3" fill="#ffffff" stroke="#64748b" stroke-width="1.4"/>
        <rect x="56" y="16" width="48" height="30" rx="2" fill="#0f172a"/>
        <path d="M 60 38 Q 72 22 84 32 T 98 26" stroke="#008cd6" stroke-width="1.4" fill="none"/>
        <circle cx="78" cy="30" r="3" fill="#ef4444" opacity="0.8"/>
        
        <!-- Articulating Arm Stand -->
        <rect x="77" y="50" width="6" height="14" fill="#94a3b8"/>
        
        <!-- Floating Keyboard Console & Trackball -->
        <polygon points="40,64 120,64 112,74 48,74" fill="#ffffff" stroke="#94a3b8" stroke-width="1.2"/>
        <circle cx="80" cy="69" r="3.5" fill="#0284c7"/>
        <rect x="54" y="66" width="18" height="4" rx="1" fill="#cbd5e1"/>
        
        <!-- Mobile Cart Body & Probe Cables -->
        <rect x="62" y="74" width="36" height="26" rx="4" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.2"/>
        <path d="M 48 70 C 44 80 56 86 64 82" stroke="#334155" stroke-width="1.5" fill="none"/>
        
        <!-- Rolling Base Wheels -->
        <circle cx="56" cy="106" r="4.5" fill="#334155"/>
        <circle cx="104" cy="106" r="4.5" fill="#334155"/>
        <rect x="50" y="100" width="60" height="5" rx="2" fill="#cbd5e1"/>
      </svg>
    `;
  }

  // Digital Radiography (X-Ray) Systems
  if (cat === 'x-ray') {
    return `
      <svg viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg" class="equip-svg" aria-hidden="true">
        <!-- Overhead Tube Stand Column -->
        <rect x="74" y="12" width="12" height="34" fill="#cbd5e1" stroke="#94a3b8" stroke-width="1"/>
        <rect x="62" y="44" width="36" height="18" rx="4" fill="#ffffff" stroke="#475569" stroke-width="1.5"/>
        
        <!-- Collimator Beam Light & Tube Head -->
        <circle cx="80" cy="53" r="5" fill="#0f172a" stroke="#008cd6" stroke-width="1.5"/>
        <polygon points="72,62 88,62 108,82 52,82" fill="#0284c7" opacity="0.12"/>
        
        <!-- 4-Way Floating Examination Table -->
        <rect x="25" y="82" width="110" height="8" rx="2" fill="#ffffff" stroke="#64748b" stroke-width="1.4"/>
        <rect x="60" y="90" width="40" height="16" fill="#cbd5e1" stroke="#94a3b8" stroke-width="1"/>
        <rect x="45" y="104" width="70" height="6" rx="2" fill="#334155"/>
        
        <!-- Wall Bucky Detector Stand (Right) -->
        <rect x="136" y="24" width="8" height="68" rx="2" fill="#475569"/>
        <rect x="130" y="42" width="14" height="26" rx="2" fill="#ffffff" stroke="#008cd6" stroke-width="1.2"/>
      </svg>
    `;
  }

  // Hemodialysis Systems
  if (cat === 'hemodialysis') {
    return `
      <svg viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg" class="equip-svg" aria-hidden="true">
        <!-- Dialysis Machine Cabinet Tower -->
        <rect x="52" y="14" width="56" height="92" rx="8" fill="#ffffff" stroke="#94a3b8" stroke-width="1.5"/>
        
        <!-- Swivel Touchscreen UI -->
        <rect x="60" y="22" width="40" height="24" rx="3" fill="#0f172a" stroke="#cbd5e1" stroke-width="1"/>
        <path d="M 64 34 L 72 30 L 80 36 L 88 28" stroke="#10b981" stroke-width="1.4" fill="none"/>
        <line x1="64" y1="40" x2="94" y2="40" stroke="#008cd6" stroke-width="1"/>
        
        <!-- Dual Peristaltic Blood Pumps -->
        <circle cx="68" cy="58" r="8" fill="#f1f5f9" stroke="#475569" stroke-width="1.5"/>
        <circle cx="68" cy="58" r="3" fill="#b91c1c"/>
        <circle cx="90" cy="58" r="8" fill="#f1f5f9" stroke="#475569" stroke-width="1.5"/>
        <circle cx="90" cy="58" r="3" fill="#008cd6"/>
        
        <!-- Dialyzer Filter Cylinder (Right bracket) -->
        <rect x="110" y="36" width="10" height="42" rx="3" fill="#ffffff" stroke="#ef4444" stroke-width="1.4"/>
        <line x1="115" y1="38" x2="115" y2="76" stroke="#008cd6" stroke-width="1" stroke-dasharray="3 2"/>
        
        <!-- Blood Line Tubing Curves -->
        <path d="M 68 64 C 68 76 110 68 110 60" stroke="#b91c1c" stroke-width="1.4" fill="none"/>
        <path d="M 90 64 C 90 82 110 76 110 72" stroke="#0284c7" stroke-width="1.4" fill="none"/>
        
        <!-- Caster Base -->
        <rect x="46" y="104" width="68" height="6" rx="2" fill="#0f172a"/>
        <circle cx="52" cy="112" r="3" fill="#475569"/>
        <circle cx="108" cy="112" r="3" fill="#475569"/>
      </svg>
    `;
  }

  // Patient Care & Life Support
  if (cat === 'lifesupport') {
    return `
      <svg viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg" class="equip-svg" aria-hidden="true">
        <!-- Patient Monitor Enclosure -->
        <rect x="36" y="20" width="88" height="66" rx="8" fill="#ffffff" stroke="#94a3b8" stroke-width="1.6"/>
        <rect x="42" y="26" width="76" height="54" rx="4" fill="#0f172a"/>
        
        <!-- Vital Signs Waveforms -->
        <!-- ECG Green Wave -->
        <path d="M 46 40 L 58 40 L 61 32 L 64 48 L 67 36 L 70 42 L 72 40 L 90 40" stroke="#10b981" stroke-width="1.5" fill="none"/>
        <text x="96" y="42" fill="#10b981" font-size="9" font-family="sans-serif" font-weight="bold">72</text>
        
        <!-- SpO2 Cyan Wave -->
        <path d="M 46 54 Q 54 46 62 54 T 78 54 T 90 54" stroke="#008cd6" stroke-width="1.5" fill="none"/>
        <text x="96" y="56" fill="#008cd6" font-size="9" font-family="sans-serif" font-weight="bold">99</text>
        
        <!-- NIBP Yellow Line -->
        <text x="46" y="70" fill="#f59e0b" font-size="8" font-family="sans-serif">NIBP 120/80</text>
        
        <!-- Top Alarm Bar Light -->
        <rect x="65" y="16" width="30" height="4" rx="2" fill="#ef4444"/>
        
        <!-- Base Mount Stand -->
        <rect x="74" y="86" width="12" height="18" fill="#cbd5e1"/>
        <rect x="55" y="102" width="50" height="6" rx="2" fill="#334155"/>
      </svg>
    `;
  }

  // Generic Diagnostic / POCT / Urinalysis / HbA1c / Electrolyte / Blood Gas fallback
  return `
    <svg viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg" class="equip-svg" aria-hidden="true">
      <!-- Modern Laboratory Analyzer Unit -->
      <rect x="30" y="25" width="100" height="70" rx="8" fill="#ffffff" stroke="#94a3b8" stroke-width="1.5"/>
      <rect x="30" y="90" width="100" height="8" rx="2" fill="#0f172a"/>
      
      <!-- Diagnostic Screen -->
      <rect x="38" y="35" width="48" height="34" rx="3" fill="#0f172a" stroke="#cbd5e1" stroke-width="1"/>
      <line x1="44" y1="46" x2="74" y2="46" stroke="#008cd6" stroke-width="1.5"/>
      <line x1="44" y1="54" x2="68" y2="54" stroke="#10b981" stroke-width="1.5"/>
      
      <!-- Cartridge Slot & Pipette Well -->
      <rect x="94" y="40" width="26" height="14" rx="2" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1"/>
      <circle cx="102" cy="47" r="2.5" fill="#b91c1c"/>
      <circle cx="112" cy="47" r="2.5" fill="#008cd6"/>
      
      <rect x="94" y="60" width="26" height="8" rx="1.5" fill="#e2e8f0"/>
      <rect x="38" y="78" width="48" height="4" fill="#008cd6"/>
    </svg>
  `;
}

// 3. Render Catalog Items (with Unimed Styling & Badges)
const ITEMS_PER_PAGE = 9;
let visibleCount = ITEMS_PER_PAGE;
let currentFilteredList = [];

function renderCatalog(filteredProducts, isAppend = false) {
  const container = document.getElementById('products-grid-container');
  const countElement = document.getElementById('catalog-results-count');
  const loadMoreBtn = document.getElementById('load-more-btn');
  
  if (!container) return;
  
  currentFilteredList = filteredProducts;
  
  if (countElement) {
    countElement.textContent = filteredProducts.length;
  }
  
  if (filteredProducts.length === 0) {
    container.innerHTML = `
      <div class="empty-state-box text-center" style="grid-column: 1 / -1; padding: 60px 20px;">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="margin: 0 auto 16px;">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <h4 style="font-size: 1.25rem; font-weight: 700; color: #0f172a; margin-bottom: 8px;">No Clinical Models Found</h4>
        <p style="font-size: 0.9rem; color: #64748b;">Try adjusting your category selection, quick filters, or search keywords.</p>
        <button onclick="resetAllFilters()" class="btn-reset-filters mt-4" style="padding: 6px 18px; border-radius: 9999px; background: #008cd6; color: #fff; border: none; font-size: 0.85rem; font-weight: 600; cursor: pointer;">Show All Products</button>
      </div>
    `;
    if (loadMoreBtn) loadMoreBtn.style.display = 'none';
    return;
  }

  const itemsToDisplay = filteredProducts.slice(0, visibleCount);
  
  let html = '';
  itemsToDisplay.forEach(product => {
    // Badge logic: 'NEW' (green), 'BEST SELLER' (gold), or null
    let badgeHTML = '';
    if (product.badge === 'NEW') {
      badgeHTML = `<span class="product-badge badge-new">NEW</span>`;
    } else if (product.badge === 'BEST SELLER') {
      badgeHTML = `<span class="product-badge badge-bestseller">BEST SELLER</span>`;
    }

    // Category display name
    const categoryUpper = (product.subCategory || product.category).toUpperCase();

    // Feature tags pills (like Unimed)
    let tagsHTML = '';
    if (product.tags && product.tags.length > 0) {
      tagsHTML = product.tags.map(tag => `
        <span class="feature-tag">
          ${tag}
        </span>
      `).join('');
    }

    html += `
      <div class="product-card" data-id="${product.id}">
        <div class="product-img-box">
          ${getProductSVG(product)}
          ${badgeHTML}
          <div class="product-origin-badge">${product.origin}</div>
        </div>

        <div class="product-info-box">
          <div class="product-category-name">${categoryUpper}</div>
          <h3 class="product-model-name">${product.model}</h3>
          <div class="product-brand-line">Brand: <strong>${product.brand}</strong></div>
          <p class="product-desc-text">
            ${product.description}
          </p>

          <div class="product-tags-row">
            ${tagsHTML}
          </div>

          <div class="product-card-footer">
            <span class="cert-pill">CE CERTIFIED</span>
            <div class="product-action-group">
              <button class="product-spec-btn" onclick="openSpecModal('${product.id}')" type="button">Specs</button>
              <button class="product-card-cta" onclick="openEnquiryModal('${product.model}', '${product.brand}')" type="button">Quote</button>
            </div>
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;

  // Manage Load More button visibility
  if (loadMoreBtn) {
    if (visibleCount >= filteredProducts.length) {
      loadMoreBtn.style.display = 'none';
    } else {
      loadMoreBtn.style.display = 'inline-block';
      loadMoreBtn.textContent = `LOAD MORE PRODUCTS (${filteredProducts.length - visibleCount} REMAINING)`;
    }
  }

  // Refresh lucide icons if available
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
}

// 4. Filtering, Sorting & Search Controller
let activeCategory = 'all';
let activeSubCategory = 'all';
let activeQuickFilter = 'all';
let activeBrand = 'all';
let searchQuery = '';
let currentSort = 'default';

// Category and Series mapping helper
function matchCategory(product, cat, subCat = 'all') {
  if (cat === 'all') return true;

  let matchesCat = false;
  if (cat === product.category) {
    matchesCat = true;
  } else if (cat === 'ivd') {
    matchesCat = ['clia', 'hematology', 'modular-automation', 'urinalysis-feces', 'glycohemoglobin', 'blood-gas', 'electrolyte', 'poct'].includes(product.category) || product.legacyCategory === 'ivd';
  } else if (cat === 'imaging') {
    matchesCat = ['ct-scan', 'mri-scan', 'x-ray', 'ultrasound'].includes(product.category) || product.legacyCategory === 'imaging';
  } else if (cat === 'hemodialysis') {
    matchesCat = product.category === 'hemodialysis' || product.legacyCategory === 'hemodialysis';
  } else if (cat === 'lifesupport') {
    matchesCat = product.category === 'lifesupport' || product.legacyCategory === 'lifesupport';
  }

  if (!matchesCat) return false;
  if (!subCat || subCat === 'all') return true;
  if (subCat === 'cce-5' || subCat === 'cee-5') {
    return product.series === 'cce-5' || product.series === 'cee-5';
  }
  return product.series === subCat;
}

function matchQuickFilter(product, filter) {
  if (filter === 'all') return true;
  if (!product.quickFilters) return false;
  return product.quickFilters.includes(filter);
}

function applyFilters() {
  let filtered = productsData.filter(product => {
    const matchesCat = matchCategory(product, activeCategory, activeSubCategory);
    const matchesBrand = activeBrand === 'all' || product.brand.toLowerCase() === activeBrand.toLowerCase();
    const matchesQuick = matchQuickFilter(product, activeQuickFilter);
    
    const term = searchQuery.toLowerCase().trim();
    let matchesSearch = true;
    if (term) {
      matchesSearch = 
        product.model.toLowerCase().includes(term) ||
        product.brand.toLowerCase().includes(term) ||
        product.subCategory.toLowerCase().includes(term) ||
        (product.formalName && product.formalName.toLowerCase().includes(term)) ||
        product.description.toLowerCase().includes(term) ||
        product.features.some(f => f.toLowerCase().includes(term)) ||
        (product.tags && product.tags.some(t => t.toLowerCase().includes(term)));
    }
      
    return matchesCat && matchesBrand && matchesQuick && matchesSearch;
  });

  // Apply sorting
  if (currentSort === 'name-asc' || currentSort === 'model') {
    filtered.sort((a, b) => a.model.localeCompare(b.model));
  } else if (currentSort === 'name-desc') {
    filtered.sort((a, b) => b.model.localeCompare(a.model));
  } else if (currentSort === 'newest') {
    filtered.sort((a, b) => (b.badge === 'NEW' ? 1 : 0) - (a.badge === 'NEW' ? 1 : 0));
  }

  renderCatalog(filtered);
}

function resetAllFilters() {
  activeCategory = 'all';
  activeSubCategory = 'all';
  activeQuickFilter = 'all';
  activeBrand = 'all';
  searchQuery = '';
  currentSort = 'default';
  visibleCount = ITEMS_PER_PAGE;

  // Reset accordions
  document.querySelectorAll('.category-accordion-item').forEach(item => {
    item.classList.remove('open', 'active');
  });
  document.querySelectorAll('.cat-accordion-header').forEach(header => {
    header.setAttribute('aria-expanded', 'false');
    header.classList.remove('active-all');
  });

  // Highlight "All Products"
  const allHeader = document.querySelector('.cat-accordion-header[data-category="all"]');
  if (allHeader) allHeader.classList.add('active-all');
  const allItem = document.querySelector('.category-accordion-item[data-category="all"]');
  if (allItem) allItem.classList.add('active');

  // Reset all subcat buttons to default "all"
  document.querySelectorAll('.subcat-btn').forEach(btn => {
    if (btn.getAttribute('data-sub') === 'all') {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Quick Filters reset
  document.querySelectorAll('[data-quick-filter]').forEach(b => b.classList.remove('active'));
  const allQuickBtn = document.querySelector('[data-quick-filter="all"]');
  if (allQuickBtn) allQuickBtn.classList.add('active');

  // Manufacturers reset
  document.querySelectorAll('[data-filter-brand]').forEach(b => b.classList.remove('active'));
  const allBrandBtn = document.querySelector('[data-filter-brand="all"]');
  if (allBrandBtn) allBrandBtn.classList.add('active');

  const searchInput = document.getElementById('product-search');
  if (searchInput) searchInput.value = '';

  const sortSelect = document.getElementById('product-sort');
  if (sortSelect) sortSelect.value = 'default';

  applyFilters();
}

function selectCategory(category, subCategory = 'all') {
  activeCategory = category;
  activeSubCategory = subCategory;

  document.querySelectorAll('.category-accordion-item').forEach(item => item.classList.remove('open', 'active'));
  document.querySelectorAll('.cat-accordion-header').forEach(h => {
    h.setAttribute('aria-expanded', 'false');
    h.classList.remove('active-all');
  });

  if (category === 'all') {
    const allHeader = document.querySelector('.cat-accordion-header[data-category="all"]');
    if (allHeader) allHeader.classList.add('active-all');
    const allItem = document.querySelector('.category-accordion-item[data-category="all"]');
    if (allItem) allItem.classList.add('active');
  } else {
    const targetItem = document.querySelector(`.category-accordion-item[data-category="${category}"]`);
    if (targetItem) {
      targetItem.classList.add('open');
      const header = targetItem.querySelector('.cat-accordion-header');
      if (header) header.setAttribute('aria-expanded', 'true');

      const targetSub = targetItem.querySelector(`.subcat-btn[data-sub="${subCategory}"]`) || targetItem.querySelector('.subcat-btn[data-sub="all"]');
      targetItem.querySelectorAll('.subcat-btn').forEach(b => b.classList.remove('active'));
      if (targetSub) targetSub.classList.add('active');
    }
  }

  visibleCount = ITEMS_PER_PAGE;
  applyFilters();
}

// 5. Setup Listeners
function setupFilterListeners() {
  // 1. Accordion Headers
  const accordionHeaders = document.querySelectorAll('.cat-accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', (e) => {
      const category = header.getAttribute('data-category');
      const parentItem = header.closest('.category-accordion-item');

      if (category === 'all') {
        // "All Products" selected
        resetAllFilters();
        return;
      }

      const isOpen = parentItem && parentItem.classList.contains('open');

      // Close all other accordions
      document.querySelectorAll('.category-accordion-item').forEach(item => {
        item.classList.remove('open', 'active');
      });
      document.querySelectorAll('.cat-accordion-header').forEach(h => {
        h.setAttribute('aria-expanded', 'false');
        h.classList.remove('active-all');
      });

      if (!isOpen && parentItem) {
        // Expand this accordion
        parentItem.classList.add('open');
        header.setAttribute('aria-expanded', 'true');
        activeCategory = category;

        // Reset subcategory within this accordion to 'all' or keep existing active
        const activeSubBtn = parentItem.querySelector('.subcat-btn.active');
        activeSubCategory = activeSubBtn ? (activeSubBtn.getAttribute('data-sub') || 'all') : 'all';
      } else {
        // It WAS open, so clicking closes it and resets to All Products!
        if (parentItem) {
          parentItem.classList.remove('open');
          header.setAttribute('aria-expanded', 'false');
        }
        activeCategory = 'all';
        activeSubCategory = 'all';

        const allHeader = document.querySelector('.cat-accordion-header[data-category="all"]');
        if (allHeader) allHeader.classList.add('active-all');
        const allItem = document.querySelector('.category-accordion-item[data-category="all"]');
        if (allItem) allItem.classList.add('active');

        if (parentItem) {
          parentItem.querySelectorAll('.subcat-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-sub') === 'all');
          });
        }
      }

      visibleCount = ITEMS_PER_PAGE;
      applyFilters();
    });
  });

  // 2. Subcategory (Series) Buttons
  const subcatButtons = document.querySelectorAll('.subcat-btn');
  subcatButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const cat = btn.getAttribute('data-cat');
      const sub = btn.getAttribute('data-sub');
      const parentItem = btn.closest('.category-accordion-item');

      if (parentItem) {
        parentItem.querySelectorAll('.subcat-btn').forEach(b => b.classList.remove('active'));
        parentItem.classList.add('open');
        const header = parentItem.querySelector('.cat-accordion-header');
        if (header) header.setAttribute('aria-expanded', 'true');
      }
      btn.classList.add('active');

      const allHeader = document.querySelector('.cat-accordion-header[data-category="all"]');
      if (allHeader) allHeader.classList.remove('active-all');

      activeCategory = cat;
      activeSubCategory = sub;
      visibleCount = ITEMS_PER_PAGE;
      applyFilters();
    });
  });

  // 3. Quick Filters (All, New Releases, Best Sellers, CE Certified, STAT)
  const quickButtons = document.querySelectorAll('[data-quick-filter]');
  quickButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      quickButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeQuickFilter = btn.getAttribute('data-quick-filter');
      visibleCount = ITEMS_PER_PAGE;
      applyFilters();
    });
  });

  // 4. Manufacturer / Brand buttons
  const brandButtons = document.querySelectorAll('[data-filter-brand]');
  brandButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      brandButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeBrand = btn.getAttribute('data-filter-brand');
      visibleCount = ITEMS_PER_PAGE;
      applyFilters();
    });
  });

  // 5. Search input
  const searchInput = document.getElementById('product-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      visibleCount = ITEMS_PER_PAGE;
      applyFilters();
    });
  }

  // 6. Sort dropdown
  const sortSelect = document.getElementById('product-sort');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      applyFilters();
    });
  }

  // 7. Load More Button
  const loadMoreBtn = document.getElementById('load-more-btn');
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      visibleCount += ITEMS_PER_PAGE;
      renderCatalog(currentFilteredList);
    });
  }
}

// 6. Technical Specifications & Quotation Modals
function openSpecModal(productId) {
  const product = productsData.find(p => p.id === productId);
  if (!product) return;

  const overlay = document.getElementById('modal-overlay-specs');
  if (!overlay) return;

  const title = document.getElementById('spec-modal-title');
  const details = document.getElementById('spec-modal-details');

  title.innerHTML = `${product.model} - Technical Specifications`;
  
  let featuresHTML = '';
  product.features.forEach(f => {
    featuresHTML += `<li style="display:flex; align-items:flex-start; gap:8px;"><span style="color:#008cd6; font-weight:bold;">✓</span> <span>${f}</span></li>`;
  });

  details.innerHTML = `
    <div style="margin-bottom: 20px; font-size: 0.92rem; border-bottom: 1px solid rgba(255,255,255,0.12); padding-bottom: 16px;">
      <div style="margin-bottom: 6px;"><strong>Formal Classification:</strong> <span style="color:#38bdf8;">${product.formalName || product.subCategory}</span></div>
      <div style="margin-bottom: 6px;"><strong>Manufacturer / Brand:</strong> ${product.brand} (${product.origin})</div>
      <div style="margin-bottom: 6px;"><strong>Regulatory Compliance:</strong> <span style="background:#0284c7; color:#fff; padding:2px 8px; border-radius:9999px; font-size:0.75rem; font-weight:bold;">CE CERTIFIED</span></div>
      <div style="margin-top: 12px; line-height: 1.6; color: #cbd5e1;">${product.description}</div>
    </div>
    <div style="margin-top: 16px;">
      <h4 style="font-family:'Plus Jakarta Sans',sans-serif; margin-bottom: 10px; font-size: 1rem; color: #ffffff; font-weight:700;">Clinical & Engineering Specifications</h4>
      <ul style="list-style:none; padding:0; display:flex; flex-direction:column; gap:8px; font-size:0.85rem; color:#e2e8f0;">
        ${featuresHTML}
      </ul>
    </div>
    <div style="margin-top: 26px; display:flex; gap:12px;">
      <button class="btn btn-primary" style="padding:10px 24px; font-size:0.88rem; flex-grow:1; border-radius:9999px; background:#008cd6; border-color:#008cd6; color:#fff; font-weight:bold; box-shadow:0 2px 8px rgba(0,140,214,0.3);" onclick="closeModal('modal-overlay-specs'); openEnquiryModal('${product.model}', '${product.brand}');">Request Hospital Quotation</button>
      <button class="btn btn-secondary" style="padding:10px 20px; font-size:0.88rem; background:transparent; border:1px solid rgba(255,255,255,0.25); color:#fff; border-radius:9999px;" onclick="closeModal('modal-overlay-specs')">Close</button>
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
    subjectInput.value = `Quotation Request: ${brandName} Model ${modelName}`;
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
window.resetAllFilters = resetAllFilters;

// 7. Initialize Catalog & URL Query Handling
document.addEventListener('DOMContentLoaded', () => {
  const catalogGrid = document.getElementById('products-grid-container');
  if (catalogGrid) {
    setupFilterListeners();

    const urlParams = new URLSearchParams(window.location.search);
    const requestedCategory = urlParams.get('cat');
    const requestedSub = urlParams.get('sub') || 'all';

    if (requestedCategory) {
      selectCategory(requestedCategory, requestedSub);
    } else {
      applyFilters();
    }
    
    updateFilterCounts();
  }
});

function updateFilterCounts() {
  const totals = productsData.reduce((acc, product) => {
    acc.all = (acc.all || 0) + 1;
    acc[product.category] = (acc[product.category] || 0) + 1;

    // Macro-groups
    if (['clia', 'hematology', 'modular-automation', 'urinalysis-feces', 'glycohemoglobin', 'blood-gas', 'electrolyte', 'poct'].includes(product.category)) {
      acc.ivd = (acc.ivd || 0) + 1;
    }
    if (['ct-scan', 'mri-scan', 'x-ray', 'ultrasound'].includes(product.category)) {
      acc.imaging = (acc.imaging || 0) + 1;
    }
    return acc;
  }, {});

  const map = {
    'all': 'count-all',
    'clia': 'count-clia',
    'hematology': 'count-hematology',
    'modular-automation': 'count-modular-automation',
    'urinalysis-feces': 'count-urinalysis-feces',
    'glycohemoglobin': 'count-glycohemoglobin',
    'blood-gas': 'count-blood-gas',
    'electrolyte': 'count-electrolyte',
    'ct-scan': 'count-ct-scan',
    'mri-scan': 'count-mri-scan',
    'x-ray': 'count-x-ray',
    'ultrasound': 'count-ultrasound',
    'poct': 'count-poct',
    'hemodialysis': 'count-hemo',
    'lifesupport': 'count-lifesupport',
    'ivd': 'count-ivd',
    'imaging': 'count-imaging'
  };

  Object.entries(map).forEach(([key, id]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = totals[key] || 0;
  });
}
