import { ProjectPortfolio } from '../types';

export const PROJECTS: ProjectPortfolio[] = [
  {
    id: 'lekki-phase1-residential',
    title: '10kVA Hybrid Solar Villa System',
    category: 'Residential',
    capacity: '10kVA / 15.36kWh Lithium / 7.7kW Solar',
    location: 'Lekki Phase 1, Lagos State',
    clientType: 'Private 5-Bedroom Luxury Duplex',
    description: 'Turnkey residential hybrid installation powering 4 inverter air conditioners, deep freezer, double-door refrigerator, water pump, and full home lighting without relying on public grid or noisy generators.',
    image: 'https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=1000&q=80',
    componentsUsed: [
      '10kW Deye Low Voltage Hybrid Inverter',
      '3 × 5.12kWh Dyness LiFePO4 Lithium Battery Rack',
      '14 × 550W Canadian Solar Monocrystalline Half-Cell Panels',
      'Automatic Changeover & Type 2 DC Surge Protection'
    ],
    completionYear: '2024',
    estimatedSavings: '₦680,000 / month in petrol & diesel'
  },
  {
    id: 'maitama-abuja-executive',
    title: '15kVA 3-Phase Solar & Storage System',
    category: 'Residential',
    capacity: '15kVA 3-Phase / 20.48kWh Lithium / 11kW Solar',
    location: 'Maitama District, Abuja FCT',
    clientType: 'Diplomatic Residence & Home Office',
    description: 'High-availability 3-phase solar microgrid with zero grid export, automatic backup transfer, and remote energy logging for an executive diplomatic home.',
    image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1000&q=80',
    componentsUsed: [
      '15kVA 3-Phase Hybrid Inverter Array',
      '2 × 10.24kWh Felicity Solar LiFePO4 Wall Mounts',
      '20 × 585W Jinko Tiger Pro TOPCon Bifacial Panels',
      'Smart Generator Auto-Start Controller'
    ],
    completionYear: '2024',
    estimatedSavings: '₦1,150,000 / month diesel reduction'
  },
  {
    id: 'vi-fintech-hub',
    title: '30kVA Commercial Office Solar Microgrid',
    category: 'Commercial',
    capacity: '30kVA / 40kWh Lithium / 22kW Solar PV',
    location: 'Victoria Island, Lagos State',
    clientType: 'Fintech HQ & 24/7 Operations Room',
    description: 'Zero-downtime power solution ensuring uninterruptible connectivity for 65+ employee workstations, server racks, biometric security, and executive suites.',
    image: 'https://images.unsplash.com/photo-1545209568-1249fa6b2c45?auto=format&fit=crop&w=1000&q=80',
    componentsUsed: [
      '3 × 10kW Growatt MAX Parallel Inverters',
      '4 × 10kWh High-Density Server Rack Lithium Units',
      '40 × 550W Tier-1 Monocrystalline Modules',
      'Integrated SCADA Energy Telemetry'
    ],
    completionYear: '2023',
    estimatedSavings: '₦2,400,000 / month operational savings'
  },
  {
    id: 'bodija-private-hospital',
    title: '20kVA Medical Clinic & Pharmacy Backup',
    category: 'Institutional',
    capacity: '20kVA / 30.72kWh Lithium / 15kW Solar',
    location: 'Bodija, Ibadan, Oyo State',
    clientType: 'Private Diagnostic Clinic & Vaccine Cold Room',
    description: 'Critical life-support and cold-chain vaccine storage system equipped with ultra-fast sub-4ms transfer time to avoid power dips during surgical and laboratory tests.',
    image: 'https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=1000&q=80',
    componentsUsed: [
      '20kVA Pure Sine Wave Industrial Inverter',
      '6 × 5.12kWh LiFePO4 Medical-Grade Storage Modules',
      '28 × 550W Canadian Solar Modules',
      'Heavy-duty Galvanized Steel Roof Racking'
    ],
    completionYear: '2023',
    estimatedSavings: '₦1,850,000 / month fuel & grid savings'
  },
  {
    id: 'ikeja-gra-residential',
    title: '5kVA Smart Standard Home Solar',
    category: 'Residential',
    capacity: '5kVA / 5.12kWh Lithium / 4.4kW Solar',
    location: 'Ikeja GRA, Lagos State',
    clientType: '4-Bedroom Family Home',
    description: 'Clean, quiet energy system eliminating generator noise. Powers home entertainment, inverter fridge, washing machine, and lighting 24/7.',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1000&q=80',
    componentsUsed: [
      '5kW 48V Growatt SPF 5000ES Inverter',
      '5.12kWh Felicity Solar Wall-Mount Lithium Battery',
      '8 × 550W Tier-1 Solar Panels',
      'Wi-Fi Mobile Telemetry App Setup'
    ],
    completionYear: '2024',
    estimatedSavings: '₦390,000 / month petrol cost savings'
  },
  {
    id: 'enugu-supermarket-mall',
    title: '45kVA Commercial Supermarket Array',
    category: 'Commercial',
    capacity: '45kVA 3-Phase / 60kWh Lithium / 33kW Solar PV',
    location: 'Independence Layout, Enugu State',
    clientType: 'Retail Supermarket & Bakery',
    description: 'Solar hybrid integration with commercial chillers and baking ovens running during peak sunshine hours with diesel auto-off logic.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
    componentsUsed: [
      '45kVA 3-Phase Industrial Solar Inverter System',
      '60kWh LiFePO4 Rack Cabinet Battery Bank',
      '60 × 550W Monocrystalline PV Panels',
      'Cloud Energy Analytics Portal'
    ],
    completionYear: '2023',
    estimatedSavings: '₦3,200,000 / month fuel savings'
  }
];
