import { ServiceItem } from '../types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'solar-panel-installation',
    title: 'Solar Panel Installation',
    shortDesc: 'Certified rooftop and ground-mounted solar panel arrays with precision angling for maximum tropical sunlight harvesting.',
    fullDesc: 'Our certified solar engineers design and install high-yield photovoltaic arrays tailored to your building architecture. We use corrosion-resistant anodized aluminum mounting rails, stainless steel hardware, and weather-sealed flashing to protect your roof while maximizing kilowatt-hour production year-round.',
    iconName: 'Sun',
    deliverables: [
      'Comprehensive rooftop shadow and azimuth assessment',
      'Anti-corrosive aluminum rail mounting with waterproof sealants',
      'TUV certified 6mm² pure copper cabling with MC4 weather seals',
      'Rooftop lightning and surge protection earthing system'
    ],
    turnaroundTime: '1 - 3 Days',
    idealFor: 'Residential rooftops, commercial buildings, factory sheds, and ground mounts.'
  },
  {
    id: 'system-design-audit',
    title: 'Solar System Design & Load Audit',
    shortDesc: 'Precision load profiling and computer-modeled engineering to ensure zero undersizing and maximum cost efficiency.',
    fullDesc: 'Before spending millions on equipment, our engineers conduct a physical or remote power audit. We log starting surges, harmonic distortion, and nighttime consumption curves to engineer a balanced system that will never trip when your heavy appliances turn on.',
    iconName: 'Cpu',
    deliverables: [
      'Wattmeter surge analysis for ACs, pumps, and motors',
      'Mathematical battery bank and solar array sizing report',
      'Itemized Bill of Engineering Measurement & Evaluation (BEME)',
      'Estimated monthly fuel savings and payback timeline calculation'
    ],
    turnaroundTime: '24 - 48 Hours',
    idealFor: 'Homeowners building new residences, commercial facilities, and estate developers.'
  },
  {
    id: 'inverter-installation',
    title: 'Inverter & Hybrid Setup',
    shortDesc: 'Seamless UPS-grade pure sine wave inverter installations with smart automated grid/generator switching.',
    fullDesc: 'We install world-class hybrid and off-grid inverters (Growatt, Deye, Victron, Felicity) wired cleanly into your main electrical distribution board. Our sub-4ms transfer times ensure your computers, TVs, and servers never shut off during public grid blackouts.',
    iconName: 'Zap',
    deliverables: [
      'Dedicated AC sub-distribution board with phase separation',
      'Dual-pole AC bypass and manual/automatic changeover switch',
      'Class 2 AC surge arresters to protect against grid spikes',
      'Wi-Fi telemetry module setup on your iOS/Android phone'
    ],
    turnaroundTime: '1 Day',
    idealFor: 'Offices, clinics, homes tired of noisy generators and abrupt power cuts.'
  },
  {
    id: 'battery-installation',
    title: 'Lithium Battery Storage Retrofit',
    shortDesc: 'Upgrade outdated, toxic lead-acid/tubular battery banks to long-lasting LiFePO4 lithium iron phosphate storage.',
    fullDesc: 'Replace heavy lead-acid batteries that fail every 18 months with smart LiFePO4 lithium modules rated for 10+ years (6,000+ cycles). We integrate CAN/RS485 communication protocols with your existing inverter for intelligent battery health monitoring.',
    iconName: 'BatteryCharging',
    deliverables: [
      'Safe decommission and disposal of old lead-acid batteries',
      'Wall-mount or 19-inch rack-mount lithium installation',
      'Smart Battery Management System (BMS) protocol handshake',
      'DC high-current circuit breaker and 35mm²/50mm² copper flex cables'
    ],
    turnaroundTime: 'Same Day (4 - 6 Hours)',
    idealFor: 'Existing solar/inverter owners ready for a permanent battery upgrade.'
  },
  {
    id: 'solar-maintenance',
    title: 'Solar Maintenance & Panel Cleaning',
    shortDesc: 'Routine preventative maintenance, thermal imaging inspection, and deionized panel cleaning to recover lost output.',
    fullDesc: 'Dust, soot from neighboring generators, and bird droppings can decrease solar generation by 20% to 35% in Nigerian cities. Our maintenance service includes non-abrasive panel washing, electrical connection torque checks, and battery cell balance calibration.',
    iconName: 'ShieldCheck',
    deliverables: [
      'De-ionized water wash and organic residue removal',
      'Thermal imaging audit to detect micro-cracks and hot spots',
      'Inverter heat-sink dusting and firmware updates',
      'Battery state-of-health (SoH) cell impedance test'
    ],
    turnaroundTime: 'Quarterly / Annual Service Plans',
    idealFor: 'All solar owners wishing to safeguard their equipment warranties and peak yield.'
  },
  {
    id: 'system-upgrades',
    title: 'System Upgrades & Expansion',
    shortDesc: 'Expand your existing solar capacity with additional panels, higher-rated inverters, or extra lithium storage modules.',
    fullDesc: 'As your energy requirements grow (adding new ACs or expanding office staff), we seamlessly scale up your solar array or battery storage bank. We synchronize parallel inverters and match PV strings to avoid bottlenecking your existing hardware.',
    iconName: 'TrendingUp',
    deliverables: [
      'Compatibility audit of current inverter and charge controller',
      'Parallel inverter synchronization up to 45kVA+',
      'Additional rooftop racking and string combiner expansion',
      'Recalibration of charging parameters and monitoring apps'
    ],
    turnaroundTime: '1 - 2 Days',
    idealFor: 'Growing businesses and expanding families needing more power.'
  },
  {
    id: 'troubleshooting-repair',
    title: 'Troubleshooting & Rapid Repair',
    shortDesc: 'Emergency diagnosis of faulty inverters, tripped breakers, communication errors, and underperforming arrays.',
    fullDesc: 'Is your inverter showing Error 04, 08, 51 or refusing to charge from solar? Our field technicians arrive equipped with insulation testers, DC clamp meters, and diagnostic tools to pinpoint and resolve electrical faults safely.',
    iconName: 'Wrench',
    deliverables: [
      'Comprehensive ground fault (ISO error) and polarity check',
      'BMS communication fault resolution and cell re-balancing',
      'Component repair or manufacturer warranty replacement handling',
      'Temporary emergency backup loaner equipment if needed'
    ],
    turnaroundTime: 'Same-Day Rapid Dispatch in Lagos & Abuja',
    idealFor: 'Homes or businesses facing unexpected power interruptions or inverter faults.'
  },
  {
    id: 'commercial-solar',
    title: 'Commercial & Industrial Solar',
    shortDesc: 'Turnkey MW-scale and multi-kVA solar microgrids with diesel generator auto-synchronization and zero-export controls.',
    fullDesc: 'Custom-designed heavy power solutions for hotels, schools, manufacturing plants, petrol stations, and estates. We integrate fuel saver controllers that reduce generator runtime by up to 85%, cutting hundreds of thousands of Naira in monthly diesel expenses.',
    iconName: 'Building2',
    deliverables: [
      '3-Phase industrial load balancing and power factor correction',
      'PV-Diesel Hybrid Controller for seamless gen-set synchronization',
      'SCADA / Cloud multi-point telemetry dashboard with executive reports',
      'Dedicated Service Level Agreement (SLA) with 4-hour response time'
    ],
    turnaroundTime: 'Custom Engineering (1 - 4 Weeks)',
    idealFor: 'Supermarkets, Corporate HQs, Production Factories, Hospitals, and Estates.'
  }
];
