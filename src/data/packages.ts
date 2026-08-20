import { SolarPackage } from '../types';

export const SOLAR_PACKAGES: SolarPackage[] = [
  {
    id: 'basic-home',
    name: 'Basic Home System',
    tagline: 'Ideal for 1-2 Bedroom Apartments & Essentials',
    badge: 'Popular for Starters',
    capacity: '2.5kVA / 24V Pure Sine Wave',
    inverterSpec: '2.5kVA 24V Smart Pure Sine Inverter with 60A MPPT',
    batterySpec: '2.56kWh 25.6V 100Ah LiFePO4 Lithium Battery (or 2x 220Ah Tubular)',
    panelSpec: '4x 550W Monocrystalline Half-Cell Panels (2,200 Watts)',
    estimatedPrice: 2150000,
    priceDisplay: '₦2,150,000 - ₦2,650,000',
    recommendedFor: 'Small homes, flats, and bachelor apartments needing 24/7 basic power without noise.',
    popular: false,
    applianceList: [
      { name: 'LED Lighting Points', qty: 'Up to 15 Bulbs' },
      { name: 'Standing & Ceiling Fans', qty: '3 to 4 Fans' },
      { name: 'Smart TV & Soundbar', qty: '1 - 2 Units' },
      { name: 'Decoder / DStv / Firestick', qty: '1 - 2 Units' },
      { name: 'Laptops & Smartphones', qty: 'Multiple' },
      { name: 'Wi-Fi Router & CCTV Cameras', qty: '24/7 Uninterrupted' }
    ],
    components: [
      '2.5kVA Pure Sine Wave Inverter (with built-in MPPT)',
      '2.56kWh Grade-A LiFePO4 Lithium Battery Bank',
      '4 × 550W High-Efficiency Monocrystalline Panels',
      'DC Surge Protectors, AC Changeover, & Breakers Box',
      'Aluminum Rooftop Mounting Rails & Grounding Kit',
      'Turnkey Professional Installation & Safety Testing'
    ],
    backupHours: '12 - 18 Hours (Continuous)',
    warranty: '5-Year Inverter & Battery Warranty / 25-Year Panel Output'
  },
  {
    id: 'standard-home',
    name: 'Standard Home System',
    tagline: 'Most Popular for 3-4 Bedroom Family Homes',
    badge: 'Most Popular',
    capacity: '5.0kVA / 48V Hybrid Solar System',
    inverterSpec: '5kW 48V High-Voltage Hybrid Inverter (Growatt/Deye)',
    batterySpec: '5.12kWh 51.2V 100Ah Wall-Mount LiFePO4 Lithium Battery',
    panelSpec: '8x 550W Tier-1 Mono Half-Cell Panels (4,400 Watts)',
    estimatedPrice: 4250000,
    priceDisplay: '₦4,250,000 - ₦4,950,000',
    recommendedFor: 'Medium to large families wanting to run refrigerators, all lighting, entertainment, and home office 24/7.',
    popular: true,
    applianceList: [
      { name: 'Energy-efficient Inverter Refrigerator', qty: '1 Unit (24/7)' },
      { name: 'LED Lights (Full House)', qty: '25+ Bulbs' },
      { name: 'Ceiling & Standing Fans', qty: '5 - 6 Fans' },
      { name: 'Smart TVs (Living + Bedrooms)', qty: '2 - 3 Units' },
      { name: 'Washing Machine (Daytime)', qty: 'Regular loads' },
      { name: 'Home Office Workstation & Wi-Fi', qty: 'Laptops, Monitor, Printers' },
      { name: 'Water Dispenser & CCTV Security', qty: 'Full time' }
    ],
    components: [
      '5kW 48V Smart Hybrid Inverter with Mobile Wi-Fi telemetry',
      '5.12kWh 51.2V Smart Wall-Mount LiFePO4 Battery with BMS',
      '8 × 550W Monocrystalline Tier-1 Panels',
      'Comprehensive AC/DC Protection Box & Lightning Arresters',
      'Heavy duty 6mm² pure copper solar cables (TUV certified)',
      'Certified Engineer Installation & System Commissioning'
    ],
    backupHours: '16 - 24 Hours Uninterrupted',
    warranty: '5-Year Comprehensive Warranty / 10-Year Battery Design Life'
  },
  {
    id: 'premium-home',
    name: 'Premium Home System',
    tagline: 'Heavy Duty Power for Duplexes & Full Inverter ACs',
    badge: 'Runs Inverter ACs & Freezers',
    capacity: '8kVA - 10kVA / 48V High-Capacity System',
    inverterSpec: '8kW or 10kVA Hybrid Pure Sine Wave Inverter (Dual MPPT)',
    batterySpec: '10.24kWh - 15kWh 51.2V LiFePO4 Lithium Storage Bank',
    panelSpec: '14 - 16x 550W Monocrystalline Half-Cell Panels (7,700W - 8,800W)',
    estimatedPrice: 7800000,
    priceDisplay: '₦7,800,000 - ₦9,200,000',
    recommendedFor: 'Large 4-5 bedroom duplexes, executive residences needing seamless AC cooling and deep freezing.',
    popular: false,
    applianceList: [
      { name: 'Inverter Air Conditioners (1HP / 1.5HP)', qty: '2 - 3 AC Units' },
      { name: 'Large Double-Door Refrigerator & Deep Freezer', qty: '2 Units' },
      { name: '1HP Automatic Water Pumping Machine', qty: '1 Unit' },
      { name: 'Washing Machine & Microwave', qty: 'Full access' },
      { name: 'Full Interior & Perimeter Flood Lighting', qty: '40+ Points' },
      { name: 'Smart Home Automation, Audio & CCTV', qty: 'Continuous' }
    ],
    components: [
      '8kW / 10kVA Low Voltage Hybrid Inverter with UPS transition (<4ms)',
      '10.24kWh LiFePO4 Smart Battery with Digital Telemetry',
      '14 × 550W High-Efficiency Monocrystalline Modules',
      'Industrial-grade DC Combiner, Surge Arresters & Earthing system',
      'Automatic Generator Start (AGS) integration module',
      'White-glove installation by Senior Certified Solar Engineers'
    ],
    backupHours: '24/7 Total Energy Independence',
    warranty: '5-Year Inverter & Battery Warranty / 25-Year Performance'
  },
  {
    id: 'business-commercial',
    name: 'Business & Commercial Solar',
    tagline: 'Custom Engineered for Offices, Shops, Schools & Clinics',
    badge: 'Commercial Grade',
    capacity: '15kVA - 50kVA+ 3-Phase Commercial System',
    inverterSpec: '15kVA - 50kVA 3-Phase Industrial Hybrid Inverter System',
    batterySpec: '20kWh to 60kWh+ Scalable High-Voltage Lithium Rack System',
    panelSpec: '24 to 80+ × 585W Bifacial TOPCon Solar Panels (14kW - 45kW+)',
    estimatedPrice: 14500000,
    priceDisplay: 'Custom Engineered (From ₦14.5M)',
    recommendedFor: 'Supermarkets, Corporate Offices, Diagnostic Clinics, Schools, Filling Stations, and Production Facilities.',
    popular: false,
    applianceList: [
      { name: 'Commercial AC Units & Server Rooms', qty: '5 - 12+ Units' },
      { name: 'Commercial Cold Storage & Chillers', qty: 'Multiple units' },
      { name: 'Office Computers, Laptops & Workstations', qty: '20 - 50+ PCs' },
      { name: 'Heavy Office Printers & Photocopiers', qty: '3 - 6 Units' },
      { name: 'Elevators, Borehole Pumps & Security Gates', qty: 'Full Support' },
      { name: 'Point of Sale (POS) & Billing Terminals', qty: '100% Uptime' }
    ],
    components: [
      '3-Phase Commercial Hybrid Inverters with Dual/Triple MPPT',
      'High-Density LiFePO4 Rack-Mount Battery Cabinets (6,000+ cycles)',
      'High-Efficiency Bifacial Solar Panel Array with Heavy Galvanized Mounting',
      'Grid export management & Smart Generator Auto-Synchronization',
      'Cloud-based live energy monitoring & remote engineer diagnostics',
      'Full electrical load audit, installation & annual maintenance contract'
    ],
    backupHours: '24/7 Non-Stop Power + Slashes Fuel Bills by 85%+',
    warranty: '5-Year On-Site Equipment Warranty / Priority 24/7 SLA'
  }
];
