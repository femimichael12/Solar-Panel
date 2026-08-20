import { Product } from '../types';

export const PRODUCT_CATEGORIES = [
  {
    id: 'solar-panels',
    title: 'Solar Panels',
    shortDesc: 'High-efficiency Monocrystalline & Bifacial Tier-1 PV modules with 25-year performance warranties.',
    image: 'https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=800&q=80',
    count: '12+ Models',
    badge: 'Tier-1 Rated'
  },
  {
    id: 'inverters',
    title: 'Inverters',
    shortDesc: 'Pure Sine Wave hybrid, off-grid, and grid-tied inverters with Wi-Fi telemetry and smart grid switching.',
    image: 'https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=800&q=80',
    count: '15+ Models',
    badge: 'Pure Sine Wave'
  },
  {
    id: 'batteries',
    title: 'Solar Batteries',
    shortDesc: 'Ultra-durable LiFePO4 Lithium Iron Phosphate and deep-cycle tubular batteries with 6,000+ life cycles.',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80',
    count: '10+ Models',
    badge: '10-Yr Lifespan'
  },
  {
    id: 'charge-controllers',
    title: 'Charge Controllers',
    shortDesc: 'High-speed MPPT & PWM controllers optimizing solar harvest up to 99% track efficiency.',
    image: 'https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=800&q=80',
    count: '8+ Models',
    badge: '99% MPPT Track'
  },
  {
    id: 'accessories',
    title: 'Solar Accessories',
    shortDesc: 'Certified DC surge arresters, aluminum rooftop mounting brackets, heavy-duty solar cables, and MC4 kits.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    count: '24+ Items',
    badge: 'Safety Certified'
  },
  {
    id: 'solar-systems',
    title: 'Complete Solar Systems',
    shortDesc: 'All-inclusive pre-engineered packages including panels, inverters, lithium storage, rackings, and installation.',
    image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80',
    count: '6 Packages',
    badge: 'Turnkey Installed'
  }
];

export const PRODUCTS: Product[] = [
  // Solar Panels
  {
    id: 'cs-550w-mono',
    name: 'HiKu6 Monocrystalline 550W Solar Panel',
    brand: 'Canadian Solar',
    category: 'solar-panels',
    powerRating: '550W | 21.5% Efficiency',
    price: 185000,
    inStock: true,
    featured: true,
    image: 'https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=800&q=80',
    description: 'High-power dual-cell PERC module engineered for high ambient temperatures and dusty conditions with minimal power degradation.',
    specifications: {
      'Cell Type': 'Monocrystalline Half-Cell PERC',
      'Max Power (Pmax)': '550 Watts',
      'Module Efficiency': '21.5%',
      'Operating Voltage (Vmp)': '41.7V',
      'Open Circuit Voltage (Voc)': '49.6V',
      'Dimensions': '2278 × 1134 × 35 mm',
      'Weight': '27.6 kg',
      'Frame': 'Anodized Aluminium Alloy'
    },
    keyFeatures: [
      'Comprehensive 25-year linear power output warranty',
      '12-year enhanced product materials warranty',
      'High snow/wind load resistance up to 5400 Pa',
      'Optimized shading tolerance with half-cut cell design'
    ],
    warranty: '25 Years Performance / 12 Years Workmanship',
    rating: 4.9,
    reviewsCount: 42
  },
  {
    id: 'jinko-585w-tiger',
    name: 'Tiger Pro 585W N-Type Bifacial Panel',
    brand: 'JinkoSolar',
    category: 'solar-panels',
    powerRating: '585W | 22.3% Efficiency',
    price: 210000,
    inStock: true,
    featured: true,
    image: 'https://images.unsplash.com/photo-1545209568-1249fa6b2c45?auto=format&fit=crop&w=800&q=80',
    description: 'N-Type TOPCon bifacial technology harvesting up to 25% extra energy from rear-side reflection, ideal for rooftop and ground mounts.',
    specifications: {
      'Cell Type': 'N-Type TOPCon Bifacial',
      'Max Power (Pmax)': '585 Watts',
      'Module Efficiency': '22.3%',
      'Bifaciality': '80% ± 5%',
      'Operating Voltage (Vmp)': '42.8V',
      'Dimensions': '2278 × 1134 × 30 mm',
      'Weight': '32.0 kg (Dual Glass)',
      'Junction Box': 'IP68 rated with bypass diodes'
    },
    keyFeatures: [
      'N-Type technology with zero Light Induced Degradation (LID)',
      'Dual-glass design for maximum fire safety and durability',
      'Excellent low-light irradiance performance (early morning/dusk)',
      '30-year bifacial linear power warranty'
    ],
    warranty: '30 Years Performance / 15 Years Product',
    rating: 5.0,
    reviewsCount: 38
  },
  {
    id: 'longi-himo6-575w',
    name: 'Hi-MO 6 Explorer 575W Mono Panel',
    brand: 'LONGi Solar',
    category: 'solar-panels',
    powerRating: '575W | 22.1% Efficiency',
    price: 198000,
    inStock: true,
    featured: false,
    image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80',
    description: 'HPBC cell architecture delivering clean aesthetic appearance and enhanced power generation in hot tropical climates.',
    specifications: {
      'Cell Type': 'HPBC Hybrid Passivated Back Contact',
      'Max Power (Pmax)': '575 Watts',
      'Module Efficiency': '22.1%',
      'Operating Voltage (Vmp)': '43.2V',
      'Dimensions': '2278 × 1134 × 35 mm',
      'Weight': '27.5 kg',
      'Front Glass': '3.2mm tempered coated glass'
    },
    keyFeatures: [
      'Front-grid free cell design for maximum photon absorption',
      'High temperature coefficient of -0.29%/°C',
      'Anti-PID (Potential Induced Degradation) certified'
    ],
    warranty: '25 Years Performance',
    rating: 4.8,
    reviewsCount: 29
  },

  // Inverters
  {
    id: 'deye-8kw-hybrid',
    name: '8kW 48V Hybrid Solar Inverter (SUN-8K-SG01LP1)',
    brand: 'Deye',
    category: 'inverters',
    powerRating: '8000W / 48V | Dual MPPT',
    price: 1850000,
    inStock: true,
    featured: true,
    image: 'https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=800&q=80',
    description: 'Industrial-grade low voltage hybrid inverter supporting generator automatic start, grid feed-in, and seamless UPS transfer under 4ms.',
    specifications: {
      'Continuous AC Output': '8,000 Watts',
      'Surge Power': '16,000 Watts (10 sec)',
      'Nominal Battery Voltage': '48V DC',
      'Max PV Input Power': '10,400 Watts',
      'MPPT Voltage Range': '125V - 425V',
      'Transfer Time': '< 4ms (UPS grade)',
      'Display': 'Color Touch LCD + Wi-Fi App',
      'Parallel Capability': 'Up to 16 units parallel'
    },
    keyFeatures: [
      'Zero grid feedback capability with programmable export limiting',
      'Automatic Generator Start (AGS) dry contact built-in',
      'Touchscreen interface with live mobile telemetry on Solarman app',
      'Supports lead-acid, tubular and all CAN/RS485 lithium batteries'
    ],
    warranty: '5 Years Manufacturer Warranty',
    rating: 4.9,
    reviewsCount: 56
  },
  {
    id: 'growatt-5kw-spf',
    name: 'SPF 5000 ES 5kW 48V Off-Grid Inverter',
    brand: 'Growatt',
    category: 'inverters',
    powerRating: '5000W / 48V | 450V PV Input',
    price: 920000,
    inStock: true,
    featured: true,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    description: 'The most popular residential solar inverter in Nigeria. Operates with or without battery connected and features 450V high PV voltage input.',
    specifications: {
      'Continuous Output': '5,000 Watts / 5,000 VA',
      'Peak Power': '10,000 VA',
      'Battery Voltage': '48V DC',
      'Max Solar Input': '6,000 Watts',
      'Max PV Voc': '450V DC',
      'MPPT Tracking': '120V - 430V DC',
      'Connectivity': 'Built-in Wi-Fi / GPRS Shinelink'
    },
    keyFeatures: [
      'Can run directly from solar panels during the daytime without battery',
      'Sub-10ms transfer time for zero flicker on computers and TVs',
      'Parallel capability up to 6 units (30kW total)',
      'Quiet temperature-controlled cooling fans'
    ],
    warranty: '2 Years Comprehensive Warranty',
    rating: 4.9,
    reviewsCount: 88
  },
  {
    id: 'felicity-10kva-ivpm',
    name: '10kVA 48V Low Frequency Pure Sine Inverter',
    brand: 'Felicity Solar',
    category: 'inverters',
    powerRating: '10,000VA / 8000W | Heavy Copper Toroidal',
    price: 1650000,
    inStock: true,
    featured: false,
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80',
    description: 'Rugged low-frequency copper transformer built specifically for starting heavy inductive loads like 2HP pumping machines and freezers effortlessly.',
    specifications: {
      'Rated Power': '10,000 VA / 8,000 Watts',
      'Surge Capacity': '24,000 Watts (300% for 20s)',
      'Transformer Type': 'Pure Copper Heavy Toroidal',
      'DC Voltage': '48V DC',
      'AC Output': '220V/230V Pure Sine Wave',
      'Efficiency': '> 95%'
    },
    keyFeatures: [
      'Inductive load powerhouse (handles air conditioners & pumps)',
      'Adjustable charging current for battery longevity',
      'Automatic bypass and smart utility battery charger'
    ],
    warranty: '2 Years Warranty',
    rating: 4.7,
    reviewsCount: 31
  },

  // Batteries
  {
    id: 'felicity-10kwh-lifepo4',
    name: '10kWh 51.2V 200Ah Wall-Mount Lithium LiFePO4',
    brand: 'Felicity Solar',
    category: 'batteries',
    powerRating: '10.24 kWh / 51.2V 200Ah',
    price: 2650000,
    inStock: true,
    featured: true,
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80',
    description: 'Premium A-grade Grade-A LiFePO4 prismatic cell battery with smart BMS, LCD display, and 6,000+ cycles at 80% DOD.',
    specifications: {
      'Nominal Energy': '10.24 kWh',
      'Usable Energy (80% DOD)': '8.2 kWh',
      'Nominal Voltage': '51.2V',
      'Capacity': '200 Ah',
      'Cycle Life': '> 6,000 cycles @ 25°C',
      'Max Charge/Discharge': '120A continuous',
      'Communication': 'CAN / RS485 / RS232',
      'Weight': '88 kg (Wall or Floor Mount)'
    },
    keyFeatures: [
      'Over 10 years anticipated operational lifespan',
      'Built-in smart BMS with overcharge, overheat, and cell balancing protection',
      'Digital front LCD screen displaying voltage, SOC%, and temperature',
      'Parallel expansion support up to 6 units (60kWh total storage)'
    ],
    warranty: '5 Years Warranty / 10 Years Design Life',
    rating: 4.9,
    reviewsCount: 64
  },
  {
    id: 'pylontech-us5000',
    name: 'Pylontech US5000 4.8kWh 48V Lithium Battery',
    brand: 'Pylontech',
    category: 'batteries',
    powerRating: '4.8 kWh / 48V 100Ah Rack-Mount',
    price: 1750000,
    inStock: true,
    featured: true,
    image: 'https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=800&q=80',
    description: 'Tier-1 internationally certified rack-mount lithium battery known for outstanding thermal stability and 95% Depth of Discharge (DoD).',
    specifications: {
      'Nominal Energy': '4,800 Wh',
      'Usable Energy': '4,560 Wh (95% DoD)',
      'Nominal Voltage': '48V DC',
      'Discharge/Charge Current': '50A recommend, 100A max',
      'Cycle Life': '6,000+ cycles @ 90% DoD',
      'Communication': 'RS485, CAN (Plug & Play with Deye/Growatt/Victron)'
    },
    keyFeatures: [
      'Compact 19-inch server rack form factor',
      'Compatible with 98% of world-class hybrid inverter brands',
      'Self-cooling without noisy fans',
      'Expandable up to 16 batteries in a single string'
    ],
    warranty: '10 Years Manufacturer Warranty',
    rating: 5.0,
    reviewsCount: 47
  },
  {
    id: 'dyness-bx51100',
    name: 'Dyness BX51100 5.12kWh 51.2V Lithium Module',
    brand: 'Dyness',
    category: 'batteries',
    powerRating: '5.12 kWh / 51.2V 100Ah',
    price: 1580000,
    inStock: true,
    featured: false,
    image: 'https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=800&q=80',
    description: 'High safety LiFePO4 chemistry with modular stacking design, perfect for residential energy storage systems.',
    specifications: {
      'Battery Type': 'LiFePO4',
      'Capacity': '100 Ah',
      'Nominal Voltage': '51.2V',
      'Total Energy': '5.12 kWh',
      'Dimensions': '558 × 545 × 190 mm',
      'Protection': 'IP20'
    },
    keyFeatures: [
      'Natural cooling with zero ambient noise',
      'Wide operating temperature (-20°C to 50°C)',
      'Certifications: CE, UN38.3, IEC62619'
    ],
    warranty: '10 Years Standard Warranty',
    rating: 4.8,
    reviewsCount: 19
  },

  // Charge Controllers
  {
    id: 'srne-60a-mppt',
    name: 'SRNE 60A 12V/24V/36V/48V Auto MPPT Controller',
    brand: 'SRNE Solar',
    category: 'charge-controllers',
    powerRating: '60 Amp / 150V Max PV Input',
    price: 195000,
    inStock: true,
    featured: false,
    image: 'https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=800&q=80',
    description: 'Advanced dual-peak tracking MPPT solar charge controller with multi-stage charging algorithms for gel, lead-acid, and lithium batteries.',
    specifications: {
      'Rated Charge Current': '60 Amps',
      'System Voltage': '12V / 24V / 36V / 48V Auto Detect',
      'Max PV Input Voltage': '150V DC',
      'Tracking Efficiency': '≥ 99.5%',
      'Max Conversion Efficiency': '98%'
    },
    keyFeatures: [
      'Built-in LCD screen with real-time solar watt meter',
      'Bluetooth telemetry dongle support for smartphone app',
      'Full electronic protection against reverse polarity and short circuits'
    ],
    warranty: '2 Years Warranty',
    rating: 4.8,
    reviewsCount: 25
  },

  // Accessories
  {
    id: 'dc-protection-box',
    name: 'Complete Pre-Wired DC/AC Solar Protection Box',
    brand: 'Solara Pro',
    category: 'accessories',
    powerRating: 'Up to 10kVA Systems (1000V DC / 63A AC)',
    price: 145000,
    inStock: true,
    featured: false,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    description: 'Essential electrical safety enclosure containing DC breakers, Type 2 DC surge protectors (SPD), AC breakers, and changeover switch.',
    specifications: {
      'DC Breaker': '2P 1000V 32A/63A DC MCB',
      'Surge Arrester': 'Type 2 Class C 1000V 40kA DC SPD',
      'AC Protection': '63A Dual Pole AC Breaker + Surge Protector',
      'Enclosure': 'IP65 Weatherproof Flame Retardant ABS'
    },
    keyFeatures: [
      'Safeguards inverters from lightning strikes and grid voltage surges',
      'Pre-assembled and tested for clean, rapid installation',
      'Clear transparent cover with easy reset toggles'
    ],
    warranty: '3 Years Warranty',
    rating: 4.9,
    reviewsCount: 51
  },
  {
    id: 'solar-cable-6mm',
    name: 'Heavy Duty 6mm² TUV Certified Solar DC Cable (100m Roll)',
    brand: 'KBE Solar / Helukabel',
    category: 'accessories',
    powerRating: '1500V DC | 70A Current Capacity',
    price: 125000,
    inStock: true,
    featured: false,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    description: 'Tinned copper double-insulated solar cable with UV and extreme weather resistance, rated for 25+ years outdoor rooftop exposure.',
    specifications: {
      'Conductor': 'High purity tinned copper class 5',
      'Cross Section': '6.0 mm²',
      'Voltage Rating': '1.5kV DC / 1.0kV AC',
      'Temperature Range': '-40°C to +120°C',
      'UV Resistance': 'EN 50618 certified'
    },
    keyFeatures: [
      'Halogen free, flame retardant insulation',
      'Minimal voltage drop over long panel-to-inverter runs'
    ],
    warranty: '25 Years Rated Lifespan',
    rating: 5.0,
    reviewsCount: 33
  }
];
